// js/utils/back-button.js - Version complète corrigée
// Utilitaire robuste pour la gestion des boutons retour

/**
 * Système de navigation retour robuste
 * Gère la navigation avec fallbacks multiples et délégation d'événements
 */
window.BackButtonManager = {
    
    // Configuration
    initialized: false,
    eventsBound: false,
    navigationHistory: [],
    
    /**
     * Configuration principale des boutons retour
     * À appeler dans chaque page après le rendu
     */
    setup() {
        try {
            if (this.initialized) {
                console.log('🔙 BackButtonManager déjà initialisé');
                return;
            }
            
            this.initializeNavigation();
            this.bindGlobalEvents();
            this.setupKeyboardShortcuts();
            this.trackPageEntry();
            
            this.initialized = true;
            console.log('🔙 BackButtonManager initialisé avec succès');
            
        } catch (error) {
            console.error('🔙 Erreur initialisation BackButtonManager:', error);
        }
    },
    
    /**
     * Initialisation de la navigation
     */
    initializeNavigation() {
        try {
            // Sauvegarder l'état initial
            this.saveCurrentState();
            
            // Écouter les changements d'historique
            window.addEventListener('popstate', (e) => {
                this.handlePopState(e);
            });
            
            // Écouter les changements de hash
            window.addEventListener('hashchange', (e) => {
                this.handleHashChange(e);
            });
            
            console.log('🔙 Navigation initialisée');
            
        } catch (error) {
            console.error('🔙 Erreur initialisation navigation:', error);
        }
    },
    
    /**
     * Liaison des événements globaux avec délégation
     */
    bindGlobalEvents() {
        try {
            if (this.eventsBound) return;
            
            // Délégation d'événements pour tous les boutons retour
            document.addEventListener('click', (e) => {
                this.handleGlobalClick(e);
            });
            
            // Support clavier global
            document.addEventListener('keydown', (e) => {
                this.handleGlobalKeydown(e);
            });
            
            this.eventsBound = true;
            console.log('🔙 Événements globaux liés');
            
        } catch (error) {
            console.error('🔙 Erreur liaison événements globaux:', error);
        }
    },
    
    /**
     * Gestionnaire principal des clics
     */
    handleGlobalClick(e) {
        try {
            const backBtn = e.target.closest('.btn-back, [data-back], .back-button');
            if (!backBtn) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            // Animation du bouton
            this.animateButton(backBtn);
            
            // Délai pour l'animation puis navigation
            setTimeout(() => {
                this.performBackNavigation(backBtn);
            }, 100);
            
        } catch (error) {
            console.error('🔙 Erreur gestionnaire clic global:', error);
        }
    },
    
    /**
     * Gestionnaire clavier global
     */
    handleGlobalKeydown(e) {
        try {
            // Bouton retour au focus
            const backBtn = e.target.closest('.btn-back, [data-back], .back-button');
            if (backBtn && (e.key === 'Enter' || e.key === ' ')) {
                e.preventDefault();
                e.stopPropagation();
                this.performBackNavigation(backBtn);
                return;
            }
            
            // Raccourcis clavier globaux
            if (e.altKey && e.key === 'ArrowLeft') {
                e.preventDefault();
                this.performBackNavigation();
                return;
            }
            
            if (e.key === 'Escape') {
                // ESC pour retour sur les pages de démo
                const isDemoPage = window.location.pathname.includes('demo') || 
                                  window.location.hash.includes('demo');
                if (isDemoPage) {
                    e.preventDefault();
                    this.performBackNavigation();
                }
            }
            
        } catch (error) {
            console.error('🔙 Erreur gestionnaire clavier global:', error);
        }
    },
    
    /**
     * Animation du bouton
     */
    animateButton(button) {
        try {
            if (!button) return;
            
            // Animation de scale
            button.style.transform = 'scale(0.95)';
            button.style.transition = 'transform 0.1s ease';
            
            setTimeout(() => {
                button.style.transform = '';
            }, 100);
            
            // Effet visuel supplémentaire
            button.classList.add('btn-back--pressed');
            setTimeout(() => {
                button.classList.remove('btn-back--pressed');
            }, 150);
            
        } catch (error) {
            console.error('🔙 Erreur animation bouton:', error);
        }
    },
    
    /**
     * Navigation retour principale avec multiples fallbacks
     */
    performBackNavigation(triggerElement = null) {
        try {
            console.log('🔙 Navigation retour déclenchée');
            
            // Analyser le contexte pour choisir la meilleure stratégie
            const strategy = this.determineNavigationStrategy(triggerElement);
            
            switch (strategy) {
                case 'router':
                    this.navigateWithRouter();
                    break;
                case 'history':
                    this.navigateWithHistory();
                    break;
                case 'custom':
                    this.navigateWithCustomLogic(triggerElement);
                    break;
                case 'home':
                default:
                    this.navigateToHome();
                    break;
            }
            
            // Analytics
            this.trackBackNavigation(strategy, triggerElement);
            
        } catch (error) {
            console.error('🔙 Erreur navigation retour:', error);
            // Fallback ultime
            this.navigateToHome();
        }
    },
    
    /**
     * Déterminer la stratégie de navigation optimale
     */
    determineNavigationStrategy(triggerElement) {
        try {
            // Vérifier les attributs personnalisés du bouton
            if (triggerElement) {
                const customTarget = triggerElement.dataset.backTarget;
                if (customTarget) return 'custom';
                
                const forceHome = triggerElement.dataset.backHome;
                if (forceHome === 'true') return 'home';
            }
            
            // Vérifier si on est dans une modal ou overlay
            if (document.querySelector('.modal-overlay.show')) {
                return 'custom'; // Fermer la modal
            }
            
            // Vérifier la disponibilité du router
            if (window.router && typeof window.router.navigate === 'function') {
                return 'router';
            }
            
            // Vérifier l'historique du navigateur
            if (window.history.length > 1 && this.navigationHistory.length > 0) {
                return 'history';
            }
            
            // Par défaut, aller à l'accueil
            return 'home';
            
        } catch (error) {
            console.error('🔙 Erreur détermination stratégie:', error);
            return 'home';
        }
    },
    
    /**
     * Navigation avec le router de l'application
     */
    navigateWithRouter() {
        try {
            console.log('🔙 Navigation avec router');
            
            // Essayer de récupérer la page précédente du router
            if (window.router.history && window.router.history.length > 1) {
                window.router.back();
            } else {
                // Fallback vers l'accueil
                window.router.navigate('/');
            }
            
        } catch (error) {
            console.error('🔙 Erreur navigation router:', error);
            this.navigateWithHistory();
        }
    },
    
    /**
     * Navigation avec l'historique du navigateur
     */
    navigateWithHistory() {
        try {
            console.log('🔙 Navigation avec history');
            
            // Vérifier qu'on peut reculer
            if (window.history.length > 1) {
                window.history.back();
            } else {
                // Pas d'historique, aller à l'accueil
                this.navigateToHome();
            }
            
        } catch (error) {
            console.error('🔙 Erreur navigation history:', error);
            this.navigateToHome();
        }
    },
    
    /**
     * Navigation avec logique personnalisée
     */
    navigateWithCustomLogic(triggerElement) {
        try {
            console.log('🔙 Navigation avec logique personnalisée');
            
            // Fermer les modals ouvertes
            const openModal = document.querySelector('.modal-overlay.show');
            if (openModal) {
                this.closeModal(openModal);
                return;
            }
            
            // Vérifier les attributs personnalisés
            if (triggerElement) {
                const customTarget = triggerElement.dataset.backTarget;
                if (customTarget) {
                    this.navigateToTarget(customTarget);
                    return;
                }
            }
            
            // Logique contextuelle selon la page
            const currentPath = window.location.pathname || window.location.hash;
            
            if (currentPath.includes('demo')) {
                // Page de démo -> revenir à la liste des services
                this.navigateToTarget('services');
            } else if (currentPath.includes('legal')) {
                // Page légale -> revenir à l'accueil
                this.navigateToTarget('home');
            } else {
                // Défaut -> accueil
                this.navigateToHome();
            }
            
        } catch (error) {
            console.error('🔙 Erreur navigation personnalisée:', error);
            this.navigateToHome();
        }
    },
    
    /**
     * Navigation vers l'accueil
     */
    navigateToHome() {
        try {
            console.log('🔙 Navigation vers l\'accueil');
            
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate('/');
            } else if (window.location.hash) {
                window.location.hash = '';
            } else {
                window.location.href = '/';
            }
            
        } catch (error) {
            console.error('🔙 Erreur navigation accueil:', error);
            // Fallback ultime
            window.location.href = window.location.origin;
        }
    },
    
    /**
     * Navigation vers une cible spécifique
     */
    navigateToTarget(target) {
        try {
            console.log(`🔙 Navigation vers: ${target}`);
            
            if (window.router && typeof window.router.navigate === 'function') {
                const path = target === 'home' ? '/' : `/${target}`;
                window.router.navigate(path);
            } else {
                // Navigation avec hash ou élément
                const targetElement = document.getElementById(target);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.hash = target;
                }
            }
            
        } catch (error) {
            console.error(`🔙 Erreur navigation vers ${target}:`, error);
            this.navigateToHome();
        }
    },
    
    /**
     * Fermer une modal
     */
    closeModal(modal) {
        try {
            console.log('🔙 Fermeture modal');
            
            // Utiliser les mécanismes existants si disponibles
            const closeButton = modal.querySelector('.modal-close');
            if (closeButton) {
                closeButton.click();
                return;
            }
            
            // Fallback manuel
            modal.classList.remove('show');
            setTimeout(() => {
                if (modal.parentNode) {
                    modal.style.display = 'none';
                }
            }, 300);
            
        } catch (error) {
            console.error('🔙 Erreur fermeture modal:', error);
        }
    },
    
    /**
     * Configuration des raccourcis clavier
     */
    setupKeyboardShortcuts() {
        try {
            // Les raccourcis sont gérés dans handleGlobalKeydown
            console.log('🔙 Raccourcis clavier configurés');
            
        } catch (error) {
            console.error('🔙 Erreur configuration raccourcis:', error);
        }
    },
    
    /**
     * Gestion des événements popstate
     */
    handlePopState(e) {
        try {
            console.log('🔙 PopState détecté');
            
            // Mettre à jour l'historique interne
            if (e.state) {
                this.navigationHistory.push(e.state);
            }
            
        } catch (error) {
            console.error('🔙 Erreur popstate:', error);
        }
    },
    
    /**
     * Gestion des changements de hash
     */
    handleHashChange(e) {
        try {
            console.log('🔙 HashChange détecté');
            
            // Mettre à jour l'historique interne
            this.saveCurrentState();
            
        } catch (error) {
            console.error('🔙 Erreur hashchange:', error);
        }
    },
    
    /**
     * Sauvegarder l'état actuel
     */
    saveCurrentState() {
        try {
            const state = {
                url: window.location.href,
                pathname: window.location.pathname,
                hash: window.location.hash,
                timestamp: Date.now()
            };
            
            this.navigationHistory.push(state);
            
            // Limiter la taille de l'historique
            if (this.navigationHistory.length > 10) {
                this.navigationHistory.shift();
            }
            
        } catch (error) {
            console.error('🔙 Erreur sauvegarde état:', error);
        }
    },
    
    /**
     * Tracker l'entrée sur une page
     */
    trackPageEntry() {
        try {
            this.saveCurrentState();
            
            // Analytics si disponible
            if (window.OweoUtils && window.OweoUtils.analytics) {
                window.OweoUtils.analytics.track('page_entry', {
                    url: window.location.href,
                    referrer: document.referrer,
                    timestamp: Date.now()
                });
            }
            
        } catch (error) {
            console.error('🔙 Erreur tracking entrée page:', error);
        }
    },
    
    /**
     * Tracker les navigations retour
     */
    trackBackNavigation(strategy, triggerElement) {
        try {
            if (window.OweoUtils && window.OweoUtils.analytics) {
                window.OweoUtils.analytics.track('back_navigation', {
                    strategy: strategy,
                    trigger: triggerElement ? triggerElement.className : 'keyboard',
                    fromUrl: window.location.href,
                    timestamp: Date.now()
                });
            }
        } catch (error) {
            console.error('🔙 Erreur tracking navigation:', error);
        }
    },
    
    /**
     * Obtenir l'historique de navigation
     */
    getNavigationHistory() {
        return [...this.navigationHistory];
    },
    
    /**
     * Vérifier si on peut naviguer en arrière
     */
    canGoBack() {
        try {
            return window.history.length > 1 || this.navigationHistory.length > 1;
        } catch {
            return false;
        }
    },
    
    /**
     * Forcer la navigation vers une page spécifique
     */
    forceNavigateTo(target) {
        try {
            console.log(`🔙 Navigation forcée vers: ${target}`);
            this.navigateToTarget(target);
        } catch (error) {
            console.error('🔙 Erreur navigation forcée:', error);
        }
    },
    
    /**
     * Réinitialiser le système
     */
    reset() {
        try {
            this.navigationHistory = [];
            this.saveCurrentState();
            console.log('🔙 BackButtonManager réinitialisé');
        } catch (error) {
            console.error('🔙 Erreur réinitialisation:', error);
        }
    },
    
    /**
     * Destruction propre du système
     */
    destroy() {
        try {
            this.initialized = false;
            this.eventsBound = false;
            this.navigationHistory = [];
            console.log('🔙 BackButtonManager détruit');
        } catch (error) {
            console.error('🔙 Erreur destruction:', error);
        }
    }
};

/**
 * Fonction de compatibilité pour l'ancien système
 * Maintient la compatibilité avec le code existant
 */
window.setupBackButton = function() {
    console.log('🔙 setupBackButton (compatibilité) appelé');
    
    try {
        // Initialiser le nouveau système si pas encore fait
        if (!window.BackButtonManager.initialized) {
            window.BackButtonManager.setup();
        }
        
        // Ajouter des styles CSS si nécessaire
        addBackButtonStyles();
        
        console.log('✅ Boutons retour configurés via compatibility layer');
        
    } catch (error) {
        console.error('🔙 Erreur setupBackButton:', error);
        
        // Fallback simple si le nouveau système échoue
        setupBackButtonFallback();
    }
};

/**
 * Ajouter les styles CSS pour les boutons retour
 */
function addBackButtonStyles() {
    if (document.getElementById('back-button-styles')) return;
    
    const styles = document.createElement('style');
    styles.id = 'back-button-styles';
    styles.textContent = `
        /* Styles pour les boutons retour */
        .btn-back {
            transition: all 0.15s ease;
        }
        
        .btn-back:hover {
            transform: translateX(-2px);
        }
        
        .btn-back--pressed {
            background: rgba(255, 255, 255, 0.1) !important;
        }
        
        .btn-back:focus {
            outline: 2px solid var(--primary-color, #00d4ff);
            outline-offset: 2px;
        }
        
        .btn-back:focus:not(:focus-visible) {
            outline: none;
        }
        
        /* Animation pour les boutons retour */
        @keyframes backButtonPress {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
        
        .btn-back--pressed {
            animation: backButtonPress 0.15s ease;
        }
    `;
    
    document.head.appendChild(styles);
}

/**
 * Fallback simple si le système principal échoue
 */
function setupBackButtonFallback() {
    console.log('🔙 Fallback simple pour boutons retour');
    
    try {
        const backButtons = document.querySelectorAll('.btn-back, [data-back], .back-button');
        
        backButtons.forEach(button => {
            // Nettoyer les anciens listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Ajouter le nouveau listener
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Navigation simple
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.location.href = '/';
                }
            });
        });
        
        console.log(`✅ ${backButtons.length} boutons retour configurés (fallback)`);
        
    } catch (error) {
        console.error('🔙 Erreur fallback boutons retour:', error);
    }
}

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    window.BackButtonManager.setup();
});

// Initialisation supplémentaire pour les SPA
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.BackButtonManager.setup();
    });
} else {
    window.BackButtonManager.setup();
}

console.log('🔙 Back Button Manager loaded with complete navigation system');