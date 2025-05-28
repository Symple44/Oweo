// js/core/app.js - Application principale Oweo

class OweoApp {
    constructor() {
        this.version = OweoConfig.version;
        this.environment = OweoConfig.environment;
        this.router = null;
        this.navigation = null;
        this.footer = null;
        this.components = new Map();
        this.isInitialized = false;
        
        console.log(`🚀 OweoApp v${this.version} [${this.environment}] initializing...`);
        this.init();
    }

    /**
     * Initialisation de l'application
     */
    async init() {
        try {
            // Vérification des dépendances
            this.checkDependencies();
            
            // Attendre que le DOM soit prêt
            if (document.readyState === 'loading') {
                await new Promise(resolve => {
                    document.addEventListener('DOMContentLoaded', resolve);
                });
            }

            // Initialisation des composants core
            await this.initializeCore();
            
            // Initialisation des composants UI
            await this.initializeComponents();
            
            // Configuration du routeur
            await this.setupRouter();
            
            // Configuration globale
            this.setupGlobalFeatures();
            
            // Démarrage de l'application
            await this.start();
            
            this.isInitialized = true;
            console.log('✅ OweoApp initialized successfully');
            
            // Analytics d'initialisation
            this.trackAppStart();
            
        } catch (error) {
            console.error('❌ OweoApp initialization failed:', error);
            this.handleInitializationError(error);
        }
    }

    /**
     * Vérification des dépendances requises
     */
    checkDependencies() {
        const required = [
            'OweoConfig',
            'OweoUtils',
            'OweoData',
            'OweoRouter',
            'OweoNavigation'
        ];

        const missing = required.filter(dep => typeof window[dep] === 'undefined');
        
        if (missing.length > 0) {
            throw new Error(`Missing dependencies: ${missing.join(', ')}`);
        }
        
        console.log('✅ All dependencies available');
    }

    /**
     * Initialisation des composants core
     */
    async initializeCore() {
        console.log('🔧 Initializing core components...');
        
        // Configuration des utilitaires
        if (OweoUtils.init) {
            OweoUtils.init();
        }
        
        // Configuration du stockage
        this.setupStorage();
        
        // Configuration de la performance
        this.setupPerformanceMonitoring();
        
        console.log('✅ Core components initialized');
    }

    /**
     * Initialisation des composants UI
     */
    async initializeComponents() {
        console.log('🎨 Initializing UI components...');
        
        try {
            // Navigation
            this.navigation = new OweoNavigation();
            this.components.set('navigation', this.navigation);
            
            // Footer (si disponible)
            if (typeof OweoFooter !== 'undefined') {
                this.footer = new OweoFooter();
                this.components.set('footer', this.footer);
            }
            
            // ROI Calculator (si disponible)
            if (typeof OweoROICalculator !== 'undefined') {
                const roiCalculator = new OweoROICalculator();
                this.components.set('roiCalculator', roiCalculator);
            }
            
            console.log('✅ UI components initialized');
            
        } catch (error) {
            console.error('❌ UI components initialization failed:', error);
            throw error;
        }
    }

    /**
     * Configuration du routeur
     */
    async setupRouter() {
        console.log('🧭 Setting up router...');
        
        try {
            this.router = new OweoRouter();
            
            // Configuration des hooks globaux
            this.router.beforeEach(async (to, params, from) => {
                console.log(`🧭 Navigating from ${from?.path || 'initial'} to ${to}`);
                
                // Affichage du loading
                this.showGlobalLoading();
                
                // Mise à jour de la navigation
                if (this.navigation) {
                    this.navigation.setActive(to.replace('/', '') || 'home');
                }
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                
                return true;
            });

            this.router.afterEach(async (to, from) => {
                // Masquage du loading
                this.hideGlobalLoading();
                
                // Mise à jour des méta-données
                this.updatePageMeta(to);
                
                // Analytics
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.pageView(to.path);
                }
                
                console.log(`✅ Navigation completed: ${to.path}`);
            });

            // Gestion des erreurs de navigation
            this.router.onError(async (error, attemptedPath) => {
                console.error('Router error:', error);
                this.hideGlobalLoading();
                
                // Notification d'erreur
                OweoUtils.notification?.show(
                    'Erreur de navigation. Redirection vers l\'accueil...',
                    'error'
                );
                
                // Redirection vers l'accueil après délai
                setTimeout(() => {
                    this.router.navigate('/');
                }, 2000);
            });

            // Enregistrement des routes
            this.registerRoutes();
            
            console.log('✅ Router configured');
            
        } catch (error) {
            console.error('❌ Router setup failed:', error);
            throw error;
        }
    }

    /**
     * Enregistrement des routes
     */
    registerRoutes() {
        // Route d'accueil
        this.router.addRoute('/', {
            component: window.pages?.home || this.createFallbackPage('home'),
            title: OweoConfig.pages.home.title,
            meta: {
                description: OweoConfig.pages.home.metaDescription,
                keywords: OweoConfig.seo.keywords
            }
        });

        // Routes des pages d'expertise
        OweoConfig.navigation.forEach(navItem => {
            if (navItem.id !== 'home') {
                this.router.addRoute(`/${navItem.id}`, {
                    component: window.pages?.[navItem.id] || this.createFallbackPage(navItem.id),
                    title: OweoConfig.pages[navItem.id]?.title || navItem.label,
                    meta: {
                        description: OweoConfig.pages[navItem.id]?.metaDescription,
                        keywords: OweoConfig.pages[navItem.id]?.keywords
                    }
                });
            }
        });

        // Route des articles
        this.router.addRoute('/article/:id', {
            component: this.createArticlePage,
            title: 'Article',
            meta: {
                description: 'Article expert Oweo'
            }
        });

        // Routes légales
        OweoConfig.legalPages.forEach(page => {
            this.router.addRoute(`/${page.id}`, {
                component: this.createLegalPage,
                title: page.label,
                meta: {
                    description: `${page.label} - ${OweoConfig.siteName}`
                }
            });
        });

        // Route 404
        this.router.addRoute('/404', {
            component: this.create404Page,
            title: 'Page non trouvée'
        });

        console.log(`✅ ${this.router.getRoutes().length} routes registered`);
    }

    /**
     * Configuration des fonctionnalités globales
     */
    setupGlobalFeatures() {
        console.log('⚙️ Setting up global features...');
        
        // Gestion des erreurs globales
        this.setupErrorHandling();
        
        // Analytics
        if (OweoConfig.features.analytics) {
            this.setupAnalytics();
        }
        
        // Notifications
        if (OweoConfig.features.notifications) {
            this.setupNotifications();
        }
        
        // Gestion du mode sombre
        if (OweoConfig.features.darkMode) {
            this.setupDarkMode();
        }
        
        // Lazy loading des images
        if (OweoConfig.performance.lazyLoading) {
            this.setupLazyLoading();
        }
        
        // Préchargement des pages critiques
        if (OweoConfig.performance.prefetchPages) {
            this.setupPrefetching();
        }
        
        console.log('✅ Global features configured');
    }

    /**
     * Démarrage de l'application
     */
    async start() {
        console.log('🚀 Starting application...');
        
        try {
            // Masquage de l'écran de chargement
            this.hideInitialLoading();
            
            // Démarrage du routeur
            await this.router.start();
            
            // Notification de bienvenue (optionnelle)
            if (OweoConfig.environment === 'development') {
                setTimeout(() => {
                    OweoUtils.notification?.show(
                        `Oweo v${this.version} démarré en mode ${this.environment}`,
                        'info',
                        3000
                    );
                }, 1000);
            }
            
            console.log('✅ Application started successfully');
            
        } catch (error) {
            console.error('❌ Application start failed:', error);
            throw error;
        }
    }

    /**
     * Création d'une page de fallback
     */
    createFallbackPage(pageId) {
        return {
            render: () => `
                <div class="page-fallback">
                    <div class="container">
                        <div class="fallback-content">
                            <h1>Page en cours de développement</h1>
                            <p>La page "${pageId}" sera bientôt disponible.</p>
                            <a href="#" onclick="router.navigate('/')" class="btn btn-primary">
                                Retour à l'accueil
                            </a>
                        </div>
                    </div>
                </div>
            `,
            init: () => {
                console.log(`Fallback page loaded: ${pageId}`);
            }
        };
    }

    /**
     * Création de la page article
     */
    createArticlePage(routeObject) {
        const articleId = routeObject.params.id;
        const article = OweoData.getArticleById?.(articleId);
        
        if (!article) {
            throw new Error(`Article not found: ${articleId}`);
        }
        
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = `
            <div class="page page-article">
                <div class="container">
                    <button class="btn-back" onclick="history.back()">← Retour</button>
                    <article class="article-detail">
                        <header class="article-header">
                            <div class="article-meta">
                                <span class="article-category">${article.category}</span>
                                <span class="article-time">📖 ${article.time}</span>
                                <span class="article-date">${new Date(article.publishDate).toLocaleDateString('fr-FR')}</span>
                            </div>
                            <h1>${article.title}</h1>
                            <p class="article-excerpt">${article.excerpt}</p>
                            <div class="article-tags">
                                ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </header>
                        <div class="article-content">
                            ${article.content}
                        </div>
                    </article>
                </div>
            </div>
        `;
        
        // Mise à jour du titre
        document.title = `${article.title} - ${OweoConfig.siteName}`;
    }

    /**
     * Création de la page 404
     */
    create404Page() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = `
            <div class="page page-404">
                <div class="container">
                    <div class="error-content">
                        <div class="error-code">404</div>
                        <h1>Page non trouvée</h1>
                        <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
                        <div class="error-actions">
                            <a href="#" onclick="router.navigate('/')" class="btn btn-primary">
                                Retour à l'accueil
                            </a>
                            <button onclick="history.back()" class="btn btn-secondary">
                                Retour
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Utilitaires d'interface
     */
    showGlobalLoading() {
        const loader = document.getElementById('loading');
        if (loader) {
            loader.style.display = 'flex';
        }
    }

    hideGlobalLoading() {
        const loader = document.getElementById('loading');
        if (loader) {
            loader.style.display = 'none';
        }
    }

    hideInitialLoading() {
        // Masquage de l'écran de chargement initial
        const initialLoader = document.querySelector('.initial-loading');
        if (initialLoader) {
            initialLoader.style.opacity = '0';
            setTimeout(() => {
                initialLoader.remove();
            }, 300);
        }
    }

    /**
     * Mise à jour des méta-données de la page
     */
    updatePageMeta(routeObject) {
        // Titre
        if (routeObject.title) {
            document.title = OweoConfig.seo.titleTemplate.replace('%s', routeObject.title);
        }
        
        // Description
        if (routeObject.meta?.description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = 'description';
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = routeObject.meta.description;
        }
        
        // Keywords
        if (routeObject.meta?.keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.name = 'keywords';
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.content = routeObject.meta.keywords;
        }
    }

    /**
     * Configuration des fonctionnalités
     */
    setupStorage() {
        // Nettoyage du storage au démarrage
        OweoUtils.storage?.cleanup();
    }

    setupErrorHandling() {
        // Gestionnaire global d'erreurs déjà configuré dans OweoUtils
    }

    setupAnalytics() {
        // Configuration des analytics
        if (OweoConfig.analytics.googleAnalytics) {
            // Initialisation Google Analytics
            // gtag('config', OweoConfig.analytics.googleAnalytics);
        }
    }

    setupNotifications() {
        // Configuration du système de notifications
        // Déjà disponible via OweoUtils.notification
    }

    setupDarkMode() {
        // Configuration du mode sombre
        const savedTheme = OweoUtils.storage?.get('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }

    setupLazyLoading() {
        // Configuration du lazy loading
        OweoUtils.performance?.lazyLoadImages();
    }

    setupPrefetching() {
        // Préchargement des pages critiques
        const criticalPages = OweoConfig.performance.prefetchPages;
        if (criticalPages?.length > 0) {
            criticalPages.forEach(page => {
                // Préchargement des ressources
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = `#${page}`;
                document.head.appendChild(link);
            });
        }
    }

    setupPerformanceMonitoring() {
        // Monitoring des performances
        if (OweoConfig.environment === 'production') {
            // Mesure des performances
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
                    
                    console.log(`⚡ Page loaded in ${loadTime}ms`);
                    
                    // Envoi des métriques si analytics activé
                    if (OweoUtils.analytics) {
                        OweoUtils.analytics.track('performance', {
                            loadTime: loadTime,
                            userAgent: navigator.userAgent
                        });
                    }
                }, 0);
            });
        }
    }

    /**
     * Gestion des erreurs d'initialisation
     */
    handleInitializationError(error) {
        console.error('Application initialization failed:', error);
        
        // Affichage d'une page d'erreur de secours
        const appContainer = document.getElementById('app');
        if (appContainer) {
            appContainer.innerHTML = `
                <div class="error-page">
                    <div class="container">
                        <div class="error-content">
                            <h1>Erreur de Chargement</h1>
                            <p>Une erreur s'est produite lors du chargement de l'application.</p>
                            <p>Veuillez recharger la page ou contacter le support.</p>
                            <div class="error-actions">
                                <button onclick="window.location.reload()" class="btn btn-primary">
                                    Recharger la page
                                </button>
                                <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary">
                                    Contacter le support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    /**
     * Analytics de démarrage
     */
    trackAppStart() {
        if (OweoUtils.analytics) {
            OweoUtils.analytics.track('app_start', {
                version: this.version,
                environment: this.environment,
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
                viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            });
        }
    }

    /**
     * Méthodes publiques
     */
    getVersion() {
        return this.version;
    }

    getEnvironment() {
        return this.environment;
    }

    isReady() {
        return this.isInitialized;
    }

    getComponent(name) {
        return this.components.get(name);
    }

    getRouter() {
        return this.router;
    }

    /**
     * Reload de l'application
     */
    reload() {
        window.location.reload();
    }

    /**
     * Destruction propre de l'application
     */
    destroy() {
        console.log('🔄 Destroying OweoApp...');
        
        // Nettoyage des composants
        this.components.forEach((component, name) => {
            if (component && typeof component.destroy === 'function') {
                component.destroy();
            }
        });
        this.components.clear();
        
        // Nettoyage du routeur
        if (this.router && typeof this.router.destroy === 'function') {
            this.router.destroy();
        }
        
        // Nettoyage global
        document.body.style.overflow = '';
        
        console.log('✅ OweoApp destroyed');
    }
}

// Export global
window.OweoApp = OweoApp;