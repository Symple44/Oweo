// js/pages/home.js - Version complète corrigée
// Page d'accueil principale avec sections optimisées

window.pages = window.pages || {};
window.pages['home'] = {
    
    // État de la page
    initialized: false,
    animationsEnabled: true,
    
    /**
     * Générer le rendu HTML de la page d'accueil
     */
    render() {
        return `
            <main class="home-page">
                <!-- Section Hero -->
                <section class="hero-section" id="hero">
                    <div class="container">
                        <div class="hero-content">
                            <div class="hero-text">
                                <h1 class="hero-title gradient-text">
                                    Oweo
                                    <span class="hero-subtitle-inline">Expert ERP Charpente Métallique</span>
                                </h1>
                                <p class="hero-description">
                                    Nous accompagnons les entreprises de métallurgie dans leur transformation digitale 
                                    avec des solutions ERP spécialisées et un conseil expert personnalisé.
                                </p>
                                <div class="hero-stats">
                                    <div class="stat-item">
                                        <div class="stat-number">15+</div>
                                        <div class="stat-label">Années d'expertise</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">100+</div>
                                        <div class="stat-label">Projets réalisés</div>
                                    </div>
                                    <div class="stat-item">
                                        <div class="stat-number">95%</div>
                                        <div class="stat-label">Clients satisfaits</div>
                                    </div>
                                </div>
                                <div class="hero-actions">
                                    <button class="btn btn-primary btn-lg hero-cta" 
                                            onclick="window.open('${this.getCalendlyUrl()}', '_blank')"
                                            title="Réserver un rendez-vous avec nos experts">
                                        📅 Réserver un Rendez-vous
                                    </button>
                                    <button class="btn btn-secondary btn-lg" 
                                            onclick="window.router?.navigate('services')"
                                            title="Découvrir nos prestations">
                                        📋 Découvrir nos Services
                                    </button>
                                </div>
                            </div>
                            <div class="hero-visual">
                                <div class="hero-illustration">
                                    <div class="illustration-element" data-animation="float">🏭</div>
                                    <div class="illustration-element" data-animation="pulse">⚙️</div>
                                    <div class="illustration-element" data-animation="rotate">📊</div>
                                    <div class="illustration-element" data-animation="bounce">🚀</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hero-background">
                        <div class="bg-particles"></div>
                    </div>
                </section>

                <!-- Section Services -->
                <section class="services-section section" id="services">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title">Nos Domaines d'Expertise</h2>
                            <p class="section-subtitle">
                                Solutions complètes pour optimiser votre activité métallurgie
                            </p>
                        </div>
                        
                        <div class="services-grid">
                            <div class="service-card" data-service="erp">
                                <div class="service-icon">🛠️</div>
                                <h3 class="service-title">ERP Métallurgie</h3>
                                <p class="service-description">
                                    Solutions logicielles spécialisées pour la gestion complète 
                                    de votre entreprise de charpente métallique.
                                </p>
                                <ul class="service-features">
                                    <li>Gestion de production</li>
                                    <li>Chiffrage et devis</li>
                                    <li>Planification ressources</li>
                                    <li>Suivi qualité</li>
                                </ul>
                                <div class="service-action">
                                    <button class="btn btn-outline" 
                                            onclick="window.router?.navigate('outils-gestion')">
                                        En savoir plus →
                                    </button>
                                </div>
                            </div>
                            
                            <div class="service-card" data-service="conseil">
                                <div class="service-icon">📊</div>
                                <h3 class="service-title">Conseil Stratégique</h3>
                                <p class="service-description">
                                    Accompagnement personnalisé pour optimiser vos processus 
                                    et accélérer votre transformation digitale.
                                </p>
                                <ul class="service-features">
                                    <li>Audit processus</li>
                                    <li>Stratégie digitale</li>
                                    <li>Formation équipes</li>
                                    <li>Accompagnement changement</li>
                                </ul>
                                <div class="service-action">
                                    <button class="btn btn-outline" 
                                            onclick="window.router?.navigate('consulting-strategique')">
                                        En savoir plus →
                                    </button>
                                </div>
                            </div>
                            
                            <div class="service-card" data-service="formation">
                                <div class="service-icon">🎓</div>
                                <h3 class="service-title">Formation & Support</h3>
                                <p class="service-description">
                                    Formation complète de vos équipes et support technique 
                                    pour garantir le succès de vos projets.
                                </p>
                                <ul class="service-features">
                                    <li>Formation utilisateurs</li>
                                    <li>Support technique</li>
                                    <li>Documentation complète</li>
                                    <li>Maintenance évolutive</li>
                                </ul>
                                <div class="service-action">
                                    <button class="btn btn-outline" 
                                            onclick="this.scrollToContact()">
                                        Nous contacter →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section Avantages -->
                <section class="benefits-section section" id="benefits">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title">Pourquoi Choisir Oweo ?</h2>
                            <p class="section-subtitle">
                                Une expertise unique au service de votre réussite
                            </p>
                        </div>
                        
                        <div class="benefits-grid">
                            <div class="benefit-item">
                                <div class="benefit-icon">🎯</div>
                                <h4 class="benefit-title">Spécialisation Métallurgie</h4>
                                <p class="benefit-description">
                                    15+ années d'expérience exclusive dans le secteur de la charpente métallique
                                </p>
                            </div>
                            
                            <div class="benefit-item">
                                <div class="benefit-icon">⚡</div>
                                <h4 class="benefit-title">Solutions Sur-Mesure</h4>
                                <p class="benefit-description">
                                    Chaque solution est adaptée à vos besoins spécifiques et contraintes métier
                                </p>
                            </div>
                            
                            <div class="benefit-item">
                                <div class="benefit-icon">🤝</div>
                                <h4 class="benefit-title">Accompagnement Complet</h4>
                                <p class="benefit-description">
                                    De l'audit initial à la formation, nous vous accompagnons à chaque étape
                                </p>
                            </div>
                            
                            <div class="benefit-item">
                                <div class="benefit-icon">📈</div>
                                <h4 class="benefit-title">ROI Garanti</h4>
                                <p class="benefit-description">
                                    Nos clients constatent en moyenne 30% d'amélioration de leur productivité
                                </p>
                            </div>
                            
                            <div class="benefit-item">
                                <div class="benefit-icon">🔧</div>
                                <h4 class="benefit-title">Support Réactif</h4>
                                <p class="benefit-description">
                                    Équipe dédiée disponible pour vous assister et maintenir vos systèmes
                                </p>
                            </div>
                            
                            <div class="benefit-item">
                                <div class="benefit-icon">🌱</div>
                                <h4 class="benefit-title">Innovation Continue</h4>
                                <p class="benefit-description">
                                    Veille technologique et mise à jour régulière de nos solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section Processus -->
                <section class="process-section section" id="process">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title">Notre Méthode</h2>
                            <p class="section-subtitle">
                                Un processus éprouvé pour garantir le succès de votre projet
                            </p>
                        </div>
                        
                        <div class="process-timeline">
                            <div class="process-step" data-step="1">
                                <div class="step-number">1</div>
                                <div class="step-content">
                                    <h4 class="step-title">Audit & Analyse</h4>
                                    <p class="step-description">
                                        Analyse approfondie de vos processus actuels et identification 
                                        des axes d'amélioration prioritaires.
                                    </p>
                                    <div class="step-duration">Durée: 1-2 semaines</div>
                                </div>
                            </div>
                            
                            <div class="process-step" data-step="2">
                                <div class="step-number">2</div>
                                <div class="step-content">
                                    <h4 class="step-title">Conception Solution</h4>
                                    <p class="step-description">
                                        Élaboration d'une solution sur-mesure adaptée à vos besoins 
                                        spécifiques et contraintes métier.
                                    </p>
                                    <div class="step-duration">Durée: 2-3 semaines</div>
                                </div>
                            </div>
                            
                            <div class="process-step" data-step="3">
                                <div class="step-number">3</div>
                                <div class="step-content">
                                    <h4 class="step-title">Implémentation</h4>
                                    <p class="step-description">
                                        Déploiement progressif de la solution avec tests et validation 
                                        à chaque étape du processus.
                                    </p>
                                    <div class="step-duration">Durée: 4-8 semaines</div>
                                </div>
                            </div>
                            
                            <div class="process-step" data-step="4">
                                <div class="step-number">4</div>
                                <div class="step-content">
                                    <h4 class="step-title">Formation & Support</h4>
                                    <p class="step-description">
                                        Formation complète de vos équipes et mise en place 
                                        d'un support technique dédié.
                                    </p>
                                    <div class="step-duration">Durée: Continue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section Témoignages -->
                <section class="testimonials-section section" id="testimonials">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title">Ce que disent nos clients</h2>
                            <p class="section-subtitle">
                                La satisfaction client au cœur de notre engagement
                            </p>
                        </div>
                        
                        <div class="testimonials-carousel">
                            <div class="testimonial-card active">
                                <div class="testimonial-content">
                                    <div class="testimonial-quote">
                                        "Oweo a révolutionné notre gestion de production. Nous avons gagné 40% 
                                        d'efficacité sur nos processus de chiffrage et de planification."
                                    </div>
                                    <div class="testimonial-author">
                                        <div class="author-info">
                                            <div class="author-name">Jean-Pierre Martin</div>
                                            <div class="author-title">Directeur Général, Métallerie Loire</div>
                                        </div>
                                        <div class="testimonial-rating">
                                            <span class="stars">★★★★★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <div class="testimonial-quote">
                                        "L'accompagnement d'Oweo a été exceptionnel. Leur expertise métier 
                                        et leur approche personnalisée ont fait toute la différence."
                                    </div>
                                    <div class="testimonial-author">
                                        <div class="author-info">
                                            <div class="author-name">Marie Dubois</div>
                                            <div class="author-title">Responsable Production, Acier Plus</div>
                                        </div>
                                        <div class="testimonial-rating">
                                            <span class="stars">★★★★★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <div class="testimonial-quote">
                                        "Grâce aux solutions Oweo, nous avons digitalisé notre workflow 
                                        et amélioré significativement notre compétitivité sur le marché."
                                    </div>
                                    <div class="testimonial-author">
                                        <div class="author-info">
                                            <div class="author-name">Laurent Rousseau</div>
                                            <div class="author-title">PDG, Constructions Métalliques de l'Ouest</div>
                                        </div>
                                        <div class="testimonial-rating">
                                            <span class="stars">★★★★★</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="carousel-controls">
                            <button class="carousel-btn prev" onclick="window.pages.home.previousTestimonial()">‹</button>
                            <div class="carousel-indicators">
                                <span class="indicator active" data-slide="0"></span>
                                <span class="indicator" data-slide="1"></span>
                                <span class="indicator" data-slide="2"></span>
                            </div>
                            <button class="carousel-btn next" onclick="window.pages.home.nextTestimonial()">›</button>
                        </div>
                    </div>
                </section>

                <!-- Section CTA Final -->
                <section class="cta-section section" id="cta">
                    <div class="container">
                        <div class="cta-content">
                            <h2 class="cta-title">Prêt à Transformer Votre Entreprise ?</h2>
                            <p class="cta-description">
                                Discutons de vos besoins et découvrons ensemble comment optimiser 
                                vos processus métallurgie avec nos solutions expertes.
                            </p>
                            <div class="cta-actions">
                                <button class="btn btn-primary btn-xl" 
                                        onclick="window.open('${this.getCalendlyUrl()}', '_blank')">
                                    📅 Réserver une Consultation Gratuite
                                </button>
                                <div class="cta-note">
                                    <small>Rendez-vous de 30 minutes • Sans engagement • Conseils personnalisés</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section Contact -->
                <section class="contact-section section" id="contact">
                    <div class="container">
                        <div class="section-header">
                            <h2 class="section-title">Contactez-nous</h2>
                            <p class="section-subtitle">
                                Notre équipe est à votre disposition pour répondre à vos questions
                            </p>
                        </div>
                        
                        <div class="contact-grid">
                            <div class="contact-info">
                                <div class="contact-item">
                                    <div class="contact-icon">📧</div>
                                    <div class="contact-details">
                                        <h4>Email</h4>
                                        <a href="mailto:${this.getContactEmail()}" class="contact-link">
                                            ${this.getContactEmail()}
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">📞</div>
                                    <div class="contact-details">
                                        <h4>Téléphone</h4>
                                        <a href="tel:${this.getContactPhone().replace(/\s/g, '')}" class="contact-link">
                                            ${this.getContactPhone()}
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">📍</div>
                                    <div class="contact-details">
                                        <h4>Localisation</h4>
                                        <span class="contact-text">${this.getContactAddress()}</span>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <div class="contact-icon">💼</div>
                                    <div class="contact-details">
                                        <h4>LinkedIn</h4>
                                        <a href="${this.getLinkedIn()}" 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           class="contact-link">
                                            Suivez-nous sur LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="contact-form-container">
                                <form class="contact-form" id="contact-form">
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="contact-name">Nom *</label>
                                            <input type="text" id="contact-name" name="name" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="contact-company">Entreprise</label>
                                            <input type="text" id="contact-company" name="company">
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="contact-email">Email *</label>
                                            <input type="email" id="contact-email" name="email" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="contact-phone">Téléphone</label>
                                            <input type="tel" id="contact-phone" name="phone">
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="contact-subject">Sujet</label>
                                        <select id="contact-subject" name="subject">
                                            <option value="">Choisir un sujet...</option>
                                            <option value="erp">Solutions ERP Métallurgie</option>
                                            <option value="conseil">Conseil Stratégique</option>
                                            <option value="formation">Formation & Support</option>
                                            <option value="autre">Autre demande</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="contact-message">Message *</label>
                                        <textarea id="contact-message" 
                                                  name="message" 
                                                  rows="5" 
                                                  placeholder="Décrivez votre projet ou vos besoins..."
                                                  required></textarea>
                                    </div>
                                    
                                    <div class="form-group form-checkbox">
                                        <label class="checkbox-label">
                                            <input type="checkbox" name="newsletter" id="contact-newsletter">
                                            <span class="checkbox-custom"></span>
                                            J'accepte de recevoir des informations sur les actualités Oweo
                                        </label>
                                    </div>
                                    
                                    <div class="form-actions">
                                        <button type="submit" class="btn btn-primary btn-lg">
                                            📤 Envoyer le Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `;
    },

    /**
     * Initialisation de la page
     */
    init() {
        try {
            if (this.initialized) {
                console.log('🏠 Page home déjà initialisée');
                return;
            }

            console.log('🏠 Initialisation page home...');
            
            this.bindEvents();
            this.initializeAnimations();
            this.startCarousel();
            this.initialized = true;
            
            console.log('✅ Page home initialisée');
            
        } catch (error) {
            console.error('❌ Erreur initialisation page home:', error);
        }
    },

    /**
     * Liaison des événements
     */
    bindEvents() {
        try {
            // Formulaire de contact
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', this.handleContactForm.bind(this));
            }

            // Indicateurs du carousel
            const indicators = document.querySelectorAll('.carousel-indicators .indicator');
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    this.goToTestimonial(index);
                });
            });

            // Smooth scroll pour les ancres
            document.addEventListener('click', (e) => {
                const link = e.target.closest('a[href^="#"]');
                if (link) {
                    e.preventDefault();
                    const targetId = link.getAttribute('href').substring(1);
                    this.scrollToSection(targetId);
                }
            });

            console.log('✅ Événements page home liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison événements home:', error);
        }
    },

    /**
     * Initialiser les animations
     */
    initializeAnimations() {
        try {
            if (!this.animationsEnabled) return;

            // Observer d'intersection pour les animations au scroll
            if ('IntersectionObserver' in window) {
                const observerOptions = {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                };

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                        }
                    });
                }, observerOptions);

                // Observer les éléments animables
                const animatableElements = document.querySelectorAll(
                    '.service-card, .benefit-item, .process-step, .testimonial-card'
                );
                
                animatableElements.forEach(el => {
                    observer.observe(el);
                });
            }

            // Animations des éléments hero
            this.animateHeroElements();

            console.log('✅ Animations initialisées');
            
        } catch (error) {
            console.error('❌ Erreur initialisation animations:', error);
        }
    },

    /**
     * Animer les éléments du hero
     */
    animateHeroElements() {
        try {
            const elements = document.querySelectorAll('.illustration-element');
            
            elements.forEach((element, index) => {
                const animation = element.dataset.animation;
                
                setTimeout(() => {
                    element.classList.add(`animate-${animation}`);
                }, index * 200);
            });
            
        } catch (error) {
            console.error('❌ Erreur animation éléments hero:', error);
        }
    },

    /**
     * Gestion du carousel de témoignages
     */
    currentTestimonial: 0,
    testimonialInterval: null,

    startCarousel() {
        try {
            this.testimonialInterval = setInterval(() => {
                this.nextTestimonial();
            }, 6000); // Change toutes les 6 secondes
            
        } catch (error) {
            console.error('❌ Erreur démarrage carousel:', error);
        }
    },

    nextTestimonial() {
        try {
            const testimonials = document.querySelectorAll('.testimonial-card');
            if (testimonials.length === 0) return;

            this.currentTestimonial = (this.currentTestimonial + 1) % testimonials.length;
            this.updateTestimonialDisplay();
            
        } catch (error) {
            console.error('❌ Erreur testimonial suivant:', error);
        }
    },

    previousTestimonial() {
        try {
            const testimonials = document.querySelectorAll('.testimonial-card');
            if (testimonials.length === 0) return;

            this.currentTestimonial = this.currentTestimonial === 0 
                ? testimonials.length - 1 
                : this.currentTestimonial - 1;
            this.updateTestimonialDisplay();
            
        } catch (error) {
            console.error('❌ Erreur testimonial précédent:', error);
        }
    },

    goToTestimonial(index) {
        try {
            this.currentTestimonial = index;
            this.updateTestimonialDisplay();
            
            // Redémarrer le timer
            if (this.testimonialInterval) {
                clearInterval(this.testimonialInterval);
                this.startCarousel();
            }
            
        } catch (error) {
            console.error('❌ Erreur aller au testimonial:', error);
        }
    },

    updateTestimonialDisplay() {
        try {
            const testimonials = document.querySelectorAll('.testimonial-card');
            const indicators = document.querySelectorAll('.carousel-indicators .indicator');

            testimonials.forEach((testimonial, index) => {
                testimonial.classList.toggle('active', index === this.currentTestimonial);
            });

            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === this.currentTestimonial);
            });
            
        } catch (error) {
            console.error('❌ Erreur mise à jour affichage testimonial:', error);
        }
    },

    /**
     * Gestion du formulaire de contact
     */
    handleContactForm(e) {
        try {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            
            // Validation
            if (!this.validateContactForm(data)) {
                return;
            }

            // Simulation d'envoi (à remplacer par vraie logique)
            this.simulateFormSubmission(data);
            
        } catch (error) {
            console.error('❌ Erreur soumission formulaire:', error);
            this.showFormError('Une erreur est survenue lors de l\'envoi du message.');
        }
    },

    validateContactForm(data) {
        try {
            const errors = [];

            if (!data.name?.trim()) {
                errors.push('Le nom est requis');
            }

            if (!data.email?.trim()) {
                errors.push('L\'email est requis');
            } else if (!this.isValidEmail(data.email)) {
                errors.push('L\'email n\'est pas valide');
            }

            if (!data.message?.trim()) {
                errors.push('Le message est requis');
            }

            if (errors.length > 0) {
                this.showFormError(errors.join(', '));
                return false;
            }

            return true;
            
        } catch (error) {
            console.error('❌ Erreur validation formulaire:', error);
            return false;
        }
    },

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    simulateFormSubmission(data) {
        try {
            // Afficher un état de chargement
            const submitBtn = document.querySelector('#contact-form button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '📤 Envoi en cours...';
            submitBtn.disabled = true;

            // Simuler l'envoi
            setTimeout(() => {
                this.showFormSuccess('Message envoyé avec succès ! Nous vous recontacterons rapidement.');
                document.getElementById('contact-form').reset();
                
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
            
        } catch (error) {
            console.error('❌ Erreur simulation envoi formulaire:', error);
        }
    },

    showFormSuccess(message) {
        this.showNotification(message, 'success', 5000);
    },

    showFormError(message) {
        this.showNotification(`❌ ${message}`, 'error', 4000);
    },

    showNotification(message, type = 'info', duration = 3000) {
        try {
            if (window.OweoClientAccess && typeof window.OweoClientAccess.showNotification === 'function') {
                window.OweoClientAccess.showNotification(message, type, duration);
            } else {
                // Fallback simple
                alert(message);
            }
        } catch (error) {
            console.error('❌ Erreur notification:', error);
            console.log(message);
        }
    },

    /**
     * Navigation fluide
     */
    scrollToSection(sectionId) {
        try {
            const element = document.getElementById(sectionId);
            if (element) {
                const offsetTop = element.offsetTop - 80; // Compenser la navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            console.error('❌ Erreur scroll vers section:', error);
        }
    },

    scrollToContact() {
        this.scrollToSection('contact');
    },

    /**
     * Getters pour la configuration
     */
    getCalendlyUrl() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.urls?.calendly) || 'https://calendly.com/oweo-consulting';
    },

    getContactEmail() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.email) || 'contact@oweo-consulting.fr';
    },

    getContactPhone() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.phone) || '+33 (0)2 xx xx xx xx';
    },

    getContactAddress() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.address?.city) || 'Nantes, France';
    },

    getLinkedIn() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.contact?.social?.linkedin) || 'https://linkedin.com/company/oweo-consulting';
    },

    /**
     * Destruction propre
     */
    destroy() {
        try {
            if (this.testimonialInterval) {
                clearInterval(this.testimonialInterval);
                this.testimonialInterval = null;
            }
            
            this.initialized = false;
            console.log('🏠 Page home détruite');
            
        } catch (error) {
            console.error('❌ Erreur destruction page home:', error);
        }
    }
};

console.log('🏠 Home page loaded with complete functionality');