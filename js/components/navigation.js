// js/components/navigation.js - Composant Navigation

class OweoNavigation {
    constructor() {
        this.currentPage = 'home';
        this.isMenuOpen = false;
        this.scrolled = false;
        this.element = null;
        
        this.init();
    }

    /**
     * Initialisation du composant
     */
    init() {
        this.render();
        this.bindEvents();
        this.setupScrollBehavior();
        console.log('🧭 Navigation component initialized');
    }

    /**
     * Rendu de la navigation
     */
    render() {
        const nav = document.getElementById('navbar');
        if (!nav) {
            console.error('Navbar container not found');
            return;
        }

        nav.innerHTML = this.getTemplate();
        this.element = nav;
        this.setupAccessibility();
    }

    /**
     * Template de la navigation
     */
    getTemplate() {
        return `
            <div class="nav-container">
                <div class="nav-content">
                    <!-- Logo -->
                    <div class="nav-logo" role="button" tabindex="0" aria-label="Retour à l'accueil">
                        <img src="assets/logo.png" alt="${OweoConfig.company.name}" class="nav-logo__image">
                        <span class="nav-logo__text">${OweoConfig.siteName}</span>
                    </div>

                    <!-- Navigation principale -->
                    <nav class="nav-menu" role="navigation" aria-label="Navigation principale">
                        <ul class="nav-menu__list">
                            ${this.renderMenuItems()}
                        </ul>
                    </nav>

                    <!-- Actions -->
                    <div class="nav-actions">
                        <button 
                            class="btn btn-primary nav-cta" 
                            aria-label="Réserver un diagnostic gratuit"
                            data-calendly="true">
                            📅 Diagnostic Gratuit
                        </button>
                        
                        <!-- Menu hamburger mobile -->
                        <button 
                            class="nav-toggle" 
                            aria-label="Ouvrir le menu"
                            aria-expanded="false"
                            aria-controls="nav-menu">
                            <span class="nav-toggle__line"></span>
                            <span class="nav-toggle__line"></span>
                            <span class="nav-toggle__line"></span>
                        </button>
                    </div>
                </div>

                <!-- Menu mobile -->
                <div class="nav-mobile" id="nav-mobile" aria-hidden="true">
                    <div class="nav-mobile__content">
                        <ul class="nav-mobile__list">
                            ${this.renderMobileMenuItems()}
                        </ul>
                        
                        <div class="nav-mobile__actions">
                            <button class="btn btn-primary btn-full" data-calendly="true">
                                📅 Diagnostic Gratuit
                            </button>
                            
                            <div class="nav-mobile__contact">
                                <a href="mailto:${OweoConfig.contact.email}" class="nav-mobile__contact-item">
                                    📧 ${OweoConfig.contact.email}
                                </a>
                                <a href="tel:${OweoConfig.contact.phone}" class="nav-mobile__contact-item">
                                    📞 ${OweoConfig.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Rendu des éléments de menu
     */
    renderMenuItems() {
        return OweoConfig.navigation
            .filter(item => item.id !== 'home') // Exclure l'accueil du menu
            .map(item => `
                <li class="nav-menu__item">
                    <a 
                        href="#${item.id}" 
                        class="nav-menu__link" 
                        data-nav-item="${item.id}"
                        aria-label="${item.description || item.label}"
                        title="${item.description || item.label}">
                        <span class="nav-menu__icon">${item.icon}</span>
                        <span class="nav-menu__text">${item.label}</span>
                    </a>
                </li>
            `).join('');
    }

    /**
     * Rendu des éléments de menu mobile
     */
    renderMobileMenuItems() {
        return OweoConfig.navigation.map(item => `
            <li class="nav-mobile__item">
                <a 
                    href="#${item.id}" 
                    class="nav-mobile__link" 
                    data-nav-item="${item.id}">
                    <span class="nav-mobile__icon">${item.icon}</span>
                    <div class="nav-mobile__content">
                        <span class="nav-mobile__label">${item.label}</span>
                        ${item.description ? `<span class="nav-mobile__description">${item.description}</span>` : ''}
                    </div>
                </a>
            </li>
        `).join('');
    }

    /**
     * Liaison des événements
     */
    bindEvents() {
        if (!this.element) return;

        // Clic sur le logo
        const logo = this.element.querySelector('.nav-logo');
        if (logo) {
            logo.addEventListener('click', () => this.navigateToHome());
            logo.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.navigateToHome();
                }
            });
        }

        // Clics sur les liens de navigation
        const navLinks = this.element.querySelectorAll('[data-nav-item]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavClick(e));
        });

        // Toggle du menu mobile
        const toggle = this.element.querySelector('.nav-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Calendly buttons
        const calendlyButtons = this.element.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            button.addEventListener('click', () => this.openCalendly());
        });

        // Fermeture du menu mobile en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && !this.element.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Gestion du redimensionnement
        window.addEventListener('resize', OweoUtils.events.debounce(() => {
            if (window.innerWidth > 768 && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        }, 250));

        // Échap pour fermer le menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });
    }

    /**
     * Comportement au scroll
     */
    setupScrollBehavior() {
        const scrollHandler = OweoUtils.events.throttle(() => {
            const isScrolled = window.scrollY > 50;
            
            if (isScrolled !== this.scrolled) {
                this.scrolled = isScrolled;
                this.element?.classList.toggle('nav--scrolled', isScrolled);
            }
        }, 16);

        window.addEventListener('scroll', scrollHandler);
    }

    /**
     * Gestion des clics de navigation
     */
    handleNavClick(event) {
        event.preventDefault();
        
        const navItem = event.currentTarget.dataset.navItem;
        if (!navItem) return;

        // Fermer le menu mobile si ouvert
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        }

        // Navigation
        if (window.router) {
            window.router.navigate(navItem);
        } else {
            console.warn('Router not available');
        }

        // Analytics
        OweoUtils.analytics?.track('navigation_click', {
            item: navItem,
            location: 'header'
        });
    }

    /**
     * Navigation vers l'accueil
     */
    navigateToHome() {
        if (window.router) {
            window.router.navigate('/');
        }
        
        OweoUtils.analytics?.track('logo_click', {
            location: 'header'
        });
    }

    /**
     * Ouverture/fermeture du menu mobile
     */
    toggleMobileMenu() {
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    /**
     * Ouverture du menu mobile
     */
    openMobileMenu() {
        this.isMenuOpen = true;
        
        const toggle = this.element?.querySelector('.nav-toggle');
        const mobile = this.element?.querySelector('.nav-mobile');
        
        if (toggle) {
            toggle.classList.add('nav-toggle--active');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', 'Fermer le menu');
        }
        
        if (mobile) {
            mobile.classList.add('nav-mobile--active');
            mobile.setAttribute('aria-hidden', 'false');
        }
        
        // Prévenir le scroll du body
        document.body.style.overflow = 'hidden';
        
        // Focus sur le premier élément
        setTimeout(() => {
            const firstLink = mobile?.querySelector('.nav-mobile__link');
            firstLink?.focus();
        }, 100);
        
        OweoUtils.analytics?.track('mobile_menu_open');
    }

    /**
     * Fermeture du menu mobile
     */
    closeMobileMenu() {
        this.isMenuOpen = false;
        
        const toggle = this.element?.querySelector('.nav-toggle');
        const mobile = this.element?.querySelector('.nav-mobile');
        
        if (toggle) {
            toggle.classList.remove('nav-toggle--active');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Ouvrir le menu');
        }
        
        if (mobile) {
            mobile.classList.remove('nav-mobile--active');
            mobile.setAttribute('aria-hidden', 'true');
        }
        
        // Restaurer le scroll du body
        document.body.style.overflow = '';
        
        OweoUtils.analytics?.track('mobile_menu_close');
    }

    /**
     * Ouverture de Calendly
     */
    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly
            });
            
            OweoUtils.analytics?.track('calendly_open', {
                location: 'header'
            });
        } else {
            console.warn('Calendly not loaded');
            // Fallback : ouvrir dans un nouvel onglet
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }

    /**
     * Mise à jour de l'état actif
     */
    setActive(pageId) {
        if (!this.element) return;
        
        // Suppression de l'état actif de tous les liens
        const allLinks = this.element.querySelectorAll('[data-nav-item]');
        allLinks.forEach(link => {
            link.classList.remove('nav-menu__link--active', 'nav-mobile__link--active');
        });

        // Ajout de l'état actif au lien courant
        const activeLinks = this.element.querySelectorAll(`[data-nav-item="${pageId}"]`);
        activeLinks.forEach(link => {
            if (link.closest('.nav-menu')) {
                link.classList.add('nav-menu__link--active');
            } else if (link.closest('.nav-mobile')) {
                link.classList.add('nav-mobile__link--active');
            }
        });

        this.currentPage = pageId;
        
        // Mise à jour de l'aria-current
        this.updateAriaCurrent(pageId);
    }

    /**
     * Mise à jour de l'attribut aria-current
     */
    updateAriaCurrent(pageId) {
        const allLinks = this.element?.querySelectorAll('[data-nav-item]');
        allLinks?.forEach(link => {
            if (link.dataset.navItem === pageId) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    /**
     * Configuration de l'accessibilité
     */
    setupAccessibility() {
        if (!this.element) return;

        // Configuration ARIA pour le menu principal
        const mainMenu = this.element.querySelector('.nav-menu__list');
        if (mainMenu) {
            mainMenu.setAttribute('role', 'menubar');
            
            const menuItems = mainMenu.querySelectorAll('.nav-menu__item');
            menuItems.forEach(item => {
                item.setAttribute('role', 'none');
                const link = item.querySelector('.nav-menu__link');
                if (link) {
                    link.setAttribute('role', 'menuitem');
                }
            });
        }

        // Configuration ARIA pour le menu mobile
        const mobileMenu = this.element.querySelector('.nav-mobile__list');
        if (mobileMenu) {
            mobileMenu.setAttribute('role', 'menu');
            
            const mobileItems = mobileMenu.querySelectorAll('.nav-mobile__item');
            mobileItems.forEach(item => {
                item.setAttribute('role', 'none');
                const link = item.querySelector('.nav-mobile__link');
                if (link) {
                    link.setAttribute('role', 'menuitem');
                }
            });
        }
    }

    /**
     * Mise à jour du badge de notification (optionnel)
     */
    updateNotificationBadge(count = 0) {
        const badge = this.element?.querySelector('.nav-notification-badge');
        if (badge) {
            if (count > 0) {
                badge.textContent = count > 99 ? '99+' : count.toString();
                badge.style.display = 'block';
                badge.setAttribute('aria-label', `${count} notifications non lues`);
            } else {
                badge.style.display = 'none';
                badge.removeAttribute('aria-label');
            }
        }
    }

    /**
     * Animation de highlight sur un élément de menu
     */
    highlightMenuItem(pageId, duration = 2000) {
        const links = this.element?.querySelectorAll(`[data-nav-item="${pageId}"]`);
        links?.forEach(link => {
            link.classList.add('nav-menu__link--highlight');
            setTimeout(() => {
                link.classList.remove('nav-menu__link--highlight');
            }, duration);
        });
    }

    /**
     * Ajout d'un indicateur de chargement
     */
    showLoading(pageId) {
        const links = this.element?.querySelectorAll(`[data-nav-item="${pageId}"]`);
        links?.forEach(link => {
            link.classList.add('nav-menu__link--loading');
        });
    }

    /**
     * Suppression de l'indicateur de chargement
     */
    hideLoading(pageId) {
        const links = this.element?.querySelectorAll(`[data-nav-item="${pageId}"]`);
        links?.forEach(link => {
            link.classList.remove('nav-menu__link--loading');
        });
    }

    /**
     * Mise à jour de la navigation basée sur les permissions
     */
    updatePermissions(permissions = {}) {
        if (!this.element) return;

        OweoConfig.navigation.forEach(item => {
            const permission = permissions[item.id];
            const links = this.element.querySelectorAll(`[data-nav-item="${item.id}"]`);
            
            links.forEach(link => {
                if (permission === false) {
                    link.style.display = 'none';
                    link.setAttribute('aria-hidden', 'true');
                } else if (permission === 'disabled') {
                    link.classList.add('nav-menu__link--disabled');
                    link.setAttribute('aria-disabled', 'true');
                } else {
                    link.style.display = '';
                    link.classList.remove('nav-menu__link--disabled');
                    link.removeAttribute('aria-hidden');
                    link.removeAttribute('aria-disabled');
                }
            });
        });
    }

    /**
     * Gestion des raccourcis clavier
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Alt + numéro pour navigation rapide
            if (e.altKey && e.key >= '1' && e.key <= '9') {
                e.preventDefault();
                const index = parseInt(e.key) - 1;
                const navigationItem = OweoConfig.navigation[index];
                
                if (navigationItem && window.router) {
                    window.router.navigate(navigationItem.id);
                    
                    OweoUtils.analytics?.track('keyboard_navigation', {
                        key: e.key,
                        item: navigationItem.id
                    });
                }
            }
            
            // Ctrl/Cmd + K pour ouvrir la recherche (si implémentée)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                // TODO: Implémenter la recherche
                console.log('Search shortcut triggered');
            }
        });
    }

    /**
     * Récupération de l'état actuel
     */
    getCurrentPage() {
        return this.currentPage;
    }

    /**
     * Vérification si le menu mobile est ouvert
     */
    isMobileMenuOpen() {
        return this.isMenuOpen;
    }

    /**
     * Destruction du composant
     */
    destroy() {
        // Suppression des event listeners
        // (Dans une vraie application, il faudrait stocker les références pour les supprimer)
        
        // Restauration du body
        document.body.style.overflow = '';
        
        // Nettoyage du DOM
        if (this.element) {
            this.element.innerHTML = '';
        }
        
        console.log('🧭 Navigation component destroyed');
    }

    /**
     * Mise à jour complète du composant
     */
    update(config = {}) {
        // Mise à jour de la configuration si fournie
        if (config.navigation) {
            OweoConfig.navigation = config.navigation;
        }
        
        // Re-rendu
        this.render();
        
        // Maintien de l'état actuel
        if (this.currentPage) {
            this.setActive(this.currentPage);
        }
        
        console.log('🧭 Navigation component updated');
    }
}

// Export et initialisation
window.OweoNavigation = OweoNavigation;