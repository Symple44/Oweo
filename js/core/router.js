// js/core/router.js - Version complète corrigée
// Routeur SPA robuste avec gestion d'erreurs et fallbacks

class OweoRouter {
    constructor() {
        this.routes = new Map();
        this.middlewares = [];
        this.errorHandlers = [];
        this.currentRoute = null;
        this.history = [];
        this.isNavigating = false;
        this.initialized = false;
        this.basePath = '';
        
        // Configuration par défaut
        this.config = {
            mode: 'hash', // 'hash' ou 'history'
            root: '/',
            enableLogging: true,
            enableTransitions: true,
            fallbackRoute: 'home',
            maxHistoryLength: 50
        };
    }

    /**
     * Initialisation du routeur
     */
    init(config = {}) {
        try {
            if (this.initialized) {
                console.log('🚦 Router déjà initialisé');
                return;
            }

            // Fusionner la configuration
            this.config = { ...this.config, ...config };
            
            // Configurer les routes par défaut
            this.setupDefaultRoutes();
            
            // Lier les événements
            this.bindEvents();
            
            // Navigation initiale
            this.handleInitialNavigation();
            
            this.initialized = true;
            this.log('🚦 Router initialisé avec succès');
            
        } catch (error) {
            console.error('🚦 Erreur initialisation router:', error);
            this.handleRouterError(error);
        }
    }

    /**
     * Configuration des routes par défaut
     */
    setupDefaultRoutes() {
        try {
            // Route d'accueil
            this.addRoute('', 'home');
            this.addRoute('home', 'home');
            
            // Routes des services
            this.addRoute('services', 'services');
            this.addRoute('outils-gestion', 'outils-gestion');
            this.addRoute('consulting-strategique', 'consulting-strategique');
            
            // Routes des démos client (avec vérification d'accès)
            this.addRoute('outil-chiffrage-demo', 'outil-chiffrage-demo', {
                requiresClientAccess: true,
                middleware: ['clientAccessCheck']
            });
            this.addRoute('import-dstv-demo', 'import-dstv-demo', {
                requiresClientAccess: true,
                middleware: ['clientAccessCheck']
            });
            
            // Routes légales
            this.addRoute('mentions-legales', 'mentions-legales');
            this.addRoute('politique-confidentialite', 'politique-confidentialite');
            this.addRoute('conditions-utilisation', 'conditions-utilisation');
            
            // Route de contact
            this.addRoute('contact', 'contact');
            
            this.log('🚦 Routes par défaut configurées');
            
        } catch (error) {
            console.error('🚦 Erreur configuration routes par défaut:', error);
        }
    }

    /**
     * Ajouter une route
     */
    addRoute(path, component, options = {}) {
        try {
            const normalizedPath = this.normalizePath(path);
            
            const route = {
                path: normalizedPath,
                component: component,
                options: {
                    requiresClientAccess: false,
                    middleware: [],
                    beforeEnter: null,
                    afterEnter: null,
                    ...options
                }
            };
            
            this.routes.set(normalizedPath, route);
            this.log(`🚦 Route ajoutée: ${normalizedPath} -> ${component}`);
            
        } catch (error) {
            console.error(`🚦 Erreur ajout route ${path}:`, error);
        }
    }

    /**
     * Ajouter un middleware
     */
    addMiddleware(name, handler) {
        try {
            this.middlewares.push({ name, handler });
            this.log(`🚦 Middleware ajouté: ${name}`);
        } catch (error) {
            console.error(`🚦 Erreur ajout middleware ${name}:`, error);
        }
    }

    /**
     * Ajouter un gestionnaire d'erreur
     */
    addErrorHandler(handler) {
        try {
            this.errorHandlers.push(handler);
            this.log('🚦 Gestionnaire d\'erreur ajouté');
        } catch (error) {
            console.error('🚦 Erreur ajout gestionnaire d\'erreur:', error);
        }
    }

    /**
     * Navigation principale
     */
    async navigate(path, options = {}) {
        try {
            if (this.isNavigating) {
                this.log('🚦 Navigation en cours, requête ignorée');
                return;
            }

            this.isNavigating = true;
            const normalizedPath = this.normalizePath(path);
            
            this.log(`🚦 Navigation vers: ${normalizedPath}`);
            
            // Vérifier si la route existe
            const route = this.routes.get(normalizedPath) || this.findDynamicRoute(normalizedPath);
            
            if (!route) {
                throw new Error(`Route non trouvée: ${normalizedPath}`);
            }

            // Exécuter les middlewares
            const middlewareResult = await this.executeMiddlewares(route, options);
            if (!middlewareResult.success) {
                this.isNavigating = false;
                return;
            }

            // Exécuter beforeEnter si défini
            if (route.options.beforeEnter) {
                const beforeResult = await route.options.beforeEnter(route, options);
                if (beforeResult === false) {
                    this.isNavigating = false;
                    return;
                }
            }

            // Effectuer la navigation
            await this.performNavigation(route, normalizedPath, options);
            
            // Exécuter afterEnter si défini
            if (route.options.afterEnter) {
                await route.options.afterEnter(route, options);
            }

            this.isNavigating = false;
            
        } catch (error) {
            this.isNavigating = false;
            console.error('🚦 Erreur navigation:', error);
            await this.handleNavigationError(error, path);
        }
    }

    /**
     * Exécution des middlewares
     */
    async executeMiddlewares(route, options) {
        try {
            const middlewareNames = route.options.middleware || [];
            
            for (const middlewareName of middlewareNames) {
                const middleware = this.middlewares.find(m => m.name === middlewareName);
                
                if (!middleware) {
                    console.warn(`🚦 Middleware non trouvé: ${middlewareName}`);
                    continue;
                }
                
                const result = await middleware.handler(route, options);
                if (result === false) {
                    this.log(`🚦 Middleware ${middlewareName} a bloqué la navigation`);
                    return { success: false, blockedBy: middlewareName };
                }
            }
            
            return { success: true };
            
        } catch (error) {
            console.error('🚦 Erreur exécution middlewares:', error);
            return { success: false, error };
        }
    }

    /**
     * Effectuer la navigation
     */
    async performNavigation(route, path, options) {
        try {
            // Mettre à jour l'historique
            this.updateHistory(path);
            
            // Mettre à jour l'URL si nécessaire
            this.updateURL(path, options);
            
            // Charger le composant
            await this.loadComponent(route, path);
            
            // Mettre à jour l'état actuel
            this.currentRoute = route;
            
            this.log(`🚦 Navigation réussie vers: ${path}`);
            
        } catch (error) {
            console.error('🚦 Erreur lors de la navigation:', error);
            throw error;
        }
    }

    /**
     * Charger un composant
     */
    async loadComponent(route, path) {
        try {
            const appContainer = document.getElementById('app');
            if (!appContainer) {
                throw new Error('Conteneur d\'application non trouvé');
            }

            // Afficher un indicateur de chargement
            if (this.config.enableTransitions) {
                this.showLoadingIndicator();
            }

            // Nettoyer le conteneur
            appContainer.innerHTML = '';
            
            // Vérifier si le composant existe dans window.pages
            if (window.pages && window.pages[route.component]) {
                await this.loadPageComponent(route.component, appContainer, path);
            } else {
                // Essayer de charger dynamiquement
                await this.loadDynamicComponent(route.component, appContainer, path);
            }

            // Masquer l'indicateur de chargement
            if (this.config.enableTransitions) {
                this.hideLoadingIndicator();
            }
            
        } catch (error) {
            console.error('🚦 Erreur chargement composant:', error);
            throw error;
        }
    }

    /**
     * Charger un composant de page existant
     */
    async loadPageComponent(componentName, container, path) {
        try {
            const pageComponent = window.pages[componentName];
            
            // Vérifier les méthodes requises
            if (typeof pageComponent.render !== 'function') {
                throw new Error(`Méthode render manquante pour ${componentName}`);
            }

            // Rendu du composant
            const html = pageComponent.render({ path });
            container.innerHTML = html;

            // Initialisation du composant
            if (typeof pageComponent.init === 'function') {
                await pageComponent.init({ path });
            }

            // Animation d'entrée
            if (this.config.enableTransitions) {
                this.animatePageEntry(container);
            }

            this.log(`🚦 Composant page chargé: ${componentName}`);
            
        } catch (error) {
            console.error(`🚦 Erreur chargement composant page ${componentName}:`, error);
            throw error;
        }
    }

    /**
     * Charger un composant dynamique
     */
    async loadDynamicComponent(componentName, container, path) {
        try {
            // Essayer de charger le fichier du composant
            const scriptPath = `js/pages/${componentName}.js`;
            
            await this.loadScript(scriptPath);
            
            // Vérifier si le composant est maintenant disponible
            if (window.pages && window.pages[componentName]) {
                await this.loadPageComponent(componentName, container, path);
            } else {
                throw new Error(`Composant ${componentName} non trouvé après chargement`);
            }
            
        } catch (error) {
            console.error(`🚦 Erreur chargement dynamique ${componentName}:`, error);
            
            // Fallback vers une page générée
            this.generateFallbackPage(componentName, container, path);
        }
    }

    /**
     * Charger un script dynamiquement
     */
    loadScript(src) {
        return new Promise((resolve, reject) => {
            // Vérifier si le script est déjà chargé
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    /**
     * Générer une page de fallback
     */
    generateFallbackPage(componentName, container, path) {
        try {
            const fallbackContent = this.getFallbackContent(componentName, path);
            container.innerHTML = fallbackContent;
            
            this.log(`🚦 Page fallback générée pour: ${componentName}`);
            
        } catch (error) {
            console.error('🚦 Erreur génération page fallback:', error);
            container.innerHTML = '<div class="error-page">Page non disponible</div>';
        }
    }

    /**
     * Obtenir le contenu de fallback
     */
    getFallbackContent(componentName, path) {
        const fallbackPages = {
            'home': this.getHomeFallback(),
            'services': this.getServicesFallback(),
            'contact': this.getContactFallback(),
            'mentions-legales': this.getLegalFallback('Mentions Légales'),
            'politique-confidentialite': this.getLegalFallback('Politique de Confidentialité'),
            'conditions-utilisation': this.getLegalFallback('Conditions d\'Utilisation')
        };

        return fallbackPages[componentName] || this.getGenericFallback(componentName);
    }

    /**
     * Pages de fallback spécifiques
     */
    getHomeFallback() {
        return `
            <section class="section">
                <div class="container">
                    <div class="hero">
                        <h1 class="gradient-text">Oweo - Expert ERP Charpente Métallique</h1>
                        <p class="hero-subtitle">Transformation digitale pour entreprises de métallurgie</p>
                        <div class="hero-actions">
                            <button class="btn btn-primary" onclick="window.router.navigate('contact')">
                                📞 Nous Contacter
                            </button>
                            <button class="btn btn-secondary" onclick="window.router.navigate('services')">
                                📋 Nos Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getServicesFallback() {
        return `
            <section class="section">
                <div class="container">
                    <h1>Nos Services</h1>
                    <div class="services-grid">
                        <div class="service-card">
                            <h3>🛠️ ERP Métallurgie</h3>
                            <p>Solutions ERP spécialisées pour la charpente métallique</p>
                        </div>
                        <div class="service-card">
                            <h3>📊 Conseil Expert</h3>
                            <p>Accompagnement stratégique et optimisation des processus</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    getContactFallback() {
        return `
            <section class="section">
                <div class="container">
                    <h1>Contact</h1>
                    <div class="contact-info">
                        <p>📧 Email: contact@oweo-consulting.fr</p>
                        <p>📞 Téléphone: +33 (0)2 xx xx xx xx</p>
                        <p>📍 Adresse: Nantes, France</p>
                    </div>
                </div>
            </section>
        `;
    }

    getLegalFallback(title) {
        return `
            <section class="section">
                <div class="container">
                    <h1>${title}</h1>
                    <div class="legal-content">
                        <p>Contenu en cours de chargement...</p>
                    </div>
                </div>
            </section>
        `;
    }

    getGenericFallback(componentName) {
        return `
            <section class="section">
                <div class="container">
                    <h1>Page ${componentName}</h1>
                    <p>Contenu en cours de développement.</p>
                    <button class="btn btn-secondary" onclick="window.router.navigate('home')">
                        ← Retour à l'accueil
                    </button>
                </div>
            </section>
        `;
    }

    /**
     * Liaison des événements
     */
    bindEvents() {
        try {
            // Gestion des liens internes
            document.addEventListener('click', (e) => {
                this.handleLinkClick(e);
            });

            // Gestion de l'historique du navigateur
            window.addEventListener('popstate', (e) => {
                this.handlePopState(e);
            });

            // Gestion des changements de hash
            if (this.config.mode === 'hash') {
                window.addEventListener('hashchange', (e) => {
                    this.handleHashChange(e);
                });
            }

            this.log('🚦 Événements router liés');
            
        } catch (error) {
            console.error('🚦 Erreur liaison événements:', error);
        }
    }

    /**
     * Gestion des clics sur les liens
     */
    handleLinkClick(e) {
        try {
            const link = e.target.closest('a[href]');
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Ignorer les liens externes et spéciaux
            if (this.shouldIgnoreLink(href)) return;

            e.preventDefault();
            
            // Extraire le chemin
            const path = this.extractPathFromHref(href);
            this.navigate(path);
            
        } catch (error) {
            console.error('🚦 Erreur gestion clic lien:', error);
        }
    }

    /**
     * Vérifier si un lien doit être ignoré
     */
    shouldIgnoreLink(href) {
        return !href ||
               href.startsWith('http') ||
               href.startsWith('mailto:') ||
               href.startsWith('tel:') ||
               href.startsWith('//') ||
               href.includes('calendly.com');
    }

    /**
     * Extraire le chemin d'un href
     */
    extractPathFromHref(href) {
        if (href.startsWith('#')) {
            return href.substring(1);
        }
        
        if (href.startsWith('/')) {
            return href.substring(1);
        }
        
        return href;
    }

    /**
     * Gestion du popstate
     */
    handlePopState(e) {
        try {
            const path = this.getCurrentPath();
            this.navigate(path, { fromPopState: true });
        } catch (error) {
            console.error('🚦 Erreur gestion popstate:', error);
        }
    }

    /**
     * Gestion des changements de hash
     */
    handleHashChange(e) {
        try {
            if (this.config.mode === 'hash') {
                const path = this.getCurrentPath();
                this.navigate(path, { fromHashChange: true });
            }
        } catch (error) {
            console.error('🚦 Erreur gestion hashchange:', error);
        }
    }

    /**
     * Navigation initiale
     */
    handleInitialNavigation() {
        try {
            const currentPath = this.getCurrentPath();
            
            if (currentPath) {
                this.navigate(currentPath, { initial: true });
            } else {
                this.navigate(this.config.fallbackRoute, { initial: true });
            }
            
        } catch (error) {
            console.error('🚦 Erreur navigation initiale:', error);
            this.navigate(this.config.fallbackRoute);
        }
    }

    /**
     * Obtenir le chemin actuel
     */
    getCurrentPath() {
        try {
            if (this.config.mode === 'hash') {
                return window.location.hash.substring(1) || '';
            } else {
                return window.location.pathname.substring(1) || '';
            }
        } catch (error) {
            console.error('🚦 Erreur obtention chemin actuel:', error);
            return '';
        }
    }

    /**
     * Mettre à jour l'URL
     */
    updateURL(path, options = {}) {
        try {
            if (options.fromPopState || options.fromHashChange) {
                return; // Éviter les boucles
            }

            if (this.config.mode === 'hash') {
                const newHash = `#${path}`;
                if (window.location.hash !== newHash) {
                    window.location.hash = newHash;
                }
            } else {
                const newURL = `${window.location.origin}/${path}`;
                if (window.location.href !== newURL) {
                    window.history.pushState({ path }, '', newURL);
                }
            }
            
        } catch (error) {
            console.error('🚦 Erreur mise à jour URL:', error);
        }
    }

    /**
     * Mettre à jour l'historique
     */
    updateHistory(path) {
        try {
            this.history.push({
                path,
                timestamp: Date.now()
            });

            // Limiter la taille de l'historique
            if (this.history.length > this.config.maxHistoryLength) {
                this.history.shift();
            }
            
        } catch (error) {
            console.error('🚦 Erreur mise à jour historique:', error);
        }
    }

    /**
     * Navigation arrière
     */
    back() {
        try {
            if (this.history.length > 1) {
                // Supprimer l'entrée actuelle
                this.history.pop();
                
                // Naviguer vers l'entrée précédente
                const previousEntry = this.history[this.history.length - 1];
                if (previousEntry) {
                    this.navigate(previousEntry.path);
                } else {
                    this.navigate(this.config.fallbackRoute);
                }
            } else {
                // Utiliser l'historique du navigateur
                window.history.back();
            }
            
        } catch (error) {
            console.error('🚦 Erreur navigation arrière:', error);
            this.navigate(this.config.fallbackRoute);
        }
    }

    /**
     * Trouver une route dynamique
     */
    findDynamicRoute(path) {
        try {
            // Pour l'instant, retourner null
            // À implémenter si nécessaire pour les routes paramétrées
            return null;
        } catch (error) {
            console.error('🚦 Erreur recherche route dynamique:', error);
            return null;
        }
    }

    /**
     * Normaliser un chemin
     */
    normalizePath(path) {
        if (!path || path === '/') return '';
        return path.replace(/^[\/\#]+/, '').replace(/\/+$/, '');
    }

    /**
     * Gestion des erreurs de navigation
     */
    async handleNavigationError(error, attemptedPath) {
        try {
            console.error('🚦 Erreur navigation:', error);

            // Exécuter les gestionnaires d'erreur
            for (const handler of this.errorHandlers) {
                try {
                    const handled = await handler(error, attemptedPath);
                    if (handled) return;
                } catch (handlerError) {
                    console.error('🚦 Erreur dans gestionnaire d\'erreur:', handlerError);
                }
            }

            // Fallback: naviguer vers la page d'accueil
            if (attemptedPath !== this.config.fallbackRoute) {
                await this.navigate(this.config.fallbackRoute);
            } else {
                // Afficher une page d'erreur générique
                this.showGenericErrorPage();
            }
            
        } catch (fallbackError) {
            console.error('🚦 Erreur dans fallback navigation:', fallbackError);
            this.showGenericErrorPage();
        }
    }

    /**
     * Gestion des erreurs du routeur
     */
    handleRouterError(error) {
        console.error('🚦 Erreur critique du routeur:', error);
        
        // Afficher une page d'erreur système
        const appContainer = document.getElementById('app');
        if (appContainer) {
            appContainer.innerHTML = `
                <div class="router-error">
                    <h1>Erreur Système</h1>
                    <p>Le système de navigation a rencontré une erreur.</p>
                    <button onclick="location.reload()">Recharger la page</button>
                </div>
            `;
        }
    }

    /**
     * Afficher une page d'erreur générique
     */
    showGenericErrorPage() {
        const appContainer = document.getElementById('app');
        if (appContainer) {
            appContainer.innerHTML = `
                <section class="section">
                    <div class="container">
                        <div class="error-content">
                            <h1>Page non trouvée</h1>
                            <p>La page que vous cherchez n'existe pas.</p>
                            <button class="btn btn-primary" onclick="window.router.navigate('home')">
                                Retour à l'accueil
                            </button>
                        </div>
                    </div>
                </section>
            `;
        }
    }

    /**
     * Animations et transitions
     */
    showLoadingIndicator() {
        const indicator = document.getElementById('loading');
        if (indicator) {
            indicator.style.display = 'flex';
        }
    }

    hideLoadingIndicator() {
        const indicator = document.getElementById('loading');
        if (indicator) {
            indicator.style.display = 'none';
        }
    }

    animatePageEntry(container) {
        try {
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            
            requestAnimationFrame(() => {
                container.style.transition = 'all 0.3s ease';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            });
        } catch (error) {
            console.error('🚦 Erreur animation:', error);
        }
    }

    /**
     * Logging conditionnel
     */
    log(message) {
        if (this.config.enableLogging) {
            console.log(message);
        }
    }

    /**
     * Obtenir des informations sur le routeur
     */
    getInfo() {
        return {
            currentRoute: this.currentRoute,
            routesCount: this.routes.size,
            historyLength: this.history.length,
            middlewares: this.middlewares.map(m => m.name),
            config: this.config
        };
    }

    /**
     * Réinitialiser le routeur
     */
    reset() {
        try {
            this.currentRoute = null;
            this.history = [];
            this.isNavigating = false;
            this.log('🚦 Router réinitialisé');
        } catch (error) {
            console.error('🚦 Erreur réinitialisation router:', error);
        }
    }

    /**
     * Destruction du routeur
     */
    destroy() {
        try {
            this.routes.clear();
            this.middlewares = [];
            this.errorHandlers = [];
            this.history = [];
            this.initialized = false;
            this.log('🚦 Router détruit');
        } catch (error) {
            console.error('🚦 Erreur destruction router:', error);
        }
    }
}

// Middleware de vérification d'accès client
const clientAccessMiddleware = {
    name: 'clientAccessCheck',
    handler: async (route, options) => {
        try {
            // Vérifier si l'accès client est requis
            if (!route.options.requiresClientAccess) {
                return true; // Continuer
            }

            // Vérifier la disponibilité du système d'accès
            if (typeof window.OweoClientAccess === 'undefined') {
                console.error('🚦 OweoClientAccess non disponible');
                return false; // Bloquer
            }

            // Vérifier l'accès
            if (window.OweoClientAccess.hasAccess()) {
                return true; // Continuer
            }

            // Rediriger vers l'authentification
            window.OweoClientAccess.showAuthModal(route.component);
            return false; // Bloquer
            
        } catch (error) {
            console.error('🚦 Erreur middleware accès client:', error);
            return false;
        }
    }
};

// Créer et initialiser le routeur global
window.router = new OweoRouter();

// Ajouter le middleware d'accès client
window.router.addMiddleware(clientAccessMiddleware.name, clientAccessMiddleware.handler);

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    if (!window.router.initialized) {
        window.router.init();
    }
});

console.log('🚦 Oweo Router loaded with complete navigation system');