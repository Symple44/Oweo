// js/config/client-demos.js - Configuration centralisée des démos client

window.OweoClientDemos = {
    
    // Configuration des démos disponibles
    demos: {
        'outil-chiffrage-demo': {
            id: 'outil-chiffrage-demo',
            title: 'Démo Chiffrage ERP',
            subtitle: 'Outil de chiffrage interactif',
            description: 'Démonstration complète d\'un outil de chiffrage spécialisé pour la charpente métallique avec structure hiérarchique et métrés automatisés',
            icon: '🔐',
            color: 'primary', // primary, secondary, accent
            features: [
                'Structure hiérarchique des projets',
                'Métrés automatiques',
                'Calculs temps réel',
                'Interface professionnel'
            ],
            estimatedDuration: '15-20 min',
            complexity: 'Intermédiaire',
            category: 'ERP & Gestion'
        },
        'import-dstv-demo': {
            id: 'import-dstv-demo',
            title: 'Démo Import DSTV',
            subtitle: 'Assignation automatique aux machines',
            description: 'Import automatique de fichiers DSTV avec analyse intelligente et assignation optimisée aux machines de production',
            icon: '🔄',
            color: 'secondary',
            features: [
                'Import fichiers DSTV multiples',
                'Analyse automatique des pièces',
                'Assignation intelligente aux machines',
                'Calculs temps et coûts',
                'Export vers ERP'
            ],
            estimatedDuration: '10-15 min',
            complexity: 'Avancé',
            category: 'Production & Optimisation'
        }
    },

    /**
     * Obtenir la configuration d'une démo
     */
    getDemoConfig(demoId) {
        return this.demos[demoId] || null;
    },

    /**
     * Obtenir toutes les démos disponibles
     */
    getAllDemos() {
        return Object.values(this.demos);
    },

    /**
     * Obtenir les démos par catégorie
     */
    getDemosByCategory(category) {
        return Object.values(this.demos).filter(demo => demo.category === category);
    },

    /**
     * Vérifier si une démo existe
     */
    demoExists(demoId) {
        return demoId in this.demos;
    },

    /**
     * Obtenir la couleur CSS pour une démo
     */
    getDemoColor(demoId) {
        const demo = this.getDemoConfig(demoId);
        if (!demo) return 'primary';
        
        const colorMap = {
            'primary': 'var(--primary-color)',
            'secondary': 'var(--secondary-color)',
            'accent': 'var(--accent-color)'
        };
        
        return colorMap[demo.color] || colorMap['primary'];
    },

    /**
     * Générer le HTML pour une carte de démo
     */
    generateDemoCard(demoId, options = {}) {
        const demo = this.getDemoConfig(demoId);
        if (!demo) return '';

        const {
            showFeatures = false,
            showDuration = false,
            compact = false
        } = options;

        return `
            <div class="demo-card demo-${demo.color}" data-demo="${demo.id}">
                <div class="demo-card-header">
                    <span class="demo-icon">${demo.icon}</span>
                    <div class="demo-titles">
                        <h4 class="demo-title">${demo.title}</h4>
                        <p class="demo-subtitle">${demo.subtitle}</p>
                    </div>
                </div>
                
                ${!compact ? `
                    <div class="demo-card-body">
                        <p class="demo-description">${demo.description}</p>
                        
                        ${showFeatures ? `
                            <div class="demo-features">
                                <h5>Fonctionnalités :</h5>
                                <ul>
                                    ${demo.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        
                        ${showDuration ? `
                            <div class="demo-meta">
                                <span class="demo-duration">⏱️ ${demo.estimatedDuration}</span>
                                <span class="demo-complexity">📊 ${demo.complexity}</span>
                            </div>
                        ` : ''}
                    </div>
                ` : ''}
                
                <div class="demo-card-footer">
                    <button class="demo-access-btn" data-demo-access="${demo.id}">
                        🔐 Accéder à la Démo
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Initialiser les événements pour les cartes de démo
     */
    initializeDemoCards() {
        document.addEventListener('click', (e) => {
            const demoAccessBtn = e.target.closest('[data-demo-access]');
            if (!demoAccessBtn) return;

            e.preventDefault();
            e.stopPropagation();

            const demoId = demoAccessBtn.dataset.demoAccess;
            this.handleDemoAccess(demoId);
        });
    },

    /**
     * Gérer l'accès à une démo
     */
    handleDemoAccess(demoId) {
        console.log(`🔐 Demo access requested: ${demoId}`);

        // Vérifier si la démo existe
        if (!this.demoExists(demoId)) {
            console.error(`❌ Demo ${demoId} not found`);
            this.showDemoError('Démonstration non trouvée');
            return;
        }

        // Vérifier l'accès client
        if (typeof window.OweoClientAccess === 'undefined') {
            console.error('OweoClientAccess not loaded');
            this.showDemoError('Système d\'accès client non disponible');
            return;
        }

        // Vérifier l'authentification
        if (window.OweoClientAccess.hasAccess()) {
            this.accessDemo(demoId);
        } else {
            // Stocker la démo demandée pour y accéder après authentification
            this.pendingDemoAccess = demoId;
            window.OweoClientAccess.showAuthModal();
        }

        // Analytics
        this.trackDemoAccess(demoId);
    },

    /**
     * Accéder à une démo après vérification
     */
    accessDemo(demoId) {
        console.log(`🚀 Accessing demo: ${demoId}`);

        // Navigation
        if (window.router && typeof window.router.navigate === 'function') {
            window.router.navigate(`/${demoId}`);
        } else if (window.pages && window.pages[demoId]) {
            this.loadDemoDirectly(demoId);
        } else {
            console.error(`❌ Demo page ${demoId} not available`);
            this.showDemoError('Démonstration temporairement indisponible');
        }
    },

    /**
     * Charger une démo directement
     */
    loadDemoDirectly(demoId) {
        const appContainer = document.getElementById('app');
        if (!appContainer) return;

        try {
            appContainer.innerHTML = window.pages[demoId].render();
            
            if (window.pages[demoId].init) {
                window.pages[demoId].init();
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`✅ Demo ${demoId} loaded directly`);
            
            // Notification de succès
            this.showDemoSuccess(demoId);
            
        } catch (error) {
            console.error(`❌ Error loading demo ${demoId}:`, error);
            this.showDemoError('Erreur lors du chargement de la démonstration');
        }
    },

    /**
     * Afficher un message de succès
     */
    showDemoSuccess(demoId) {
        const demo = this.getDemoConfig(demoId);
        const message = `🎯 ${demo ? demo.title : 'Démonstration'} chargée avec succès !`;
        
        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(message, 'success', 3000);
        }
    },

    /**
     * Afficher un message d'erreur
     */
    showDemoError(message) {
        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(`❌ ${message}`, 'error', 4000);
        } else {
            console.error(`Demo Error: ${message}`);
        }
    },

    /**
     * Tracker l'accès aux démos
     */
    trackDemoAccess(demoId) {
        if (window.OweoUtils && window.OweoUtils.analytics) {
            const demo = this.getDemoConfig(demoId);
            window.OweoUtils.analytics.track('demo_access_attempt', {
                demoId: demoId,
                demoTitle: demo ? demo.title : 'unknown',
                demoCategory: demo ? demo.category : 'unknown',
                hasAccess: window.OweoClientAccess ? window.OweoClientAccess.hasAccess() : false,
                timestamp: Date.now()
            });
        }
    },

    /**
     * Gérer l'authentification réussie
     */
    onAuthenticationSuccess() {
        // Si une démo était en attente, y accéder maintenant
        if (this.pendingDemoAccess) {
            setTimeout(() => {
                this.accessDemo(this.pendingDemoAccess);
                this.pendingDemoAccess = null;
            }, 1000);
        }
    },

    /**
     * Initialisation du système
     */
    init() {
        console.log('🔐 Client Demos system initialized');
        this.initializeDemoCards();
        
        // Écouter les événements d'authentification
        window.addEventListener('clientAuthSuccess', () => {
            this.onAuthenticationSuccess();
        });
        
        // Écouter les événements d'authentification via storage
        window.addEventListener('storage', (e) => {
            if (e.key === 'oweo_client_session' && e.newValue && this.pendingDemoAccess) {
                setTimeout(() => {
                    this.onAuthenticationSuccess();
                }, 500);
            }
        });
    },

    // Variable pour stocker la démo en attente d'accès
    pendingDemoAccess: null
};

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    OweoClientDemos.init();
});

console.log('🔐 Client Demos configuration loaded');