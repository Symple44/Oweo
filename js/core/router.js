// js/core/router.js - Système de routage avancé

class OweoRouter {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.beforeHooks = [];
        this.afterHooks = [];
        this.errorHandlers = [];
        this.isNavigating = false;
        
        this.init();
    }

    /**
     * Initialisation du routeur
     */
    init() {
        // Écoute des événements de navigation
        window.addEventListener('popstate', (event) => {
            this.handlePopState(event);
        });

        // Écoute des clics sur les liens internes
        document.addEventListener('click', (event) => {
            this.handleLinkClick(event);
        });

        console.log('🧭 Router initialized');
    }

    /**
     * Enregistrement d'une route
     */
    addRoute(path, config) {
        if (typeof config === 'function') {
            config = { component: config };
        }

        const route = {
            path: path,
            component: config.component,
            title: config.title,
            meta: config.meta || {},
            beforeEnter: config.beforeEnter,
            children: config.children || [],
            exact: config.exact !== false
        };

        this.routes.set(path, route);
        
        // Enregistrement des routes enfants
        if (route.children.length > 0) {
            route.children.forEach(child => {
                const childPath = `${path}/${child.path}`.replace(/\/+/g, '/');
                this.addRoute(childPath, child);
            });
        }

        return this;
    }

    /**
     * Navigation vers une route
     */
    async navigate(path, params = {}, options = {}) {
        if (this.isNavigating) {
            console.warn('Navigation already in progress');
            return false;
        }

        try {
            this.isNavigating = true;
            
            // Normalisation du chemin
            const normalizedPath = this.normalizePath(path);
            
            // Construction de l'URL complète
            const fullPath = this.buildPath(normalizedPath, params);
            
            // Vérification si c'est la même route
            if (this.currentRoute && this.currentRoute.fullPath === fullPath && !options.force) {
                console.log('Same route, skipping navigation');
                return false;
            }

            // Exécution des hooks avant navigation
            const canNavigate = await this.executeBeforeHooks(normalizedPath, params);
            if (!canNavigate) {
                console.log('Navigation cancelled by before hook');
                return false;
            }

            // Recherche de la route
            const route = this.findRoute(normalizedPath);
            if (!route) {
                throw new Error(`Route not found: ${normalizedPath}`);
            }

            // Création de l'objet route complet
            const routeObject = {
                path: normalizedPath,
                fullPath: fullPath,
                params: params,
                query: this.parseQuery(),
                meta: route.meta,
                component: route.component
            };

            // Mise à jour de l'historique
            if (!options.replace) {
                history.pushState({ path: fullPath, params }, '', fullPath);
            } else {
                history.replaceState({ path: fullPath, params }, '', fullPath);
            }

            // Chargement de la route
            await this.loadRoute(routeObject);

            // Exécution des hooks après navigation
            await this.executeAfterHooks(routeObject);

            // Mise à jour du titre
            this.updateTitle(route.title || routeObject.path);

            // Analytics
            if (OweoUtils.analytics) {
                OweoUtils.analytics.pageView(routeObject.path);
            }

            this.currentRoute = routeObject;
            console.log(`🧭 Navigated to: ${fullPath}`);
            
            return true;

        } catch (error) {
            console.error('Navigation error:', error);
            await this.handleError(error, path);
            return false;
        } finally {
            this.isNavigating = false;
        }
    }

    /**
     * Navigation avec remplacement
     */
    replace(path, params = {}) {
        return this.navigate(path, params, { replace: true });
    }

    /**
     * Navigation arrière
     */
    back() {
        if (history.length > 1) {
            history.back();
        } else {
            this.navigate('/');
        }
    }

    /**
     * Navigation avant
     */
    forward() {
        history.forward();
    }

    /**
     * Rechargement de la route courante
     */
    reload() {
        if (this.currentRoute) {
            return this.navigate(this.currentRoute.path, this.currentRoute.params, { force: true });
        }
    }

    /**
     * Gestion de l'événement popstate
     */
    async handlePopState(event) {
        const state = event.state;
        if (state && state.path) {
            await this.navigate(state.path, state.params || {}, { replace: true });
        } else {
            // Fallback pour les URLs directes
            const path = this.getCurrentPath();
            await this.navigate(path, {}, { replace: true });
        }
    }

    /**
     * Gestion des clics sur les liens
     */
    handleLinkClick(event) {
        const link = event.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        
        // Ignorer les liens externes, avec target, ou avec modificateurs
        if (!href || 
            href.startsWith('http') || 
            href.startsWith('mailto:') || 
            href.startsWith('tel:') ||
            link.target === '_blank' ||
            event.ctrlKey || 
            event.metaKey || 
            event.shiftKey) {
            return;
        }

        // Vérifier si c'est un lien interne
        if (href.startsWith('#') || href.startsWith('/')) {
            event.preventDefault();
            this.navigate(href.replace('#', ''));
        }
    }

    /**
     * Recherche d'une route
     */
    findRoute(path) {
        // Recherche exacte d'abord
        if (this.routes.has(path)) {
            return this.routes.get(path);
        }

        // Recherche avec paramètres
        for (const [routePath, route] of this.routes) {
            if (this.matchRoute(routePath, path)) {
                return route;
            }
        }

        return null;
    }

    /**
     * Correspondance de route avec paramètres
     */
    matchRoute(routePath, path) {
        const routeSegments = routePath.split('/');
        const pathSegments = path.split('/');

        if (routeSegments.length !== pathSegments.length) {
            return false;
        }

        return routeSegments.every((segment, index) => {
            return segment.startsWith(':') || segment === pathSegments[index];
        });
    }

    /**
     * Extraction des paramètres de route
     */
    extractParams(routePath, path) {
        const routeSegments = routePath.split('/');
        const pathSegments = path.split('/');
        const params = {};

        routeSegments.forEach((segment, index) => {
            if (segment.startsWith(':')) {
                const paramName = segment.slice(1);
                params[paramName] = pathSegments[index];
            }
        });

        return params;
    }

    /**
     * Chargement d'une route
     */
    async loadRoute(routeObject) {
        try {
            // Affichage du loader
            this.showLoader();

            // Vérification de la route avant chargement
            if (routeObject.component && typeof routeObject.component.beforeEnter === 'function') {
                const canEnter = await routeObject.component.beforeEnter(routeObject);
                if (!canEnter) {
                    throw new Error('Route access denied');
                }
            }

            // Chargement du composant
            if (typeof routeObject.component === 'function') {
                await routeObject.component(routeObject);
            } else if (routeObject.component && typeof routeObject.component.render === 'function') {
                await this.renderComponent(routeObject.component, routeObject);
            } else {
                throw new Error('Invalid component');
            }

            // Masquage du loader
            this.hideLoader();

        } catch (error) {
            this.hideLoader();
            throw error;
        }
    }

    /**
     * Rendu d'un composant
     */
    async renderComponent(component, routeObject) {
        const appContainer = document.getElementById('app');
        if (!appContainer) {
            throw new Error('App container not found');
        }

        // Effacement du contenu précédent
        appContainer.innerHTML = '';

        // Création du conteneur de page
        const pageContainer = document.createElement('div');
        pageContainer.className = 'page page--active';
        pageContainer.id = `page-${routeObject.path.replace('/', '') || 'home'}`;

        // Rendu du composant
        if (typeof component.render === 'function') {
            pageContainer.innerHTML = component.render(routeObject);
        }

        // Ajout au DOM
        appContainer.appendChild(pageContainer);

        // Initialisation du composant
        if (typeof component.init === 'function') {
            await component.init(routeObject);
        }

        // Animation d'entrée
        requestAnimationFrame(() => {
            pageContainer.classList.add('page--loaded');
        });
    }

    /**
     * Gestion des erreurs
     */
    async handleError(error, attemptedPath) {
        console.error('Router error:', error);

        // Exécution des gestionnaires d'erreur
        for (const handler of this.errorHandlers) {
            try {
                const handled = await handler(error, attemptedPath);
                if (handled) return;
            } catch (handlerError) {
                console.error('Error handler failed:', handlerError);
            }
        }

        // Fallback: redirection vers 404 ou home
        if (attemptedPath !== '/404' && attemptedPath !== '/') {
            this.navigate('/404', {}, { replace: true });
        }
    }

    /**
     * Hooks avant navigation
     */
    beforeEach(hook) {
        this.beforeHooks.push(hook);
        return this;
    }

    /**
     * Hooks après navigation
     */
    afterEach(hook) {
        this.afterHooks.push(hook);
        return this;
    }

    /**
     * Gestionnaires d'erreur
     */
    onError(handler) {
        this.errorHandlers.push(handler);
        return this;
    }

    /**
     * Exécution des hooks avant navigation
     */
    async executeBeforeHooks(path, params) {
        for (const hook of this.beforeHooks) {
            try {
                const result = await hook(path, params, this.currentRoute);
                if (result === false) return false;
            } catch (error) {
                console.error('Before hook error:', error);
                return false;
            }
        }
        return true;
    }

    /**
     * Exécution des hooks après navigation
     */
    async executeAfterHooks(routeObject) {
        for (const hook of this.afterHooks) {
            try {
                await hook(routeObject, this.currentRoute);
            } catch (error) {
                console.error('After hook error:', error);
            }
        }
    }

    /**
     * Utilitaires
     */
    normalizePath(path) {
        if (!path || path === '/') return '/';
        return path.startsWith('/') ? path : `/${path}`;
    }

    buildPath(path, params) {
        let fullPath = path;
        
        // Remplacement des paramètres dans l'URL
        Object.entries(params).forEach(([key, value]) => {
            fullPath = fullPath.replace(`:${key}`, value);
        });

        return fullPath;
    }

    getCurrentPath() {
        return window.location.pathname + window.location.search + window.location.hash;
    }

    parseQuery() {
        const params = new URLSearchParams(window.location.search);
        const query = {};
        for (const [key, value] of params) {
            query[key] = value;
        }
        return query;
    }

    updateTitle(title) {
        if (title) {
            document.title = OweoConfig.seo.titleTemplate.replace('%s', title);
        }
    }

    showLoader() {
        const loader = document.getElementById('loading');
        if (loader) {
            loader.style.display = 'flex';
        }
    }

    hideLoader() {
        const loader = document.getElementById('loading');
        if (loader) {
            loader.style.display = 'none';
        }
    }

    /**
     * Méthodes publiques d'information
     */
    getCurrentRoute() {
        return this.currentRoute;
    }

    getRoutes() {
        return Array.from(this.routes.entries());
    }

    hasRoute(path) {
        return this.routes.has(this.normalizePath(path));
    }

    /**
     * Démarrage du routeur
     */
    async start(defaultRoute = '/') {
        console.log('🚀 Starting router...');
        
        // Chargement de la route initiale
        const initialPath = this.getCurrentPath() || defaultRoute;
        await this.navigate(initialPath, {}, { replace: true });
        
        console.log('✅ Router started');
    }
}

// Instance globale
window.OweoRouter = OweoRouter;