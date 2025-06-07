// js/components/navbar.js - Version complète corrigée
// Composant de navigation principal avec menu responsive

class OweoNavbar {
    constructor() {
        this.element = null;
        this.isMenuOpen = false;
        this.scrolled = false;
        this.initialized = false;
        this.currentPage = '';
    }

    /**
     * Rendu HTML de la navbar
     */
    render() {
        return `
            <nav class="navbar" id="main-navbar">
                <div class="navbar-container">
                    <!-- Logo et marque -->
                    <div class="navbar-brand">
                        <a href="#home" 
                           class="brand-link" 
                           onclick="window.router?.navigate('home')"
                           aria-label="Retour à l'accueil Oweo">
                            <div class="brand-logo">
                                <span class="logo-icon">⚙️</span>
                                <span class="logo-text">
                                    <span class="logo-primary">Oweo</span>
                                    <span class="logo-tagline">Expert ERP Métallurgie</span>
                                </span>
                            </div>
                        </a>
                    </div>

                    <!-- Navigation principale -->
                    <div class="navbar-nav" id="navbar-nav">
                        <ul class="nav-menu">
                            <li class="nav-item">
                                <a href="#home" 
                                   class="nav-link" 
                                   data-page="home"
                                   title="Accueil - Présentation d'Oweo">
                                    <span class="nav-icon">🏠</span>
                                    <span class="nav-text">Accueil</span>
                                </a>
                            </li>
                            
                            <li class="nav-item">
                                <a href="#services" 
                                   class="nav-link" 
                                   data-page="services"
                                   title="Services - Nos prestations">
                                    <span class="nav-icon">📋</span>
                                    <span class="nav-text">Services</span>
                                </a>
                            </li>
                            
                            <li class="nav-item nav-dropdown">
                                <a href="#" 
                                   class="nav-link dropdown-toggle" 
                                   title="Solutions ERP spécialisées"
                                   aria-expanded="false">
                                    <span class="nav-icon">🛠️</span>
                                    <span class="nav-text">Solutions ERP</span>
                                    <span class="dropdown-arrow">▼</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="#outils-gestion" 
                                           class="dropdown-link" 
                                           data-page="outils-gestion"
                                           title="Gestion d'entreprise métallurgie">
                                            <span class="dropdown-icon">📊</span>
                                            <div class="dropdown-content">
                                                <span class="dropdown-title">Gestion d'Entreprise</span>
                                                <span class="dropdown-desc">ERP complet pour métallurgie</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" 
                                           class="dropdown-link client-demo-link" 
                                           data-demo="outil-chiffrage-demo"
                                           title="Démonstration outil de chiffrage - Accès client">
                                            <span class="dropdown-icon">🔐</span>
                                            <div class="dropdown-content">
                                                <span class="dropdown-title">Démo Chiffrage</span>
                                                <span class="dropdown-desc">Outil interactif (clients)</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" 
                                           class="dropdown-link client-demo-link" 
                                           data-demo="import-dstv-demo"
                                           title="Démonstration import DSTV - Accès client">
                                            <span class="dropdown-icon">🔄</span>
                                            <div class="dropdown-content">
                                                <span class="dropdown-title">Démo DSTV</span>
                                                <span class="dropdown-desc">Import automatique (clients)</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            
                            <li class="nav-item">
                                <a href="#consulting-strategique" 
                                   class="nav-link" 
                                   data-page="consulting-strategique"
                                   title="Conseil stratégique et accompagnement">
                                    <span class="nav-icon">📊</span>
                                    <span class="nav-text">Conseil Expert</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Actions navbar -->
                    <div class="navbar-actions">
                        <!-- Contact rapide -->
                        <button class="btn btn-contact" 
                                onclick="this.openContactModal()"
                                title="Contact rapide">
                            <span class="btn-icon">📞</span>
                            <span class="btn-text">Contact</span>
                        </button>
                        
                        <!-- CTA principal -->
                        <button class="btn btn-primary btn-cta" 
                                onclick="window.open('${this.getCalendlyUrl()}', '_blank')"
                                title="Réserver un rendez-vous">
                            <span class="btn-icon">📅</span>
                            <span class="btn-text">RDV Gratuit</span>
                        </button>
                        
                        <!-- Bouton menu mobile -->
                        <button class="navbar-toggle" 
                                id="navbar-toggle"
                                aria-label="Ouvrir le menu de navigation"
                                aria-expanded="false">
                            <span class="toggle-bar"></span>
                            <span class="toggle-bar"></span>
                            <span class="toggle-bar"></span>
                        </button>
                    </div>
                </div>

                <!-- Indicateur de progression -->
                <div class="navbar-progress" id="navbar-progress">
                    <div class="progress-bar"></div>
                </div>
            </nav>

            <!-- Overlay pour menu mobile -->
            <div class="navbar-overlay" id="navbar-overlay"></div>

            <!-- Modal de contact rapide -->
            <div class="contact-modal" id="contact-modal">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Contact Rapide</h3>
                        <button class="modal-close" onclick="this.closeContactModal()">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="contact-options">
                            <a href="tel:${this.getContactPhone().replace(/\s/g, '')}" 
                               class="contact-option">
                                <div class="option-icon">📞</div>
                                <div class="option-content">
                                    <div class="option-title">Téléphone</div>
                                    <div class="option-value">${this.getContactPhone()}</div>
                                </div>
                            </a>
                            
                            <a href="mailto:${this.getContactEmail()}" 
                               class="contact-option">
                                <div class="option-icon">📧</div>
                                <div class="option-content">
                                    <div class="option-title">Email</div>
                                    <div class="option-value">${this.getContactEmail()}</div>
                                </div>
                            </a>
                            
                            <a href="${this.getLinkedIn()}" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="contact-option">
                                <div class="option-icon">💼</div>
                                <div class="option-content">
                                    <div class="option-title">LinkedIn</div>
                                    <div class="option-value">Suivez-nous</div>
                                </div>
                            </a>
                            
                            <button class="contact-option cta-option" 
                                    onclick="window.open('${this.getCalendlyUrl()}', '_blank'); this.closeContactModal();">
                                <div class="option-icon">📅</div>
                                <div class="option-content">
                                    <div class="option-title">Rendez-vous</div>
                                    <div class="option-value">Consultation gratuite</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Initialisation de la navbar
     */
    init() {
        try {
            if (this.initialized) {
                console.log('🧭 Navbar déjà initialisée');
                return;
            }

            console.log('🧭 Initialisation navbar...');
            
            // Injecter le HTML si pas déjà fait
            const navbarElement = document.getElementById('navbar');
            if (navbarElement && !navbarElement.innerHTML.trim()) {
                navbarElement.innerHTML = this.render();
            }
            
            this.element = document.getElementById('main-navbar');
            
            this.bindEvents();
            this.initializeScrollBehavior();
            this.updateActiveNavigation();
            this.initializeProgressBar();
            
            this.initialized = true;
            console.log('✅ Navbar initialisée');
            
        } catch (error) {
            console.error('❌ Erreur initialisation navbar:', error);
        }
    }

    /**
     * Liaison des événements
     */
    bindEvents() {
        try {
            // Délégation d'événements pour la navbar
            document.addEventListener('click', (e) => {
                this.handleGlobalClick(e);
            });

            // Gestion du menu mobile
            const toggleBtn = document.getElementById('navbar-toggle');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.toggleMobileMenu();
                });
            }

            // Fermer le menu en cliquant sur l'overlay
            const overlay = document.getElementById('navbar-overlay');
            if (overlay) {
                overlay.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            }

            // Gestion des dropdowns
            this.initializeDropdowns();

            // Écouter les changements de route
            window.addEventListener('popstate', () => {
                this.updateActiveNavigation();
            });

            // Écouter les événements de navigation du router
            if (window.router) {
                // Si le router a un système d'événements, s'y abonner
                document.addEventListener('routeChanged', () => {
                    this.updateActiveNavigation();
                });
            }

            console.log('✅ Événements navbar liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison événements navbar:', error);
        }
    }

    /**
     * Gestionnaire principal des clics
     */
    handleGlobalClick(e) {
        try {
            // Navigation classique
            const navLink = e.target.closest('.nav-link:not(.dropdown-toggle)');
            if (navLink && navLink.dataset.page) {
                e.preventDefault();
                this.navigateToPage(navLink.dataset.page);
                this.closeMobileMenu();
                return;
            }

            // Liens dropdown classiques
            const dropdownLink = e.target.closest('.dropdown-link:not(.client-demo-link)');
            if (dropdownLink && dropdownLink.dataset.page) {
                e.preventDefault();
                this.navigateToPage(dropdownLink.dataset.page);
                this.closeDropdowns();
                this.closeMobileMenu();
                return;
            }

            // Liens démo client
            const clientDemoLink = e.target.closest('.client-demo-link');
            if (clientDemoLink) {
                e.preventDefault();
                this.handleClientDemoAccess(clientDemoLink.dataset.demo);
                this.closeDropdowns();
                this.closeMobileMenu();
                return;
            }

            // Fermer les dropdowns si clic à l'extérieur
            if (!e.target.closest('.nav-dropdown')) {
                this.closeDropdowns();
            }

            // Fermer le menu mobile si clic à l'extérieur
            if (!e.target.closest('.navbar') && this.isMenuOpen) {
                this.closeMobileMenu();
            }
            
        } catch (error) {
            console.error('❌ Erreur gestionnaire clic navbar:', error);
        }
    }

    /**
     * Navigation vers une page
     */
    navigateToPage(pageId) {
        try {
            console.log(`🧭 Navigation vers: ${pageId}`);
            
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(pageId);
            } else {
                // Fallback
                window.location.hash = pageId;
            }
            
            // Mettre à jour immédiatement la navigation active
            this.currentPage = pageId;
            this.updateActiveNavigation();
            
        } catch (error) {
            console.error(`❌ Erreur navigation vers ${pageId}:`, error);
        }
    }

    /**
     * Gestion de l'accès aux démos client
     */
    handleClientDemoAccess(demoId) {
        try {
            console.log(`🔐 Accès démo demandé depuis navbar: ${demoId}`);
            
            // Vérifier la disponibilité du système d'accès
            if (typeof window.OweoClientAccess === 'undefined') {
                this.showNotification('Système d\'accès client non disponible', 'error');
                return;
            }

            // Vérifier l'accès
            if (window.OweoClientAccess.hasAccess()) {
                // Accès direct
                this.navigateToPage(demoId);
            } else {
                // Demander l'authentification
                window.OweoClientAccess.showAuthModal(demoId);
            }

            // Analytics
            this.trackDemoAccess(demoId, 'navbar');
            
        } catch (error) {
            console.error(`❌ Erreur accès démo ${demoId}:`, error);
            this.showNotification('Erreur lors de l\'accès à la démonstration', 'error');
        }
    }

    /**
     * Initialisation des dropdowns
     */
    initializeDropdowns() {
        try {
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
            
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const dropdown = toggle.closest('.nav-dropdown');
                    const isOpen = dropdown.classList.contains('active');
                    
                    // Fermer tous les autres dropdowns
                    this.closeDropdowns();
                    
                    // Toggle le dropdown actuel
                    if (!isOpen) {
                        dropdown.classList.add('active');
                        toggle.setAttribute('aria-expanded', 'true');
                    }
                });
            });
            
        } catch (error) {
            console.error('❌ Erreur initialisation dropdowns:', error);
        }
    }

    /**
     * Fermer tous les dropdowns
     */
    closeDropdowns() {
        try {
            const dropdowns = document.querySelectorAll('.nav-dropdown');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                const toggle = dropdown.querySelector('.dropdown-toggle');
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        } catch (error) {
            console.error('❌ Erreur fermeture dropdowns:', error);
        }
    }

    /**
     * Gestion du menu mobile
     */
    toggleMobileMenu() {
        try {
            this.isMenuOpen = !this.isMenuOpen;
            this.updateMobileMenuState();
            
        } catch (error) {
            console.error('❌ Erreur toggle menu mobile:', error);
        }
    }

    closeMobileMenu() {
        try {
            this.isMenuOpen = false;
            this.updateMobileMenuState();
            
        } catch (error) {
            console.error('❌ Erreur fermeture menu mobile:', error);
        }
    }

    updateMobileMenuState() {
        try {
            const navbar = this.element;
            const toggle = document.getElementById('navbar-toggle');
            const overlay = document.getElementById('navbar-overlay');
            
            if (navbar) {
                navbar.classList.toggle('menu-open', this.isMenuOpen);
            }
            
            if (toggle) {
                toggle.setAttribute('aria-expanded', this.isMenuOpen.toString());
                toggle.classList.toggle('active', this.isMenuOpen);
            }
            
            if (overlay) {
                overlay.classList.toggle('active', this.isMenuOpen);
            }
            
            // Bloquer le scroll du body quand le menu est ouvert
            document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
            
        } catch (error) {
            console.error('❌ Erreur mise à jour état menu mobile:', error);
        }
    }

    /**
     * Comportement au scroll
     */
    initializeScrollBehavior() {
        try {
            let ticking = false;
            
            const handleScroll = () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        this.updateScrollState();
                        ticking = false;
                    });
                    ticking = true;
                }
            };
            
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            // État initial
            this.updateScrollState();
            
        } catch (error) {
            console.error('❌ Erreur initialisation comportement scroll:', error);
        }
    }

    updateScrollState() {
        try {
            const scrollY = window.scrollY;
            const wasScrolled = this.scrolled;
            
            this.scrolled = scrollY > 50;
            
            if (this.scrolled !== wasScrolled && this.element) {
                this.element.classList.toggle('scrolled', this.scrolled);
            }
            
        } catch (error) {
            console.error('❌ Erreur mise à jour état scroll:', error);
        }
    }

    /**
     * Barre de progression
     */
    initializeProgressBar() {
        try {
            let ticking = false;
            
            const updateProgress = () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        this.updateProgressBar();
                        ticking = false;
                    });
                    ticking = true;
                }
            };
            
            window.addEventListener('scroll', updateProgress, { passive: true });
            
        } catch (error) {
            console.error('❌ Erreur initialisation barre progression:', error);
        }
    }

    updateProgressBar() {
        try {
            const progressBar = document.querySelector('.progress-bar');
            if (!progressBar) return;
            
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            const clampedPercent = Math.min(Math.max(scrollPercent, 0), 100);
            
            progressBar.style.width = `${clampedPercent}%`;
            
        } catch (error) {
            console.error('❌ Erreur mise à jour barre progression:', error);
        }
    }

    /**
     * Mettre à jour la navigation active
     */
    updateActiveNavigation() {
        try {
            // Déterminer la page actuelle
            const currentPath = this.getCurrentPath();
            
            // Mettre à jour les liens actifs
            const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
            navLinks.forEach(link => {
                const pageId = link.dataset.page;
                const isActive = pageId === currentPath || 
                                (currentPath === '' && pageId === 'home');
                
                link.classList.toggle('active', isActive);
                
                // Marquer le parent dropdown comme actif si nécessaire
                if (isActive && link.classList.contains('dropdown-link')) {
                    const dropdown = link.closest('.nav-dropdown');
                    if (dropdown) {
                        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
                        if (dropdownToggle) {
                            dropdownToggle.classList.add('active');
                        }
                    }
                }
            });
            
        } catch (error) {
            console.error('❌ Erreur mise à jour navigation active:', error);
        }
    }

    getCurrentPath() {
        try {
            // Utiliser le router si disponible
            if (window.router && window.router.currentRoute) {
                return window.router.currentRoute.component || 'home';
            }
            
            // Fallback vers hash
            const hash = window.location.hash.substring(1);
            return hash || 'home';
            
        } catch (error) {
            console.error('❌ Erreur obtention chemin actuel:', error);
            return 'home';
        }
    }

    /**
     * Modal de contact rapide
     */
    openContactModal() {
        try {
            const modal = document.getElementById('contact-modal');
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        } catch (error) {
            console.error('❌ Erreur ouverture modal contact:', error);
        }
    }

    closeContactModal() {
        try {
            const modal = document.getElementById('contact-modal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        } catch (error) {
            console.error('❌ Erreur fermeture modal contact:', error);
        }
    }

    /**
     * Notifications
     */
    showNotification(message, type = 'info', duration = 3000) {
        try {
            if (window.OweoClientAccess && typeof window.OweoClientAccess.showNotification === 'function') {
                window.OweoClientAccess.showNotification(message, type, duration);
            } else {
                console.log(`${type.toUpperCase()}: ${message}`);
            }
        } catch (error) {
            console.error('❌ Erreur notification navbar:', error);
        }
    }

    /**
     * Analytics
     */
    trackDemoAccess(demoId, source) {
        try {
            if (window.OweoUtils && window.OweoUtils.analytics) {
                window.OweoUtils.analytics.track('demo_access_attempt', {
                    demoId: demoId,
                    source: source,
                    timestamp: Date.now()
                });
            }
        } catch (error) {
            console.error('❌ Erreur tracking navbar:', error);
        }
    }

    /**
     * Getters pour la configuration
     */
    getCalendlyUrl() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.urls?.calendly) || 'https://calendly.com/oweo-consulting';
    }

    getContactEmail() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.email) || 'contact@oweo-consulting.fr';
    }

    getContactPhone() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.phone) || '+33 (0)2 xx xx xx xx';
    }

    getLinkedIn() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.social?.linkedin) || 'https://linkedin.com/company/oweo-consulting';
    }

    /**
     * Mise à jour de la navbar
     */
    update() {
        try {
            this.updateActiveNavigation();
            console.log('🧭 Navbar mise à jour');
        } catch (error) {
            console.error('❌ Erreur mise à jour navbar:', error);
        }
    }

    /**
     * Destruction propre
     */
    destroy() {
        try {
            // Nettoyer les event listeners si nécessaire
            this.closeMobileMenu();
            this.closeDropdowns();
            this.closeContactModal();
            
            this.initialized = false;
            console.log('🧭 Navbar détruite');
            
        } catch (error) {
            console.error('❌ Erreur destruction navbar:', error);
        }
    }
}

// Export et auto-initialisation
window.OweoNavbar = OweoNavbar;

// Auto-initialisation si DOM prêt
document.addEventListener('DOMContentLoaded', () => {
    if (!window.navbarInstance) {
        window.navbarInstance = new OweoNavbar();
        window.navbarInstance.init();
    }
});

console.log('🧭 Navbar component loaded with complete functionality');