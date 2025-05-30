window.updateFooterLegalLinks = function() {
    const footerLegalLinks = document.querySelector('.footer-legal-links');
    if (!footerLegalLinks) return;
    
    const requiredPages = OweoConfig.legalPages.filter(page => page.required);
    
    footerLegalLinks.innerHTML = requiredPages.map(page => `
        <a href="#${page.id}" 
           data-nav-item="${page.id}"
           class="legal-link">
            ${page.label}
        </a>
    `).join('');
    
    // Rebind navigation events
    footerLegalLinks.querySelectorAll('[data-nav-item]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.dataset.navItem;
            
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(`/${pageId}`);
            } else {
                window.location.hash = pageId;
            }
        });
    });
};