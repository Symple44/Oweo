// js/pages/home.js - Page d'accueil simplifiée et améliorée

window.pages = window.pages || {};

window.pages.home = {
    render() {
        return `
            <!-- Hero Section Simplifié -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <h1 class="gradient-text">Expert ERP & Transformation Digitale pour la Charpente Métallique</h1>
                        <p class="hero-subtitle">
                            Nous vous accompagnons pour <strong>gagner en productivité</strong> grâce à des solutions ERP adaptées à votre métier.<br>
                            <span class="hero-guarantee">✅ Expérience terrain ada</span>
                        </p>
                        
                        <div class="hero-stats">
                            <div class="stat">
                                <div class="stat-number">15+</div>
                                <div class="stat-label">Projets ERP réussis</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">+20%</div>
                                <div class="stat-label">Productivité moyenne</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">18 mois</div>
                                <div class="stat-label">ROI garanti</div>
                            </div>
                        </div>
                        
                        <div class="hero-actions">
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                🎯 Diagnostic Gratuit (30min)
                            </button>
                            <a href="#expertise-simple" class="btn btn-secondary btn-large">
                                Voir Nos Services
                            </a>
                        </div>
                        
                        <div class="hero-trust">
                            <p>🏆 Spécialistes reconnus par </p>
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

            <!-- Calculateur ROI Simplifié 
            <section class="section section-special-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">💰 Calculez vos Gains en 30 Secondes</h2>
                        <p class="section-subtitle">Estimation basée sur nos résultats clients réels</p>
                    </div>
                    
                    <div class="roi-calculator-simple">
                        <div class="calculator-inputs">
                            <div class="input-group">
                                <label>Nombre d'employés administratifs/BE :</label>
                                <input type="number" id="employees" value="5" min="1" max="50">
                            </div>
                            <div class="input-group">
                                <label>Devis par semaine :</label>
                                <input type="number" id="quotes" value="10" min="1" max="100">
                            </div>
                        </div>
                        
                        <div class="calculator-results" id="roi-results">
                            <div class="result-item">
                                <div class="result-value" id="time-saved">10h</div>
                                <div class="result-label">Temps économisé/semaine</div>
                            </div>
                            <div class="result-item">
                                <div class="result-value" id="annual-savings">23 400€</div>
                                <div class="result-label">Économies annuelles</div>
                            </div>
                            <div class="result-item">
                                <div class="result-value" id="roi-period">12 mois</div>
                                <div class="result-label">Retour sur investissement</div>
                            </div>
                        </div>
                        
                        <div class="calculator-cta">
                            <p><strong>Ces résultats vous intéressent ?</strong></p>
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                📅 Validons ces chiffres ensemble
                            </button>
                        </div>
                    </div>
                </div>
            </section> -->

            <!-- Témoignages Simples 
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Ce que disent nos Clients</h2>
                        <p class="section-subtitle">Témoignages authentiques de dirigeants satisfaits</p>
                    </div>
                    
                    <div class="testimonials-simple" id="testimonials-simple"></div>
                </div>
            </section> -->

            <!-- Notre Approche en 3 Étapes -->
            <section class="section section-special-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Notre Méthode en 3 Étapes Simples</h2>
                        <p class="section-subtitle">Processus éprouvé pour garantir votre réussite</p>
                    </div>
                    
                    <div class="method-simple" id="method-simple"></div>
                    
                    <!--<div class="method-guarantee">
                        <div class="guarantee-banner">
                            <h3>🛡️ Notre Garantie</h3>
                            <p>Si vous ne gagnez pas <strong>1h/jour/utilisateur en 3 mois</strong>, nous reprenons le projet sans frais.</p>
                        </div>
                    </div>
                    -->
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

            <!-- CTA Final Renforcé -->
            <section class="cta-final">
                <div class="container">
                    <div class="cta-content">
                        <h2>🚀 Prêt à Transformer votre Entreprise ?</h2>
                        <p class="cta-description">
                            Diagnostic gratuit de 30 minutes pour identifier vos gains prioritaires.<br>
                            <strong>Sans engagement - Résultats garantis</strong>
                        </p>
                        
                        <div class="cta-benefits">
                            <div class="benefit">✅ Audit personnalisé gratuit</div>
                            <div class="benefit">✅ Plan d'action concret</div>
                            <div class="benefit">✅ ROI calculé précisément</div>
                            <div class="benefit">✅ Recommandations d'expert</div>
                        </div>
                        
                        <div class="cta-actions">
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                📅 Réserver mon Diagnostic Gratuit
                            </button>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary btn-large">
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
        this.initSimpleROICalculator();
        this.bindEvents();
        
        console.log('🏠 Simplified home page initialized');
    },

    renderProblemsAndSolutions() {
        const problemsAndSolutions = [
            {
                problem: {
                    icon: '⏰',
                    title: 'Chiffrage trop Long',
                    description: '4-6h par devis avec des erreurs fréquentes'
                },
                solution: {
                    icon: '⚡',
                    title: 'Chiffrage Automatisé',
                    description: '30 minutes par devis avec bases de données intégrées',
                    result: 'Gain : 75% de temps'
                }
            },
            {
                problem: {
                    icon: '❌',
                    title: 'Pas de Visibilité sur les Marges',
                    description: 'Impossible de connaître la rentabilité réelle'
                },
                solution: {
                    icon: '📊',
                    title: 'Pilotage Temps Réel',
                    description: 'Visibilité complète sur marges et performances',
                    result: 'Gain : +3 points de marge'
                }
            },
            {
                problem: {
                    icon: '🔄',
                    title: 'Trop de Saisies Manuelles',
                    description: 'Double/triple saisie des mêmes informations'
                },
                solution: {
                    icon: '🚀',
                    title: 'Synchronisation Automatique',
                    description: 'CAO-ERP synchronisés, génération automatique des OF',
                    result: 'Gain : 2h/jour/personne'
                }
            },
            {
                problem: {
                    icon: '⚠️',
                    title: 'Conformité EN1090 Stressante',
                    description: 'Documentation papier et préparation audit difficile'
                },
                solution: {
                    icon: '✅',
                    title: 'Conformité Digitalisée',
                    description: 'Traçabilité automatique et audits sans stress',
                    result: 'Certification garantie'
                }
            }
        ];

        const container = document.getElementById('problems-solutions');
        if (!container) return;

        container.innerHTML = problemsAndSolutions.map(item => `
            <div class="problem-solution-card">
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
                quote: "Oweo a révolutionné notre gestion. Nous économisons 10h par semaine et nos marges ont progressé de 3 points.",
                author: "Michel Dubois",
                company: "Directeur Général - Charpente Bretagne (80 sal.)",
                result: "ROI atteint en 8 mois"
            },
            {
                quote: "L'approche terrain d'Oweo fait la différence. Ils comprennent nos contraintes et proposent des solutions qui marchent.",
                author: "Sophie Martin",
                company: "Directrice - Métallerie Moderne (25 sal.)",
                result: "+20% productivité"
            },
            {
                quote: "Grâce à Oweo, nos audits EN1090 se passent maintenant sans stress. La traçabilité est automatique.",
                author: "Pierre Rousseau",
                company: "Responsable Qualité - Charpente Industrielle",
                result: "Certification Exc.3"
            }
        ];

        const container = document.getElementById('testimonials-simple');
        if (!container) return;

        container.innerHTML = `
            <div class="testimonials-slider">
                ${testimonials.map((testimonial, index) => `
                    <div class="testimonial-card ${index === 0 ? 'active' : ''}">
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
                    <button class="nav-dot ${index === 0 ? 'active' : ''}" onclick="this.parentElement.parentElement.querySelector('.testimonials-slider').setAttribute('data-current', '${index}'); this.parentElement.querySelectorAll('.nav-dot').forEach((dot, i) => dot.classList.toggle('active', i === ${index})); this.parentElement.parentElement.querySelectorAll('.testimonial-card').forEach((card, i) => card.classList.toggle('active', i === ${index}));"></button>
                `).join('')}
            </div>
        `;
    },

    renderSimpleMethod() {
        const steps = [
            {
                number: '1',
                title: 'Diagnostic Gratuit',
                description: 'Audit de votre situation actuelle et identification des priorités',
                duration: '2-3 jours',
                icon: '🔍'
            },
            {
                number: '2',
                title: 'Solution Sur-Mesure',
                description: 'Choix et déploiement de la solution optimale pour votre entreprise',
                duration: '3-6 mois',
                icon: '🛠️'
            },
            {
                number: '3',
                title: 'Résultats Garantis',
                description: 'Accompagnement jusqu\'à l\'atteinte de vos objectifs de performance',
                duration: '6 mois',
                icon: '🎯'
            }
        ];

        const container = document.getElementById('method-simple');
        if (!container) return;

        container.innerHTML = `
            <div class="method-steps-simple">
                ${steps.map(step => `
                    <div class="method-step-simple">
                        <div class="step-icon-large">${step.icon}</div>
                        <div class="step-number-large">${step.number}</div>
                        <h3>${step.title}</h3>
                        <p>${step.description}</p>
                        <!-- <div class="step-duration">⏱️ ${step.duration}</div> -->
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
                description: 'Sage X3, Eurêka, 2CM Manager - Solutions ERP adaptées à votre métier',
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
                title: 'Optimisation',
                description: 'Amélioration continue et gains de productivité mesurables',
                link: 'optimisation'
            },
            {
                icon: '🤝',
                title: 'Accompagnement',
                description: 'Support complet de A à Z pour garantir votre réussite',
                link: 'accompagnement-projet'
            }
        ];

        const container = document.getElementById('expertise-simple');
        if (!container) return;

        container.innerHTML = `
            <div class="expertise-grid-simple">
                ${expertiseAreas.map(area => `
                    <div class="expertise-card-simple" onclick="router.navigate('${area.link}')" style="cursor: pointer;">
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
                question: "Combien coûte un projet ERP complet ?",
                answer: "Entre 25k€ et 80k€ selon la taille de votre entreprise. Nous calculons systématiquement le ROI avant de commencer pour valider la rentabilité. Diagnostic gratuit pour une estimation précise."
            },
            {
                question: "Combien de temps dure un projet ?",
                answer: "3 à 6 mois en moyenne pour un déploiement complet. Le diagnostic prend 2-3 jours, puis 4-8 semaines de déploiement avec 6 mois de support inclus."
            },
            {
                question: "Quels sont les gains typiques obtenus ?",
                answer: "Nos clients gagnent en moyenne : +20% de productivité, -60% d'erreurs, +3 points de marge, 2h/jour économisées par personne. ROI moyen atteint en 18 mois."
            },
            {
                question: "Que se passe-t-il si les résultats ne sont pas au rendez-vous ?",
                answer: "Nous garantissons des gains mesurables. Si vous ne gagnez pas 1h/jour/utilisateur en 3 mois, nous reprenons le projet sans frais supplémentaires."
            }
        ];

        const container = document.getElementById('faq-essential');
        if (!container) return;

        container.innerHTML = `
            <div class="faq-list-essential">
                ${essentialFAQ.map((item, index) => `
                    <div class="faq-item-essential">
                        <div class="faq-question-essential" onclick="this.parentElement.classList.toggle('active')" role="button" tabindex="0">
                            <h3>${item.question}</h3>
                            <span class="faq-toggle-essential">+</span>
                        </div>
                        <div class="faq-answer-essential">
                            <p>${item.answer}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    initSimpleROICalculator() {
        const calculateSimpleROI = () => {
            const employees = parseInt(document.getElementById('employees').value) || 5;
            const quotes = parseInt(document.getElementById('quotes').value) || 10;
            
            // Calculs simplifiés basés sur nos données réelles
            const timeSavedWeekly = quotes * 2; // 2h gagnées par devis
            const hourlyCost = 45; // Coût horaire moyen
            const annualSavings = timeSavedWeekly * 52 * hourlyCost;
            
            // Coût projet estimé
            const projectCost = Math.max(25000, Math.min(80000, employees * 6000));
            const roiMonths = Math.round(projectCost / (annualSavings / 12));
            
            // Mise à jour affichage
            document.getElementById('time-saved').textContent = `${timeSavedWeekly}h`;
            document.getElementById('annual-savings').textContent = `${annualSavings.toLocaleString('fr-FR')}€`;
            document.getElementById('roi-period').textContent = `${Math.min(roiMonths, 24)} mois`;
        };
        
        // Event listeners
        ['employees', 'quotes'].forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', calculateSimpleROI);
                input.addEventListener('change', calculateSimpleROI);
            }
        });
        
        // Calcul initial
        setTimeout(calculateSimpleROI, 100);
    },

    bindEvents() {
        // Gestion FAQ
        const faqItems = document.querySelectorAll('.faq-item-essential');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question-essential');
            const toggle = item.querySelector('.faq-toggle-essential');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-toggle-essential').textContent = '+';
                });
                
                // Toggle actuel
                if (!isActive) {
                    item.classList.add('active');
                    toggle.textContent = '−';
                }
            });
        });

        // Calendly buttons
        const calendlyButtons = document.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            button.addEventListener('click', this.openCalendly.bind(this));
        });

        // Smooth scroll
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Rotation automatique des témoignages
        this.setupTestimonialsRotation();
    },

    setupTestimonialsRotation() {
        const testimonials = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.nav-dot');
        
        if (!testimonials.length) return;

        let currentIndex = 0;
        
        setInterval(() => {
            // Masquer le témoignage actuel
            testimonials[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            
            // Passer au suivant
            currentIndex = (currentIndex + 1) % testimonials.length;
            
            // Afficher le nouveau témoignage
            testimonials[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }, 5000);
    },

    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly
            });
            
            if (OweoUtils.analytics) {
                OweoUtils.analytics.track('calendly_open', {
                    location: 'home_page_simplified'
                });
            }
        } else {
            console.warn('Calendly not loaded');
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }
};

console.log('🏠 Simplified home page loaded');