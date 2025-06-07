// js/pages/services.js - Version complète corrigée
// Page des services avec détails complets

window.pages = window.pages || {};
window.pages['services'] = {
    
    // État de la page
    initialized: false,
    activeService: null,
    
    /**
     * Générer le rendu HTML de la page des services
     */
    render() {
        return `
            <main class="services-page">
                <!-- En-tête de page -->
                <section class="page-hero">
                    <div class="container">
                        <div class="page-hero-content">
                            <h1 class="page-title gradient-text">Nos Services</h1>
                            <p class="page-subtitle">
                                Solutions complètes pour optimiser et digitaliser votre entreprise de métallurgie
                            </p>
                            <div class="hero-stats">
                                <div class="stat-item">
                                    <div class="stat-number">100+</div>
                                    <div class="stat-label">Projets réalisés</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">15+</div>
                                    <div class="stat-label">Années d'expérience</div>
                                </div>
                                <div class="stat-item">
                                    <div class="stat-number">3</div>
                                    <div class="stat-label">Domaines d'expertise</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Navigation services -->
                <section class="services-navigation">
                    <div class="container">
                        <nav class="services-nav">
                            <button class="service-nav-btn active" data-service="overview">
                                📋 Vue d'ensemble
                            </button>
                            <button class="service-nav-btn" data-service="erp">
                                🛠️ ERP Métallurgie
                            </button>
                            <button class="service-nav-btn" data-service="conseil">
                                📊 Conseil Stratégique
                            </button>
                            <button class="service-nav-btn" data-service="formation">
                                🎓 Formation & Support
                            </button>
                        </nav>
                    </div>
                </section>

                <!-- Contenu des services -->
                <section class="services-content">
                    <div class="container">
                        
                        <!-- Vue d'ensemble -->
                        <div class="service-section active" id="overview-section">
                            <div class="services-overview">
                                <div class="overview-intro">
                                    <h2>Notre Approche Globale</h2>
                                    <p>
                                        Chez Oweo, nous proposons une approche complète et intégrée pour accompagner 
                                        votre transformation digitale. Nos trois domaines d'expertise se complètent 
                                        pour vous offrir une solution sur-mesure.
                                    </p>
                                </div>
                                
                                <div class="services-grid-overview">
                                    <div class="service-overview-card" data-service="erp">
                                        <div class="service-icon-large">🛠️</div>
                                        <h3>Solutions ERP Métallurgie</h3>
                                        <p>
                                            Logiciels spécialisés pour la gestion complète de votre activité : 
                                            production, chiffrage, planning, qualité.
                                        </p>
                                        <ul class="overview-features">
                                            <li>✅ Gestion de production intégrée</li>
                                            <li>✅ Chiffrage automatisé</li>
                                            <li>✅ Planification optimisée</li>
                                            <li>✅ Traçabilité complète</li>
                                        </ul>
                                        <div class="service-metrics">
                                            <div class="metric">
                                                <strong>60%</strong>
                                                <span>Gain de temps chiffrage</span>
                                            </div>
                                            <div class="metric">
                                                <strong>40%</strong>
                                                <span>Réduction erreurs</span>
                                            </div>
                                        </div>
                                        <button class="btn btn-outline" onclick="window.pages.services.showService('erp')">
                                            Découvrir en détail →
                                        </button>
                                    </div>
                                    
                                    <div class="service-overview-card" data-service="conseil">
                                        <div class="service-icon-large">📊</div>
                                        <h3>Conseil Stratégique</h3>
                                        <p>
                                            Accompagnement personnalisé pour optimiser vos processus et accélérer 
                                            votre transformation digitale.
                                        </p>
                                        <ul class="overview-features">
                                            <li>✅ Audit approfondi</li>
                                            <li>✅ Stratégie sur-mesure</li>
                                            <li>✅ Accompagnement au changement</li>
                                            <li>✅ Optimisation continue</li>
                                        </ul>
                                        <div class="service-metrics">
                                            <div class="metric">
                                                <strong>30%</strong>
                                                <span>Amélioration productivité</span>
                                            </div>
                                            <div class="metric">
                                                <strong>6 mois</strong>
                                                <span>ROI moyen</span>
                                            </div>
                                        </div>
                                        <button class="btn btn-outline" onclick="window.pages.services.showService('conseil')">
                                            Découvrir en détail →
                                        </button>
                                    </div>
                                    
                                    <div class="service-overview-card" data-service="formation">
                                        <div class="service-icon-large">🎓</div>
                                        <h3>Formation & Support</h3>
                                        <p>
                                            Formation complète de vos équipes et support technique continu 
                                            pour garantir le succès de vos projets.
                                        </p>
                                        <ul class="overview-features">
                                            <li>✅ Formation sur-mesure</li>
                                            <li>✅ Support technique 7j/7</li>
                                            <li>✅ Documentation complète</li>
                                            <li>✅ Maintenance évolutive</li>
                                        </ul>
                                        <div class="service-metrics">
                                            <div class="metric">
                                                <strong>95%</strong>
                                                <span>Satisfaction clients</span>
                                            </div>
                                            <div class="metric">
                                                <strong>24h</strong>
                                                <span>Délai de réponse</span>
                                            </div>
                                        </div>
                                        <button class="btn btn-outline" onclick="window.pages.services.showService('formation')">
                                            Découvrir en détail →
                                        </button>
                                    </div>
                                </div>
                                
                                <div class="overview-cta">
                                    <h3>Besoin d'une solution personnalisée ?</h3>
                                    <p>Nos experts analysent vos besoins et vous proposent la solution optimale.</p>
                                    <button class="btn btn-primary btn-lg" 
                                            onclick="window.open('${this.getCalendlyUrl()}', '_blank')">
                                        📅 Réserver une Consultation Gratuite
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- ERP Métallurgie -->
                        <div class="service-section" id="erp-section">
                            <div class="service-detail">
                                <div class="service-header">
                                    <div class="service-icon-detail">🛠️</div>
                                    <div class="service-title-group">
                                        <h2>Solutions ERP Métallurgie</h2>
                                        <p class="service-tagline">
                                            La solution complète pour digitaliser votre entreprise de charpente métallique
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="service-content-grid">
                                    <div class="service-description">
                                        <h3>Une Solution Adaptée à Votre Métier</h3>
                                        <p>
                                            Notre expertise de plus de 15 années dans le secteur de la charpente métallique 
                                            nous permet de proposer des solutions ERP parfaitement adaptées aux spécificités 
                                            de votre métier.
                                        </p>
                                        <p>
                                            De la gestion des devis à la livraison, en passant par la production et le contrôle 
                                            qualité, notre solution couvre l'ensemble de votre chaîne de valeur.
                                        </p>
                                    </div>
                                    
                                    <div class="service-visual">
                                        <div class="workflow-diagram">
                                            <div class="workflow-step">
                                                <div class="step-icon">📋</div>
                                                <div class="step-label">Chiffrage</div>
                                            </div>
                                            <div class="workflow-arrow">→</div>
                                            <div class="workflow-step">
                                                <div class="step-icon">🏗️</div>
                                                <div class="step-label">Production</div>
                                            </div>
                                            <div class="workflow-arrow">→</div>
                                            <div class="workflow-step">
                                                <div class="step-icon">📦</div>
                                                <div class="step-label">Livraison</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="service-modules">
                                    <h3>Modules Disponibles</h3>
                                    <div class="modules-grid">
                                        <div class="module-card">
                                            <div class="module-icon">💰</div>
                                            <h4>Gestion Commerciale</h4>
                                            <ul>
                                                <li>Chiffrage automatisé</li>
                                                <li>Gestion des devis</li>
                                                <li>Suivi des commandes</li>
                                                <li>Facturation intégrée</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="module-card">
                                            <div class="module-icon">🏭</div>
                                            <h4>Gestion de Production</h4>
                                            <ul>
                                                <li>Planification atelier</li>
                                                <li>Suivi temps réel</li>
                                                <li>Gestion des ressources</li>
                                                <li>Optimisation des charges</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="module-card">
                                            <div class="module-icon">📊</div>
                                            <h4>Pilotage & Reporting</h4>
                                            <ul>
                                                <li>Tableaux de bord</li>
                                                <li>Indicateurs KPI</li>
                                                <li>Analyse rentabilité</li>
                                                <li>Rapports personnalisés</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="module-card">
                                            <div class="module-icon">📦</div>
                                            <h4>Gestion des Stocks</h4>
                                            <ul>
                                                <li>Inventaire temps réel</li>
                                                <li>Réapprovisionnement auto</li>
                                                <li>Traçabilité matières</li>
                                                <li>Optimisation stockage</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="service-benefits">
                                    <h3>Bénéfices Mesurés</h3>
                                    <div class="benefits-stats">
                                        <div class="benefit-stat">
                                            <div class="stat-number">60%</div>
                                            <div class="stat-description">
                                                Réduction du temps de chiffrage grâce à l'automatisation 
                                                et aux métrés intégrés
                                            </div>
                                        </div>
                                        <div class="benefit-stat">
                                            <div class="stat-number">40%</div>
                                            <div class="stat-description">
                                                Diminution des erreurs de production grâce à la 
                                                traçabilité et aux contrôles automatiques
                                            </div>
                                        </div>
                                        <div class="benefit-stat">
                                            <div class="stat-number">25%</div>
                                            <div class="stat-description">
                                                Amélioration de la productivité globale de l'entreprise 
                                                par l'optimisation des processus
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="service-cta">
                                    <div class="cta-content">
                                        <h3>Découvrez notre Solution en Action</h3>
                                        <p>Testez notre outil de chiffrage interactif et découvrez la puissance de nos solutions ERP.</p>
                                    </div>
                                    <div class="cta-actions">
                                        <button class="btn btn-primary" 
                                                onclick="this.accessClientDemo('outil-chiffrage-demo')">
                                            🔐 Démo Interactive Chiffrage
                                        </button>
                                        <button class="btn btn-outline" 
                                                onclick="window.open('${this.getCalendlyUrl()}', '_blank')">
                                            📅 Demander une Démonstration
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Conseil Stratégique -->
                        <div class="service-section" id="conseil-section">
                            <div class="service-detail">
                                <div class="service-header">
                                    <div class="service-icon-detail">📊</div>
                                    <div class="service-title-group">
                                        <h2>Conseil Stratégique</h2>
                                        <p class="service-tagline">
                                            Accompagnement expert pour optimiser et transformer votre entreprise
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="service-methodology">
                                    <h3>Notre Méthodologie Éprouvée</h3>
                                    <div class="methodology-timeline">
                                        <div class="methodology-step">
                                            <div class="step-number">1</div>
                                            <div class="step-content">
                                                <h4>Audit Complet</h4>
                                                <p>Analyse approfondie de vos processus actuels, identification des forces et axes d'amélioration</p>
                                                <ul>
                                                    <li>Audit organisationnel</li>
                                                    <li>Analyse des flux</li>
                                                    <li>Évaluation des outils</li>
                                                    <li>Benchmark secteur</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="methodology-step">
                                            <div class="step-number">2</div>
                                            <div class="step-content">
                                                <h4>Stratégie Personnalisée</h4>
                                                <p>Élaboration d'une feuille de route adaptée à vos objectifs et contraintes spécifiques</p>
                                                <ul>
                                                    <li>Plan d'action détaillé</li>
                                                    <li>Priorisation des actions</li>
                                                    <li>Budget et planning</li>
                                                    <li>Indicateurs de succès</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div class="methodology-step">
                                            <div class="step-number">3</div>
                                            <div class="step-content">
                                                <h4>Accompagnement au Changement</h4>
                                                <p>Support continu pour assurer le succès de la transformation et l'adhésion des équipes</p>
                                                <ul>
                                                    <li>Formation des équipes</li>
                                                    <li>Gestion du changement</li>
                                                    <li>Support technique</li>
                                                    <li>Suivi des résultats</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="consulting-areas">
                                    <h3>Domaines d'Intervention</h3>
                                    <div class="areas-grid">
                                        <div class="area-card">
                                            <div class="area-icon">🔄</div>
                                            <h4>Optimisation des Processus</h4>
                                            <p>Analyse et refonte de vos processus métier pour éliminer les gaspillages et améliorer l'efficacité.</p>
                                        </div>
                                        
                                        <div class="area-card">
                                            <div class="area-icon">💻</div>
                                            <h4>Transformation Digitale</h4>
                                            <p>Accompagnement dans la digitalisation de vos activités et l'adoption de nouvelles technologies.</p>
                                        </div>
                                        
                                        <div class="area-card">
                                            <div class="area-icon">📈</div>
                                            <h4>Performance & Pilotage</h4>
                                            <p>Mise en place d'indicateurs de performance et d'outils de pilotage pour un meilleur contrôle.</p>
                                        </div>
                                        
                                        <div class="area-card">
                                            <div class="area-icon">🎯</div>
                                            <h4>Stratégie Commerciale</h4>
                                            <p>Optimisation de votre approche commerciale et de vos processus de chiffrage et négociation.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="case-studies">
                                    <h3>Exemples de Réussites</h3>
                                    <div class="case-study-carousel">
                                        <div class="case-study active">
                                            <div class="case-study-content">
                                                <h4>Métallerie Loire - Optimisation Production</h4>
                                                <div class="case-study-metrics">
                                                    <div class="case-metric">
                                                        <strong>+40%</strong>
                                                        <span>Productivité</span>
                                                    </div>
                                                    <div class="case-metric">
                                                        <strong>-25%</strong>
                                                        <span>Délais</span>
                                                    </div>
                                                    <div class="case-metric">
                                                        <strong>+15%</strong>
                                                        <span>Marge</span>
                                                    </div>
                                                </div>
                                                <p>
                                                    Refonte complète des processus de production et mise en place 
                                                    d'un système de pilotage temps réel.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Formation & Support -->
                        <div class="service-section" id="formation-section">
                            <div class="service-detail">
                                <div class="service-header">
                                    <div class="service-icon-detail">🎓</div>
                                    <div class="service-title-group">
                                        <h2>Formation & Support</h2>
                                        <p class="service-tagline">
                                            Accompagnement complet pour garantir l'adoption et le succès de vos projets
                                        </p>
                                    </div>
                                </div>
                                
                                <div class="formation-approach">
                                    <h3>Notre Approche Pédagogique</h3>
                                    <div class="approach-grid">
                                        <div class="approach-item">
                                            <div class="approach-icon">🎯</div>
                                            <h4>Formation Sur-Mesure</h4>
                                            <p>Programmes adaptés à vos besoins spécifiques et au niveau de vos équipes</p>
                                        </div>
                                        
                                        <div class="approach-item">
                                            <div class="approach-icon">🛠️</div>
                                            <h4>Apprentissage Pratique</h4>
                                            <p>Formation basée sur vos données et cas d'usage réels pour une meilleure appropriation</p>
                                        </div>
                                        
                                        <div class="approach-item">
                                            <div class="approach-icon">📚</div>
                                            <h4>Ressources Complètes</h4>
                                            <p>Documentation détaillée, tutoriels vidéo et guides utilisateur personnalisés</p>
                                        </div>
                                        
                                        <div class="approach-item">
                                            <div class="approach-icon">🔄</div>
                                            <h4>Suivi Continu</h4>
                                            <p>Accompagnement post-formation et sessions de perfectionnement régulières</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="formation-programs">
                                    <h3>Programmes de Formation</h3>
                                    <div class="programs-tabs">
                                        <button class="program-tab active" data-program="utilisateurs">
                                            👥 Formation Utilisateurs
                                        </button>
                                        <button class="program-tab" data-program="administrateurs">
                                            ⚙️ Formation Administrateurs
                                        </button>
                                        <button class="program-tab" data-program="managers">
                                            📊 Formation Managers
                                        </button>
                                    </div>
                                    
                                    <div class="program-content active" id="utilisateurs-program">
                                        <div class="program-details">
                                            <h4>Formation Utilisateurs Finaux</h4>
                                            <p>Programme complet pour maîtriser l'utilisation quotidienne des outils</p>
                                            <div class="program-info">
                                                <div class="info-item">
                                                    <strong>Durée:</strong> 2-3 jours
                                                </div>
                                                <div class="info-item">
                                                    <strong>Format:</strong> Présentiel ou distanciel
                                                </div>
                                                <div class="info-item">
                                                    <strong>Groupe:</strong> 6-8 personnes max
                                                </div>
                                            </div>
                                            <div class="program-curriculum">
                                                <h5>Programme:</h5>
                                                <ul>
                                                    <li>Prise en main de l'interface</li>
                                                    <li>Saisie et gestion des données</li>
                                                    <li>Génération de rapports</li>
                                                    <li>Cas pratiques métier</li>
                                                    <li>Bonnes pratiques</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="program-content" id="administrateurs-program">
                                        <div class="program-details">
                                            <h4>Formation Administrateurs Système</h4>
                                            <p>Formation technique pour la configuration et l'administration des solutions</p>
                                            <div class="program-info">
                                                <div class="info-item">
                                                    <strong>Durée:</strong> 3-5 jours
                                                </div>
                                                <div class="info-item">
                                                    <strong>Format:</strong> Technique approfondi
                                                </div>
                                                <div class="info-item">
                                                    <strong>Prérequis:</strong> Compétences IT
                                                </div>
                                            </div>
                                            <div class="program-curriculum">
                                                <h5>Programme:</h5>
                                                <ul>
                                                    <li>Architecture et configuration</li>
                                                    <li>Gestion des utilisateurs et droits</li>
                                                    <li>Paramétrage avancé</li>
                                                    <li>Maintenance et sauvegarde</li>
                                                    <li>Dépannage et support</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="program-content" id="managers-program">
                                        <div class="program-details">
                                            <h4>Formation Managers et Décideurs</h4>
                                            <p>Formation axée sur le pilotage et l'analyse des données de performance</p>
                                            <div class="program-info">
                                                <div class="info-item">
                                                    <strong>Durée:</strong> 1-2 jours
                                                </div>
                                                <div class="info-item">
                                                    <strong>Format:</strong> Stratégique
                                                </div>
                                                <div class="info-item">
                                                    <strong>Focus:</strong> ROI et pilotage
                                                </div>
                                            </div>
                                            <div class="program-curriculum">
                                                <h5>Programme:</h5>
                                                <ul>
                                                    <li>Tableaux de bord et KPI</li>
                                                    <li>Analyse de performance</li>
                                                    <li>Prise de décision data-driven</li>
                                                    <li>Optimisation continue</li>
                                                    <li>Vision stratégique</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="support-services">
                                    <h3>Services de Support</h3>
                                    <div class="support-grid">
                                        <div class="support-card">
                                            <div class="support-icon">🆘</div>
                                            <h4>Support Technique</h4>
                                            <ul>
                                                <li>Hotline dédiée</li>
                                                <li>Résolution rapide</li>
                                                <li>Support à distance</li>
                                                <li>Escalade expert</li>
                                            </ul>
                                            <div class="support-sla">
                                                <strong>SLA: 24h</strong>
                                            </div>
                                        </div>
                                        
                                        <div class="support-card">
                                            <div class="support-icon">🔧</div>
                                            <h4>Maintenance</h4>
                                            <ul>
                                                <li>Mises à jour régulières</li>
                                                <li>Maintenance préventive</li>
                                                <li>Sauvegarde sécurisée</li>
                                                <li>Monitoring continu</li>
                                            </ul>
                                            <div class="support-sla">
                                                <strong>Disponibilité: 99.5%</strong>
                                            </div>
                                        </div>
                                        
                                        <div class="support-card">
                                            <div class="support-icon">📚</div>
                                            <h4>Ressources</h4>
                                            <ul>
                                                <li>Base de connaissances</li>
                                                <li>Tutoriels vidéo</li>
                                                <li>FAQ complète</li>
                                                <li>Communauté utilisateurs</li>
                                            </ul>
                                            <div class="support-sla">
                                                <strong>Accès: 24/7</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Section CTA finale -->
                <section class="services-cta section">
                    <div class="container">
                        <div class="cta-content">
                            <h2>Prêt à Optimiser Votre Entreprise ?</h2>
                            <p>
                                Nos experts analysent vos besoins et vous proposent la solution la mieux adaptée 
                                à vos objectifs et contraintes.
                            </p>
                            <div class="cta-actions">
                                <button class="btn btn-primary btn-xl" 
                                        onclick="window.open('${this.getCalendlyUrl()}', '_blank')">
                                    📅 Réserver une Consultation Gratuite
                                </button>
                                <button class="btn btn-outline btn-lg" 
                                        onclick="this.scrollToContact()">
                                    📧 Nous Contacter
                                </button>
                            </div>
                            <div class="cta-guarantees">
                                <div class="guarantee-item">
                                    <span class="guarantee-icon">✅</span>
                                    <span>Consultation gratuite de 30 minutes</span>
                                </div>
                                <div class="guarantee-item">
                                    <span class="guarantee-icon">✅</span>
                                    <span>Analyse personnalisée de vos besoins</span>
                                </div>
                                <div class="guarantee-item">
                                    <span class="guarantee-icon">✅</span>
                                    <span>Recommandations concrètes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `;
    },

    /**
     * Initialisation de la page
     */
    init() {
        try {
            if (this.initialized) {
                console.log('📋 Page services déjà initialisée');
                return;
            }

            console.log('📋 Initialisation page services...');
            
            this.bindEvents();
            this.initializeServiceNavigation();
            this.initialized = true;
            
            console.log('✅ Page services initialisée');
            
        } catch (error) {
            console.error('❌ Erreur initialisation page services:', error);
        }
    },

    /**
     * Liaison des événements
     */
    bindEvents() {
        try {
            // Navigation entre services
            document.addEventListener('click', (e) => {
                const navBtn = e.target.closest('.service-nav-btn');
                if (navBtn) {
                    const service = navBtn.dataset.service;
                    this.showService(service);
                }

                // Onglets de formation
                const programTab = e.target.closest('.program-tab');
                if (programTab) {
                    const program = programTab.dataset.program;
                    this.showProgram(program);
                }

                // Accès aux démos client
                const demoBtn = e.target.closest('[onclick*="accessClientDemo"]');
                if (demoBtn) {
                    e.preventDefault();
                    const demoId = this.extractDemoId(demoBtn.getAttribute('onclick'));
                    this.accessClientDemo(demoId);
                }
            });

            console.log('✅ Événements page services liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison événements services:', error);
        }
    },

    /**
     * Initialiser la navigation des services
     */
    initializeServiceNavigation() {
        try {
            // Activer le premier service par défaut
            this.showService('overview');
            
        } catch (error) {
            console.error('❌ Erreur initialisation navigation services:', error);
        }
    },

    /**
     * Afficher un service spécifique
     */
    showService(serviceId) {
        try {
            this.activeService = serviceId;

            // Mettre à jour les boutons de navigation
            document.querySelectorAll('.service-nav-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.service === serviceId);
            });

            // Mettre à jour les sections
            document.querySelectorAll('.service-section').forEach(section => {
                section.classList.toggle('active', section.id === `${serviceId}-section`);
            });

            // Scroll vers le contenu
            const targetSection = document.getElementById(`${serviceId}-section`);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            console.log(`✅ Service affiché: ${serviceId}`);
            
        } catch (error) {
            console.error(`❌ Erreur affichage service ${serviceId}:`, error);
        }
    },

    /**
     * Afficher un programme de formation
     */
    showProgram(programId) {
        try {
            // Mettre à jour les onglets
            document.querySelectorAll('.program-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.program === programId);
            });

            // Mettre à jour le contenu
            document.querySelectorAll('.program-content').forEach(content => {
                content.classList.toggle('active', content.id === `${programId}-program`);
            });

            console.log(`✅ Programme affiché: ${programId}`);
            
        } catch (error) {
            console.error(`❌ Erreur affichage programme ${programId}:`, error);
        }
    },

    /**
     * Accès aux démos client
     */
    accessClientDemo(demoId) {
        try {
            console.log(`🔐 Tentative d'accès à la démo: ${demoId}`);
            
            // Vérifier la disponibilité du système d'accès client
            if (typeof window.OweoClientAccess === 'undefined') {
                this.showNotification('Système d\'accès client non disponible', 'error');
                return;
            }

            // Vérifier l'accès
            if (window.OweoClientAccess.hasAccess()) {
                // Accès direct
                if (window.router) {
                    window.router.navigate(demoId);
                } else {
                    window.location.hash = demoId;
                }
            } else {
                // Demander l'authentification
                window.OweoClientAccess.showAuthModal(demoId);
            }
            
        } catch (error) {
            console.error(`❌ Erreur accès démo ${demoId}:`, error);
            this.showNotification('Erreur lors de l\'accès à la démonstration', 'error');
        }
    },

    /**
     * Extraire l'ID de démo d'un attribut onclick
     */
    extractDemoId(onclickStr) {
        try {
            const match = onclickStr.match(/'([^']+)'/);
            return match ? match[1] : null;
        } catch (error) {
            console.error('❌ Erreur extraction ID démo:', error);
            return null;
        }
    },

    /**
     * Navigation
     */
    scrollToContact() {
        try {
            // Si on est sur la page d'accueil, scroller vers contact
            if (window.router && window.router.currentRoute?.component === 'home') {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Naviguer vers la page d'accueil puis contact
                if (window.router) {
                    window.router.navigate('home');
                    setTimeout(() => {
                        this.scrollToContact();
                    }, 500);
                }
            }
        } catch (error) {
            console.error('❌ Erreur scroll vers contact:', error);
        }
    },

    /**
     * Notifications
     */
    showNotification(message, type = 'info', duration = 3000) {
        try {
            if (window.OweoClientAccess && typeof window.OweoClientAccess.showNotification === 'function') {
                window.OweoClientAccess.showNotification(message, type, duration);
            } else {
                console.log(`${type.toUpperCase()}: ${message}`);
            }
        } catch (error) {
            console.error('❌ Erreur notification:', error);
            console.log(message);
        }
    },

    /**
     * Getters pour la configuration
     */
    getCalendlyUrl() {
        return (typeof OweoConfig !== 'undefined' && OweoConfig.urls?.calendly) || 'https://calendly.com/oweo-consulting';
    },

    /**
     * Destruction propre
     */
    destroy() {
        try {
            this.activeService = null;
            this.initialized = false;
            console.log('📋 Page services détruite');
            
        } catch (error) {
            console.error('❌ Erreur destruction page services:', error);
        }
    }
};

console.log('📋 Services page loaded with complete functionality');