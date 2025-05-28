// js/pages.js - VERSION SOLUTIONS-FIRST

window.pages = {};

// Page d'accueil RECENTRÉE SUR LES SOLUTIONS
window.pages.home = {
    render() {
        return `
            <!-- Hero Section Orienté Solutions -->
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
                            <a href="#" class="btn btn-primary" onclick="Calendly.initPopupWidget({url: '${OweoConfig.contact.calendly}'});">
                                🎯 Diagnostic Gratuit (30min)
                            </a>
                            <a href="#solutions" class="btn btn-secondary">
                                Découvrir Nos Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section Solutions Concrètes -->
            <section id="solutions" class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Nos Solutions pour Votre Réussite</h2>
                        <p class="section-subtitle">Solutions éprouvées et résultats mesurables pour entreprises de métallurgie</p>
                    </div>
                    
                    <div class="grid grid-2" id="solutions-grid"></div>
                </div>
            </section>

            <!-- Calculateur ROI -->
            ${this.renderROICalculator()}

            <!-- Section Success Stories -->
            <section class="section section-special-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Success Stories : Ils ont Réussi leur Transformation</h2>
                        <p class="section-subtitle">Découvrez les résultats concrets obtenus par nos clients</p>
                    </div>
                    
                    <div class="grid grid-2" id="testimonials-grid"></div>
                </div>
            </section>

            <!-- Notre Méthode de Réussite -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Notre Méthode : 100% de Réussite</h2>
                        <p class="section-subtitle">Processus éprouvé sur 15+ projets - Résultats garantis</p>
                    </div>
                    
                    <div class="method-steps">
                        ${this.renderMethodSteps()}
                    </div>
                    
                    <div style="text-align: center; margin-top: 3rem;">
                        <div class="guarantee-box">
                            <div class="guarantee-icon">🛡️</div>
                            <h3 class="guarantee-title">Garantie de Résultats</h3>
                            <p class="guarantee-text">
                                Si vous ne gagnez pas <strong>1h/jour/utilisateur en 3 mois</strong>, 
                                nous reprenons le projet sans frais supplémentaires.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Nos Domaines d'Excellence -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Nos Domaines d'Excellence</h2>
                        <p class="section-subtitle">Expertise approfondie dans tous les aspects de votre métier</p>
                    </div>
                    
                    <div class="grid grid-3">
                        ${this.renderExpertiseCards()}
                    </div>
                </div>
            </section>

            <!-- Technologies et Partenaires -->
            <section class="section" style="background: rgba(0, 212, 255, 0.02);">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Technologies Maîtrisées</h2>
                        <p class="section-subtitle">Expertise sur les meilleures solutions du marché</p>
                    </div>
                    
                    <div class="tech-grid">
                        ${this.renderTechStacks()}
                    </div>
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
                        </div>
                        
                        <div class="hero-actions">
                            <a href="#" class="btn btn-primary" 
                               onclick="Calendly.initPopupWidget({url: '${OweoConfig.contact.calendly}'});"
                               style="background: white; color: #00d4ff; font-weight: 700;">
                                📅 Réserver mon Diagnostic Gratuit
                            </a>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary"
                               style="border-color: white; color: white;">
                                📧 Contact Direct
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderROICalculator() {
        return `
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
                                <input type="number" id="employees" placeholder="Ex: 5" value="5" onchange="calculateROI()">
                            </div>
                            
                            <div class="roi-input-group">
                                <label for="quotes-per-week">Devis par semaine</label>
                                <input type="number" id="quotes-per-week" placeholder="Ex: 10" value="10" onchange="calculateROI()">
                            </div>
                            
                            <div class="roi-input-group">
                                <label for="time-per-quote">Temps par devis (h)</label>
                                <input type="number" id="time-per-quote" placeholder="Ex: 4" value="4" step="0.5" onchange="calculateROI()">
                            </div>
                            
                            <div class="roi-input-group">
                                <label for="hourly-rate">Coût horaire (€)</label>
                                <input type="number" id="hourly-rate" placeholder="Ex: 45" value="45" onchange="calculateROI()">
                            </div>
                        </div>
                        
                        <div id="roi-result" class="roi-result">
                            <div class="roi-gains">
                                <h4>📈 Vos Gains Estimés avec Oweo</h4>
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
                                    <div>
                                        <strong>⚡ Temps économisé :</strong><br>
                                        <span id="time-saved" style="color: #4caf50; font-size: 1.2rem;">10h/semaine</span>
                                    </div>
                                    <div>
                                        <strong>💰 Économies annuelles :</strong><br>
                                        <span id="annual-savings" style="color: #4caf50; font-size: 1.2rem;">23 400€/an</span>
                                    </div>
                                    <div>
                                        <strong>🎯 ROI attendu :</strong><br>
                                        <span id="roi-months" style="color: #4caf50; font-size: 1.2rem;">12 mois</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin-top: 2rem;">
                            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
                                * Calculs basés sur les gains moyens constatés chez nos clients
                            </p>
                            <a href="#" class="btn btn-primary" 
                               onclick="Calendly.initPopupWidget({url: '${OweoConfig.contact.calendly}'});">
                                🎯 Valider ces estimations (Diagnostic gratuit)
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderMethodSteps() {
        const steps = [
            {
                number: '01',
                title: 'Diagnostic Expert',
                description: 'Audit terrain complet de vos processus',
                duration: '2-3 jours',
                icon: '🔍'
            },
            {
                number: '02', 
                title: 'Solution Sur-Mesure',
                description: 'Sélection et personnalisation de la solution optimale',
                duration: '2-3 semaines',
                icon: '🎯'
            },
            {
                number: '03',
                title: 'Déploiement Agile',
                description: 'Mise en œuvre par phases avec validation continue',
                duration: '2-4 mois',
                icon: '🚀'
            },
            {
                number: '04',
                title: 'Formation Excellence',
                description: 'Formation complète sur vos cas d\'usage métier',
                duration: '1-2 semaines',
                icon: '🎓'
            },
            {
                number: '05',
                title: 'Go-Live Sécurisé',
                description: 'Basculement progressif avec support intensif',
                duration: '1 semaine',
                icon: '✅'
            },
            {
                number: '06',
                title: 'Succès Mesuré',
                description: 'Validation des gains et optimisation continue',
                duration: '6 mois',
                icon: '📈'
            }
        ];

        return steps.map(step => `
            <div class="method-step">
                <div class="step-number">${step.number}</div>
                <div class="step-icon" style="font-size: 2rem; margin-bottom: 1rem;">${step.icon}</div>
                <h3 class="step-title">${step.title}</h3>
                <p class="step-description">${step.description}</p>
                <div class="step-meta">
                    <div style="color: var(--primary-color); font-size: 0.9rem; font-weight: 600;">
                        ⏱️ ${step.duration}
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderExpertiseCards() {
        const cards = [
            {
                icon: '🛠️',
                title: 'ERP & Gestion',
                description: 'Solutions ERP spécialisées pour optimiser votre gestion',
                page: 'outils-gestion',
                results: '15+ déploiements réussis',
                features: ['Sage X3', 'GesCom', '2CM Manager', 'Intégrations CAO']
            },
            {
                icon: '📊',
                title: 'Business Intelligence',
                description: 'Tableaux de bord et pilotage de performance temps réel',
                page: 'consulting-strategique', 
                results: 'Visibilité complète',
                features: ['KPI métier', 'Alertes automatiques', 'Reporting', 'Analytics']
            },
            {
                icon: '⚡',
                title: 'Automatisation',
                description: 'Automatisation intelligente de vos processus répétitifs',
                page: 'accompagnement-projet',
                results: '2h/jour gagnées',
                features: ['Workflows', 'APIs', 'Intégrations', 'OCR']
            },
            {
                icon: '🤖',
                title: 'Intelligence Artificielle',
                description: 'IA appliquée pour contrôle qualité et prédictif',
                page: 'ia-projets',
                results: '90% de précision',
                features: ['Vision IA', 'Chatbots', 'Prédictif', 'Analytics']
            },
            {
                icon: '📋',
                title: 'Conformité EN1090',
                description: 'Digitalisation complète de votre conformité qualité',
                page: 'en1090',
                results: 'Certification garantie',
                features: ['Traçabilité', 'QR Codes', 'Mobile', 'Reporting']
            },
            {
                icon: '🎯',
                title: 'Optimisation',
                description: 'Lean digital et amélioration continue des performances',
                page: 'optimisation',
                results: '+20% productivité',
                features: ['Lean', 'KPI', 'TRS', 'Amélioration continue']
            }
        ];

        return cards.map(card => `
            <div class="card expertise-card" onclick="router.navigate('${card.page}')" style="cursor: pointer;">
                <div class="card-icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <ul class="feature-list" style="margin: 1rem 0;">
                    ${card.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="card-result">
                    <strong>Résultat type :</strong> ${card.results}
                </div>
            </div>
        `).join('');
    },

    renderTechStacks() {
        return `
            <div class="tech-categories">
                <div class="tech-category">
                    <h4>🏭 ERP Métier</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.erp.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>📐 CAO/DAO</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.cao.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>💻 Développement</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.development.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="tech-category">
                    <h4>🤖 Intelligence Artificielle</h4>
                    <div class="tech-items">
                        ${OweoConfig.technologies.ai.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        // Render solutions (remplace les problématiques)
        this.renderSolutions();
        
        // Render témoignages améliorés
        this.renderTestimonials();
        
        // Initialize ROI calculator
        this.initROICalculator();
        
        console.log('Home page initialized - Solutions-first approach');
    },

    renderSolutions() {
        const container = document.getElementById('solutions-grid');
        if (!container || !window.SolutionsData) return;

        container.innerHTML = window.SolutionsData.map(solution => `
            <div class="card solution-card">
                <div class="card-icon">${solution.icon}</div>
                <h3>${solution.title}</h3>
                <ul class="benefits-list">
                    ${solution.benefits.map(benefit => `<li>✅ ${benefit}</li>`).join('')}
                </ul>
                <div class="solution-box">
                    <strong>💡 Notre approche :</strong> ${solution.solution}<br>
                    <strong>📈 Impact mesuré :</strong> <span style="color: #4caf50; font-weight: 600;">${solution.impact}</span>
                </div>
            </div>
        `).join('');
    },

    renderTestimonials() {
        const container = document.getElementById('testimonials-grid');
        if (!container || !window.TestimonialsData) return;

        container.innerHTML = window.TestimonialsData.map(testimonial => `
            <div class="card testimonial-card">
                <p class="testimonial-text">"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <strong>${testimonial.author}</strong><br>
                    <span style="color: var(--text-muted);">${testimonial.company}</span>
                </div>
                <div class="testimonial-solution">
                    <strong>Solution :</strong> ${testimonial.solution}
                </div>
                <div class="testimonial-result">
                    <strong>Résultat :</strong> ${testimonial.result}
                </div>
            </div>
        `).join('');
    },

    initROICalculator() {
        // Fonction de calcul du ROI
        window.calculateROI = function() {
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
            const projectCost = Math.max(25000, Math.min(60000, employees * 8000));
            const roiMonths = Math.round(projectCost / (annualSavings / 12));
            
            // Mise à jour de l'affichage
            document.getElementById('time-saved').textContent = `${timeSavedWeekly.toFixed(1)}h/semaine`;
            document.getElementById('annual-savings').textContent = `${annualSavings.toLocaleString('fr-FR')}€/an`;
            document.getElementById('roi-months').textContent = `${roiMonths} mois`;
        };
        
        // Calcul initial
        setTimeout(() => {
            if (typeof calculateROI === 'function') {
                calculateROI();
            }
        }, 500);
    }
};

// Pages spécialisées mises à jour
window.pages['outils-gestion'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Solutions ERP & Outils de Gestion</h2>
                        <p class="section-subtitle">15+ déploiements ERP réussis - Solutions éprouvées pour votre métier</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="outils-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">💡 Conseils d'Expert</h3>
                    </div>
                    <div class="grid grid-4" id="outils-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['outils-gestion'], 'outils-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['outils-gestion'], 'outils-tips');
    }
};

window.pages['consulting-strategique'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conseil Stratégique & BI</h2>
                        <p class="section-subtitle">Diagnostic expert et stratégie digitale sur-mesure</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="consulting-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">🎯 Stratégies Gagnantes</h3>
                    </div>
                    <div class="grid grid-4" id="consulting-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['consulting-strategique'], 'consulting-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['consulting-strategique'], 'consulting-tips');
    }
};

window.pages['accompagnement-projet'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Accompagnement de Projet</h2>
                        <p class="section-subtitle">Méthodologie éprouvée - 100% de projets réussis</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="projet-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">🏆 Méthodes de Succès</h3>
                    </div>
                    <div class="grid grid-4" id="projet-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['accompagnement-projet'], 'projet-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['accompagnement-projet'], 'projet-tips');
    }
};

// Pages EN1090, IA et Optimisation (mises à jour avec même approche)
window.pages['en1090'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Solutions Conformité EN1090</h2>
                        <p class="section-subtitle">Digitalisation complète de votre conformité qualité</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="en1090-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">✅ Solutions Digitales</h3>
                    </div>
                    <div class="grid grid-4" id="en1090-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['en1090'], 'en1090-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['en1090'], 'en1090-tips');
    }
};

window.pages['ia-projets'] = {
    render() {
        return `
            <section class="section">
                <div class="container">