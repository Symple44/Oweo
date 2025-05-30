// js/pages/outils-gestion.js - Page ERP & Outils pour métallurgie

window.pages = window.pages || {};

window.pages['outils-gestion'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('/')">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title gradient-text">ERP & Outils de Gestion Métallurgie</h1>
                        <p class="section-subtitle">
                            Solutions ERP spécialisées pour chaudronnerie, serrurerie et charpente métallique.<br>
                            <strong>10+ années d'expertise</strong> dans le déploiement d'ERP métier.
                        </p>
                    </div>

                    <!-- Stats clés -->
                    <div class="hero-stats mb-3">
                        <div class="stat">
                            <div class="stat-number">15+</div>
                            <div class="stat-label">ERP déployés</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Taux de réussite</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">-50%</div>
                            <div class="stat-label">Temps de chiffrage</div>
                        </div>
                    </div>

                    <!-- Solutions ERP par taille d'entreprise -->
                    <div class="section-header">
                        <h2 class="section-title">🛠️ Solutions ERP Recommandées</h2>
                        <p class="section-subtitle">Sélection basée sur 15+ projets réussis</p>
                    </div>
                    
                    <div class="erp-solutions" id="erp-solutions"></div>

                    <!-- Fonctionnalités clés pour la métallurgie -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">⚡ Fonctionnalités Essentielles Métallurgie</h2>
                    </div>
                    
                    <div class="features-grid" id="metal-features"></div>

                    <!-- Comparatif ERP -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">📊 Comparatif des Solutions</h2>
                        <p class="section-subtitle">Guide de sélection selon vos besoins</p>
                    </div>
                    
                    <div class="comparison-table" id="erp-comparison"></div>

                    <!-- Process de sélection -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🎯 Notre Méthode de Sélection ERP</h2>
                    </div>
                    
                    <div class="selection-process" id="selection-process"></div>

                    <!-- ROI typique -->
                    <div class="roi-section mt-3">
                        <h2 class="section-title text-center">💰 ROI Typique Constaté</h2>
                        <div class="roi-metrics" id="roi-metrics"></div>
                    </div>

                    <!-- CTA -->
                    <div class="article-cta mt-3">
                        <h3>🚀 Trouvons Votre ERP Idéal</h3>
                        <p>Diagnostic gratuit pour identifier la solution optimale pour votre entreprise</p>
                        <div class="cta-actions">
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                📅 Diagnostic ERP Gratuit
                            </button>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary btn-large">
                                📧 Demander un Comparatif
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderERPSolutions();
        this.renderMetalFeatures();
        this.renderComparison();
        this.renderSelectionProcess();
        this.renderROIMetrics();
        this.bindEvents();
        
        console.log('🛠️ ERP & Outils page initialized');
    },

    renderERPSolutions() {
        const solutions = [
            {
                category: 'PME (5-20 personnes)',
                icon: '🏢',
                solutions: [
                    {
                        name: '2CM Manager',
                        badge: 'Recommandé',
                        description: '100% dédié métallurgie - Interface intuitive',
                        price: '25-35k€',
                        features: [
                            'Chiffrage intégré Tekla/AutoCAD',
                            'Gestion complète EN1090',
                            'Suivi temps réel atelier',
                            'Module devis automatisé'
                        ],
                        pros: 'Spécialisation métier complète',
                        roi: '12-18 mois'
                    },
                    {
                        name: 'GesCom PME',
                        badge: 'Alternative',
                        description: 'Solution polyvalente adaptable',
                        price: '20-30k€',
                        features: [
                            'Gestion commerciale complète',
                            'Stock multi-dépôts',
                            'Planning simplifié',
                            'Comptabilité intégrée'
                        ],
                        pros: 'Bon rapport qualité/prix',
                        roi: '15-20 mois'
                    }
                ]
            },
            {
                category: 'ETI (20-100 personnes)',
                icon: '🏭',
                solutions: [
                    {
                        name: 'Sage X3 Métallurgie',
                        badge: 'Leader',
                        description: 'Solution complète avec modules métier',
                        price: '60-120k€',
                        features: [
                            'Multi-sites natif',
                            'MRP avancé',
                            'BI intégré',
                            'Conformité internationale'
                        ],
                        pros: 'Évolutivité et robustesse',
                        roi: '18-24 mois'
                    },
                    {
                        name: 'Sylob 7',
                        badge: 'Spécialiste',
                        description: 'ERP industriel orienté production',
                        price: '50-90k€',
                        features: [
                            'Ordonnancement avancé',
                            'Suivi temps réel',
                            'Qualité intégrée',
                            'Tableaux de bord métier'
                        ],
                        pros: 'Excellence en production',
                        roi: '20-30 mois'
                    }
                ]
            },
            {
                category: 'Grandes Entreprises (100+ personnes)',
                icon: '🌍',
                solutions: [
                    {
                        name: 'Solutions Sur-Mesure',
                        badge: 'Premium',
                        description: 'Architecture personnalisée multi-sites',
                        price: '150k€+',
                        features: [
                            'Personnalisation complète',
                            'Intégrations illimitées',
                            'IA et prédictif intégrés',
                            'Support 24/7'
                        ],
                        pros: 'Adaptation totale aux besoins',
                        roi: '24-36 mois'
                    }
                ]
            }
        ];

        const container = document.getElementById('erp-solutions');
        if (!container) return;

        container.innerHTML = solutions.map(category => `
            <div class="erp-category">
                <h3 class="category-title">
                    <span class="category-icon">${category.icon}</span>
                    ${category.category}
                </h3>
                <div class="solutions-grid">
                    ${category.solutions.map(solution => `
                        <div class="solution-card">
                            <div class="solution-header">
                                <h4>${solution.name}</h4>
                                <span class="solution-badge badge-${solution.badge.toLowerCase()}">${solution.badge}</span>
                            </div>
                            <p class="solution-description">${solution.description}</p>
                            <div class="solution-price">${solution.price}</div>
                            
                            <div class="solution-features">
                                <h5>✅ Fonctionnalités clés :</h5>
                                <ul>
                                    ${solution.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="solution-footer">
                                <div class="solution-pro">
                                    <strong>💡 Point fort :</strong> ${solution.pros}
                                </div>
                                <div class="solution-roi">
                                    <strong>📈 ROI :</strong> ${solution.roi}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    renderMetalFeatures() {
        const features = [
            {
                icon: '📐',
                title: 'Intégration CAO Native',
                description: 'Connexion directe Tekla, AutoCAD, SolidWorks',
                benefits: ['Import automatique nomenclatures', 'Mise à jour temps réel', 'Zéro ressaisie']
            },
            {
                icon: '🔧',
                title: 'Gestion Matières Spécifique',
                description: 'Base données profilés, tôles, quincaillerie',
                benefits: ['Bibliothèque normalisée', 'Prix fournisseurs actualisés', 'Optimisation chutes']
            },
            {
                icon: '⚡',
                title: 'Chiffrage Rapide',
                description: 'Devis automatisés avec ratios métier',
                benefits: ['Temps divisé par 2', 'Marges sécurisées', 'Historique réutilisable']
            },
            {
                icon: '🏭',
                title: 'Suivi Production Temps Réel',
                description: 'Pointage atelier, avancement par phase',
                benefits: ['Visibilité instantanée', 'Alertes retards', 'TRS calculé']
            },
            {
                icon: '✅',
                title: 'Conformité EN1090',
                description: 'Module qualité intégré avec traçabilité',
                benefits: ['Documentation automatique', 'Certificats matières', 'Audit-ready']
            },
            {
                icon: '📊',
                title: 'Tableaux de Bord Métier',
                description: 'KPI spécifiques charpente métallique',
                benefits: ['Rentabilité par affaire', 'Charge atelier', 'Performance temps réel']
            }
        ];

        const container = document.getElementById('metal-features');
        if (!container) return;

        container.innerHTML = `
            <div class="features-metal-grid">
                ${features.map(feature => `
                    <div class="feature-card">
                        <div class="feature-icon">${feature.icon}</div>
                        <h3>${feature.title}</h3>
                        <p>${feature.description}</p>
                        <div class="feature-benefits">
                            ${feature.benefits.map(benefit => `
                                <span class="benefit-tag">✓ ${benefit}</span>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderComparison() {
        const comparison = `
            <div class="comparison-wrapper">
                <table class="erp-comparison-table">
                    <thead>
                        <tr>
                            <th>Critères</th>
                            <th>2CM Manager</th>
                            <th>Sage X3</th>
                            <th>GesCom</th>
                            <th>Sylob</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Spécialisation Métallurgie</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Facilité d'utilisation</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Intégration CAO</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Évolutivité</strong></td>
                            <td>⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Support EN1090</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr>
                            <td><strong>Rapport Qualité/Prix</strong></td>
                            <td>⭐⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                            <td>⭐⭐⭐⭐</td>
                        </tr>
                        <tr class="recommendation-row">
                            <td><strong>Recommandé pour</strong></td>
                            <td>PME spécialisées</td>
                            <td>ETI multi-sites</td>
                            <td>TPE polyvalentes</td>
                            <td>Industries process</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="comparison-legend">
                    <p><strong>Légende :</strong> ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐ Très bon | ⭐⭐⭐ Bon | ⭐⭐ Basique</p>
                </div>
            </div>
        `;

        const container = document.getElementById('erp-comparison');
        if (container) {
            container.innerHTML = comparison;
        }
    },

    renderSelectionProcess() {
        const steps = [
            {
                number: '1',
                title: 'Audit Terrain',
                duration: '2-3 jours',
                description: 'Analyse complète de vos processus actuels',
                deliverables: ['Cartographie processus', 'Points de blocage', 'Quick wins identifiés']
            },
            {
                number: '2',
                title: 'Cahier des Charges',
                duration: '1 semaine',
                description: 'Définition précise de vos besoins',
                deliverables: ['Fonctionnalités prioritaires', 'Budget détaillé', 'Planning projet']
            },
            {
                number: '3',
                title: 'Sélection & POC',
                duration: '2-3 semaines',
                description: 'Tests sur vos données réelles',
                deliverables: ['Short-list 2-3 solutions', 'Tests utilisateurs', 'Analyse comparative']
            },
            {
                number: '4',
                title: 'Décision & Négociation',
                duration: '1 semaine',
                description: 'Choix final et optimisation contrat',
                deliverables: ['Recommandation finale', 'Négociation tarifaire', 'Contrat optimisé']
            }
        ];

        const container = document.getElementById('selection-process');
        if (!container) return;

        container.innerHTML = `
            <div class="process-timeline">
                ${steps.map(step => `
                    <div class="process-step">
                        <div class="step-marker">
                            <span class="step-number">${step.number}</span>
                        </div>
                        <div class="step-content">
                            <h4>${step.title}</h4>
                            <p class="step-duration">⏱️ ${step.duration}</p>
                            <p>${step.description}</p>
                            <div class="step-deliverables">
                                <strong>Livrables :</strong>
                                <ul>
                                    ${step.deliverables.map(item => `<li>${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderROIMetrics() {
        const metrics = [
            {
                icon: '⏰',
                value: '-50%',
                label: 'Temps chiffrage',
                detail: 'De 4h à 2h/devis'
            },
            {
                icon: '📈',
                value: '+25%',
                label: 'Productivité',
                detail: 'Gain moyen constaté'
            },
            {
                icon: '❌',
                value: '-60%',
                label: 'Erreurs',
                detail: 'Réduction drastique'
            },
            {
                icon: '💰',
                value: '18 mois',
                label: 'ROI moyen',
                detail: 'Retour sur investissement'
            }
        ];

        const container = document.getElementById('roi-metrics');
        if (!container) return;

        container.innerHTML = metrics.map(metric => `
            <div class="metric-card">
                <div class="metric-icon">${metric.icon}</div>
                <div class="metric-value">${metric.value}</div>
                <div class="metric-label">${metric.label}</div>
                <div class="metric-detail">${metric.detail}</div>
            </div>
        `).join('');
    },

    bindEvents() {
        // Calendly
        document.querySelectorAll('[data-calendly]').forEach(button => {
            button.addEventListener('click', this.openCalendly.bind(this));
        });

        // Back button
        document.querySelector('.btn-back')?.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.router) {
                window.router.navigate('/');
            }
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

console.log('🛠️ ERP & Outils page loaded');