// js/core/config.js - Configuration centralisée de l'application

window.OweoConfig = {
    // Meta informations
    siteName: 'Oweo',
    version: '3.0.0',
    environment: 'production', // 'development' | 'staging' | 'production'
    
    // URLs et endpoints
    urls: {
        base: window.location.origin,
        api: '/api/v1',
        calendly: 'https://calendly.com/nicolas-dubain/30min',
        linkedin: 'https://linkedin.com/company/oweo-consulting'
    },
    
    // Configuration des fonctionnalités
    features: {
        analytics: true,
        cookieConsent: true,
        chatbot: false,
        notifications: true,
        darkMode: true,
        multiLanguage: false,
        blog: true,
        ecommerce: false
    },
    
    // Configuration cookies
    cookies: {
        enabled: true,
        autoShow: true, // Afficher automatiquement la bannière
        expiryDays: 365,
        categories: {
            necessary: { required: true, default: true },
            analytics: { required: false, default: false },
            marketing: { required: false, default: false }
        }
    },
    
    // Paramètres de performance
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        cacheStrategy: 'stale-while-revalidate',
        prefetchPages: ['outils-gestion', 'consulting-strategique'],
        criticalCSS: true
    },
    
    // Contact et entreprise
    company: {
        name: 'Oweo Consulting',
        legalName: 'Oweo SARL',
        tagline: 'Expert ERP & Transformation Digitale',
        description: 'Accompagnement sur-mesure pour entreprises de charpente métallique',
        founded: '2014',
        employees: '1-10',
        location: 'Nantes, France',
        timezone: 'Europe/Paris'
    },
    
    // Informations de contact
    contact: {
        email: 'contact@oweo-consulting.fr',
        phone: '+33 1 23 45 67 89',
        address: {
            street: '123 Rue de la Métallurgie',
            city: 'Nantes',
            postalCode: '44000',
            country: 'France',
            region: 'Pays de la Loire'
        },
        social: {
            linkedin: 'https://linkedin.com/company/oweo-consulting',
            twitter: null,
            facebook: null,
            youtube: null
        },
        hours: {
            monday: '09:00-18:00',
            tuesday: '09:00-18:00',
            wednesday: '09:00-18:00',
            thursday: '09:00-18:00',
            friday: '09:00-18:00',
            saturday: 'Fermé',
            sunday: 'Fermé'
        }
    },
    
    // Expertise et statistiques
    expertise: {
        title: 'Expert ERP & Transformation Digitale',
        experience: '10+ années d\'expérience terrain',
        specialization: 'Métallurgie, Construction, Industries manufacturières',
        approach: 'Approche terrain et résultats mesurables',
        certifications: ['Sage X3', 'Microsoft Partner', 'EN1090'],
        languages: ['Français', 'Anglais'],
        stats: {
            projects: '15+',
            successRate: '100%',
            experience: '10+',
            clients: '20+',
            satisfaction: '98%',
            avgROI: '18 mois'
        }
    },
    
    // Secteurs d'activité
    sectors: [
        {
            id: 'charpente-metallique',
            name: 'Charpente Métallique',
            icon: '🏗️',
            description: 'Spécialisation complète du chiffrage à la livraison',
            marketSize: 'Leadership',
            experience: '10+ ans'
        },
        {
            id: 'serrurerie-metallerie',
            name: 'Serrurerie Métallerie',
            icon: '🔧',
            description: 'Optimisation des flux de production',
            marketSize: 'Expert',
            experience: '8+ ans'
        },
        {
            id: 'construction-metallique',
            name: 'Construction Métallique',
            icon: '🏭',
            description: 'Conformité EN1090 et gestion qualité',
            marketSize: 'Spécialiste',
            experience: '10+ ans'
        },
        {
            id: 'industrie-manufacturiere',
            name: 'Industries Manufacturières',
            icon: '⚙️',
            description: 'Transformation digitale globale',
            marketSize: 'Généraliste',
            experience: '6+ ans'
        }
    ],
    
    // Stack technologique
    technologies: {
        erp: {
            primary: ['Sage X3', 'Eurêka', '2CM Manager'],
            secondary: ['Sylob', 'Herakles', 'Divalto'],
            expertise: 'Expert'
        },
        cao: {
            primary: ['Tekla Structure', 'AutoCAD'],
            secondary: ['Robot Structural', 'SolidWorks'],
            expertise: 'Avancé'
        },
        development: {
            frontend: ['JavaScript', 'React', 'Vue.js', 'HTML5', 'CSS3'],
            backend: ['Node.js', '.NET', 'Python', 'PHP'],
            mobile: ['React Native', 'Progressive Web Apps'],
            expertise: 'Expert'
        },
        databases: {
            primary: ['PostgreSQL', 'SQL Server'],
            secondary: ['MySQL', 'MongoDB', 'HFSQL'],
            expertise: 'Expert'
        },
        cloud: {
            primary: ['Microsoft 365', 'Azure'],
            secondary: ['AWS', 'Google Cloud'],
            tools: ['Teams', 'SharePoint', 'OneDrive'],
            expertise: 'Avancé'
        },
        ai: {
            tools: ['OpenAI GPT', 'Mistral AI', 'Computer Vision'],
            techniques: ['RAG', 'Machine Learning', 'NLP'],
            applications: ['Chatbots', 'Analyse prédictive', 'OCR'],
            expertise: 'Intermédiaire'
        },
        bi: {
            tools: ['Power BI', 'Tableau', 'Qlik'],
            techniques: ['Data Modeling', 'ETL', 'Analytics'],
            expertise: 'Expert'
        }
    },
    
    // Services proposés
    services: [
        {
            id: 'diagnostic',
            name: 'Diagnostic Digital Gratuit',
            description: 'Audit complet de votre maturité digitale',
            duration: '2-3 jours',
            price: 'Gratuit',
            deliverables: ['Rapport d\'audit détaillé', 'Plan d\'action prioritaire', 'Estimation ROI'],
            includes: [
                'Audit processus complet',
                'Identification des gains prioritaires', 
                'Recommandations concrètes',
                'Rapport détaillé'
            ],
            callToAction: 'Réserver maintenant'
        },
        {
            id: 'conseil-strategique',
            name: 'Conseil Stratégique',
            description: 'Définition de votre stratégie de transformation',
            duration: '1-2 semaines',
            price: 'Sur devis',
            deliverables: ['Business case détaillé', 'Roadmap transformation', 'Plan financement'],
            includes: [
                'Business case détaillé',
                'Roadmap de transformation',
                'Calcul ROI précis',
                'Plan de financement'
            ],
            callToAction: 'Discuter du projet'
        },
        {
            id: 'accompagnement-complet',
            name: 'Accompagnement Complet',
            description: 'Prise en charge complète de votre projet',
            duration: '3-6 mois',
            price: 'Sur devis',
            deliverables: ['Solution déployée', 'Équipes formées', 'Support 6 mois'],
            includes: [
                'Gestion de projet complète',
                'Sélection et déploiement',
                'Formation des équipes',
                'Support 6 mois'
            ],
            callToAction: 'Lancer le projet'
        }
    ],
    
    // Navigation principale
    navigation: [
        { 
            id: 'home', 
            label: 'Accueil', 
            icon: '🏠',
            description: 'Page d\'accueil'
        },
        { 
            id: 'services', 
            label: 'Nos Services', 
            icon: '📋',
            description: 'Offres de service pour la métallurgie',
            category: 'business'
        },
        { 
            id: 'outils-gestion', 
            label: 'ERP Métallurgie', 
            icon: '🛠️',
            description: 'Solutions ERP spécialisées métallurgie',
            category: 'expertise'
        },
        { 
            id: 'consulting-strategique', 
            label: 'Conseil Expert', 
            icon: '📊',
            description: 'Conseil stratégique et transformation digitale',
            category: 'expertise'
        }
    ],

    // Pages configuration mise à jour
    pages: {
        home: {
            title: 'Expert ERP Métallurgie - Transformation Digitale',
            subtitle: 'Spécialiste charpente métallique, serrurerie et chaudronnerie',
            metaDescription: 'Expert ERP et transformation digitale pour entreprises de métallurgie. Diagnostic gratuit, 15+ projets réussis, ROI garanti.',
            keywords: 'ERP métallurgie, charpente métallique, serrurerie, chaudronnerie, transformation digitale'
        },
        'services': {
            title: 'Services Transformation Digitale Métallurgie',
            subtitle: 'Du diagnostic gratuit à l\'accompagnement complet',
            metaDescription: 'Services de transformation digitale pour métallurgie. Diagnostic gratuit, accompagnement stratégique, déploiement clé en main.',
            keywords: 'services transformation digitale, accompagnement ERP, conseil métallurgie'
        },
        'outils-gestion': {
            title: 'ERP Spécialisés Métallurgie',
            subtitle: 'Solutions ERP adaptées : 2CM Manager, Sage X3, GesCom',
            metaDescription: 'Comparatif ERP pour charpente métallique et serrurerie. Guide de sélection, ROI garantis, 15+ déploiements réussis.',
            keywords: 'ERP métallurgie, 2CM Manager, Sage X3, GesCom, logiciel charpente métallique'
        },
        'consulting-strategique': {
            title: 'Conseil Expert Transformation Digitale',
            subtitle: 'Audit, stratégie et accompagnement sur-mesure',
            metaDescription: 'Conseil stratégique spécialisé métallurgie. Audit gratuit, diagnostic maturité digitale, accompagnement transformation.',
            keywords: 'conseil transformation digitale, audit métallurgie, stratégie digitale, consultant ERP'
        }
    },
    
    // Résultats types et garanties
    results: {
        productivity: '+20%',
        errors: '-60%',
        margin: '+3 points',
        timeGain: '2h/jour/personne',
        deliveryOnTime: '95%',
        roi: '18 mois max',
        satisfaction: '98%',
        retention: '95%'
    },
    
    // Garanties offertes
    guarantees: [
        {
            icon: '✅',
            title: 'Résultats Garantis',
            description: 'Si vous ne gagnez pas 1h/jour/utilisateur en 3 mois, je reprends le projet',
            type: 'performance'
        },
        {
            icon: '🎯',
            title: '100% de Réussite',
            description: '15 projets ERP déployés avec succès, 0 échec',
            type: 'track-record'
        },
        {
            icon: '📞',
            title: 'Support Illimité',
            description: 'Support téléphonique illimité pendant 6 mois post-démarrage',
            type: 'support'
        },
        {
            icon: '💰',
            title: 'ROI Calculé',
            description: 'ROI calculé avant projet et vérifié à 6 mois',
            type: 'financial'
        }
    ],
    
    // Process méthodologique
    methodology: [
        {
            step: 1,
            id: 'diagnostic',
            title: 'Diagnostic Expert',
            description: 'Audit complet de vos processus actuels',
            duration: '2-3 jours',
            deliverable: 'Rapport d\'audit détaillé',
            icon: '🔍',
            activities: [
                'Audit terrain des processus',
                'Interview des utilisateurs clés',
                'Analyse des flux de données',
                'Identification des quick wins'
            ]
        },
        {
            step: 2,
            id: 'strategie',
            title: 'Stratégie & ROI',
            description: 'Définition de la stratégie et calcul du ROI',
            duration: '1 semaine',
            deliverable: 'Plan stratégique + business case',
            icon: '🎯',
            activities: [
                'Business case détaillé',
                'Calcul ROI précis',
                'Roadmap de transformation',
                'Plan de financement'
            ]
        },
        {
            step: 3,
            id: 'selection',
            title: 'Sélection Solution',
            description: 'Benchmark et sélection de la meilleure solution',
            duration: '2-3 semaines',
            deliverable: 'Recommandation argumentée',
            icon: '⚖️',
            activities: [
                'Benchmark solutions',
                'POC sur vos données',
                'Analyse coût/bénéfice',
                'Validation technique'
            ]
        },
        {
            step: 4,
            id: 'deploiement',
            title: 'Déploiement',
            description: 'Paramétrage et mise en œuvre de la solution',
            duration: '4-8 semaines',
            deliverable: 'Solution opérationnelle',
            icon: '🚀',
            activities: [
                'Paramétrage solution',
                'Intégrations techniques',
                'Tests et recettes',
                'Migration des données'
            ]
        },
        {
            step: 5,
            id: 'formation',
            title: 'Formation',
            description: 'Formation complète de vos équipes',
            duration: '1-2 semaines',
            deliverable: 'Équipes autonomes',
            icon: '🎓',
            activities: [
                'Formation sur mesure',
                'Documentation utilisateur',
                'Accompagnement terrain',
                'Certification utilisateurs'
            ]
        },
        {
            step: 6,
            id: 'support',
            title: 'Support',
            description: 'Accompagnement et optimisation continue',
            duration: '6 mois',
            deliverable: 'Résultats mesurés',
            icon: '📈',
            activities: [
                'Support technique illimité',
                'Mesure des performances',
                'Optimisations continues',
                'Évolutions fonctionnelles'
            ]
        }
    ],
    
    // FAQ
    faq: [
        {
            id: 'cout-erp',
            question: 'Combien coûte un déploiement ERP ?',
            answer: 'Le coût varie selon la taille de l\'entreprise et la complexité. Comptez entre 15k€ et 80k€ tout compris. Oweo vous fournit un devis précis après diagnostic gratuit.',
            category: 'pricing'
        },
        {
            id: 'duree-projet',
            question: 'Combien de temps dure un projet ?',
            answer: 'En moyenne 3-6 mois pour un déploiement complet. La phase de diagnostic prend 2-3 jours, la sélection 2-3 semaines, le déploiement 4-8 semaines.',
            category: 'timeline'
        },
        {
            id: 'gains-typiques',
            question: 'Quels sont les gains typiques ?',
            answer: 'Gains mesurés chez les clients Oweo : +20% productivité, -60% erreurs, +3 points de marge, 2h/jour gagnées par personne, délais respectés à 95%.',
            category: 'results'
        },
        {
            id: 'zone-intervention',
            question: 'Travaillez-vous uniquement en région Nantaise ?',
            answer: 'Oweo intervient dans toute la France. Basés à Nantes, nous intervenons régulièrement en Bretagne, Pays de Loire, Nouvelle-Aquitaine et région parisienne.',
            category: 'logistics'
        },
        {
            id: 'secteur-activite',
            question: 'Travaillez-vous uniquement en charpente métallique ?',
            answer: 'Notre spécialité est la charpente métallique, mais nous intervenons aussi en serrurerie, métallerie, construction métallique et industries manufacturières similaires.',
            category: 'sectors'
        },
        {
            id: 'support-apres-projet',
            question: 'Quel support après le projet ?',
            answer: 'Support téléphonique illimité pendant 6 mois, puis contrat de maintenance optionnel. Nous assurons aussi les évolutions et formations complémentaires.',
            category: 'support'
        }
    ],
    
    // Pages légales
    legalPages: [
        { 
            id: 'mentions-legales', 
            label: 'Mentions légales', 
            required: true,
            description: 'Informations légales obligatoires sur l\'entreprise',
            seo: {
                title: 'Mentions Légales - Oweo',
                metaDescription: 'Mentions légales d\'Oweo - Informations sur l\'entreprise, hébergement, propriété intellectuelle et responsabilité.',
                keywords: 'mentions légales, oweo, SASU, siret, hébergement'
            }
        },
        { 
            id: 'conditions-utilisation', 
            label: 'Conditions d\'utilisation', 
            required: true,
            description: 'Conditions générales d\'utilisation du site web',
            seo: {
                title: 'Conditions d\'Utilisation - Oweo',
                metaDescription: 'Conditions générales d\'utilisation du site Oweo. Droits et obligations des utilisateurs.',
                keywords: 'conditions utilisation, CGU, droits, obligations'
            }
        },
        { 
            id: 'politique-confidentialite', 
            label: 'Politique de Confidentialité & Cookies', 
            required: true,
            description: 'Protection des données personnelles et gestion des cookies',
            seo: {
                title: 'Politique de Confidentialité & Cookies - Oweo',
                metaDescription: 'Politique de confidentialité conforme RGPD. Gestion des données personnelles et cookies sur le site Oweo.',
                keywords: 'confidentialité, RGPD, cookies, données personnelles, protection'
            }
        },
        { 
            id: 'conditions-generales', 
            label: 'Conditions Générales de Vente', 
            required: false,
            description: 'Conditions applicables aux prestations de conseil',
            seo: {
                title: 'Conditions Générales de Vente - Oweo',
                metaDescription: 'Conditions générales de vente pour les prestations de conseil en transformation digitale d\'Oweo.',
                keywords: 'CGV, conditions vente, prestations conseil, tarifs'
            }
        },
        { 
            id: 'compliance', 
            label: 'Compliance & Certifications', 
            required: false,
            description: 'Nos engagements qualité et conformité',
            seo: {
                title: 'Compliance & Certifications - Oweo',
                metaDescription: 'Certifications, engagements qualité et conformité d\'Oweo. Sécurité, déontologie et responsabilité sociétale.',
                keywords: 'compliance, certifications, qualité, sécurité, déontologie'
            }
        }
    ],
    
    // SEO et méta-données
    seo: {
        defaultTitle: 'Oweo - Expert ERP Charpente Métallique | Transformation Digitale',
        titleTemplate: '%s - Oweo',
        defaultDescription: 'Conseil expert en ERP et transformation digitale pour entreprises de charpente métallique. ',
        keywords: 'ERP charpente métallique, transformation digitale, consultant ERP, Sage X3, 2CM Manager,  Tekla Structure, Dolibarr, GPAO construction métallique, MES construction métallique optimisation production, automatisation, Pays de Loire, Nantes',
        author: 'Nicolas Dubain - Oweo',
        robots: 'index, follow',
        canonical: 'https://oweo-consulting.fr',
        ogImage: '/assets/og-image.jpg',
        twitterCard: 'summary_large_image'
    },
    
    // Analytics et tracking
    analytics: {
        googleAnalytics: 'GA_MEASUREMENT_ID',
        googleTagManager: 'GTM_CONTAINER_ID',
        facebookPixel: null,
        linkedinInsight: null,
        hotjar: null,
        events: {
            pageView: 'page_view',
            contactForm: 'contact_form_submit',
            calendlyClick: 'calendly_click',
            roiCalculator: 'roi_calculator_use',
            downloadGuide: 'guide_download'
        }
    },
    
    // Configuration technique
    technical: {
        apiTimeout: 10000,
        retryAttempts: 3,
        cacheExpiry: 3600000, // 1 hour
        imageFormats: ['webp', 'avif', 'jpg', 'png'],
        lazyLoadOffset: 100,
        animationDuration: 300,
        debounceDelay: 300
    }
};