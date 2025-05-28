// js/pages/services.js - Page Services

window.pages = window.pages || {};

window.pages.services = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title gradient-text">Nos Services</h1>
                        <p class="section-subtitle">
                            Solutions complètes pour votre transformation digitale.<br>
                            <strong>Accompagnement sur-mesure</strong> de l'audit à la réussite de votre projet.
                        </p>
                    </div>

                    <!-- Hero Stats Services -->
                    <div class="hero-stats mb-3">
                        <div class="stat">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Projets réussis</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">18 mois</div>
                            <div class="stat-label">ROI moyen</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">6 mois</div>
                            <div class="stat-label">Support inclus</div>
                        </div>
                    </div>

                    <!-- Nos Offres de Services -->
                    <div class="section-header">
                        <h2 class="section-title">💼 Nos Offres de Services</h2>
                        <p class="section-subtitle">Trois formules adaptées à vos besoins et votre budget</p>
                    </div>
                    
                    <div class="services-grid" id="services-grid"></div>

                    <!-- Processus Détaillé -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🎯 Notre Processus en Détail</h2>
                        <p class="section-subtitle">Méthodologie éprouvée en 6 étapes pour garantir votre succès</p>
                    </div>

                    <div class="detailed-process" id="detailed-process"></div>

                    <!-- Équipe et Expertise -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">👥 Notre Équipe d'Experts</h2>
                        <p class="section-subtitle">Des spécialistes métier pour vous accompagner</p>
                    </div>
                    
                    <div class="team-expertise" id="team-expertise"></div>

                    <!-- Garanties et Engagements -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🛡️ Nos Garanties</h2>
                        <p class="section-subtitle">Vos assurances pour un projet réussi</p>
                    </div>
                    
                    <div class="guarantees-grid" id="guarantees-grid"></div>

                    <!-- Témoignages Clients -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">🗣️ Ce que disent nos Clients</h2>
                        <p class="section-subtitle">Retours d'expérience authentiques</p>
                    </div>
                    
                    <div class="client-testimonials" id="client-testimonials"></div>

                    <!-- FAQ Services -->
                    <div class="section-header mt-3">
                        <h2 class="section-title">❓ Questions sur nos Services</h2>
                        <p class="section-subtitle">Réponses aux questions les plus fréquentes</p>
                    </div>
                    
                    <div class="faq-container" id="services-faq"></div>

                    <!-- CTA Final -->
                    <div class="article-cta mt-3">
                        <h3>🚀 Prêt à Démarrer votre Transformation ?</h3>
                        <p>Commençons par un diagnostic gratuit pour identifier vos priorités</p>
                        <div class="cta-actions">
                            <button class="btn btn-primary btn-large" data-calendly="true">
                                📅 Diagnostic gratuit (30min)
                            </button>
                            <a href="mailto:${OweoConfig.contact.email}" class="btn btn-secondary btn-large">
                                📧 Demande de devis
                            </a>
                        </div>
                        <div class="cta-urgency">
                            <p>⚡ <strong>Réponse sous 24h</strong> pour toute demande reçue en semaine</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        this.renderServices();
        this.renderDetailedProcess();
        this.renderTeamExpertise();
        this.renderGuarantees();
        this.renderClientTestimonials();
        this.renderServicesFAQ();
        this.bindEvents();
        
        console.log('💼 Services page initialized');
    },

    renderServices() {
        const services = [
            {
                id: 'diagnostic',
                name: 'Diagnostic Digital Gratuit',
                subtitle: 'Votre point de départ',
                description: 'Audit complet de votre maturité digitale avec recommandations personnalisées',
                duration: '2-3 jours',
                price: 'Gratuit',
                priceNote: 'Sans engagement',
                popular: false,
                includes: [
                    'Audit processus complet sur site',
                    'Analyse de vos outils actuels',
                    'Identification des gains prioritaires',
                    'Recommandations concrètes',
                    'Rapport détaillé avec plan d\'action',
                    'Estimation ROI personnalisée'
                ],
                deliverables: [
                    'Rapport d\'audit 20-30 pages',
                    'Plan d\'action prioritaire',
                    'Estimation budgétaire',
                    'Timeline de projet'
                ],
                ideal: 'Toute entreprise souhaitant faire le point sur sa maturité digitale',
                cta: 'Réserver maintenant',
                color: 'blue'
            },
            {
                id: 'conseil-strategique',
                name: 'Conseil Stratégique',
                subtitle: 'Votre feuille de route',
                description: 'Définition complète de votre stratégie de transformation avec business case détaillé',
                duration: '1-2 semaines',
                price: 'Sur devis',
                priceNote: 'À partir de 5k€',
                popular: true,
                includes: [
                    'Business case détaillé avec ROI précis',
                    'Roadmap de transformation personnalisée',
                    'Benchmark des solutions du marché',
                    'Plan de financement optimisé',
                    'Analyse des risques et mitigation',
                    'Présentation direction/actionnaires'
                ],
                deliverables: [
                    'Business case complet',
                    'Roadmap transformation',
                    'Dossier de financement',
                    'Présentation exécutive'
                ],
                ideal: 'Entreprises prêtes à lancer leur transformation avec une stratégie solide',
                cta: 'Discuter du projet',
                color: 'green'
            },
            {
                id: 'accompagnement-complet',
                name: 'Accompagnement Complet',
                subtitle: 'Votre partenaire de réussite',
                description: 'Prise en charge complète de votre projet de A à Z avec garantie de résultats',
                duration: '3-6 mois',
                price: 'Sur devis',
                priceNote: 'Selon envergure',
                popular: false,
                includes: [
                    'Gestion de projet complète',
                    'Sélection et négociation fournisseurs',
                    'Paramétrage et déploiement solution',
                    'Formation complète des équipes',
                    'Support technique illimité 6 mois',
                    'Suivi performance et optimisations'
                ],
                deliverables: [
                    'Solution déployée et opérationnelle',
                    'Équipes formées et autonomes',
                    'Documentation complète',
                    'Plan de maintenance',
                    'Bilan de performance'
                ],
                ideal: 'Entreprises souhaitant déléguer complètement leur projet de transformation',
                cta: 'Lancer le projet',
                color: 'purple'
            }
        ];

        const container = document.getElementById('services-grid');
        if (!container) return;

        container.innerHTML = services.map(service => `
            <div class="service-card ${service.popular ? 'service-card--popular' : ''}" data-service="${service.id}">
                ${service.popular ? '<div class="service-badge">⭐ Plus populaire</div>' : ''}
                
                <div class="service-header">
                    <h3 class="service-name">${service.name}</h3>
                    <p class="service-subtitle">${service.subtitle}</p>
                    <div class="service-price">
                        <span class="price-value">${service.price}</span>
                        <span class="price-note">${service.priceNote}</span>
                    </div>
                </div>
                
                <div class="service-content">
                    <p class="service-description">${service.description}</p>
                    
                    <div class="service-meta">
                        <div class="service-duration">
                            <span class="meta-icon">⏱️</span>
                            <span>Durée : ${service.duration}</span>
                        </div>
                        <div class="service-ideal">
                            <span class="meta-icon">🎯</span>
                            <span>Idéal pour : ${service.ideal}</span>
                        </div>
                    </div>
                    
                    <div class="service-includes">
                        <h4>✅ Inclus dans cette offre :</h4>
                        <ul>
                            ${service.includes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="service-deliverables">
                        <h4>📦 Livrables :</h4>
                        <ul>
                            ${service.deliverables.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="service-footer">
                    <button class="btn btn-primary btn-full" 
                            data-calendly="true" 
                            data-service-type="${service.id}">
                        ${service.cta}
                    </button>
                    <p class="service-note">
                        ${service.id === 'diagnostic' ? 
                            'Aucun engagement, résultats garantis en 3 jours' : 
                            'Devis personnalisé sous 48h'
                        }
                    </p>
                </div>
            </div>
        `).join('');
    },

    renderDetailedProcess() {
        const detailedSteps = [
            {
                step: 1,
                title: 'Diagnostic Expert',
                description: 'Immersion complète dans votre environnement pour comprendre vos enjeux',
                duration: '2-3 jours',
                activities: [
                    'Visite des ateliers et bureaux',
                    'Interviews des utilisateurs clés',
                    'Analyse des flux et processus',
                    'Audit des outils existants',
                    'Identification des goulots d\'étranglement'
                ],
                deliverable: 'Rapport d\'audit complet',
                tools: ['Grilles d\'évaluation', 'Chronométrage', 'Mapping processus'],
                outcome: 'Vision claire de votre situation actuelle'
            },
            {
                step: 2,
                title: 'Stratégie & ROI',
                description: 'Élaboration de votre stratégie avec calcul précis du retour sur investissement',
                duration: '1 semaine',
                activities: [
                    'Analyse approfondie des résultats d\'audit',
                    'Benchmark des solutions disponibles',
                    'Calcul du ROI pour chaque scénario',
                    'Définition de la roadmap optimale',
                    'Préparation du business case'
                ],
                deliverable: 'Business case détaillé',
                tools: ['Modèles ROI', 'Matrices décision', 'Planning projet'],
                outcome: 'Plan stratégique validé et budgétisé'
            },
            {
                step: 3,
                title: 'Sélection Solution',
                description: 'Choix de la solution optimale basé sur vos critères spécifiques',
                duration: '2-3 semaines',
                activities: [
                    'Définition du cahier des charges',
                    'Consultation des éditeurs/intégrateurs',
                    'Organisation de démonstrations',
                    'Tests sur vos données (POC)',
                    'Négociation des conditions'
                ],
                deliverable: 'Recommandation argumentée',
                tools: ['Cahier des charges', 'Grilles comparatives', 'POC'],
                outcome: 'Solution sélectionnée et contrat négocié'
            },
            {
                step: 4,
                title: 'Déploiement',
                description: 'Mise en œuvre de la solution avec méthodologie agile',
                duration: '4-8 semaines',
                activities: [
                    'Paramétrage de la solution',
                    'Développement des spécifiques',
                    'Intégration avec l\'existant',
                    'Tests fonctionnels et techniques',
                    'Préparation de la bascule'
                ],
                deliverable: 'Solution opérationnelle',
                tools: ['Méthodologie agile', 'Tests automatisés', 'Environnements'],
                outcome: 'Système prêt pour la production'
            },
            {
                step: 5,
                title: 'Formation',
                description: 'Formation complète de vos équipes sur leur nouvel environnement',
                duration: '1-2 semaines',
                activities: [
                    'Formation des formateurs internes',
                    'Sessions de formation par métier',
                    'Ateliers pratiques sur cas réels',
                    'Création de la documentation',
                    'Certification des utilisateurs'
                ],
                deliverable: 'Équipes autonomes',
                tools: ['Supports formation', 'Simulateurs', 'E-learning'],
                outcome: 'Utilisateurs maîtrisant la solution'
            },
            {
                step: 6,
                title: 'Support & Optimisation',
                description: 'Accompagnement post-démarrage et mesure des performances',
                duration: '6 mois',
                activities: [
                    'Support technique illimité',
                    'Suivi des indicateurs de performance',
                    'Optimisations et ajustements',
                    'Formations complémentaires',
                    'Validation du ROI'
                ],
                deliverable: 'Bilan de performance',
                tools: ['Helpdesk', 'Monitoring', 'Tableaux de bord'],
                outcome: 'Objectifs atteints et ROI validé'
            }
        ];

        const container = document.getElementById('detailed-process');
        if (!container) return;

        container.innerHTML = `
            <div class="process-timeline">
                ${detailedSteps.map(step => `
                    <div class="process-step-detailed">
                        <div class="step-marker-detailed">
                            <span class="step-number">${step.step}</span>
                        </div>
                        <div class="step-content-detailed">
                            <div class="step-header">
                                <h3 class="step-title">${step.title}</h3>
                                <div class="step-duration">⏱️ ${step.duration}</div>
                            </div>
                            <p class="step-description">${step.description}</p>
                            
                            <div class="step-details">
                                <div class="step-activities">
                                    <h4>🎯 Activités clés :</h4>
                                    <ul>
                                        ${step.activities.map(activity => `<li>${activity}</li>`).join('')}
                                    </ul>
                                </div>
                                
                                <div class="step-tools">
                                    <h4>🛠️ Outils utilisés :</h4>
                                    <div class="tools-list">
                                        ${step.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="step-result">
                                <div class="deliverable">
                                    <strong>📦 Livrable :</strong> ${step.deliverable}
                                </div>
                                <div class="outcome">
                                    <strong>✅ Résultat :</strong> ${step.outcome}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderTeamExpertise() {
        const expertiseAreas = [
            {
                role: 'Expert Métier',
                name: 'Nicolas Dubain',
                description: 'Spécialiste de la transformation digitale en métallurgie',
                experience: '10+ années',
                specialties: [
                    'Charpente métallique et serrurerie',
                    'Processus industriels',
                    'Conformité EN1090',
                    'Optimisation production'
                ],
                certifications: ['Sage X3 Certified', 'EN1090 Expert', 'Lean Manufacturing'],
                approach: 'Approche terrain et résultats mesurables'
            },
            {
                role: 'Architecte Solutions',
                name: 'Équipe Technique',
                description: 'Experts en intégration et développement sur-mesure',
                experience: '8+ années',
                specialties: [
                    'Intégrations ERP complexes',
                    'Développement spécifique',
                    'Business Intelligence',
                    'Intelligence Artificielle'
                ],
                certifications: ['Microsoft Partner', 'AWS Certified', 'Sage Partner'],
                approach: 'Solutions robustes et évolutives'
            },
            {
                role: 'Chef de Projet',
                name: 'Méthodologie Agile',
                description: 'Gestion de projet avec méthodologie éprouvée',
                experience: '6+ années',
                specialties: [
                    'Gestion de projet agile',
                    'Conduite du changement',
                    'Formation utilisateurs',
                    'Support technique'
                ],
                certifications: ['PMP Certified', 'Scrum Master', 'ITIL Foundation'],
                approach: 'Accompagnement humain et technique'
            }
        ];

        const container = document.getElementById('team-expertise');
        if (!container) return;

        container.innerHTML = `
            <div class="team-grid">
                ${expertiseAreas.map(expert => `
                    <div class="expert-card">
                        <div class="expert-header">
                            <h3 class="expert-role">${expert.role}</h3>
                            <h4 class="expert-name">${expert.name}</h4>
                            <p class="expert-experience">${expert.experience} d'expérience</p>
                        </div>
                        
                        <p class="expert-description">${expert.description}</p>
                        
                        <div class="expert-specialties">
                            <h5>Spécialités :</h5>
                            <ul>
                                ${expert.specialties.map(specialty => `<li>${specialty}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="expert-certifications">
                            <h5>Certifications :</h5>
                            <div class="cert-badges">
                                ${expert.certifications.map(cert => `
                                    <span class="cert-badge">${cert}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="expert-approach">
                            <strong>Approche :</strong> ${expert.approach}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderGuarantees() {
        const guarantees = [
            {
                icon: '✅',
                title: 'Résultats Garantis',
                description: 'Si vous ne gagnez pas 1h/jour/utilisateur en 3 mois, nous reprenons le projet sans frais',
                details: [
                    'Mesure objective des gains',
                    'Validation par vos équipes',
                    'Reprise gratuite si objectifs non atteints',
                    'Aucune clause abusive'
                ],
                commitment: 'Engagement contractuel'
            },
            {
                icon: '🎯',
                title: '100% de Réussite',
                description: '15 projets ERP déployés avec succès, 0 échec depuis notre création',
                details: [
                    'Track record vérifié',
                    'Références clients disponibles',
                    'Méthodologie éprouvée',
                    'Équipe expérimentée'
                ],
                commitment: 'Historique prouvé'
            },
            {
                icon: '📞',
                title: 'Support Illimité',
                description: 'Support téléphonique illimité pendant 6 mois post-démarrage',
                details: [
                    'Hotline dédiée 9h-18h',
                    'Réponse sous 4h garantie',
                    'Accès aux experts métier',
                    'Formation complémentaire incluse'
                ],
                commitment: 'Service premium inclus'
            },
            {
                icon: '💰',
                title: 'ROI Calculé',
                description: 'ROI calculé avant projet et vérifié à 6 mois avec KPI objectifs',
                details: [
                    'Calcul détaillé en amont',
                    'Métriques de suivi définies',
                    'Validation à 3 et 6 mois',
                    'Ajustements si nécessaire'
                ],
                commitment: 'Transparence totale'
            },
            {
                icon: '⏰',
                title: 'Délais Respectés',
                description: 'Planning respecté ou pénalités financières automatiques',
                details: [
                    'Planning détaillé et validé',
                    'Jalons de contrôle réguliers',
                    'Alertes préventives',
                    'Compensation des retards'
                ],
                commitment: 'Ponctualité garantie'
            },
            {
                icon: '💳',
                title: 'Budget Maîtrisé',
                description: 'Pas de dépassement budgétaire sans validation préalable',
                details: [
                    'Devis détaillé et ferme',
                    'Validation préalable des extras',
                    'Transparence des coûts',
                    'Facturation au réalisé'
                ],
                commitment: 'Maîtrise financière'
            }
        ];

        const container = document.getElementById('guarantees-grid');
        if (!container) return;

        container.innerHTML = `
            <div class="guarantees-wrapper">
                ${guarantees.map(guarantee => `
                    <div class="guarantee-card">
                        <div class="guarantee-header">
                            <div class="guarantee-icon">${guarantee.icon}</div>
                            <h3 class="guarantee-title">${guarantee.title}</h3>
                        </div>
                        <p class="guarantee-description">${guarantee.description}</p>
                        <ul class="guarantee-details">
                            ${guarantee.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                        <div class="guarantee-commitment">
                            <strong>${guarantee.commitment}</strong>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderClientTestimonials() {
        const testimonials = [
            {
                quote: "Le service d'accompagnement d'Oweo est exceptionnel. Nicolas et son équipe nous ont guidés à chaque étape avec une expertise remarquable.",
                author: "Michel Dubois",
                position: "Directeur Général",
                company: "Charpente Industrielle Bretagne",
                service: "Accompagnement Complet",
                result: "ROI atteint en 8 mois",
                rating: 5,
                project: "Déploiement Sage X3 + BI"
            },
            {
                quote: "Le diagnostic gratuit d'Oweo nous a ouvert les yeux sur nos possibilités d'amélioration. Très professionnel et sans engagement commercial agressif.",
                author: "Sophie Martin",
                position: "Responsable Production",
                company: "Métallerie Moderne",
                service: "Diagnostic Gratuit",
                result: "Plan d'action précis",
                rating: 5,
                project: "Audit complet + recommandations"
            },
            {
                quote: "L'accompagnement stratégique nous a permis de construire un business case solide qui a convaincu nos actionnaires. Investissement rentabilisé !",
                author: "Pierre Rousseau",
                position: "PDG",
                company: "Groupe Construction Métallique",
                service: "Conseil Stratégique",
                result: "Financement validé",
                rating: 5,
                project: "Business case + roadmap"
            }
        ];

        const container = document.getElementById('client-testimonials');
        if (!container) return;

        container.innerHTML = `
            <div class="testimonials-slider">
                ${testimonials.map((testimonial, index) => `
                    <div class="testimonial-slide ${index === 0 ? 'active' : ''}">
                        <div class="testimonial-content">
                            <div class="testimonial-rating">
                                ${'⭐'.repeat(testimonial.rating)}
                            </div>
                            <blockquote class="testimonial-quote">
                                "${testimonial.quote}"
                            </blockquote>
                            <div class="testimonial-author-info">
                                <div class="author-details">
                                    <strong class="author-name">${testimonial.author}</strong>
                                    <span class="author-position">${testimonial.position}</span>
                                    <span class="author-company">${testimonial.company}</span>
                                </div>
                            </div>
                            <div class="testimonial-project-info">
                                <div class="project-service">
                                    <strong>Service :</strong> ${testimonial.service}
                                </div>
                                <div class="project-details">
                                    <strong>Projet :</strong> ${testimonial.project}
                                </div>
                                <div class="project-result">
                                    <strong>Résultat :</strong> ${testimonial.result}
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="testimonials-nav">
                ${testimonials.map((_, index) => `
                    <button class="nav-dot ${index === 0 ? 'active' : ''}" 
                            onclick="this.closest('.client-testimonials').querySelector('.testimonials-slider').setAttribute('data-current', '${index}'); this.closest('.testimonials-nav').querySelectorAll('.nav-dot').forEach((dot, i) => dot.classList.toggle('active', i === ${index})); this.closest('.client-testimonials').querySelectorAll('.testimonial-slide').forEach((slide, i) => slide.classList.toggle('active', i === ${index}));"></button>
                `).join('')}
            </div>
        `;
    },

    renderServicesFAQ() {
        const servicesFAQ = [
            {
                question: "Comment se déroule le diagnostic gratuit ?",
                answer: "Le diagnostic se déroule sur 2-3 jours sur votre site. Nous analysons vos processus, interviewons vos équipes et auditons vos outils. Vous recevez ensuite un rapport détaillé avec nos recommandations et une estimation budgétaire, sans aucun engagement de votre part."
            },
            {
                question: "Quelle est la différence entre les trois services ?",
                answer: "Le diagnostic est gratuit et vous donne une vision claire de votre situation. Le conseil stratégique va plus loin avec un business case détaillé. L'accompagnement complet inclut la réalisation du projet de A à Z avec garantie de résultats."
            },
            {
                question: "Combien coûte réellement un projet de transformation ?",
                answer: "Cela dépend de votre taille et de vos besoins. Comptez entre 25k€ et 80k€ pour un projet complet (logiciel + accompagnement). Nous calculons toujours le ROI avant de commencer pour valider la rentabilité."
            },
            {
                question: "Que se passe-t-il si les résultats ne sont pas au rendez-vous ?",
                answer: "Nous garantissons des gains mesurables. Si vous ne gagnez pas au minimum 1h/jour/utilisateur en 3 mois, nous reprenons le projet sans frais supplémentaires. C'est notre engagement contractuel."
            },
            {
                question: "Combien de temps dure un projet complet ?",
                answer: "Un projet complet dure généralement 3 à 6 mois selon la complexité. Le diagnostic prend 2-3 jours, la phase de conseil 1-2 semaines, et le déploiement 2-4 mois avec 6 mois de support inclus."
            },
            {
                question: "Travaillez-vous avec des partenaires ou sous-traitants ?",
                answer: "Nous travaillons directement avec vous, sans intermédiaire. Pour les aspects techniques spécifiques, nous collaborons avec des partenaires certifiés (éditeurs ERP, intégrateurs) que nous sélectionnons et coordonnons."
            },
            {
                question: "Quel support après la fin du projet ?",
                answer: "6 mois de support illimité sont inclus dans tous nos projets. Ensuite, nous proposons des contrats de maintenance optionnels ou du support ponctuel selon vos besoins."
            },
            {
                question: "Comment mesurez-vous le ROI ?",
                answer: "Nous définissons des KPI précis avant le projet (temps de chiffrage, taux d'erreur, productivité, etc.) et les mesurons à 3 et 6 mois. Tous nos clients ont validé leur ROI dans les délais annoncés."
            }
        ];

        const container = document.getElementById('services-faq');
        if (!container) return;

        container.innerHTML = servicesFAQ.map((item, index) => `
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

    bindEvents() {
        // Gestion des FAQ
        const faqItems = document.querySelectorAll('#services-faq .faq-item');
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

        // Calendly buttons avec tracking par service
        const calendlyButtons = document.querySelectorAll('[data-calendly]');
        calendlyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const serviceType = button.getAttribute('data-service-type') || 'general';
                this.openCalendly(serviceType);
            });
        });

        // Tracking des interactions avec les cartes de services
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const serviceId = card.getAttribute('data-service');
                if (OweoUtils.analytics) {
                    OweoUtils.analytics.track('service_card_hover', {
                        service: serviceId,
                        location: 'services_page'
                    });
                }
            });
        });

        // Animation des éléments au scroll
        this.setupScrollAnimations();

        // Auto-rotation des témoignages
        this.setupTestimonialsRotation();
    },

    setupScrollAnimations() {
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
            '.service-card, .process-step-detailed, .expert-card, .guarantee-card'
        );
        
        animatedElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
    },

    setupTestimonialsRotation() {
        const slider = document.querySelector('.testimonials-slider');
        const dots = document.querySelectorAll('.nav-dot');
        const slides = document.querySelectorAll('.testimonial-slide');
        
        if (!slider || !dots.length || !slides.length) return;

        let currentSlide = 0;
        const totalSlides = slides.length;

        const rotateTestimonials = () => {
            // Passer au slide suivant
            currentSlide = (currentSlide + 1) % totalSlides;
            
            // Mettre à jour l'affichage
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentSlide);
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        };

        // Rotation automatique toutes les 8 secondes
        setInterval(rotateTestimonials, 8000);
    },

    openCalendly(serviceType = 'general') {
        if (typeof Calendly !== 'undefined' && Calendly.initPopupWidget) {
            Calendly.initPopupWidget({
                url: OweoConfig.urls.calendly,
                prefill: {
                    customAnswers: {
                        a1: serviceType // Pré-remplir le type de service demandé
                    }
                }
            });
            
            if (OweoUtils.analytics) {
                OweoUtils.analytics.track('calendly_open', {
                    location: 'services_page',
                    service_type: serviceType
                });
            }
        } else {
            console.warn('Calendly not loaded');
            window.open(OweoConfig.urls.calendly, '_blank');
        }
    }
};

console.log('💼 Services page loaded');