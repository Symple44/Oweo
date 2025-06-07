// js/pages/outil-chiffrage-demo.js - Version complète corrigée
// Page de démonstration Outil de Chiffrage ERP

window.pages = window.pages || {};
window.pages['outil-chiffrage-demo'] = {
    
    // État de la page
    currentProject: null,
    selectedElement: null,
    calculationMode: 'automatic',
    currentStep: 1,
    projectData: {},
    
    // Base de données produits simulée
    productsDatabase: {
        profiles: {
            'IPE200': { name: 'IPE 200', unit: 'ml', pricePerUnit: 12.50, weight: 22.4, category: 'Profils' },
            'IPE300': { name: 'IPE 300', unit: 'ml', pricePerUnit: 18.75, weight: 42.2, category: 'Profils' },
            'HEA160': { name: 'HEA 160', unit: 'ml', pricePerUnit: 15.20, weight: 30.4, category: 'Profils' },
            'UPN140': { name: 'UPN 140', unit: 'ml', pricePerUnit: 11.80, weight: 16.0, category: 'Profils' }
        },
        plates: {
            'PLQ_8': { name: 'Plaque 8mm', unit: 'm²', pricePerUnit: 45.00, weight: 62.8, category: 'Tôlerie' },
            'PLQ_10': { name: 'Plaque 10mm', unit: 'm²', pricePerUnit: 52.50, weight: 78.5, category: 'Tôlerie' },
            'PLQ_15': { name: 'Plaque 15mm', unit: 'm²', pricePerUnit: 67.50, weight: 117.8, category: 'Tôlerie' }
        },
        fixings: {
            'BOULON_M16': { name: 'Boulon M16x60', unit: 'pce', pricePerUnit: 2.15, weight: 0.12, category: 'Boulonnerie' },
            'BOULON_M20': { name: 'Boulon M20x80', unit: 'pce', pricePerUnit: 3.25, weight: 0.18, category: 'Boulonnerie' },
            'SOUDURE': { name: 'Soudure ML', unit: 'ml', pricePerUnit: 8.50, weight: 0, category: 'Soudure' }
        }
    },
    
    // Données d'exemple pour la démo
    exampleProjects: {
        simple: {
            name: 'Hangar Simple 20x15m',
            elements: [
                { id: 'portique_1', name: 'Portique Principal', type: 'structure', quantity: 8, children: [
                    { id: 'poteau_gauche', name: 'Poteau Gauche', type: 'element', product: 'IPE300', quantity: 6.5, unit: 'ml' },
                    { id: 'poteau_droit', name: 'Poteau Droit', type: 'element', product: 'IPE300', quantity: 6.5, unit: 'ml' },
                    { id: 'traverse', name: 'Traverse', type: 'element', product: 'IPE200', quantity: 15.2, unit: 'ml' }
                ]},
                { id: 'couverture', name: 'Couverture', type: 'structure', quantity: 1, children: [
                    { id: 'pannes', name: 'Pannes', type: 'element', product: 'UPN140', quantity: 320, unit: 'ml' },
                    { id: 'lisses', name: 'Lisses', type: 'element', product: 'UPN140', quantity: 180, unit: 'ml' }
                ]}
            ]
        },
        complex: {
            name: 'Bâtiment Industriel 40x25m',
            elements: [
                { id: 'structure_principale', name: 'Structure Principale', type: 'structure', quantity: 1, children: [
                    { id: 'portiques', name: 'Portiques', type: 'structure', quantity: 12, children: [
                        { id: 'poteaux', name: 'Poteaux', type: 'element', product: 'IPE300', quantity: 8.5, unit: 'ml' },
                        { id: 'traverses', name: 'Traverses', type: 'element', product: 'IPE200', quantity: 25.8, unit: 'ml' }
                    ]},
                    { id: 'contreventement', name: 'Contreventement', type: 'structure', quantity: 1, children: [
                        { id: 'diagonales', name: 'Diagonales', type: 'element', product: 'IPE200', quantity: 240, unit: 'ml' }
                    ]}
                ]},
                { id: 'ossature_secondaire', name: 'Ossature Secondaire', type: 'structure', quantity: 1, children: [
                    { id: 'pannes_toiture', name: 'Pannes Toiture', type: 'element', product: 'UPN140', quantity: 850, unit: 'ml' },
                    { id: 'lisses_bardage', name: 'Lisses Bardage', type: 'element', product: 'UPN140', quantity: 450, unit: 'ml' }
                ]},
                { id: 'assemblages', name: 'Assemblages', type: 'structure', quantity: 1, children: [
                    { id: 'platines', name: 'Platines', type: 'element', product: 'PLQ_15', quantity: 8.5, unit: 'm²' },
                    { id: 'goussets', name: 'Goussets', type: 'element', product: 'PLQ_10', quantity: 12.3, unit: 'm²' },
                    { id: 'boulons_m16', name: 'Boulons M16', type: 'element', product: 'BOULON_M16', quantity: 240, unit: 'pce' },
                    { id: 'boulons_m20', name: 'Boulons M20', type: 'element', product: 'BOULON_M20', quantity: 180, unit: 'pce' },
                    { id: 'soudures', name: 'Soudures', type: 'element', product: 'SOUDURE', quantity: 450, unit: 'ml' }
                ]}
            ]
        }
    },
    
    /**
     * Générer le rendu HTML de la page
     */
    render() {
        return `
            <section class="section">
                <div class="container">
                    <!-- En-tête avec bouton retour -->
                    <div class="page-header">
                        <button class="btn btn-back">
                            ← Retour
                        </button>
                        <div class="header-content">
                            <h1 class="gradient-text">🔐 Outil de Chiffrage ERP</h1>
                            <p class="page-subtitle">
                                Démonstration d'un système de chiffrage hiérarchique intégré avec calculs automatisés et métrés en temps réel
                            </p>
                        </div>
                    </div>

                    <!-- Étapes du processus de chiffrage -->
                    <div class="chiffrage-steps" id="chiffrage-steps">
                        <div class="step active" data-step="1">
                            <div class="step-number">1</div>
                            <div class="step-label">Projet</div>
                        </div>
                        <div class="step" data-step="2">
                            <div class="step-number">2</div>
                            <div class="step-label">Structure</div>
                        </div>
                        <div class="step" data-step="3">
                            <div class="step-number">3</div>
                            <div class="step-label">Métrés</div>
                        </div>
                        <div class="step" data-step="4">
                            <div class="step-number">4</div>
                            <div class="step-label">Synthèse</div>
                        </div>
                    </div>

                    <!-- Interface principale de chiffrage -->
                    <div class="chiffrage-interface" id="chiffrage-interface">
                        
                        <!-- Étape 1: Création/Sélection de projet -->
                        <div class="project-setup" id="project-step" style="display: block;">
                            <div class="setup-header">
                                <h3>📋 Configuration du Projet</h3>
                                <p>Créez un nouveau projet ou chargez un exemple pour démarrer le chiffrage</p>
                            </div>
                            
                            <div class="project-options">
                                <div class="project-create">
                                    <h4>Nouveau Projet</h4>
                                    <div class="form-group">
                                        <label for="project-name">Nom du projet</label>
                                        <input type="text" id="project-name" placeholder="Ex: Hangar Industriel Zone A">
                                    </div>
                                    <div class="form-group">
                                        <label for="project-client">Client</label>
                                        <input type="text" id="project-client" placeholder="Ex: SARL Métallerie Loire">
                                    </div>
                                    <div class="form-group">
                                        <label for="project-reference">Référence</label>
                                        <input type="text" id="project-reference" placeholder="Ex: DEV-2024-001">
                                    </div>
                                    <button class="btn btn-primary" id="create-project">
                                        ✨ Créer Nouveau Projet
                                    </button>
                                </div>
                                
                                <div class="project-examples">
                                    <h4>Projets d'Exemple</h4>
                                    <p>Chargez un projet pré-configuré pour découvrir les fonctionnalités</p>
                                    
                                    <div class="example-projects">
                                        <div class="example-card" data-example="simple">
                                            <div class="example-icon">🏗️</div>
                                            <h5>Hangar Simple</h5>
                                            <p>Structure basique 20x15m avec portiques</p>
                                            <div class="example-specs">
                                                <span>8 portiques</span>
                                                <span>≈ 15 éléments</span>
                                                <span>⏱️ 5 min</span>
                                            </div>
                                            <button class="btn btn-outline btn-sm">
                                                📁 Charger
                                            </button>
                                        </div>
                                        
                                        <div class="example-card" data-example="complex">
                                            <div class="example-icon">🏭</div>
                                            <h5>Bâtiment Industriel</h5>
                                            <p>Structure complète 40x25m avec assemblages</p>
                                            <div class="example-specs">
                                                <span>12 portiques</span>
                                                <span>≈ 50 éléments</span>
                                                <span>⏱️ 10 min</span>
                                            </div>
                                            <button class="btn btn-outline btn-sm">
                                                📁 Charger
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Étape 2: Structure hiérarchique -->
                        <div class="project-structure" id="structure-step" style="display: none;">
                            <div class="structure-header">
                                <h3 id="current-project-title">🏗️ Structure du Projet</h3>
                                <div class="structure-actions">
                                    <button class="btn btn-outline btn-sm" id="expand-all">
                                        ⬇️ Tout Déplier
                                    </button>
                                    <button class="btn btn-outline btn-sm" id="collapse-all">
                                        ⬆️ Tout Replier
                                    </button>
                                    <button class="btn btn-primary btn-sm" id="add-element">
                                        ➕ Ajouter Élément
                                    </button>
                                </div>
                            </div>
                            
                            <div class="structure-workspace">
                                <div class="structure-tree" id="structure-tree">
                                    <!-- Arbre hiérarchique généré dynamiquement -->
                                </div>
                                
                                <div class="element-details" id="element-details">
                                    <div class="details-placeholder">
                                        <div class="placeholder-icon">📝</div>
                                        <h4>Sélectionnez un élément</h4>
                                        <p>Cliquez sur un élément dans l'arbre pour voir ses détails et configurer ses propriétés</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="structure-navigation">
                                <button class="btn btn-secondary" id="back-to-project">
                                    ← Retour Projet
                                </button>
                                <button class="btn btn-primary" id="proceed-to-metrage">
                                    Calculs Métrés →
                                </button>
                            </div>
                        </div>

                        <!-- Étape 3: Métrés et calculs -->
                        <div class="metrage-workspace" id="metrage-step" style="display: none;">
                            <div class="metrage-header">
                                <h3>📊 Métrés & Calculs Automatiques</h3>
                                <div class="metrage-controls">
                                    <label class="calculation-mode">
                                        <input type="radio" name="calc-mode" value="automatic" checked>
                                        <span>🤖 Automatique</span>
                                    </label>
                                    <label class="calculation-mode">
                                        <input type="radio" name="calc-mode" value="manual">
                                        <span>✋ Manuel</span>
                                    </label>
                                    <button class="btn btn-primary btn-sm" id="recalculate">
                                        🔄 Recalculer
                                    </button>
                                </div>
                            </div>
                            
                            <div class="metrage-content">
                                <div class="metrage-tree" id="metrage-tree">
                                    <!-- Arbre avec calculs -->
                                </div>
                                
                                <div class="metrage-summary" id="metrage-summary">
                                    <!-- Résumé des calculs -->
                                </div>
                            </div>
                            
                            <div class="metrage-navigation">
                                <button class="btn btn-secondary" id="back-to-structure">
                                    ← Structure
                                </button>
                                <button class="btn btn-primary" id="proceed-to-synthesis">
                                    Synthèse →
                                </button>
                            </div>
                        </div>

                        <!-- Étape 4: Synthèse et export -->
                        <div class="synthesis-workspace" id="synthesis-step" style="display: none;">
                            <div class="synthesis-header">
                                <h3>📋 Synthèse & Export</h3>
                                <p>Résumé complet du chiffrage avec options d'export</p>
                            </div>
                            
                            <div class="synthesis-content">
                                <div class="synthesis-overview" id="synthesis-overview">
                                    <!-- Vue d'ensemble -->
                                </div>
                                
                                <div class="synthesis-details" id="synthesis-details">
                                    <!-- Détails par catégorie -->
                                </div>
                            </div>
                            
                            <div class="synthesis-actions">
                                <button class="btn btn-outline" id="export-excel">
                                    📊 Export Excel
                                </button>
                                <button class="btn btn-outline" id="export-pdf">
                                    📑 Export PDF
                                </button>
                                <button class="btn btn-primary" id="save-project">
                                    💾 Sauvegarder Projet
                                </button>
                                <button class="btn btn-secondary" onclick="location.reload()">
                                    🔄 Nouveau Chiffrage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Modal d'ajout d'élément -->
            <div class="modal-overlay" id="add-element-modal" style="display: none;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>➕ Ajouter un Élément</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="element-form">
                            <div class="form-group">
                                <label for="element-name">Nom de l'élément</label>
                                <input type="text" id="element-name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="element-type">Type</label>
                                <select id="element-type" required>
                                    <option value="">Sélectionner...</option>
                                    <option value="structure">Structure (conteneur)</option>
                                    <option value="element">Élément (produit)</option>
                                </select>
                            </div>
                            
                            <div class="form-group" id="product-selection" style="display: none;">
                                <label for="element-product">Produit</label>
                                <select id="element-product">
                                    <option value="">Sélectionner un produit...</option>
                                    <optgroup label="Profils">
                                        <option value="IPE200">IPE 200 (12.50€/ml)</option>
                                        <option value="IPE300">IPE 300 (18.75€/ml)</option>
                                        <option value="HEA160">HEA 160 (15.20€/ml)</option>
                                        <option value="UPN140">UPN 140 (11.80€/ml)</option>
                                    </optgroup>
                                    <optgroup label="Tôlerie">
                                        <option value="PLQ_8">Plaque 8mm (45.00€/m²)</option>
                                        <option value="PLQ_10">Plaque 10mm (52.50€/m²)</option>
                                        <option value="PLQ_15">Plaque 15mm (67.50€/m²)</option>
                                    </optgroup>
                                    <optgroup label="Boulonnerie">
                                        <option value="BOULON_M16">Boulon M16x60 (2.15€/pce)</option>
                                        <option value="BOULON_M20">Boulon M20x80 (3.25€/pce)</option>
                                        <option value="SOUDURE">Soudure ML (8.50€/ml)</option>
                                    </optgroup>
                                </select>
                            </div>
                            
                            <div class="form-group" id="quantity-group" style="display: none;">
                                <label for="element-quantity">Quantité</label>
                                <input type="number" id="element-quantity" min="0" step="0.01">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancel-element">Annuler</button>
                        <button class="btn btn-primary" id="save-element">Ajouter</button>
                    </div>
                </div>
            </div>

            <!-- Modal d'édition d'élément -->
            <div class="modal-overlay" id="edit-element-modal" style="display: none;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>✏️ Modifier l'Élément</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="element-info" id="edit-element-info">
                            <!-- Informations de l'élément -->
                        </div>
                        
                        <form id="edit-element-form">
                            <div class="form-group">
                                <label for="edit-element-quantity">Quantité</label>
                                <div class="quantity-input">
                                    <input type="number" id="edit-element-quantity" min="0" step="0.01">
                                    <span class="quantity-unit" id="edit-quantity-unit"></span>
                                </div>
                            </div>
                            
                            <div class="calculation-preview" id="calculation-preview">
                                <!-- Aperçu des calculs -->
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger btn-sm" id="delete-element">🗑️ Supprimer</button>
                        <button class="btn btn-secondary" id="cancel-edit">Annuler</button>
                        <button class="btn btn-primary" id="save-edit">Sauvegarder</button>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Initialisation de la page - Version robuste
     */
    init() {
        console.log('🔧 Initialisation de la page outil de chiffrage...');
        
        try {
            // Vérification d'accès avec fallback
            if (!this.verifyClientAccess()) {
                console.warn('🔐 Accès client non vérifié - affichage page d\'accès');
                this.renderAccessDenied();
                return;
            }
            
            // Initialisation avec gestion d'erreurs
            this.safeInitialization();
            
        } catch (error) {
            console.error('❌ Erreur initialisation outil chiffrage:', error);
            this.renderErrorPage();
        }
    },
    
    /**
     * Initialisation sécurisée
     */
    safeInitialization() {
        // Attendre DOM avec timeout
        const initTimeout = setTimeout(() => {
            console.error('❌ Timeout initialisation outil chiffrage');
            this.renderErrorPage();
        }, 5000);
        
        const tryInit = () => {
            try {
                if (!document.getElementById('app')) {
                    setTimeout(tryInit, 50);
                    return;
                }
                
                clearTimeout(initTimeout);
                
                this.initializeChiffrageData();
                this.bindEvents();
                this.addDemoCSS();
                this.setupBackButton();
                
                console.log('✅ Page outil de chiffrage initialisée avec succès');
                this.showClientWelcome();
                
            } catch (error) {
                clearTimeout(initTimeout);
                console.error('❌ Erreur dans tryInit:', error);
                this.renderErrorPage();
            }
        };
        
        setTimeout(tryInit, 100);
    },

    /**
     * Vérification d'accès améliorée
     */
    verifyClientAccess() {
        // Vérifier disponibilité du système d'accès
        if (typeof window.OweoClientAccess === 'undefined') {
            console.error('❌ OweoClientAccess non disponible');
            return false;
        }
        
        try {
            const hasAccess = window.OweoClientAccess.hasAccess();
            console.log('🔐 Vérification accès client:', hasAccess);
            return hasAccess;
            
        } catch (error) {
            console.error('❌ Erreur vérification accès:', error);
            return false;
        }
    },

    /**
     * Initialisation des données de chiffrage
     */
    initializeChiffrageData() {
        try {
            // Réinitialiser l'état
            this.currentProject = null;
            this.selectedElement = null;
            this.calculationMode = 'automatic';
            this.currentStep = 1;
            this.projectData = {};
            
            console.log('✅ Données chiffrage initialisées');
            
        } catch (error) {
            console.error('❌ Erreur initialisation données chiffrage:', error);
        }
    },

    /**
     * Liaison des événements
     */
    bindEvents() {
        try {
            // Délégation d'événements pour robustesse
            document.addEventListener('click', this.handleGlobalClick.bind(this));
            document.addEventListener('change', this.handleGlobalChange.bind(this));
            document.addEventListener('input', this.handleGlobalInput.bind(this));
            
            // Événements spécifiques
            this.bindModalEvents();
            
            console.log('✅ Événements chiffrage liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison événements chiffrage:', error);
        }
    },

    /**
     * Gestionnaire principal des clics
     */
    handleGlobalClick(e) {
        try {
            const target = e.target;
            
            // Projets d'exemple
            const exampleCard = target.closest('.example-card');
            if (exampleCard) {
                const example = exampleCard.dataset.example;
                this.loadExampleProject(example);
                return;
            }
            
            // Création de projet
            if (target.id === 'create-project') {
                e.preventDefault();
                this.createNewProject();
                return;
            }
            
            // Navigation entre étapes
            if (target.id === 'proceed-to-metrage') {
                this.advanceToStep(3);
                return;
            }
            
            if (target.id === 'proceed-to-synthesis') {
                this.advanceToStep(4);
                return;
            }
            
            if (target.id === 'back-to-project') {
                this.advanceToStep(1);
                return;
            }
            
            if (target.id === 'back-to-structure') {
                this.advanceToStep(2);
                return;
            }
            
            // Ajout d'élément
            if (target.id === 'add-element') {
                this.showAddElementModal();
                return;
            }
            
            // Recalcul
            if (target.id === 'recalculate') {
                this.performCalculations();
                return;
            }
            
            // Éléments de l'arbre
            const treeElement = target.closest('.tree-element');
            if (treeElement) {
                this.selectElement(treeElement.dataset.elementId);
                return;
            }
            
            // Exports
            if (target.id === 'export-excel') {
                this.exportToExcel();
                return;
            }
            
            if (target.id === 'export-pdf') {
                this.exportToPDF();
                return;
            }
            
            if (target.id === 'save-project') {
                this.saveProject();
                return;
            }
            
            // Modales
            this.handleModalButtons(e);
            
        } catch (error) {
            console.error('❌ Erreur gestionnaire clic global:', error);
        }
    },

    /**
     * Gestionnaire des changements
     */
    handleGlobalChange(e) {
        try {
            const target = e.target;
            
            // Mode de calcul
            if (target.name === 'calc-mode') {
                this.calculationMode = target.value;
                this.performCalculations();
                return;
            }
            
            // Type d'élément dans la modal d'ajout
            if (target.id === 'element-type') {
                this.toggleProductSelection(target.value);
                return;
            }
            
        } catch (error) {
            console.error('❌ Erreur gestionnaire changement global:', error);
        }
    },

    /**
     * Gestionnaire des inputs
     */
    handleGlobalInput(e) {
        try {
            const target = e.target;
            
            // Quantité en temps réel
            if (target.id === 'edit-element-quantity') {
                this.updateCalculationPreview();
                return;
            }
            
        } catch (error) {
            console.error('❌ Erreur gestionnaire input global:', error);
        }
    },

    /**
     * Charger un projet d'exemple
     */
    loadExampleProject(exampleType) {
        try {
            const example = this.exampleProjects[exampleType];
            if (!example) {
                throw new Error(`Exemple ${exampleType} non trouvé`);
            }
            
            this.currentProject = {
                name: example.name,
                client: 'Client Démonstration',
                reference: `DEMO-${exampleType.toUpperCase()}-${Date.now()}`,
                elements: JSON.parse(JSON.stringify(example.elements)) // Deep copy
            };
            
            // Avancer à l'étape structure
            this.advanceToStep(2);
            this.renderProjectStructure();
            
            this.showSuccessMessage(`Projet "${example.name}" chargé avec succès !`);
            
        } catch (error) {
            console.error('❌ Erreur chargement projet exemple:', error);
            this.showErrorMessage('Erreur lors du chargement du projet d\'exemple');
        }
    },

    /**
     * Créer un nouveau projet
     */
    createNewProject() {
        try {
            const name = document.getElementById('project-name').value.trim();
            const client = document.getElementById('project-client').value.trim();
            const reference = document.getElementById('project-reference').value.trim();
            
            if (!name) {
                this.showErrorMessage('Le nom du projet est requis');
                return;
            }
            
            this.currentProject = {
                name: name,
                client: client || 'Client non spécifié',
                reference: reference || `PRJ-${Date.now()}`,
                elements: []
            };
            
            // Avancer à l'étape structure
            this.advanceToStep(2);
            this.renderProjectStructure();
            
            this.showSuccessMessage(`Nouveau projet "${name}" créé !`);
            
        } catch (error) {
            console.error('❌ Erreur création nouveau projet:', error);
            this.showErrorMessage('Erreur lors de la création du projet');
        }
    },

    /**
     * Avancer à une étape
     */
    advanceToStep(stepNumber) {
        try {
            this.currentStep = stepNumber;
            
            // Mettre à jour les indicateurs d'étapes
            document.querySelectorAll('.step').forEach((step, index) => {
                const stepNum = index + 1;
                step.classList.remove('active', 'completed');
                
                if (stepNum < stepNumber) {
                    step.classList.add('completed');
                } else if (stepNum === stepNumber) {
                    step.classList.add('active');
                }
            });
            
            // Masquer toutes les sections
            ['project-step', 'structure-step', 'metrage-step', 'synthesis-step'].forEach(id => {
                const element = document.getElementById(id);
                if (element) element.style.display = 'none';
            });
            
            // Afficher la section correspondante
            const stepIds = ['project-step', 'structure-step', 'metrage-step', 'synthesis-step'];
            const targetStep = document.getElementById(stepIds[stepNumber - 1]);
            if (targetStep) {
                targetStep.style.display = 'block';
            }
            
            // Rendu spécifique à l'étape
            switch (stepNumber) {
                case 2:
                    this.renderProjectStructure();
                    break;
                case 3:
                    this.renderMetrageWorkspace();
                    break;
                case 4:
                    this.renderSynthesis();
                    break;
            }
            
            console.log(`✅ Avancé à l'étape ${stepNumber}`);
            
        } catch (error) {
            console.error(`❌ Erreur avancement étape ${stepNumber}:`, error);
        }
    },

    /**
     * Rendu de la structure du projet
     */
    renderProjectStructure() {
        try {
            if (!this.currentProject) return;
            
            // Titre du projet
            const titleElement = document.getElementById('current-project-title');
            if (titleElement) {
                titleElement.textContent = `🏗️ ${this.currentProject.name}`;
            }
            
            // Arbre de structure
            const tree = document.getElementById('structure-tree');
            if (tree) {
                tree.innerHTML = this.generateStructureTree(this.currentProject.elements);
            }
            
        } catch (error) {
            console.error('❌ Erreur rendu structure projet:', error);
        }
    },

    /**
     * Générer l'arbre de structure HTML
     */
    generateStructureTree(elements, level = 0) {
        try {
            return elements.map(element => {
                const hasChildren = element.children && element.children.length > 0;
                const indent = level * 20;
                
                const productInfo = element.product ? this.getProductInfo(element.product) : null;
                
                return `
                    <div class="tree-element ${element.type}" 
                         data-element-id="${element.id}" 
                         style="margin-left: ${indent}px;">
                        <div class="tree-element-header">
                            ${hasChildren ? '<span class="tree-toggle">▼</span>' : '<span class="tree-spacer"></span>'}
                            <span class="element-icon">${this.getElementIcon(element.type)}</span>
                            <span class="element-name">${element.name}</span>
                            ${element.quantity ? `<span class="element-quantity">×${element.quantity}</span>` : ''}
                            ${productInfo ? `<span class="element-product">${productInfo.name}</span>` : ''}
                            <div class="element-actions">
                                <button class="btn-edit" data-element-id="${element.id}">✏️</button>
                                <button class="btn-delete" data-element-id="${element.id}">🗑️</button>
                            </div>
                        </div>
                        ${hasChildren ? `
                            <div class="tree-children">
                                ${this.generateStructureTree(element.children, level + 1)}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('');
            
        } catch (error) {
            console.error('❌ Erreur génération arbre structure:', error);
            return '<div class="tree-error">Erreur de génération</div>';
        }
    },

    /**
     * Rendu de l'espace métrés
     */
    renderMetrageWorkspace() {
        try {
            if (!this.currentProject) return;
            
            this.performCalculations();
            
        } catch (error) {
            console.error('❌ Erreur rendu espace métrés:', error);
        }
    },

    /**
     * Effectuer les calculs
     */
    performCalculations() {
        try {
            if (!this.currentProject) return;
            
            // Calculer récursivement
            const calculations = this.calculateElement(this.currentProject.elements);
            
            // Rendu de l'arbre avec calculs
            const metrageTree = document.getElementById('metrage-tree');
            if (metrageTree) {
                metrageTree.innerHTML = this.generateMetrageTree(this.currentProject.elements, calculations);
            }
            
            // Résumé
            const summary = document.getElementById('metrage-summary');
            if (summary) {
                summary.innerHTML = this.generateMetrageSummary(calculations);
            }
            
        } catch (error) {
            console.error('❌ Erreur calculs:', error);
        }
    },

    /**
     * Calculer un élément (récursif)
     */
    calculateElement(elements) {
        try {
            const calculations = {
                totalCost: 0,
                totalWeight: 0,
                byCategory: {},
                details: []
            };
            
            elements.forEach(element => {
                let elementCalc = {
                    id: element.id,
                    name: element.name,
                    cost: 0,
                    weight: 0,
                    children: null
                };
                
                if (element.children && element.children.length > 0) {
                    // Élément structure - calculer les enfants
                    const childrenCalc = this.calculateElement(element.children);
                    elementCalc.cost = childrenCalc.totalCost * (element.quantity || 1);
                    elementCalc.weight = childrenCalc.totalWeight * (element.quantity || 1);
                    elementCalc.children = childrenCalc;
                } else if (element.product && element.quantity) {
                    // Élément produit - calculer directement
                    const productInfo = this.getProductInfo(element.product);
                    if (productInfo) {
                        elementCalc.cost = productInfo.pricePerUnit * element.quantity;
                        elementCalc.weight = productInfo.weight * element.quantity;
                        
                        // Ajouter à la catégorie
                        const category = productInfo.category;
                        if (!calculations.byCategory[category]) {
                            calculations.byCategory[category] = { cost: 0, weight: 0, items: [] };
                        }
                        calculations.byCategory[category].cost += elementCalc.cost;
                        calculations.byCategory[category].weight += elementCalc.weight;
                        calculations.byCategory[category].items.push({
                            name: element.name,
                            product: productInfo.name,
                            quantity: element.quantity,
                            unit: productInfo.unit,
                            unitPrice: productInfo.pricePerUnit,
                            cost: elementCalc.cost,
                            weight: elementCalc.weight
                        });
                    }
                }
                
                calculations.totalCost += elementCalc.cost;
                calculations.totalWeight += elementCalc.weight;
                calculations.details.push(elementCalc);
            });
            
            return calculations;
            
        } catch (error) {
            console.error('❌ Erreur calcul élément:', error);
            return { totalCost: 0, totalWeight: 0, byCategory: {}, details: [] };
        }
    },

    /**
     * Générer l'arbre des métrés
     */
    generateMetrageTree(elements, calculations) {
        try {
            return elements.map((element, index) => {
                const calc = calculations.details[index];
                if (!calc) return '';
                
                const hasChildren = element.children && element.children.length > 0;
                const productInfo = element.product ? this.getProductInfo(element.product) : null;
                
                return `
                    <div class="metrage-element">
                        <div class="metrage-header">
                            <span class="element-icon">${this.getElementIcon(element.type)}</span>
                            <span class="element-name">${element.name}</span>
                            ${element.quantity ? `<span class="element-quantity">×${element.quantity}</span>` : ''}
                            ${productInfo ? `
                                <span class="element-details">
                                    ${productInfo.name} - ${element.quantity} ${productInfo.unit} × ${productInfo.pricePerUnit}€
                                </span>
                            ` : ''}
                            <div class="metrage-results">
                                <span class="cost">${calc.cost.toFixed(2)}€</span>
                                <span class="weight">${calc.weight.toFixed(1)}kg</span>
                            </div>
                        </div>
                        ${hasChildren && calc.children ? `
                            <div class="metrage-children">
                                ${this.generateMetrageTree(element.children, calc.children)}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('');
            
        } catch (error) {
            console.error('❌ Erreur génération arbre métrés:', error);
            return '<div class="metrage-error">Erreur de génération</div>';
        }
    },

    /**
     * Générer le résumé des métrés
     */
    generateMetrageSummary(calculations) {
        try {
            return `
                <div class="summary-header">
                    <h4>📊 Résumé Global</h4>
                    <div class="summary-totals">
                        <div class="total-item">
                            <span class="total-label">Coût Total:</span>
                            <span class="total-value">${calculations.totalCost.toFixed(2)}€</span>
                        </div>
                        <div class="total-item">
                            <span class="total-label">Poids Total:</span>
                            <span class="total-value">${calculations.totalWeight.toFixed(1)}kg</span>
                        </div>
                    </div>
                </div>
                
                <div class="summary-categories">
                    <h5>Par Catégorie:</h5>
                    ${Object.keys(calculations.byCategory).map(category => {
                        const categoryData = calculations.byCategory[category];
                        return `
                            <div class="category-summary">
                                <div class="category-header">
                                    <strong>${category}</strong>
                                    <span class="category-totals">
                                        ${categoryData.cost.toFixed(2)}€ - ${categoryData.weight.toFixed(1)}kg
                                    </span>
                                </div>
                                <div class="category-items">
                                    ${categoryData.items.map(item => `
                                        <div class="item-line">
                                            ${item.name}: ${item.quantity} ${item.unit} × ${item.unitPrice}€ = ${item.cost.toFixed(2)}€
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            
        } catch (error) {
            console.error('❌ Erreur génération résumé métrés:', error);
            return '<div class="summary-error">Erreur de génération</div>';
        }
    },

    /**
     * Rendu de la synthèse
     */
    renderSynthesis() {
        try {
            if (!this.currentProject) return;
            
            const calculations = this.calculateElement(this.currentProject.elements);
            
            const overview = document.getElementById('synthesis-overview');
            if (overview) {
                overview.innerHTML = this.generateSynthesisOverview(calculations);
            }
            
            const details = document.getElementById('synthesis-details');
            if (details) {
                details.innerHTML = this.generateSynthesisDetails(calculations);
            }
            
        } catch (error) {
            console.error('❌ Erreur rendu synthèse:', error);
        }
    },

    /**
     * Générer la vue d'ensemble de la synthèse
     */
    generateSynthesisOverview(calculations) {
        try {
            return `
                <div class="overview-card">
                    <h4>🏗️ ${this.currentProject.name}</h4>
                    <div class="project-info">
                        <div class="info-item">
                            <strong>Client:</strong> ${this.currentProject.client}
                        </div>
                        <div class="info-item">
                            <strong>Référence:</strong> ${this.currentProject.reference}
                        </div>
                        <div class="info-item">
                            <strong>Date:</strong> ${new Date().toLocaleDateString('fr-FR')}
                        </div>
                    </div>
                    
                    <div class="overview-totals">
                        <div class="total-box cost-box">
                            <div class="total-icon">💰</div>
                            <div class="total-content">
                                <div class="total-label">Coût Total</div>
                                <div class="total-amount">${calculations.totalCost.toFixed(2)}€</div>
                            </div>
                        </div>
                        
                        <div class="total-box weight-box">
                            <div class="total-icon">⚖️</div>
                            <div class="total-content">
                                <div class="total-label">Poids Total</div>
                                <div class="total-amount">${calculations.totalWeight.toFixed(1)}kg</div>
                            </div>
                        </div>
                        
                        <div class="total-box ratio-box">
                            <div class="total-icon">📊</div>
                            <div class="total-content">
                                <div class="total-label">€/kg</div>
                                <div class="total-amount">${(calculations.totalCost / calculations.totalWeight).toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
        } catch (error) {
            console.error('❌ Erreur génération vue d\'ensemble synthèse:', error);
            return '<div class="overview-error">Erreur de génération</div>';
        }
    },

    /**
     * Gérer les événements des modales
     */
    bindModalEvents() {
        try {
            // Délégation pour les boutons de modal
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('modal-close')) {
                    this.closeAllModals();
                }
                
                if (e.target.classList.contains('modal-overlay')) {
                    this.closeAllModals();
                }
            });
            
            // Échappement
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeAllModals();
                }
            });
            
        } catch (error) {
            console.error('❌ Erreur liaison événements modales:', error);
        }
    },

    /**
     * Utilitaires
     */
    getProductInfo(productId) {
        try {
            // Chercher dans toutes les catégories
            for (const category of Object.values(this.productsDatabase)) {
                if (category[productId]) {
                    return category[productId];
                }
            }
            return null;
        } catch (error) {
            console.error('❌ Erreur récupération info produit:', error);
            return null;
        }
    },

    getElementIcon(type) {
        const icons = {
            'structure': '📁',
            'element': '🔧',
            'default': '📄'
        };
        return icons[type] || icons.default;
    },

    closeAllModals() {
        try {
            const modals = document.querySelectorAll('.modal-overlay');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        } catch (error) {
            console.error('❌ Erreur fermeture modales:', error);
        }
    },

    showSuccessMessage(message) {
        this.showNotification(`✅ ${message}`, 'success', 3000);
    },

    showErrorMessage(message) {
        this.showNotification(`❌ ${message}`, 'error', 4000);
    },

    showNotification(message, type = 'info', duration = 3000) {
        try {
            if (window.OweoClientAccess && typeof window.OweoClientAccess.showNotification === 'function') {
                window.OweoClientAccess.showNotification(message, type, duration);
            } else {
                console.log(message);
            }
        } catch (error) {
            console.error('❌ Erreur notification:', error);
            console.log(message);
        }
    },

    /**
     * Configuration du bouton retour
     */
    setupBackButton() {
        try {
            if (typeof window.setupBackButton === 'function') {
                window.setupBackButton();
                console.log('✅ Bouton retour configuré');
            } else {
                console.warn('⚠️ setupBackButton non disponible');
            }
        } catch (error) {
            console.error('❌ Erreur configuration bouton retour:', error);
        }
    },

    /**
     * Affichage message de bienvenue client
     */
    showClientWelcome() {
        try {
            const session = window.OweoClientAccess?.getSessionInfo();
            if (session) {
                this.showSuccessMessage('Bienvenue dans la démonstration Outil de Chiffrage !');
            }
        } catch (error) {
            console.error('❌ Erreur message bienvenue:', error);
        }
    },

    /**
     * Pages d'erreur
     */
    renderAccessDenied() {
        const appContainer = document.getElementById('app');
        if (!appContainer) return;
        
        appContainer.innerHTML = `
            <section class="section access-denied">
                <div class="container">
                    <div class="access-denied-content">
                        <div class="access-denied-icon">🔐</div>
                        <h1>Accès Client Requis</h1>
                        <p class="access-denied-message">
                            Cette démonstration interactive de chiffrage ERP est exclusivement réservée à nos clients.
                            Contactez votre référent Oweo pour obtenir un code d'accès.
                        </p>
                        <div class="access-denied-actions">
                            <button class="btn btn-primary" onclick="window.OweoClientAccess?.showAuthModal('outil-chiffrage-demo')">
                                🔐 Saisir Code d'Accès
                            </button>
                            <button class="btn btn-secondary" onclick="window.history.back()">
                                ← Retour
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderErrorPage() {
        const appContainer = document.getElementById('app');
        if (!appContainer) return;
        
        appContainer.innerHTML = `
            <section class="section error-page">
                <div class="container">
                    <div class="error-content">
                        <div class="error-icon">⚠️</div>
                        <h1>Erreur de Chargement</h1>
                        <p>Une erreur est survenue lors du chargement de la démonstration.</p>
                        <div class="error-actions">
                            <button class="btn btn-primary" onclick="location.reload()">
                                🔄 Recharger la page
                            </button>
                            <button class="btn btn-secondary" onclick="window.history.back()">
                                ← Retour
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    /**
     * Ajout des styles CSS
     */
    addDemoCSS() {
        if (document.getElementById('chiffrage-demo-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'chiffrage-demo-styles';
        styles.textContent = `
            /* Styles spécifiques pour la démo chiffrage */
            .chiffrage-steps {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: var(--space-4, 1rem);
                margin: var(--space-8, 2rem) 0;
                padding: var(--space-6, 1.5rem);
                background: var(--bg-card, rgba(255, 255, 255, 0.03));
                border-radius: var(--radius-lg, 12px);
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
            }
            
            .example-projects {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: var(--space-4, 1rem);
                margin-top: var(--space-4, 1rem);
            }
            
            .example-card {
                background: var(--bg-card, rgba(255, 255, 255, 0.03));
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
                border-radius: var(--radius-md, 8px);
                padding: var(--space-4, 1rem);
                text-align: center;
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .example-card:hover {
                border-color: var(--primary-color, #00d4ff);
                transform: translateY(-2px);
            }
            
            .tree-element {
                margin: var(--space-1, 0.25rem) 0;
                border-radius: var(--radius-sm, 4px);
                transition: background 0.2s ease;
            }
            
            .tree-element:hover {
                background: rgba(255, 255, 255, 0.05);
            }
            
            .tree-element-header {
                display: flex;
                align-items: center;
                gap: var(--space-2, 0.5rem);
                padding: var(--space-2, 0.5rem);
                cursor: pointer;
            }
            
            .metrage-element {
                margin: var(--space-2, 0.5rem) 0;
                background: var(--bg-card, rgba(255, 255, 255, 0.03));
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
                border-radius: var(--radius-sm, 4px);
                padding: var(--space-3, 0.75rem);
            }
            
            .total-box {
                background: var(--bg-card, rgba(255, 255, 255, 0.03));
                border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
                border-radius: var(--radius-md, 8px);
                padding: var(--space-4, 1rem);
                display: flex;
                align-items: center;
                gap: var(--space-3, 0.75rem);
            }
        `;
        
        document.head.appendChild(styles);
    }
};

console.log('🔧 Outil Chiffrage Demo page loaded with complete functionality');