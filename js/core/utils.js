// js/core/utils.js - Utilitaires généraux

window.OweoUtils = {
    
    // Gestion DOM
    dom: {
        /**
         * Sélecteur d'élément avec vérification
         */
        select(selector, context = document) {
            const element = context.querySelector(selector);
            if (!element) {
                console.warn(`Element not found: ${selector}`);
            }
            return element;
        },

        /**
         * Sélecteur multiple d'éléments
         */
        selectAll(selector, context = document) {
            return Array.from(context.querySelectorAll(selector));
        },

        /**
         * Création d'élément avec attributs
         */
        create(tag, attributes = {}, content = '') {
            const element = document.createElement(tag);
            
            Object.entries(attributes).forEach(([key, value]) => {
                if (key === 'className') {
                    element.className = value;
                } else if (key === 'dataset') {
                    Object.entries(value).forEach(([dataKey, dataValue]) => {
                        element.dataset[dataKey] = dataValue;
                    });
                } else {
                    element.setAttribute(key, value);
                }
            });
            
            if (content) {
                element.innerHTML = content;
            }
            
            return element;
        },

        /**
         * Vérification si un élément est visible
         */
        isVisible(element) {
            return element && element.offsetParent !== null;
        },

        /**
         * Scroll fluide vers un élément
         */
        scrollTo(element, offset = 0) {
            if (!element) return;
            
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    },

    // Gestion des événements
    events: {
        /**
         * Debounce function
         */
        debounce(func, wait, immediate = false) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    timeout = null;
                    if (!immediate) func(...args);
                };
                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func(...args);
            };
        },

        /**
         * Throttle function
         */
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        /**
         * Gestionnaire d'événement avec nettoyage automatique
         */
        on(element, event, handler, options = {}) {
            if (!element) return null;
            
            element.addEventListener(event, handler, options);
            
            // Retourner une fonction de nettoyage
            return () => {
                element.removeEventListener(event, handler, options);
            };
        },

        /**
         * Événement personnalisé
         */
        emit(eventName, detail = {}, element = document) {
            const event = new CustomEvent(eventName, {
                detail,
                bubbles: true,
                cancelable: true
            });
            element.dispatchEvent(event);
        }
    },

    // Manipulation de données
    data: {
        /**
         * Deep clone d'un objet
         */
        clone(obj) {
            if (obj === null || typeof obj !== 'object') return obj;
            if (obj instanceof Date) return new Date(obj.getTime());
            if (obj instanceof Array) return obj.map(item => this.clone(item));
            if (typeof obj === 'object') {
                const clonedObj = {};
                Object.keys(obj).forEach(key => {
                    clonedObj[key] = this.clone(obj[key]);
                });
                return clonedObj;
            }
        },

        /**
         * Merge profond d'objets
         */
        merge(target, source) {
            const output = { ...target };
            if (this.isObject(target) && this.isObject(source)) {
                Object.keys(source).forEach(key => {
                    if (this.isObject(source[key])) {
                        if (!(key in target)) {
                            output[key] = source[key];
                        } else {
                            output[key] = this.merge(target[key], source[key]);
                        }
                    } else {
                        output[key] = source[key];
                    }
                });
            }
            return output;
        },

        /**
         * Vérification si c'est un objet
         */
        isObject(item) {
            return item && typeof item === 'object' && !Array.isArray(item);
        },

        /**
         * Grouper un tableau par propriété
         */
        groupBy(array, key) {
            return array.reduce((groups, item) => {
                const group = item[key];
                groups[group] = groups[group] || [];
                groups[group].push(item);
                return groups;
            }, {});
        },

        /**
         * Recherche dans un tableau d'objets
         */
        search(array, query, fields = []) {
            if (!query) return array;
            
            const lowerQuery = query.toLowerCase();
            return array.filter(item => {
                if (fields.length === 0) {
                    // Recherche dans toutes les propriétés string
                    return Object.values(item).some(value => 
                        typeof value === 'string' && 
                        value.toLowerCase().includes(lowerQuery)
                    );
                } else {
                    // Recherche dans les champs spécifiés
                    return fields.some(field => {
                        const value = this.getNestedProperty(item, field);
                        return typeof value === 'string' && 
                               value.toLowerCase().includes(lowerQuery);
                    });
                }
            });
        },

        /**
         * Accès à une propriété imbriquée
         */
        getNestedProperty(obj, path) {
            return path.split('.').reduce((current, key) => 
                current && current[key] !== undefined ? current[key] : undefined, 
                obj
            );
        }
    },

    // Formatage et validation
    format: {
        /**
         * Formatage de nombre avec séparateurs
         */
        number(num, locale = 'fr-FR') {
            return new Intl.NumberFormat(locale).format(num);
        },

        /**
         * Formatage de devise
         */
        currency(amount, currency = 'EUR', locale = 'fr-FR') {
            return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency: currency
            }).format(amount);
        },

        /**
         * Formatage de date
         */
        date(date, options = {}, locale = 'fr-FR') {
            const defaultOptions = {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options })
                .format(new Date(date));
        },

        /**
         * Formatage de durée
         */
        duration(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = seconds % 60;
            
            if (hours > 0) {
                return `${hours}h ${minutes}min`;
            } else if (minutes > 0) {
                return `${minutes}min ${remainingSeconds}s`;
            } else {
                return `${remainingSeconds}s`;
            }
        },

        /**
         * Truncate text
         */
        truncate(text, length = 100, suffix = '...') {
            if (text.length <= length) return text;
            return text.substring(0, length).trim() + suffix;
        },

        /**
         * Slug from text
         */
        slug(text) {
            return text
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
    },

    // Validation
    validate: {
        /**
         * Validation email
         */
        email(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },

        /**
         * Validation téléphone français
         */
        phone(phone) {
            const regex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
            return regex.test(phone);
        },

        /**
         * Validation URL
         */
        url(url) {
            try {
                new URL(url);
                return true;
            } catch {
                return false;
            }
        },

        /**
         * Validation SIRET
         */
        siret(siret) {
            if (!/^\d{14}$/.test(siret)) return false;
            
            let sum = 0;
            for (let i = 0; i < 14; i++) {
                let digit = parseInt(siret[i]);
                if (i % 2 === 1) {
                    digit *= 2;
                    if (digit > 9) digit -= 9;
                }
                sum += digit;
            }
            return sum % 10 === 0;
        }
    },

    // Performance et optimisation
    performance: {
        /**
         * Lazy loading d'images
         */
        lazyLoadImages(selector = 'img[data-src]') {
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    });
                });

                document.querySelectorAll(selector).forEach(img => {
                    imageObserver.observe(img);
                });
            }
        },

        /**
         * Préchargement de ressources
         */
        preload(urls, type = 'script') {
            urls.forEach(url => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = url;
                link.as = type;
                document.head.appendChild(link);
            });
        },

        /**
         * Mesure de performance
         */
        measure(name, fn) {
            const start = performance.now();
            const result = fn();
            const end = performance.now();
            console.log(`${name}: ${(end - start).toFixed(2)}ms`);
            return result;
        }
    },

    // Navigation et routing
    navigation: {
        /**
         * Paramètres URL
         */
        getUrlParams() {
            return new URLSearchParams(window.location.search);
        },

        /**
         * Mise à jour de l'URL
         */
        updateUrl(params, replace = false) {
            const url = new URL(window.location);
            Object.entries(params).forEach(([key, value]) => {
                if (value === null || value === undefined) {
                    url.searchParams.delete(key);
                } else {
                    url.searchParams.set(key, value);
                }
            });
            
            if (replace) {
                history.replaceState({}, '', url);
            } else {
                history.pushState({}, '', url);
            }
        },

        /**
         * Vérification si on est sur mobile
         */
        isMobile() {
            return window.innerWidth <= 768;
        },

        /**
         * Détection du navigateur
         */
        getBrowser() {
            const ua = navigator.userAgent;
            if (ua.includes('Chrome')) return 'Chrome';
            if (ua.includes('Firefox')) return 'Firefox';
            if (ua.includes('Safari')) return 'Safari';
            if (ua.includes('Edge')) return 'Edge';
            return 'Unknown';
        }
    },

    // Gestion d'erreurs
    error: {
        /**
         * Log d'erreur structuré
         */
        log(error, context = {}) {
            const errorInfo = {
                message: error.message,
                stack: error.stack,
                timestamp: new Date().toISOString(),
                url: window.location.href,
                userAgent: navigator.userAgent,
                context
            };
            
            console.error('Error logged:', errorInfo);
            
            // Ici on pourrait envoyer à un service de logging
            if (OweoConfig.features.analytics) {
                this.sendToAnalytics(errorInfo);
            }
        },

        /**
         * Gestion globale des erreurs
         */
        setupGlobalHandlers() {
            window.addEventListener('error', (event) => {
                this.log(event.error, { type: 'javascript' });
            });

            window.addEventListener('unhandledrejection', (event) => {
                this.log(new Error(event.reason), { type: 'promise' });
            });
        },

        /**
         * Envoi vers analytics (placeholder)
         */
        sendToAnalytics(errorInfo) {
            // Implementation depends on analytics service
            console.warn('Analytics not implemented for error logging');
        }
    },

    // Notifications utilisateur
    notification: {
        /**
         * Affichage de notification
         */
        show(message, type = 'info', duration = 5000) {
            const notification = this.create(message, type);
            document.body.appendChild(notification);
            
            // Animation d'entrée
            requestAnimationFrame(() => {
                notification.classList.add('show');
            });
            
            // Suppression automatique
            setTimeout(() => {
                this.remove(notification);
            }, duration);
            
            return notification;
        },

        /**
         * Création d'élément notification
         */
        create(message, type) {
            const notification = document.createElement('div');
            notification.className = `notification notification--${type}`;
            notification.innerHTML = `
                <div class="notification__content">
                    <span class="notification__icon">${this.getIcon(type)}</span>
                    <span class="notification__message">${message}</span>
                    <button class="notification__close" onclick="this.parentElement.parentElement.remove()">×</button>
                </div>
            `;
            return notification;
        },

        /**
         * Icône selon le type
         */
        getIcon(type) {
            const icons = {
                success: '✅',
                error: '❌',
                warning: '⚠️',
                info: 'ℹ️'
            };
            return icons[type] || icons.info;
        },

        /**
         * Suppression de notification
         */
        remove(notification) {
            notification.classList.add('hide');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.parentElement.removeChild(notification);
                }
            }, 300);
        }
    },

    // Gestion du localStorage avec fallback
    storage: {
        /**
         * Sauvegarde avec gestion d'erreurs
         */
        set(key, value, expiry = null) {
            try {
                const item = {
                    value: value,
                    timestamp: Date.now(),
                    expiry: expiry ? Date.now() + expiry : null
                };
                localStorage.setItem(key, JSON.stringify(item));
                return true;
            } catch (error) {
                console.warn('Storage set failed:', error);
                return false;
            }
        },

        /**
         * Récupération avec vérification d'expiration
         */
        get(key, defaultValue = null) {
            try {
                const itemStr = localStorage.getItem(key);
                if (!itemStr) return defaultValue;

                const item = JSON.parse(itemStr);
                
                // Vérification d'expiration
                if (item.expiry && Date.now() > item.expiry) {
                    this.remove(key);
                    return defaultValue;
                }

                return item.value;
            } catch (error) {
                console.warn('Storage get failed:', error);
                return defaultValue;
            }
        },

        /**
         * Suppression
         */
        remove(key) {
            try {
                localStorage.removeItem(key);
                return true;
            } catch (error) {
                console.warn('Storage remove failed:', error);
                return false;
            }
        },

        /**
         * Nettoyage des éléments expirés
         */
        cleanup() {
            try {
                Object.keys(localStorage).forEach(key => {
                    this.get(key); // Déclenche la suppression si expiré
                });
            } catch (error) {
                console.warn('Storage cleanup failed:', error);
            }
        }
    },

    // Analytics et tracking
    analytics: {
        /**
         * Track d'événement
         */
        track(eventName, properties = {}) {
            if (!OweoConfig.features.analytics) return;

            const eventData = {
                event: eventName,
                timestamp: Date.now(),
                url: window.location.href,
                referrer: document.referrer,
                userAgent: navigator.userAgent,
                ...properties
            };

            console.log('Analytics event:', eventData);
            
            // Intégration avec Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', eventName, properties);
            }

            // Intégration avec d'autres services
            this.sendToServices(eventData);
        },

        /**
         * Track de page vue
         */
        pageView(page) {
            this.track('page_view', {
                page_title: document.title,
                page_location: window.location.href,
                page_path: window.location.pathname,
                page: page
            });
        },

        /**
         * Envoi vers services externes
         */
        sendToServices(eventData) {
            // Facebook Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'CustomEvent', eventData);
            }

            // LinkedIn Insight Tag
            if (typeof _linkedin_partner_id !== 'undefined') {
                // Implementation specific to LinkedIn
            }
        }
    },

    // Utilitaires de date
    date: {
        /**
         * Formatage de date relative
         */
        relative(date) {
            const now = new Date();
            const target = new Date(date);
            const diff = now - target;
            
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);
            
            if (days > 0) return `Il y a ${days} jour${days > 1 ? 's' : ''}`;
            if (hours > 0) return `Il y a ${hours} heure${hours > 1 ? 's' : ''}`;
            if (minutes > 0) return `Il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
            return 'À l\'instant';
        },

        /**
         * Vérification si c'est aujourd'hui
         */
        isToday(date) {
            const today = new Date();
            const target = new Date(date);
            return today.toDateString() === target.toDateString();
        },

        /**
         * Ajout de jours à une date
         */
        addDays(date, days) {
            const result = new Date(date);
            result.setDate(result.getDate() + days);
            return result;
        }
    },

    // Initialisation et configuration
    init() {
        console.log('🔧 OweoUtils initialized');
        
        // Configuration globale des erreurs
        this.error.setupGlobalHandlers();
        
        // Nettoyage du storage
        this.storage.cleanup();
        
        // Lazy loading des images
        this.performance.lazyLoadImages();
        
        // Analytics de page initiale
        if (OweoConfig.features.analytics) {
            this.analytics.pageView('init');
        }
    }
};

// Auto-initialisation
document.addEventListener('DOMContentLoaded', () => {
    OweoUtils.init();
});