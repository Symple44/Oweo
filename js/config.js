// js/config.js

window.OweoConfig = {
    siteName: 'Oweo',
    version: '1.0.0',
    
    // Navigation principale
    navigation: [
        { 
            id: 'home', 
            label: 'Accueil', 
            icon: '🏠'
        },
        { 
            id: 'outils-gestion', 
            label: 'Outils de Gestion', 
            icon: '🛠️'
        },
        { 
            id: 'developpement', 
            label: 'Développement', 
            icon: '💻'
        },
        { 
            id: 'en1090', 
            label: 'EN1090', 
            icon: '📋'
        },
        { 
            id: 'ia-projets', 
            label: 'IA & Innovation', 
            icon: '🤖'
        },
        { 
            id: 'optimisation', 
            label: 'Optimisation', 
            icon: '⚡'
        }
    ],
    
    // Configuration des pages
    pages: {
        home: {
            title: 'Hub d\'Expertise Digitale',
            subtitle: 'Guides & Conseils pour votre Transformation Numérique'
        },
        'outils-gestion': {
            title: 'Outils de Gestion',
            subtitle: 'Guides experts pour choisir et implémenter les meilleurs outils'
        },
        'developpement': {
            title: 'Développement & Intégrations',
            subtitle: 'Conseils techniques et bonnes pratiques'
        },
        'en1090': {
            title: 'Conformité EN1090',
            subtitle: 'Guide complet pour la mise en conformité'
        },
        'ia-projets': {
            title: 'IA & Innovation',
            subtitle: 'Intelligence artificielle appliquée au métier'
        },
        'optimisation': {
            title: 'Optimisation Production',
            subtitle: 'Méthodes d\'audit et d\'optimisation'
        }
    },
    
    // Contact
    contact: {
        email: 'contact@oweo-consulting.fr',
        phone: '+33 1 23 45 67 89',
        linkedin: 'https://linkedin.com/company/oweo',
        address: 'Nantes, France'
    },
    
    // Pages légales
    legalPages: [
        { id: 'mentions-legales', label: 'Mentions légales' },
        { id: 'conditions-utilisation', label: 'Conditions d\'utilisation' },
        { id: 'politique-confidentialite', label: 'Politique de Confidentialité & Cookies' },
        { id: 'conditions-generales', label: 'Conditions Générales' },
        { id: 'compliance', label: 'Compliance' }
    ]
};