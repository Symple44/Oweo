// js/core/api.js - API utilities
window.OweoAPI = {
    baseURL: OweoConfig?.urls?.api || '/api/v1',
    
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        };
        
        try {
            const response = await fetch(url, config);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
    
    get(endpoint) {
        return this.request(endpoint);
    },
    
    post(endpoint, data) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
};

// js/core/storage.js - Storage utilities (déjà dans utils.js mais séparé)
window.OweoStorage = {
    set: OweoUtils?.storage?.set || function() { console.warn('Storage not available'); },
    get: OweoUtils?.storage?.get || function() { console.warn('Storage not available'); },
    remove: OweoUtils?.storage?.remove || function() { console.warn('Storage not available'); }
};

// js/data/solutions.js - Solutions data
window.OweoData = window.OweoData || {};
window.OweoData.solutions = [
    {
        id: 'erp-gestion',
        name: 'ERP & Gestion',
        description: 'Solutions ERP adaptées à votre métier',
        icon: '🛠️'
    },
    {
        id: 'business-intelligence',
        name: 'Business Intelligence',
        description: 'Pilotage performance temps réel',
        icon: '📊'
    }
];

// js/data/testimonials.js - Testimonials data
window.OweoData.testimonials = [
    {
        name: 'Michel Dubois',
        company: 'Directeur Général',
        text: 'Oweo a révolutionné notre gestion.',
        rating: 5
    }
];

// js/data/tips.js - Tips data
window.OweoData.tips = {
    'outils-gestion': [
        {
            icon: '🎯',
            title: 'Choix ERP Optimal',
            content: 'Testez toujours l\'ERP avec vos vraies données.'
        }
    ]
};

// js/components/article-renderer.js - Article renderer
window.ArticleRenderer = {
    renderArticleGrid: function(articles, containerId) {
        const container = document.getElementById(containerId);
        if (!container || !articles) return;
        
        container.innerHTML = articles.map(article => `
            <div class="card">
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
            </div>
        `).join('');
    },
    
    renderTipsGrid: function(tips, containerId) {
        const container = document.getElementById(containerId);
        if (!container || !tips) return;
        
        container.innerHTML = tips.map(tip => `
            <div class="tip-card">
                <h4>${tip.icon} ${tip.title}</h4>
                <p>${tip.content}</p>
            </div>
        `).join('');
    }
};

// js/components/roi-calculator.js - ROI Calculator
window.OweoROICalculator = class {
    constructor() {
        console.log('ROI Calculator initialized');
    }
};

// js/components/modal.js - Modal component
window.OweoModal = {
    show: function(content) {
        console.log('Modal:', content);
    }
};

// js/pages/legal.js - Legal pages
window.pages = window.pages || {};
window.pages.legal = {
    render: () => '<div>Legal content</div>',
    init: () => console.log('Legal page initialized')
};

// js/core/page-loader.js - Page loader
window.OweoPageLoader = {
    load: function(page) {
        console.log('Loading page:', page);
    }
};

console.log('📦 Missing JS files loaded');