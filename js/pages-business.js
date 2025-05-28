// js/pages-business.js - PAGES BUSINESS

window.pages = window.pages || {};

// PAGE SERVICES
window.pages['services'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Nos Services</h2>
                        <p class="section-subtitle">Solutions complètes pour votre transformation digitale</p>
                    </div>
                    
                    <div class="services-grid">
                        <div class="service-card">
                            <div class="service-header">
                                <h3>Diagnostic Gratuit</h3>
                                <div class="service-price">Gratuit</div>
                            </div>
                            <p class="service-description">Audit complet de votre maturité digitale</p>
                            <div class="service-duration">⏱️ Durée : 2-3 jours</div>
                            
                            <ul class="service-includes">
                                <li>✅ Audit processus complet</li>
                                <li>✅ Identification des gains prioritaires</li>
                                <li>✅ Recommandations concrètes</li>
                                <li>✅ Rapport détaillé</li>
                            </ul>
                            
                            <div class="service-action">
                                <a href="#" class="btn btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/nicolas-dubain/30min'});">
                                    🎯 Réserver maintenant
                                </a>
                            </div>
                        </div>

                        <div class="service-card">
                            <div class="service-header">
                                <h3>Conseil Stratégique</h3>
                                <div class="service-price">Sur devis</div>
                            </div>
                            <p class="service-description">Définition de votre stratégie de transformation</p>
                            <div class="service-duration">⏱️ Durée : 1-2 semaines</div>
                            
                            <ul class="service-includes">
                                <li>✅ Business case détaillé</li>
                                <li>✅ Roadmap de transformation</li>
                                <li>✅ Calcul ROI précis</li>
                                <li>✅ Plan de financement</li>
                            </ul>
                            
                            <div class="service-action">
                                <a href="#" class="btn btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/nicolas-dubain/30min'});">
                                    📞 Discuter du projet
                                </a>
                            </div>
                        </div>

                        <div class="service-card">
                            <div class="service-header">
                                <h3>Accompagnement Complet</h3>
                                <div class="service-price">Sur devis</div>
                            </div>
                            <p class="service-description">Prise en charge complète de votre projet</p>
                            <div class="service-duration">⏱️ Durée : 3-6 mois</div>
                            
                            <ul class="service-includes">
                                <li>✅ Gestion de projet complète</li>
                                <li>✅ Sélection et déploiement</li>
                                <li>✅ Formation des équipes</li>
                                <li>✅ Support 6 mois</li>
                            </ul>
                            
                            <div class="service-action">
                                <a href="#" class="btn btn-primary" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/nicolas-dubain/30min'});">
                                    📞 Discuter du projet
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section-header" style="margin-top: 4rem;">
                        <h3 class="section-title" style="font-size: 2rem;">Notre Processus en Détail</h3>
                    </div>
                    
                    <div class="process-detailed">
                        <div class="process-step-detailed">
                            <div class="process-step-number">1</div>
                            <div class="process-step-content">
                                <h4>Diagnostic Expert</h4>
                                <p>Audit terrain complet de vos processus actuels</p>
                                <div class="process-step-meta">
                                    <span class="duration">⏱️ 2-3 