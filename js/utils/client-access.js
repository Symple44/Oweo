// js/utils/client-access.js - Version améliorée pour démos multiples

window.OweoClientAccess = {
    
    // Codes d'accès clients (en production, ces données viendraient d'une API sécurisée)
    clientCodes: [
        'OWEO2024',
        'DEMO-CLIENT',
        'METAL-PRO',
        'CHARP-VIP'
    ],
    
    // Session storage key
    sessionKey: 'oweo_client_session',
    
    // Démo en attente d'accès après authentification
    pendingDemoAccess: null,
    
    /**
     * Vérifier si le client a accès
     */
    hasAccess() {
        try {
            const session = sessionStorage.getItem(this.sessionKey);
            if (!session) return false;
            
            const sessionData = JSON.parse(session);
            const now = Date.now();
            
            // Session valide 24h
            return sessionData.expiry > now;
        } catch {
            return false;
        }
    },
    
    /**
     * Authentifier un client
     */
    authenticate(code) {
        const normalizedCode = code.toUpperCase().trim();
        
        if (this.clientCodes.includes(normalizedCode)) {
            const sessionData = {
                code: normalizedCode,
                timestamp: Date.now(),
                expiry: Date.now() + (24 * 60 * 60 * 1000) // 24h
            };
            
            sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
            
            // Déclencher un événement pour notifier l'authentification réussie
            this.dispatchAuthEvent('success');
            
            return true;
        }
        
        return false;
    },
    
    /**
     * Révoquer l'accès
     */
    revokeAccess() {
        sessionStorage.removeItem(this.sessionKey);
        this.pendingDemoAccess = null;
        
        // Déclencher un événement pour notifier la déconnexion
        this.dispatchAuthEvent('logout');
    },
    
    /**
     * Déclencher les événements d'authentification
     */
    dispatchAuthEvent(type) {
        // Événement personnalisé
        const event = new CustomEvent(`clientAuth${type.charAt(0).toUpperCase() + type.slice(1)}`, {
            detail: {
                timestamp: Date.now(),
                sessionInfo: this.getSessionInfo()
            }
        });
        
        window.dispatchEvent(event);
        
        // Notification aux autres onglets via storage
        if (type === 'success') {
            // Storage event sera automatiquement déclenché par sessionStorage.setItem
        }
    },
    
    /**
     * Afficher la modal d'authentification avec support de démo en attente
     */
    showAuthModal(targetDemo = null) {
        // Stocker la démo cible si spécifiée
        if (targetDemo) {
            this.pendingDemoAccess = targetDemo;
        }
        
        const modal = this.createAuthModal();
        document.body.appendChild(modal);
        
        setTimeout(() => {
            modal.classList.add('auth-modal--visible');
            const input = modal.querySelector('#client-code-input');
            if (input) input.focus();
        }, 100);
    },
    
    /**
     * Créer la modal d'authentification avec info démo
     */
    createAuthModal() {
        const modal = document.createElement('div');
        modal.className = 'auth-modal';
        modal.id = 'client-auth-modal';
        
        // Message personnalisé selon la démo demandée
        let demoInfo = '';
        if (this.pendingDemoAccess && window.OweoClientDemos) {
            const demoConfig = window.OweoClientDemos.getDemoConfig(this.pendingDemoAccess);
            if (demoConfig) {
                demoInfo = `
                    <div class="auth-demo-info">
                        <div class="demo-preview">
                            <span class="demo-icon">${demoConfig.icon}</span>
                            <div class="demo-details">
                                <h4>${demoConfig.title}</h4>
                                <p>${demoConfig.subtitle}</p>
                            </div>
                        </div>
                        <p class="demo-access-note">Vous serez automatiquement dirigé vers cette démonstration après authentification.</p>
                    </div>
                `;
            }
        }
        
        modal.innerHTML = `
            <div class="auth-modal__backdrop"></div>
            <div class="auth-modal__content">
                <div class="auth-modal__header">
                    <h3>🔐 Accès Client - Démonstrations Interactives</h3>
                    <button class="auth-modal__close" aria-label="Fermer">&times;</button>
                </div>
                
                <div class="auth-modal__body">
                    ${demoInfo}
                    
                    <div class="auth-intro">
                        <p>Ces démonstrations interactives sont réservées à nos clients.</p>
                        <p>Veuillez saisir votre code d'accès fourni par Oweo :</p>
                    </div>
                    
                    <form id="client-auth-form" class="auth-form">
                        <div class="auth-input-group">
                            <label for="client-code-input">Code d'accès client</label>
                            <input type="text" 
                                   id="client-code-input" 
                                   placeholder="Ex: OWEO2024"
                                   maxlength="20"
                                   autocomplete="off"
                                   spellcheck="false">
                        </div>
                        
                        <div class="auth-actions">
                            <button type="button" class="btn btn-secondary" id="auth-cancel">
                                Annuler
                            </button>
                            <button type="submit" class="btn btn-primary" id="auth-submit">
                                🚀 Accéder aux Démos
                            </button>
                        </div>
                    </form>
                    
                    <div class="auth-error" id="auth-error" style="display: none;">
                        ❌ Code d'accès invalide. Contactez votre référent Oweo.
                    </div>
                    
                    <div class="auth-help">
                        <h4>💡 Vous n'avez pas de code d'accès ?</h4>
                        <p>Contactez-nous pour obtenir votre accès client personnalisé :</p>
                        <div class="auth-contact">
                            <a href="mailto:contact@oweo-consulting.fr" class="auth-contact-item">
                                📧 contact@oweo-consulting.fr
                            </a>
                            <a href="tel:+33123456789" class="auth-contact-item">
                                📞 01 23 45 67 89
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Events
        this.bindAuthModalEvents(modal);
        
        return modal;
    },
    
    /**
     * Gérer la soumission d'authentification avec redirection automatique
     */
    handleAuthSubmit() {
        const input = document.querySelector('#client-code-input');
        const code = input.value.trim();
        
        if (!code) {
            this.showAuthError('Veuillez saisir votre code d\'accès');
            return;
        }
        
        if (this.authenticate(code)) {
            // Succès
            this.hideAuthModal();
            this.showSuccessMessage();
            
            // Redirection automatique vers la démo si spécifiée
            if (this.pendingDemoAccess) {
                setTimeout(() => {
                    this.accessPendingDemo();
                }, 1500);
            }
            
            // Analytics
            this.trackAuthEvent('success', code);
        } else {
            this.showAuthError('Code d\'accès invalide. Vérifiez votre code ou contactez Oweo.');
            input.select();
            
            // Analytics
            this.trackAuthEvent('failed', code);
        }
    },
    
    /**
     * Accéder à la démo en attente
     */
    accessPendingDemo() {
        if (!this.pendingDemoAccess) return;
        
        const demoId = this.pendingDemoAccess;
        this.pendingDemoAccess = null;
        
        console.log(`🎯 Accessing pending demo: ${demoId}`);
        
        // Utiliser le système de démos centralisé si disponible
        if (window.OweoClientDemos) {
            window.OweoClientDemos.accessDemo(demoId);
        } else {
            // Fallback vers navigation directe
            this.accessDemoFallback(demoId);
        }
    },
    
    /**
     * Fallback pour accès démo sans système centralisé
     */
    accessDemoFallback(demoId) {
        if (window.router && typeof window.router.navigate === 'function') {
            window.router.navigate(`/${demoId}`);
        } else if (window.pages && window.pages[demoId]) {
            this.loadDemoDirectly(demoId);
        } else {
            console.error(`❌ Demo ${demoId} not available`);
        }
    },
    
    /**
     * Charger une démo directement
     */
    loadDemoDirectly(demoId) {
        const appContainer = document.getElementById('app');
        if (!appContainer) return;
        
        try {
            appContainer.innerHTML = window.pages[demoId].render();
            
            if (window.pages[demoId].init) {
                window.pages[demoId].init();
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`✅ Demo ${demoId} loaded directly`);
        } catch (error) {
            console.error(`❌ Error loading demo ${demoId}:`, error);
        }
    },
    
    /**
     * Afficher message de succès personnalisé
     */
    showSuccessMessage() {
        let message = '✅ Accès autorisé !';
        
        if (this.pendingDemoAccess && window.OweoClientDemos) {
            const demoConfig = window.OweoClientDemos.getDemoConfig(this.pendingDemoAccess);
            if (demoConfig) {
                message = `✅ Accès autorisé ! Chargement de ${demoConfig.title}...`;
            }
        }
        
        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(message, 'success', 2000);
        } else {
            // Fallback
            const toast = document.createElement('div');
            toast.className = 'access-toast';
            toast.innerHTML = message;
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 2000);
        }
    },
    
    /**
     * Tracker les événements d'authentification
     */
    trackAuthEvent(type, code = null) {
        if (window.OweoUtils && window.OweoUtils.analytics) {
            window.OweoUtils.analytics.track(`client_auth_${type}`, {
                code: code ? code.substring(0, 4) + '***' : null, // Partiel pour la confidentialité
                targetDemo: this.pendingDemoAccess,
                timestamp: Date.now()
            });
        }
    },
    
    /**
     * Obtenir les infos de session
     */
    getSessionInfo() {
        try {
            const session = sessionStorage.getItem(this.sessionKey);
            return session ? JSON.parse(session) : null;
        } catch {
            return null;
        }
    },
    
    /**
     * Lier les événements de la modal (méthode existante, pas de changement)
     */
    bindAuthModalEvents(modal) {
        // ... code existant inchangé ...
    },
    
    /**
     * Autres méthodes existantes (showAuthError, hideAuthModal, etc.)
     */
    // ... méthodes existantes inchangées ...
    
    /**
     * Initialiser les styles CSS avec styles démo supplémentaires
     */
    initStyles() {
        if (document.getElementById('client-access-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'client-access-styles';
        styles.textContent = `
            /* Styles existants + nouveaux styles pour démo info */
            
            /* ... styles existants ... */
            
            /* Nouveaux styles pour info démo */
            .auth-demo-info {
                margin-bottom: var(--space-6);
                padding: var(--space-4);
                background: linear-gradient(135deg, var(--bg-medium), var(--bg-dark));
                border: 1px solid var(--primary-color);
                border-radius: var(--radius-md);
            }
            
            .demo-preview {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                margin-bottom: var(--space-3);
            }
            
            .demo-preview .demo-icon {
                font-size: var(--font-size-2xl);
                filter: drop-shadow(0 2px 4px rgba(0, 212, 255, 0.3));
            }
            
            .demo-details h4 {
                color: var(--primary-color);
                margin-bottom: var(--space-1);
                font-size: var(--font-size-lg);
            }
            
            .demo-details p {
                color: var(--text-secondary);
                margin: 0;
                font-size: var(--font-size-sm);
            }
            
            .demo-access-note {
                color: var(--text-muted);
                font-size: var(--font-size-xs);
                font-style: italic;
                text-align: center;
                margin: 0;
            }
            
            /* Responsive pour démo info */
            @media (max-width: 768px) {
                .demo-preview {
                    flex-direction: column;
                    text-align: center;
                    gap: var(--space-2);
                }
                
                .demo-preview .demo-icon {
                    font-size: var(--font-size-xl);
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
};

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    OweoClientAccess.initStyles();
});

console.log('🔐 Enhanced Client access system loaded');