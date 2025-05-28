// js/pages-specialized.js - PAGES SPÉCIALISÉES

window.pages = window.pages || {};

// PAGES SPÉCIALISÉES
window.pages['outils-gestion'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Solutions ERP & Outils de Gestion</h2>
                        <p class="section-subtitle">15+ déploiements ERP réussis</p>
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
                        <p class="section-subtitle">Diagnostic expert et stratégie digitale</p>
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
                        <p class="section-subtitle">Méthodologie éprouvée - 100% de succès</p>
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

window.pages['en1090'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Solutions Conformité EN1090</h2>
                        <p class="section-subtitle">Digitalisation complète conformité qualité</p>
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
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Solutions IA & Innovation</h2>
                        <p class="section-subtitle">Intelligence artificielle appliquée à votre métier</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="ia-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">🤖 IA Concrète</h3>
                    </div>
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

window.pages['optimisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Solutions d'Optimisation</h2>
                        <p class="section-subtitle">Amélioration continue et gains mesurables</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="optimisation-articles"></div>
                    
                    <div class="section-header">
                        <h3 class="section-title" style="font-size: 1.5rem;">⚡ Performance Optimale</h3>
                    </div>
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

console.log('✅ pages-specialized.js loaded');