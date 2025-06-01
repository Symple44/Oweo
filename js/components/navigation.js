// js/components/navigation.js - Navigation corrigée pour mobile

class OweoNavigation {
    constructor() {
        this.isMenuOpen = false;
        this.scrollY = 0;
        this.touchStartY = 0;
        this.init();
    }

    init() {
        console.log('🧭 Initializing Navigation...');
        this.render();
        this.bindEvents();
        this.handleScroll();
        console.log('✅ Navigation initialized');
    }

    render() {
        const navbar = document.getElementById('navbar');
        if (!navbar) {
            console.warn('⚠️ Navbar container not found');
            return;
        }

        navbar.innerHTML = `
            <div class="nav-container">
                <div class="nav-content">
                    <!-- Logo -->
                    <a href="#" class="nav-logo" data-page="home" aria-label="Oweo - Retour à l'accueil">
                        <div class="nav-logo__image">🏗️</div>
                        <h1 class="nav-logo__text">Oweo</h1>
                    </a>

                    <!-- Menu Desktop -->
                    <nav class="nav-menu" role="navigation" aria-label="Menu principal">
                        <ul class="nav-menu__list">
                            ${this.getNavigationItems().map(item => `
                                <li class="nav-menu__item">
                                    <a href="#" class="nav-menu__link" data-page="${item.id}" 
                                       aria-label="${item.label}">
                                        <span class="nav-menu__icon">${item.icon}</span>
                                        <span class="nav-menu__text">${item.label}</span>
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </nav>

                    <!-- Actions -->
                    <div class="nav-actions">
                        <a href="#" class="nav-cta" data-calendly="true" aria-label="Réserver un diagnostic gratuit">
                            Diagnostic Gratuit
                        </a>
                        
                        <!-- Bouton Menu Mobile -->
                        <button class="nav-toggle" 
                                aria-label="Ouvrir le menu" 
                                aria-expanded="false"
                                aria-controls="nav-mobile-menu"
                                type="button">
                            <span class="nav-toggle__line" aria-hidden="true"></span>
                            <span class="nav-toggle__line" aria-hidden="true"></span>
                            <span class="nav-toggle__line" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Menu Mobile -->
            <nav class="nav-mobile" 
                 role="navigation" 
                 aria-label="Menu mobile"
                 id="nav-mobile-menu"
                 aria-hidden="true">
                <div class="nav-mobile__content">
                    <ul class="nav-mobile__list" role="list">
                        ${this.getNavigationItems().map(item => `
                            <li class="nav-mobile__item" role="listitem">
                                <a href="#" 
                                   class="nav-mobile__link" 
                                   data-page="${item.id}"
                                   role="menuitem"
                                   tabindex="-1">
                                    <span class="nav-mobile__icon" aria-hidden="true">${item.icon}</span>
                                    <div>
                                        <div class="nav-mobile__label">${item.label}</div>
                                        ${item.description ? `<div class="nav-mobile__description">${item.description}</div>` : ''}
                                    </div>
                                </a>
                            </li>
                        `).join('')}
                    </ul>

                    <div class="nav-mobile__actions">
                        <a href="#" 
                           class="btn btn-primary btn-full" 
                           data-calendly="true"
                           role="button"
                           tabindex="-1">
                            📅 Diagnostic Gratuit
                        </a>

                        <div class="nav-mobile__contact">
                            <a href="mailto:contact@oweo-consulting.fr" 
                               class="nav-mobile__contact-item"
                               aria-label="Envoyer un email"
                               tabindex="-1">
                                📧 contact@oweo-consulting.fr
                            </a>
                            <a href="tel:+33123456789" 
                               class="nav-mobile__contact-item"
                               aria-label="Appeler"
                               tabindex="-1">
                                📞 01 23 45 67 89
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        `;

        console.log('✅ Navigation HTML rendered');
    }

    getNavigationItems() {
        // Utilise la config si disponible, sinon fallback
        if (typeof OweoConfig !== 'undefined' && OweoConfig.navigation) {
            return OweoConfig.navigation;
        }
        
        return [
            { 
                id: 'home', 
                label: 'Accueil', 
                icon: '🏠', 
                description: 'Page d\'accueil' 
            },
            { 
                id: 'services', 
                label: 'Services', 
                icon: '📋', 
                description: 'Nos prestations' 
            },
            { 
                id: 'outils-gestion', 
                label: 'ERP Métallurgie', 
                icon: '🛠️', 
                description: 'Solutions ERP spécialisées' 
            },
            { 
                id: 'consulting-strategique', 
                label: 'Conseil Expert', 
                icon: '📊', 
                description: 'Accompagnement stratégique' 
            }
        ];
    }

    bindEvents() {
        console.log('🔗 Binding navigation events...');
        
        try {
            this.setupMobileToggle();
            this.setupNavigation();
            this.setupCalendly();
            this.setupOutsideClick();
            this.setupKeyboardNavigation();
            this.setupTouchHandling();
            
            console.log('✅ All navigation events bound');
        } catch (error) {
            console.error('❌ Error binding navigation events:', error);
        }
    }

    setupMobileToggle() {
        const toggle = document.querySelector('.nav-toggle');
        
        if (!toggle) {
            console.warn('⚠️ Mobile toggle not found');
            return;
        }

        // Click event avec debouncing
        let clickTimeout;
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (clickTimeout) return;
            
            clickTimeout = setTimeout(() => {
                clickTimeout = null;
            }, 300);
            
            console.log('📱 Toggle clicked');
            this.toggleMobileMenu();
        });

        // Touch events pour améliorer la réactivité
        toggle.addEventListener('touchstart', (e) => {
            e.stopPropagation();
            toggle.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        }, { passive: true });

        toggle.addEventListener('touchend', (e) => {
            e.stopPropagation();
            toggle.style.backgroundColor = '';
        }, { passive: true });

        console.log('✅ Mobile toggle events setup');
    }

    toggleMobileMenu() {
        const toggle = document.querySelector('.nav-toggle');
        const mobileMenu = document.querySelector('.nav-mobile');
        const body = document.body;
        
        if (!toggle || !mobileMenu) {
            console.warn('⚠️ Toggle or mobile menu not found');
            return;
        }

        this.isMenuOpen = !this.isMenuOpen;

        if (this.isMenuOpen) {
            this.openMobileMenu();
        } else {
            this.closeMobileMenu();
        }
    }

    openMobileMenu() {
        const toggle = document.querySelector('.nav-toggle');
        const mobileMenu = document.querySelector('.nav-mobile');
        const body = document.body;
        
        console.log('📱 Opening mobile menu...');

        // Sauvegarder la position de scroll
        this.scrollY = window.scrollY;
        
        // Appliquer les classes
        toggle.classList.add('nav-toggle--active');
        mobileMenu.classList.add('nav-mobile--active');
        body.classList.add('menu-open');
        
        // Bloquer le scroll et maintenir la position
        body.style.top = `-${this.scrollY}px`;
        body.style.position = 'fixed';
        body.style.width = '100%';
        
        // Accessibilité
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Fermer le menu');
        mobileMenu.setAttribute('aria-hidden', 'false');
        
        // Activer les liens pour la navigation clavier
        this.setMobileLinksTabIndex('0');
        
        // Focus sur le premier élément du menu
        setTimeout(() => {
            const firstLink = mobileMenu.querySelector('.nav-mobile__link');
            if (firstLink) {
                firstLink.focus();
            }
        }, 100);
        
        console.log('✅ Mobile menu opened');
    }

    closeMobileMenu() {
        const toggle = document.querySelector('.nav-toggle');
        const mobileMenu = document.querySelector('.nav-mobile');
        const body = document.body;
        
        if (!toggle || !mobileMenu) return;
        
        console.log('📱 Closing mobile menu...');
        
        // Supprimer les classes
        toggle.classList.remove('nav-toggle--active');
        mobileMenu.classList.remove('nav-mobile--active');
        body.classList.remove('menu-open');
        
        // Restaurer le scroll
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, this.scrollY);
        
        // Accessibilité
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Ouvrir le menu');
        mobileMenu.setAttribute('aria-hidden', 'true');
        
        // Désactiver les liens pour la navigation clavier
        this.setMobileLinksTabIndex('-1');
        
        // Remettre le focus sur le toggle
        toggle.focus();
        
        this.isMenuOpen = false;
        console.log('✅ Mobile menu closed');
    }

    setMobileLinksTabIndex(value) {
        const mobileLinks = document.querySelectorAll('.nav-mobile a, .nav-mobile button');
        mobileLinks.forEach(link => {
            link.setAttribute('tabindex', value);
        });
    }

    setupNavigation() {
        // Délégation d'événements pour tous les liens de navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-page]');
            if (!link) return;

            e.preventDefault();
            e.stopPropagation();
            
            const page = link.dataset.page;
            console.log(`🔗 Navigation to: ${page}`);
            
            // Fermer le menu mobile si ouvert
            if (this.isMenuOpen) {
                this.closeMobileMenu();
            }
            
            // Effet visuel
            this.addClickEffect(link);
            
            // Navigation avec délai pour l'animation
            setTimeout(() => {
                this.navigate(page);
            }, this.isMenuOpen ? 300 : 100);
        });

        console.log('✅ Navigation links setup');
    }

    addClickEffect(element) {
        element.style.transform = 'scale(0.95)';
        element.style.transition = 'transform 0.15s ease';
        
        setTimeout(() => {
            element.style.transform = '';
            setTimeout(() => {
                element.style.transition = '';
            }, 150);
        }, 150);
    }

    setupCalendly() {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('[data-calendly]')) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            console.log('📅 Calendly clicked');
            
            // Fermer le menu mobile si ouvert
            if (this.isMenuOpen) {
                this.closeMobileMenu();
            }
            
            // Effet visuel
            this.addClickEffect(e.target.closest('[data-calendly]'));
            
            setTimeout(() => {
                this.openCalendly();
            }, this.isMenuOpen ? 300 : 100);
        });

        console.log('✅ Calendly events setup');
    }

    setupOutsideClick() {
        // Fermer le menu en cliquant à l'extérieur
        document.addEventListener('click', (e) => {
            if (!this.isMenuOpen) return;
            
            const toggle = document.querySelector('.nav-toggle');
            const mobileMenu = document.querySelector('.nav-mobile');
            
            if (!toggle?.contains(e.target) && !mobileMenu?.contains(e.target)) {
                console.log('📱 Outside click - closing menu');
                this.closeMobileMenu();
            }
        });

        // Fermer avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                console.log('⌨️ Escape pressed - closing menu');
                this.closeMobileMenu();
            }
        });

        console.log('✅ Outside click events setup');
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (!this.isMenuOpen) return;

            const focusableElements = Array.from(document.querySelectorAll(
                '.nav-mobile .nav-mobile__link, .nav-mobile .btn, .nav-mobile .nav-mobile__contact-item'
            ));
            
            const currentIndex = focusableElements.indexOf(document.activeElement);

            switch (e.key) {
                case 'ArrowDown':
                case 'ArrowRight':
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % focusableElements.length;
                    focusableElements[nextIndex]?.focus();
                    break;
                    
                case 'ArrowUp':
                case 'ArrowLeft':
                    e.preventDefault();
                    const prevIndex = currentIndex <= 0 ? focusableElements.length - 1 : currentIndex - 1;
                    focusableElements[prevIndex]?.focus();
                    break;
                    
                case 'Tab':
                    // Gérer le focus trapping
                    if (e.shiftKey && currentIndex === 0) {
                        e.preventDefault();
                        focusableElements[focusableElements.length - 1]?.focus();
                    } else if (!e.shiftKey && currentIndex === focusableElements.length - 1) {
                        e.preventDefault();
                        focusableElements[0]?.focus();
                    }
                    break;
                    
                case 'Enter':
                case ' ':
                    if (document.activeElement?.hasAttribute('data-page') || 
                        document.activeElement?.hasAttribute('data-calendly')) {
                        e.preventDefault();
                        document.activeElement.click();
                    }
                    break;
            }
        });

        console.log('✅ Keyboard navigation setup');
    }

    setupTouchHandling() {
        const mobileMenu = document.querySelector('.nav-mobile');
        if (!mobileMenu) return;

        // Empêcher le scroll sur le menu mobile
        mobileMenu.addEventListener('touchstart', (e) => {
            this.touchStartY = e.touches[0].clientY;
        }, { passive: true });

        mobileMenu.addEventListener('touchmove', (e) => {
            const currentY = e.touches[0].clientY;
            const scrollTop = mobileMenu.scrollTop;
            const scrollHeight = mobileMenu.scrollHeight;
            const clientHeight = mobileMenu.clientHeight;

            // Empêcher le bounce scroll sur iOS
            if ((scrollTop <= 0 && currentY > this.touchStartY) ||
                (scrollTop + clientHeight >= scrollHeight && currentY < this.touchStartY)) {
                e.preventDefault();
            }
        }, { passive: false });

        console.log('✅ Touch handling setup');
    }

    navigate(page) {
        try {
            console.log(`🧭 Navigating to: ${page}`);
            
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(page);
            } else if (window.pages && window.pages[page]) {
                this.loadPage(page);
            } else {
                console.warn(`⚠️ Page ${page} not found, redirecting to home`);
                this.loadPage('home');
            }
            
            // Mettre à jour les liens actifs
            this.updateActiveLinks(page);
            
        } catch (error) {
            console.error('❌ Navigation error:', error);
            this.loadPage('home');
        }
    }

    loadPage(pageId) {
        const app = document.getElementById('app');
        if (!app || !window.pages || !window.pages[pageId]) {
            console.warn(`⚠️ Cannot load page: ${pageId}`);
            return;
        }

        try {
            console.log(`📄 Loading page: ${pageId}`);
            
            app.innerHTML = window.pages[pageId].render();
            
            if (window.pages[pageId].init) {
                window.pages[pageId].init();
            }
            
            // Scroll vers le haut
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`✅ Page ${pageId} loaded`);
            
        } catch (error) {
            console.error(`❌ Error loading page ${pageId}:`, error);
        }
    }

    updateActiveLinks(currentPage) {
        // Supprimer toutes les classes actives
        document.querySelectorAll('.nav-menu__link--active, .nav-mobile__link--active')
            .forEach(link => {
                link.classList.remove('nav-menu__link--active', 'nav-mobile__link--active');
            });

        // Ajouter la classe active aux liens correspondants
        document.querySelectorAll(`[data-page="${currentPage}"]`)
            .forEach(link => {
                if (link.classList.contains('nav-menu__link')) {
                    link.classList.add('nav-menu__link--active');
                } else if (link.classList.contains('nav-mobile__link')) {
                    link.classList.add('nav-mobile__link--active');
                }
            });

        console.log(`✅ Active links updated for: ${currentPage}`);
    }

    handleScroll() {
        let ticking = false;
        
        const updateNavbar = () => {
            const navbar = document.getElementById('navbar');
            if (!navbar) return;

            if (window.scrollY > 50) {
                navbar.classList.add('nav--scrolled');
            } else {
                navbar.classList.remove('nav--scrolled');
            }
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        }, { passive: true });

        console.log('✅ Scroll handling setup');
    }

    openCalendly() {
        try {
            if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
                const calendlyUrl = this.getCalendlyUrl();
                
                Calendly.initPopupWidget({ url: calendlyUrl });
                console.log('✅ Calendly popup opened');
                
                // Analytics si disponible
                if (window.OweoUtils && window.OweoUtils.analytics) {
                    window.OweoUtils.analytics.track('calendly_open', {
                        location: 'navigation',
                        timestamp: Date.now()
                    });
                }
                
            } else {
                throw new Error('Calendly not available');
            }
        } catch (error) {
            console.warn('⚠️ Calendly error, using fallback:', error.message);
            this.openCalendlyFallback();
        }
    }

    openCalendlyFallback() {
        const calendlyUrl = this.getCalendlyUrl();
        window.open(calendlyUrl, '_blank', 'noopener,noreferrer');
        console.log('✅ Calendly opened in new tab (fallback)');
    }

    getCalendlyUrl() {
        if (typeof OweoConfig !== 'undefined' && OweoConfig.urls?.calendly) {
            return OweoConfig.urls.calendly;
        }
        return 'https://calendly.com/oweo-consulting';
    }

    // Méthode de debug pour diagnostiquer les problèmes
    debug() {
        const debugInfo = {
            timestamp: new Date().toISOString(),
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight,
                orientation: window.screen?.orientation?.type || 'unknown'
            },
            navigation: {
                menuOpen: this.isMenuOpen,
                scrollY: this.scrollY,
                elements: {
                    navbar: !!document.querySelector('.navbar'),
                    toggle: !!document.querySelector('.nav-toggle'),
                    mobileMenu: !!document.querySelector('.nav-mobile'),
                    toggleActive: document.querySelector('.nav-toggle')?.classList.contains('nav-toggle--active'),
                    menuActive: document.querySelector('.nav-mobile')?.classList.contains('nav-mobile--active'),
                    bodyMenuOpen: document.body.classList.contains('menu-open')
                }
            },
            environment: {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
                calendlyLoaded: typeof Calendly !== 'undefined',
                oweoConfigLoaded: typeof OweoConfig !== 'undefined'
            }
        };
        
        console.group('🔍 Navigation Debug Info');
        console.table(debugInfo.viewport);
        console.table(debugInfo.navigation);
        console.table(debugInfo.environment);
        console.groupEnd();
        
        return debugInfo;
    }

    // Méthode pour forcer la fermeture du menu (utile pour le debug)
    forceClose() {
        console.log('🔧 Force closing mobile menu...');
        this.isMenuOpen = true; // Force l'état pour que closeMobileMenu fonctionne
        this.closeMobileMenu();
    }

    // Méthode pour tester les interactions
    test() {
        console.log('🧪 Testing navigation...');
        
        setTimeout(() => {
            console.log('Testing toggle...');
            this.toggleMobileMenu();
        }, 1000);
        
        setTimeout(() => {
            console.log('Testing close...');
            this.closeMobileMenu();
        }, 3000);
    }
}

// Fonction globale pour accéder facilement au debug
window.debugNavigation = function() {
    if (window.navigation && window.navigation.debug) {
        return window.navigation.debug();
    } else {
        console.warn('Navigation instance not found');
        return null;
    }
};

console.log('🧭 Navigation class loaded');

// Export pour compatibilité
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OweoNavigation;
}