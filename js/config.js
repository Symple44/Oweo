// js/config.js - VERSION AMÉLIORÉE avec profil Nicolas

window.OweoConfig = {
    siteName: 'Oweo',
    version: '2.0.0',
    
    // Expertise de l'équipe (basée sur votre expérience)
    expertise: {
        title: 'Expert ERP & Transformation Digitale',
        experience: '10+ années d\'expérience terrain',
        specialization: 'Métallurgie, Construction, Industries manufacturières',
        approach: 'Approche terrain et résultats mesurables',
        stats: {
            projects: '15+',
            successRate: '100%',
            experience: '10+',
            clients: '20+'
        }
    },
    
    // Navigation principale mise à jour
    navigation: [
        { 
            id: 'home', 
            label: 'Accueil', 
            icon: '🏠'
        },
        { 
            id: 'outils-gestion', 
            label: 'ERP & Outils', 
            icon: '🛠️',
            description: 'Choix et déploiement d\'ERP spécialisés'
        },
        { 
            id: 'consulting-strategique', 
            label: 'Conseil Stratégique', 
            icon: '🎯',
            description: 'Diagnostic et stratégie digitale'
        },
        { 
            id: 'accompagnement-projet', 
            label: 'Accompagnement', 
            icon: '🤝',
            description: 'Gestion de projet transformation'
        },
        { 
            id: 'ia-projets', 
            label: 'IA & Innovation', 
            icon: '🤖',
            description: 'Intelligence artificielle métier'
        },
        { 
            id: 'optimisation', 
            label: 'Optimisation', 
            icon: '⚡',
            description: 'Amélioration des processus'
        }
    ],
    
    // Configuration des pages mise à jour
    pages: {
        home: {
            title: 'Expert ERP & Transformation Digitale',
            subtitle: 'Accompagnement sur-mesure pour entreprises de charpente métallique'
        },
        'outils-gestion': {
            title: 'ERP & Outils de Gestion',
            subtitle: '15+ déploiements ERP réussis - Méthodologie éprouvée'
        },
        'consulting-strategique': {
            title: 'Conseil Stratégique',
            subtitle: 'Diagnostic et stratégie de transformation digitale'
        },
        'accompagnement-projet': {
            title: 'Accompagnement de Projet',
            subtitle: 'Méthodologie garantissant 100% de succès'
        },
        'ia-projets': {
            title: 'IA & Innovation',
            subtitle: 'Intelligence artificielle appliquée à votre métier'
        },
        'optimisation': {
            title: 'Optimisation Production',
            subtitle: 'Méthodes d\'audit et gains mesurables'
        }
    },
    
    // Secteurs d'expertise
    secteurs: [
        {
            name: 'Charpente Métallique',
            icon: '🏗️',
            description: 'Spécialisation complète du chiffrage à la livraison'
        },
        {
            name: 'Serrurerie Métallerie',
            icon: '🔧',
            description: 'Optimisation des flux de production'
        },
        {
            name: 'Construction Métallique',
            icon: '🏭',
            description: 'Conformité EN1090 et gestion qualité'
        },
        {
            name: 'Industries Manufacturières',
            icon: '⚙️',
            description: 'Transformation digitale globale'
        }
    ],
    
    // Technologies maîtrisées
    technologies: {
        erp: ['Sage X3', 'GesCom', '2CM Manager', 'Sylob', 'Eurêka'],
        cao: ['Tekla Structure', 'AutoCAD', 'Robot Structural'],
        development: ['.NET', 'Windev', 'Python', 'VBA', 'JavaScript', 'PHP'],
        databases: ['PostgreSQL', 'DB2', 'HFSQL', 'SQL Server'],
        cloud: ['Microsoft 365', 'AWS', 'Teams', 'SharePoint'],
        ai: ['ChatGPT', 'Mistral', 'RAG', 'ElasticSearch', 'Machine Learning'],
        bi: ['Tableaux de bord', 'Analytics', 'KPI', 'Reporting']
    },
    
    // Contact
    contact: {
        email: 'contact@oweo-consulting.fr',
        phone: '+33 1 23 45 67 89',
        linkedin: 'https://linkedin.com/company/oweo-consulting',
        address: 'Nantes, France',
        calendly: 'https://calendly.com/nicolas-dubain/30min'
    },
    
    // Résultats types
    results: {
        productivity: '+20%',
        errors: '-60%',
        margin: '+3 points',
        timeGain: '2h/jour/personne',
        deliveryOnTime: '95%',
        roi: '18 mois max'
    },
    
    // Garanties
    guarantees: [
        {
            icon: '✅',
            title: 'Résultats Garantis',
            description: 'Si vous ne gagnez pas 1h/jour/utilisateur en 3 mois, je reprends le projet'
        },
        {
            icon: '🎯',
            title: '100% de Réussite',
            description: '15 projets ERP déployés avec succès, 0 échec'
        },
        {
            icon: '📞',
            title: 'Support Illimité',
            description: 'Support téléphonique illimité pendant 6 mois post-démarrage'
        },
        {
            icon: '💰',
            title: 'ROI Calculé',
            description: 'ROI calculé avant projet et vérifié à 6 mois'
        }
    ],
    
    // Process en 6 étapes
    process: [
        {
            step: 1,
            title: 'Diagnostic Gratuit',
            description: 'Audit complet de vos processus actuels',
            duration: '2-3 jours',
            deliverable: 'Rapport d\'audit détaillé'
        },
        {
            step: 2,
            title: 'Stratégie & ROI',
            description: 'Définition de la stratégie et calcul du ROI',
            duration: '1 semaine',
            deliverable: 'Plan stratégique + business case'
        },
        {
            step: 3,
            title: 'Sélection Solution',
            description: 'Benchmark et sélection de la meilleure solution',
            duration: '2-3 semaines',
            deliverable: 'Recommandation argumentée'
        },
        {
            step: 4,
            title: 'Déploiement',
            description: 'Paramétrage et mise en œuvre de la solution',
            duration: '4-8 semaines',
            deliverable: 'Solution opérationnelle'
        },
        {
            step: 5,
            title: 'Formation',
            description: 'Formation complète de vos équipes',
            duration: '1-2 semaines',
            deliverable: 'Équipes autonomes'
        },
        {
            step: 6,
            title: 'Support',
            description: 'Accompagnement et optimisation continue',
            duration: '6 mois',
            deliverable: 'Résultats mesurés'
        }
    ],
    
    // Offres de service
    services: [
        {
            id: 'diagnostic',
            name: 'Diagnostic Digital Gratuit',
            description: 'Audit complet de votre maturité digitale',
            duration: '2-3 jours',
            price: 'Gratuit',
            includes: [
                'Audit processus complet',
                'Identification des gains prioritaires',
                'Recommandations concrètes',
                'Rapport détaillé'
            ]
        },
        {
            id: 'conseil-strategique',
            name: 'Conseil Stratégique',
            description: 'Définition de votre stratégie de transformation',
            duration: '1-2 semaines',
            price: 'Sur devis',
            includes: [
                'Business case détaillé',
                'Roadmap de transformation',
                'Calcul ROI précis',
                'Plan de financement'
            ]
        },
        {
            id: 'accompagnement-complet',
            name: 'Accompagnement Complet',
            description: 'Prise en charge complète de votre projet',
            duration: '3-6 mois',
            price: 'Sur devis',
            includes: [
                'Gestion de projet complète',
                'Sélection et déploiement',
                'Formation des équipes',
                'Support 6 mois'
            ]
        }
    ],
    
    // FAQ
    faq: [
        {
            question: 'Combien coûte un déploiement ERP ?',
            answer: 'Le coût varie selon la taille de l\'entreprise et la complexité. Comptez entre 15k€ et 80k€ tout compris. Oweo vous fournit un devis précis après diagnostic gratuit.'
        },
        {
            question: 'Combien de temps dure un projet ?',
            answer: 'En moyenne 3-6 mois pour un déploiement complet. La phase de diagnostic prend 2-3 jours, la sélection 2-3 semaines, le déploiement 4-8 semaines.'
        },
        {
            question: 'Quels sont les gains typiques ?',
            answer: 'Gains mesurés chez les clients Oweo : +20% productivité, -60% erreurs, +3 points de marge, 2h/jour gagnées par personne, délais respectés à 95%.'
        },
        {
            question: 'Travaillez-vous uniquement en région Nantaise ?',
            answer: 'Oweo intervient dans toute la France. Basés à Nantes, nous intervenons régulièrement en Bretagne, Pays de Loire, Nouvelle-Aquitaine et région parisienne.'
        }
    ],
    
    // Pages légales (inchangées)
    legalPages: [
        { id: 'mentions-legales', label: 'Mentions légales' },
        { id: 'conditions-utilisation', label: 'Conditions d\'utilisation' },
        { id: 'politique-confidentialite', label: 'Politique de Confidentialité & Cookies' },
        { id: 'conditions-generales', label: 'Conditions Générales' },
        { id: 'compliance', label: 'Compliance' }
    ],
    
    // Meta SEO
    seo: {
        title: 'Oweo - Expert ERP Charpente Métallique | Transformation Digitale',
        description: 'Conseil expert en ERP et transformation digitale pour entreprises de charpente métallique. 15+ projets réussis, +20% productivité garantie. Diagnostic gratuit.',
        keywords: 'ERP charpente métallique, transformation digitale, consultant ERP, Sage X3, Tekla Structure, optimisation production, automatisation, Nantes'
    }
};