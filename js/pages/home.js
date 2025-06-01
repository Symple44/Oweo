// js/pages/home.js - Page d'accueil adaptée pour les CSS intégrés

window.pages = window.pages || {};

window.pages.home = {
    render() {
        return `
            <!-- Hero Section Optimisée -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="gradient-text">Expert ERP & Transformation Digitale pour la Charpente Métallique</h1>
                        <p class="hero-subtitle">
                            <strong>10+ années d'expertise terrain</strong> en métallurgie, charpente et serrurerie.<br>
                            Nous vous accompagnons dans votre transformation digitale avec des solutions adaptées à votre métier.
                        </p>
                        
                        <div class="hero-stats">
                            <div class="stat">
                                <div class="stat-number">10+</div>
                                <div class="stat-label">Années d'expérience</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">Spécialisé métallurgie</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">360°</div>
                                <div class="stat-label">De l'atelier au bureau</div>
                            </div>
                        </div>
                        
                        <div class="hero-actions">
                            <button class="btn btn-primary btn-large animate-scale-in" data-calendly="true">
                                🎯 Diagnostic Gratuit (30min)
                            </button>
                            <a href="#solutions" class="btn btn-secondary btn-large animate-scale-in delay-100">
                                Voir Nos Solutions
                            </a>
                        </div>
                        
                        <div class="hero-trust">
                            <p>🏆 Ingénieur Construction Métallique - Spécialiste ERP métallurgie</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section Problèmes/Solutions -->
            <section id="solutions" class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Nous Résolvons vos Défis Quotidiens</h2>
                        <p class="section-subtitle">Des solutions concrètes pour vos problématiques métier</p>
                    </div>
                    
                    <div class="problems-solutions" id="problems-solutions"></div>
                </div>
            </section>

            <!-- Témoignages Authentiques -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Retours d'Expérience</h2>
                        <p class="section-subtitle">Témoignages de dirigeants du secteur</p>
                    </div>
                    
                    <div class="testimonials-simple animate-fade-in" id="testimonials-simple"></div>
                </div>
            </section>

            <!-- Notre Approche en 3 Étapes -->
            <section class="section section-special-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Notre Approche en 3 Étapes</h2>
                        <p class="section-subtitle">Méthode éprouvée pour votre réussite</p>
                    </div>
                    
                    <div class="method-simple" id="method-simple"></div>
                    
                    <div class="method-guarantee">
                        <div class="guarantee-banner">
                            <h3>🛡️ Notre Engagement</h3>
                            <p>Nous vous accompagnons jusqu'à l'atteinte de vos objectifs avec <strong>un support complet inclus</strong>.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Nos Domaines d'Expertise -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Nos Domaines d'Expertise</h2>
                        <p class="section-subtitle">Solutions complètes pour votre transformation digitale</p>
                    </div>
                    
                    <div class="expertise-simple" id="expertise-simple"></div>
                </div>
            </section>

            <!-- FAQ Essentielles -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Questions Fréquentes</h2>
                        <p class="section-subtitle">Réponses aux questions les plus posées</p>
                    </div>
                    
                    <div class="faq-essential" id="faq-essential"></div>
                </div>
            </section>

            <!-- CTA Final Authentique -->
            <section class="cta-final">
                <div class="container">
                    <div class="cta-content">
                        <h2>🚀 Parlons de votre Projet</h2>
                        <p class="cta-description">
                            Diagnostic gratuit de 30 minutes pour identifier vos priorités.<br>
                            <strong>Échange sans engagement - Conseil personnalisé</strong>
                        </p>
                        
                        <div class="cta-benefits">
                            <div class="benefit">✅ Audit personnalisé gratuit</div>
                            <div class="benefit">✅ Conseils d'expert métier</div>
                            <div class="benefit">✅ Estimation budgétaire</div>
                            <div class="benefit">✅ Plan d'action concret</div>
                        </div>
                        
                        <div class="cta-actions">
                            <button class="btn btn-primary btn-large hover-lift" data-calendly="true">
                                📅 Réserver mon Diagnostic Gratuit
                            </button>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary btn-large hover-lift">
                                📧 Contact Direct
                            </a>
                        </div>
                        
                        <div class="cta-urgency">
                            <p>⚡ <strong>Réponse garantie sous 24h</strong> pour toute demande reçue en semaine</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderProblemsAndSolutions();
        this.renderTestimonials();
        this.renderSimpleMethod();
        this.renderExpertise();
        this.renderEssentialFAQ();
        this.bindEvents();
        this.setupScrollAnimations();
        
        console.log('🏠 Home page initialized with enhanced CSS');
    },

    renderProblemsAndSolutions() {
        const problemsAndSolutions = [
            {
                problem: {
                    icon: '⏰',
                    title: 'Chiffrage trop Long',
                    description: 'Plusieurs heures par devis avec risques d\'erreurs'
                },
                solution: {
                    icon: '⚡',
                    title: 'Chiffrage Automatisé',
                    description: 'Bases de données intégrées et calculs automatiques',
                    result: 'Gain de temps significatif'
                }
            },
            {
                problem: {
                    icon: '❌',
                    title: 'Manque de Visibilité',
                    description: 'Difficile de connaître la rentabilité réelle par projet'
                },
                solution: {
                    icon: '📊',
                    title: 'Pilotage Temps Réel',
                    description: 'Tableaux de bord et suivi des marges en continu',
                    result: 'Visibilité complète'
                }
            },
            {
                problem: {
                    icon: '🔄',
                    title: 'Trop de Ressaisies',
                    description: 'Double ou triple saisie des mêmes informations'
                },
                solution: {
                    icon: '🚀',
                    title: 'Synchronisation Automatique',
                    description: 'Intégration CAO-ERP et génération automatique des OF',
                    result: 'Suppression des ressaisies'
                }
            },
            {
                problem: {
                    icon: '⚠️',
                    title: 'Conformité EN1090 Complexe',
                    description: 'Documentation papier difficile à maintenir pour les audits'
                },
                solution: {
                    icon: '✅',
                    title: 'Conformité Digitalisée',
                    description: 'Traçabilité automatique et préparation audits simplifiée',
                    result: 'Conformité maîtrisée'
                }
            }
        ];

        const container = document.getElementById('problems-solutions');
        if (!container) return;

        container.innerHTML = problemsAndSolutions.map((item, index) => `
            <div class="problem-solution-card animate-slide-up delay-${index * 100}">
                <div class="problem-side">
                    <div class="problem-icon">${item.problem.icon}</div>
                    <h3>${item.problem.title}</h3>
                    <p>${item.problem.description}</p>
                </div>
                <div class="solution-arrow">→</div>
                <div class="solution-side">
                    <div class="solution-icon">${item.solution.icon}</div>
                    <h3>${item.solution.title}</h3>
                    <p>${item.solution.description}</p>
                    <div class="solution-result">${item.solution.result}</div>
                </div>
            </div>
        `).join('');
    },

    renderTestimonials() {
        const testimonials = [
            {
                quote: "Oweo maîtrise parfaitement notre métier de charpentier métallique. Leur approche terrain et leur connaissance technique font la différence.",
                author: "Dirigeant",
                company: "Entreprise de Charpente Métallique - Nouvelle-Aquitaine",
                result: "Projet ERP réussi"
            },
            {
                quote: "Enfin un consultant qui comprend nos contraintes d'atelier et de bureau d'études. Les solutions proposées sont concrètes et efficaces.",
                author: "Responsable Production",
                company: "Serrurerie Métallerie - Pays de la Loire",
                result: "Optimisation réussie"
            },
            {
                quote: "L'expertise EN1090 d'Oweo nous a permis d'obtenir notre certification Exc.3 sereinement. Un vrai plus pour notre développement.",
                author: "Responsable Qualité",
                company: "Charpente Industrielle - Bretagne",
                result: "Certification EN1090"
            }
        ];

        const container = document.getElementById('testimonials-simple');
        if (!container) return;

        container.innerHTML = `
            <div class="testimonials-slider">
                ${testimonials.map((testimonial, index) => `
                    <div class="testimonial-card ${index === 0 ? 'active' : ''}" data-testimonial="${index}">
                        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                        <blockquote>"${testimonial.quote}"</blockquote>
                        <div class="testimonial-author">
                            <strong>${testimonial.author}</strong>
                            <span>${testimonial.company}</span>
                        </div>
                        <div class="testimonial-result">${testimonial.result}</div>
                    </div>
                `).join('')}
            </div>
            <div class="testimonials-nav">
                ${testimonials.map((_, index) => `
                    <button class="nav-dot ${index === 0 ? 'active' : ''}" data-testimonial-dot="${index}" aria-label="Voir témoignage ${index + 1}"></button>
                `).join('')}
            </div>
        `;
    },

    renderSimpleMethod() {
        const steps = [
            {
                number: '1',
                title: 'Diagnostic Personnalisé',
                description: 'Audit de votre situation actuelle et identification des priorités',
                icon: '🔍'
            },
            {
                number: '2',
                title: 'Solution Sur-Mesure',
                description: 'Choix et déploiement de la solution optimale pour votre entreprise',
                icon: '🛠️'
            },
            {
                number: '3',
                title: 'Accompagnement Complet',
                description: 'Formation et support jusqu\'à l\'atteinte de vos objectifs',
                icon: '🎯'
            }
        ];

        const container = document.getElementById('method-simple');
        if (!container) return;

        container.innerHTML = `
            <div class="method-steps-simple">
                ${steps.map((step, index) => `
                    <div class="method-step-simple animate-slide-up delay-${200 * index}">
                        <div class="step-icon-large">${step.icon}</div>
                        <div class="step-number-large">${step.number}</div>
                        <h3>${step.title}</h3>
                        <p>${step.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderExpertise() {
        const expertiseAreas = [
            {
                icon: '🛠️',
                title: 'ERP & Gestion',
                description: 'Sage X3, Eurêka, 2CM Manager - Solutions ERP spécialisées métallurgie',
                link: 'outils-gestion'
            },
            {
                icon: '📊',
                title: 'Business Intelligence',
                description: 'Tableaux de bord temps réel pour piloter votre performance',
                link: 'consulting-strategique'
            },
            {
                icon: '🤖',
                title: 'Intelligence Artificielle',
                description: 'IA de contrôle qualité et optimisation des processus',
                link: 'ia-projets'
            },
            {
                icon: '✅',
                title: 'Conformité EN1090',
                description: 'Digitalisation complète de votre système qualité',
                link: 'en1090'
            },
            {
                icon: '⚡',
                title: 'Optimisation Production',
                description: 'Amélioration continue et gains de productivité mesurables',
                link: 'optimisation'
            },
            {
                icon: '🤝',
                title: 'Accompagnement Projet',
                description: 'Support complet de A à Z pour garantir votre réussite',
                link: 'accompagnement-projet'
            }
        ];

        const container = document.getElementById('expertise-simple');
        if (!container) return;

        container.innerHTML = `
            <div class="expertise-grid-simple">
                ${expertiseAreas.map((area, index) => `
                    <div class="expertise-card-simple hover-lift animate-fade-in delay-${100 * index}" data-page="${area.link}">
                        <div class="expertise-icon">${area.icon}</div>
                        <h3>${area.title}</h3>
                        <p>${area.description}</p>
                        <div class="expertise-link">Découvrir →</div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderEssentialFAQ() {
        const essentialFAQ = [
            {
                question: "Combien coûte un projet de transformation digitale ?",
                answer: "Le budget varie selon la taille de votre entreprise et vos besoins. Nous réalisons toujours un diagnostic gratuit pour vous donner une estimation précise et évaluer la pertinence de l'investissement."
            },
            {
                question: "Combien de temps dure un projet ?",
                answer: "Généralement 3 à 6 mois pour un déploiement complet. Le diagnostic prend 2-3 jours, puis nous définissons ensemble le planning adapté à votre activité et vos contraintes."
            },
            {
                question: "Quels sont les bénéfices typiques obtenus ?",
                answer: "Les entreprises que nous accompagnons constatent une amélioration significative de leur productivité, une réduction des erreurs et une meilleure visibilité sur leurs marges. Les gains varient selon le contexte initial."
            },
            {
                question: "Comment l'IA peut-elle aider mon entreprise de métallurgie ?",
                answer: "L'IA peut automatiser le contrôle qualité des soudures, optimiser vos découpes pour réduire les chutes, ou encore créer des assistants intelligents pour vos devis. Nous étudions les applications concrètes selon votre métier."
            },
            {
                question: "Comment assurez-vous la réussite du projet ?",
                answer: "Fort de 10+ années d'expérience terrain en métallurgie, nous vous accompagnons de A à Z avec une approche pragmatique. Support complet inclus pour garantir votre autonomie."
            }
        ];

        const container = document.getElementById('faq-essential');
        if (!container) return;

        container.innerHTML = `
            <div class="faq-list-essential">
                ${essentialFAQ.map((item, index) => `
                    <div class="faq-item-essential animate-fade-in delay-${50 * index}" data-faq-index="${index}">
                        <button class="faq-question-essential" role="button" tabindex="0" aria-expanded="false">
                            <h3>${item.question}</h3>
                            <span class="faq-toggle-essential">+</span>
                        </button>
                        <div class="faq-answer-essential">
                            <p>${item.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    bindEvents() {
        // Gestion FAQ améliorée
        this.setupFAQ();

        // Calendly buttons
        this.setupCalendly();

        // Smooth scroll pour les ancres
        this.setupSmoothScroll();

        // Navigation vers les pages d'expertise
        this.setupExpertiseNavigation();

        // Témoignages - navigation manuelle
        this.setupTestimonialsNavigation();

        // Rotation automatique des témoignages
        this.setupTestimonialsRotation();

        // Setup scroll to top on page change
        this.scrollToTop();
    },

    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item-essential');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question-essential');
            if (!question) return;

            // Fonction de toggle avec animation améliorée
            const