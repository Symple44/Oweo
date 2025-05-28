// js/data/articles.js - Données des articles par catégorie

window.OweoData = window.OweoData || {};

window.OweoData.articles = {
    'outils-gestion': [
        {
            id: 'choix-erp-charpente-2025',
            title: 'Guide Complet : Choisir son ERP pour la Charpente Métallique en 2025',
            category: 'Guide Expert',
            time: '15 min',
            readingTime: 15,
            publishDate: '2024-12-15',
            lastUpdate: '2024-12-20',
            author: 'Nicolas Dubain',
            excerpt: 'Guide basé sur 15+ déploiements ERP réussis. Méthodologie éprouvée pour choisir la solution parfaite selon votre taille d\'entreprise et vos besoins spécifiques.',
            tags: ['ERP', 'ROI', 'Métallurgie', 'Sage X3', 'GesCom'],
            difficulty: 'Intermédiaire',
            featured: true,
            seo: {
                metaDescription: 'Guide expert pour choisir son ERP charpente métallique. Comparatif Sage X3, GesCom, 2CM Manager. Méthodologie en 4 étapes.',
                keywords: 'ERP charpente métallique, choix ERP, Sage X3, GesCom, 2CM Manager'
            },
            tableOfContents: [
                { id: 'methodologie', title: 'Notre Méthodologie de Sélection', level: 2 },
                { id: 'criteres', title: 'Critères de Sélection Prioritaires', level: 2 },
                { id: 'roi', title: 'ROI Constaté chez nos Clients', level: 2 },
                { id: 'technologies', title: 'Technologies Recommandées', level: 2 },
                { id: 'implementation', title: 'Plan d\'Implémentation', level: 2 }
            ],
            content: `
                <div class="article-intro">
                    <p class="lead">En 2025, choisir le bon ERP pour votre entreprise de charpente métallique est devenu critique. Avec notre expérience de 15+ déploiements réussis, nous vous guidons vers la solution optimale.</p>
                </div>

                <div class="article-stats">
                    <div class="stat-item">
                        <strong>15+</strong> ERP déployés
                    </div>
                    <div class="stat-item">
                        <strong>100%</strong> de réussite
                    </div>
                    <div class="stat-item">
                        <strong>€1.2M</strong> d'économies générées
                    </div>
                </div>

                <h2 id="methodologie">🎯 Notre Méthodologie de Sélection</h2>
                
                <p>Chez Oweo, nous avons développé une approche structurée en 4 étapes qui garantit le bon choix :</p>
                
                <div class="methodology-steps">
                    <div class="step-card">
                        <div class="step-number">1</div>
                        <div class="step-content">
                            <h3>Audit Métier Complet</h3>
                            <p>Cartographie détaillée de vos processus actuels</p>
                            <ul>
                                <li>Analyse des flux de chiffrage</li>
                                <li>Étude des processus de production</li>
                                <li>Evaluation de la gestion commerciale</li>
                                <li>Audit des intégrations existantes</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="step-card">
                        <div class="step-number">2</div>
                        <div class="step-content">
                            <h3>Définition des Besoins Prioritaires</h3>
                            <p>Ce qui rapporte vs ce qui coûte</p>
                            <ul>
                                <li>Identification des gains prioritaires</li>
                                <li>Calcul du ROI potentiel</li>
                                <li>Priorisation des fonctionnalités</li>
                                <li>Budget et contraintes techniques</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="step-card">
                        <div class="step-number">3</div>
                        <div class="step-content">
                            <h3>Benchmark ERP Spécialisés</h3>
                            <p>Comparaison sur critères objectifs</p>
                            <ul>
                                <li>Grille d'évaluation standardisée</li>
                                <li>Tests sur vos données réelles</li>
                                <li>Analyse coût/bénéfice détaillée</li>
                                <li>Références clients secteur</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="step-card">
                        <div class="step-number">4</div>
                        <div class="step-content">
                            <h3>POC (Proof of Concept)</h3>
                            <p>Test réel sur vos données</p>
                            <ul>
                                <li>Paramétrage sur vos cas d'usage</li>
                                <li>Test avec vos utilisateurs</li>
                                <li>Validation des intégrations</li>
                                <li>Mesure de performance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <h2 id="criteres">✅ Critères de Sélection Prioritaires</h2>
                
                <div class="criteria-grid">
                    <div class="criteria-card priority-high">
                        <h3>🏭 Spécialisation Métier</h3>
                        <p><strong>Priorité : Critique</strong></p>
                        <ul>
                            <li>Gestion des nomenclatures complexes</li>
                            <li>Intégration plans CAO/DAO</li>
                            <li>Optimisation découpe automatique</li>
                            <li>Gestion des variantes et options</li>
                        </ul>
                        <div class="criteria-score">Score moyen marché : 6/10</div>
                    </div>
                    
                    <div class="criteria-card priority-high">
                        <h3>🔗 Intégrations Natives</h3>
                        <p><strong>Priorité : Critique</strong></p>
                        <ul>
                            <li>Tekla Structures, AutoCAD</li>
                            <li>Machines de découpe CNC</li>
                            <li>Systèmes de pesage</li>
                            <li>Comptabilité (Sage, Cegid)</li>
                        </ul>
                        <div class="criteria-score">Coût intégrations : 15-40k€</div>
                    </div>
                    
                    <div class="criteria-card priority-medium">
                        <h3>📈 Évolutivité</h3>
                        <p><strong>Priorité : Importante</strong></p>
                        <ul>
                            <li>Capacité multi-sites</li>
                            <li>Montée en charge utilisateurs</li>
                            <li>Évolutions fonctionnelles</li>
                            <li>Technologies pérennes</li>
                        </ul>
                        <div class="criteria-score">Durée de vie : 8-12 ans</div>
                    </div>
                    
                    <div class="criteria-card priority-medium">
                        <h3>🛠️ Support Expert</h3>
                        <p><strong>Priorité : Importante</strong></p>
                        <ul>
                            <li>Connaissance du métier</li>
                            <li>Réactivité support technique</li>
                            <li>Formation spécialisée</li>
                            <li>Communauté utilisateurs</li>
                        </ul>
                        <div class="criteria-score">Coût support : 18-22% /an</div>
                    </div>
                </div>

                <h2 id="roi">📈 ROI Constaté chez nos Clients</h2>
                
                <div class="roi-showcase">
                    <div class="roi-header">
                        <h3>Gains mesurés sur 12 mois (données clients réels)</h3>
                    </div>
                    
                    <div class="roi-metrics">
                        <div class="metric-card gain">
                            <div class="metric-icon">⚡</div>
                            <div class="metric-value">-50%</div>
                            <div class="metric-label">Temps de chiffrage</div>
                            <div class="metric-detail">De 4h à 2h par affaire</div>
                        </div>
                        
                        <div class="metric-card gain">
                            <div class="metric-icon">🎯</div>
                            <div class="metric-value">-60%</div>
                            <div class="metric-label">Erreurs de production</div>
                            <div class="metric-detail">Mesure terrain validée</div>
                        </div>
                        
                        <div class="metric-card gain">
                            <div class="metric-icon">🚀</div>
                            <div class="metric-value">+20%</div>
                            <div class="metric-label">Productivité atelier</div>
                            <div class="metric-detail">Résultats clients Oweo</div>
                        </div>
                        
                        <div class="metric-card gain">
                            <div class="metric-icon">✅</div>
                            <div class="metric-value">95%</div>
                            <div class="metric-label">Délais respectés</div>
                            <div class="metric-detail">vs 70% avant ERP</div>
                        </div>
                    </div>
                    
                    <div class="roi-calculator-embed">
                        <h4>💰 Calculez votre ROI personnalisé</h4>
                        <p>Basé sur ces données réelles, estimez vos gains potentiels :</p>
                        <a href="#roi-calculator" class="btn btn-primary">Calculer mon ROI</a>
                    </div>
                </div>

                <h2 id="technologies">🏆 Technologies Recommandées</h2>
                
                <p>Selon votre taille et vos besoins spécifiques :</p>
                
                <div class="technology-matrix">
                    <div class="tech-category">
                        <h3>PME (5-20 personnes)</h3>
                        <div class="tech-solutions">
                            <div class="solution-card recommended">
                                <div class="solution-header">
                                    <h4>2CM Manager</h4>
                                    <span class="badge badge-recommended">Recommandé</span>
                                </div>
                                <div class="solution-price">25-35k€</div>
                                <ul class="solution-features">
                                    <li>✅ Spécialisation 100% métallurgie</li>
                                    <li>✅ Interface intuitive</li>
                                    <li>✅ Intégrations CAO natives</li>
                                    <li>✅ Support français</li>
                                </ul>
                                <div class="solution-roi">ROI : 12-18 mois</div>
                            </div>
                            
                            <div class="solution-card">
                                <div class="solution-header">
                                    <h4>Sylob</h4>
                                    <span class="badge badge-alternative">Alternative</span>
                                </div>
                                <div class="solution-price">30-45k€</div>
                                <ul class="solution-features">
                                    <li>✅ Approche MRP avancée</li>
                                    <li>⚠️ Configuration plus complexe</li>
                                    <li>✅ Évolutivité importante</li>
                                    <li>✅ Communauté active</li>
                                </ul>
                                <div class="solution-roi">ROI : 18-24 mois</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tech-category">
                        <h3>ETI (20-100 personnes)</h3>
                        <div class="tech-solutions">
                            <div class="solution-card recommended">
                                <div class="solution-header">
                                    <h4>Sage X3</h4>
                                    <span class="badge badge-recommended">Recommandé</span>
                                </div>
                                <div class="solution-price">60-120k€</div>
                                <ul class="solution-features">
                                    <li>✅ Robustesse enterprise</li>
                                    <li>✅ Modules métier étendus</li>
                                    <li>✅ Multi-sites natif</li>
                                    <li>✅ Écosystème riche</li>
                                </ul>
                                <div class="solution-roi">ROI : 15-20 mois</div>
                            </div>
                            
                            <div class="solution-card">
                                <div class="solution-header">
                                    <h4>GesCom</h4>
                                    <span class="badge badge-specialist">Spécialiste</span>
                                </div>
                                <div class="solution-price">80-150k€</div>
                                <ul class="solution-features">
                                    <li>✅ 100% métallurgie/négoce</li>
                                    <li>✅ Fonctionnalités très poussées</li>
                                    <li>⚠️ Courbe d'apprentissage</li>
                                    <li>✅ Support expert métier</li>
                                </ul>
                                <div class="solution-roi">ROI : 20-30 mois</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tech-category">
                        <h3>Grands Comptes (100+ personnes)</h3>
                        <div class="tech-solutions">
                            <div class="solution-card">
                                <div class="solution-header">
                                    <h4>Solutions Sur-Mesure</h4>
                                    <span class="badge badge-custom">Sur-mesure</span>
                                </div>
                                <div class="solution-price">150k€+</div>
                                <ul class="solution-features">
                                    <li>🔧 Architecture personnalisée</li>
                                    <li>🔗 Intégrations complexes</li>
                                    <li>📊 BI avancé intégré</li>
                                    <li>🌍 Multi-pays/devises</li>
                                </ul>
                                <div class="solution-roi">ROI : 24-36 mois</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 id="implementation">🚀 Plan d'Implémentation Type</h2>
                
                <div class="implementation-timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker">M-1</div>
                        <div class="timeline-content">
                            <h3>Préparation Projet</h3>
                            <ul>
                                <li>Constitution équipe projet</li>
                                <li>Audit détaillé processus</li>
                                <li>Définition cahier des charges</li>
                                <li>Sélection finale solution</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker">M1-3</div>
                        <div class="timeline-content">
                            <h3>Paramétrage & Configuration</h3>
                            <ul>
                                <li>Installation et paramétrage base</li>
                                <li>Configuration modules métier</li>
                                <li>Développement spécifiques</li>
                                <li>Tests unitaires</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker">M4-5</div>
                        <div class="timeline-content">
                            <h3>Formation & Tests</h3>
                            <ul>
                                <li>Formation utilisateurs clés</li>
                                <li>Tests d'intégration</li>
                                <li>Tests utilisateurs</li>
                                <li>Corrections et ajustements</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-marker">M6</div>
                        <div class="timeline-content">
                            <h3>Go-Live & Support</h3>
                            <ul>
                                <li>Migration données</li>
                                <li>Démarrage production</li>
                                <li>Support intensif J+30</li>
                                <li>Première mesure ROI</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="article-conclusion">
                    <h2>🎯 En Résumé</h2>
                    <div class="key-takeaways">
                        <div class="takeaway-item">
                            <strong>Méthodologie :</strong> Suivez notre processus en 4 étapes pour garantir le bon choix
                        </div>
                        <div class="takeaway-item">
                            <strong>Spécialisation :</strong> Privilégiez les solutions métier vs généralistes
                        </div>
                        <div class="takeaway-item">
                            <strong>ROI :</strong> Attendez-vous à 15-25% de gains de productivité en 12 mois
                        </div>
                        <div class="takeaway-item">
                            <strong>Support :</strong> L'expertise métier de l'intégrateur est critique
                        </div>
                    </div>
                </div>

                <div class="article-cta">
                    <h3>🚀 Besoin d'aide pour votre choix d'ERP ?</h3>
                    <p>Diagnostic gratuit personnalisé + recommandations sur-mesure</p>
                    <button class="btn btn-primary btn-large" data-calendly="true">
                        📅 Réserver mon diagnostic gratuit
                    </button>
                </div>
            `,
            relatedArticles: [
                'retour-experience-erp-metallurgie',
                'integration-tekla-erp',
                'cout-total-possession-erp'
            ],
            downloads: [
                {
                    title: 'Checklist Choix ERP Métallurgie',
                    description: 'Grille d\'évaluation complète pour votre sélection ERP',
                    format: 'PDF',
                    size: '2.1 MB',
                    url: '/downloads/checklist-erp-metallurgie.pdf'
                },
                {
                    title: 'Comparatif Solutions ERP 2025',
                    description: 'Tableau comparatif détaillé des principales solutions',
                    format: 'Excel',
                    size: '1.8 MB',
                    url: '/downloads/comparatif-erp-2025.xlsx'
                }
            ]
        },
        {
            id: 'retour-experience-erp-metallurgie',
            title: 'Success Stories : 3 Transformations ERP Réussies en Métallurgie',
            category: 'Cas Concrets',
            time: '12 min',
            readingTime: 12,
            publishDate: '2024-11-20',
            lastUpdate: '2024-12-10',
            author: 'Nicolas Dubain',
            excerpt: 'Découvrez comment 3 entreprises ont transformé leur business avec les bonnes solutions ERP. ROI, gains de productivité et retours d\'expérience authentiques.',
            tags: ['Success Story', 'Transformation', 'Résultats', 'ROI'],
            difficulty: 'Débutant',
            featured: true,
            seo: {
                metaDescription: 'Retours d\'expérience ERP charpente métallique. 3 cas clients avec ROI, gains mesurés et témoignages authentiques.',
                keywords: 'success story ERP, retour expérience ERP métallurgie, cas client ERP'
            },
            content: `
                <div class="article-intro">
                    <p class="lead">Découvrez 3 transformations ERP réussies avec des résultats concrets, des chiffres réels et des témoignages authentiques de nos clients.</p>
                </div>

                <div class="success-overview">
                    <h2>📊 Vue d'ensemble des résultats</h2>
                    <div class="overview-stats">
                        <div class="stat-card">
                            <div class="stat-value">€1.2M</div>
                            <div class="stat-label">Économies totales générées</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">18 mois</div>
                            <div class="stat-label">ROI moyen constaté</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">+22%</div>
                            <div class="stat-label">Productivité moyenne</div>
                        </div>
                    </div>
                </div>

                <div class="case-study">
                    <h2>🏭 Cas #1 : Charpente Industrielle Bretagne - 80 salariés</h2>
                    
                    <div class="case-header">
                        <div class="case-info">
                            <div class="case-sector">Charpente industrielle</div>
                            <div class="case-size">80 salariés, 12M€ CA</div>
                            <div class="case-location">Bretagne</div>
                        </div>
                        <div class="case-timeline">
                            <div class="timeline-item">Projet : 6 mois</div>
                            <div class="timeline-item">Go-live : Mars 2023</div>
                            <div class="timeline-item">Suivi : 18 mois</div>
                        </div>
                    </div>

                    <div class="case-solution">
                        <h3>💡 Solution Déployée</h3>
                        <div class="solution-details">
                            <div class="solution-main">
                                <strong>ERP Sage X3</strong> + modules métallurgie
                            </div>
                            <div class="solution-components">
                                <span class="component">Intégration Tekla</span>
                                <span class="component">Tableaux de bord BI</span>
                                <span class="component">Module qualité EN1090</span>
                                <span class="component">Interface machines découpe</span>
                            </div>
                        </div>
                    </div>

                    <div class="case-challenges">
                        <h3>🎯 Défis Relevés</h3>
                        <ul>
                            <li><strong>Chiffrage trop long :</strong> 6h par devis en moyenne</li>
                            <li><strong>Erreurs de production :</strong> 15% de rebuts</li>
                            <li><strong>Gestion stocks :</strong> Sur-stockage chronique</li>
                            <li><strong>Suivi projets :</strong> Manque de visibilité</li>
                        </ul>
                    </div>

                    <div class="case-results">
                        <h3>📈 Résultats après 12 mois</h3>
                        <div class="results-grid">
                            <div class="result-item positive">
                                <div class="result-metric">+3 points</div>
                                <div class="result-label">Marge brute</div>
                                <div class="result-detail">Impact direct rentabilité</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">÷2</div>
                                <div class="result-label">Délais de chiffrage</div>
                                <div class="result-detail">De 6h à 3h par devis</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">+15%</div>
                                <div class="result-label">Satisfaction clients</div>
                                <div class="result-detail">Enquête annuelle</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">8 mois</div>
                                <div class="result-label">ROI atteint</div>
                                <div class="result-detail">Objectif 12 mois</div>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial">
                        <blockquote>
                            "Oweo a dépassé nos attentes. Non seulement ils maîtrisent parfaitement notre métier, mais ils nous ont aussi aidés à repenser nos processus. Le résultat : 3 points de marge en plus et des équipes qui ont retrouvé du temps pour se consacrer à la valeur ajoutée."
                        </blockquote>
                        <cite>
                            <strong>Michel Dubois</strong><br>
                            Directeur Général - Charpente Industrielle Bretagne
                        </cite>
                    </div>
                </div>

                <div class="case-study">
                    <h2>🔧 Cas #2 : Serrurerie Métallerie Moderne - 25 salariés</h2>
                    
                    <div class="case-header">
                        <div class="case-info">
                            <div class="case-sector">Serrurerie métallerie</div>
                            <div class="case-size">25 salariés, 3.5M€ CA</div>
                            <div class="case-location">Pays de la Loire</div>
                        </div>
                        <div class="case-timeline">
                            <div class="timeline-item">Projet : 4 mois</div>
                            <div class="timeline-item">Go-live : Septembre 2023</div>
                            <div class="timeline-item">Suivi : 12 mois</div>
                        </div>
                    </div>

                    <div class="case-solution">
                        <h3>💡 Solution Déployée</h3>
                        <div class="solution-details">
                            <div class="solution-main">
                                <strong>2CM Manager</strong> + automatisation découpe
                            </div>
                            <div class="solution-components">
                                <span class="component">Interface AutoCAD</span>
                                <span class="component">Pilotage CNC</span>
                                <span class="component">Gestion mobile</span>
                                <span class="component">Facturation automatique</span>
                            </div>
                        </div>
                    </div>

                    <div class="case-challenges">
                        <h3>🎯 Défis Relevés</h3>
                        <ul>
                            <li><strong>Gestion artisanale :</strong> Excel et papier</li>
                            <li><strong>Erreurs de production :</strong> 20% de rebuts</li>
                            <li><strong>Suivi chantiers :</strong> Impossible en temps réel</li>
                            <li><strong>Facturation :</strong> Retards systématiques</li>
                        </ul>
                    </div>

                    <div class="case-results">
                        <h3>📈 Résultats après 6 mois</h3>
                        <div class="results-grid">
                            <div class="result-item positive">
                                <div class="result-metric">+20%</div>
                                <div class="result-label">Productivité atelier</div>
                                <div class="result-detail">Mesure temps/pièce</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">-60%</div>
                                <div class="result-label">Erreurs fabrication</div>
                                <div class="result-detail">Automatisation découpe</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">-40%</div>
                                <div class="result-label">Temps préparation</div>
                                <div class="result-detail">Plans automatiques</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">12 mois</div>
                                <div class="result-label">ROI réalisé</div>
                                <div class="result-detail">Objectif respecté</div>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial">
                        <blockquote>
                            "La transformation a été radicale. Nous sommes passés du papier-crayon à une solution moderne qui nous fait gagner 2h par jour. Nos clients sont ravis de pouvoir suivre l'avancement de leurs projets en temps réel."
                        </blockquote>
                        <cite>
                            <strong>Sophie Martin</strong><br>
                            Directrice - Serrurerie Métallerie Moderne
                        </cite>
                    </div>
                </div>

                <div class="case-study">
                    <h2>🏢 Cas #3 : Groupe Construction Métallique - 150 salariés</h2>
                    
                    <div class="case-header">
                        <div class="case-info">
                            <div class="case-sector">Construction métallique</div>
                            <div class="case-size">150 salariés, 25M€ CA</div>
                            <div class="case-location">Multi-sites France</div>
                        </div>
                        <div class="case-timeline">
                            <div class="timeline-item">Projet : 12 mois</div>
                            <div class="timeline-item">Go-live : Janvier 2023</div>
                            <div class="timeline-item">Suivi : 24 mois</div>
                        </div>
                    </div>

                    <div class="case-solution">
                        <h3>💡 Solution Déployée</h3>
                        <div class="solution-details">
                            <div class="solution-main">
                                <strong>Architecture modulaire</strong> + BI avancé
                            </div>
                            <div class="solution-components">
                                <span class="component">ERP multi-sites</span>
                                <span class="component">Consolidation groupe</span>
                                <span class="component">Portail client</span>
                                <span class="component">Analytics prédictifs</span>
                            </div>
                        </div>
                    </div>

                    <div class="case-challenges">
                        <h3>🎯 Défis Relevés</h3>
                        <ul>
                            <li><strong>Hétérogénéité :</strong> 3 ERP différents</li>
                            <li><strong>Consolidation :</strong> Reporting manuel</li>
                            <li><strong>Pilotage :</strong> Manque de visibilité groupe</li>
                            <li><strong>Stocks :</strong> Optimisation multi-sites</li>
                        </ul>
                    </div>

                    <div class="case-results">
                        <h3>📈 Résultats après 18 mois</h3>
                        <div class="results-grid">
                            <div class="result-item positive">
                                <div class="result-metric">Unifié</div>
                                <div class="result-label">Pilotage multi-sites</div>
                                <div class="result-detail">Dashboards temps réel</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">-25%</div>
                                <div class="result-label">Réduction stocks</div>
                                <div class="result-detail">Optimisation achats</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">95%</div>
                                <div class="result-label">Délais respectés</div>
                                <div class="result-detail">vs 75% avant</div>
                            </div>
                            <div class="result-item positive">
                                <div class="result-metric">24 mois</div>
                                <div class="result-label">ROI complexe</div>
                                <div class="result-detail">Gains multiples</div>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial">
                        <blockquote>
                            "Le projet le plus ambitieux de l'entreprise. Oweo a su gérer la complexité multi-sites et nous donner une vision consolidée de notre activité. Aujourd'hui, nous pilotage l'ensemble du groupe depuis un seul tableau de bord."
                        </blockquote>
                        <cite>
                            <strong>Pierre Rousseau</strong><br>
                            Directeur Général - Groupe Construction Métallique
                        </cite>
                    </div>
                </div>

                <div class="lessons-learned">
                    <h2>🎓 Enseignements Clés</h2>
                    
                    <div class="lesson-grid">
                        <div class="lesson-card">
                            <h3>🎯 Méthodologie</h3>
                            <p>L'approche terrain et la connaissance métier font la différence. Chaque projet nécessite une adaptation spécifique.</p>
                        </div>
                        
                        <div class="lesson-card">
                            <h3>👥 Accompagnement</h3>
                            <p>La formation et l'accompagnement représentent 40% du succès. Ne négligez jamais cet aspect.</p>
                        </div>
                        
                        <div class="lesson-card">
                            <h3>📊 Mesure</h3>
                            <p>Définissez des KPI précis dès le début et mesurez régulièrement. Ce qui n'est pas mesuré n'existe pas.</p>
                        </div>
                        
                        <div class="lesson-card">
                            <h3>⚡ Agilité</h3>
                            <p>Privilégiez un déploiement par phases avec des quick wins. Cela maintient la motivation des équipes.</p>
                        </div>
                    </div>
                </div>

                <div class="article-cta">
                    <h3>🚀 Votre projet de transformation ?</h3>
                    <p>Bénéficiez de notre expérience pour réussir votre transformation digitale</p>
                    <div class="cta-actions">
                        <button class="btn btn-primary" data-calendly="true">
                            📅 Diagnostic gratuit
                        </button>
                        <a href="/downloads/guide-transformation-erp.pdf" class="btn btn-secondary">
                            📥 Guide de transformation
                        </a>
                    </div>
                </div>
            `,
            relatedArticles: [
                'choix-erp-charpente-2025',
                'methodologie-projet-erp',
                'formation-utilisateurs-erp'
            ]
        }
    ],

    'consulting-strategique': [
        {
            id: 'diagnostic-maturite-digitale-2025',
            title: 'Diagnostic de Maturité Digitale : Votre Feuille de Route 2025',
            category: 'Diagnostic',
            time: '10 min',
            readingTime: 10,
            publishDate: '2024-12-01',
            author: 'Nicolas Dubain',
            excerpt: 'Évaluez votre niveau de maturité digitale et obtenez un plan d\'action personnalisé pour votre transformation. Grille d\'évaluation complète et recommandations expertes.',
            tags: ['Diagnostic', 'Stratégie', 'Roadmap', 'Maturité'],
            difficulty: 'Débutant',
            featured: true,
            content: `
                <div class="article-intro">
                    <p class="lead">Où en êtes-vous dans votre transformation digitale ? Découvrez notre grille d'évaluation et construisez votre feuille de route personnalisée.</p>
                </div>

                <h2>🎯 Les 4 Piliers de l'Excellence Digitale</h2>
                
                <div class="maturity-assessment">
                    <div class="pillar-card">
                        <div class="pillar-header">
                            <h3>📊 1. Gestion des Données</h3>
                            <div class="pillar-score">Score moyen marché : 4/10</div>
                        </div>
                        
                        <div class="maturity-levels">
                            <div class="level level-1">
                                <h4>Niveau 1 - Débutant</h4>
                                <ul>
                                    <li>❌ Plans papier uniquement</li>
                                    <li>❌ Données éparpillées</li>
                                    <li>❌ Pas de base centralisée</li>
                                    <li>❌ Reporting manuel</li>
                                </ul>
                            </div>
                            
                            <div class="level level-3">
                                <h4>Niveau 3 - Intermédiaire</h4>
                                <ul>
                                    <li>🟡 Plans numériques partiels</li>
                                    <li>🟡 Début de centralisation</li>
                                    <li>🟡 Reporting semi-automatique</li>
                                    <li>🟡 Traçabilité basique</li>
                                </ul>
                            </div>
                            
                            <div class="level level-5">
                                <h4>Niveau 5 - Expert</h4>
                                <ul>
                                    <li>✅ Plans 100% numériques exploitables</li>
                                    <li>✅ Base données matières centralisée</li>
                                    <li>✅ Reporting CA temps réel</li>
                                    <li>✅ Traçabilité complète projets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="pillar-card">
                        <div class="pillar-header">
                            <h3>⚡ 2. Automatisation Intelligente</h3>
                            <div class="pillar-score">Score moyen marché : 3/10</div>
                        </div>
                        
                        <div class="maturity-levels">
                            <div class="level level-1">
                                <h4>Niveau 1 - Manuel</h4>
                                <ul>
                                    <li>❌ Chiffrage 100% manuel</li>
                                    <li>❌ Saisies multiples</li>
                                    <li>❌ Pas d'alertes</li>
                                    <li>❌ Synchronisation manuelle</li>
                                </ul>
                            </div>
                            
                            <div class="level level-3">
                                <h4>Niveau 3 - Partiellement automatisé</h4>
                                <ul>
                                    <li>🟡 Chiffrage assisté</li>
                                    <li>🟡 Quelques automatisations</li>
                                    <li>🟡 Alertes basiques</li>
                                    <li>🟡 Intégrations ponctuelles</li>
                                </ul>
                            </div>
                            
                            <div class="level level-5">
                                <h4>Niveau 5 - Intelligent</h4>
                                <ul>
                                    <li>✅ Chiffrage automatisé avec bases</li>
                                    <li>✅ Génération auto OF depuis commandes</li>
                                    <li>✅ Alertes prédictives délais/stocks</li>
                                    <li>✅ Synchronisation CAO-ERP temps réel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="self-assessment">
                    <h2>📋 Auto-Évaluation Rapide</h2>
                    <p>Répondez honnêtement à ces questions pour évaluer votre maturité :</p>
                    
                    <div class="assessment-questions">
                        <div class="question-group">
                            <h3>Gestion des Données</h3>
                            <div class="question">
                                <p>Pouvez-vous sortir votre rentabilité par client en moins de 5 minutes ?</p>
                                <div class="answer-options">
                                    <label><input type="radio" name="q1" value="1"> Non, impossible</label>
                                    <label><input type="radio" name="q1" value="3"> Oui, mais en 1-2h</label>
                                    <label><input type="radio" name="q1" value="5"> Oui, en temps réel</label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="question-group">
                            <h3>Automatisation</h3>
                            <div class="question">
                                <p>Combien de temps pour chiffrer un projet standard ?</p>
                                <div class="answer-options">
                                    <label><input type="radio" name="q2" value="1"> Plus de 4h</label>
                                    <label><input type="radio" name="q2" value="3"> 2-4h</label>
                                    <label><input type="radio" name="q2" value="5"> Moins de 2h</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" onclick="calculateMaturityScore()">
                        Calculer mon score de maturité
                    </button>
                    
                    <div id="maturity-result" class="maturity-result" style="display: none;">
                        <h3>Votre Score de Maturité</h3>
                        <div class="score-display">
                            <div class="score-number" id="score-value">0</div>
                            <div class="score-label">/ 10</div>
                        </div>
                        <div class="score-interpretation" id="score-text"></div>
                        <div class="score-actions">
                            <button class="btn btn-primary" data-calendly="true">
                                Diagnostic complet gratuit
                            </button>
                        </div>
                    </div>
                </div>

                <script>
                function calculateMaturityScore() {
                    const q1 = document.querySelector('input[name="q1"]:checked');
                    const q2 = document.querySelector('input[name="q2"]:checked');
                    
                    if (!q1 || !q2) {
                        alert('Veuillez répondre à toutes les questions');
                        return;
                    }
                    
                    const score = (parseInt(q1.value) + parseInt(q2.value)) / 2;
                    const result = document.getElementById('maturity-result');
                    const scoreValue = document.getElementById('score-value');
                    const scoreText = document.getElementById('score-text');
                    
                    scoreValue.textContent = score.toFixed(1);
                    
                    if (score < 3) {
                        scoreText.innerHTML = '<strong>Débutant :</strong> Votre transformation digitale est à ses débuts. Un diagnostic complet vous aidera à identifier les priorités.';
                        scoreText.className = 'score-interpretation score-beginner';
                    } else if (score < 4) {
                        scoreText.innerHTML = '<strong>Intermédiaire :</strong> Vous avez déjà entrepris quelques actions. Il est temps d\'accélérer avec une stratégie structurée.';
                        scoreText.className = 'score-interpretation score-intermediate';
                    } else {
                        scoreText.innerHTML = '<strong>Avancé :</strong> Vous êtes sur la bonne voie ! Nos experts peuvent vous aider à optimiser encore davantage.';
                        scoreText.className = 'score-interpretation score-advanced';
                    }
                    
                    result.style.display = 'block';
                    result.scrollIntoView({ behavior: 'smooth' });
                }
                </script>
            `
        }
    ],

    // Autres catégories d'articles...
    'accompagnement-projet': [],
    'en1090': [],
    'ia-projets': [],
    'optimisation': []
};

// Fonction utilitaire pour récupérer un article par ID
window.OweoData.getArticleById = function(articleId) {
    for (const category in this.articles) {
        const article = this.articles[category].find(a => a.id === articleId);
        if (article) {
            return { ...article, category };
        }
    }
    return null;
};

// Fonction pour récupérer les articles d'une catégorie
window.OweoData.getArticlesByCategory = function(category) {
    return this.articles[category] || [];
};

// Fonction pour récupérer les articles en vedette
window.OweoData.getFeaturedArticles = function() {
    const featured = [];
    for (const category in this.articles) {
        featured.push(...this.articles[category].filter(a => a.featured));
    }
    return featured.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
};

// Fonction pour rechercher des articles
window.OweoData.searchArticles = function(query, category = null) {
    const searchIn = category ? [category] : Object.keys(this.articles);
    const results = [];
    
    searchIn.forEach(cat => {
        const articles = this.articles[cat] || [];
        const filtered = articles.filter(article => {
            const searchText = `${article.title} ${article.excerpt} ${article.tags.join(' ')}`.toLowerCase();
            return searchText.includes(query.toLowerCase());
        });
        results.push(...filtered.map(a => ({ ...a, category: cat })));
    });
    
    return results;
};

console.log('📚 Articles data loaded');