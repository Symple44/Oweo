// js/pages/expertise.js - Pages d'expertise manquantes

window.pages = window.pages || {};

// PAGE EN1090
window.pages['en1090'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title gradient-text">Solutions Conformité EN1090</h1>
                        <p class="section-subtitle">
                            Digitalisation complète de votre conformité qualité.<br>
                            <strong>Certification garantie</strong> avec nos solutions expertes.
                        </p>
                    </div>

                    <!-- Hero Stats -->
                    <div class="hero-stats mb-3">
                        <div class="stat">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Certifications réussies</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">-70%</div>
                            <div class="stat-label">Temps documentation</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">0</div>
                            <div class="stat-label">Non-conformités</div>
                        </div>
                    </div>

                    <!-- Solutions EN1090 -->
                    <div class="section-header">
                        <h2 class="section-title">🎯 Nos Solutions Digitales EN1090</h2>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="en1090-solutions"></div>

                    <!-- Processus de certification -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">📋 Processus de Certification Digitalisé</h2>
                        <p class="section-subtitle">Accompagnement complet de la préparation à l'audit final</p>
                    </div>

                    <div class="certification-process">
                        <div class="process-timeline" id="certification-timeline"></div>
                    </div>

                    <!-- Outils et technologies -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🛠️ Outils et Technologies</h2>
                    </div>
                    
                    <div class="tech-showcase">
                        <div class="tech-grid" id="en1090-tech"></div>
                    </div>

                    <!-- Articles et conseils -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">📚 Articles & Guides EN1090</h2>
                    </div>
                    <div class="grid grid-2 mb-3" id="en1090-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">✅ Solutions Digitales</h3>
                    </div>
                    <div class="grid grid-4" id="en1090-tips"></div>

                    <!-- CTA -->
                    <div class="article-cta mt-3">
                        <h3>🎯 Prêt pour votre Certification EN1090 ?</h3>
                        <p>Audit gratuit de votre conformité + plan d'action personnalisé</p>
                        <div class="cta-actions">
                            <button class="btn btn-primary" data-calendly="true">
                                📅 Audit conformité gratuit
                            </button>
                            <a href="/downloads/guide-en1090.pdf" class="btn btn-secondary">
                                📥 Guide EN1090 complet
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderSolutions();
        this.renderCertificationProcess();
        this.renderTechnologies();
        
        // Rendu des articles et conseils
        if (window.OweoData?.articles?.['en1090']) {
            ArticleRenderer.renderArticleGrid(window.OweoData.articles['en1090'], 'en1090-articles');
        }
        if (window.OweoData?.tips?.['en1090']) {
            ArticleRenderer.renderTipsGrid(window.OweoData.tips['en1090'], 'en1090-tips');
        }
        
        console.log('EN1090 page initialized');
    },

    renderSolutions() {
        const solutions = [
            {
                icon: '📱',
                title: 'Traçabilité Digitale Complète',
                description: 'Solution complète de traçabilité avec QR codes et géolocalisation',
                features: [
                    'QR Codes pour chaque pièce',
                    'Photos géolocalisées des contrôles',
                    'Signatures numériques automatiques',
                    'Blockchain pour immutabilité'
                ],
                result: 'Traçabilité 100% garantie'
            },
            {
                icon: '🤖',
                title: 'Contrôles Qualité Automatisés',
                description: 'Intelligence artificielle pour automatiser vos contrôles qualité',
                features: [
                    'Check-lists intelligentes',
                    'IA de détection défauts',
                    'Alertes prédictives',
                    'Rapports auto-générés'
                ],
                result: '-60% temps de contrôle'
            },
            {
                icon: '📊',
                title: 'Pilotage Qualité Temps Réel',
                description: 'Tableaux de bord pour piloter votre qualité en continu',
                features: [
                    'KPI qualité temps réel',
                    'Tendances prédictives',
                    'Benchmarking performance',
                    'Alertes automatiques'
                ],
                result: '95% conformité maintenue'
            },
            {
                icon: '📋',
                title: 'Documentation Automatique',
                description: 'Génération automatique de toute la documentation EN1090',
                features: [
                    'Manuel qualité auto-généré',
                    'Procédures mises à jour',
                    'Certificats automatiques',
                    'Archivage intelligent'
                ],
                result: '-70% temps documentation'
            }
        ];

        const container = document.getElementById('en1090-solutions');
        if (!container) return;

        container.innerHTML = solutions.map(solution => `
            <div class="card solution-card">
                <div class="card-icon">${solution.icon}</div>
                <h3>${solution.title}</h3>
                <p>${solution.description}</p>
                <ul class="feature-list">
                    ${solution.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <div class="card-result">
                    <strong>Résultat :</strong> ${solution.result}
                </div>
            </div>
        `).join('');
    },

    renderCertificationProcess() {
        const steps = [
            {
                step: 1,
                title: 'Audit Initial',
                description: 'Évaluation complète de votre conformité actuelle',
                duration: '2-3 jours',
                deliverables: ['Gap analysis', 'Plan d\'action', 'Timeline certification']
            },
            {
                step: 2,
                title: 'Mise en Conformité',
                description: 'Implémentation des solutions digitales',
                duration: '2-4 semaines',
                deliverables: ['Système qualité digital', 'Procédures', 'Formation équipes']
            },
            {
                step: 3,
                title: 'Tests et Validation',
                description: 'Validation complète du système qualité',
                duration: '1-2 semaines',
                deliverables: ['Tests complets', 'Documentation finale', 'Pré-audit interne']
            },
            {
                step: 4,
                title: 'Certification',
                description: 'Accompagnement lors de l\'audit final',
                duration: '2-3 jours',
                deliverables: ['Support audit', 'Certification EN1090', 'Plan de maintenance']
            }
        ];

        const container = document.getElementById('certification-timeline');
        if (!container) return;

        container.innerHTML = steps.map(step => `
            <div class="timeline-step">
                <div class="step-marker">
                    <div class="step-number">${step.step}</div>
                </div>
                <div class="step-content">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                    <div class="step-meta">
                        <div class="step-duration">⏱️ ${step.duration}</div>
                        <div class="step-deliverables">
                            <strong>Livrables :</strong>
                            <ul>
                                ${step.deliverables.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderTechnologies() {
        const technologies = [
            {
                category: 'Traçabilité',
                tools: ['QR Codes', 'RFID', 'NFC', 'Géolocalisation']
            },
            {
                category: 'Contrôle Qualité',
                tools: ['Vision par IA', 'IoT Capteurs', 'Mesures automatiques', 'OCR']
            },
            {
                category: 'Documentation',
                tools: ['Génération auto', 'Templates EN1090', 'Signatures numériques', 'Archivage cloud']
            },
            {
                category: 'Pilotage',
                tools: ['Dashboards temps réel', 'Analytics prédictifs', 'Alertes SMS/Email', 'API intégrations']
            }
        ];

        const container = document.getElementById('en1090-tech');
        if (!container) return;

        container.innerHTML = technologies.map(tech => `
            <div class="tech-category">
                <h4>${tech.category}</h4>
                <div class="tech-items">
                    ${tech.tools.map(tool => `<span class="tech-item">${tool}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
};

// PAGE IA & INNOVATION
window.pages['ia-projets'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title gradient-text">Solutions IA & Innovation</h1>
                        <p class="section-subtitle">
                            Intelligence artificielle appliquée à votre métier.<br>
                            <strong>90% de précision</strong> sur nos algorithmes de contrôle qualité.
                        </p>
                    </div>

                    <!-- Hero Stats -->
                    <div class="hero-stats mb-3">
                        <div class="stat">
                            <div class="stat-number">90%</div>
                            <div class="stat-label">Précision IA</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">x5</div>
                            <div class="stat-label">Vitesse inspection</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">-80%</div>
                            <div class="stat-label">Rebuts détectés</div>
                        </div>
                    </div>

                    <!-- Solutions IA -->
                    <div class="section-header">
                        <h2 class="section-title">🤖 Nos Solutions IA Déployées</h2>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="ia-solutions"></div>

                    <!-- Cas d'usage concrets -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🎯 Cas d'Usage Opérationnels</h2>
                        <p class="section-subtitle">Applications concrètes dans votre quotidien</p>
                    </div>

                    <div class="use-cases" id="ia-use-cases"></div>

                    <!-- ROI et résultats -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">📈 ROI Mesurable</h2>
                    </div>
                    
                    <div class="roi-showcase">
                        <div class="roi-metrics" id="ia-roi"></div>
                    </div>

                    <!-- Articles et conseils -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">📚 Articles & Guides IA</h2>
                    </div>
                    <div class="grid grid-2 mb-3" id="ia-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">🤖 IA Concrète</h3>
                    </div>
                    <div class="grid grid-4" id="ia-tips"></div>

                    <!-- CTA -->
                    <div class="article-cta mt-3">
                        <h3>🚀 Prêt pour l'IA dans votre Entreprise ?</h3>
                        <p>Étude de faisabilité gratuite + POC personnalisé</p>
                        <div class="cta-actions">
                            <button class="btn btn-primary" data-calendly="true">
                                📅 Étude faisabilité IA
                            </button>
                            <a href="/downloads/guide-ia-metallurgie.pdf" class="btn btn-secondary">
                                📥 Guide IA Métallurgie
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderSolutions();
        this.renderUseCases();
        this.renderROI();
        
        // Rendu des articles et conseils
        if (window.OweoData?.articles?.['ia-projets']) {
            ArticleRenderer.renderArticleGrid(window.OweoData.articles['ia-projets'], 'ia-articles');
        }
        if (window.OweoData?.tips?.['ia-projets']) {
            ArticleRenderer.renderTipsGrid(window.OweoData.tips['ia-projets'], 'ia-tips');
        }
        
        console.log('IA page initialized');
    },

    renderSolutions() {
        const solutions = [
            {
                icon: '👁️',
                title: 'Vision par Ordinateur',
                description: 'IA de contrôle visuel pour détecter automatiquement les défauts',
                applications: [
                    'Contrôle soudures automatique',
                    'Vérification assemblages géométriques',
                    'Contrôle peinture et finitions',
                    'Inspection finale automatisée'
                ],
                precision: '95% de précision',
                status: 'Déployé chez 5 clients'
            },
            {
                icon: '🧠',
                title: 'IA Prédictive',
                description: 'Algorithmes prédictifs pour anticiper pannes et besoins',
                applications: [
                    'Prédiction pannes machines',
                    'Optimisation planning automatique',
                    'Gestion stocks intelligente',
                    'Qualité prédictive'
                ],
                precision: '85% de précision',
                status: 'En cours de déploiement'
            },
            {
                icon: '💬',
                title: 'Assistants IA',
                description: 'Chatbots et assistants intelligents spécialisés métier',
                applications: [
                    'Chatbot support technique 24/7',
                    'Assistant chiffrage automatisé',
                    'OCR intelligent documents',
                    'Aide à la décision contextuelle'
                ],
                precision: '90% satisfaction utilisateur',
                status: 'Version beta disponible'
            },
            {
                icon: '📊',
                title: 'Analytics Avancés',
                description: 'IA d\'analyse de données pour insights business',
                applications: [
                    'Détection tendances cachées',
                    'Optimisation processus',
                    'Recommandations personnalisées',
                    'Prévisions de demande'
                ],
                precision: '80% précision prédictions',
                status: 'Recherche & Développement'
            }
        ];

        const container = document.getElementById('ia-solutions');
        if (!container) return;

        container.innerHTML = solutions.map(solution => `
            <div class="card solution-card">
                <div class="card-icon">${solution.icon}</div>
                <h3>${solution.title}</h3>
                <p>${solution.description}</p>
                <div class="solution-status">
                    <span class="status-badge">${solution.status}</span>
                </div>
                <ul class="feature-list">
                    ${solution.applications.map(app => `<li>${app}</li>`).join('')}
                </ul>
                <div class="card-result">
                    <strong>Performance :</strong> ${solution.precision}
                </div>
            </div>
        `).join('');
    },

    renderUseCases() {
        const useCases = [
            {
                title: 'Contrôle Qualité Soudures',
                problem: 'Inspection manuelle lente et subjective',
                solution: 'Caméra IA qui analyse chaque soudure en 2 secondes',
                result: '95% de défauts détectés vs 70% en manuel'
            },
            {
                title: 'Maintenance Prédictive',
                problem: 'Pannes imprévisibles coûteuses',
                solution: 'IA qui prédit les pannes 2 semaines à l\'avance',
                result: '-60% temps d\'arrêt machine'
            },
            {
                title: 'Optimisation Découpe',
                problem: 'Gaspillage matière important',
                solution: 'Algorithme d\'optimisation des chutes',
                result: '-15% consommation matière'
            }
        ];

        const container = document.getElementById('ia-use-cases');
        if (!container) return;

        container.innerHTML = useCases.map(useCase => `
            <div class="use-case-card">
                <h3>${useCase.title}</h3>
                <div class="use-case-flow">
                    <div class="problem">
                        <h4>❌ Problème</h4>
                        <p>${useCase.problem}</p>
                    </div>
                    <div class="arrow">→</div>
                    <div class="solution">
                        <h4>🤖 Solution IA</h4>
                        <p>${useCase.solution}</p>
                    </div>
                    <div class="arrow">→</div>
                    <div class="result">
                        <h4>✅ Résultat</h4>
                        <p>${useCase.result}</p>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderROI() {
        const metrics = [
            {
                icon: '🎯',
                value: '+90%',
                label: 'Contrôle qualité',
                detail: 'Détection défauts'
            },
            {
                icon: '⚡',
                value: 'x5',
                label: 'Vitesse inspection',
                detail: 'Plus rapide qu\'humain'
            },
            {
                icon: '💰',
                value: '-80%',
                label: 'Réduction rebuts',
                detail: 'Pièces défectueuses'
            },
            {
                icon: '🏆',
                value: '+25%',
                label: 'Satisfaction client',
                detail: 'Qualité constante'
            }
        ];

        const container = document.getElementById('ia-roi');
        if (!container) return;

        container.innerHTML = metrics.map(metric => `
            <div class="metric-card gain">
                <div class="metric-icon">${metric.icon}</div>
                <div class="metric-value">${metric.value}</div>
                <div class="metric-label">${metric.label}</div>
                <div class="metric-detail">${metric.detail}</div>
            </div>
        `).join('');
    }
};

// PAGE OPTIMISATION
window.pages['optimisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title gradient-text">Solutions d'Optimisation Production</h1>
                        <p class="section-subtitle">
                            Amélioration continue et gains mesurables.<br>
                            <strong>+20% de productivité</strong> garantis avec nos méthodes éprouvées.
                        </p>
                    </div>

                    <!-- Hero Stats -->
                    <div class="hero-stats mb-3">
                        <div class="stat">
                            <div class="stat-number">+20%</div>
                            <div class="stat-label">Productivité moyenne</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">-30%</div>
                            <div class="stat-label">Temps traversée</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">-60%</div>
                            <div class="stat-label">Taux de rebuts</div>
                        </div>
                    </div>

                    <!-- Méthodes d'optimisation -->
                    <div class="section-header">
                        <h2 class="section-title">🚀 Nos Méthodes d'Optimisation</h2>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="optimization-methods"></div>

                    <!-- Processus d'audit -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🔍 Processus d'Audit Performance</h2>
                        <p class="section-subtitle">Diagnostic complet en 5 étapes</p>
                    </div>

                    <div class="audit-process" id="audit-process"></div>

                    <!-- KPI et mesures -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">📊 KPI et Mesures de Performance</h2>
                    </div>
                    
                    <div class="kpi-dashboard" id="kpi-dashboard"></div>

                    <!-- Articles et conseils -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">📚 Articles & Guides Optimisation</h2>
                    </div>
                    <div class="grid grid-2 mb-3" id="optimization-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">⚡ Performance Optimale</h3>
                    </div>
                    <div class="grid grid-4" id="optimization-tips"></div>

                    <!-- CTA -->
                    <div class="article-cta mt-3">
                        <h3>🎯 Prêt à Optimiser votre Production ?</h3>
                        <p>Audit performance gratuit + plan d'optimisation personnalisé</p>
                        <div class="cta-actions">
                            <button class="btn btn-primary" data-calendly="true">
                                📅 Audit performance gratuit
                            </button>
                            <a href="/downloads/guide-optimisation-production.pdf" class="btn btn-secondary">
                                📥 Guide Optimisation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderOptimizationMethods();
        this.renderAuditProcess();
        this.renderKPIDashboard();
        
        // Rendu des articles et conseils
        if (window.OweoData?.articles?.['optimisation']) {
            ArticleRenderer.renderArticleGrid(window.OweoData.articles['optimisation'], 'optimization-articles');
        }
        if (window.OweoData?.tips?.['optimisation']) {
            ArticleRenderer.renderTipsGrid(window.OweoData.tips['optimisation'], 'optimization-tips');
        }
        
        console.log('Optimization page initialized');
    },

    renderOptimizationMethods() {
        const methods = [
            {
                icon: '🎯',
                title: 'Lean Digital Manufacturing',
                description: 'Méthodes Lean digitalisées pour éliminer tous les gaspillages',
                tools: [
                    'Mapping des flux temps réel',
                    'Élimination gaspillages par IA',
                    '5S numérique organisé',
                    'Kaizen continu piloté par data'
                ],
                result: '+15% productivité moyenne'
            },
            {
                icon: '📊',
                title: 'Pilotage par la Performance',
                description: 'KPI opérationnels pour un pilotage optimal de votre production',
                tools: [
                    'TRS machines temps réel',
                    'Temps de cycle optimisés',
                    'Taux qualité contrôlé',
                    'Délais livraison respectés'
                ],
                result: '95% délais respectés'
            },
            {
                icon: '⚡',
                title: 'Automatisation Intelligente',
                description: 'Automatisation des processus répétitifs et optimisation des flux',
                tools: [
                    'Ordonnancement automatique',
                    'Approvisionnement en flux tirés',
                    'Contrôle qualité par IA',
                    'Reporting auto-généré'
                ],
                result: '-40% temps administratif'
            },
            {
                icon: '🔄',
                title: 'Amélioration Continue',
                description: 'Cycles PDCA digitaux pour une amélioration permanente',
                tools: [
                    'Détection automatique des dérives',
                    'Plans d\'action automatisés',
                    'Suivi des améliorations',
                    'ROI mesuré en continu'
                ],
                result: '+5% gains par trimestre'
            }
        ];

        const container = document.getElementById('optimization-methods');
        if (!container) return;

        container.innerHTML = methods.map(method => `
            <div class="card solution-card">
                <div class="card-icon">${method.icon}</div>
                <h3>${method.title}</h3>
                <p>${method.description}</p>
                <ul class="feature-list">
                    ${method.tools.map(tool => `<li>${tool}</li>`).join('')}
                </ul>
                <div class="card-result">
                    <strong>Résultat type :</strong> ${method.result}
                </div>
            </div>
        `).join('');
    },

    renderAuditProcess() {
        const steps = [
            {
                step: 1,
                title: 'Analyse des Flux',
                description: 'Cartographie complète de vos processus de production',
                duration: '1-2 jours',
                methods: ['Observation terrain', 'Chronométrage', 'Value Stream Mapping', 'Analyse goulots']
            },
            {
                step: 2,
                title: 'Mesure Performance',
                description: 'Collecte et analyse des données de performance actuelles',
                duration: '2-3 jours',
                methods: ['TRS machines', 'Temps de cycle', 'Taux qualité', 'Coûts cachés']
            },
            {
                step: 3,
                title: 'Identification Gaspillages',
                description: 'Détection de tous les types de gaspillages (MUDA)',
                duration: '1 jour',
                methods: ['7 gaspillages Lean', 'Analyse causes racines', 'Priorisation impacts', 'Quick wins']
            },
            {
                step: 4,
                title: 'Plan d\'Optimisation',
                description: 'Élaboration du plan d\'action avec ROI calculé',
                duration: '2-3 jours',
                methods: ['Roadmap optimisation', 'Calcul ROI précis', 'Planning détaillé', 'Budget optimisé']
            },
            {
                step: 5,
                title: 'Mise en Œuvre',
                description: 'Déploiement des solutions avec accompagnement',
                duration: '2-6 mois',
                methods: ['Déploiement agile', 'Formation équipes', 'Suivi performance', 'Ajustements']
            }
        ];

        const container = document.getElementById('audit-process');
        if (!container) return;

        container.innerHTML = steps.map(step => `
            <div class="audit-step">
                <div class="step-marker">
                    <div class="step-number">${step.step}</div>
                </div>
                <div class="step-content">
                    <h3>${step.title}</h3>
                    <p>${step.description}</p>
                    <div class="step-meta">
                        <div class="step-duration">⏱️ ${step.duration}</div>
                        <div class="step-methods">
                            <strong>Méthodes :</strong>
                            <ul>
                                ${step.methods.map(method => `<li>${method}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderKPIDashboard() {
        const kpis = [
            {
                category: 'Productivité',
                metrics: [
                    { name: 'TRS Global', value: '85%', target: '90%', trend: '+5%' },
                    { name: 'Pièces/Heure', value: '145', target: '160', trend: '+12%' },
                    { name: 'Temps Cycle', value: '24min', target: '20min', trend: '-15%' }
                ]
            },
            {
                category: 'Qualité',
                metrics: [
                    { name: 'Taux Conformité', value: '96%', target: '98%', trend: '+3%' },
                    { name: 'Rebuts', value: '2.1%', target: '1.5%', trend: '-40%' },
                    { name: 'Retouches', value: '1.8%', target: '1%', trend: '-25%' }
                ]
            },
            {
                category: 'Délais',
                metrics: [
                    { name: 'Respect Délais', value: '92%', target: '95%', trend: '+8%' },
                    { name: 'Lead Time', value: '12j', target: '10j', trend: '-20%' },
                    { name: 'Temps Traversée', value: '8j', target: '6j', trend: '-25%' }
                ]
            },
            {
                category: 'Coûts',
                metrics: [
                    { name: 'Coût/Pièce', value: '45€', target: '40€', trend: '-12%' },
                    { name: 'Productivité/H', value: '125€', target: '140€', trend: '+18%' },
                    { name: 'Gaspillages', value: '3.2%', target: '2%', trend: '-35%' }
                ]
            }
        ];

        const container = document.getElementById('kpi-dashboard');
        if (!container) return;

        container.innerHTML = kpis.map(category => `
            <div class="kpi-category">
                <h3>${category.category}</h3>
                <div class="kpi-metrics">
                    ${category.metrics.map(metric => `
                        <div class="kpi-card">
                            <div class="kpi-name">${metric.name}</div>
                            <div class="kpi-value">${metric.value}</div>
                            <div class="kpi-target">Objectif: ${metric.target}</div>
                            <div class="kpi-trend ${metric.trend.startsWith('+') ? 'positive' : 'negative'}">
                                ${metric.trend}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
};

console.log('✅ Expertise pages loaded (EN1090, IA, Optimisation)');