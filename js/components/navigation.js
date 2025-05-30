// js/components/navigation.js - Navigation simplifiée

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
                    <!-- Logo -->
                    <div class="nav-logo" data-navigate="home">
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

        // Logo click
        this.element.querySelector('.nav-logo')?.addEventListener('click', () => {
            this.navigateToPage('home');
        });

        // Navigation links
        this.element.querySelectorAll('[data-nav-item]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.navItem;
                this.navigateToPage(page);
                if (this.isMenuOpen) this.closeMobileMenu();
            });
        });

        // Toggle menu mobile
        this.element.querySelector('.nav-toggle')?.addEventListener('click', () => {
            this.toggleMobileMenu();
        });

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

    navigateToPage(page) {
        if (window.router) {
            const path = page === 'home' ? '/' : `/${page}`;
            window.router.navigate(path);
        }
        
        // Mise à jour de l'état actif
        this.setActive(page);
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