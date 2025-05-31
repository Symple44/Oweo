// js/components/navigation.js - Corrections pour le menu mobile

class OweoNavigation {
    constructor() {
        this.currentPage = 'home';
        this.isMenuOpen = false;
        this.scrolled = false;
        this.element = null;
        this.eventListeners = new Map(); // Track des event listeners pour cleanup
        
        this.init();
    }

    init() {
        this.render();
        this.bindEvents();
        this.setupScrollBehavior();
        console.log('🧭 Navigation initialized');
    }

    render() {
        const nav = document.getElementById('navbar');
        if (!nav) {
            console.error('Navbar container not found');
            return;
        }

        nav.innerHTML = this.getTemplate();
        this.element = nav;
        
        // S'assurer que le menu est fermé au démarrage
        this.isMenuOpen = false;
        this.element.querySelector('.nav-mobile')?.classList.remove('nav-mobile--active');
        this.element.querySelector('.nav-toggle')?.classList.remove('nav-toggle--active');
    }

    getTemplate() {
        const mainMenuItems = [
            { id: 'services', label: 'Nos Services', icon: '📋' },
            { id: 'outils-gestion', label: 'ERP Métallurgie', icon: '🛠️' },
            { id: 'consulting-strategique', label: 'Conseil Expert', icon: '📊' }
        ];

        return `
            <div class="nav-container">
                <div class="nav-content">
                    <!-- Logo -->
                    <div class="nav-logo" id="nav-logo-home" role="button" tabindex="0" aria-label="Retour à l'accueil">
                        <span class="nav-logo__text">${OweoConfig.siteName}</span>
                    </div>

                    <!-- Navigation principale (desktop) -->
                    <nav class="nav-menu" role="navigation" aria-label="Navigation principale">
                        <ul class="nav-menu__list">
                            ${mainMenuItems.map(item => `
                                <li class="nav-menu__item">
                                    <a href="#${item.id}" 
                                       class="nav-menu__link" 
                                       data-nav-item="${item.id}"
                                       aria-label="Aller à ${item.label}">
                                        <span class="nav-menu__icon">${item.icon}</span>
                                        <span class="nav-menu__text">${item.label}</span>
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </nav>

                    <!-- Actions -->
                    <div class="nav-actions">
                        <button class="btn btn-primary nav-cta" data-calendly="true" aria-label="Réserver un diagnostic gratuit">
                            📅 Diagnostic Gratuit
                        </button>
                        
                        <!-- Menu mobile toggle -->
                        <button class="nav-toggle" 
                                aria-label="Menu de navigation" 
                                aria-expanded="false"
                                aria-controls="nav-mobile">
                            <span class="nav-toggle__line"></span>
                            <span class="nav-toggle__line"></span>
                            <span class="nav-toggle__line"></span>
                        </button>
                    </div>
                </div>

                <!-- Menu mobile -->
                <div class="nav-mobile" 
                     id="nav-mobile" 
                     role="dialog" 
                     aria-modal="true" 
                     aria-labelledby="nav-mobile-title"
                     aria-hidden="true">
                    <div class="nav-mobile__content">
                        <h2 id="nav-mobile-title" class="sr-only">Menu de navigation</h2>
                        
                        <ul class="nav-mobile__list" role="list">
                            <li class="nav-mobile__item">
                                <a href="#home" class="nav-mobile__link" data-nav-item="home" role="menuitem">
                                    <span class="nav-mobile__icon">🏠</span>
                                    <div>
                                        <span class="nav-mobile__label">Accueil</span>
                                        <span class="nav-mobile__description">Page d'accueil</span>
                                    </div>
                                </a>
                            </li>
                            ${mainMenuItems.map(item => `
                                <li class="nav-mobile__item">
                                    <a href="#${item.id}" class="nav-mobile__link" data-nav-item="${item.id}" role="menuitem">
                                        <span class="nav-mobile__icon">${item.icon}</span>
                                        <div>
                                            <span class="nav-mobile__label">${item.label}</span>
                                            <span class="nav-mobile__description">${this.getItemDescription(item.id)}</span>
                                        </div>
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                        
                        <div class="nav-mobile__actions">
                            <button class="btn btn-primary btn-full" data-calendly="true">
                                📅 Diagnostic Gratuit
                            </button>
                            
                            <div class="nav-mobile__contact">
                                <a href="mailto:${OweoConfig.contact.email}" class="nav-mobile__contact-item">
                                    📧 ${OweoConfig.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getItemDescription(itemId) {
        const descriptions = {
            'services': 'Nos offres et prestations',
            'outils-gestion': 'Solutions ERP spécialisées',
            'consulting-strategique': 'Accompagnement expert'
        };
        return descriptions[itemId] || '';
    }

    bindEvents() {
        if (!this.element) return;

        // Nettoyer les anciens event listeners
        this.cleanupEventListeners();

        // Logo click
        const logoElement = document.getElementById('nav-logo-home');
        if (logoElement) {
            const logoClickHandler = (e) => {
                e.preventDefault();
                console.log('Logo clicked, navigating to home');
                this.navigateToPage('home');
            };
            
            logoElement.addEventListener('click', logoClickHandler);
            logoElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    logoClickHandler(e);
                }
            });
            
            this.eventListeners.set('logo', logoClickHandler);
        }

        // Navigation links (desktop et mobile)
        const navLinks = this.element.querySelectorAll('[data-nav-item]');
        navLinks.forEach(link => {
            const linkClickHandler = (e) => {
                e.preventDefault();
                const page = link.dataset.navItem;
                console.log('Nav link clicked:', page);
                this.navigateToPage(page);
                // Fermer le menu mobile si ouvert
                if (this.isMenuOpen) {
                    this.closeMobileMenu();
                }
            };
            
            link.addEventListener('click', linkClickHandler);
            link.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    linkClickHandler(e);
                }
            });
        });

        // Toggle menu mobile - CORRECTION MAJEURE
        const toggleButton = this.element.querySelector('.nav-toggle');
        if (toggleButton) {
            const toggleHandler = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleMobileMenu();
            };
            
            toggleButton.addEventListener('click', toggleHandler);
            toggleButton.addEventListener('touchend', (e) => {
                e.preventDefault();
                toggleHandler(e);
            });
            
            this.eventListeners.set('toggle', toggleHandler);
        }

        // Calendly buttons
        const calendlyButtons = this.element.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            const calendlyHandler = (e) => {
                e.preventDefault();
                this.openCalendly();
                // Fermer le menu mobile si ouvert
                if (this.isMenuOpen) {
                    this.closeMobileMenu();
                }
            };
            button.addEventListener('click', calendlyHandler);
        });

        // Fermeture du menu mobile - AMÉLIORATIONS
        this.setupMobileMenuClosing();

        // Gestion de l'échappement clavier
        const escapeHandler = (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        };
        document.addEventListener('keydown', escapeHandler);
        this.eventListeners.set('escape', escapeHandler);

        // Gestion du redimensionnement
        const resizeHandler = () => {
            if (window.innerWidth >= 768 && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        };
        window.addEventListener('resize', resizeHandler);
        this.eventListeners.set('resize', resizeHandler);
    }

    setupMobileMenuClosing() {
        // Fermeture en cliquant sur le backdrop
        const mobileMenu = this.element.querySelector('.nav-mobile');
        if (mobileMenu) {
            const backdropHandler = (e) => {
                // Fermer seulement si on clique sur le menu lui-même, pas sur son contenu
                if (e.target === mobileMenu) {
                    this.closeMobileMenu();
                }
            };
            mobileMenu.addEventListener('click', backdropHandler);
            this.eventListeners.set('backdrop', backdropHandler);
        }

        // Fermeture en cliquant à l'extérieur (amélioration)
        const outsideClickHandler = (e) => {
            if (this.isMenuOpen && 
                !this.element.contains(e.target) && 
                !e.target.closest('.nav-mobile')) {
                this.closeMobileMenu();
            }
        };
        document.addEventListener('click', outsideClickHandler, true);
        this.eventListeners.set('outside', outsideClickHandler);
    }

    toggleMobileMenu() {
        console.log('Toggle mobile menu, current state:', this.isMenuOpen);
        
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        console.log('Opening mobile menu');
        
        if (this.isMenuOpen) return;
        
        this.isMenuOpen = true;
        
        const toggle = this.element?.querySelector('.nav-toggle');
        const mobile = this.element?.querySelector('.nav-mobile');
        
        if (toggle) {
            toggle.classList.add('nav-toggle--active');
            toggle.setAttribute('aria-expanded', 'true');
        }
        
        if (mobile) {
            mobile.classList.add('nav-mobile--active');
            mobile.setAttribute('aria-hidden', 'false');
            
            // Focus management
            setTimeout(() => {
                const firstLink = mobile.querySelector('.nav-mobile__link');
                if (firstLink) {
                    firstLink.focus();
                }
            }, 100);
        }
        
        // Bloquer le scroll du body - AMÉLIORATION
        this.lockBodyScroll();
        
        console.log('✅ Mobile menu opened');
    }

    closeMobileMenu() {
        console.log('Closing mobile menu');
        
        if (!this.isMenuOpen) return;
        
        this.isMenuOpen = false;
        
        const toggle = this.element?.querySelector('.nav-toggle');
        const mobile = this.element?.querySelector('.nav-mobile');
        
        if (toggle) {
            toggle.classList.remove('nav-toggle--active');
            toggle.setAttribute('aria-expanded', 'false');
        }
        
        if (mobile) {
            mobile.classList.remove('nav-mobile--active');
            mobile.setAttribute('aria-hidden', 'true');
        }
        
        // Débloquer le scroll du body
        this.unlockBodyScroll();
        
        console.log('✅ Mobile menu closed');
    }

    // NOUVELLES MÉTHODES POUR GÉRER LE SCROLL
    lockBodyScroll() {
        // Sauvegarder la position actuelle
        this.scrollPosition = window.pageYOffset;
        
        // Appliquer les styles pour bloquer le scroll
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
    }

    unlockBodyScroll() {
        // Restaurer les styles
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restaurer la position de scroll
        if (this.scrollPosition !== undefined) {
            window.scrollTo(0, this.scrollPosition);
        }
    }

    setupScrollBehavior() {
        let lastScroll = 0;
        
        const scrollHandler = () => {
            const currentScroll = window.scrollY;
            
            // Ajouter/retirer la classe scrolled
            if (currentScroll > 50) {
                this.element?.classList.add('nav--scrolled');
            } else {
                this.element?.classList.remove('nav--scrolled');
            }
            
            lastScroll = currentScroll;
        };
        
        window.addEventListener('scroll', scrollHandler, { passive: true });
        this.eventListeners.set('scroll', scrollHandler);
    }

    navigateToPage(page) {
        console.log('Attempting to navigate to:', page);
        
        try {
            if (window.router && typeof window.router.navigate === 'function') {
                const path = page === 'home' ? '/' : `/${page}`;
                console.log('Using router to navigate to:', path);
                window.router.navigate(path);
            } 
            else if (window.oweoApp && window.oweoApp.router && typeof window.oweoApp.router.navigate === 'function') {
                const path = page === 'home' ? '/' : `/${page}`;
                console.log('Using app router to navigate to:', path);
                window.oweoApp.router.navigate(path);
            }
            else {
                console.log('Using hash fallback to navigate to:', page);
                if (page === 'home') {
                    window.location.hash = '';
                } else {
                    window.location.hash = page;
                }
                
                const event = new CustomEvent('pagechange', { 
                    detail: { page: page } 
                });
                window.dispatchEvent(event);
            }
            
            this.setActive(page);
            
        } catch (error) {
            console.error('Navigation error:', error);
            
            if (page === 'home') {
                window.location.href = window.location.origin + window.location.pathname;
            } else {
                window.location.hash = page;
            }
        }
    }

    setActive(pageId) {
        if (!this.element) return;
        
        // Retirer toutes les classes actives
        this.element.querySelectorAll('[data-nav-item]').forEach(link => {
            link.classList.remove('nav-menu__link--active', 'nav-mobile__link--active');
        });

        // Ajouter la classe active au lien actuel
        this.element.querySelectorAll(`[data-nav-item="${pageId}"]`).forEach(link => {
            if (link.classList.contains('nav-menu__link')) {
                link.classList.add('nav-menu__link--active');
            } else if (link.classList.contains('nav-mobile__link')) {
                link.classList.add('nav-mobile__link--active');
            }
        });

        this.currentPage = pageId;
    }

    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly
            });
        } else {
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }

    // NETTOYAGE DES EVENT LISTENERS
    cleanupEventListeners() {
        this.eventListeners.forEach((handler, key) => {
            switch(key) {
                case 'escape':
                case 'outside':
                    document.removeEventListener('keydown', handler);
                    document.removeEventListener('click', handler);
                    break;
                case 'resize':
                case 'scroll':
                    window.removeEventListener(key, handler);
                    break;
            }
        });
        this.eventListeners.clear();
    }

    getCurrentPage() {
        return this.currentPage;
    }

    isMobileMenuOpen() {
        return this.isMenuOpen;
    }

    // DESTRUCTION PROPRE
    destroy() {
        this.cleanupEventListeners();
        this.unlockBodyScroll();
        if (this.element) {
            this.element.innerHTML = '';
        }
        console.log('🧭 Navigation destroyed');
    }
}

// Export
window.OweoNavigation = OweoNavigation;