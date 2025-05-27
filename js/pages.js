// js/pages.js

window.pages = {};

// Page d'accueil ENTIÈREMENT REPENSÉE
window.pages.home = {
    render() {
        return `
            <!-- Hero Section Repensé -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">🚀 Expert ERP & Transformation Digitale</div>
                        <h1 class="gradient-text">Vous Perdez de l'Argent à Cause de Vos Outils de Gestion ?</h1>
                        <p class="hero-subtitle">En 10 ans, j'ai aidé 20+ entreprises de charpente métallique à gagner du temps et de l'argent grâce au digital. 
                        <strong>Résultats garantis :</strong> +20% de productivité, -60% d'erreurs, +3 points de marge.</p>
                        
                        <div class="hero-stats">
                            <div class="stat">
                                <div class="stat-number">15+</div>
                                <div class="stat-label">Déploiements ERP réussis</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">100%</div>
                                <div class="stat-label">Projets dans les délais</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">10+</div>
                                <div class="stat-label">Années d'expertise métier</div>
                            </div>
                        </div>
                        
                        <div class="hero-actions">
                            <a href="#" class="btn btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/nicolas-dubain/30min'});">
                                📞 Diagnostic Gratuit (30min)
                            </a>
                            <a href="#problematiques" class="btn btn-secondary">
                                Découvrir les Problématiques
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section Problématiques Métier -->
            <section id="problematiques" class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Ces Problèmes Vous Parlent ?</h2>
                        <p class="section-subtitle">Problématiques rencontrées chez 90% de mes clients avant transformation</p>
                    </div>
                    
                    <div class="grid grid-2" id="problematiques-grid"></div>
                </div>
            </section>

            <!-- Section Témoignages -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Ils ont Transformé leur Entreprise</h2>
                        <p class="section-subtitle">Témoignages de dirigeants qui ont franchi le cap</p>
                    </div>
                    
                    <div class="grid grid-3" id="testimonials-grid"></div>
                </div>
            </section>

            <!-- Section Mon Approche -->
            <section class="section" style="background: rgba(0, 212, 255, 0.05);">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Mon Approche : Résultats Concrets Garantis</h2>
                        <p class="section-subtitle">10 ans d'expérience terrain + 15 projets réussis = Méthodologie éprouvée</p>
                    </div>
                    
                    <div class="grid grid-2">
                        ${this.renderApproachCards()}
                    </div>
                </div>
            </section>

            <!-- Section Domaines d'Expertise -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">Mes Domaines d'Expertise</h2>
                        <p class="section-subtitle">Spécialisé dans la transformation digitale des entreprises de métallurgie</p>
                    </div>
                    
                    <div class="grid grid-3">
                        ${this.renderExpertiseCards()}
                    </div>
                </div>
            </section>
        `;
    },

    renderApproachCards() {
        const cards = [
            {
                icon: '🔍',
                title: 'Diagnostic Terrain',
                description: 'Je viens dans vos ateliers, je parle avec vos équipes, je comprends VRAIMENT vos contraintes.',
                details: ['Audit complet de vos processus', 'Interview des utilisateurs', 'Identification des gains prioritaires']
            },
            {
                icon: '🎯',
                title: 'Solutions Concrètes',
                description: 'Pas de blabla théorique. Je vous montre les gains exacts que vous allez obtenir.',
                details: ['ROI calculé avant projet', 'Démonstrations sur vos données', 'Garantie de résultats']
            },
            {
                icon: '🤝',
                title: 'Accompagnement Complet',
                description: 'Je reste avec vous jusqu\'au succès. Formation, support, optimisation continue.',
                details: ['Formation de vos équipes', 'Support post-démarrage', 'Optimisation continue']
            },
            {
                icon: '📊',
                title: 'Résultats Mesurables',
                description: 'Chaque projet est suivi avec des KPI précis. Vous savez exactement ce que ça vous rapporte.',
                details: ['KPI de performance', 'Reporting mensuel', 'Amélioration continue']
            }
        ];

        return cards.map(card => `
            <div class="card">
                <div class="card-icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <ul class="feature-list">
                    ${card.details.map(detail => `<li>${detail}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    },

    renderExpertiseCards() {
        const cards = [
            {
                icon: '🛠️',
                title: 'Choix & Déploiement ERP',
                description: 'Sélection et implémentation d\'ERP spécialisés métallurgie',
                page: 'outils-gestion',
                results: '15+ déploiements réussis'
            },
            {
                icon: '📊',
                title: 'Business Intelligence',
                description: 'Tableaux de bord et pilotage de performance',
                page: 'consulting-strategique', 
                results: 'Visibilité temps réel'
            },
            {
                icon: '⚡',
                title: 'Automatisation',
                description: 'Automatisation des processus métier chronophages',
                page: 'accompagnement-projet',
                results: '2h/jour gagnées par personne'
            },
            {
                icon: '🤖',
                title: 'Innovation IA',
                description: 'Intégration d\'IA pour optimiser vos processus',
                page: 'ia-projets',
                results: 'Chatbot support + OCR'
            },
            {
                icon: '📋',
                title: 'Conformité EN1090',
                description: 'Digitalisation de la conformité qualité',
                page: 'en1090',
                results: 'Certification obtenue'
            },
            {
                icon: '🔧',
                title: 'Optimisation Production',
                description: 'Amélioration continue des flux de production',
                page: 'optimisation',
                results: '+20% productivité'
            }
        ];

        return cards.map(card => `
            <div class="card" onclick="router.navigate('${card.page}')" style="cursor: pointer;">
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
        // Render problématiques
        this.renderProblematiques();
        
        // Render témoignages
        this.renderTestimonials();
        
        console.log('Home page initialized with new content');
    },

    renderProblematiques() {
        const container = document.getElementById('problematiques-grid');
        if (!container || !window.ProblematiquesData) return;

        container.innerHTML = window.ProblematiquesData.map(prob => `
            <div class="card problematique-card">
                <div class="card-icon">${prob.icon}</div>
                <h3>${prob.title}</h3>
                <ul class="probleme-list">
                    ${prob.problems.map(problem => `<li>${problem}</li>`).join('')}
                </ul>
                <div class="solution-box">
                    <strong>💡 Solution :</strong> ${prob.solution}<br>
                    <strong>📈 Impact :</strong> ${prob.impact}
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
                    ${testimonial.company}
                </div>
                <div class="testimonial-result">
                    <strong>Résultat :</strong> ${testimonial.result}
                </div>
            </div>
        `).join('');
    }
};

// Nouvelles pages ajoutées
window.pages['consulting-strategique'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conseil Stratégique</h2>
                        <p class="section-subtitle">Diagnostic et stratégie de transformation digitale sur-mesure</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="consulting-articles"></div>
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
                        <p class="section-subtitle">Méthodologie éprouvée pour garantir le succès de votre transformation digitale</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="projet-articles"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['accompagnement-projet'], 'projet-articles');
    }
};

// Mise à jour de la navigation
window.OweoConfig.navigation = [
    { id: 'home', label: 'Accueil', icon: '🏠' },
    { id: 'outils-gestion', label: 'ERP & Outils', icon: '🛠️' },
    { id: 'consulting-strategique', label: 'Conseil Stratégique', icon: '🎯' },
    { id: 'accompagnement-projet', label: 'Accompagnement', icon: '🤝' },
    { id: 'ia-projets', label: 'IA & Innovation', icon: '🤖' },
    { id: 'optimisation', label: 'Optimisation', icon: '⚡' }
];