// js/components/footer.js - Composant Footer Simplifié

class OweoFooter {
    constructor() {
        this.element = null;
        this.init();
    }

    /**
     * Initialisation du composant
     */
    init() {
        this.render();
        this.bindEvents();
        console.log('🦶 Footer component initialized');
    }

    /**
     * Rendu du footer
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
     * Template du footer simplifié
     */
    getTemplate() {
        return `
            <div class="footer-container">
                <div class="footer-content">
                    <!-- Section principale simplifiée -->
                    <div class="footer-main">
                        <div class="footer-brand">
                            <div class="footer-logo">
                                <img src="assets/logo.png" alt="${OweoConfig.company.name}" class="footer-logo__image">
                                <h3 class="footer-logo__text">${OweoConfig.siteName}</h3>
                            </div>
                            <p class="footer-tagline">${OweoConfig.company.tagline}</p>
                            <p class="footer-description">${OweoConfig.company.description}</p>
                        </div>

                        <!-- Navigation rapide -->
                        <div class="footer-nav">
                            <h4>Navigation</h4>
                            <ul class="footer-links">
                                ${OweoConfig.navigation.map(item => `
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
                                    <a href="mailto:${OweoConfig.contact.email}" class="contact-link">
                                        ${OweoConfig.contact.email}
                                    </a>
                                </div>
                                
                                <div class="contact-item">
                                    <span class="contact-icon">📍</span>
                                    <span class="contact-text">
                                        ${OweoConfig.contact.address.city}, ${OweoConfig.contact.address.country}
                                    </span>
                                </div>
                            </div>

                            <!-- Social -->
                            <div class="footer-social">
                                <h5>Suivez-nous</h5>
                                <div class="social-links">
                                    <a href="${OweoConfig.contact.social.linkedin}" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       class="social-link"
                                       aria-label="LinkedIn Oweo">
                                        <img src="assets/linkedin.png" alt="LinkedIn" class="social-icon">
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- Section légale simplifiée -->
                    <div class="footer-legal">
                        <div class="footer-bottom">
                            <div class="footer-copyright">
                                <p>© ${new Date().getFullYear()} ${OweoConfig.company.name}. Tous droits réservés.</p>
                                <p class="legal-info">
                                    Expert ERP & Transformation Digitale - ${OweoConfig.contact.address.city}
                                </p>
                            </div>
                            
                            <div class="footer-legal-links">
                                ${OweoConfig.legalPages.slice(0, 3).map(page => `
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
     * Liaison des événements simplifiée
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
    }

    /**
     * Configuration du bouton retour en haut
     */
    setupBackToTop() {
        const backToTopBtn = this.element?.querySelector('#back-to-top');
        if (!backToTopBtn) return;

        // Affichage/masquage selon le scroll
        const toggleBackToTop = OweoUtils.events.throttle(() => {
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

            OweoUtils.analytics?.track('back_to_top_click', {
                location: 'footer'
            });
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
        OweoUtils.analytics?.track('footer_navigation_click', {
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
                url: OweoConfig.urls.calendly
            });
            
            OweoUtils.analytics?.track('calendly_open', {
                location: 'footer'
            });
        } else {
            console.warn('Calendly not loaded');
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }

    /**
     * Tracking des clics sociaux
     */
    trackSocialClick(event) {
        const platform = event.currentTarget.getAttribute('aria-label')?.toLowerCase() || 'unknown';
        
        OweoUtils.analytics?.track('social_click', {
            platform: platform,
            location: 'footer'
        });
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
    }

    /**
     * Mise à jour des informations de contact
     */
    updateContactInfo(contactInfo) {
        if (!this.element) return;

        const emailLink = this.element.querySelector('a[href^="mailto:"]');
        if (emailLink && contactInfo.email) {
            emailLink.href = `mailto:${contactInfo.email}`;
            emailLink.textContent = contactInfo.email;
        }

        const phoneLink = this.element.querySelector('a[href^="tel:"]');
        if (phoneLink && contactInfo.phone) {
            phoneLink.href = `tel:${contactInfo.phone}`;
            phoneLink.textContent = contactInfo.phone;
        }

        console.log('Footer contact info updated');
    }

    /**
     * Destruction du composant
     */
    destroy() {
        // Suppression des event listeners
        // (Dans une vraie application, il faudrait stocker les références)
        
        if (this.element) {
            this.element.innerHTML = '';
        }
        
        console.log('🦶 Footer component destroyed');
    }

    /**
     * Mise à jour complète du composant
     */
    update(config = {}) {
        if (config.contact) {
            this.updateContactInfo(config.contact);
        }
        
        console.log('🦶 Footer component updated');
    }
}

// Export et initialisation
window.OweoFooter = OweoFooter;