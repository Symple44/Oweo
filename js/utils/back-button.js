// js/utils/back-button.js - Utilitaire pour les boutons retour

/**
 * Configure tous les boutons retour de la page
 * À appeler dans chaque page après le rendu
 */
window.setupBackButton = function() {
    console.log('🔙 Setting up back buttons...');
    
    // Sélectionner tous les boutons retour
    const backButtons = document.querySelectorAll('.btn-back');
    
    if (backButtons.length === 0) {
        console.log('No back buttons found');
        return;
    }
    
    backButtons.forEach((button, index) => {
        console.log(`Setting up back button ${index + 1}/${backButtons.length}`);
        
        // Nettoyer les attributs onclick existants
        button.removeAttribute('onclick');
        
        // Cloner le bouton pour supprimer tous les event listeners existants
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Ajouter le nouvel event listener
        newButton.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Back button clicked');
            handleBackNavigation();
        });
        
        // Support clavier
        newButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                console.log('Back button activated via keyboard');
                handleBackNavigation();
            }
        });
        
        // Assurer l'accessibilité
        if (!newButton.getAttribute('role')) {
            newButton.setAttribute('role', 'button');
        }
        if (!newButton.getAttribute('aria-label')) {
            newButton.setAttribute('aria-label', 'Retourner à la page précédente');
        }
        
        console.log('✅ Back button configured successfully');
    });
};

/**
 * Gère la navigation de retour avec plusieurs fallbacks
 */
function handleBackNavigation() {
    console.log('Handling back navigation...');
    
    try {
        // Option 1 : Router global
        if (window.router && typeof window.router.navigate === 'function') {
            console.log('Using global router for back navigation');
            window.router.navigate('/');
            return;
        }
        
        // Option 2 : Router de l'app
        if (window.oweoApp && window.oweoApp.router && typeof window.oweoApp.router.navigate === 'function') {
            console.log('Using app router for back navigation');
            window.oweoApp.router.navigate('/');
            return;
        }
        
        // Option 3 : Navigation système via navigation
        if (window.navigation && typeof window.navigation.navigateToPage === 'function') {
            console.log('Using navigation component');
            window.navigation.navigateToPage('home');
            return;
        }
        
        // Option 4 : Historique du navigateur (si on n'est pas sur la première page)
        if (window.history && window.history.length > 1) {
            console.log('Using browser history back');
            window.history.back();
            return;
        }
        
        // Option 5 : Redirection directe vers l'accueil (hash)
        console.log('Using hash-based navigation fallback');
        window.location.hash = '';
        
        // Déclencher manuellement un changement de page si nécessaire
        setTimeout(() => {
            if (window.location.hash === '' || window.location.hash === '#') {
                // Si aucun hash, charger la page home
                loadHomePage();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error during back navigation:', error);
        
        // Dernier fallback : redirection complète
        console.log('Using complete page reload fallback');
        const baseUrl = window.location.origin + window.location.pathname;
        window.location.href = baseUrl;
    }
}

/**
 * Charge manuellement la page d'accueil en cas de besoin
 */
function loadHomePage() {
    console.log('Loading home page manually...');
    
    const appContainer = document.getElementById('app');
    if (!appContainer) return;
    
    // Vérifier si la page home existe
    if (window.pages && window.pages.home && typeof window.pages.home.render === 'function') {
        try {
            appContainer.innerHTML = window.pages.home.render();
            
            // Initialiser la page si elle a une méthode init
            if (typeof window.pages.home.init === 'function') {
                window.pages.home.init();
            }
            
            // Mettre à jour la navigation active
            if (window.navigation && typeof window.navigation.setActive === 'function') {
                window.navigation.setActive('home');
            }
            
            console.log('✅ Home page loaded manually');
        } catch (error) {
            console.error('Error loading home page manually:', error);
        }
    } else {
        console.warn('Home page component not available');
    }
}

/**
 * Alternative : créer un bouton retour personnalisé
 */
window.createBackButton = function(text = '← Retour', targetPage = 'home') {
    const button = document.createElement('button');
    button.className = 'btn-back';
    button.textContent = text;
    button.setAttribute('role', 'button');
    button.setAttribute('aria-label', `Retourner à ${targetPage}`);
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (targetPage === 'home') {
            handleBackNavigation();
        } else {
            navigateToPage(targetPage);
        }
    });
    
    return button;
};

/**
 * Navigation vers une page spécifique avec fallbacks
 */
function navigateToPage(pageId) {
    console.log('Navigating to page:', pageId);
    
    try {
        // Router global
        if (window.router && typeof window.router.navigate === 'function') {
            const path = pageId === 'home' ? '/' : `/${pageId}`;
            window.router.navigate(path);
            return;
        }
        
        // Router app
        if (window.oweoApp && window.oweoApp.router) {
            const path = pageId === 'home' ? '/' : `/${pageId}`;
            window.oweoApp.router.navigate(path);
            return;
        }
        
        // Navigation component
        if (window.navigation && typeof window.navigation.navigateToPage === 'function') {
            window.navigation.navigateToPage(pageId);
            return;
        }
        
        // Hash fallback
        if (pageId === 'home') {
            window.location.hash = '';
        } else {
            window.location.hash = pageId;
        }
        
    } catch (error) {
        console.error('Navigation error:', error);
    }
}

/**
 * Vérifie si les boutons retour sont correctement configurés
 */
window.checkBackButtons = function() {
    const backButtons = document.querySelectorAll('.btn-back');
    console.log(`Found ${backButtons.length} back button(s)`);
    
    backButtons.forEach((button, index) => {
        console.log(`Back button ${index + 1}:`, {
            hasOnclick: button.hasAttribute('onclick'),
            hasEventListeners: button.onclick !== null,
            text: button.textContent.trim(),
            className: button.className
        });
    });
    
    return backButtons.length;
};

// Auto-setup when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔙 Back button utility loaded');
});

// Setup automatique quand une nouvelle page est chargée
window.addEventListener('pagechange', function() {
    setTimeout(() => {
        setupBackButton();
    }, 100);
});

console.log('🔙 Back button utility script loaded');