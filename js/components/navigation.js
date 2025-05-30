// js/components/navigation.js - Navigation corrigée

class OweoNavigation {
    constructor() {
        this.currentPage = 'home';
        this.isMenuOpen = false;
        this.scrolled = false;
        this.element = null;
        
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
    }

    getTemplate() {
        // Menu principal avec les pages métier
        const mainMenuItems = [
            { id: 'services', label: 'Nos Services', icon: '📋' },
            { id: 'outils-gestion', label: 'ERP Métallurgie', icon: '🛠️' },
            { id: 'consulting-strategique', label: 'Conseil Expert', icon: '📊' }
        ];

        return `
            <div class="nav-container">
                <div class="nav-content">
                    <!-- Logo - CORRECTION : Utilisation d'un event listener au lieu d'un data-navigate -->
                    <div class="nav-logo" id="nav-logo-home" role="button" tabindex="0" aria-label="Retour à l'accueil">
                        <span class="nav-logo__text">${OweoConfig.siteName}</span>
                    </div>

                    <!-- Navigation principale (desktop) -->
                    <nav class="nav-menu">
                        <ul class="nav-menu__list">
                            ${mainMenuItems.map(item => `
                                <li class="nav-menu__item">
                                    <a href="#${item.id}" 
                                       class="nav-menu__link" 
                                       data-nav-item="${item.id}">
                                        <span class="nav-menu__icon">${item.icon}</span>
                                        <span class="nav-menu__text">${item.label}</span>
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </nav>

                    <!-- Actions -->
                    <div class="nav-actions">
                        <button class="btn btn-primary nav-cta" data-calendly="true">
                            📅 Diagnostic Gratuit
                        </button>
                        
                        <!-- Menu mobile toggle -->
                        <button class="nav-toggle" aria-label="Menu">
                            <span class="nav-toggle__line"></span>
                            <span class="nav-toggle__line"></span>
                            <span class="nav-toggle__line"></span>
                        </button>
                    </div>
                </div>

                <!-- Menu mobile simplifié -->
                <div class="nav-mobile" id="nav-mobile">
                    <div class="nav-mobile__content">
                        <ul class="nav-mobile__list">
                            <li class="nav-mobile__item">
                                <a href="#home" class="nav-mobile__link" data-nav-item="home">
                                    <span class="nav-mobile__icon">🏠</span>
                                    <span class="nav-mobile__label">Accueil</span>
                                </a>
                            </li>
                            <li class="nav-mobile__item">
                                <a href="#services" class="nav-mobile__link" data-nav-item="services">
                                    <span class="nav-mobile__icon">📋</span>
                                    <span class="nav-mobile__label">Nos Services</span>
                                </a>
                            </li>
                            <li class="nav-mobile__item">
                                <a href="#outils-gestion" class="nav-mobile__link" data-nav-item="outils-gestion">
                                    <span class="nav-mobile__icon">🛠️</span>
                                    <span class="nav-mobile__label">ERP Métallurgie</span>
                                </a>
                            </li>
                            <li class="nav-mobile__item">
                                <a href="#consulting-strategique" class="nav-mobile__link" data-nav-item="consulting-strategique">
                                    <span class="nav-mobile__icon">📊</span>
                                    <span class="nav-mobile__label">Conseil Expert</span>
                                </a>
                            </li>
                        </ul>
                        
                        <div class="nav-mobile__actions">
                            <button class="btn btn-primary btn-full" data-calendly="true">
                                📅 Diagnostic Gratuit
                            </button>
                            
                            <div class="nav-mobile__contact">
                                <a href="mailto:${OweoConfig.contact.email}" class="nav-mobile__contact-item">
                                    📧 Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        if (!this.element) return;

        // Logo click - CORRECTION MAJEURE
        const logoElement = document.getElementById('nav-logo-home');
        if (logoElement) {
            logoElement.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Logo clicked, navigating to home');
                this.navigateToPage('home');
            });
            
            // Support clavier pour le logo
            logoElement.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    console.log('Logo activated via keyboard');
                    this.navigateToPage('home');
                }
            });
        } else {
            console.warn('Logo element not found');
        }

        // Navigation links
        this.element.querySelectorAll('[data-nav-item]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.navItem;
                console.log('Nav link clicked:', page);
                this.navigateToPage(page);
                if (this.isMenuOpen) this.closeMobileMenu();
            });
        });

        // Toggle menu mobile
        const toggleButton = this.element.querySelector('.nav-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // Calendly buttons
        this.element.querySelectorAll('[data-calendly]').forEach(button => {
            button.addEventListener('click', () => this.openCalendly());
        });

        // Fermeture du menu mobile en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && !this.element.contains(e.target)) {
                this.closeMobileMenu();
            }
        });

        // Échap pour fermer le menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });
    }

    setupScrollBehavior() {
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            // Ajouter/retirer la classe scrolled
            if (currentScroll > 50) {
                this.element?.classList.add('nav--scrolled');
            } else {
                this.element?.classList.remove('nav--scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }

    // CORRECTION : Fonction de navigation robuste
    navigateToPage(page) {
        console.log('Attempting to navigate to:', page);
        
        try {
            // Vérifier si le router global existe
            if (window.router && typeof window.router.navigate === 'function') {
                const path = page === 'home' ? '/' : `/${page}`;
                console.log('Using router to navigate to:', path);
                window.router.navigate(path);
            } 
            // Fallback : utiliser l'instance router de l'app
            else if (window.oweoApp && window.oweoApp.router && typeof window.oweoApp.router.navigate === 'function') {
                const path = page === 'home' ? '/' : `/${page}`;
                console.log('Using app router to navigate to:', path);
                window.oweoApp.router.navigate(path);
            }
            // Fallback : manipulation directe du hash
            else {
                console.log('Using hash fallback to navigate to:', page);
                if (page === 'home') {
                    window.location.hash = '';
                } else {
                    window.location.hash = page;
                }
                
                // Déclencher un événement de changement de page
                const event = new CustomEvent('pagechange', { 
                    detail: { page: page } 
                });
                window.dispatchEvent(event);
            }
            
            // Mise à jour de l'état actif
            this.setActive(page);
            
        } catch (error) {
            console.error('Navigation error:', error);
            
            // Dernier fallback : rechargement de la page
            if (page === 'home') {
                window.location.href = window.location.origin + window.location.pathname;
            } else {
                window.location.hash = page;
            }
        }
    }

    toggleMobileMenu() {
        if (this.isMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        this.isMenuOpen = true;
        
        const toggle = this.element?.querySelector('.nav-toggle');
        const mobile = this.element?.querySelector('.nav-mobile');
        
        if (toggle) toggle.classList.add('nav-toggle--active');
        if (mobile) mobile.classList.add('nav-mobile--active');
        
        document.body.style.overflow = 'hidden';
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        
        const toggle = this.element?.querySelector('.nav-toggle');
        const mobile = this.element?.querySelector('.nav-mobile');
        
        if (toggle) toggle.classList.remove('nav-toggle--active');
        if (mobile) mobile.classList.remove('nav-mobile--active');
        
        document.body.style.overflow = '';
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

    getCurrentPage() {
        return this.currentPage;
    }

    isMobileMenuOpen() {
        return this.isMenuOpen;
    }
}

// Export
window.OweoNavigation = OweoNavigation;