// js/pages/home.js - Page d'accueil

window.pages = window.pages || {};

window.pages.home = {
    render() {
        return `
            <!-- Hero Section -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">🚀 Transformation Digitale Métallurgie</div>
                        <h1 class="gradient-text">Gagnez en Performance avec les Solutions Digitales Oweo</h1>
                        <p class="hero-subtitle">
                            <strong>Spécialistes de la charpente métallique</strong>, nous transformons votre productivité avec des solutions éprouvées.<br>
                            <strong>Résultats garantis :</strong> ${OweoConfig.results.productivity} de productivité, 
                            ${OweoConfig.results.timeGain} gagnées par personne, ${OweoConfig.results.margin} de marge supplémentaire.
                        </p>
                        
                        <div class="hero-stats">
                            <div class="stat">
                                <div class="stat-number">${OweoConfig.expertise.stats.projects}</div>
                                <div class="stat-label">Solutions ERP déployées</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">${OweoConfig.expertise.stats.successRate}</div>
                                <div class="stat-label">De projets réussis</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">${OweoConfig.expertise.stats.experience}</div>
                                <div class="stat-label">Années d'expertise terrain</div>
                            </div>
                        </div>
                        
                        <div class="hero-actions">
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                🎯 Diagnostic Gratuit (30min)
                            </button>
                            <a href="#solutions" class="btn btn-secondary btn-large">
                                Découvrir Nos Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section Problématiques Clients -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">❌ Les Défis de votre Quotidien</h2>
                        <p class="section-subtitle">Nous connaissons vos problématiques métier</p>
                    </div>
                    
                    <div class="grid grid-2" id="problems-grid"></div>
                </div>
            </section>

            <!-- Section Solutions -->
            <section id="solutions" class="section section-special-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">✅ Nos Solutions pour Votre Réussite</h2>
                        <p class="section-subtitle">Solutions éprouvées et résultats mesurables pour entreprises de métallurgie</p>
                    </div>
                    
                    <div class="grid grid-2" id="solutions-grid"></div>
                </div>
            </section>

            <!-- Calculateur ROI -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">💰 Calculez vos Gains Potentiels</h2>
                        <p class="section-subtitle">Estimation personnalisée de votre retour sur investissement</p>
                    </div>
                    
                    <div class="roi-calculator">
                        <h3 class="roi-title">Simulateur de Performance</h3>
                        
                        <div class="roi-inputs">
                            <div class="roi-input-group">
                                <label for="employees">Employés admin/BE</label>
                                <input type="number" id="employees" placeholder="Ex: 5" value="5" min="1" max="100">
                            </div>
                            
                            <div class="roi-input-group">
                                <label for="quotes-per-week">Devis par semaine</label>
                                <input type="number" id="quotes-per-week" placeholder="Ex: 10" value="10" min="1" max="50">
                            </div>
                            
                            <div class="roi-input-group">
                                <label for="time-per-quote">Temps par devis (h)</label>
                                <input type="number" id="time-per-quote" placeholder="Ex: 4" value="4" step="0.5" min="0.5" max="20">
                            </div>
                            
                            <div class="roi-input-group">
                                <label for="hourly-rate">Coût horaire (€)</label>
                                <input type="number" id="hourly-rate" placeholder="Ex: 45" value="45" min="20" max="100">
                            </div>
                        </div>
                        
                        <div id="roi-result" class="roi-result">
                            <h4>📈 Vos Gains Estimés avec Oweo</h4>
                            <div class="roi-metrics-grid">
                                <div class="roi-metric">
                                    <strong>⚡ Temps économisé :</strong><br>
                                    <span id="time-saved" class="roi-value">10h/semaine</span>
                                </div>
                                <div class="roi-metric">
                                    <strong>💰 Économies annuelles :</strong><br>
                                    <span id="annual-savings" class="roi-value">23 400€/an</span>
                                </div>
                                <div class="roi-metric">
                                    <strong>🎯 ROI attendu :</strong><br>
                                    <span id="roi-months" class="roi-value">12 mois</span>
                                </div>
                                <div class="roi-metric">
                                    <strong>📊 Productivité :</strong><br>
                                    <span id="productivity-gain" class="roi-value">+20%</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="roi-cta">
                            <p class="roi-disclaimer">* Calculs basés sur les gains moyens constatés chez nos clients</p>
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                🎯 Valider ces estimations (Diagnostic gratuit)
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section Success Stories -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">🏆 Success Stories : Ils ont Réussi leur Transformation</h2>
                        <p class="section-subtitle">Découvrez les résultats concrets obtenus par nos clients</p>
                    </div>
                    
                    <div class="grid grid-2" id="testimonials-grid"></div>
                    
                    <!-- Métriques globales -->
                    <div class="success-metrics">
                        <div class="metrics-header">
                            <h3>📊 Résultats Consolidés sur 2 Ans</h3>
                        </div>
                        <div class="metrics-grid">
                            <div class="metric-card success">
                                <div class="metric-icon">💰</div>
                                <div class="metric-value">€1.2M</div>
                                <div class="metric-label">Économies générées</div>
                                <div class="metric-detail">Pour nos 15 clients</div>
                            </div>
                            <div class="metric-card success">
                                <div class="metric-icon">⚡</div>
                                <div class="metric-value">35h</div>
                                <div class="metric-label">Gagnées par semaine</div>
                                <div class="metric-detail">En moyenne par client</div>
                            </div>
                            <div class="metric-card success">
                                <div class="metric-icon">🎯</div>
                                <div class="metric-value">18 mois</div>
                                <div class="metric-label">ROI moyen</div>
                                <div class="metric-detail">Objectif toujours respecté</div>
                            </div>
                            <div class="metric-card success">
                                <div class="metric-icon">🏆</div>
                                <div class="metric-value">98%</div>
                                <div class="metric-label">Satisfaction client</div>
                                <div class="metric-detail">Enquête indépendante</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Notre Méthode de Réussite -->
            <section class="section section-special-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">🎯 Notre Méthode : 100% de Réussite</h2>
                        <p class="section-subtitle">Processus éprouvé sur 15+ projets - Résultats garantis</p>
                    </div>
                    
                    <div class="method-overview">
                        <div class="method-intro">
                            <div class="method-stats">
                                <div class="method-stat">
                                    <span class="stat-number">6</span>
                                    <span class="stat-label">Étapes clés</span>
                                </div>
                                <div class="method-stat">
                                    <span class="stat-number">3-6</span>
                                    <span class="stat-label">Mois projet</span>
                                </div>
                                <div class="method-stat">
                                    <span class="stat-number">100%</span>
                                    <span class="stat-label">Réussite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="method-steps" id="method-steps"></div>
                    
                    <div class="method-guarantee">
                        <div class="guarantee-box">
                            <div class="guarantee-icon">🛡️</div>
                            <h3 class="guarantee-title">Garantie de Résultats</h3>
                            <p class="guarantee-text">
                                Si vous ne gagnez pas <strong>1h/jour/utilisateur en 3 mois</strong>, 
                                nous reprenons le projet sans frais supplémentaires.
                            </p>
                            <div class="guarantee-features">
                                ${OweoConfig.guarantees.map(guarantee => `
                                    <div class="guarantee-feature">
                                        <span class="feature-icon">${guarantee.icon}</span>
                                        <div class="feature-content">
                                            <strong>${guarantee.title}</strong>
                                            <span>${guarantee.description}</span>
                                        </div>
                                    </div>
                                `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>📐 CAO/DAO</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.cao.primary.map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.cao.secondary.map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>💻 Développement</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.development.frontend.slice(0, 3).map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.development.backend.slice(0, 3).map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>🤖 Intelligence Artificielle</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.ai.tools.map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.ai.techniques.map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderFAQ() {
        const container = document.getElementById('faq-container');
        if (!container) return;

        container.innerHTML = OweoConfig.faq.map((item, index) => `
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')" role="button" tabindex="0">
                    <h3>${item.question}</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
    },

    initROICalculator() {
        // Fonction de calcul du ROI
        window.calculateROI = () => {
            const employees = parseInt(document.getElementById('employees').value) || 0;
            const quotesPerWeek = parseInt(document.getElementById('quotes-per-week').value) || 0;
            const timePerQuote = parseFloat(document.getElementById('time-per-quote').value) || 0;
            const hourlyRate = parseInt(document.getElementById('hourly-rate').value) || 0;
            
            // Calculs basés sur les gains réels observés
            const timeGainPercentage = 0.5; // 50% de gain de temps sur le chiffrage
            const weeklyHours = quotesPerWeek * timePerQuote;
            const timeSavedWeekly = weeklyHours * timeGainPercentage;
            const annualSavings = timeSavedWeekly * 52 * hourlyRate;
            
            // Coût projet estimé
            const projectCost = Math.max(25000, Math.min(80000, employees * 8000));
            const roiMonths = Math.round(projectCost / (annualSavings / 12));
            
            // Calcul gains de productivité
            const productivityGain = Math.min(30, 15 + (employees * 0.5));
            
            // Mise à jour de l'affichage
            document.getElementById('time-saved').textContent = `${timeSavedWeekly.toFixed(1)}h/semaine`;
            document.getElementById('annual-savings').textContent = `${annualSavings.toLocaleString('fr-FR')}€/an`;
            document.getElementById('roi-months').textContent = `${roiMonths} mois`;
            document.getElementById('productivity-gain').textContent = `+${productivityGain.toFixed(0)}%`;
        };
        
        // Liaison des événements pour le calcul automatique
        const inputs = ['employees', 'quotes-per-week', 'time-per-quote', 'hourly-rate'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', calculateROI);
                input.addEventListener('change', calculateROI);
            }
        });
        
        // Calcul initial
        setTimeout(() => {
            if (typeof calculateROI === 'function') {
                calculateROI();
            }
        }, 500);
    },

    bindEvents() {
        // Gestion des FAQ
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                });
                
                // Toggle actuel
                if (!isActive) {
                    item.classList.add('active');
                    toggle.textContent = '−';
                }
            });
            
            // Support clavier
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });

        // Animation au scroll pour les statistiques
        this.setupScrollAnimations();

        // Tracking des interactions
        this.setupAnalytics();

        // Calendly buttons
        const calendlyButtons = document.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            button.addEventListener('click', this.openCalendly.bind(this));
        });

        // Smooth scroll pour les ancres
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
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
    },

    setupScrollAnimations() {
        // Intersection Observer pour les animations
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

        // Éléments à animer
        const animatedElements = document.querySelectorAll(
            '.hero-stats .stat, .metric-card, .method-step, .card'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    },

    setupAnalytics() {
        // Track des clics sur les solutions
        const solutionCards = document.querySelectorAll('.solution-card');
        solutionCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('solution_card_click', {
                        position: index + 1,
                        title: card.querySelector('h3')?.textContent
                    });
                }
            });
        });

        // Track des interactions ROI calculator
        const roiInputs = document.querySelectorAll('.roi-calculator input');
        roiInputs.forEach(input => {
            input.addEventListener('change', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('roi_calculator_interaction', {
                        field: input.id,
                        value: input.value
                    });
                }
            });
        });

        // Track des clics sur les domaines d'expertise
        const expertiseCards = document.querySelectorAll('.expertise-card');
        expertiseCards.forEach(card => {
            card.addEventListener('click', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('expertise_navigation', {
                        area: card.querySelector('h3')?.textContent,
                        location: 'home_page'
                    });
                }
            });
        });
    },

    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly
            });
            
            if (OweoUtils.analytics) {
                OweoUtils.analytics.track('calendly_open', {
                    location: 'home_page',
                    section: 'cta'
                });
            }
        } else {
            console.warn('Calendly not loaded');
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }
};

console.log('🏠 Home page loaded');
};

// Données pour la page d'accueil
if (!window.OweoData) {
    window.OweoData = {};
}

// Solutions pour la page d'accueil
if (!window.OweoData.solutions) {
    window.OweoData.solutions = [
        {
            icon: '📈',
            title: 'Pilotage de Performance en Temps Réel',
            description: 'Visibilité complète sur vos marges et performances',
            benefits: [
                'Visibilité complète sur vos marges par projet',
                'Alertes automatiques sur les dérives',
                'Tableaux de bord métier personnalisés',
                'Prise de décision éclairée et rapide'
            ],
            solution: 'Business Intelligence + ERP intégré',
            impact: '+3 points de marge brute en moyenne'
        },
        {
            icon: '⚡',
            title: 'Automatisation des Processus Métier',
            description: 'Élimination des tâches répétitives et gain de temps',
            benefits: [
                'Chiffrage automatisé en 30 minutes au lieu de 4h',
                'Génération automatique des ordres de fabrication',
                'Synchronisation CAO-ERP en temps réel',
                'Élimination des double-saisies'
            ],
            solution: 'ERP spécialisé + intégrations',
            impact: '2h/jour gagnées par personne'
        },
        {
            icon: '🎯',
            title: 'Qualité et Conformité Digitalisées',
            description: 'Certification EN1090 garantie sans stress',
            benefits: [
                'Traçabilité complète de chaque pièce',
                'Contrôles qualité digitaux avec photos',
                'Conformité EN1090 automatisée',
                'Certification garantie sans stress'
            ],
            solution: 'QMS digital + IA de contrôle',
            impact: '-60% de non-conformités'
        },
        {
            icon: '🚀',
            title: 'Innovation IA Appliquée',
            description: 'Intelligence artificielle au service de votre métier',
            benefits: [
                'Contrôle qualité automatique par vision',
                'Prédiction des délais et besoins',
                'Assistant IA pour le support technique',
                'Optimisation continue des processus'
            ],
            solution: 'IA métier + automatisation',
            impact: '+25% de satisfaction client'
        }
    ];
}

// Témoignages pour la page d'accueil
if (!window.OweoData.testimonials) {
    window.OweoData.testimonials = [
        {
            text: "Oweo a révolutionné notre gestion. Nous économisons 10h par semaine sur le chiffrage et nos marges ont progressé de 3 points.",
            author: "Michel Dubois",
            company: "Directeur Général",
            companyName: "ETI Charpente métallique - 80 salariés",
            result: "ROI atteint en 8 mois",
            solution: "ERP Sage X3 + BI",
            rating: 5
        },
        {
            text: "L'approche terrain d'Oweo fait la différence. Ils comprennent nos contraintes et proposent des solutions qui marchent vraiment.",
            author: "Sophie Martin",
            company: "Responsable Production", 
            companyName: "PME Serrurerie - 25 salariés",
            result: "+20% productivité atelier",
            solution: "2CM Manager + automatisation",
            rating: 5
        },
        {
            text: "Grâce à Oweo, nous avons digitalisé notre conformité EN1090. Nos audits se passent maintenant sans stress.",
            author: "Pierre Rousseau",
            company: "Responsable Qualité",
            companyName: "Charpente métallique - 45 salariés",
            result: "Certification EN1090 Exc.3",
            solution: "QMS digital + traçabilité",
            rating: 5
        },
        {
            text: "Les tableaux de bord développés par Oweo nous donnent enfin une visibilité complète sur notre activité.",
            author: "Marie Lefevre",
            company: "PDG",
            companyName: "Groupe métallurgie - 120 salariés", 
            result: "Pilotage temps réel multi-sites",
            solution: "BI avancé + KPI métier",
            rating: 5
        }
    ];
}

// Conseils pour toutes les pages (si pas encore définis)
if (!window.OweoData.tips) {
    window.OweoData.tips = {
        'outils-gestion': [
            {
                icon: '🎯',
                title: 'Choix ERP Optimal',
                content: 'Testez toujours l\'ERP avec vos vraies données. Oweo organise des POC pour valider la solution avant engagement.'
            },
            {
                icon: '💰',
                title: 'ROI Maximisé',
                content: 'Investissez 40% du budget ERP dans la formation. C\'est la garantie d\'adoption utilisateur et de succès projet.'
            },
            {
                icon: '🚀',
                title: 'Déploiement Gagnant',
                content: 'Démarrez avec 2-3 utilisateurs experts qui deviendront vos ambassadeurs internes pour diffuser les bonnes pratiques.'
            },
            {
                icon: '📊',
                title: 'Succès Mesurable',
                content: 'Objectif : gagner 1h/jour/utilisateur en 3 mois. Si atteint, votre projet est réussi et le ROI au rendez-vous.'
            }
        ],
        
        'consulting-strategique': [
            {
                icon: '🔍',
                title: 'Diagnostic Express',
                content: 'En 5 minutes, sortez votre rentabilité par client. Si impossible, Oweo peut vous accompagner vers l\'excellence.'
            },
            {
                icon: '🎯',
                title: 'Priorités Rentables',
                content: 'Concentrez-vous sur les processus qui génèrent du CA avant ceux qui font gagner du temps. ROI garanti.'
            },
            {
                icon: '📈',
                title: 'ROI Rapide',
                content: 'Tout investissement digital Oweo est rentabilisé en moins de 18 mois avec des gains mesurables.'
            },
            {
                icon: '⚡',
                title: 'Quick Win',
                content: 'Digitalisez d\'abord votre chiffrage : c\'est là que vous gagnerez le plus rapidement temps ET argent.'
            }
        ],
        
        'accompagnement-projet': [
            {
                icon: '🏆',
                title: 'Succès Garanti',
                content: '100% de nos projets respectent délais et budgets grâce à notre méthodologie éprouvée en 6 étapes.'
            },
            {
                icon: '🎓',
                title: 'Formation Excellence',
                content: 'Formation sur vos vrais cas d\'usage métier. Nos clients deviennent autonomes et experts sur leur solution.'
            },
            {
                icon: '📞',
                title: 'Support Illimité',
                content: 'Support téléphonique illimité 6 mois post go-live. Vous n\'êtes jamais seuls avec Oweo.'
            },
            {
                icon: '📊',
                title: 'Performance Suivie',
                content: 'Mesure des gains tous les mois avec KPI précis. Vous voyez concrètement le retour sur investissement.'
            }
        ],
        
        'en1090': [
            {
                icon: '✅',
                title: 'Conformité Simplifiée',
                content: 'Solution digitale complète EN1090 : traçabilité QR codes, photos géolocalisées, signatures numériques automatiques.'
            },
            {
                icon: '📱',
                title: 'Mobilité Terrain',
                content: 'Applications mobiles pour contrôles qualité en atelier. Synchronisation temps réel avec votre système qualité.'
            },
            {
                icon: '🤖',
                title: 'IA Qualité',
                content: 'Détection automatique des défauts par vision artificielle. Contrôle qualité augmenté et objectif.'
            },
            {
                icon: '📈',
                title: 'Performance Qualité',
                content: 'Tableaux de bord qualité temps réel. Pilotage proactif et amélioration continue de vos processus.'
            }
        ],
        
        'ia-projets': [
            {
                icon: '👁️',
                title: 'Vision Artificielle',
                content: 'IA de contrôle visuel déployée : détection automatique défauts soudure avec 95% de précision.'
            },
            {
                icon: '🧠',
                title: 'Prédictif Intelligent',
                content: 'Algorithmes prédictifs pour anticiper pannes, délais et besoins. Planification optimisée automatiquement.'
            },
            {
                icon: '💬',
                title: 'Assistant IA',
                content: 'Chatbot technique 24/7 formé sur votre documentation. Support client automatique et efficace.'
            },
            {
                icon: '📊',
                title: 'Analytics Avancés',
                content: 'IA d\'analyse de données pour identifier tendances et opportunités d\'optimisation cachées.'
            }
        ],
        
        'optimisation': [
            {
                icon: '⚡',
                title: 'Lean Digital',
                content: 'Méthodes Lean digitalisées : élimination gaspillages identifiés par IA, amélioration continue mesurée.'
            },
            {
                icon: '📊',
                title: 'KPI Intelligents',
                content: 'Indicateurs métier automatiques : TRS, délais, qualité, coûts. Pilotage simplifié et efficace.'
            },
            {
                icon: '🎯',
                title: 'Optimisation Continue',
                content: 'Cycles d\'amélioration PDCA digitaux. Mesure d\'impact automatique et validation des gains.'
            },
            {
                icon: '🚀',
                title: 'Performance Maximale',
                content: '+20% de productivité garantis avec notre approche terrain et outils de mesure précis.'
            }
        ]
    };
}

// Composant ArticleRenderer si pas encore défini
if (!window.ArticleRenderer) {
    window.ArticleRenderer = {
        renderArticleGrid: function(articles, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !articles) return;

            container.innerHTML = articles.map(article => `
                <div class="card" onclick="router.navigate('article', '${article.id}')" style="cursor: pointer;">
                    <div class="article-meta">
                        <span class="article-category">${article.category}</span>
                        <span class="article-time">📖 ${article.time}</span>
                    </div>
                    <h3>${article.title}</h3>
                    <p>${article.excerpt}</p>
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        },

        renderTipsGrid: function(tips, containerId) {
            const container = document.getElementById(containerId);
            if (!container || !tips) return;

            container.innerHTML = tips.map(tip => `
                <div class="tip-card">
                    <h4>${tip.icon} ${tip.title}</h4>
                    <p>${tip.content}</p>
                </div>
            `).join('');
        }
    };
}

console.log('🏠 Home page loaded');
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>📐 CAO/DAO</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.cao.primary.map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.cao.secondary.map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>💻 Développement</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.development.frontend.slice(0, 3).map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.development.backend.slice(0, 3).map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>🤖 Intelligence Artificielle</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.ai.tools.map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.ai.techniques.map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderFAQ() {
        const container = document.getElementById('faq-container');
        if (!container) return;

        container.innerHTML = OweoConfig.faq.map((item, index) => `
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')" role="button" tabindex="0">
                    <h3>${item.question}</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
    },

    initROICalculator() {
        // Fonction de calcul du ROI
        window.calculateROI = () => {
            const employees = parseInt(document.getElementById('employees').value) || 0;
            const quotesPerWeek = parseInt(document.getElementById('quotes-per-week').value) || 0;
            const timePerQuote = parseFloat(document.getElementById('time-per-quote').value) || 0;
            const hourlyRate = parseInt(document.getElementById('hourly-rate').value) || 0;
            
            // Calculs basés sur les gains réels observés
            const timeGainPercentage = 0.5; // 50% de gain de temps sur le chiffrage
            const weeklyHours = quotesPerWeek * timePerQuote;
            const timeSavedWeekly = weeklyHours * timeGainPercentage;
            const annualSavings = timeSavedWeekly * 52 * hourlyRate;
            
            // Coût projet estimé
            const projectCost = Math.max(25000, Math.min(80000, employees * 8000));
            const roiMonths = Math.round(projectCost / (annualSavings / 12));
            
            // Calcul gains de productivité
            const productivityGain = Math.min(30, 15 + (employees * 0.5));
            
            // Mise à jour de l'affichage
            document.getElementById('time-saved').textContent = `${timeSavedWeekly.toFixed(1)}h/semaine`;
            document.getElementById('annual-savings').textContent = `${annualSavings.toLocaleString('fr-FR')}€/an`;
            document.getElementById('roi-months').textContent = `${roiMonths} mois`;
            document.getElementById('productivity-gain').textContent = `+${productivityGain.toFixed(0)}%`;
        };
        
        // Liaison des événements pour le calcul automatique
        const inputs = ['employees', 'quotes-per-week', 'time-per-quote', 'hourly-rate'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', calculateROI);
                input.addEventListener('change', calculateROI);
            }
        });
        
        // Calcul initial
        setTimeout(() => {
            if (typeof calculateROI === 'function') {
                calculateROI();
            }
        }, 500);
    },

    bindEvents() {
        // Gestion des FAQ
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                });
                
                // Toggle actuel
                if (!isActive) {
                    item.classList.add('active');
                    toggle.textContent = '−';
                }
            });
            
            // Support clavier
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });

        // Animation au scroll pour les statistiques
        this.setupScrollAnimations();

        // Tracking des interactions
        this.setupAnalytics();

        // Calendly buttons
        const calendlyButtons = document.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            button.addEventListener('click', this.openCalendly.bind(this));
        });

        // Smooth scroll pour les ancres
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
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
    },

    setupScrollAnimations() {
        // Intersection Observer pour les animations
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

        // Éléments à animer
        const animatedElements = document.querySelectorAll(
            '.hero-stats .stat, .metric-card, .method-step, .card'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    },

    setupAnalytics() {
        // Track des clics sur les solutions
        const solutionCards = document.querySelectorAll('.solution-card');
        solutionCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('solution_card_click', {
                        position: index + 1,
                        title: card.querySelector('h3')?.textContent
                    });
                }
            });
        });

        // Track des interactions ROI calculator
        const roiInputs = document.querySelectorAll('.roi-calculator input');
        roiInputs.forEach(input => {
            input.addEventListener('change', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('roi_calculator_interaction', {
                        field: input.id,
                        value: input.value
                    });
                }
            });
        });

        // Track des clics sur les domaines d'expertise
        const expertiseCards = document.querySelectorAll('.expertise-card');
        expertiseCards.forEach(card => {
            card.addEventListener('click', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('expertise_navigation', {
                        area: card.querySelector('h3')?.textContent,
                        location: 'home_page'
                    });
                }
            });
        });
    },

    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly
            });
            
            if (OweoUtils.analytics) {
                OweoUtils.analytics.track('calendly_open', {
                    location: 'home_page',
                    section: 'cta'
                });
            }
        } else {
            console.warn('Calendly not loaded');
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }
};

console.log('🏠 Home page loaded');
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Nos Domaines d'Excellence -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">🎯 Nos Domaines d'Excellence</h2>
                        <p class="section-subtitle">Expertise approfondie dans tous les aspects de votre métier</p>
                    </div>
                    
                    <div class="grid grid-3" id="expertise-grid"></div>
                </div>
            </section>

            <!-- Technologies et Partenaires -->
            <section class="section" style="background: rgba(0, 212, 255, 0.02);">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">🛠️ Technologies Maîtrisées</h2>
                        <p class="section-subtitle">Expertise sur les meilleures solutions du marché</p>
                    </div>
                    
                    <div class="tech-mastery" id="tech-mastery"></div>
                </div>
            </section>

            <!-- FAQ Section -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">❓ Questions Fréquentes</h2>
                        <p class="section-subtitle">Réponses aux questions les plus posées par nos clients</p>
                    </div>
                    
                    <div class="faq-container" id="faq-container"></div>
                </div>
            </section>

            <!-- CTA Final -->
            <section class="cta-section">
                <div class="container">
                    <div class="cta-content">
                        <h2 class="cta-title">🎯 Prêt à Booster votre Performance ?</h2>
                        <p class="cta-subtitle">
                            Diagnostic gratuit personnalisé + plan d'action concret<br>
                            <strong>30 minutes pour identifier vos gains prioritaires</strong>
                        </p>
                        
                        <div class="trust-badges">
                            <div class="trust-badge">
                                <span>✅</span>
                                <span>15+ solutions déployées</span>
                            </div>
                            <div class="trust-badge">
                                <span>🎯</span>
                                <span>100% de projets réussis</span>
                            </div>
                            <div class="trust-badge">
                                <span>📞</span>
                                <span>Support 6 mois inclus</span>
                            </div>
                            <div class="trust-badge">
                                <span>💰</span>
                                <span>ROI garanti en 18 mois</span>
                            </div>
                        </div>
                        
                        <div class="hero-actions">
                            <button class="btn btn-primary btn-large" 
                                    data-calendly="true"
                                    style="background: white; color: #00d4ff; font-weight: 700;">
                                📅 Réserver mon Diagnostic Gratuit
                            </button>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary btn-large"
                               style="border-color: white; color: white;">
                                📧 Contact Direct
                            </a>
                        </div>
                        
                        <div class="cta-urgency">
                            <p>⚡ <strong>Offre limitée :</strong> Diagnostic gratuit pour les 10 premières entreprises ce mois-ci</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderProblems();
        this.renderSolutions();
        this.renderTestimonials();
        this.renderMethodSteps();
        this.renderExpertiseCards();
        this.renderTechMastery();
        this.renderFAQ();
        this.initROICalculator();
        this.bindEvents();
        
        console.log('🏠 Home page initialized');
    },

    renderProblems() {
        const problems = [
            {
                icon: '⏰',
                title: 'Chiffrage trop Long et Imprécis',
                description: 'Vous passez 4-6h par devis avec des erreurs récurrentes',
                painPoints: [
                    'Recherche manuelle des prix matières',
                    'Calculs répétitifs et sources d\'erreur',
                    'Pas de capitalisation des données',
                    'Retards dans les réponses clients'
                ],
                impact: 'Perte de 20h/semaine + erreurs coûteuses'
            },
            {
                icon: '📊',
                title: 'Manque de Visibilité sur les Marges',
                description: 'Impossible de connaître la rentabilité réelle de vos projets',
                painPoints: [
                    'Coûts cachés non identifiés',
                    'Suivi budgétaire approximatif',
                    'Pas d\'alertes sur les dérives',
                    'Difficile d\'analyser les causes'
                ],
                impact: 'Perte de 2-5 points de marge'
            },
            {
                icon: '🔄',
                title: 'Processus Manuels et Répétitifs',
                description: 'Saisies multiples et synchronisation manuelle des données',
                painPoints: [
                    'Double/triple saisie des informations',
                    'Erreurs de transcription fréquentes',
                    'Temps perdu en tâches administratives',
                    'Pas de synchronisation temps réel'
                ],
                impact: '2h/jour/personne perdues'
            },
            {
                icon: '⚠️',
                title: 'Gestion Qualité Complexe',
                description: 'Conformité EN1090 et traçabilité difficiles à maintenir',
                painPoints: [
                    'Documentation papier fastidieuse',
                    'Risque de non-conformité',
                    'Préparation audit stressante',
                    'Traçabilité incomplète'
                ],
                impact: 'Risque certification + surcoûts'
            }
        ];

        const container = document.getElementById('problems-grid');
        if (!container) return;

        container.innerHTML = problems.map(problem => `
            <div class="card problem-card">
                <div class="card-icon">${problem.icon}</div>
                <h3>${problem.title}</h3>
                <p>${problem.description}</p>
                <ul class="problem-list">
                    ${problem.painPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
                <div class="problem-impact">
                    <strong>💥 Impact :</strong> ${problem.impact}
                </div>
            </div>
        `).join('');
    },

    renderSolutions() {
        const solutions = [
            {
                icon: '📈',
                title: 'Pilotage de Performance en Temps Réel',
                description: 'Visibilité complète sur vos marges et performances',
                benefits: [
                    'Visibilité complète sur vos marges par projet',
                    'Alertes automatiques sur les dérives',
                    'Tableaux de bord métier personnalisés',
                    'Prise de décision éclairée et rapide'
                ],
                solution: 'Business Intelligence + ERP intégré',
                impact: '+3 points de marge brute en moyenne'
            },
            {
                icon: '⚡',
                title: 'Automatisation des Processus Métier',
                description: 'Élimination des tâches répétitives et gain de temps',
                benefits: [
                    'Chiffrage automatisé en 30 minutes au lieu de 4h',
                    'Génération automatique des ordres de fabrication',
                    'Synchronisation CAO-ERP en temps réel',
                    'Élimination des double-saisies'
                ],
                solution: 'ERP spécialisé + intégrations',
                impact: '2h/jour gagnées par personne'
            },
            {
                icon: '🎯',
                title: 'Qualité et Conformité Digitalisées',
                description: 'Certification EN1090 garantie sans stress',
                benefits: [
                    'Traçabilité complète de chaque pièce',
                    'Contrôles qualité digitaux avec photos',
                    'Conformité EN1090 automatisée',
                    'Certification garantie sans stress'
                ],
                solution: 'QMS digital + IA de contrôle',
                impact: '-60% de non-conformités'
            },
            {
                icon: '🚀',
                title: 'Innovation IA Appliquée',
                description: 'Intelligence artificielle au service de votre métier',
                benefits: [
                    'Contrôle qualité automatique par vision',
                    'Prédiction des délais et besoins',
                    'Assistant IA pour le support technique',
                    'Optimisation continue des processus'
                ],
                solution: 'IA métier + automatisation',
                impact: '+25% de satisfaction client'
            }
        ];

        const container = document.getElementById('solutions-grid');
        if (!container) return;

        container.innerHTML = solutions.map(solution => `
            <div class="card solution-card">
                <div class="card-icon">${solution.icon}</div>
                <h3>${solution.title}</h3>
                <p>${solution.description}</p>
                <ul class="benefits-list">
                    ${solution.benefits.map(benefit => `<li>✅ ${benefit}</li>`).join('')}
                </ul>
                <div class="solution-box">
                    <strong>💡 Notre approche :</strong> ${solution.solution}<br>
                    <strong>📈 Impact mesuré :</strong> <span class="impact-value">${solution.impact}</span>
                </div>
            </div>
        `).join('');
    },

    renderTestimonials() {
        const testimonials = [
            {
                text: "Oweo a révolutionné notre gestion. Nous économisons 10h par semaine sur le chiffrage et nos marges ont progressé de 3 points.",
                author: "Michel Dubois",
                company: "Directeur Général",
                companyName: "ETI Charpente métallique - 80 salariés",
                result: "ROI atteint en 8 mois",
                solution: "ERP Sage X3 + BI",
                rating: 5
            },
            {
                text: "L'approche terrain d'Oweo fait la différence. Ils comprennent nos contraintes et proposent des solutions qui marchent vraiment.",
                author: "Sophie Martin",
                company: "Responsable Production", 
                companyName: "PME Serrurerie - 25 salariés",
                result: "+20% productivité atelier",
                solution: "2CM Manager + automatisation",
                rating: 5
            },
            {
                text: "Grâce à Oweo, nous avons digitalisé notre conformité EN1090. Nos audits se passent maintenant sans stress.",
                author: "Pierre Rousseau",
                company: "Responsable Qualité",
                companyName: "Charpente métallique - 45 salariés",
                result: "Certification EN1090 Exc.3",
                solution: "QMS digital + traçabilité",
                rating: 5
            },
            {
                text: "Les tableaux de bord développés par Oweo nous donnent enfin une visibilité complète sur notre activité.",
                author: "Marie Lefevre",
                company: "PDG",
                companyName: "Groupe métallurgie - 120 salariés", 
                result: "Pilotage temps réel multi-sites",
                solution: "BI avancé + KPI métier",
                rating: 5
            }
        ];

        const container = document.getElementById('testimonials-grid');
        if (!container) return;

        container.innerHTML = testimonials.map(testimonial => `
            <div class="card testimonial-card">
                <div class="testimonial-rating">
                    ${'⭐'.repeat(testimonial.rating)}
                </div>
                <blockquote class="testimonial-text">"${testimonial.text}"</blockquote>
                <div class="testimonial-author">
                    <div class="author-info">
                        <strong>${testimonial.author}</strong>
                        <span class="author-title">${testimonial.company}</span>
                        <span class="author-company">${testimonial.companyName}</span>
                    </div>
                </div>
                <div class="testimonial-footer">
                    <div class="testimonial-solution">
                        <strong>Solution :</strong> ${testimonial.solution}
                    </div>
                    <div class="testimonial-result">
                        <strong>Résultat :</strong> ${testimonial.result}
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderMethodSteps() {
        const steps = OweoConfig.methodology.map(step => ({
            number: step.step.toString().padStart(2, '0'),
            title: step.title,
            description: step.description,
            duration: step.duration,
            icon: step.icon,
            activities: step.activities
        }));

        const container = document.getElementById('method-steps');
        if (!container) return;

        container.innerHTML = steps.map(step => `
            <div class="method-step">
                <div class="step-number">${step.number}</div>
                <div class="step-icon">${step.icon}</div>
                <div class="step-content">
                    <h3 class="step-title">${step.title}</h3>
                    <p class="step-description">${step.description}</p>
                    <div class="step-duration">⏱️ ${step.duration}</div>
                    <ul class="step-activities">
                        ${step.activities.map(activity => `<li>${activity}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    },

    renderExpertiseCards() {
        const expertiseAreas = [
            {
                icon: '🛠️',
                title: 'ERP & Gestion',
                description: 'Solutions ERP spécialisées pour optimiser votre gestion',
                page: 'outils-gestion',
                results: '15+ déploiements réussis',
                features: ['Sage X3', 'GesCom', '2CM Manager', 'Intégrations CAO'],
                metrics: { projects: '15+', satisfaction: '98%', roi: '18 mois' }
            },
            {
                icon: '📊',
                title: 'Business Intelligence',
                description: 'Tableaux de bord et pilotage de performance temps réel',
                page: 'consulting-strategique',
                results: 'Visibilité complète',
                features: ['KPI métier', 'Alertes automatiques', 'Reporting', 'Analytics'],
                metrics: { visibility: '100%', alerts: '24/7', reports: 'Auto' }
            },
            {
                icon: '⚡',
                title: 'Automatisation',
                description: 'Automatisation intelligente de vos processus répétitifs',
                page: 'accompagnement-projet',
                results: '2h/jour gagnées',
                features: ['Workflows', 'APIs', 'Intégrations', 'OCR'],
                metrics: { timeSaved: '2h/jour', errors: '-60%', efficiency: '+30%' }
            },
            {
                icon: '🤖',
                title: 'Intelligence Artificielle',
                description: 'IA appliquée pour contrôle qualité et prédictif',
                page: 'ia-projets',
                results: '90% de précision',
                features: ['Vision IA', 'Chatbots', 'Prédictif', 'Analytics'],
                metrics: { precision: '90%', speed: 'x5', detection: '95%' }
            },
            {
                icon: '📋',
                title: 'Conformité EN1090',
                description: 'Digitalisation complète de votre conformité qualité',
                page: 'en1090',
                results: 'Certification garantie',
                features: ['Traçabilité', 'QR Codes', 'Mobile', 'Reporting'],
                metrics: { certification: '100%', timeReduction: '-70%', compliance: '100%' }
            },
            {
                icon: '🎯',
                title: 'Optimisation',
                description: 'Lean digital et amélioration continue des performances',
                page: 'optimisation',
                results: '+20% productivité',
                features: ['Lean', 'KPI', 'TRS', 'Amélioration continue'],
                metrics: { productivity: '+20%', waste: '-40%', quality: '+15%' }
            }
        ];

        const container = document.getElementById('expertise-grid');
        if (!container) return;

        container.innerHTML = expertiseAreas.map(area => `
            <div class="card expertise-card" onclick="router.navigate('${area.page}')" style="cursor: pointer;">
                <div class="card-icon">${area.icon}</div>
                <h3>${area.title}</h3>
                <p>${area.description}</p>
                <ul class="feature-list">
                    ${area.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="expertise-metrics">
                    ${Object.entries(area.metrics).map(([key, value]) => `
                        <span class="metric-badge">${value}</span>
                    `).join('')}
                </div>
                <div class="card-result">
                    <strong>Résultat type :</strong> ${area.results}
                </div>
                <div class="card-action">
                    <span class="action-text">Découvrir →</span>
                </div>
            </div>
        `).join('');
    },

    renderTechMastery() {
        const container = document.getElementById('tech-mastery');
        if (!container) return;

        container.innerHTML = `
            <div class="tech-categories">
                <div class="tech-category">
                    <h4>🏭 ERP Métier</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.erp.primary.map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.erp.secondary.map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>📐 CAO/DAO</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.cao.primary.map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.cao.secondary.map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>💻 Développement</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.development.frontend.slice(0, 3).map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.development.backend.slice(0, 3).map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>🤖 Intelligence Artificielle</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.ai.tools.map(tech => `
                            <span class="tech-item primary">${tech}</span>
                        `).join('')}
                        ${OweoConfig.technologies.ai.techniques.map(tech => `
                            <span class="tech-item secondary">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderFAQ() {
        const container = document.getElementById('faq-container');
        if (!container) return;

        container.innerHTML = OweoConfig.faq.map((item, index) => `
            <div class="faq-item">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('active')" role="button" tabindex="0">
                    <h3>${item.question}</h3>
                    <span class="faq-toggle">+</span>
                </div>
                <div class="faq-answer">
                    <p>${item.answer}</p>
                </div>
            </div>
        `).join('');
    },

    initROICalculator() {
        // Fonction de calcul du ROI
        window.calculateROI = () => {
            const employees = parseInt(document.getElementById('employees').value) || 0;
            const quotesPerWeek = parseInt(document.getElementById('quotes-per-week').value) || 0;
            const timePerQuote = parseFloat(document.getElementById('time-per-quote').value) || 0;
            const hourlyRate = parseInt(document.getElementById('hourly-rate').value) || 0;
            
            // Calculs basés sur les gains réels observés
            const timeGainPercentage = 0.5; // 50% de gain de temps sur le chiffrage
            const weeklyHours = quotesPerWeek * timePerQuote;
            const timeSavedWeekly = weeklyHours * timeGainPercentage;
            const annualSavings = timeSavedWeekly * 52 * hourlyRate;
            
            // Coût projet estimé
            const projectCost = Math.max(25000, Math.min(80000, employees * 8000));
            const roiMonths = Math.round(projectCost / (annualSavings / 12));
            
            // Calcul gains de productivité
            const productivityGain = Math.min(30, 15 + (employees * 0.5));
            
            // Mise à jour de l'affichage
            document.getElementById('time-saved').textContent = `${timeSavedWeekly.toFixed(1)}h/semaine`;
            document.getElementById('annual-savings').textContent = `${annualSavings.toLocaleString('fr-FR')}€/an`;
            document.getElementById('roi-months').textContent = `${roiMonths} mois`;
            document.getElementById('productivity-gain').textContent = `+${productivityGain.toFixed(0)}%`;
        };
        
        // Liaison des événements pour le calcul automatique
        const inputs = ['employees', 'quotes-per-week', 'time-per-quote', 'hourly-rate'];
        inputs.forEach(inputId => {
            const input = document.getElementById(inputId);
            if (input) {
                input.addEventListener('input', calculateROI);
                input.addEventListener('change', calculateROI);
            }
        });
        
        // Calcul initial
        setTimeout(() => {
            if (typeof calculateROI === 'function') {
                calculateROI();
            }
        }, 500);
    },

    bindEvents() {
        // Gestion des FAQ
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const toggle = item.querySelector('.faq-toggle');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-toggle').textContent = '+';
                });
                
                // Toggle actuel
                if (!isActive) {
                    item.classList.add('active');
                    toggle.textContent = '−';
                }
            });
            
            // Support clavier
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });

        // Animation au scroll pour les statistiques
        this.setupScrollAnimations();

        // Tracking des interactions
        this.setupAnalytics();

        // Calendly buttons
        const calendlyButtons = document.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            button.addEventListener('click', this.openCalendly.bind(this));
        });

        // Smooth scroll pour les ancres
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
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
    },

    setupScrollAnimations() {
        // Intersection Observer pour les animations
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

        // Éléments à animer
        const animatedElements = document.querySelectorAll(
            '.hero-stats .stat, .metric-card, .method-step, .card'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    },

    setupAnalytics() {
        // Track des clics sur les solutions
        const solutionCards = document.querySelectorAll('.solution-card');
        solutionCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('solution_card_click', {
                        position: index + 1,
                        title: card.querySelector('h3')?.textContent
                    });
                }
            });
        });

        // Track des interactions ROI calculator
        const roiInputs = document.querySelectorAll('.roi-calculator input');
        roiInputs.forEach(input => {
            input.addEventListener('change', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('roi_calculator_interaction', {
                        field: input.id,
                        value: input.value
                    });
                }
            });
        });

        // Track des clics sur les domaines d'expertise
        const expertiseCards = document.querySelectorAll('.expertise-card');
        expertiseCards.forEach(card => {
            card.addEventListener('click', () => {
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('expertise_navigation', {
                        area: card.querySelector('h3')?.textContent,
                        location: 'home_page'
                    });
                }
            });
        });
    },

    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly
            });
            
            if (OweoUtils.analytics) {
                OweoUtils.analytics.track('calendly_open', {
                    location: 'home_page',
                    section: 'cta'
                });
            }
        } else {
            console.warn('Calendly not loaded');
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }