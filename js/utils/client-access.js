// js/utils/client-access.js - Version complète corrigée
// Système d'accès client robuste pour les démonstrations

window.OweoClientAccess = {
    
    // Codes d'accès clients (en production, ces données viendraient d'une API sécurisée)
    clientCodes: [
        'OWEO2024',
        'DEMO-CLIENT',
        'METAL-PRO',
        'CHARP-VIP'
    ],
    
    // Configuration
    sessionKey: 'oweo_client_session',
    pendingDemoAccess: null,
    modalVisible: false,
    
    /**
     * Vérifier si le client a accès - Version robuste
     */
    hasAccess() {
        try {
            const session = sessionStorage.getItem(this.sessionKey);
            if (!session) {
                console.log('🔐 Pas de session client trouvée');
                return false;
            }
            
            const sessionData = JSON.parse(session);
            const now = Date.now();
            
            // Vérifier la structure des données
            if (!sessionData.expiry || typeof sessionData.expiry !== 'number') {
                console.log('🔐 Session client corrompue');
                this.clearSession();
                return false;
            }
            
            // Vérifier expiration
            if (sessionData.expiry <= now) {
                console.log('🔐 Session client expirée');
                this.clearSession();
                return false;
            }
            
            console.log('🔐 Session client valide');
            return true;
            
        } catch (error) {
            console.error('🔐 Erreur vérification accès:', error);
            this.clearSession();
            return false;
        }
    },
    
    /**
     * Authentifier un client - Version améliorée
     */
    authenticate(code) {
        try {
            const normalizedCode = code.toUpperCase().trim();
            
            if (!normalizedCode) {
                this.showAuthError('Code d\'accès requis');
                return false;
            }
            
            if (this.clientCodes.includes(normalizedCode)) {
                const sessionData = {
                    code: normalizedCode,
                    timestamp: Date.now(),
                    expiry: Date.now() + (24 * 60 * 60 * 1000) // 24h
                };
                
                sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
                
                // Événements d'authentification réussie
                this.dispatchAuthEvent('success');
                this.showSuccessMessage();
                
                // Accéder à la démo en attente après un délai
                setTimeout(() => {
                    this.accessPendingDemo();
                }, 1500);
                
                this.hideAuthModal();
                return true;
                
            } else {
                this.showAuthError('Code d\'accès invalide. Vérifiez votre saisie.');
                this.trackAuthEvent('failed', normalizedCode);
                return false;
            }
            
        } catch (error) {
            console.error('🔐 Erreur authentification:', error);
            this.showAuthError('Erreur système. Veuillez réessayer.');
            return false;
        }
    },
    
    /**
     * Déconnexion sécurisée
     */
    logout() {
        try {
            this.clearSession();
            this.showLogoutMessage();
            
            // Rediriger vers l'accueil si on est sur une démo
            const currentPath = window.location.pathname;
            if (currentPath.includes('-demo')) {
                if (window.router && typeof window.router.navigate === 'function') {
                    window.router.navigate('/');
                } else {
                    window.location.href = '/';
                }
            }
            
            console.log('🔐 Déconnexion client réussie');
            
        } catch (error) {
            console.error('🔐 Erreur déconnexion:', error);
        }
    },
    
    /**
     * Nettoyage sécurisé des sessions
     */
    clearSession() {
        try {
            sessionStorage.removeItem(this.sessionKey);
            this.pendingDemoAccess = null;
            this.dispatchAuthEvent('logout');
            console.log('🔐 Session client nettoyée');
        } catch (error) {
            console.error('🔐 Erreur nettoyage session:', error);
        }
    },
    
    /**
     * Gestion d'événements robuste
     */
    dispatchAuthEvent(type) {
        try {
            const event = new CustomEvent(`clientAuth${type.charAt(0).toUpperCase() + type.slice(1)}`, {
                detail: {
                    timestamp: Date.now(),
                    sessionInfo: this.getSessionInfo()
                }
            });
            window.dispatchEvent(event);
            console.log(`🔐 Événement dispatché: clientAuth${type.charAt(0).toUpperCase() + type.slice(1)}`);
        } catch (error) {
            console.error('🔐 Erreur dispatch événement:', error);
        }
    },
    
    /**
     * Afficher la modal d'authentification
     */
    showAuthModal(targetDemo = null) {
        if (this.modalVisible) {
            console.log('🔐 Modal déjà visible');
            return;
        }
        
        try {
            this.pendingDemoAccess = targetDemo;
            
            // Créer la modal
            const modal = this.createAuthModal(targetDemo);
            document.body.appendChild(modal);
            
            // Afficher avec animation
            requestAnimationFrame(() => {
                modal.classList.add('show');
                this.modalVisible = true;
            });
            
            // Lier les événements
            this.bindAuthModalEvents(modal);
            
            // Focus sur l'input
            setTimeout(() => {
                const input = modal.querySelector('#client-code-input');
                if (input) input.focus();
            }, 300);
            
            console.log('🔐 Modal d\'authentification affichée');
            
        } catch (error) {
            console.error('🔐 Erreur affichage modal:', error);
        }
    },
    
    /**
     * Créer la modal d'authentification
     */
    createAuthModal(targetDemo) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.id = 'client-auth-modal';
        
        // Informations sur la démo ciblée
        let demoInfo = '';
        if (targetDemo && window.OweoClientDemos) {
            const demoConfig = window.OweoClientDemos.getDemoConfig(targetDemo);
            if (demoConfig) {
                demoInfo = `
                    <div class="auth-demo-info">
                        <div class="demo-preview">
                            <div class="demo-icon">${demoConfig.icon}</div>
                            <div class="demo-details">
                                <h4>${demoConfig.title}</h4>
                                <p>${demoConfig.description}</p>
                            </div>
                        </div>
                        <p class="demo-access-note">Accès exclusif clients</p>
                    </div>
                `;
            }
        }
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>🔐 Accès Client Requis</h3>
                    <button class="modal-close" id="auth-modal-close">&times;</button>
                </div>
                <div class="modal-body">
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
                        ❌ <span id="auth-error-message"></span>
                    </div>
                    
                    <div class="auth-help">
                        <p>Pas encore client ? <a href="#contact" onclick="window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})">Contactez-nous</a></p>
                    </div>
                </div>
            </div>
        `;
        
        return modal;
    },
    
    /**
     * Lier les événements de la modal
     */
    bindAuthModalEvents(modal) {
        try {
            const form = modal.querySelector('#client-auth-form');
            const input = modal.querySelector('#client-code-input');
            const submitBtn = modal.querySelector('#auth-submit');
            const cancelBtn = modal.querySelector('#auth-cancel');
            const closeBtn = modal.querySelector('#auth-modal-close');
            
            // Soumission du formulaire
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const code = input ? input.value : '';
                    this.authenticate(code);
                });
            }
            
            // Bouton annuler et fermer
            [cancelBtn, closeBtn].forEach(btn => {
                if (btn) {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.hideAuthModal();
                    });
                }
            });
            
            // Clic sur l'overlay
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideAuthModal();
                }
            });
            
            // Échappement
            const handleEscape = (e) => {
                if (e.key === 'Escape') {
                    this.hideAuthModal();
                    document.removeEventListener('keydown', handleEscape);
                }
            };
            document.addEventListener('keydown', handleEscape);
            
            // Validation en temps réel
            if (input) {
                input.addEventListener('input', () => {
                    this.hideAuthError();
                });
            }
            
            console.log('🔐 Événements modal liés');
            
        } catch (error) {
            console.error('🔐 Erreur liaison événements modal:', error);
        }
    },
    
    /**
     * Masquer la modal d'authentification
     */
    hideAuthModal() {
        try {
            const modal = document.getElementById('client-auth-modal');
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    if (modal.parentNode) {
                        modal.parentNode.removeChild(modal);
                    }
                    this.modalVisible = false;
                }, 300);
            }
            console.log('🔐 Modal d\'authentification masquée');
        } catch (error) {
            console.error('🔐 Erreur masquage modal:', error);
        }
    },
    
    /**
     * Accès sécurisé aux démos en attente
     */
    accessPendingDemo() {
        if (!this.pendingDemoAccess) {
            console.log('🔐 Aucune démo en attente');
            return;
        }
        
        const demoId = this.pendingDemoAccess;
        this.pendingDemoAccess = null;
        
        console.log(`🎯 Accès démo en attente: ${demoId}`);
        
        try {
            // Utiliser le système centralisé si disponible
            if (window.OweoClientDemos && typeof window.OweoClientDemos.accessDemo === 'function') {
                window.OweoClientDemos.accessDemo(demoId);
            } else {
                // Fallback navigation directe
                this.accessDemoFallback(demoId);
            }
        } catch (error) {
            console.error('🔐 Erreur accès démo:', error);
            this.showAccessError('Erreur lors de l\'accès à la démonstration');
        }
    },
    
    /**
     * Fallback pour accès démo sans système centralisé
     */
    accessDemoFallback(demoId) {
        try {
            if (window.router && typeof window.router.navigate === 'function') {
                window.router.navigate(`/${demoId}`);
            } else if (window.pages && window.pages[demoId]) {
                this.loadDemoDirectly(demoId);
            } else {
                console.error(`❌ Demo ${demoId} non disponible`);
                this.showAccessError('Démonstration non disponible');
            }
        } catch (error) {
            console.error('🔐 Erreur fallback accès démo:', error);
        }
    },
    
    /**
     * Charger une démo directement
     */
    loadDemoDirectly(demoId) {
        try {
            const appContainer = document.getElementById('app');
            if (!appContainer) return;
            
            appContainer.innerHTML = window.pages[demoId].render();
            
            if (window.pages[demoId].init) {
                window.pages[demoId].init();
            }
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            console.log(`✅ Demo ${demoId} chargée directement`);
        } catch (error) {
            console.error(`❌ Erreur chargement démo ${demoId}:`, error);
        }
    },
    
    /**
     * Afficher erreur d'authentification
     */
    showAuthError(message) {
        try {
            const errorDiv = document.getElementById('auth-error');
            const errorMessage = document.getElementById('auth-error-message');
            
            if (errorDiv && errorMessage) {
                errorMessage.textContent = message;
                errorDiv.style.display = 'block';
                
                // Faire trembler l'input
                const input = document.getElementById('client-code-input');
                if (input) {
                    input.classList.add('shake');
                    setTimeout(() => input.classList.remove('shake'), 500);
                    input.select();
                }
            }
        } catch (error) {
            console.error('🔐 Erreur affichage erreur auth:', error);
        }
    },
    
    /**
     * Masquer erreur d'authentification
     */
    hideAuthError() {
        try {
            const errorDiv = document.getElementById('auth-error');
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }
        } catch (error) {
            console.error('🔐 Erreur masquage erreur auth:', error);
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
        
        this.showNotification(message, 'success', 2000);
    },
    
    /**
     * Afficher message de déconnexion
     */
    showLogoutMessage() {
        this.showNotification('🚪 Déconnexion réussie', 'info', 2000);
    },
    
    /**
     * Afficher erreur d'accès
     */
    showAccessError(message) {
        this.showNotification(`❌ ${message}`, 'error', 4000);
    },
    
    /**
     * Système de notification unifié
     */
    showNotification(message, type = 'info', duration = 3000) {
        try {
            if (window.OweoUtils && window.OweoUtils.notification) {
                window.OweoUtils.notification.show(message, type, duration);
            } else {
                // Fallback simple
                const toast = document.createElement('div');
                toast.className = `access-toast access-toast--${type}`;
                toast.textContent = message;
                toast.style.cssText = `
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 12px 20px;
                    border-radius: 6px;
                    color: white;
                    font-weight: 500;
                    z-index: 10000;
                    animation: slideInRight 0.3s ease;
                    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
                `;
                
                document.body.appendChild(toast);
                setTimeout(() => {
                    if (toast.parentNode) {
                        toast.parentNode.removeChild(toast);
                    }
                }, duration);
            }
        } catch (error) {
            console.error('🔐 Erreur notification:', error);
            console.log(message); // Fallback ultime
        }
    },
    
    /**
     * Tracker les événements d'authentification
     */
    trackAuthEvent(type, code = null) {
        try {
            if (window.OweoUtils && window.OweoUtils.analytics) {
                window.OweoUtils.analytics.track(`client_auth_${type}`, {
                    code: code ? code.substring(0, 4) + '***' : null, // Partiel pour la confidentialité
                    targetDemo: this.pendingDemoAccess,
                    timestamp: Date.now()
                });
            }
        } catch (error) {
            console.error('🔐 Erreur tracking:', error);
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
     * Initialiser les styles CSS
     */
    initStyles() {
        if (document.getElementById('client-access-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'client-access-styles';
        styles.textContent = `
            /* Styles pour la modal d'authentification */
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                backdrop-filter: blur(5px);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal-overlay.show {
                opacity: 1;
            }
            
            .modal-content {
                background: var(--bg-card, rgba(255, 255, 255, 0.1));
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.2));
                border-radius: var(--radius-lg, 12px);
                max-width: 500px;
                width: 90%;
                max-height: 90vh;
                overflow: hidden;
                transform: scale(0.9);
                transition: transform 0.3s ease;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .modal-overlay.show .modal-content {
                transform: scale(1);
            }
            
            .auth-demo-info {
                margin-bottom: var(--space-6, 1.5rem);
                padding: var(--space-4, 1rem);
                background: linear-gradient(135deg, var(--bg-medium, rgba(255, 255, 255, 0.05)), var(--bg-dark, rgba(0, 0, 0, 0.3)));
                border: 1px solid var(--primary-color, #00d4ff);
                border-radius: var(--radius-md, 8px);
            }
            
            .demo-preview {
                display: flex;
                align-items: center;
                gap: var(--space-3, 0.75rem);
                margin-bottom: var(--space-3, 0.75rem);
            }
            
            .demo-preview .demo-icon {
                font-size: var(--font-size-2xl, 1.5rem);
                filter: drop-shadow(0 2px 4px rgba(0, 212, 255, 0.3));
            }
            
            .demo-details h4 {
                color: var(--primary-color, #00d4ff);
                margin-bottom: var(--space-1, 0.25rem);
                font-size: var(--font-size-lg, 1.125rem);
            }
            
            .demo-details p {
                color: var(--text-secondary, rgba(255, 255, 255, 0.8));
                margin: 0;
                font-size: var(--font-size-sm, 0.875rem);
                line-height: 1.4;
            }
            
            .demo-access-note {
                color: var(--text-muted, rgba(255, 255, 255, 0.6));
                font-size: var(--font-size-xs, 0.75rem);
                font-style: italic;
                text-align: center;
                margin: 0;
            }
            
            .auth-intro {
                margin-bottom: var(--space-6, 1.5rem);
                text-align: center;
            }
            
            .auth-intro p {
                color: var(--text-secondary, rgba(255, 255, 255, 0.8));
                margin-bottom: var(--space-2, 0.5rem);
                line-height: 1.5;
            }
            
            .auth-form {
                margin-bottom: var(--space-4, 1rem);
            }
            
            .auth-input-group {
                margin-bottom: var(--space-4, 1rem);
            }
            
            .auth-input-group label {
                display: block;
                margin-bottom: var(--space-2, 0.5rem);
                color: var(--text-primary, white);
                font-weight: 500;
                font-size: var(--font-size-sm, 0.875rem);
            }
            
            .auth-input-group input {
                width: 100%;
                padding: var(--space-3, 0.75rem);
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.2));
                border-radius: var(--radius-md, 8px);
                background: var(--bg-dark, rgba(0, 0, 0, 0.3));
                color: var(--text-primary, white);
                font-size: var(--font-size-base, 1rem);
                transition: border-color 0.3s ease;
            }
            
            .auth-input-group input:focus {
                outline: none;
                border-color: var(--primary-color, #00d4ff);
                box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
            }
            
            .auth-input-group input.shake {
                animation: shake 0.5s ease-in-out;
            }
            
            .auth-actions {
                display: flex;
                gap: var(--space-3, 0.75rem);
                justify-content: flex-end;
            }
            
            .auth-error {
                background: rgba(239, 68, 68, 0.1);
                border: 1px solid var(--error-color, #ef4444);
                border-radius: var(--radius-md, 8px);
                padding: var(--space-3, 0.75rem);
                margin-bottom: var(--space-4, 1rem);
                color: var(--error-color, #ef4444);
                font-size: var(--font-size-sm, 0.875rem);
            }
            
            .auth-help {
                text-align: center;
                padding-top: var(--space-4, 1rem);
                border-top: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            }
            
            .auth-help p {
                color: var(--text-muted, rgba(255, 255, 255, 0.6));
                font-size: var(--font-size-sm, 0.875rem);
                margin: 0;
            }
            
            .auth-help a {
                color: var(--primary-color, #00d4ff);
                text-decoration: none;
                transition: color 0.3s ease;
            }
            
            .auth-help a:hover {
                color: var(--secondary-color, #7c3aed);
                text-decoration: underline;
            }
            
            /* Animations */
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            /* Responsive */
            @media (max-width: 768px) {
                .modal-content {
                    width: 95%;
                    margin: 1rem;
                }
                
                .demo-preview {
                    flex-direction: column;
                    text-align: center;
                    gap: var(--space-2, 0.5rem);
                }
                
                .auth-actions {
                    flex-direction: column;
                }
                
                .auth-actions .btn {
                    width: 100%;
                }
            }
        `;
        
        document.head.appendChild(styles);
    },
    
    /**
     * Initialisation du système
     */
    init() {
        try {
            this.initStyles();
            
            // Vérifier périodiquement l'état de session
            setInterval(() => {
                // Nettoyer les sessions expirées
                if (!this.hasAccess() && this.getSessionInfo()) {
                    this.clearSession();
                }
            }, 60000); // Vérification toutes les minutes
            
            console.log('🔐 Système d\'accès client initialisé');
        } catch (error) {
            console.error('🔐 Erreur initialisation:', error);
        }
    }
};

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    window.OweoClientAccess.init();
});

console.log('🔐 Enhanced Client access system loaded');