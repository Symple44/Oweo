// js/pages/services.js - Page Services Métallurgie CORRIGÉE

window.pages = window.pages || {};

window.pages.services = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <!-- CORRECTION : Bouton retour sans onclick inline -->
                    <button class="btn-back" type="button" aria-label="Retourner à l'accueil">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title gradient-text">Nos Services pour la Métallurgie</h1>
                        <p class="section-subtitle">
                            Solutions complètes pour chaudronnerie, serrurerie et charpente métallique.<br>
                            <strong>De l'audit gratuit</strong> à l'accompagnement complet de votre transformation.
                        </p>
                    </div>

                    <!-- Stats services -->
                    <div class="hero-stats mb-3">
                        <div class="stat">
                            <div class="stat-number">15+</div>
                            <div class="stat-label">Projets réussis</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Clients satisfaits</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">6 mois</div>
                            <div class="stat-label">Support inclus</div>
                        </div>
                    </div>

                    <!-- Offres de services -->
                    <div class="section-header">
                        <h2 class="section-title">📋 Nos Offres Adaptées à Vos Besoins</h2>
                        <p class="section-subtitle">3 formules pour accompagner votre transformation</p>
                    </div>
                    
                    <div class="services-offers" id="services-offers"></div>

                    <!-- Expertise sectorielle -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🏭 Notre Expertise Sectorielle</h2>
                        <p class="section-subtitle">Spécialisation par métier de la métallurgie</p>
                    </div>
                    
                    <div class="sector-expertise" id="sector-expertise"></div>

                    <!-- Méthodologie projet -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">⚡ Notre Méthodologie Projet</h2>
                        <p class="section-subtitle">6 étapes pour garantir votre succès</p>
                    </div>
                    
                    <div class="project-methodology" id="project-methodology"></div>

                    <!-- Garanties -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🛡️ Nos Engagements</h2>
                    </div>
                    
                    <div class="guarantees" id="guarantees"></div>

                    <!-- Tarification -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">💰 Tarification Transparente</h2>
                        <p class="section-subtitle">Investissement adapté à votre taille d'entreprise</p>
                    </div>
                    
                    <div class="pricing-info" id="pricing-info"></div>

                    <!-- CTA -->
                    <div class="article-cta mt-3">
                        <h3>🚀 Commençons par un Diagnostic Gratuit</h3>
                        <p>30 minutes pour identifier vos priorités et estimer vos gains potentiels</p>
                        <div class="cta-actions">
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                📅 Réserver mon Diagnostic
                            </button>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary btn-large">
                                📧 Demander un Devis
                            </a>
                        </div>
                        <div class="cta-urgency">
                            <p>⚡ <strong>Offre limitée :</strong> 5 diagnostics gratuits par mois</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('📋 Initializing Services page...');
        
        // CORRECTION : Setup du bouton retour en premier
        this.setupBackButton();
        
        // Ensuite le reste du contenu
        this.renderServicesOffers();
        this.renderSectorExpertise();
        this.renderProjectMethodology();
        this.renderGuarantees();
        this.renderPricingInfo();
        this.bindEvents();
        
        console.log('📋 Services page initialized');
    },

    // CORRECTION : Méthode dédiée pour le bouton retour
    setupBackButton() {
        console.log('Setting up back button for services page');
        
        // Utiliser la fonction globale si disponible
        if (typeof window.setupBackButton === 'function') {
            window.setupBackButton();
        } else {
            // Fallback manuel
            const backButton = document.querySelector('.btn-back');
            if (backButton) {
                // Nettoyer les onclick existants
                backButton.removeAttribute('onclick');
                
                // Ajouter le bon event listener
                backButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Services back button clicked');
                    this.navigateHome();
                });
                
                // Support clavier
                backButton.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.navigateHome();
                    }
                });
            }
        }
    },

    // CORRECTION : Méthode de navigation robuste
    navigateHome() {
        console.log('Navigating to home from services page');
        
        try {
            // Option 1 : Router global
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate('/');
                return;
            }
            
            // Option 2 : Router de l'app
            if (window.oweoApp && window.oweoApp.router) {
                window.oweoApp.router.navigate('/');
                return;
            }
            
            // Option 3 : Navigation component
            if (window.navigation && typeof window.navigation.navigateToPage === 'function') {
                window.navigation.navigateToPage('home');
                return;
            }
            
            // Option 4 : Hash fallback
            window.location.hash = '';
            
        } catch (error) {
            console.error('Navigation error from services:', error);
            // Dernier fallback
            window.location.href = window.location.origin + window.location.pathname;
        }
    },

    renderServicesOffers() {
        const offers = [
            {
                id: 'diagnostic',
                name: 'Diagnostic Digital',
                badge: 'Gratuit',
                subtitle: 'Point de départ idéal',
                duration: '2-3 jours',
                price: '0€',
                priceNote: 'Sans engagement',
                description: 'Audit complet pour identifier vos priorités',
                includes: [
                    'Visite sur site (atelier + bureaux)',
                    'Analyse processus complets',
                    'Identification gains rapides',
                    'Rapport détaillé 20+ pages',
                    'Plan action personnalisé',
                    'Estimation ROI'
                ],
                results: 'Vision claire + feuille de route',
                ideal: 'Toute entreprise de métallurgie',
                popular: false
            },
            {
                id: 'strategie',
                name: 'Accompagnement Stratégique',
                badge: 'Best-seller',
                subtitle: 'Transformation pilotée',
                duration: '3-6 mois',
                price: 'Sur devis',
                priceNote: '15-50k€ selon taille',
                description: 'Accompagnement complet avec garantie résultats',
                includes: [
                    'Diagnostic approfondi inclus',
                    'Sélection solutions optimales',
                    'Gestion projet complète',
                    'Négociation fournisseurs',
                    'Formation équipes',
                    'Support 6 mois inclus'
                ],
                results: 'Transformation réussie garantie',
                ideal: 'PME 10-100 salariés',
                popular: true
            },
            {
                id: 'premium',
                name: 'Transformation Clé en Main',
                badge: 'Premium',
                subtitle: 'Délégation totale',
                duration: '6-12 mois',
                price: 'Sur mesure',
                priceNote: '50k€+',
                description: 'Prise en charge intégrale de A à Z',
                includes: [
                    'Tout l\'accompagnement stratégique',
                    'Déploiement multi-sites',
                    'Développements spécifiques',
                    'Intégrations complexes',
                    'Conduite changement avancée',
                    'Support illimité 1 an'
                ],
                results: 'Excellence opérationnelle',
                ideal: 'ETI et groupes',
                popular: false
            }
        ];

        const container = document.getElementById('services-offers');
        if (!container) return;

        container.innerHTML = `
            <div class="offers-grid">
                ${offers.map(offer => `
                    <div class="offer-card ${offer.popular ? 'offer-popular' : ''}">
                        ${offer.popular ? '<div class="offer-badge">⭐ Le plus choisi</div>' : ''}
                        <div class="offer-header">
                            <h3>${offer.name}</h3>
                            <p class="offer-subtitle">${offer.subtitle}</p>
                            <div class="offer-price">
                                <span class="price-value">${offer.price}</span>
                                <span class="price-note">${offer.priceNote}</span>
                            </div>
                        </div>
                        
                        <p class="offer-description">${offer.description}</p>
                        
                        <div class="offer-meta">
                            <span>⏱️ ${offer.duration}</span>
                            <span>🎯 ${offer.ideal}</span>
                        </div>
                        
                        <div class="offer-includes">
                            <h4>Inclus :</h4>
                            <ul>
                                ${offer.includes.map(item => `<li>✓ ${item}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="offer-result">
                            <strong>📈 Résultat :</strong> ${offer.results}
                        </div>
                        
                        <button class="btn btn-primary btn-full" data-calendly="true" data-service="${offer.id}">
                            ${offer.id === 'diagnostic' ? '📅 Réserver (gratuit)' : '📞 Me contacter'}
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderSectorExpertise() {
        const sectors = [
            {
                name: 'Charpente Métallique',
                icon: '🏗️',
                expertise: 'Expertise complète',
                specifics: [
                    'Intégration Tekla native',
                    'Gestion EN1090 Exc.3',
                    'Optimisation découpe',
                    'Suivi montage chantier'
                ],
                clients: '8 entreprises accompagnées'
            },
            {
                name: 'Serrurerie-Métallerie',
                icon: '🔧',
                expertise: 'Spécialisation poussée',
                specifics: [
                    'Chiffrage sur-mesure',
                    'Planning atelier optimisé',
                    'Gestion poses multiples',
                    'Suivi SAV intégré'
                ],
                clients: '5 entreprises transformées'
            },
            {
                name: 'Chaudronnerie',
                icon: '⚙️',
                expertise: 'Processus maîtrisés',
                specifics: [
                    'Traçabilité matières',
                    'Contrôle qualité renforcé',
                    'Gestion sous-traitance',
                    'Conformité normative'
                ],
                clients: '4 projets réussis'
            },
            {
                name: 'Tôlerie Fine',
                icon: '📐',
                expertise: 'Solutions adaptées',
                specifics: [
                    'Optimisation matière',
                    'Pilotage laser/pliage',
                    'Devis automatisés',
                    'Stock temps réel'
                ],
                clients: '3 clients satisfaits'
            }
        ];

        const container = document.getElementById('sector-expertise');
        if (!container) return;

        container.innerHTML = `
            <div class="sectors-grid">
                ${sectors.map(sector => `
                    <div class="sector-card">
                        <div class="sector-header">
                            <span class="sector-icon">${sector.icon}</span>
                            <h4>${sector.name}</h4>
                        </div>
                        <p class="sector-expertise">${sector.expertise}</p>
                        
                        <div class="sector-specifics">
                            <h5>Points forts :</h5>
                            <ul>
                                ${sector.specifics.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="sector-clients">
                            <strong>✅ ${sector.clients}</strong>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderProjectMethodology() {
        const steps = [
            {
                number: '1',
                title: 'Cadrage',
                duration: '1 semaine',
                activities: ['Définition périmètre', 'Constitution équipe', 'Planning détaillé'],
                critical: true
            },
            {
                number: '2',
                title: 'Analyse',
                duration: '2-3 semaines',
                activities: ['Audit terrain', 'Cartographie AS-IS', 'Identification gains'],
                critical: true
            },
            {
                number: '3',
                title: 'Conception',
                duration: '2-4 semaines',
                activities: ['Design TO-BE', 'Choix solutions', 'Validation budget'],
                critical: true
            },
            {
                number: '4',
                title: 'Réalisation',
                duration: '1-3 mois',
                activities: ['Paramétrage', 'Développements', 'Tests complets'],
                critical: false
            },
            {
                number: '5',
                title: 'Déploiement',
                duration: '2-4 semaines',
                activities: ['Migration données', 'Formation users', 'Go-live'],
                critical: true
            },
            {
                number: '6',
                title: 'Support',
                duration: '6 mois',
                activities: ['Assistance illimitée', 'Optimisations', 'Mesure ROI'],
                critical: false
            }
        ];

        const container = document.getElementById('project-methodology');
        if (!container) return;

        container.innerHTML = `
            <div class="methodology-steps">
                ${steps.map(step => `
                    <div class="method-step ${step.critical ? 'step-critical' : ''}">
                        <div class="step-header">
                            <span class="step-number">${step.number}</span>
                            <h4>${step.title}</h4>
                            ${step.critical ? '<span class="critical-badge">Critique</span>' : ''}
                        </div>
                        <p class="step-duration">⏱️ ${step.duration}</p>
                        <ul class="step-activities">
                            ${step.activities.map(activity => `<li>${activity}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <div class="methodology-note">
                <p>📌 <strong>Note :</strong> Planning adapté à chaque projet. Méthode agile pour flexibilité maximale.</p>
            </div>
        `;
    },

    renderGuarantees() {
        const guarantees = [
            {
                icon: '✅',
                title: 'Résultats Garantis',
                description: 'Si objectifs non atteints, nous reprenons le projet sans frais'
            },
            {
                icon: '🎯',
                title: '100% de Réussite',
                description: '15 projets déployés, 15 succès. Track record parfait.'
            },
            {
                icon: '📞',
                title: 'Support Illimité',
                description: 'Assistance téléphonique illimitée pendant 6 mois'
            },
            {
                icon: '💰',
                title: 'ROI Transparent',
                description: 'Calcul ROI avant projet et validation à 6 mois'
            },
            {
                icon: '⏰',
                title: 'Délais Respectés',
                description: 'Planning garanti ou compensation financière'
            },
            {
                icon: '🔒',
                title: 'Budget Maîtrisé',
                description: 'Devis ferme, pas de surprise'
            }
        ];

        const container = document.getElementById('guarantees');
        if (!container) return;

        container.innerHTML = `
            <div class="guarantees-grid">
                ${guarantees.map(guarantee => `
                    <div class="guarantee-card">
                        <div class="guarantee-icon">${guarantee.icon}</div>
                        <h4>${guarantee.title}</h4>
                        <p>${guarantee.description}</p>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderPricingInfo() {
        const pricing = [
            {
                company: 'TPE (< 10 salariés)',
                diagnostic: 'Gratuit',
                strategy: '5-15k€',
                complete: '20-40k€',
                roi: '12-18 mois'
            },
            {
                company: 'PME (10-50 salariés)',
                diagnostic: 'Gratuit',
                strategy: '15-30k€',
                complete: '40-80k€',
                roi: '15-24 mois'
            },
            {
                company: 'ETI (50-250 salariés)',
                diagnostic: 'Gratuit',
                strategy: '30-50k€',
                complete: '80-200k€',
                roi: '18-30 mois'
            },
            {
                company: 'Grands Groupes',
                diagnostic: 'Sur devis',
                strategy: 'Sur mesure',
                complete: 'Sur mesure',
                roi: 'Selon projet'
            }
        ];

        const container = document.getElementById('pricing-info');
        if (!container) return;

        container.innerHTML = `
            <div class="pricing-table-wrapper">
                <table class="pricing-table">
                    <thead>
                        <tr>
                            <th>Taille entreprise</th>
                            <th>Diagnostic</th>
                            <th>Accompagnement</th>
                            <th>Clé en main</th>
                            <th>ROI moyen</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${pricing.map(price => `
                            <tr>
                                <td><strong>${price.company}</strong></td>
                                <td class="price-free">${price.diagnostic}</td>
                                <td>${price.strategy}</td>
                                <td>${price.complete}</td>
                                <td class="roi-time">${price.roi}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="pricing-notes">
                <p>💡 <strong>Financement :</strong> Éligible aux aides France Num, crédit d'impôt innovation, subventions régionales.</p>
                <p>📊 <strong>Paiement :</strong> Échelonnement possible sur la durée du projet.</p>
            </div>
        `;
    },

    bindEvents() {
        // Calendly avec tracking service
        document.querySelectorAll('[data-calendly]').forEach(button => {
            button.addEventListener('click', (e) => {
                const service = button.dataset.service || 'general';
                this.openCalendly(service);
            });
        });
    },

    openCalendly(serviceType = 'general') {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly,
                prefill: {
                    customAnswers: {
                        a1: `Service intéressé: ${serviceType}`
                    }
                }
            });
        } else {
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }
};

console.log('📋 Services page loaded');