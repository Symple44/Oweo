// js/components/footer.js - Version complète corrigée
// Composant footer avec gestion des démos client

class OweoFooter {
    constructor() {
        this.element = null;
        this.clientAccessCheckInterval = null;
        this.isInitialized = false;
    }

    /**
     * Rendu HTML du footer
     */
    render() {
        return `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        
                        <!-- SECTION PRINCIPALE -->
                        <div class="footer-main">
                            <div class="footer-brand">
                                <h3 class="footer-logo">
                                    <span class="logo-icon">⚙️</span>
                                    ${this.getCompanyName()}
                                </h3>
                                <p class="footer-tagline">
                                    ${this.getCompanyTagline()}
                                </p>
                            </div>

                            <div class="footer-nav">
                                <h4>Navigation</h4>
                                <ul class="footer-links">
                                    ${this.getNavigationItems().map(item => `
                                        <li>
                                            <a href="#${item.id}" 
                                               class="footer-link"
                                               data-page="${item.id}"
                                               title="${item.description}">
                                                <span class="link-icon">${item.icon}</span>
                                                ${item.label}
                                            </a>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <div class="footer-contact">
                                <h4>Contact</h4>
                                <div class="contact-info">
                                    <div class="contact-item">
                                        <span class="contact-icon">📧</span>
                                        <a href="mailto:${this.getContactEmail()}" class="contact-link">
                                            ${this.getContactEmail()}
                                        </a>
                                    </div>
                                    <div class="contact-item">
                                        <span class="contact-icon">📞</span>
                                        <a href="tel:${this.getContactPhone().replace(/\s/g, '')}" class="contact-link">
                                            ${this.getContactPhone()}
                                        </a>
                                    </div>
                                    <div class="contact-item">
                                        <span class="contact-icon">📍</span>
                                        <span class="contact-text">${this.getContactAddress()}</span>
                                    </div>
                                </div>
                                
                                <div class="footer-cta">
                                    <button class="btn btn-primary btn-sm footer-cta-btn" 
                                            onclick="window.open('${this.getCalendlyUrl()}', '_blank')"
                                            title="Prendre rendez-vous">
                                        📅 Réserver un Créneau
                                    </button>
                                </div>
                            </div>

                            <div class="footer-social">
                                <h4>Suivez-nous</h4>
                                <div class="social-links">
                                    <a href="${this.getLinkedIn()}" 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       class="social-link"
                                       aria-label="LinkedIn Oweo">
                                        <span class="social-icon">💼</span>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- SECTION ESPACE CLIENT ÉTENDUE AVEC DEUX DÉMOS -->
                        <div class="footer-client">
                            <h4>
                                <span class="client-title-icon">🔐</span>
                                Espace Client
                            </h4>
                            <div class="client-access">
                                <p class="client-description">
                                    Accès exclusif aux démonstrations interactives
                                </p>
                                
                                <!-- Démo Chiffrage ERP -->
                                <button class="client-demo-btn client-demo-chiffrage" 
                                        id="client-demo-chiffrage"
                                        data-demo="outil-chiffrage-demo"
                                        aria-label="Accéder à la démonstration de chiffrage ERP"
                                        title="Démonstration Chiffrage ERP - Code d'accès requis">
                                    <span class="client-demo-icon">🔐</span>
                                    <div class="client-demo-text">
                                        <div class="client-demo-title">Démo Chiffrage ERP</div>
                                        <div class="client-demo-subtitle">Clients uniquement</div>
                                    </div>
                                    <span class="client-demo-arrow">→</span>
                                </button>
                                
                                <!-- Démo Import DSTV -->
                                <button class="client-demo-btn client-demo-dstv" 
                                        id="client-demo-dstv"
                                        data-demo="import-dstv-demo"
                                        aria-label="Accéder à la démonstration Import DSTV"
                                        title="Démonstration Import DSTV & Assignation Machines - Code d'accès requis">
                                    <span class="client-demo-icon">🔄</span>
                                    <div class="client-demo-text">
                                        <div class="client-demo-title">Démo Import DSTV</div>
                                        <div class="client-demo-subtitle">Assignation automatique</div>
                                    </div>
                                    <span class="client-demo-arrow">→</span>
                                </button>
                                
                                <div class="client-help">
                                    <p class="client-help-text">
                                        Code d'accès fourni par votre référent Oweo
                                    </p>
                                </div>

                                <!-- Indicateur de session -->
                                <div class="client-session-info" id="client-session-info" style="display: none;">
                                    <div class="session-status">
                                        <span class="session-icon">✅</span>
                                        <span class="session-text">Session active</span>
                                    </div>
                                    <button class="session-logout" id="client-logout" title="Révoquer l'accès">
                                        🚪 Déconnexion
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Section légale -->
                    <div class="footer-legal">
                        <div class="footer-bottom">
                            <div class="footer-copyright">
                                <p>© ${new Date().getFullYear()} ${this.getCompanyName()}. Tous droits réservés.</p>
                            </div>
                            
                            <div class="footer-legal-links">
                                ${this.getLegalPages().map(page => `
                                    <a href="#${page.id}" 
                                       class="legal-link"
                                       data-page="${page.id}">
                                        ${page.label}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }

    /**
     * Initialisation du composant
     */
    init() {
        try {
            if (this.isInitialized) {
                console.log('🦶 Footer déjà initialisé');
                return;
            }

            this.bindEvents();
            this.initClientAccess();
            this.isInitialized = true;
            
            console.log('🦶 Footer component initialized');
            
        } catch (error) {
            console.error('🦶 Erreur initialisation footer:', error);
        }
    }

    /**
     * Liaison des événements
     */
    bindEvents() {
        try {
            // Délégation d'événements pour tous les liens et boutons
            document.addEventListener('click', this.handleClick.bind(this));
            
            // Gestion du throttling pour les clics répétés
            this.handleClick = this.throttle(this.handleClick.bind(this), 300);
            
            console.log('🦶 Événements footer liés');
            
        } catch (error) {
            console.error('🦶 Erreur liaison événements footer:', error);
        }
    }

    /**
     * Gestionnaire principal des clics
     */
    handleClick(e) {
        try {
            // Navigation interne
            const navLink = e.target.closest('.footer-link[data-page]');
            if (navLink) {
                this.handleNavigation(e, navLink);
                return;
            }

            // Liens légaux
            const legalLink = e.target.closest('.legal-link[data-page]');
            if (legalLink) {
                this.handleLegalNavigation(e, legalLink);
                return;
            }

            // Démos client - Chiffrage
            if (e.target.closest('#client-demo-chiffrage')) {
                this.handleClientDemoAccess(e);
                return;
            }

            // Démos client - DSTV
            if (e.target.closest('#client-demo-dstv')) {
                this.handleClientDemoAccess(e);
                return;
            }

            // Déconnexion client
            if (e.target.closest('#client-logout')) {
                this.handleClientLogout(e);
                return;
            }

        } catch (error) {
            console.error('🦶 Erreur gestionnaire clic footer:', error);
        }
    }

    /**
     * Navigation interne
     */
    handleNavigation(e, link) {
        try {
            e.preventDefault();
            e.stopPropagation();
            
            const pageId = link.dataset.page;
            console.log(`🦶 Navigation footer vers: ${pageId}`);
            
            // Animation du lien
            link.style.transform = 'scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);
            
            // Navigation avec router si disponible
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(`/${pageId}`);
            } else {
                // Fallback - scroll vers la section si elle existe
                const targetElement = document.getElementById(pageId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.hash = pageId;
                }
            }
            
            // Analytics
            this.trackNavigation('footer_nav', pageId);
            
        } catch (error) {
            console.error('🦶 Erreur navigation footer:', error);
        }
    }

    /**
     * Navigation vers pages légales
     */
    handleLegalNavigation(e, link) {
        try {
            e.preventDefault();
            e.stopPropagation();
            
            const pageId = link.dataset.page;
            console.log(`🦶 Navigation légale vers: ${pageId}`);
            
            // Navigation similaire à la navigation normale
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(`/${pageId}`);
            } else {
                window.location.hash = pageId;
            }
            
            // Analytics
            this.trackNavigation('footer_legal', pageId);
            
        } catch (error) {
            console.error('🦶 Erreur navigation légale:', error);
        }
    }

    /**
     * Initialisation de l'accès client
     */
    initClientAccess() {
        try {
            // Vérifier l'état initial
            this.updateClientButtonsState();
            
            // Vérifier périodiquement l'état de session (toutes les minutes)
            this.clientAccessCheckInterval = setInterval(() => {
                this.updateClientButtonsState();
            }, 60000);

            // Écouter les changements de session
            window.addEventListener('storage', (e) => {
                if (e.key === 'oweo_client_session') {
                    this.updateClientButtonsState();
                }
            });

            // Écouter les événements personnalisés d'authentification
            window.addEventListener('clientAuthSuccess', () => {
                this.updateClientButtonsState();
            });

            window.addEventListener('clientAuthLogout', () => {
                this.updateClientButtonsState();
            });
            
            console.log('🦶 Accès client initialisé');
            
        } catch (error) {
            console.error('🦶 Erreur initialisation accès client:', error);
        }
    }

    /**
     * Gérer l'accès à une démo client (version améliorée pour démos multiples)
     */
    handleClientDemoAccess(e) {
        try {
            e.preventDefault();
            e.stopPropagation();
            
            const demoType = e.currentTarget.dataset.demo;
            console.log(`🔐 Client demo access requested from footer: ${demoType}`);
            
            // Vérifier si OweoClientAccess est disponible
            if (typeof window.OweoClientAccess === 'undefined') {
                console.error('OweoClientAccess not loaded');
                this.showClientError('Système d\'accès client non disponible. Veuillez recharger la page.');
                return;
            }
            
            // Animation du bouton
            const btn = e.currentTarget;
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            
            // Vérifier l'accès existant
            if (window.OweoClientAccess.hasAccess()) {
                // Accès direct à la démo spécifiée
                this.accessDemo(demoType);
            } else {
                // Demander authentification avec démo cible
                window.OweoClientAccess.showAuthModal(demoType);
            }
            
            // Analytics
            this.trackClientAccess('footer_demo_click', {
                demoType: demoType,
                hasAccess: window.OweoClientAccess.hasAccess()
            });
            
        } catch (error) {
            console.error('🦶 Erreur accès démo client:', error);
            this.showClientError('Erreur lors de l\'accès à la démonstration');
        }
    }

    /**
     * Gérer la déconnexion client
     */
    handleClientLogout(e) {
        try {
            e.preventDefault();
            e.stopPropagation();

            if (typeof window.OweoClientAccess === 'undefined') return;

            if (confirm('Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez ressaisir votre code d\'accès.')) {
                window.OweoClientAccess.logout();
                this.updateClientButtonsState();
                
                // Analytics
                this.trackClientAccess('footer_logout');
            }
            
        } catch (error) {
            console.error('🦶 Erreur déconnexion client:', error);
        }
    }

    /**
     * Accéder à une démo
     */
    accessDemo(demoType) {
        try {
            console.log(`🎯 Accès démo: ${demoType}`);
            
            // Utiliser le système centralisé si disponible
            if (window.OweoClientDemos && typeof window.OweoClientDemos.accessDemo === 'function') {
                window.OweoClientDemos.accessDemo(demoType);
            } else if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(`/${demoType}`);
            } else {
                // Fallback
                window.location.href = `#${demoType}`;
            }
            
        } catch (error) {
            console.error('🦶 Erreur accès démo:', error);
            this.showClientError('Erreur lors de l\'accès à la démonstration');
        }
    }

    /**
     * Mettre à jour l'état des boutons client (version pour démos multiples)
     */
    updateClientButtonsState() {
        try {
            const chiffrageBtn = document.getElementById('client-demo-chiffrage');
            const dstvBtn = document.getElementById('client-demo-dstv');
            const sessionInfo = document.getElementById('client-session-info');
            
            // Vérifier présence des éléments
            if (!chiffrageBtn || !dstvBtn) {
                console.warn('🔐 Boutons client non trouvés dans le DOM');
                return;
            }
            
            // Vérifier système d'accès
            if (typeof window.OweoClientAccess === 'undefined') {
                console.warn('🔐 OweoClientAccess non disponible');
                this.setButtonsDisabledState([chiffrageBtn, dstvBtn]);
                return;
            }
            
            const hasAccess = window.OweoClientAccess.hasAccess();
            const session = window.OweoClientAccess.getSessionInfo();
            
            // Configuration des boutons
            const buttonsConfig = [
                {
                    element: chiffrageBtn,
                    demo: 'outil-chiffrage-demo',
                    activeTitle: 'Démo Chiffrage Active',
                    activeSubtitle: 'Session en cours',
                    activeIcon: '✅',
                    defaultTitle: 'Démo Chiffrage ERP',
                    defaultSubtitle: 'Clients uniquement',
                    defaultIcon: '🔐'
                },
                {
                    element: dstvBtn,
                    demo: 'import-dstv-demo',
                    activeTitle: 'Démo DSTV Active',
                    activeSubtitle: 'Session en cours',
                    activeIcon: '✅',
                    defaultTitle: 'Démo Import DSTV',
                    defaultSubtitle: 'Assignation automatique',
                    defaultIcon: '🔄'
                }
            ];
            
            // Appliquer la configuration
            buttonsConfig.forEach(config => {
                this.updateButtonState(config, hasAccess, session);
            });
            
            // Gérer l'affichage des infos de session
            if (sessionInfo) {
                sessionInfo.style.display = hasAccess ? 'block' : 'none';
            }
            
        } catch (error) {
            console.error('🔐 Erreur mise à jour boutons client:', error);
        }
    }

    /**
     * Mise à jour d'état d'un bouton individuel
     */
    updateButtonState(config, hasAccess, session) {
        try {
            const { element } = config;
            const titleEl = element.querySelector('.client-demo-title');
            const subtitleEl = element.querySelector('.client-demo-subtitle');
            const iconEl = element.querySelector('.client-demo-icon');
            
            if (hasAccess && session) {
                // État connecté
                element.classList.add('client-demo-btn--active');
                element.removeAttribute('disabled');
                
                if (titleEl) titleEl.textContent = config.activeTitle;
                if (subtitleEl) subtitleEl.textContent = config.activeSubtitle;
                if (iconEl) iconEl.textContent = config.activeIcon;
                
                element.setAttribute('title', `${config.activeTitle} - Cliquez pour accéder`);
                
            } else {
                // État déconnecté
                element.classList.remove('client-demo-btn--active');
                element.removeAttribute('disabled');
                
                if (titleEl) titleEl.textContent = config.defaultTitle;
                if (subtitleEl) subtitleEl.textContent = config.defaultSubtitle;
                if (iconEl) iconEl.textContent = config.defaultIcon;
                
                element.setAttribute('title', `${config.defaultTitle} - Accès client requis`);
            }
            
        } catch (error) {
            console.error('🔐 Erreur mise à jour bouton:', error);
        }
    }

    /**
     * État désactivé pour les boutons
     */
    setButtonsDisabledState(buttons) {
        try {
            buttons.forEach(button => {
                button.classList.remove('client-demo-btn--active');
                button.setAttribute('disabled', 'true');
                button.setAttribute('title', 'Système d\'accès non disponible');
                
                const iconEl = button.querySelector('.client-demo-icon');
                if (iconEl) iconEl.textContent = '⚠️';
            });
        } catch (error) {
            console.error('🔐 Erreur désactivation bouton:', error);
        }
    }

    /**
     * Afficher erreur client
     */
    showClientError(message) {
        try {
            if (window.OweoClientAccess && typeof window.OweoClientAccess.showNotification === 'function') {
                window.OweoClientAccess.showNotification(message, 'error', 4000);
            } else {
                console.error(`🔐 ${message}`);
                alert(message); // Fallback
            }
        } catch (error) {
            console.error('🦶 Erreur affichage erreur client:', error);
        }
    }

    /**
     * Tracking des événements
     */
    trackNavigation(source, target) {
        try {
            if (window.OweoUtils && window.OweoUtils.analytics) {
                window.OweoUtils.analytics.track('navigation', {
                    source: source,
                    target: target,
                    timestamp: Date.now()
                });
            }
        } catch (error) {
            console.error('🦶 Erreur tracking navigation:', error);
        }
    }

    trackClientAccess(event, data = {}) {
        try {
            if (window.OweoUtils && window.OweoUtils.analytics) {
                window.OweoUtils.analytics.track(event, {
                    ...data,
                    timestamp: Date.now()
                });
            }
        } catch (error) {
            console.error('🦶 Erreur tracking accès client:', error);
        }
    }

    /**
     * Getters pour la configuration (avec fallbacks)
     */
    getCompanyName() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.company?.name) || 'Oweo';
    }

    getCompanyTagline() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.company?.tagline) || 'Expert ERP Charpente Métallique';
    }

    getContactEmail() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.email) || 'contact@oweo-consulting.fr';
    }

    getContactPhone() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.phone) || '+33 (0)2 xx xx xx xx';
    }

    getContactAddress() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.address?.city) || 'Nantes, France';
    }

    getLinkedIn() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.social?.linkedin) || 'https://linkedin.com/company/oweo-consulting';
    }

    getCalendlyUrl() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.urls?.calendly) || 'https://calendly.com/oweo-consulting';
    }

    getNavigationItems() {
        if (typeof OweoConfig !== 'undefined' && OweoConfig.navigation) {
            return OweoConfig.navigation;
        }
        
        return [
            { id: 'home', label: 'Accueil', icon: '🏠', description: 'Page d\'accueil' },
            { id: 'services', label: 'Services', icon: '📋', description: 'Nos prestations' },
            { id: 'outils-gestion', label: 'ERP Métallurgie', icon: '🛠️', description: 'Solutions ERP spécialisées' },
            { id: 'consulting-strategique', label: 'Conseil Expert', icon: '📊', description: 'Accompagnement stratégique' }
        ];
    }

    getLegalPages() {
        if (typeof OweoConfig !== 'undefined' && OweoConfig.legalPages) {
            return OweoConfig.legalPages.filter(page => page.required);
        }
        
        return [
            { id: 'mentions-legales', label: 'Mentions légales' },
            { id: 'politique-confidentialite', label: 'Confidentialité' },
            { id: 'conditions-utilisation', label: 'CGU' }
        ];
    }

    /**
     * Fonction utilitaire de throttle
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    /**
     * Destruction du composant
     */
    destroy() {
        try {
            // Nettoyer l'interval de vérification client
            if (this.clientAccessCheckInterval) {
                clearInterval(this.clientAccessCheckInterval);
                this.clientAccessCheckInterval = null;
            }
            
            if (this.element) {
                this.element.innerHTML = '';
            }
            
            this.isInitialized = false;
            
            console.log('🦶 Footer component destroyed');
            
        } catch (error) {
            console.error('🦶 Erreur destruction footer:', error);
        }
    }

    /**
     * Mise à jour du composant
     */
    update(config = {}) {
        try {
            if (config.contact) {
                // Logique de mise à jour si nécessaire
            }
            
            // Re-vérifier l'état client
            this.updateClientButtonsState();
            
            console.log('🦶 Footer component updated');
            
        } catch (error) {
            console.error('🦶 Erreur mise à jour footer:', error);
        }
    }
}

// Export et initialisation
window.OweoFooter = OweoFooter;

// Auto-initialisation pour compatibilité
document.addEventListener('DOMContentLoaded', () => {
    if (!window.footerInstance) {
        window.footerInstance = new OweoFooter();
    }
});

console.log('🦶 Footer component loaded with complete corrections');