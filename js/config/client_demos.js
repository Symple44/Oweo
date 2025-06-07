// js/config/client_demos.js - Version complète corrigée
// Configuration centralisée et gestion des démonstrations client

window.OweoClientDemos = {
    
    // Configuration des démos disponibles
    demos: {
        'outil-chiffrage-demo': {
            id: 'outil-chiffrage-demo',
            title: 'Démo Chiffrage ERP',
            subtitle: 'Outil de chiffrage interactif',
            description: 'Démonstration complète d\'un outil de chiffrage spécialisé pour la charpente métallique avec structure hiérarchique et métrés automatisés',
            longDescription: 'Cette démonstration présente un système de chiffrage complet intégré dans un ERP spécialisé métallurgie. Vous découvrirez les fonctionnalités de structuration hiérarchique des projets, de calcul automatique des métrés, et d\'interface professionnelle adaptée aux besoins des charpentiers métalliques.',
            icon: '🔐',
            color: 'primary',
            features: [
                'Structure hiérarchique des projets',
                'Métrés automatiques avancés',
                'Calculs temps réel multi-critères',
                'Interface professionnelle intuitive',
                'Export vers systèmes de production',
                'Gestion des variantes et options'
            ],
            technicalFeatures: [
                'Base de données produits intégrée',
                'Algorithmes de calcul optimisés',
                'Interface responsive et moderne',
                'Intégration ERP native',
                'Reporting avancé',
                'Workflows personnalisables'
            ],
            estimatedDuration: '15-20 min',
            complexity: 'Intermédiaire',
            category: 'ERP & Gestion',
            targetAudience: ['Dirigeants', 'Chargés d\'affaires', 'Commerciaux', 'Responsables production'],
            businessValue: [
                'Réduction du temps de chiffrage de 60%',
                'Amélioration de la précision des devis',
                'Standardisation des processus',
                'Meilleure traçabilité des données'
            ],
            prerequisites: [],
            demoFlow: [
                'Présentation de l\'interface',
                'Création d\'un nouveau projet',
                'Structuration hiérarchique',
                'Calculs automatiques',
                'Export et validation'
            ]
        },
        'import-dstv-demo': {
            id: 'import-dstv-demo',
            title: 'Démo Import DSTV',
            subtitle: 'Assignation automatique aux machines',
            description: 'Import automatique de fichiers DSTV avec analyse intelligente et assignation optimisée aux machines de production',
            longDescription: 'Cette démonstration avancée illustre un workflow complet d\'import de fichiers DSTV avec analyse automatique des pièces et assignation intelligente aux machines de production. Le système optimise automatiquement la répartition des tâches en fonction des capacités machines et des caractéristiques des pièces.',
            icon: '🔄',
            color: 'secondary',
            features: [
                'Import fichiers DSTV multiples',
                'Analyse automatique des pièces',
                'Assignation intelligente aux machines',
                'Calculs temps et coûts automatisés',
                'Export vers ERP et production',
                'Optimisation des charges machines'
            ],
            technicalFeatures: [
                'Parseur DSTV avancé multi-formats',
                'Algorithmes d\'optimisation IA',
                'Interface drag & drop intuitive',
                'Calculs temps réel',
                'Intégration machines CNC',
                'Reporting détaillé'
            ],
            estimatedDuration: '10-15 min',
            complexity: 'Avancé',
            category: 'Production & Optimisation',
            targetAudience: ['Responsables production', 'Responsables méthodes', 'Opérateurs CNC', 'Dirigeants'],
            businessValue: [
                'Automatisation complète du workflow',
                'Optimisation des temps de production',
                'Réduction des erreurs d\'assignation',
                'Amélioration de la productivité de 40%'
            ],
            prerequisites: ['Connaissance des fichiers DSTV', 'Notions de production métallique'],
            demoFlow: [
                'Import de fichiers DSTV',
                'Analyse automatique des pièces',
                'Assignation intelligente',
                'Optimisation des charges',
                'Export vers production'
            ]
        }
    },

    // État du système
    initialized: false,
    pendingDemoAccess: null,
    
    /**
     * Initialisation du système de démos
     */
    init() {
        try {
            if (this.initialized) {
                console.log('🔐 Client Demos déjà initialisé');
                return;
            }
            
            this.initializeDemoCards();
            this.bindEvents();
            this.setupAnalytics();
            
            this.initialized = true;
            console.log('🔐 Client Demos system initialized successfully');
            
        } catch (error) {
            console.error('🔐 Erreur initialisation Client Demos:', error);
        }
    },

    /**
     * Obtenir la configuration d'une démo
     */
    getDemoConfig(demoId) {
        try {
            const demo = this.demos[demoId];
            if (!demo) {
                console.warn(`🔐 Démo ${demoId} non trouvée`);
                return null;
            }
            return { ...demo }; // Retourner une copie
        } catch (error) {
            console.error(`🔐 Erreur récupération config démo ${demoId}:`, error);
            return null;
        }
    },

    /**
     * Obtenir toutes les démos disponibles
     */
    getAllDemos() {
        try {
            return Object.values(this.demos).map(demo => ({ ...demo }));
        } catch (error) {
            console.error('🔐 Erreur récupération toutes démos:', error);
            return [];
        }
    },

    /**
     * Obtenir les démos par catégorie
     */
    getDemosByCategory(category) {
        try {
            return Object.values(this.demos)
                .filter(demo => demo.category === category)
                .map(demo => ({ ...demo }));
        } catch (error) {
            console.error(`🔐 Erreur récupération démos catégorie ${category}:`, error);
            return [];
        }
    },

    /**
     * Obtenir les démos par audience cible
     */
    getDemosByAudience(audience) {
        try {
            return Object.values(this.demos)
                .filter(demo => demo.targetAudience && demo.targetAudience.includes(audience))
                .map(demo => ({ ...demo }));
        } catch (error) {
            console.error(`🔐 Erreur récupération démos audience ${audience}:`, error);
            return [];
        }
    },

    /**
     * Vérifier si une démo existe
     */
    demoExists(demoId) {
        try {
            return demoId in this.demos;
        } catch (error) {
            console.error(`🔐 Erreur vérification existence démo ${demoId}:`, error);
            return false;
        }
    },

    /**
     * Obtenir la couleur CSS pour une démo
     */
    getDemoColor(demoId) {
        try {
            const demo = this.demos[demoId];
            if (!demo) return 'primary';
            
            const colorMap = {
                'primary': 'var(--demo-primary, #00d4ff)',
                'secondary': 'var(--demo-secondary, #7c3aed)',
                'accent': 'var(--demo-accent, #ff6b35)',
                'success': 'var(--demo-success, #10b981)',
                'warning': 'var(--demo-warning, #f59e0b)',
                'error': 'var(--demo-error, #ef4444)'
            };
            
            return colorMap[demo.color] || colorMap.primary;
        } catch (error) {
            console.error(`🔐 Erreur récupération couleur démo ${demoId}:`, error);
            return 'var(--demo-primary, #00d4ff)';
        }
    },

    /**
     * Générer le HTML d'une carte de démo
     */
    generateDemoCard(demoId, options = {}) {
        try {
            const demo = this.getDemoConfig(demoId);
            if (!demo) return '';
            
            const {
                showDescription = true,
                showFeatures = false,
                showDuration = true,
                showCategory = true,
                compact = false
            } = options;
            
            const cardClass = compact ? 'demo-card demo-card--compact' : 'demo-card';
            const color = this.getDemoColor(demoId);
            
            return `
                <div class="${cardClass}" data-demo-id="${demo.id}" style="--demo-color: ${color}">
                    <div class="demo-card-header">
                        <div class="demo-icon">${demo.icon}</div>
                        <div class="demo-info">
                            <h3 class="demo-title">${demo.title}</h3>
                            <p class="demo-subtitle">${demo.subtitle}</p>
                        </div>
                        ${showCategory ? `<span class="demo-category">${demo.category}</span>` : ''}
                    </div>
                    
                    ${showDescription && !compact ? `
                        <div class="demo-card-body">
                            <p class="demo-description">${demo.description}</p>
                            
                            ${showFeatures ? `
                                <div class="demo-features">
                                    <h5>Fonctionnalités clés :</h5>
                                    <ul>
                                        ${demo.features.slice(0, 4).map(feature => `<li>${feature}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            
                            ${showDuration ? `
                                <div class="demo-meta">
                                    <span class="demo-duration">⏱️ ${demo.estimatedDuration}</span>
                                    <span class="demo-complexity">📊 ${demo.complexity}</span>
                                    <span class="demo-audience">👥 ${demo.targetAudience[0]}</span>
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
        } catch (error) {
            console.error(`🔐 Erreur génération carte démo ${demoId}:`, error);
            return '<div class="demo-card demo-card--error">Erreur de chargement</div>';
        }
    },

    /**
     * Générer une grille de toutes les démos
     */
    generateDemoGrid(options = {}) {
        try {
            const {
                category = null,
                audience = null,
                compact = false
            } = options;
            
            let demos = this.getAllDemos();
            
            // Filtrer par catégorie si spécifiée
            if (category) {
                demos = demos.filter(demo => demo.category === category);
            }
            
            // Filtrer par audience si spécifiée
            if (audience) {
                demos = demos.filter(demo => 
                    demo.targetAudience && demo.targetAudience.includes(audience)
                );
            }
            
            const gridClass = compact ? 'demos-grid demos-grid--compact' : 'demos-grid';
            
            return `
                <div class="${gridClass}">
                    ${demos.map(demo => this.generateDemoCard(demo.id, { compact })).join('')}
                </div>
            `;
        } catch (error) {
            console.error('🔐 Erreur génération grille démos:', error);
            return '<div class="demos-grid-error">Erreur de chargement des démos</div>';
        }
    },

    /**
     * Initialiser les événements pour les cartes de démo
     */
    initializeDemoCards() {
        try {
            // Délégation d'événements pour tous les boutons d'accès démo
            document.addEventListener('click', (e) => {
                const demoAccessBtn = e.target.closest('[data-demo-access]');
                if (!demoAccessBtn) return;

                e.preventDefault();
                e.stopPropagation();

                const demoId = demoAccessBtn.dataset.demoAccess;
                this.handleDemoAccess(demoId, demoAccessBtn);
            });
            
            console.log('🔐 Cartes de démo initialisées');
            
        } catch (error) {
            console.error('🔐 Erreur initialisation cartes démo:', error);
        }
    },

    /**
     * Gérer l'accès à une démo
     */
    handleDemoAccess(demoId, triggerElement = null) {
        try {
            console.log(`🔐 Accès démo demandé: ${demoId}`);

            // Vérifier si la démo existe
            if (!this.demoExists(demoId)) {
                console.error(`❌ Démo ${demoId} non trouvée`);
                this.showDemoError('Démonstration non trouvée');
                return;
            }

            // Animation du bouton
            if (triggerElement) {
                this.animateDemoButton(triggerElement);
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
                window.OweoClientAccess.showAuthModal(demoId);
            }

            // Analytics
            this.trackDemoAccess(demoId, 'access_requested');
            
        } catch (error) {
            console.error(`🔐 Erreur gestion accès démo ${demoId}:`, error);
            this.showDemoError('Erreur lors de l\'accès à la démonstration');
        }
    },

    /**
     * Accéder à une démo après vérification
     */
    accessDemo(demoId) {
        try {
            console.log(`🚀 Accès à la démo: ${demoId}`);

            // Vérification finale
            if (!this.demoExists(demoId)) {
                throw new Error(`Démo ${demoId} non trouvée`);
            }

            if (!window.OweoClientAccess || !window.OweoClientAccess.hasAccess()) {
                throw new Error('Accès client requis');
            }

            // Navigation avec multiple fallbacks
            this.navigateToDemo(demoId);

            // Analytics
            this.trackDemoAccess(demoId, 'access_granted');
            
        } catch (error) {
            console.error(`❌ Erreur accès démo ${demoId}:`, error);
            this.showDemoError(error.message);
        }
    },

    /**
     * Navigation vers une démo avec fallbacks
     */
    navigateToDemo(demoId) {
        try {
            // Méthode 1: Router de l'application
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(`/${demoId}`);
                return;
            }
            
            // Méthode 2: Chargement direct si la page existe
            if (window.pages && window.pages[demoId]) {
                this.loadDemoDirectly(demoId);
                return;
            }
            
            // Méthode 3: Navigation par hash
            if (window.location.hash !== `#${demoId}`) {
                window.location.hash = demoId;
                return;
            }
            
            // Fallback: URL directe
            window.location.href = `/${demoId}`;
            
        } catch (error) {
            console.error(`🔐 Erreur navigation démo ${demoId}:`, error);
            throw new Error('Impossible d\'accéder à la démonstration');
        }
    },

    /**
     * Charger une démo directement
     */
    loadDemoDirectly(demoId) {
        try {
            const appContainer = document.getElementById('app');
            if (!appContainer) {
                throw new Error('Conteneur d\'application non trouvé');
            }
            
            // Rendu de la page
            if (typeof window.pages[demoId].render === 'function') {
                appContainer.innerHTML = window.pages[demoId].render();
            } else {
                throw new Error('Méthode render non disponible');
            }
            
            // Initialisation de la page
            if (typeof window.pages[demoId].init === 'function') {
                window.pages[demoId].init();
            }
            
            // Scroll vers le haut
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`✅ Démo ${demoId} chargée directement`);
            
        } catch (error) {
            console.error(`❌ Erreur chargement direct démo ${demoId}:`, error);
            throw error;
        }
    },

    /**
     * Animation des boutons de démo
     */
    animateDemoButton(button) {
        try {
            // Animation de scale
            button.style.transform = 'scale(0.95)';
            button.style.transition = 'transform 0.15s ease';
            
            setTimeout(() => {
                button.style.transform = '';
            }, 150);
            
            // Effet de loading
            const originalText = button.textContent;
            button.textContent = '🔄 Chargement...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
            
        } catch (error) {
            console.error('🔐 Erreur animation bouton:', error);
        }
    },

    /**
     * Gérer l'authentification réussie
     */
    onAuthenticationSuccess() {
        try {
            console.log('🔐 Authentification réussie');
            
            // Si une démo était en attente, y accéder maintenant
            if (this.pendingDemoAccess) {
                setTimeout(() => {
                    this.accessDemo(this.pendingDemoAccess);
                    this.pendingDemoAccess = null;
                }, 1000);
            }
            
        } catch (error) {
            console.error('🔐 Erreur gestion authentification réussie:', error);
        }
    },

    /**
     * Liaison des événements
     */
    bindEvents() {
        try {
            // Écouter les événements d'authentification
            window.addEventListener('clientAuthSuccess', () => {
                this.onAuthenticationSuccess();
            });
            
            // Écouter les événements via storage (multi-onglets)
            window.addEventListener('storage', (e) => {
                if (e.key === 'oweo_client_session' && e.newValue && this.pendingDemoAccess) {
                    setTimeout(() => {
                        this.onAuthenticationSuccess();
                    }, 500);
                }
            });
            
            console.log('🔐 Événements démos liés');
            
        } catch (error) {
            console.error('🔐 Erreur liaison événements démos:', error);
        }
    },

    /**
     * Configuration des analytics
     */
    setupAnalytics() {
        try {
            // Configuration de base pour le tracking
            this.analyticsEnabled = !!(window.OweoUtils && window.OweoUtils.analytics);
            
            if (this.analyticsEnabled) {
                console.log('🔐 Analytics démos configuré');
            }
            
        } catch (error) {
            console.error('🔐 Erreur configuration analytics:', error);
        }
    },

    /**
     * Tracker les accès aux démos
     */
    trackDemoAccess(demoId, action) {
        try {
            if (!this.analyticsEnabled) return;
            
            const demo = this.getDemoConfig(demoId);
            
            window.OweoUtils.analytics.track(`demo_${action}`, {
                demoId: demoId,
                demoTitle: demo ? demo.title : 'unknown',
                demoCategory: demo ? demo.category : 'unknown',
                hasAccess: window.OweoClientAccess ? window.OweoClientAccess.hasAccess() : false,
                timestamp: Date.now()
            });
            
        } catch (error) {
            console.error('🔐 Erreur tracking démo:', error);
        }
    },

    /**
     * Afficher erreur de démo
     */
    showDemoError(message) {
        try {
            if (window.OweoClientAccess && typeof window.OweoClientAccess.showNotification === 'function') {
                window.OweoClientAccess.showNotification(`❌ ${message}`, 'error', 4000);
            } else {
                console.error(`🔐 Erreur démo: ${message}`);
                
                // Fallback avec alert
                alert(`Erreur: ${message}`);
            }
        } catch (error) {
            console.error('🔐 Erreur affichage erreur démo:', error);
        }
    },

    /**
     * Rechercher des démos
     */
    searchDemos(query) {
        try {
            const searchTerm = query.toLowerCase().trim();
            if (!searchTerm) return this.getAllDemos();
            
            return Object.values(this.demos).filter(demo => {
                return demo.title.toLowerCase().includes(searchTerm) ||
                       demo.description.toLowerCase().includes(searchTerm) ||
                       demo.category.toLowerCase().includes(searchTerm) ||
                       demo.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
                       demo.targetAudience.some(audience => audience.toLowerCase().includes(searchTerm));
            }).map(demo => ({ ...demo }));
            
        } catch (error) {
            console.error('🔐 Erreur recherche démos:', error);
            return [];
        }
    },

    /**
     * Obtenir les statistiques des démos
     */
    getDemoStats() {
        try {
            const demos = this.getAllDemos();
            
            const stats = {
                total: demos.length,
                byCategory: {},
                byComplexity: {},
                averageDuration: 0
            };
            
            demos.forEach(demo => {
                // Par catégorie
                stats.byCategory[demo.category] = (stats.byCategory[demo.category] || 0) + 1;
                
                // Par complexité
                stats.byComplexity[demo.complexity] = (stats.byComplexity[demo.complexity] || 0) + 1;
            });
            
            // Durée moyenne (estimation simple)
            const totalMinutes = demos.reduce((sum, demo) => {
                const minutes = parseInt(demo.estimatedDuration.split('-')[0]);
                return sum + minutes;
            }, 0);
            
            stats.averageDuration = Math.round(totalMinutes / demos.length);
            
            return stats;
            
        } catch (error) {
            console.error('🔐 Erreur calcul stats démos:', error);
            return null;
        }
    },

    /**
     * Vérifier la compatibilité
     */
    checkCompatibility() {
        try {
            const requirements = {
                clientAccess: typeof window.OweoClientAccess !== 'undefined',
                pages: typeof window.pages !== 'undefined',
                router: typeof window.router !== 'undefined'
            };
            
            const isCompatible = requirements.clientAccess; // Minimum requis
            
            return {
                compatible: isCompatible,
                requirements: requirements,
                missing: Object.keys(requirements).filter(key => !requirements[key])
            };
            
        } catch (error) {
            console.error('🔐 Erreur vérification compatibilité:', error);
            return { compatible: false, error: error.message };
        }
    },

    /**
     * Réinitialiser le système
     */
    reset() {
        try {
            this.pendingDemoAccess = null;
            this.initialized = false;
            console.log('🔐 Client Demos réinitialisé');
        } catch (error) {
            console.error('🔐 Erreur réinitialisation:', error);
        }
    }
};

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    window.OweoClientDemos.init();
});

// Initialisation supplémentaire pour les SPA
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.OweoClientDemos.init();
    });
} else {
    // DOM déjà chargé
    setTimeout(() => {
        window.OweoClientDemos.init();
    }, 100);
}

console.log('🔐 Client Demos configuration loaded with complete management system');