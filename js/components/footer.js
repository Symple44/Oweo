// js/components/footer.js - Composant Footer

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
     * Template du footer
     */
    getTemplate() {
        return `
            <div class="footer-container">
                <div class="footer-content">
                    <!-- Section principale -->
                    <div class="footer-main">
                        <div class="footer-brand">
                            <div class="footer-logo">
                                <img src="assets/logo.png" alt="${OweoConfig.company.name}" class="footer-logo__image">
                                <h3 class="footer-logo__text">${OweoConfig.siteName}</h3>
                            </div>
                            <p class="footer-tagline">${OweoConfig.company.tagline}</p>
                            <p class="footer-description">${OweoConfig.company.description}</p>
                            
                            <!-- Stats de confiance -->
                            <div class="footer-stats">
                                <div class="footer-stat">
                                    <div class="stat-number">${OweoConfig.expertise.stats.projects}</div>
                                    <div class="stat-label">Projets réalisés</div>
                                </div>
                                <div class="footer-stat">
                                    <div class="stat-number">${OweoConfig.expertise.stats.successRate}</div>
                                    <div class="stat-label">De réussite</div>
                                </div>
                                <div class="footer-stat">
                                    <div class="stat-number">${OweoConfig.expertise.stats.experience}</div>
                                    <div class="stat-label">Années d'expertise</div>
                                </div>
                            </div>
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

                        <!-- Expertise -->
                        <div class="footer-expertise">
                            <h4>Notre Expertise</h4>
                            <ul class="footer-links">
                                ${OweoConfig.sectors.map(sector => `
                                    <li>
                                        <a href="#" class="sector-link" data-sector="${sector.id}">
                                            <span class="link-icon">${sector.icon}</span>
                                            ${sector.name}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                            
                            <div class="footer-technologies">
                                <h5>Technologies maîtrisées</h5>
                                <div class="tech-tags">
                                    ${OweoConfig.technologies.erp.primary.slice(0, 4).map(tech => 
                                        `<span class="tech-tag">${tech}</span>`
                                    ).join('')}
                                </div>
                            </div>
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
                                    <span class="contact-icon">📞</span>
                                    <a href="tel:${OweoConfig.contact.phone}" class="contact-link">
                                        ${OweoConfig.contact.phone}
                                    </a>
                                </div>
                                
                                <div class="contact-item">
                                    <span class="contact-icon">📍</span>
                                    <span class="contact-text">
                                        ${OweoConfig.contact.address.city}, ${OweoConfig.contact.address.country}
                                    </span>
                                </div>
                                
                                <div class="contact-item">
                                    <span class="contact-icon">🕒</span>
                                    <span class="contact-text">Lun-Ven 9h-18h</span>
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

                    <!-- Section CTA -->
                    <div class="footer-cta">
                        <div class="cta-content">
                            <h3>🎯 Prêt à transformer votre entreprise ?</h3>
                            <p>Diagnostic gratuit personnalisé + plan d'action concret</p>
                            <div class="cta-actions">
                                <button class="btn btn-primary" data-calendly="true">
                                    📅 Diagnostic gratuit (30min)
                                </button>
                                <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary">
                                    📧 Contact direct
                                </a>
                            </div>
                        </div>
                        
                        <!-- Garanties -->
                        <div class="footer-guarantees">
                            ${OweoConfig.guarantees.slice(0, 2).map(guarantee => `
                                <div class="guarantee-item">
                                    <span class="guarantee-icon">${guarantee.icon}</span>
                                    <div class="guarantee-text">
                                        <strong>${guarantee.title}</strong>
                                        <span>${guarantee.description}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Section légale -->
                    <div class="footer-legal">
                        <div class="footer-bottom">
                            <div class="footer-copyright">
                                <p>© ${new Date().getFullYear()} ${OweoConfig.company.name}. Tous droits réservés.</p>
                                <p class="legal-info">
                                    ${OweoConfig.company.legalName} - 
                                    ${OweoConfig.contact.address.city} - 
                                    Expertise depuis ${OweoConfig.company.founded}
                                </p>
                            </div>
                            
                            <div class="footer-legal-links">
                                ${OweoConfig.legalPages.map(page => `
                                    <a href="#${page.id}" 
                                       data-nav-item="${page.id}"
                                       class="legal-link">
                                        ${page.label}
                                    </a>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Newsletter -->
                        <div class="footer-newsletter">
                            <h4>📬 Restez informé</h4>
                            <p>Recevez nos guides experts et actualités du secteur</p>
                            <form class="newsletter-form" id="newsletter-form">
                                <div class="newsletter-input">
                                    <input type="email" 
                                           placeholder="Votre email professionnel" 
                                           required
                                           aria-label="Email pour newsletter"
                                           id="newsletter-email">
                                    <button type="submit" class="btn btn-primary">
                                        S'inscrire
                                    </button>
                                </div>
                                <p class="newsletter-privacy">
                                    <small>
                                        Pas de spam, désinscription en 1 clic. 
                                        <a href="#politique-confidentialite" class="privacy-link">
                                            Voir notre politique de confidentialité
                                        </a>
                                    </small>
                                </p>
                            </form>
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

        // Newsletter form
        const newsletterForm = this.element.querySelector('#newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleNewsletterSubmit(e));
        }

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

        // Sector links
        const sectorLinks = this.element.querySelectorAll('.sector-link');
        sectorLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleSectorClick(e));
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
     * Gestion de la soumission newsletter
     */
    async handleNewsletterSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const email = form.querySelector('#newsletter-email').value;
        
        if (!OweoUtils.validate?.email(email)) {
            OweoUtils.notification?.show('Veuillez saisir un email valide', 'error');
            return;
        }

        try {
            // Désactivation du formulaire
            form.classList.add('loading');
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Inscription...';
            submitBtn.disabled = true;

            // Simulation d'inscription (à remplacer par vraie API)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Succès
            OweoUtils.notification?.show('Inscription réussie ! Merci pour votre confiance.', 'success');
            form.reset();
            
            // Analytics
            OweoUtils.analytics?.track('newsletter_signup', {
                email: email,
                location: 'footer'
            });

        } catch (error) {
            console.error('Newsletter signup error:', error);
            OweoUtils.notification?.show('Erreur lors de l\'inscription. Veuillez réessayer.', 'error');
        } finally {
            // Réactivation du formulaire
            form.classList.remove('loading');
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.textContent = 'S\'inscrire';
            submitBtn.disabled = false;
        }
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
     * Gestion des clics secteur
     */
    handleSectorClick(event) {
        event.preventDefault();
        
        const sector = event.currentTarget.dataset.sector;
        
        // Affichage d'une modal ou redirection vers une page secteur
        OweoUtils.notification?.show(`Information sur ${sector} bientôt disponible`, 'info');
        
        OweoUtils.analytics?.track('sector_click', {
            sector: sector,
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

        // Rôles ARIA
        const navSections = this.element.querySelectorAll('.footer-nav, .footer-expertise');
        navSections.forEach(section => {
            section.setAttribute('role', 'navigation');
            const list = section.querySelector('ul');
            if (list) {
                list.setAttribute('role', 'list');
            }
        });

        // Form accessibility
        const form = this.element.querySelector('#newsletter-form');
        if (form) {
            form.setAttribute('role', 'form');
            form.setAttribute('aria-label', 'Inscription newsletter');
        }
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
     * Mise à jour des statistiques
     */
    updateStats(stats) {
        if (!this.element) return;

        const statNumbers = this.element.querySelectorAll('.footer-stat .stat-number');
        const statsArray = Object.values(stats);
        
        statNumbers.forEach((element, index) => {
            if (statsArray[index]) {
                element.textContent = statsArray[index];
            }
        });

        console.log('Footer stats updated');
    }

    /**
     * Animation des statistiques
     */
    animateStats() {
        const stats = this.element?.querySelectorAll('.footer-stat');
        if (!stats) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.5 });

        stats.forEach(stat => observer.observe(stat));
    }

    /**
     * Vérification des liens morts
     */
    checkLinks() {
        const links = this.element?.querySelectorAll('a[href]');
        if (!links) return;

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                const targetId = href.substring(1);
                if (!document.getElementById(targetId)) {
                    console.warn(`Dead link found in footer: ${href}`);
                    link.classList.add('dead-link');
                }
            }
        });
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
        
        if (config.stats) {
            this.updateStats(config.stats);
        }
        
        console.log('🦶 Footer component updated');
    }
}

// Export et initialisation
window.OweoFooter = OweoFooter;