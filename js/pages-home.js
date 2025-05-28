// js/pages-home.js - PAGE D'ACCUEIL

window.pages = window.pages || {};

window.pages.home = {
    render() {
        return `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">🚀 Transformation Digitale Métallurgie</div>
                        <h1 class="gradient-text">Gagnez en Performance avec les Solutions Digitales Oweo</h1>
                        <p class="hero-subtitle">
                            <strong>Spécialistes de la charpente métallique</strong>, nous transformons votre productivité avec des solutions éprouvées.<br>
                            <strong>Résultats garantis :</strong> +20% de productivité, 2h/jour gagnées par personne, +3 points de marge supplémentaire.
                        </p>
                        
                        <div class="hero-stats">
                            <div class="stat">
                                <div class="stat-number">15+</div>
                                <div class="stat-label">Solutions ERP déployées</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">De projets réussis</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">10+</div>
                                <div class="stat-label">Années d'expertise terrain</div>
                            </div>
                        </div>
                        
                        <div class="hero-actions">
                            <a href="#" class="btn btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/nicolas-dubain/30min'});">
                                🎯 Diagnostic Gratuit (30min)
                            </a>
                            <a href="#solutions" class="btn btn-secondary">
                                Découvrir Nos Solutions
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="solutions" class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Nos Solutions pour Votre Réussite</h2>
                        <p class="section-subtitle">Solutions éprouvées et résultats mesurables</p>
                    </div>
                    <div class="grid grid-2" id="solutions-grid"></div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">💰 Calculez vos Gains Potentiels</h2>
                        <p class="section-subtitle">Estimation personnalisée de votre ROI</p>
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
                        
                        <div style="text-align: center; margin-top: 2rem;">
                            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">
                                * Calculs basés sur les gains moyens constatés chez nos clients
                            </p>
                            <a href="#" class="btn btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/nicolas-dubain/30min'});">
                                🎯 Valider ces estimations (Diagnostic gratuit)
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-special-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Success Stories : Ils ont Réussi</h2>
                        <p class="section-subtitle">Résultats concrets obtenus par nos clients</p>
                    </div>
                    <div class="grid grid-2" id="testimonials-grid"></div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Notre Méthode : 100% de Réussite</h2>
                        <p class="section-subtitle">Processus éprouvé - Résultats garantis</p>
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
                               onclick="Calendly.initPopupWidget({url: 'https://calendly.com/nicolas-dubain/30min'});"
                               style="background: white; color: #00d4ff; font-weight: 700;">
                                📅 Réserver mon Diagnostic Gratuit
                            </a>
                            <a href="mailto:contact@oweo-consulting.fr" class="btn btn-secondary"
                               style="border-color: white; color: white;">
                                📧 Contact Direct
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderMethodSteps() {
        const steps = [
            { number: '01', title: 'Diagnostic Expert', description: 'Audit terrain complet', duration: '2-3 jours', icon: '🔍' },
            { number: '02', title: 'Solution Sur-Mesure', description: 'Sélection solution optimale', duration: '2-3 semaines', icon: '🎯' },
            { number: '03', title: 'Déploiement Agile', description: 'Mise en œuvre par phases', duration: '2-4 mois', icon: '🚀' },
            { number: '04', title: 'Formation Excellence', description: 'Formation complète équipes', duration: '1-2 semaines', icon: '🎓' },
            { number: '05', title: 'Go-Live Sécurisé', description: 'Basculement progressif', duration: '1 semaine', icon: '✅' },
            { number: '06', title: 'Succès Mesuré', description: 'Validation gains', duration: '6 mois', icon: '📈' }
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
            { icon: '🛠️', title: 'ERP & Gestion', description: 'Solutions ERP spécialisées', page: 'outils-gestion', results: '15+ déploiements' },
            { icon: '📊', title: 'Business Intelligence', description: 'Tableaux de bord temps réel', page: 'consulting-strategique', results: 'Visibilité complète' },
            { icon: '⚡', title: 'Automatisation', description: 'Processus intelligents', page: 'accompagnement-projet', results: '2h/jour gagnées' },
            { icon: '🤖', title: 'Intelligence Artificielle', description: 'IA appliquée métier', page: 'ia-projets', results: '90% de précision' },
            { icon: '📋', title: 'Conformité EN1090', description: 'Digitalisation conformité', page: 'en1090', results: 'Certification garantie' },
            { icon: '🎯', title: 'Optimisation', description: 'Lean digital', page: 'optimisation', results: '+20% productivité' }
        ];

        return cards.map(card => `
            <div class="card expertise-card" onclick="router.navigate('${card.page}')" style="cursor: pointer;">
                <div class="card-icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <div class="card-result">
                    <strong>Résultat type :</strong> ${card.results}
                </div>
            </div>
        `).join('');
    },

    init() {
        this.renderSolutions();
        this.renderTestimonials();
        this.initROICalculator();
        console.log('Home page initialized');
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
        window.calculateROI = function() {
            const employees = parseInt(document.getElementById('employees').value) || 0;
            const quotesPerWeek = parseInt(document.getElementById('quotes-per-week').value) || 0;
            const timePerQuote = parseFloat(document.getElementById('time-per-quote').value) || 0;
            const hourlyRate = parseInt(document.getElementById('hourly-rate').value) || 0;
            
            const timeGainPercentage = 0.5;
            const weeklyHours = quotesPerWeek * timePerQuote;
            const timeSavedWeekly = weeklyHours * timeGainPercentage;
            const annualSavings = timeSavedWeekly * 52 * hourlyRate;
            const projectCost = Math.max(25000, Math.min(60000, employees * 8000));
            const roiMonths = Math.round(projectCost / (annualSavings / 12));
            
            document.getElementById('time-saved').textContent = `${timeSavedWeekly.toFixed(1)}h/semaine`;
            document.getElementById('annual-savings').textContent = `${annualSavings.toLocaleString('fr-FR')}€/an`;
            document.getElementById('roi-months').textContent = `${roiMonths} mois`;
        };
        
        setTimeout(() => {
            if (typeof calculateROI === 'function') {
                calculateROI();
            }
        }, 500);
    }
};

console.log('✅ pages-home.js loaded');