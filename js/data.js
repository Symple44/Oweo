// js/data.js

// Articles par catégorie
window.ArticlesData = {
    'outils-gestion': [
        {
            id: 'choix-erp-charpente',
            title: 'Comment Choisir son ERP pour la Charpente Métallique',
            category: 'Guide Complet',
            time: '15 min',
            excerpt: 'Guide détaillé pour sélectionner l\'ERP parfait selon vos besoins et budget.',
            tags: ['ERP', 'Sélection', 'ROI'],
            content: `
                <h3>🎯 Critères de Sélection Essentiels</h3>
                <p>Le choix d'un ERP nécessite une analyse approfondie de vos besoins spécifiques :</p>
                <ul>
                    <li><strong>Spécialisation métier :</strong> Gestion des nomenclatures, plans, découpe</li>
                    <li><strong>Intégrations :</strong> Compatibilité CAO/DAO, machines de découpe</li>
                    <li><strong>Évolutivité :</strong> Capacité à grandir avec votre entreprise</li>
                    <li><strong>Support :</strong> Qualité du support technique et formation</li>
                </ul>
                
                <h3>💰 Analyse ROI</h3>
                <p>Calculez le retour sur investissement :</p>
                <ul>
                    <li>Gains de productivité : 15-30% sur la gestion administrative</li>
                    <li>Réduction erreurs : 40-60% d'erreurs en moins</li>
                    <li>Optimisation stocks : 20-25% de réduction</li>
                </ul>
            `
        },
        {
            id: 'implementation-erp',
            title: 'Les 7 Étapes d\'une Implémentation ERP Réussie',
            category: 'Méthodologie',
            time: '12 min',
            excerpt: 'Roadmap complète pour mener à bien votre projet sans dépasser le budget.',
            tags: ['Implémentation', 'Gestion Projet'],
            content: `
                <h3>🚀 Phase de Préparation</h3>
                <p>La préparation représente 40% du succès de votre projet...</p>
                <ol>
                    <li>Audit des processus actuels</li>
                    <li>Définition du cahier des charges</li>
                    <li>Sélection du fournisseur</li>
                    <li>Formation des équipes</li>
                </ol>
            `
        }
    ],
    
    'developpement': [
        {
            id: 'architecture-application',
            title: 'Architecture d\'Application Métier pour la Charpente',
            category: 'Architecture',
            time: '20 min',
            excerpt: 'Guide pour concevoir une architecture robuste et évolutive.',
            tags: ['Architecture', 'Backend', 'Scalabilité'],
            content: `
                <h3>🏗️ Principes d'Architecture</h3>
                <p>Une architecture bien conçue est la fondation de toute application...</p>
                <ul>
                    <li>Séparation des responsabilités</li>
                    <li>Modularité et réutilisabilité</li>
                    <li>Scalabilité horizontale</li>
                </ul>
            `
        },
        {
            id: 'integrations-cao-erp',
            title: 'Intégrations CAO-ERP : Guide Technique',
            category: 'Intégrations',
            time: '18 min',
            excerpt: 'Comment réussir l\'intégration entre vos outils CAO et votre ERP.',
            tags: ['Intégration', 'CAO', 'API'],
            content: `
                <h3>🔗 Stratégie d'Intégration</h3>
                <p>L'intégration CAO-ERP est cruciale pour automatiser le flux de données...</p>
            `
        }
    ],
    
    'en1090': [
        {
            id: 'norme-en1090-exigences',
            title: 'EN1090 : Exigences et Solutions Digitales',
            category: 'Conformité',
            time: '25 min',
            excerpt: 'Guide complet des exigences EN1090 et solutions digitales.',
            tags: ['EN1090', 'Conformité', 'Qualité'],
            content: `
                <h3>📋 Exigences de la Norme</h3>
                <p>La norme EN1090 définit les exigences pour l'exécution des structures en acier...</p>
            `
        }
    ],
    
    'ia-projets': [
        {
            id: 'ia-controle-qualite',
            title: 'IA pour le Contrôle Qualité Automatique',
            category: 'IA Appliquée',
            time: '15 min',
            excerpt: 'Comment utiliser l\'IA pour automatiser le contrôle qualité.',
            tags: ['IA', 'Qualité', 'Automatisation'],
            content: `
                <h3>🤖 Vision par Ordinateur</h3>
                <p>L'IA de vision par ordinateur révolutionne le contrôle qualité...</p>
            `
        }
    ],
    
    'optimisation': [
        {
            id: 'audit-processus-production',
            title: 'Audit des Processus de Production',
            category: 'Méthodes',
            time: '18 min',
            excerpt: 'Méthodologie complète pour auditer vos flux de production.',
            tags: ['Audit', 'Production', 'Optimisation'],
            content: `
                <h3>🔍 Méthodologie d'Audit</h3>
                <p>Un audit efficace suit une méthodologie structurée...</p>
            `
        }
    ]
};

// Conseils par catégorie
window.TipsData = {
    'outils-gestion': [
        {
            icon: '💡',
            title: 'Conseil d\'Expert',
            content: 'Commencez toujours par un audit de vos processus actuels. 60% des échecs d\'implémentation ERP viennent d\'un mauvais diagnostic initial.'
        },
        {
            icon: '💰',
            title: 'Budget Réaliste',
            content: 'Comptez 3 à 5 fois le coût des licences pour le projet complet (formation, accompagnement, personnalisation).'
        },
        {
            icon: '🚀',
            title: 'Implémentation',
            content: 'Déployez par modules : commercial → production → comptabilité → modules avancés.'
        },
        {
            icon: '📊',
            title: 'Mesure de Succès',
            content: 'Taux d\'adoption utilisateur > 80% en 1 mois. Si inférieur, action corrective immédiate.'
        }
    ],
    
    'developpement': [
        {
            icon: '🏗️',
            title: 'Architecture Solide',
            content: 'Privilégiez une architecture microservices pour faciliter la maintenance et les évolutions.'
        },
        {
            icon: '🔗',
            title: 'Intégrations Prioritaires',
            content: 'Concentrez-vous d\'abord sur l\'intégration avec vos outils CAO et machines de production.'
        },
        {
            icon: '📱',
            title: 'Mobile First',
            content: 'Développez en mobile-first : 70% de l\'usage se fera sur mobile/tablette.'
        },
        {
            icon: '🔒',
            title: 'Sécurité by Design',
            content: 'Implémentez la sécurité dès la conception : authentification forte, chiffrement, audit trail.'
        }
    ],
    
    'en1090': [
        {
            icon: '📋',
            title: 'Documentation Digitale',
            content: 'Mettez en place un système de GED pour centraliser toute la documentation qualité.'
        },
        {
            icon: '🔍',
            title: 'Traçabilité Complète',
            content: 'Implémentez un système de QR codes pour tracer chaque pièce de sa conception à sa livraison.'
        },
        {
            icon: '✅',
            title: 'Contrôles Qualité',
            content: 'Digitalisez vos check-lists avec photos géolocalisées et signatures numériques.'
        },
        {
            icon: '📊',
            title: 'Tableaux de Bord',
            content: 'Créez des dashboards temps réel sur vos indicateurs qualité.'
        }
    ],
    
    'ia-projets': [
        {
            icon: '🎯',
            title: 'Cas d\'Usage Concrets',
            content: 'Commencez par l\'IA de reconnaissance d\'images pour le contrôle qualité des soudures.'
        },
        {
            icon: '📈',
            title: 'ROI Mesurable',
            content: 'Choisissez des projets IA avec ROI rapide : prédiction de pannes, optimisation planning.'
        },
        {
            icon: '🧠',
            title: 'IA Prédictive',
            content: 'Utilisez vos données historiques pour prédire délais et besoins matières premières.'
        },
        {
            icon: '🤖',
            title: 'Automatisation',
            content: 'Combinez IA et robotique pour l\'assemblage automatique de structures simples.'
        }
    ],
    
    'optimisation': [
        {
            icon: '🔍',
            title: 'Audit Systématique',
            content: 'Cartographiez tous vos processus avant d\'identifier les goulots d\'étranglement.'
        },
        {
            icon: '📊',
            title: 'KPI Essentiels',
            content: 'Mesurez : temps de cycle, taux de rebuts, utilisation machines, délais livraison.'
        },
        {
            icon: