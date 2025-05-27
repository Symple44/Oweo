// js/pages.js

window.pages = {};

// Page d'accueil
window.pages.home = {
    render() {
        return `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">🚀 Hub d'Expertise Digitale</div>
                        <h1 class="gradient-text">Guides & Conseils pour votre Transformation Numérique</h1>
                        <p>Ressources expertes, guides pratiques et conseils personnalisés pour digitaliser efficacement votre entreprise de charpente métallique.</p>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="grid grid-2">
                        ${this.renderExpertiseCards()}
                    </div>
                </div>
            </section>
        `;
    },

    renderExpertiseCards() {
        const cards = [
            {
                icon: '🛠️',
                title: 'Outils de Gestion',
                description: 'Guides complets pour choisir, implémenter et optimiser vos outils de gestion métier.',
                features: ['Comparatifs ERP spécialisés', 'Guide ROI et budgétisation', 'Checklist d\'implémentation', 'Retours d\'expérience terrain'],
                page: 'outils-gestion'
            },
            {
                icon: '💻',
                title: 'Développement & Intégrations',
                description: 'Conseils techniques pour vos projets de développement sur-mesure et intégrations système.',
                features: ['Architectures recommandées', 'Stack technique optimale', 'Gestion de projet dev', 'Bonnes pratiques sécurité'],
                page: 'developpement'
            },
            {
                icon: '📋',
                title: 'Conformité EN1090',
                description: 'Guide complet pour la mise en conformité EN1090 avec solutions digitales adaptées.',
                features: ['Exigences détaillées', 'Solutions digitales conformes', 'Processus de certification', 'Outils de suivi qualité'],
                page: 'en1090'
            },
            {
                icon: '🤖',
                title: 'IA & Innovation',
                description: 'Intégration de l\'intelligence artificielle dans vos processus métier de charpente métallique.',
                features: ['Cas d\'usage IA concrets', 'ROI et faisabilité', 'Technologies émergentes', 'Roadmap d\'implémentation'],
                page: 'ia-projets'
            },
            {
                icon: '⚡',
                title: 'Optimisation Production',
                description: 'Méthodes d\'audit et d\'optimisation de vos flux de production avec le digital.',
                features: ['Audit processus production', 'Identification goulots', 'Solutions lean digitales', 'KPI et tableaux de bord'],
                page: 'optimisation'
            },
            {
                icon: '🎯',
                title: 'Gestion de Projet',
                description: 'Méthodologies éprouvées pour mener à bien vos projets de transformation numérique.',
                features: ['Méthodologies agiles', 'Planification et suivi', 'Gestion des risques', 'Conduite du changement'],
                page: 'gestion-projet'
            }
        ];

        return cards.map(card => `
            <div class="card" onclick="router.navigate('${card.page}')" style="cursor: pointer;">
                <div class="card-icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <ul class="feature-list">
                    ${card.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    },

    init() {
        console.log('Home page initialized');
    }
};

// Page Outils de Gestion
window.pages['outils-gestion'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Outils de Gestion</h2>
                        <p class="section-subtitle">Guides experts pour choisir et implémenter les meilleurs outils de gestion pour votre entreprise</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="outils-articles"></div>

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

// Page Développement
window.pages['developpement'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Développement & Intégrations</h2>
                        <p class="section-subtitle">Conseils techniques et bonnes pratiques pour vos projets de développement spécifique</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="dev-articles"></div>

                    <div class="grid grid-4" id="dev-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['developpement'], 'dev-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['developpement'], 'dev-tips');
    }
};

// Page EN1090
window.pages['en1090'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conformité EN1090</h2>
                        <p class="section-subtitle">Guide complet pour la mise en conformité EN1090 avec solutions digitales</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="en1090-articles"></div>

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

// Page IA & Projets
window.pages['ia-projets'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">IA & Innovation</h2>
                        <p class="section-subtitle">Intégration de l'intelligence artificielle dans vos processus métier</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="ia-articles"></div>

                    <div class="grid grid-4" id="ia-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['ia-projets'], 'ia-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['ia-projets'], 'ia-tips');
    }
};

// Page Optimisation
window.pages['optimisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Optimisation Production</h2>
                        <p class="section-subtitle">Méthodes d'audit et d'optimisation de vos flux de production avec le digital</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="optimisation-articles"></div>

                    <div class="grid grid-4" id="optimisation-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['optimisation'], 'optimisation-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['optimisation'], 'optimisation-tips');
    }
};

// Page Gestion de Projet
window.pages['gestion-projet'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Gestion de Projet Digital</h2>
                        <p class="section-subtitle">Méthodologies éprouvées pour mener à bien vos projets de transformation numérique</p>
                    </div>
                    
                    <div class="grid grid-3">
                        <div class="tip-card">
                            <h4>🎯 Méthodologie Agile</h4>
                            <p>Adoptez une approche agile avec des sprints courts et des livraisons fréquentes pour réduire les risques.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>📋 Planification</h4>
                            <p>Définissez clairement les objectifs, les livrables et les critères de succès dès le démarrage du projet.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>👥 Équipe Projet</h4>
                            <p>Constituez une équipe mixte avec des profils métier et techniques pour garantir l'adéquation des solutions.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>📊 Suivi Performance</h4>
                            <p>Mettez en place des indicateurs de performance et des points de contrôle réguliers.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>🔄 Conduite du Changement</h4>
                            <p>Accompagnez les utilisateurs avec formation, communication et support pendant la transition.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>⚠️ Gestion des Risques</h4>
                            <p>Identifiez les risques en amont et préparez des plans de contingence pour les scenarios critiques.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('Gestion projet page initialized');
    }
};