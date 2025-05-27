// js/router.js

class Router {
    constructor() {
        this.currentRoute = null;
        this.init();
    }

    init() {
        // Handle browser back/forward
        window.addEventListener('popstate', (event) => {
            if (event.state && event.state.page) {
                this.navigate(event.state.page, event.state.params, false);
            } else {
                this.navigate('home', null, false);
            }
        });

        // Load initial page
        this.loadInitialPage();
    }

    navigate(page, params = null, pushState = true) {
        if (page === 'article' && params) {
            this.showArticle(params);
        } else {
            this.showPage(page);
        }

        // Update browser history
        if (pushState) {
            const state = { page, params };
            const url = params ? `#${page}/${params}` : `#${page}`;
            history.pushState(state, '', url);
        }

        this.currentRoute = { page, params };
    }

    async showPage(pageId) {
        try {
            await window.pageLoader.loadPage(pageId);
            
            // Update page title
            const pageConfig = OweoConfig.pages[pageId];
            if (pageConfig) {
                document.title = `${pageConfig.title} - ${OweoConfig.siteName}`;
            }
            
        } catch (error) {
            console.error('Error showing page:', error);
        }
    }

    showArticle(articleId) {
        // Create or update article detail page
        let articlePage = document.getElementById('article-detail');
        
        if (!articlePage) {
            articlePage = document.createElement('div');
            articlePage.id = 'article-detail';
            articlePage.className = 'page';
            document.getElementById('app').appendChild(articlePage);
        }

        articlePage.innerHTML = ArticleRenderer.renderArticleDetail(articleId);

        // Hide current page and show article
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        articlePage.classList.add('active');
        
        // Update navigation state
        window.navigation.setActive('article');
        
        // Update page title
        const article = this.findArticleById(articleId);
        if (article) {
            document.title = `${article.title} - ${OweoConfig.siteName}`;
        }
    }

    findArticleById(articleId) {
        for (const category in window.ArticlesData) {
            const article = window.ArticlesData[category].find(a => a.id === articleId);
            if (article) return article;
        }
        return null;
    }

    loadInitialPage() {
        try {
            // Check URL hash for initial page
            const hash = window.location.hash.slice(1);
            if (hash) {
                const [page, params] = hash.split('/');
                this.navigate(page, params, false);
            } else {
                this.navigate('home', null, false);
            }
        } catch (error) {
            console.error('Error loading initial page:', error);
            // Fallback to home
            this.navigate('home', null, false);
        }
    }

    goBack() {
        history.back();
    }
}

// Initialize router
window.router = new Router();