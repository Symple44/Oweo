// js/app.js

class OweoApp {
    constructor() {
        this.version = OweoConfig.version;
        this.init();
    }

    init() {
        console.log(`🚀 Oweo App v${this.version} initialized`);
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.startup();
            });
        } else {
            this.startup();
        }
    }

    startup() {
        try {
            // Initialize components
            this.initializeComponents();
            
            // Set up global event listeners
            this.setupGlobalEvents();
            
            // Performance monitoring
            this.setupPerformanceMonitoring();
            
            console.log('✅ Oweo App ready');
        } catch (error) {
            console.error('❌ Error during startup:', error);
            // Fallback: show basic content
            document.getElementById('app').innerHTML = `
                <div style="padding: 100px 20px; text-align: center; color: white;">
                    <h1>Oweo - Expertise Digitale</h1>
                    <p>Chargement en cours...</p>
                </div>
            `;
        }
    }

    initializeComponents() {
        // Components are already initialized in their respective files
        console.log('📦 Components initialized');
    }

    setupGlobalEvents() {
        // Handle responsive adjustments
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Global error handling
        window.addEventListener('error', (event) => {
            console.error('💥 Global error:', event.error);
        });

        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            console.error('💥 Unhandled promise rejection:', event.reason);
        });
    }

    setupPerformanceMonitoring() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log(`⚡ Page loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
            }, 0);
        });
    }

    handleResize() {
        // Handle responsive adjustments
        const isMobile = window.innerWidth <= 768;
        document.body.classList.toggle('mobile', isMobile);
    }

    // Utility methods
    static showNotification(message, type = 'info') {
        console.log(`📢 ${type.toUpperCase()}: ${message}`);
        // You can implement actual notification UI here
    }

    static trackEvent(eventName, data = {}) {
        console.log(`📊 Event: ${eventName}`, data);
        // You can implement actual analytics tracking here
    }
}

// Initialize app
window.oweoApp = new OweoApp();

// Export for global access
window.OweoApp = OweoApp;