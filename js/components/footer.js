// js/components/footer.js - Footer complet avec accès client et support démo DSTV

class OweoFooter {
    constructor() {
        this.element = null;
        this.clientAccessCheckInterval = null;
        this.init();
    }

    /**
     * Initialisation du composant
     */
    init() {
        this.render();
        this.bindEvents();
        this.setupClientAccess();
        this.addStyles();
        console.log('🦶 Footer component initialized with dual client demos');
    }

    /**
     * Rendu du footer avec section client étendue pour deux démos
     */
    render() {
        const footer = document.getElementById('footer');
        if (!footer) {
            console.error('Footer container not found');
            return;
        }

        footer.innerHTML = this.getTemplate();
        this.element = footer;
        this.setupAccessibility();
    }

    /**
     * Template du footer complet avec section client à double démo
     */
    getTemplate() {
        return `
            <div class="footer-container">
                <div class="footer-content">
                    <!-- Section principale -->
                    <div class="footer-main">
                        <div class="footer-brand">
                            <div class="footer-logo">
                                <div class="footer-logo__icon">🏗️</div>
                                <h3 class="footer-logo__text">${this.getSiteName()}</h3>
                            </div>
                            <p class="footer-tagline">${this.getTagline()}</p>
                            <p class="footer-description">${this.getDescription()}</p>
                        </div>

                        <!-- Navigation rapide -->
                        <div class="footer-nav">
                            <h4>Navigation</h4>
                            <ul class="footer-links">
                                ${this.getNavigationItems().map(item => `
                                    <li>
                                        <a href="#${item.id}" 
                                           data-nav-item="${item.id}"
                                           aria-label="${item.description || item.label}">
                                            <span class="link-icon">${item.icon}</span>
                                            ${item.label}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <!-- Contact -->
                        <div class="footer-contact">
                            <h4>Contact</h4>
                            <div class="contact-info">
                                <div class="contact-item">
                                    <span class="contact-icon">📧</span>
                                    <a href="mailto:${this.getEmail()}" class="contact-link">
                                        ${this.getEmail()}
                                    </a>
                                </div>
                                
                                <div class="contact-item">
                                    <span class="contact-icon">📍</span>
                                    <span class="contact-text">
                                        ${this.getLocation()}
                                    </span>
                                </div>
                                
                                <div class="contact-item">
                                    <span class="contact-icon">📞</span>
                                    <a href="tel:${this.getPhone()}" class="contact-link">
                                        ${this.getPhoneDisplay()}
                                    </a>
                                </div>
                            </div>

                            <!-- Social -->
                            <div class="footer-social">
                                <h5>Suivez-nous</h5>
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
                                <p class="legal-info">
                                    Expert ERP & Transformation Digitale - ${this.getLocation()}
                                </p>
                            </div>
                            
                            <div class="footer-legal-links">
                                ${this.getLegalPages().slice(0, 3).map(page => `
                                    <a href="#${page.id}" 
                                       data-nav-item="${page.id}"
                                       class="legal-link">
                                        ${page.label}
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Back to top -->
                <button class="back-to-top" 
                        id="back-to-top" 
                        aria-label="Retour en haut de page"
                        style="display: none;">
                    <span class="back-to-top-icon">↑</span>
                </button>
            </div>
        `;
    }

    /**
     * Liaison des événements
     */
    bindEvents() {
        if (!this.element) return;

        // Navigation links
        const navLinks = this.element.querySelectorAll('[data-nav-item]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Calendly buttons
        const calendlyButtons = this.element.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            button.addEventListener('click', () => this.openCalendly());
        });

        // Back to top
        this.setupBackToTop();

        // Social links analytics
        const socialLinks = this.element.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => this.trackSocialClick(e));
        });

        // Client access events
        this.bindClientEvents();
    }

    /**
     * Liaison des événements client pour démos multiples
     */
    bindClientEvents() {
        // Boutons d'accès démo - Gestion générique pour les deux démos
        const clientDemoButtons = document.querySelectorAll('[data-demo]');
        clientDemoButtons.forEach(button => {
            button.addEventListener('click', (e) => this.handleClientDemoAccess(e));
        });

        // Bouton de déconnexion
        const logoutBtn = document.getElementById('client-logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => this.handleClientLogout(e));
        }
    }

    /**
     * Configuration de l'accès client
     */
    setupClientAccess() {
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
    }

    /**
     * Gérer l'accès à une démo client (version améliorée pour démos multiples)
     */
    handleClientDemoAccess(e) {
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
    }

    /**
     * Gérer la déconnexion client
     */
    handleClientLogout(e) {
        e.preventDefault();
        e.stopPropagation();

        if (typeof window.OweoClientAccess === 'undefined') return;

        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez ressaisir votre code d\'accès.')) {
            window.OweoClientAccess.revokeAccess();
            this.updateClientButtonsState();
            
            // Analytics
            this.trackClientAccess('client_logout', { location: 'footer' });
            
            // Notification
            this.showClientNotification('Déconnexion réussie', 'info');
        }
    }

    /**
     * Accéder à une démo spécifique
     */
    accessDemo(demoType) {
        console.log(`🚀 Accessing demo from footer: ${demoType}`);
        
        // Utiliser le système centralisé si disponible
        if (window.OweoClientDemos && typeof window.OweoClientDemos.accessDemo === 'function') {
            window.OweoClientDemos.accessDemo(demoType);
            return;
        }
        
        // Fallback vers navigation directe
        if (window.router && typeof window.router.navigate === 'function') {
            window.router.navigate(`/${demoType}`);
        } else if (window.pages && window.pages[demoType]) {
            // Fallback direct
            this.loadDemoPage(demoType);
        } else {
            console.error(`❌ Demo page ${demoType} not available`);
            this.showClientError('Démonstration temporairement indisponible.');
        }
    }

    /**
     * Charger une page démo directement
     */
    loadDemoPage(demoType) {
        const appContainer = document.getElementById('app');
        if (!appContainer) return;

        try {
            appContainer.innerHTML = window.pages[demoType].render();
            
            if (window.pages[demoType].init) {
                window.pages[demoType].init();
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`✅ Demo page ${demoType} loaded from footer`);
        } catch (error) {
            console.error(`❌ Error loading demo page ${demoType}:`, error);
            this.showClientError('Erreur lors du chargement de la démonstration.');
        }
    }

    /**
     * Mettre à jour l'état des boutons client (version pour démos multiples)
     */
    updateClientButtonsState() {
        const chiffrageBtn = document.getElementById('client-demo-chiffrage');
        const dstvBtn = document.getElementById('client-demo-dstv');
        const sessionInfo = document.getElementById('client-session-info');
        
        if (!chiffrageBtn || !dstvBtn || typeof window.OweoClientAccess === 'undefined') return;
        
        const hasAccess = window.OweoClientAccess.hasAccess();
        const session = window.OweoClientAccess.getSessionInfo();
        
        // Configuration pour chaque bouton
        const buttons = [
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
        
        buttons.forEach(config => {
            const titleEl = config.element.querySelector('.client-demo-title');
            const subtitleEl = config.element.querySelector('.client-demo-subtitle');
            const iconEl = config.element.querySelector('.client-demo-icon');
            
            if (hasAccess && session) {
                // État connecté
                config.element.classList.add('client-demo-btn--active');
                
                if (titleEl) titleEl.textContent = config.activeTitle;
                if (subtitleEl) subtitleEl.textContent = config.activeSubtitle;
                if (iconEl) iconEl.textContent = config.activeIcon;
                
                config.element.setAttribute('title', `Vous avez accès à ${config.activeTitle} - Cliquez pour accéder`);
                
            } else {
                // État déconnecté
                config.element.classList.remove('client-demo-btn--active');
                
                if (titleEl) titleEl.textContent = config.defaultTitle;
                if (subtitleEl) subtitleEl.textContent = config.defaultSubtitle;
                if (iconEl) iconEl.textContent = config.defaultIcon;
                
                config.element.setAttribute('title', `Accès client requis pour ${config.defaultTitle}`);
            }
        });
        
        // Afficher/masquer les infos de session
        if (sessionInfo) {
            if (hasAccess && session) {
                sessionInfo.style.display = 'flex';
                const sessionText = sessionInfo.querySelector('.session-text');
                if (sessionText) {
                    const timeLeft = Math.round((session.expiry - Date.now()) / (1000 * 60 * 60));
                    sessionText.textContent = `Session active (${timeLeft}h restantes)`;
                }
            } else {
                sessionInfo.style.display = 'none';
            }
        }
    }

    /**
     * Configuration du bouton retour en haut
     */
    setupBackToTop() {
        const backToTopBtn = this.element?.querySelector('#back-to-top');
        if (!backToTopBtn) return;

        // Affichage/masquage selon le scroll
        const toggleBackToTop = this.throttle(() => {
            const isVisible = window.scrollY > 500;
            backToTopBtn.style.display = isVisible ? 'flex' : 'none';
        }, 100);

        window.addEventListener('scroll', toggleBackToTop);

        // Clic pour remonter
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            this.trackEvent('back_to_top_click', { location: 'footer' });
        });
    }

    /**
     * Gestion des clics de navigation
     */
    handleNavClick(event) {
        event.preventDefault();
        
        const navItem = event.currentTarget.dataset.navItem;
        if (!navItem) return;

        // Navigation via le routeur
        if (window.router) {
            window.router.navigate(navItem === 'home' ? '/' : `/${navItem}`);
        }

        // Analytics
        this.trackEvent('footer_navigation_click', {
            item: navItem,
            location: 'footer'
        });
    }

    /**
     * Ouverture de Calendly
     */
    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: this.getCalendlyUrl()
            });
            
            this.trackEvent('calendly_open', { location: 'footer' });
        } else {
            console.warn('Calendly not loaded');
            window.open(this.getCalendlyUrl(), '_blank');
        }
    }

    /**
     * Tracking des clics sociaux
     */
    trackSocialClick(event) {
        const platform = event.currentTarget.getAttribute('aria-label')?.toLowerCase() || 'unknown';
        
        this.trackEvent('social_click', {
            platform: platform,
            location: 'footer'
        });
    }

    /**
     * Tracking des événements client
     */
    trackClientAccess(eventName, properties = {}) {
        this.trackEvent(eventName, {
            ...properties,
            location: 'footer',
            timestamp: Date.now()
        });
    }

    /**
     * Tracking générique d'événements
     */
    trackEvent(eventName, properties = {}) {
        if (window.OweoUtils && window.OweoUtils.analytics) {
            window.OweoUtils.analytics.track(eventName, properties);
        }
    }

    /**
     * Afficher une notification client
     */
    showClientNotification(message, type = 'info') {
        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(message, type, 3000);
        } else {
            // Fallback
            console.log(`${type.toUpperCase()}: ${message}`);
        }
    }

    /**
     * Afficher une erreur client
     */
    showClientError(message) {
        this.showClientNotification(message, 'error');
    }

    /**
     * Configuration de l'accessibilité
     */
    setupAccessibility() {
        if (!this.element) return;

        // ARIA labels pour les liens
        const links = this.element.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            if (!link.getAttribute('aria-label')) {
                const text = link.textContent.trim();
                link.setAttribute('aria-label', `Naviguer vers ${text}`);
            }
        });

        // Rôles ARIA pour la navigation
        const navSections = this.element.querySelectorAll('.footer-nav');
        navSections.forEach(section => {
            section.setAttribute('role', 'navigation');
            const list = section.querySelector('ul');
            if (list) {
                list.setAttribute('role', 'list');
            }
        });

        // Accessibilité de la section client
        const clientSection = this.element.querySelector('.footer-client');
        if (clientSection) {
            clientSection.setAttribute('role', 'region');
            clientSection.setAttribute('aria-label', 'Espace client et accès aux démonstrations');
        }
    }

    /**
     * Ajouter les styles CSS complets
     */
    addStyles() {
        if (document.getElementById('footer-complete-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'footer-complete-styles';
        styles.textContent = this.getFooterCSS();
        document.head.appendChild(styles);
    }

    /**
     * CSS complet du footer avec support démos multiples
     */
    getFooterCSS() {
        return `
            /* Footer Base */
            .footer {
                background: linear-gradient(135deg, var(--bg-medium) 0%, var(--bg-dark) 100%);
                border-top: 1px solid var(--border-color);
                padding: var(--space-16) 0 var(--space-8) 0;
                margin-top: auto;
                position: relative;
            }
            
            .footer-container {
                max-width: var(--container-max-width);
                margin: 0 auto;
                padding: 0 var(--container-padding);
            }
            
            .footer-content {
                position: relative;
            }
            
            .footer-main {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: var(--space-8);
                margin-bottom: var(--space-12);
            }
            
            /* Section Brand */
            .footer-brand {
                grid-column: span 1;
            }
            
            .footer-logo {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                margin-bottom: var(--space-4);
            }
            
            .footer-logo__icon {
                font-size: var(--font-size-2xl);
                color: var(--primary-color);
            }
            
            .footer-logo__text {
                color: var(--text-primary);
                font-size: var(--font-size-xl);
                font-weight: 700;
                margin: 0;
            }
            
            .footer-tagline {
                color: var(--primary-color);
                font-weight: 600;
                margin-bottom: var(--space-3);
                font-size: var(--font-size-base);
            }
            
            .footer-description {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                line-height: var(--line-height-relaxed);
                margin: 0;
            }
            
            /* Section Navigation */
            .footer-nav h4,
            .footer-contact h4,
            .footer-client h4 {
                color: var(--text-primary);
                font-size: var(--font-size-lg);
                font-weight: 600;
                margin-bottom: var(--space-4);
                display: flex;
                align-items: center;
                gap: var(--space-2);
            }
            
            .footer-links {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .footer-links li {
                margin-bottom: var(--space-3);
            }
            
            .footer-links a {
                color: var(--text-secondary);
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: var(--space-2);
                padding: var(--space-2);
                border-radius: var(--radius-sm);
                transition: var(--transition-fast);
                font-size: var(--font-size-sm);
            }
            
            .footer-links a:hover {
                color: var(--primary-color);
                background: var(--bg-card-hover);
                transform: translateX(4px);
            }
            
            .link-icon {
                font-size: var(--font-size-base);
            }
            
            /* Section Contact */
            .contact-info {
                margin-bottom: var(--space-6);
            }
            
            .contact-item {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                margin-bottom: var(--space-3);
                padding: var(--space-2);
            }
            
            .contact-icon {
                font-size: var(--font-size-lg);
                color: var(--primary-color);
                width: 24px;
                text-align: center;
            }
            
            .contact-link {
                color: var(--text-secondary);
                text-decoration: none;
                transition: var(--transition-fast);
                font-size: var(--font-size-sm);
            }
            
            .contact-link:hover {
                color: var(--primary-color);
            }
            
            .contact-text {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
            }
            
            /* Section Social */
            .footer-social h5 {
                color: var(--text-primary);
                font-size: var(--font-size-base);
                font-weight: 600;
                margin-bottom: var(--space-3);
            }
            
            .social-links {
                display: flex;
                flex-direction: column;
                gap: var(--space-2);
            }
            
            .social-link {
                display: flex;
                align-items: center;
                gap: var(--space-2);
                color: var(--text-secondary);
                text-decoration: none;
                padding: var(--space-2);
                border-radius: var(--radius-sm);
                transition: var(--transition-fast);
                font-size: var(--font-size-sm);
            }
            
            .social-link:hover {
                color: var(--primary-color);
                background: var(--bg-card-hover);
            }
            
            .social-icon {
                font-size: var(--font-size-base);
            }
            
            /* Section Client - STYLES PRINCIPAUX AVEC DÉMOS MULTIPLES */
            .footer-client {
                grid-column: span 1;
                min-width: 300px;
            }
            
            .client-title-icon {
                color: var(--primary-color);
                font-size: var(--font-size-lg);
            }
            
            .client-access {
                background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-medium) 100%);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                padding: var(--space-5);
                transition: var(--transition-base);
                position: relative;
                overflow: hidden;
            }
            
            .client-access::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
            }
            
            .client-access:hover {
                border-color: var(--primary-color);
                box-shadow: 0 8px 24px rgba(0, 212, 255, 0.15);
                transform: translateY(-2px);
            }
            
            .client-description {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                margin-bottom: var(--space-5);
                text-align: center;
                line-height: var(--line-height-relaxed);
            }
            
            /* Boutons Démo - Base commune */
            .client-demo-btn {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                width: 100%;
                padding: var(--space-4);
                border: none;
                border-radius: var(--radius-md);
                color: white;
                cursor: pointer;
                transition: var(--transition-base);
                font-family: inherit;
                position: relative;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                margin-bottom: var(--space-3);
            }
            
            .client-demo-btn:last-of-type {
                margin-bottom: 0;
            }
            
            .client-demo-btn:hover {
                transform: translateY(-3px);
            }
            
            .client-demo-btn:active {
                transform: translateY(-1px);
            }
            
            .client-demo-btn::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                transition: left 0.6s ease;
            }
            
            .client-demo-btn:hover::before {
                left: 100%;
            }
            
            /* Démo Chiffrage - Bleu */
            .client-demo-chiffrage {
                background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
                box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
            }
            
            .client-demo-chiffrage:hover {
                box-shadow: 0 12px 24px rgba(0, 212, 255, 0.4);
            }
            
            /* Démo DSTV - Violet */
            .client-demo-dstv {
                background: linear-gradient(45deg, var(--secondary-color), var(--accent-color));
                box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
            }
            
            .client-demo-dstv:hover {
                box-shadow: 0 12px 24px rgba(124, 58, 237, 0.4);
            }
            
            .client-demo-icon {
                font-size: var(--font-size-xl);
                flex-shrink: 0;
                filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
            }
            
            .client-demo-text {
                flex: 1;
                text-align: left;
            }
            
            .client-demo-title {
                font-weight: 600;
                font-size: var(--font-size-base);
                margin-bottom: var(--space-1);
                line-height: var(--line-height-tight);
            }
            
            .client-demo-subtitle {
                font-size: var(--font-size-sm);
                opacity: 0.9;
                font-weight: 400;
            }
            
            .client-demo-arrow {
                font-size: var(--font-size-lg);
                font-weight: bold;
                opacity: 0.8;
                transition: var(--transition-fast);
            }
            
            .client-demo-btn:hover .client-demo-arrow {
                transform: translateX(4px);
                opacity: 1;
            }
            
            /* États actifs des boutons */
            .client-demo-btn--active {
                background: linear-gradient(45deg, var(--success-color), var(--primary-color)) !important;
                box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3) !important;
            }
            
            .client-demo-btn--active:hover {
                box-shadow: 0 12px 24px rgba(76, 175, 80, 0.4) !important;
            }
            
            .client-demo-btn--active .client-demo-icon {
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            /* Aide client */
            .client-help {
                margin-top: var(--space-4);
                text-align: center;
            }
            
            .client-help-text {
                font-size: var(--font-size-xs);
                color: var(--text-muted);
                margin: 0;
                font-style: italic;
                line-height: var(--line-height-relaxed);
            }
            
            /* Informations de session */
            .client-session-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: var(--space-4);
                padding: var(--space-3);
                background: rgba(76, 175, 80, 0.1);
                border: 1px solid var(--success-color);
                border-radius: var(--radius-sm);
            }
            
            .session-status {
                display: flex;
                align-items: center;
                gap: var(--space-2);
            }
            
            .session-icon {
                color: var(--success-color);
                font-size: var(--font-size-sm);
            }
            
            .session-text {
                color: var(--success-color);
                font-size: var(--font-size-xs);
                font-weight: 600;
            }
            
            .session-logout {
                background: none;
                border: 1px solid var(--text-muted);
                color: var(--text-muted);
                padding: var(--space-1) var(--space-2);
                border-radius: var(--radius-sm);
                font-size: var(--font-size-xs);
                cursor: pointer;
                transition: var(--transition-fast);
            }
            
            .session-logout:hover {
                border-color: var(--error-color);
                color: var(--error-color);
                background: rgba(244, 67, 54, 0.1);
            }
            
            /* Section Légale */
            .footer-legal {
                border-top: 1px solid var(--border-color);
                padding-top: var(--space-8);
            }
            
            .footer-bottom {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: var(--space-4);
            }
            
            .footer-copyright p {
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
                margin-bottom: var(--space-2);
            }
            
            .footer-copyright p:last-child {
                margin-bottom: 0;
            }
            
            .legal-info {
                color: var(--text-muted);
                font-size: var(--font-size-xs);
            }
            
            .footer-legal-links {
                display: flex;
                gap: var(--space-4);
                flex-wrap: wrap;
            }
            
            .legal-link {
                color: var(--text-muted);
                text-decoration: none;
                font-size: var(--font-size-xs);
                padding: var(--space-2);
                border-radius: var(--radius-sm);
                transition: var(--transition-fast);
            }
            
            .legal-link:hover {
                color: var(--primary-color);
                background: var(--bg-card-hover);
            }
            
            /* Back to Top */
            .back-to-top {
                position: fixed;
                bottom: var(--space-6);
                right: var(--space-6);
                width: 50px;
                height: 50px;
                background: var(--primary-color);
                border: none;
                border-radius: var(--radius-full);
                color: white;
                cursor: pointer;
                transition: var(--transition-base);
                box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
                z-index: var(--z-sticky);
                display: none;
                align-items: center;
                justify-content: center;
            }
            
            .back-to-top:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4);
            }
            
            .back-to-top-icon {
                font-size: var(--font-size-lg);
                font-weight: bold;
            }
            
            /* Responsive Design */
            @media (max-width: 1200px) {
                .footer-main {
                    grid-template-columns: 1fr 1fr 1fr;
                }
                
                .footer-brand {
                    grid-column: span 1;
                }
                
                .footer-client {
                    grid-column: span 1;
                }
            }
            
            @media (max-width: 1024px) {
                .footer-main {
                    grid-template-columns: 1fr 1fr;
                    gap: var(--space-6);
                }
                
                .footer-brand {
                    grid-column: span 2;
                    text-align: center;
                    margin-bottom: var(--space-6);
                }
                
                .footer-client {
                    grid-column: span 2;
                    margin-top: var(--space-6);
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
            
            @media (max-width: 768px) {
                .footer {
                    padding: var(--space-12) 0 var(--space-6) 0;
                }
                
                .footer-main {
                    grid-template-columns: 1fr;
                    text-align: center;
                    gap: var(--space-8);
                }
                
                .footer-brand,
                .footer-client {
                    grid-column: span 1;
                    margin: 0;
                }
                
                .footer-client {
                    order: -1; /* Placer en haut sur mobile */
                    margin-bottom: var(--space-8);
                }
                
                .client-demo-btn {
                    padding: var(--space-5);
                    font-size: var(--font-size-lg);
                    margin-bottom: var(--space-4);
                }
                
                .client-demo-title {
                    font-size: var(--font-size-lg);
                }
                
                .footer-bottom {
                    flex-direction: column;
                    text-align: center;
                    gap: var(--space-6);
                }
                
                .footer-legal-links {
                    justify-content: center;
                }
                
                .back-to-top {
                    bottom: var(--space-4);
                    right: var(--space-4);
                    width: 45px;
                    height: 45px;
                }
            }
            
            @media (max-width: 480px) {
                .client-access {
                    padding: var(--space-4);
                }
                
                .client-demo-btn {
                    padding: var(--space-4);
                    flex-direction: column;
                    text-align: center;
                    gap: var(--space-2);
                }
                
                .client-demo-icon {
                    font-size: var(--font-size-lg);
                }
                
                .client-demo-arrow {
                    display: none;
                }
                
                .footer-legal-links {
                    flex-direction: column;
                    gap: var(--space-2);
                }
            }
        `;
    }

    /**
     * Méthodes utilitaires pour récupérer les données de configuration
     */
    getSiteName() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.siteName) || 'Oweo';
    }

    getCompanyName() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.company?.name) || 'Oweo Consulting';
    }

    getTagline() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.company?.tagline) || 'Expert ERP & Transformation Digitale';
    }

    getDescription() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.company?.description) || 'Accompagnement sur-mesure pour entreprises de charpente métallique';
    }

    getEmail() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.email) || 'contact@oweo-consulting.fr';
    }

    getPhone() {
        return '+33123456789'; // Format pour le lien tel:
    }

    getPhoneDisplay() {
        return '01 23 45 67 89'; // Format pour l'affichage
    }

    getLocation() {
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
        // Nettoyer l'interval de vérification client
        if (this.clientAccessCheckInterval) {
            clearInterval(this.clientAccessCheckInterval);
            this.clientAccessCheckInterval = null;
        }
        
        // Nettoyer les event listeners serait ici dans une vraie app
        
        if (this.element) {
            this.element.innerHTML = '';
        }
        
        console.log('🦶 Footer component destroyed');
    }

    /**
     * Mise à jour du composant
     */
    update(config = {}) {
        if (config.contact) {
            // Logique de mise à jour
        }
        
        // Re-vérifier l'état client
        this.updateClientButtonsState();
        
        console.log('🦶 Footer component updated');
    }
}

// Export et initialisation
window.OweoFooter = OweoFooter;