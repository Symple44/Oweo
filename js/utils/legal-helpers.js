// js/utils/legal-helpers.js - Utilitaires pour les pages légales améliorés

/**
 * Gestionnaire complet pour les fonctionnalités légales
 */
window.OweoLegalHelpers = {
    
    /**
     * Initialisation du système légal
     */
    init() {
        this.setupConsentManager();
        this.setupLegalNavigation();
        this.checkComplianceRequirements();
        this.initCookieBanner();
        console.log('⚖️ Legal helpers initialized');
    },

    /**
     * Gestionnaire de consentement des cookies
     */
    consentManager: {
        storageKey: 'oweo_cookie_consent',
        
        // Types de cookies
        cookieTypes: {
            necessary: {
                name: 'Cookies nécessaires',
                description: 'Requis pour le fonctionnement du site',
                required: true,
                cookies: ['session', 'preferences', 'security']
            },
            analytics: {
                name: 'Cookies analytiques',
                description: 'Nous aident à améliorer le site',
                required: false,
                cookies: ['google_analytics', '_ga', '_gid']
            },
            marketing: {
                name: 'Cookies marketing',
                description: 'Publicités et contenu personnalisé',
                required: false,
                cookies: ['calendly', 'facebook_pixel']
            }
        },

        // Obtenir le consentement actuel
        getConsent() {
            try {
                const stored = localStorage.getItem(this.storageKey);
                return stored ? JSON.parse(stored) : null;
            } catch {
                return null;
            }
        },

        // Sauvegarder le consentement
        saveConsent(consent) {
            try {
                const consentData = {
                    ...consent,
                    timestamp: Date.now(),
                    version: '1.0'
                };
                localStorage.setItem(this.storageKey, JSON.stringify(consentData));
                this.applyConsent(consent);
                return true;
            } catch {
                return false;
            }
        },

        // Appliquer les préférences de consentement
        applyConsent(consent) {
            // Google Analytics
            if (consent.analytics && typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                });
            } else if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'analytics_storage': 'denied'
                });
            }

            // Calendly tracking
            if (!consent.marketing) {
                // Désactiver le tracking Calendly si possible
                if (window.Calendly) {
                    window.Calendly.tracking = false;
                }
            }

            // Émettre un événement pour les autres systèmes
            window.dispatchEvent(new CustomEvent('consentUpdated', {
                detail: consent
            }));
        },

        // Vérifier si le consentement est requis
        needsConsent() {
            const consent = this.getConsent();
            if (!consent) return true;
            
            // Vérifier si le consentement est trop ancien (13 mois)
            const thirteenMonths = 13 * 30 * 24 * 60 * 60 * 1000;
            return (Date.now() - consent.timestamp) > thirteenMonths;
        },

        // Révoquer le consentement
        revokeConsent() {
            localStorage.removeItem(this.storageKey);
            
            // Supprimer les cookies marketing/analytics
            this.deleteCookies(['_ga', '_gid', '_gat', 'calendly_session']);
            
            // Recharger la page pour appliquer les changements
            window.location.reload();
        },

        // Supprimer des cookies spécifiques
        deleteCookies(cookieNames) {
            cookieNames.forEach(name => {
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
            });
        }
    },

    /**
     * Gestionnaire de navigation légale
     */
    navigation: {
        // Mettre à jour les liens légaux dans le footer
        updateFooterLinks() {
            const footerLegalLinks = document.querySelector('.footer-legal-links');
            if (!footerLegalLinks) return;
            
            const requiredPages = OweoConfig.legalPages.filter(page => page.required);
            
            footerLegalLinks.innerHTML = requiredPages.map(page => `
                <a href="#${page.id}" 
                   data-nav-item="${page.id}"
                   class="legal-link"
                   aria-label="Consulter ${page.label}">
                    ${page.label}
                </a>
            `).join('');
            
            this.bindLegalLinks();
        },

        // Lier les événements de navigation légale
        bindLegalLinks() {
            document.querySelectorAll('[data-nav-item]').forEach(link => {
                // Éviter les doubles bindings
                if (link.hasAttribute('data-legal-bound')) return;
                link.setAttribute('data-legal-bound', 'true');
                
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const pageId = link.dataset.navItem;
                    this.navigateToLegalPage(pageId);
                });
            });
        },

        // Navigation vers une page légale
        navigateToLegalPage(pageId) {
            // Analytics
            if (OweoUtils.analytics) {
                OweoUtils.analytics.track('legal_page_view', {
                    page: pageId,
                    source: 'navigation'
                });
            }

            // Navigation
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(`/${pageId}`);
            } else {
                window.location.hash = pageId;
            }
        },

        // Créer un breadcrumb légal
        createLegalBreadcrumb(currentPageId) {
            const currentPage = OweoConfig.legalPages.find(p => p.id === currentPageId);
            if (!currentPage) return '';

            return `
                <nav class="legal-breadcrumb" aria-label="Fil d'ariane">
                    <ol class="breadcrumb-list">
                        <li><a href="#home" data-nav-item="home">Accueil</a></li>
                        <li><span aria-current="page">${currentPage.label}</span></li>
                    </ol>
                </nav>
            `;
        }
    },

    /**
     * Gestionnaire de bannière de cookies
     */
    cookieBanner: {
        isVisible: false,
        
        // Afficher la bannière de cookies
        show() {
            if (this.isVisible) return;
            
            const banner = this.create();
            document.body.appendChild(banner);
            this.isVisible = true;
            
            // Animation d'entrée
            setTimeout(() => {
                banner.classList.add('cookie-banner--visible');
            }, 100);
        },

        // Masquer la bannière
        hide() {
            const banner = document.querySelector('.cookie-banner');
            if (!banner) return;
            
            banner.classList.remove('cookie-banner--visible');
            setTimeout(() => {
                banner.remove();
                this.isVisible = false;
            }, 300);
        },

        // Créer l'élément bannière
        create() {
            const banner = document.createElement('div');
            banner.className = 'cookie-banner';
            banner.innerHTML = `
                <div class="cookie-banner__content">
                    <div class="cookie-banner__text">
                        <h3>🍪 Cookies et confidentialité</h3>
                        <p>Nous utilisons des cookies pour améliorer votre expérience. 
                           Vous pouvez choisir quels cookies accepter.</p>
                    </div>
                    <div class="cookie-banner__actions">
                        <button class="btn btn-secondary btn-sm" data-action="configure">
                            Configurer
                        </button>
                        <button class="btn btn-primary btn-sm" data-action="accept-all">
                            Tout accepter
                        </button>
                        <button class="btn btn-outline btn-sm" data-action="reject-optional">
                            Refuser optionnels
                        </button>
                    </div>
                </div>
            `;

            // Événements
            banner.querySelector('[data-action="accept-all"]').addEventListener('click', () => {
                this.acceptAll();
            });

            banner.querySelector('[data-action="reject-optional"]').addEventListener('click', () => {
                this.rejectOptional();
            });

            banner.querySelector('[data-action="configure"]').addEventListener('click', () => {
                this.showConfigModal();
            });

            return banner;
        },

        // Accepter tous les cookies
        acceptAll() {
            const consent = {
                necessary: true,
                analytics: true,
                marketing: true
            };
            
            OweoLegalHelpers.consentManager.saveConsent(consent);
            this.hide();
            
            OweoUtils.notification?.show('Préférences de cookies sauvegardées', 'success', 3000);
        },

        // Refuser les cookies optionnels
        rejectOptional() {
            const consent = {
                necessary: true,
                analytics: false,
                marketing: false
            };
            
            OweoLegalHelpers.consentManager.saveConsent(consent);
            this.hide();
            
            OweoUtils.notification?.show('Seuls les cookies nécessaires sont activés', 'info', 3000);
        },

        // Afficher le modal de configuration
        showConfigModal() {
            const modal = this.createConfigModal();
            document.body.appendChild(modal);
            
            setTimeout(() => {
                modal.classList.add('cookie-modal--visible');
            }, 100);
        },

        // Créer le modal de configuration
        createConfigModal() {
            const modal = document.createElement('div');
            modal.className = 'cookie-modal';
            modal.innerHTML = `
                <div class="cookie-modal__backdrop"></div>
                <div class="cookie-modal__content">
                    <div class="cookie-modal__header">
                        <h3>🍪 Configuration des cookies</h3>
                        <button class="cookie-modal__close" aria-label="Fermer">×</button>
                    </div>
                    <div class="cookie-modal__body">
                        ${this.renderCookieOptions()}
                    </div>
                    <div class="cookie-modal__footer">
                        <button class="btn btn-secondary" data-action="cancel">Annuler</button>
                        <button class="btn btn-primary" data-action="save">Sauvegarder</button>
                    </div>
                </div>
            `;

            // Événements du modal
            modal.querySelector('.cookie-modal__close').addEventListener('click', () => {
                this.hideConfigModal(modal);
            });

            modal.querySelector('[data-action="cancel"]').addEventListener('click', () => {
                this.hideConfigModal(modal);
            });

            modal.querySelector('[data-action="save"]').addEventListener('click', () => {
                this.saveModalConfig(modal);
            });

            modal.querySelector('.cookie-modal__backdrop').addEventListener('click', () => {
                this.hideConfigModal(modal);
            });

            return modal;
        },

        // Rendu des options de cookies
        renderCookieOptions() {
            const currentConsent = OweoLegalHelpers.consentManager.getConsent() || {};
            
            return Object.entries(OweoLegalHelpers.consentManager.cookieTypes).map(([key, type]) => `
                <div class="cookie-option">
                    <div class="cookie-option__header">
                        <label class="cookie-option__label">
                            <input type="checkbox" 
                                   class="cookie-option__checkbox"
                                   data-cookie-type="${key}"
                                   ${type.required ? 'checked disabled' : ''}
                                   ${currentConsent[key] ? 'checked' : ''}>
                            <span class="cookie-option__name">${type.name}</span>
                            ${type.required ? '<span class="cookie-option__required">(Requis)</span>' : ''}
                        </label>
                    </div>
                    <p class="cookie-option__description">${type.description}</p>
                    <div class="cookie-option__details">
                        <small>Cookies: ${type.cookies.join(', ')}</small>
                    </div>
                </div>
            `).join('');
        },

        // Masquer le modal de configuration
        hideConfigModal(modal) {
            modal.classList.remove('cookie-modal--visible');
            setTimeout(() => {
                modal.remove();
            }, 300);
        },

        // Sauvegarder la configuration du modal
        saveModalConfig(modal) {
            const checkboxes = modal.querySelectorAll('.cookie-option__checkbox');
            const consent = {};
            
            checkboxes.forEach(checkbox => {
                const type = checkbox.dataset.cookieType;
                consent[type] = checkbox.checked;
            });
            
            OweoLegalHelpers.consentManager.saveConsent(consent);
            this.hideConfigModal(modal);
            this.hide();
            
            OweoUtils.notification?.show('Préférences de cookies sauvegardées', 'success', 3000);
        }
    },

    /**
     * Utilitaires de validation légale
     */
    validation: {
        // Vérifier la conformité RGPD
        checkRGPDCompliance() {
            const issues = [];
            
            // Vérifier la politique de confidentialité
            if (!window.pages['politique-confidentialite']) {
                issues.push('Politique de confidentialité manquante');
            }
            
            // Vérifier les mentions légales
            if (!window.pages['mentions-legales']) {
                issues.push('Mentions légales manquantes');
            }
            
            // Vérifier le consentement cookies
            if (OweoLegalHelpers.consentManager.needsConsent()) {
                issues.push('Consentement cookies requis');
            }
            
            return {
                compliant: issues.length === 0,
                issues: issues
            };
        },

        // Vérifier les CGV si services payants
        checkCGVRequirement() {
            // Si services payants proposés
            const hasPayedServices = OweoConfig.services.some(service => 
                service.price !== 'Gratuit' && service.price !== '0€'
            );
            
            if (hasPayedServices && !window.pages['conditions-generales']) {
                return {
                    required: true,
                    missing: true,
                    reason: 'Services payants proposés'
                };
            }
            
            return {
                required: hasPayedServices,
                missing: false
            };
        },

        // Audit complet de conformité
        fullComplianceAudit() {
            const rgpd = this.checkRGPDCompliance();
            const cgv = this.checkCGVRequirement();
            
            return {
                rgpd: rgpd,
                cgv: cgv,
                score: this.calculateComplianceScore(rgpd, cgv),
                recommendations: this.getRecommendations(rgpd, cgv)
            };
        },

        // Calculer le score de conformité
        calculateComplianceScore(rgpd, cgv) {
            let score = 0;
            let total = 0;
            
            // RGPD (60% du score)
            total += 60;
            if (rgpd.compliant) score += 60;
            else score += Math.max(0, 60 - (rgpd.issues.length * 15));
            
            // CGV (40% du score)
            total += 40;
            if (!cgv.required || !cgv.missing) score += 40;
            
            return Math.round((score / total) * 100);
        },

        // Obtenir des recommandations
        getRecommendations(rgpd, cgv) {
            const recommendations = [];
            
            if (!rgpd.compliant) {
                rgpd.issues.forEach(issue => {
                    recommendations.push({
                        type: 'critical',
                        category: 'RGPD',
                        message: issue,
                        action: 'Créer/corriger la page correspondante'
                    });
                });
            }
            
            if (cgv.required && cgv.missing) {
                recommendations.push({
                    type: 'important',
                    category: 'Commercial',
                    message: 'CGV requises pour services payants',
                    action: 'Créer une page Conditions Générales de Vente'
                });
            }
            
            return recommendations;
        }
    },

    /**
     * Gestionnaire d'accessibilité légale
     */
    accessibility: {
        // Améliorer l'accessibilité des pages légales
        enhanceLegalPages() {
            // Ajouter des landmarks ARIA
            const legalContent = document.querySelector('.legal-content');
            if (legalContent) {
                legalContent.setAttribute('role', 'main');
                legalContent.setAttribute('aria-label', 'Contenu légal');
            }
            
            // Améliorer la navigation
            const legalSections = document.querySelectorAll('.legal-section');
            legalSections.forEach((section, index) => {
                section.setAttribute('role', 'region');
                const heading = section.querySelector('h2, h3');
                if (heading) {
                    const id = `legal-section-${index}`;
                    heading.id = id;
                    section.setAttribute('aria-labelledby', id);
                }
            });
            
            // Améliorer les liens
            const legalLinks = document.querySelectorAll('.legal-info a[target="_blank"]');
            legalLinks.forEach(link => {
                if (!link.getAttribute('aria-label')) {
                    link.setAttribute('aria-label', `${link.textContent} (ouvre dans un nouvel onglet)`);
                }
            });
        },

        // Créer un sommaire automatique
        createTableOfContents() {
            const headings = document.querySelectorAll('.legal-section h2');
            if (headings.length < 3) return null;
            
            const toc = document.createElement('nav');
            toc.className = 'legal-toc';
            toc.setAttribute('aria-label', 'Sommaire');
            
            toc.innerHTML = `
                <h3>Sommaire</h3>
                <ol class="legal-toc__list">
                    ${Array.from(headings).map((heading, index) => {
                        const id = heading.id || `legal-heading-${index}`;
                        heading.id = id;
                        return `<li><a href="#${id}">${heading.textContent}</a></li>`;
                    }).join('')}
                </ol>
            `;
            
            return toc;
        }
    },

    /**
     * Méthodes d'initialisation et configuration
     */
    setupConsentManager() {
        // Initialiser le gestionnaire de consentement
        if (this.consentManager.needsConsent()) {
            // Attendre un peu avant d'afficher la bannière
            setTimeout(() => {
                this.cookieBanner.show();
            }, 2000);
        } else {
            // Appliquer le consentement existant
            const consent = this.consentManager.getConsent();
            if (consent) {
                this.consentManager.applyConsent(consent);
            }
        }
    },

    setupLegalNavigation() {
        // Configurer la navigation légale
        this.navigation.updateFooterLinks();
        
        // Écouter les changements de page pour rebinder
        window.addEventListener('pagechange', () => {
            setTimeout(() => {
                this.navigation.bindLegalLinks();
            }, 100);
        });
    },

    checkComplianceRequirements() {
        // Vérifier la conformité en mode développement
        if (OweoConfig.environment === 'development') {
            const audit = this.validation.fullComplianceAudit();
            console.log('🔍 Compliance Audit:', audit);
            
            if (audit.score < 80) {
                console.warn('⚠️ Compliance score below 80%:', audit.score);
                audit.recommendations.forEach(rec => {
                    console.warn(`${rec.category}: ${rec.message}`);
                });
            }
        }
    },

    initCookieBanner() {
        // Configurer les styles CSS pour la bannière (si pas déjà fait)
        if (!document.querySelector('#cookie-banner-styles')) {
            const styles = document.createElement('style');
            styles.id = 'cookie-banner-styles';
            styles.textContent = this.getCookieBannerCSS();
            document.head.appendChild(styles);
        }
    },

    /**
     * Méthodes publiques pour l'interface
     */
    // Afficher le gestionnaire de cookies
    showCookieManager() {
        this.cookieBanner.showConfigModal();
    },

    // Révoquer le consentement
    revokeCookieConsent() {
        if (confirm('Êtes-vous sûr de vouloir révoquer votre consentement ? Cela supprimera tous les cookies optionnels et rechargera la page.')) {
            this.consentManager.revokeConsent();
        }
    },

    // Obtenir le statut de conformité
    getComplianceStatus() {
        return this.validation.fullComplianceAudit();
    },

    /**
     * CSS pour la bannière de cookies
     */
    getCookieBannerCSS() {
        return `
            .cookie-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: var(--bg-dark);
                border-top: 1px solid var(--border-color);
                padding: var(--space-4);
                z-index: var(--z-toast);
                transform: translateY(100%);
                transition: transform 0.3s ease;
                box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .cookie-banner--visible {
                transform: translateY(0);
            }
            
            .cookie-banner__content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: var(--container-max-width);
                margin: 0 auto;
                gap: var(--space-4);
            }
            
            .cookie-banner__text h3 {
                margin: 0 0 var(--space-2) 0;
                color: var(--text-primary);
                font-size: var(--font-size-lg);
            }
            
            .cookie-banner__text p {
                margin: 0;
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
            }
            
            .cookie-banner__actions {
                display: flex;
                gap: var(--space-2);
                flex-shrink: 0;
            }
            
            .cookie-modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: var(--z-modal);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .cookie-modal--visible {
                opacity: 1;
            }
            
            .cookie-modal__backdrop {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
            }
            
            .cookie-modal__content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--bg-dark);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-xl);
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            }
            
            .cookie-modal__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--space-6);
                border-bottom: 1px solid var(--border-color);
            }
            
            .cookie-modal__close {
                background: none;
                border: none;
                font-size: var(--font-size-2xl);
                color: var(--text-secondary);
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .cookie-modal__body {
                padding: var(--space-6);
            }
            
            .cookie-option {
                margin-bottom: var(--space-6);
                padding: var(--space-4);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
            }
            
            .cookie-option__label {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                font-weight: 600;
                color: var(--text-primary);
                cursor: pointer;
            }
            
            .cookie-option__required {
                color: var(--text-muted);
                font-weight: normal;
                font-size: var(--font-size-sm);
            }
            
            .cookie-option__description {
                margin: var(--space-2) 0;
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
            }
            
            .cookie-option__details {
                color: var(--text-muted);
                font-size: var(--font-size-xs);
            }
            
            .cookie-modal__footer {
                display: flex;
                justify-content: flex-end;
                gap: var(--space-3);
                padding: var(--space-6);
                border-top: 1px solid var(--border-color);
            }
            
            @media (max-width: 768px) {
                .cookie-banner__content {
                    flex-direction: column;
                    text-align: center;
                }
                
                .cookie-banner__actions {
                    width: 100%;
                    justify-content: center;
                }
                
                .cookie-modal__content {
                    width: 95%;
                    max-height: 90vh;
                }
            }
        `;
    }
};

/**
 * API publique simplifiée
 */
window.showCookieManager = () => OweoLegalHelpers.showCookieManager();
window.revokeCookieConsent = () => OweoLegalHelpers.revokeCookieConsent();
window.getComplianceStatus = () => OweoLegalHelpers.getComplianceStatus();

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    if (typeof OweoLegalHelpers !== 'undefined') {
        OweoLegalHelpers.init();
    }
});

console.log('⚖️ Enhanced legal helpers loaded');