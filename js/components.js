// js/components.js

// Navigation Component
class Navigation {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

// Footer Component
class Footer {
    constructor() {
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Oweo</h4>
                        <p>Expert en transformation numérique pour les entreprises de charpente métallique.</p>
                        <p>Accompagnement, conseil et solutions digitales adaptées à votre métier.</p>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Contact</h4>
                        <p>📧 ${OweoConfig.contact.email}</p>
                        <p>📞 ${OweoConfig.contact.phone}</p>
                        <p>📍 ${OweoConfig.contact.address}</p>
                        <p><a href="${OweoConfig.contact.linkedin}" target="_blank">LinkedIn</a></p>
                    </div>
                    
                    <div class="footer-section">
                        <h4>Expertise</h4>
                        <ul class="footer-links">
                            <li><a onclick="router.navigate('outils-gestion')">Outils de Gestion</a></li>
                            <li><a onclick="router.navigate('developpement')">Développement</a></li>
                            <li><a onclick="router.navigate('en1090')">Conformité EN1090</a></li>
                            <li><a onclick="router.navigate('ia-projets')">IA & Innovation</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <div class="footer-copyright">
                        © 2025 Oweo. Tous droits réservés.
                    </div>
                    <div class="footer-legal">
                        ${OweoConfig.legalPages.map(page => `
                            <a onclick="router.navigate('${page.id}')">${page.label}</a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }
}

    init() {
        this.render();
    }

    render() {
        const nav = document.getElementById('navbar');
        nav.innerHTML = `
            <div class="nav-content">
                <div class="logo" onclick="router.navigate('home')">
                    <span class="logo-text">💻 ${OweoConfig.siteName}</span>
                </div>
                <ul class="nav-links">
                    ${OweoConfig.navigation.map(item => `
                        <li><a id="nav-${item.id}" onclick="router.navigate('${item.id}')">${item.label}</a></li>
                    `).join('')}
                </ul>
                <a href="#contact" class="btn btn-primary">Contact Expert</a>
            </div>
        `;
    }

    setActive(pageId) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current page
        const activeLink = document.getElementById(`nav-${pageId}`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        this.currentPage = pageId;
    }
}

// Page Loader Component
class PageLoader {
    constructor() {
        this.currentPage = null;
        this.init();
    }

    init() {
        this.setupPageContainer();
    }

    setupPageContainer() {
        const app = document.getElementById('app');
        if (!app) {
            console.error('App container not found');
            return;
        }
    }

    async loadPage(pageId) {
        try {
            // Hide current page
            if (this.currentPage) {
                const currentPageElement = document.getElementById(this.currentPage);
                if (currentPageElement) {
                    currentPageElement.classList.remove('active');
                }
            }

            // Load or show new page
            let pageElement = document.getElementById(pageId);
            
            if (!pageElement) {
                pageElement = await this.createPage(pageId);
            }

            if (pageElement) {
                pageElement.classList.add('active');
                this.currentPage = pageId;
                
                // Update navigation
                window.navigation.setActive(pageId);
                
                // Initialize page-specific functionality
                this.initializePage(pageId);
            }

        } catch (error) {
            console.error('Error loading page:', error);
        }
    }

    async createPage(pageId) {
        const app = document.getElementById('app');
        const pageElement = document.createElement('div');
        pageElement.id = pageId;
        pageElement.className = 'page';

        // Get page content from page classes
        const pageClass = window.pages[pageId];
        if (pageClass) {
            pageElement.innerHTML = pageClass.render();
        } else {
            pageElement.innerHTML = '<div class="container"><h1>Page not found</h1></div>';
        }

        app.appendChild(pageElement);
        return pageElement;
    }

    initializePage(pageId) {
        const pageClass = window.pages[pageId];
        if (pageClass && typeof pageClass.init === 'function') {
            pageClass.init();
        }
    }
}

// Article Renderer Component
class ArticleRenderer {
    static renderArticleGrid(articles, containerId) {
        const container = document.getElementById(containerId);
        if (!container || !articles) return;

        container.innerHTML = articles.map(article => `
            <div class="card" onclick="router.navigate('article', '${article.id}')" style="cursor: pointer;">
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                    <span class="article-time">📖 ${article.time}</span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="article-tags">
                    ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    static renderTipsGrid(tips, containerId) {
        const container = document.getElementById(containerId);
        if (!container || !tips) return;

        container.innerHTML = tips.map(tip => `
            <div class="tip-card">
                <h4>${tip.icon} ${tip.title}</h4>
                <p>${tip.content}</p>
            </div>
        `).join('');
    }

    static renderArticleDetail(articleId) {
        // Find article in all categories
        let article = null;
        let category = null;
        
        for (const cat in window.ArticlesData) {
            article = window.ArticlesData[cat].find(a => a.id === articleId);
            if (article) {
                category = cat;
                break;
            }
        }

        if (!article) {
            return '<div class="container"><h1>Article non trouvé</h1></div>';
        }

        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('${category}')">← Retour</button>
                    <div class="content-detail">
                        <div class="section-header">
                            <h1 class="section-title">${article.title}</h1>
                            <div class="article-meta" style="justify-content: center;">
                                <span class="article-category">${article.category}</span>
                                <span class="article-time">📖 ${article.time}</span>
                            </div>
                        </div>
                        <div class="content-body">
                            ${article.content}
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}

// Initialize components
window.navigation = new Navigation();
window.footer = new Footer();
window.pageLoader = new PageLoader();
window.ArticleRenderer = ArticleRenderer;