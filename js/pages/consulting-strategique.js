// js/pages/consulting-strategique.js - Page Conseil Stratégique Métallurgie

window.pages = window.pages || {};

window.pages['consulting-strategique'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('/')">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title gradient-text">Conseil Stratégique & Transformation Digitale</h1>
                        <p class="section-subtitle">
                            Accompagnement stratégique pour entreprises de métallurgie.<br>
                            <strong>De l'audit terrain</strong> au pilotage de votre transformation.
                        </p>
                    </div>

                    <!-- Stats conseil -->
                    <div class="hero-stats mb-3">
                        <div class="stat">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">Audits réalisés</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">3M€</div>
                            <div class="stat-label">Économies générées</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">98%</div>
                            <div class="stat-label">Satisfaction clients</div>
                        </div>
                    </div>

                    <!-- Services de conseil -->
                    <div class="section-header">
                        <h2 class="section-title">📊 Nos Services de Conseil</h2>
                        <p class="section-subtitle">Expertise métier au service de votre performance</p>
                    </div>
                    
                    <div class="consulting-services" id="consulting-services"></div>

                    <!-- Diagnostic de maturité -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🎯 Diagnostic de Maturité Digitale</h2>
                        <p class="section-subtitle">Évaluez votre position et identifiez vos priorités</p>
                    </div>
                    
                    <div class="maturity-assessment" id="maturity-assessment"></div>

                    <!-- Méthodologie -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🔍 Notre Méthodologie Éprouvée</h2>
                    </div>
                    
                    <div class="methodology" id="methodology"></div>

                    <!-- Cas clients -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">💡 Exemples de Transformations Réussies</h2>
                    </div>
                    
                    <div class="case-studies" id="case-studies"></div>

                    <!-- CTA -->
                    <div class="article-cta mt-3">
                        <h3>🚀 Démarrons votre Transformation</h3>
                        <p>Diagnostic gratuit de votre maturité digitale</p>
                        <div class="cta-actions">
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                📅 Réserver mon Diagnostic
                            </button>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary btn-large">
                                📧 Demander une Proposition
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderConsultingServices();
        this.renderMaturityAssessment();
        this.renderMethodology();
        this.renderCaseStudies();
        this.bindEvents();
        
        console.log('📊 Conseil Stratégique page initialized');
    },

    renderConsultingServices() {
        const services = [
            {
                icon: '🔍',
                title: 'Audit & Diagnostic',
                description: 'Analyse complète de votre organisation',
                duration: '2-3 jours',
                deliverables: [
                    'Cartographie processus actuels',
                    'Analyse forces/faiblesses',
                    'Benchmark sectoriel',
                    'Plan d\'action priorisé'
                ],
                ideal: 'Point de départ de toute transformation'
            },
            {
                icon: '🎯',
                title: 'Stratégie Digitale',
                description: 'Feuille de route sur-mesure',
                duration: '1-2 semaines',
                deliverables: [
                    'Vision digitale 3-5 ans',
                    'Roadmap transformation',
                    'Business case détaillé',
                    'Plan de financement'
                ],
                ideal: 'Entreprises prêtes à se transformer'
            },
            {
                icon: '📈',
                title: 'Optimisation Processus',
                description: 'Amélioration continue et Lean',
                duration: '2-4 semaines',
                deliverables: [
                    'Analyse Value Stream',
                    'Élimination gaspillages',
                    'KPI performance',
                    'Plan amélioration'
                ],
                ideal: 'Gains rapides et mesurables'
            },
            {
                icon: '🧭',
                title: 'Conduite du Changement',
                description: 'Accompagnement humain et technique',
                duration: 'Continu',
                deliverables: [
                    'Plan de communication',
                    'Formation équipes',
                    'Gestion résistances',
                    'Suivi adoption'
                ],
                ideal: 'Réussite durable des projets'
            }
        ];

        const container = document.getElementById('consulting-services');
        if (!container) return;

        container.innerHTML = `
            <div class="services-grid">
                ${services.map(service => `
                    <div class="service-card">
                        <div class="service-icon">${service.icon}</div>
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <div class="service-duration">⏱️ ${service.duration}</div>
                        
                        <div class="service-deliverables">
                            <h4>Livrables :</h4>
                            <ul>
                                ${service.deliverables.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="service-ideal">
                            <strong>💡 Idéal pour :</strong> ${service.ideal}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderMaturityAssessment() {
        const dimensions = [
            {
                name: 'Digitalisation Commerciale',
                icon: '💼',
                levels: [
                    { level: 1, desc: 'Devis Excel/Word', score: 20 },
                    { level: 3, desc: 'CRM basique', score: 60 },
                    { level: 5, desc: 'CRM intégré + IA', score: 100 }
                ]
            },
            {
                name: 'Gestion Production',
                icon: '🏭',
                levels: [
                    { level: 1, desc: 'Suivi papier', score: 20 },
                    { level: 3, desc: 'GPAO simple', score: 60 },
                    { level: 5, desc: 'MES temps réel', score: 100 }
                ]
            },
            {
                name: 'Intégration CAO',
                icon: '📐',
                levels: [
                    { level: 1, desc: 'Ressaisie manuelle', score: 20 },
                    { level: 3, desc: 'Export/Import', score: 60 },
                    { level: 5, desc: 'Intégration native', score: 100 }
                ]
            },
            {
                name: 'Pilotage & BI',
                icon: '📊',
                levels: [
                    { level: 1, desc: 'Excel manuel', score: 20 },
                    { level: 3, desc: 'Tableaux de bord', score: 60 },
                    { level: 5, desc: 'BI prédictive', score: 100 }
                ]
            }
        ];

        const container = document.getElementById('maturity-assessment');
        if (!container) return;

        container.innerHTML = `
            <div class="maturity-grid">
                ${dimensions.map(dim => `
                    <div class="maturity-dimension">
                        <div class="dimension-header">
                            <span class="dimension-icon">${dim.icon}</span>
                            <h4>${dim.name}</h4>
                        </div>
                        <div class="maturity-scale">
                            ${dim.levels.map(level => `
                                <div class="maturity-level level-${level.level}">
                                    <div class="level-number">Niveau ${level.level}</div>
                                    <div class="level-desc">${level.desc}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="maturity-cta">
                <p>📊 <strong>Où vous situez-vous ?</strong> Découvrez votre niveau de maturité avec notre diagnostic gratuit.</p>
                <button class="btn btn-primary" data-calendly="true">Évaluer ma maturité</button>
            </div>
        `;
    },

    renderMethodology() {
        const phases = [
            {
                phase: 'Phase 1',
                title: 'Immersion Terrain',
                duration: '2-3 jours',
                activities: [
                    'Observation des pratiques actuelles',
                    'Interviews utilisateurs clés',
                    'Analyse documentation existante',
                    'Identification quick wins'
                ],
                output: 'Vision 360° de votre organisation'
            },
            {
                phase: 'Phase 2',
                title: 'Analyse & Diagnostic',
                duration: '3-5 jours',
                activities: [
                    'Cartographie processus AS-IS',
                    'Analyse forces/faiblesses',
                    'Benchmark sectoriel',
                    'Calcul potentiels gains'
                ],
                output: 'Diagnostic complet avec chiffrage'
            },
            {
                phase: 'Phase 3',
                title: 'Conception Solution',
                duration: '1 semaine',
                activities: [
                    'Design processus TO-BE',
                    'Architecture solution',
                    'Planning transformation',
                    'Business case détaillé'
                ],
                output: 'Feuille de route personnalisée'
            },
            {
                phase: 'Phase 4',
                title: 'Accompagnement',
                duration: 'Variable',
                activities: [
                    'Pilotage transformation',
                    'Support équipes',
                    'Ajustements continus',
                    'Mesure résultats'
                ],
                output: 'Transformation réussie'
            }
        ];

        const container = document.getElementById('methodology');
        if (!container) return;

        container.innerHTML = `
            <div class="methodology-timeline">
                ${phases.map((phase, index) => `
                    <div class="methodology-phase">
                        <div class="phase-marker">
                            <span class="phase-number">${index + 1}</span>
                        </div>
                        <div class="phase-content">
                            <div class="phase-header">
                                <h4>${phase.phase}: ${phase.title}</h4>
                                <span class="phase-duration">⏱️ ${phase.duration}</span>
                            </div>
                            <div class="phase-activities">
                                <h5>Activités :</h5>
                                <ul>
                                    ${phase.activities.map(activity => `<li>${activity}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="phase-output">
                                <strong>📦 Résultat :</strong> ${phase.output}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderCaseStudies() {
        const cases = [
            {
                company: 'Charpente Industrielle 44',
                sector: 'Charpente métallique',
                size: '80 salariés',
                challenge: 'Manque de visibilité sur rentabilité projets',
                solution: 'Mise en place BI + tableaux de bord temps réel',
                results: [
                    '+3 points de marge',
                    'Décisions éclairées',
                    'Pilotage proactif'
                ],
                testimonial: 'La visibilité apportée a transformé notre pilotage.'
            },
            {
                company: 'Métallerie Moderne',
                sector: 'Serrurerie',
                size: '25 salariés',
                challenge: 'Processus manuels chronophages',
                solution: 'Digitalisation complète chiffrage → facturation',
                results: [
                    '-50% temps admin',
                    'Zéro erreur facture',
                    'Cash flow amélioré'
                ],
                testimonial: 'Nous avons gagné 2h par jour et par personne.'
            },
            {
                company: 'Groupe Construction Acier',
                sector: 'Multi-sites',
                size: '150 salariés',
                challenge: 'Silos entre sites, pas de vision groupe',
                solution: 'ERP unifié + conduite changement',
                results: [
                    'Vision consolidée',
                    'Synergies achats',
                    'Best practices partagées'
                ],
                testimonial: 'Enfin une vraie vision groupe pour piloter.'
            }
        ];

        const container = document.getElementById('case-studies');
        if (!container) return;

        container.innerHTML = `
            <div class="cases-grid">
                ${cases.map(caseStudy => `
                    <div class="case-card">
                        <div class="case-header">
                            <h4>${caseStudy.company}</h4>
                            <div class="case-meta">
                                <span>${caseStudy.sector}</span> • <span>${caseStudy.size}</span>
                            </div>
                        </div>
                        
                        <div class="case-challenge">
                            <strong>🎯 Défi :</strong>
                            <p>${caseStudy.challenge}</p>
                        </div>
                        
                        <div class="case-solution">
                            <strong>💡 Solution :</strong>
                            <p>${caseStudy.solution}</p>
                        </div>
                        
                        <div class="case-results">
                            <strong>📈 Résultats :</strong>
                            <ul>
                                ${caseStudy.results.map(result => `<li>${result}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="case-testimonial">
                            <blockquote>"${caseStudy.testimonial}"</blockquote>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    bindEvents() {
        // Back button
        setupBackButton();
        
        // Calendly
        document.querySelectorAll('[data-calendly]').forEach(button => {
            button.addEventListener('click', this.openCalendly.bind(this));
        });
    },

    openCalendly() {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly
            });
        } else {
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }
};

console.log('📊 Conseil Stratégique page loaded');