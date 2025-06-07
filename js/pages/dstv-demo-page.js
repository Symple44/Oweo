// js/pages/dstv-demo-page.js - Version complète corrigée
// Page de démonstration Import DSTV avec assignation automatique

window.pages = window.pages || {};
window.pages['import-dstv-demo'] = {
    
    // État de la page
    currentPieces: [],
    currentStep: 1,
    machinesData: null,
    selectedMachine: null,
    currentPieceId: null,
    currentModal: null,
    
    // Données d'exemple pour la démo
    exampleDSTVData: {
        profils: [
            {
                id: 'P001',
                nom: 'IPE200_Principal',
                type: 'Profile',
                materiau: 'S275',
                epaisseur: 7,
                longueur: 6000,
                largeur: 200,
                surface: 1.2,
                perimetreCoupe: 800,
                nbPerçages: 12,
                complexite: 2
            },
            {
                id: 'P002',
                nom: 'HEA160_Traverse',
                type: 'Profile',
                materiau: 'S235',
                epaisseur: 8,
                longueur: 4000,
                largeur: 160,
                surface: 0.64,
                perimetreCoupe: 640,
                nbPerçages: 8,
                complexite: 1
            },
            {
                id: 'P003',
                nom: 'UPN140_Sabliere',
                type: 'Profile',
                materiau: 'S275',
                epaisseur: 6,
                longueur: 3500,
                largeur: 140,
                surface: 0.49,
                perimetreCoupe: 560,
                nbPerçages: 6,
                complexite: 1
            }
        ],
        plaques: [
            {
                id: 'PL001',
                nom: 'Gousset_Assemblage',
                type: 'Plaque',
                materiau: 'S275',
                epaisseur: 15,
                longueur: 300,
                largeur: 200,
                surface: 0.06,
                perimetreCoupe: 1000,
                nbPerçages: 6,
                complexite: 3
            },
            {
                id: 'PL002',
                nom: 'Platine_Ancrage',
                type: 'Plaque',
                materiau: 'S355',
                epaisseur: 20,
                longueur: 400,
                largeur: 400,
                surface: 0.16,
                perimetreCoupe: 1600,
                nbPerçages: 8,
                complexite: 2
            }
        ]
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
                            <h1 class="gradient-text">🔄 Import DSTV & Assignation</h1>
                            <p class="page-subtitle">
                                Démonstration d'import automatique de fichiers DSTV avec assignation intelligente aux machines de production
                            </p>
                        </div>
                    </div>

                    <!-- Étapes du processus -->
                    <div class="process-steps" id="process-steps">
                        <div class="step active" data-step="1">
                            <div class="step-number">1</div>
                            <div class="step-label">Import DSTV</div>
                        </div>
                        <div class="step" data-step="2">
                            <div class="step-number">2</div>
                            <div class="step-label">Analyse</div>
                        </div>
                        <div class="step" data-step="3">
                            <div class="step-number">3</div>
                            <div class="step-label">Assignation</div>
                        </div>
                        <div class="step" data-step="4">
                            <div class="step-number">4</div>
                            <div class="step-label">Export</div>
                        </div>
                    </div>

                    <!-- Interface DSTV -->
                    <div class="dstv-interface" id="dstv-interface">
                        
                        <!-- Étape 1: Import -->
                        <div class="import-zone" id="import-step" style="display: block;">
                            <div class="import-header">
                                <h3>📁 Import de Fichiers DSTV</h3>
                                <div class="import-info">
                                    <span class="info-badge">✅ Profils</span>
                                    <span class="info-badge">✅ Plaques</span>
                                    <span class="info-badge">✅ Multi-fichiers</span>
                                </div>
                            </div>
                            
                            <div class="file-drop-zone" id="file-drop-zone">
                                <div class="drop-content">
                                    <div class="drop-icon">📄</div>
                                    <h4>Glissez vos fichiers DSTV ici</h4>
                                    <p>Ou cliquez pour sélectionner des fichiers</p>
                                    <input type="file" id="file-input" multiple accept=".nc1,.nc2,.dstv,.xml" style="display: none;">
                                    <button class="btn btn-primary" onclick="document.getElementById('file-input').click()">
                                        📁 Sélectionner Fichiers
                                    </button>
                                </div>
                                
                                <div class="demo-files">
                                    <h5>📋 Ou utilisez nos exemples :</h5>
                                    <div class="demo-buttons">
                                        <button class="btn btn-outline btn-sm" data-demo="profils">
                                            🏗️ Profils Portique (3 pièces)
                                        </button>
                                        <button class="btn btn-outline btn-sm" data-demo="plaques">
                                            🔲 Plaques Assemblage (2 pièces)
                                        </button>
                                        <button class="btn btn-outline btn-sm" data-demo="mixte">
                                            🔧 Projet Complet (5 pièces)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Étape 2: Analyse des pièces -->
                        <div class="analysis-zone" id="analysis-step" style="display: none;">
                            <div class="analysis-header">
                                <h3>🔍 Analyse des Pièces Importées</h3>
                                <div class="analysis-summary" id="analysis-summary">
                                    <!-- Résumé généré dynamiquement -->
                                </div>
                            </div>
                            
                            <div class="pieces-grid" id="pieces-grid">
                                <!-- Grille des pièces générée dynamiquement -->
                            </div>
                            
                            <div class="analysis-actions">
                                <button class="btn btn-primary" id="auto-assign">
                                    🤖 Assignation Automatique
                                </button>
                                <button class="btn btn-secondary" id="manual-assign" style="display: none;">
                                    ✋ Assignation Manuelle
                                </button>
                            </div>
                        </div>

                        <!-- Étape 3: Configuration des machines -->
                        <div class="machines-config" id="machines-step" style="display: none;">
                            <div class="config-header">
                                <h3>⚙️ Configuration & Assignation</h3>
                                <button class="btn btn-outline btn-sm" id="edit-machines">
                                    ⚙️ Configurer Machines
                                </button>
                            </div>
                            
                            <div class="machines-overview" id="machines-overview">
                                <!-- Vue d'ensemble des machines générée dynamiquement -->
                            </div>
                            
                            <div class="assignments-summary" id="assignments-summary">
                                <!-- Résumé des assignations -->
                            </div>
                            
                            <div class="config-actions">
                                <button class="btn btn-primary" id="generate-export">
                                    📊 Générer Export
                                </button>
                                <button class="btn btn-outline" id="optimize-assignments">
                                    🎯 Optimiser Assignations
                                </button>
                            </div>
                        </div>

                        <!-- Étape 4: Export -->
                        <div class="export-zone" id="export-step" style="display: none;">
                            <div class="export-header">
                                <h3>📤 Export & Intégration ERP</h3>
                                <p>Exportez les résultats vers votre ERP ou système de gestion</p>
                            </div>
                            
                            <div class="export-options">
                                <div class="export-item">
                                    <h4>📋 Nomenclature Production</h4>
                                    <p>Liste détaillée avec temps, coûts et assignations machines</p>
                                    <button class="btn btn-primary">📥 Télécharger Excel</button>
                                </div>
                                
                                <div class="export-item">
                                    <h4>🔗 Intégration ERP</h4>
                                    <p>Export direct vers votre système ERP via API</p>
                                    <button class="btn btn-primary">🚀 Envoyer vers ERP</button>
                                </div>
                                
                                <div class="export-item">
                                    <h4>📊 Rapport d'Analyse</h4>
                                    <p>Rapport complet avec recommandations d'optimisation</p>
                                    <button class="btn btn-primary">📑 Générer PDF</button>
                                </div>
                            </div>
                            
                            <div class="export-actions">
                                <button class="btn btn-outline" onclick="location.reload()">
                                    🔄 Nouvelle Simulation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Modal d'assignation de pièce -->
            <div class="modal-overlay" id="assign-modal" style="display: none;">
                <div class="modal-content modal-large">
                    <div class="modal-header">
                        <h3>🔧 Assignation de Pièce</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="current-piece-info" id="current-piece-info">
                            <!-- Informations de la pièce courante -->
                        </div>
                        
                        <h4>Sélection de la machine :</h4>
                        <div class="machines-selection" id="machines-selection">
                            <!-- Options de machines générées dynamiquement -->
                        </div>
                        
                        <h4>Temps de production estimés :</h4>
                        <div class="time-inputs">
                            <div class="time-input-group">
                                <label for="prep-time">Préparation (min)</label>
                                <input type="number" id="prep-time" min="0" step="0.1">
                            </div>
                            <div class="time-input-group">
                                <label for="machining-time">Usinage (min)</label>
                                <input type="number" id="machining-time" min="0" step="0.1">
                            </div>
                            <div class="time-input-group">
                                <label for="finishing-time">Finition (min)</label>
                                <input type="number" id="finishing-time" min="0" step="0.1">
                            </div>
                        </div>
                        
                        <div class="total-time">
                            <strong>Temps total estimé : <span id="total-estimated-time">0 min</span></strong>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancel-assignment">Annuler</button>
                        <button class="btn btn-primary" id="save-assignment">Valider Assignation</button>
                    </div>
                </div>
            </div>

            <!-- Modal de configuration des machines -->
            <div class="modal-overlay" id="config-modal" style="display: none;">
                <div class="modal-content modal-large">
                    <div class="modal-header">
                        <h3>⚙️ Configuration des Machines</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="machines-config-grid" id="machines-config-grid">
                            <!-- Configuration détaillée des machines -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancel-config">Annuler</button>
                        <button class="btn btn-primary" id="save-config">Sauvegarder Configuration</button>
                    </div>
                </div>
            </div>
        `;
    },

    /**
     * Initialisation de la page - Version robuste
     */
    init() {
        console.log('🔄 Initialisation de la page import DSTV...');
        
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
            console.error('❌ Erreur initialisation DSTV demo:', error);
            this.renderErrorPage();
        }
    },
    
    /**
     * Initialisation sécurisée
     */
    safeInitialization() {
        // Attendre DOM avec timeout
        const initTimeout = setTimeout(() => {
            console.error('❌ Timeout initialisation DSTV demo');
            this.renderErrorPage();
        }, 5000);
        
        const tryInit = () => {
            try {
                if (!document.getElementById('app')) {
                    setTimeout(tryInit, 50);
                    return;
                }
                
                clearTimeout(initTimeout);
                
                this.initializeMachinesData();
                this.bindEvents();
                this.addDSTVStyles();
                this.setupBackButton();
                
                console.log('✅ Page import DSTV initialisée avec succès');
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
     * Initialisation des données machines robuste
     */
    initializeMachinesData() {
        try {
            this.machinesData = {
                'plasma': {
                    nom: 'Plasma CNC',
                    type: 'Découpe Plasma',
                    icone: '⚡',
                    epaisseurMax: 40,
                    vitesse: 1200, // mm/min
                    precision: 0.5,
                    coutHoraire: 85,
                    disponible: true,
                    charge: 0.3 // 30% de charge
                },
                'laser': {
                    nom: 'Laser Fiber',
                    type: 'Découpe Laser',
                    icone: '🔥',
                    epaisseurMax: 25,
                    vitesse: 2500,
                    precision: 0.1,
                    coutHoraire: 120,
                    disponible: true,
                    charge: 0.6 // 60% de charge
                },
                'percage': {
                    nom: 'Centre Perçage',
                    type: 'Perçage Multi-axes',
                    icone: '🔩',
                    diamMax: 50,
                    vitesse: 800,
                    precision: 0.05,
                    coutHoraire: 95,
                    disponible: true,
                    charge: 0.2 // 20% de charge
                }
            };
            
            console.log('✅ Données machines initialisées');
            
        } catch (error) {
            console.error('❌ Erreur initialisation machines:', error);
            // Données par défaut en cas d'erreur
            this.machinesData = {};
        }
    },

    /**
     * Liaison d'événements robuste avec vérification DOM
     */
    bindEvents() {
        console.log('🔗 Liaison des événements DSTV...');
        
        try {
            // Attendre que le DOM soit complètement prêt
            const bindWithRetry = (attempt = 0) => {
                if (attempt > 10) {
                    console.error('❌ Impossible de lier les événements après 10 tentatives');
                    return;
                }
                
                // Vérifier présence des éléments principaux
                const fileInput = document.getElementById('file-input');
                const dropZone = document.getElementById('file-drop-zone');
                
                if (!fileInput || !dropZone) {
                    console.log(`🔄 Tentative ${attempt + 1}/10 - Éléments DOM non prêts`);
                    setTimeout(() => bindWithRetry(attempt + 1), 100);
                    return;
                }
                
                // Lier les événements principaux
                this.bindFileEvents();
                this.bindDemoButtons();
                this.bindStepButtons();
                this.bindModalEvents();
                this.setupDragDrop();
                
                console.log('✅ Événements DSTV liés avec succès');
            };
            
            bindWithRetry();
            
        } catch (error) {
            console.error('❌ Erreur liaison événements DSTV:', error);
        }
    },

    /**
     * Événements de fichiers robustes
     */
    bindFileEvents() {
        try {
            const fileInput = document.getElementById('file-input');
            if (!fileInput) return;
            
            // Nettoyer les anciens listeners
            const newFileInput = fileInput.cloneNode(true);
            fileInput.parentNode.replaceChild(newFileInput, fileInput);
            
            // Ajouter le nouveau listener
            newFileInput.addEventListener('change', (e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                    this.handleFileImport(files);
                }
                // Reset pour permettre re-sélection du même fichier
                e.target.value = '';
            });
            
            console.log('✅ Événements fichiers liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison événements fichiers:', error);
        }
    },

    /**
     * Boutons démo avec délégation d'événements
     */
    bindDemoButtons() {
        try {
            // Utiliser la délégation d'événements pour robustesse
            document.addEventListener('click', (e) => {
                const demoBtn = e.target.closest('[data-demo]');
                if (!demoBtn || !demoBtn.closest('#import-step')) return;
                
                e.preventDefault();
                e.stopPropagation();
                
                const demoType = demoBtn.dataset.demo;
                console.log(`🎯 Bouton démo cliqué: ${demoType}`);
                
                // Animation du bouton
                demoBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    demoBtn.style.transform = '';
                }, 150);
                
                // Charger les données démo
                this.loadDemoData(demoType);
            });
            
            console.log('✅ Boutons démo liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison boutons démo:', error);
        }
    },

    /**
     * Boutons d'étapes avec gestion d'erreurs
     */
    bindStepButtons() {
        try {
            // Auto-assignation
            document.addEventListener('click', (e) => {
                if (e.target.id === 'auto-assign') {
                    e.preventDefault();
                    console.log('🤖 Auto-assignation déclenchée');
                    this.performAutoAssignments();
                }
                
                if (e.target.id === 'edit-machines') {
                    e.preventDefault();
                    console.log('⚙️ Configuration machines');
                    this.showMachinesConfigModal();
                }
                
                if (e.target.id === 'generate-export') {
                    e.preventDefault();
                    console.log('📊 Génération export');
                    this.advanceToStep(4);
                }
            });
            
            console.log('✅ Boutons d\'étapes liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison boutons étapes:', error);
        }
    },

    /**
     * Drag & Drop robuste avec gestion d'erreurs
     */
    setupDragDrop() {
        try {
            const dropZone = document.getElementById('file-drop-zone');
            if (!dropZone) {
                console.warn('⚠️ Zone de drop non trouvée');
                return;
            }
            
            // Événements de base pour prévenir le comportement par défaut
            const preventDefaults = (e) => {
                e.preventDefault();
                e.stopPropagation();
            };
            
            // Liste complète des événements à gérer
            const dragEvents = ['dragenter', 'dragover', 'dragleave', 'drop'];
            
            // Lier les événements de prévention
            dragEvents.forEach(eventName => {
                dropZone.addEventListener(eventName, preventDefaults, false);
            });
            
            // Gestion visuelle du drag
            ['dragenter', 'dragover'].forEach(eventName => {
                dropZone.addEventListener(eventName, () => {
                    dropZone.classList.add('dragover');
                }, false);
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, () => {
                    dropZone.classList.remove('dragover');
                }, false);
            });
            
            // Gestion du drop avec validation
            dropZone.addEventListener('drop', (e) => {
                try {
                    const files = e.dataTransfer.files;
                    if (files && files.length > 0) {
                        console.log(`📁 ${files.length} fichier(s) déposé(s)`);
                        this.handleFileImport(files);
                    } else {
                        console.warn('⚠️ Aucun fichier dans le drop');
                    }
                } catch (error) {
                    console.error('❌ Erreur traitement drop:', error);
                    this.showImportError('Erreur lors du dépose des fichiers');
                }
            }, false);
            
            console.log('✅ Drag & Drop configuré');
            
        } catch (error) {
            console.error('❌ Erreur setup drag & drop:', error);
        }
    },

    /**
     * Gestion des modales robuste
     */
    bindModalEvents() {
        try {
            // Utiliser la délégation pour toutes les modales
            document.addEventListener('click', (e) => {
                // Boutons de fermeture des modales
                if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
                    e.preventDefault();
                    this.closeAllModals();
                    return;
                }
                
                // Clic sur l'overlay pour fermer
                if (e.target.classList.contains('modal-overlay')) {
                    e.preventDefault();
                    this.closeAllModals();
                    return;
                }
                
                // Boutons d'action spécifiques
                this.handleModalActionButtons(e);
            });
            
            // Échappement pour fermer les modales
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeAllModals();
                }
            });
            
            console.log('✅ Événements modales liés');
            
        } catch (error) {
            console.error('❌ Erreur liaison modales:', error);
        }
    },

    /**
     * Gestion des boutons d'action des modales
     */
    handleModalActionButtons(e) {
        try {
            const target = e.target;
            
            // Bouton d'assignation
            if (target.id === 'save-assignment') {
                e.preventDefault();
                this.validatePieceAssignment();
                return;
            }
            
            // Bouton annulation assignation
            if (target.id === 'cancel-assignment') {
                e.preventDefault();
                this.closeAllModals();
                return;
            }
            
            // Bouton sauvegarde configuration
            if (target.id === 'save-config') {
                e.preventDefault();
                this.saveMachinesConfig();
                return;
            }
            
            // Bouton annulation configuration
            if (target.id === 'cancel-config') {
                e.preventDefault();
                this.closeAllModals();
                return;
            }
            
            // Boutons d'assignation de pièces
            const assignBtn = target.closest('.btn-assign');
            if (assignBtn) {
                e.preventDefault();
                const pieceId = assignBtn.dataset.pieceId;
                if (pieceId) {
                    console.log(`🔧 Assignation pièce: ${pieceId}`);
                    this.showAssignmentModal(pieceId);
                }
                return;
            }
            
            // Inputs de temps
            if (target.matches('#prep-time, #machining-time, #finishing-time')) {
                this.updateTotalTime();
            }
            
        } catch (error) {
            console.error('❌ Erreur gestion boutons modales:', error);
        }
    },

    /**
     * Charger les données démo
     */
    loadDemoData(type) {
        try {
            let pieces = [];
            
            switch(type) {
                case 'profils':
                    pieces = [...this.exampleDSTVData.profils];
                    break;
                case 'plaques':
                    pieces = [...this.exampleDSTVData.plaques];
                    break;
                case 'mixte':
                    pieces = [...this.exampleDSTVData.profils, ...this.exampleDSTVData.plaques];
                    break;
            }

            this.currentPieces = pieces.map(piece => ({
                ...piece,
                machineAssignee: null,
                tempsEstime: null,
                statut: 'nouveau',
                fichierSource: `demo_${type}.dstv`
            }));

            this.advanceToStep(2);
            this.renderPiecesAnalysis();
            
            console.log(`✅ ${pieces.length} pièces démo chargées (${type})`);
            
        } catch (error) {
            console.error('❌ Erreur chargement données démo:', error);
            this.showImportError('Erreur lors du chargement des données de démonstration');
        }
    },

    /**
     * Import de fichiers DSTV amélioré
     */
    handleFileImport(files) {
        if (!files || files.length === 0) {
            this.showImportError('Aucun fichier sélectionné');
            return;
        }
        
        console.log('📁 Import de fichiers DSTV:', Array.from(files).map(f => f.name));
        
        try {
            // Validation des fichiers
            const validFiles = Array.from(files).filter(file => {
                const extension = file.name.toLowerCase().split('.').pop();
                return ['nc1', 'nc2', 'dstv', 'xml'].includes(extension);
            });
            
            if (validFiles.length === 0) {
                this.showImportError('Aucun fichier DSTV valide trouvé (.nc1, .nc2, .dstv, .xml)');
                return;
            }
            
            // Simulation de traitement
            this.processImportedFiles(validFiles);
            
        } catch (error) {
            console.error('❌ Erreur import fichiers:', error);
            this.showImportError('Erreur lors de l\'import des fichiers');
        }
    },

    /**
     * Traitement des fichiers importés
     */
    processImportedFiles(files) {
        try {
            // Simulation d'analyse des fichiers DSTV
            const pieces = [];
            
            files.forEach((file, index) => {
                // Simulation de parsing DSTV
                const piecesFromFile = this.simulateDSTVParsing(file, index);
                pieces.push(...piecesFromFile);
            });
            
            this.currentPieces = pieces.map(piece => ({
                ...piece,
                machineAssignee: null,
                tempsEstime: null,
                statut: 'nouveau',
                fichierSource: piece.fichier
            }));
            
            console.log(`✅ ${pieces.length} pièces extraites des fichiers DSTV`);
            
            // Avancer vers l'étape d'analyse
            this.advanceToStep(2);
            this.renderPiecesAnalysis();
            
        } catch (error) {
            console.error('❌ Erreur traitement fichiers:', error);
            this.showImportError('Erreur lors du traitement des fichiers DSTV');
        }
    },

    /**
     * Simulation parsing DSTV améliorée
     */
    simulateDSTVParsing(file, fileIndex) {
        const pieces = [];
        const fileName = file.name.replace(/\.[^/.]+$/, "");
        
        // Simulation basée sur le nom/taille du fichier
        const pieceCount = Math.floor(Math.random() * 8) + 3; // 3-10 pièces par fichier
        
        for (let i = 0; i < pieceCount; i++) {
            const pieceTypes = ['Profile', 'Plaque', 'Gousset', 'Raidisseur'];
            const materials = ['S235', 'S275', 'S355'];
            const epaisseurs = [8, 10, 12, 15, 20, 25];
            
            pieces.push({
                id: `${fileName}_P${i + 1}`,
                nom: `${fileName}_Piece_${i + 1}`,
                type: pieceTypes[Math.floor(Math.random() * pieceTypes.length)],
                materiau: materials[Math.floor(Math.random() * materials.length)],
                epaisseur: epaisseurs[Math.floor(Math.random() * epaisseurs.length)],
                longueur: Math.floor(Math.random() * 3000) + 500,
                largeur: Math.floor(Math.random() * 500) + 100,
                surface: 0, // Calculé après
                perimetreCoupe: Math.floor(Math.random() * 2000) + 200,
                nbPerçages: Math.floor(Math.random() * 20),
                fichier: file.name,
                complexite: Math.floor(Math.random() * 3) + 1 // 1-3
            });
        }
        
        // Calculer la surface
        pieces.forEach(piece => {
            piece.surface = Math.round(piece.longueur * piece.largeur / 1000000 * 100) / 100; // m²
        });
        
        return pieces;
    },

    /**
     * Rendu de l'analyse des pièces
     */
    renderPiecesAnalysis() {
        try {
            const analysisStep = document.getElementById('analysis-step');
            if (!analysisStep) return;
            
            // Résumé de l'analyse
            const summary = document.getElementById('analysis-summary');
            if (summary) {
                const totalPieces = this.currentPieces.length;
                const profiles = this.currentPieces.filter(p => p.type === 'Profile').length;
                const plaques = this.currentPieces.filter(p => p.type === 'Plaque').length;
                const totalSurface = this.currentPieces.reduce((sum, p) => sum + p.surface, 0);
                
                summary.innerHTML = `
                    <div class="analysis-stats">
                        <div class="stat-item">
                            <span class="stat-label">Total pièces</span>
                            <span class="stat-value">${totalPieces}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Profils</span>
                            <span class="stat-value">${profiles}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Plaques</span>
                            <span class="stat-value">${plaques}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Surface totale</span>
                            <span class="stat-value">${totalSurface.toFixed(2)} m²</span>
                        </div>
                    </div>
                `;
            }
            
            // Grille des pièces
            const grid = document.getElementById('pieces-grid');
            if (grid) {
                grid.innerHTML = this.currentPieces.map(piece => `
                    <div class="piece-card ${piece.statut === 'assignee' ? 'assigned' : ''}" data-piece-id="${piece.id}">
                        <div class="piece-header">
                            <div class="piece-name">${piece.nom}</div>
                            <div class="piece-type">${piece.type}</div>
                        </div>
                        
                        <div class="piece-specs">
                            <div class="spec-item">
                                <span class="spec-label">Matériau:</span>
                                <span class="spec-value">${piece.materiau}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Épaisseur:</span>
                                <span class="spec-value">${piece.epaisseur}mm</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Dimensions:</span>
                                <span class="spec-value">${piece.longueur}×${piece.largeur}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Surface:</span>
                                <span class="spec-value">${piece.surface.toFixed(2)} m²</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Perçages:</span>
                                <span class="spec-value">${piece.nbPerçages}</span>
                            </div>
                            <div class="spec-item">
                                <span class="spec-label">Complexité:</span>
                                <span class="spec-value">${'★'.repeat(piece.complexite)}</span>
                            </div>
                        </div>
                        
                        <div class="piece-actions">
                            <button class="btn btn-sm btn-primary btn-assign" data-piece-id="${piece.id}">
                                🔧 Assigner Machine
                            </button>
                        </div>
                        
                        ${piece.machineAssignee ? `
                            <div class="piece-assignment">
                                <strong>Assignée à: ${this.machinesData[piece.machineAssignee]?.nom || piece.machineAssignee}</strong>
                                <div>Temps: ${piece.tempsEstime?.total.toFixed(1) || 0} min</div>
                            </div>
                        ` : ''}
                    </div>
                `).join('');
            }
            
            analysisStep.style.display = 'block';
            
        } catch (error) {
            console.error('❌ Erreur rendu analyse pièces:', error);
        }
    },

    /**
     * Assignation automatique des machines
     */
    performAutoAssignments() {
        try {
            console.log('🤖 Démarrage assignation automatique...');
            
            this.currentPieces.forEach(piece => {
                // Algorithme simple d'assignation basé sur les caractéristiques
                let bestMachine = null;
                let bestScore = 0;
                
                Object.keys(this.machinesData).forEach(machineId => {
                    const machine = this.machinesData[machineId];
                    if (!machine.disponible) return;
                    
                    let score = 0;
                    
                    // Score basé sur l'épaisseur
                    if (piece.epaisseur <= machine.epaisseurMax) {
                        score += 10;
                        // Bonus si proche de la capacité max
                        score += (piece.epaisseur / machine.epaisseurMax) * 5;
                    }
                    
                    // Score basé sur le type de pièce
                    if (piece.type === 'Profile' && machineId === 'plasma') score += 5;
                    if (piece.type === 'Plaque' && machineId === 'laser') score += 5;
                    if (piece.nbPerçages > 5 && machineId === 'percage') score += 8;
                    
                    // Pénalité pour charge élevée
                    score -= machine.charge * 10;
                    
                    if (score > bestScore) {
                        bestScore = score;
                        bestMachine = machineId;
                    }
                });
                
                if (bestMachine) {
                    const temps = this.calculateMachiningTime(piece, this.machinesData[bestMachine]);
                    
                    piece.machineAssignee = bestMachine;
                    piece.tempsEstime = temps;
                    piece.statut = 'assignee';
                    piece.coutEstime = Math.round(temps.total * this.machinesData[bestMachine].coutHoraire / 60);
                    
                    // Mettre à jour la charge de la machine
                    this.machinesData[bestMachine].charge = Math.min(1, this.machinesData[bestMachine].charge + 0.1);
                }
            });
            
            // Mettre à jour l'affichage
            this.renderPiecesAnalysis();
            this.showSuccessMessage('Assignation automatique terminée !');
            
            // Avancer vers l'étape suivante
            setTimeout(() => {
                this.advanceToStep(3);
                this.renderMachinesOverview();
            }, 1500);
            
        } catch (error) {
            console.error('❌ Erreur assignation automatique:', error);
            this.showImportError('Erreur lors de l\'assignation automatique');
        }
    },

    /**
     * Calcul des temps d'usinage
     */
    calculateMachiningTime(piece, machine) {
        try {
            // Algorithme de calcul basé sur les caractéristiques
            const baseTime = piece.surface * 2; // 2 min/m² de base
            const complexityFactor = piece.complexite * 0.5;
            const thicknessFactor = piece.epaisseur / 10;
            const drillingTime = piece.nbPerçages * 0.5; // 30s par perçage
            
            const machiningTime = baseTime * (1 + complexityFactor + thicknessFactor);
            const preparationTime = 3 + (piece.complexite * 2); // 3-9 min selon complexité
            const finishingTime = 2 + (piece.surface * 0.5); // 2+ min selon surface
            
            return {
                preparation: preparationTime,
                usinage: machiningTime,
                finition: finishingTime,
                total: preparationTime + machiningTime + finishingTime
            };
            
        } catch (error) {
            console.error('❌ Erreur calcul temps:', error);
            return {
                preparation: 5,
                usinage: 10,
                finition: 3,
                total: 18
            };
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
     * Avancer à l'étape suivante
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
            
            // Masquer toutes les zones
            ['import-step', 'analysis-step', 'machines-step', 'export-step'].forEach(id => {
                const element = document.getElementById(id);
                if (element) element.style.display = 'none';
            });
            
            // Afficher la zone correspondante
            const stepIds = ['import-step', 'analysis-step', 'machines-step', 'export-step'];
            const targetStep = document.getElementById(stepIds[stepNumber - 1]);
            if (targetStep) {
                targetStep.style.display = 'block';
            }
            
            console.log(`✅ Avancé à l'étape ${stepNumber}`);
            
        } catch (error) {
            console.error(`❌ Erreur avancement étape ${stepNumber}:`, error);
        }
    },

    /**
     * Affichage de la vue d'ensemble des machines
     */
    renderMachinesOverview() {
        try {
            const overview = document.getElementById('machines-overview');
            if (!overview) return;
            
            overview.innerHTML = Object.keys(this.machinesData).map(machineId => {
                const machine = this.machinesData[machineId];
                const assignedPieces = this.currentPieces.filter(p => p.machineAssignee === machineId);
                const totalTime = assignedPieces.reduce((sum, p) => sum + (p.tempsEstime?.total || 0), 0);
                const totalCost = assignedPieces.reduce((sum, p) => sum + (p.coutEstime || 0), 0);
                
                const chargeClass = machine.charge < 0.3 ? 'charge-faible' : 
                                   machine.charge < 0.6 ? 'charge-moyenne' : 
                                   machine.charge < 0.8 ? 'charge-elevee' : 'charge-critique';
                
                return `
                    <div class="machine-card">
                        <div class="machine-header">
                            <div class="machine-icon">${machine.icone}</div>
                            <div>
                                <div class="machine-name">${machine.nom}</div>
                                <div class="machine-type">${machine.type}</div>
                            </div>
                        </div>
                        
                        <div class="machine-stats">
                            <div class="stat-item">
                                <span class="stat-label">Pièces assignées:</span>
                                <span class="stat-value">${assignedPieces.length}</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Temps total:</span>
                                <span class="stat-value">${totalTime.toFixed(1)} min</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Coût estimé:</span>
                                <span class="stat-value">${totalCost}€</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-label">Charge:</span>
                                <span class="stat-value ${chargeClass}">${Math.round(machine.charge * 100)}%</span>
                            </div>
                        </div>
                        
                        <div class="charge-indicator">
                            <div class="charge-fill ${chargeClass}" style="width: ${machine.charge * 100}%"></div>
                        </div>
                        
                        <div class="pieces-list">
                            <h5>Pièces assignées:</h5>
                            <ul>
                                ${assignedPieces.map(piece => `
                                    <li>${piece.nom} - ${piece.tempsEstime?.total.toFixed(1) || 0} min</li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }).join('');
            
        } catch (error) {
            console.error('❌ Erreur rendu machines overview:', error);
        }
    },

    /**
     * Messages d'erreur et succès
     */
    showImportError(message) {
        this.showNotification(`❌ ${message}`, 'error', 4000);
    },

    showSuccessMessage(message) {
        this.showNotification(`✅ ${message}`, 'success', 2000);
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
     * Affichage message de bienvenue client
     */
    showClientWelcome() {
        try {
            const session = window.OweoClientAccess?.getSessionInfo();
            if (session) {
                this.showSuccessMessage('Bienvenue dans la démonstration Import DSTV !');
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
                            Cette démonstration avancée d'import DSTV est exclusivement réservée à nos clients.
                            Contactez votre référent Oweo pour obtenir un code d'accès.
                        </p>
                        <div class="access-denied-actions">
                            <button class="btn btn-primary" onclick="window.OweoClientAccess?.showAuthModal('import-dstv-demo')">
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
     * Gestion des modales - Méthodes utilitaires
     */
    closeAllModals() {
        try {
            const modals = document.querySelectorAll('.modal-overlay');
            modals.forEach(modal => {
                modal.style.opacity = '0';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            });
            
            // Nettoyer les variables de modal active
            this.currentModal = null;
            this.selectedMachine = null;
            
            console.log('✅ Modales fermées');
            
        } catch (error) {
            console.error('❌ Erreur fermeture modales:', error);
        }
    },

    showModal(modalId) {
        try {
            const modal = document.getElementById(modalId);
            if (!modal) {
                console.error(`❌ Modal ${modalId} non trouvée`);
                return;
            }
            
            // Fermer les autres modales d'abord
            this.closeAllModals();
            
            // Afficher la modal avec animation
            modal.style.display = 'flex';
            modal.style.opacity = '0';
            
            requestAnimationFrame(() => {
                modal.style.opacity = '1';
            });
            
            this.currentModal = modalId;
            console.log(`✅ Modal ${modalId} affichée`);
            
        } catch (error) {
            console.error(`❌ Erreur affichage modal ${modalId}:`, error);
        }
    },

    /**
     * Validation d'assignation de pièce améliorée
     */
    validatePieceAssignment() {
        try {
            if (!this.selectedMachine) {
                this.showImportError('Veuillez sélectionner une machine');
                return;
            }
            
            if (!this.currentPieceId) {
                this.showImportError('Pièce non identifiée');
                return;
            }
            
            // Récupérer les temps
            const prepTime = parseFloat(document.getElementById('prep-time')?.value) || 0;
            const machiningTime = parseFloat(document.getElementById('machining-time')?.value) || 0;
            const finishingTime = parseFloat(document.getElementById('finishing-time')?.value) || 0;
            
            if (machiningTime <= 0) {
                this.showImportError('Temps d\'usinage requis');
                return;
            }
            
            // Sauvegarder l'assignation
            this.saveAssignment(this.currentPieceId, this.selectedMachine, {
                preparation: prepTime,
                usinage: machiningTime,
                finition: finishingTime,
                total: prepTime + machiningTime + finishingTime
            });
            
            this.closeAllModals();
            
        } catch (error) {
            console.error('❌ Erreur validation assignation:', error);
            this.showImportError('Erreur lors de la validation');
        }
    },

    /**
     * Sauvegarde d'assignation robuste
     */
    saveAssignment(pieceId, machineId, timeData) {
        try {
            const piece = this.currentPieces.find(p => p.id === pieceId);
            if (!piece) {
                throw new Error(`Pièce ${pieceId} non trouvée`);
            }
            
            piece.machineAssignee = machineId;
            piece.tempsEstime = timeData;
            piece.statut = 'assignee';
            
            // Calculer le coût
            const machine = this.machinesData[machineId];
            if (machine) {
                piece.coutEstime = Math.round(timeData.total * machine.coutHoraire / 60);
            }
            
            console.log(`✅ Assignation sauvegardée: ${pieceId} -> ${machineId}`);
            
            // Mettre à jour l'affichage
            this.renderPiecesAnalysis();
            
            // Notification
            this.showSuccessMessage(`Pièce ${piece.nom} assignée à ${machine?.nom || machineId}`);
            
        } catch (error) {
            console.error('❌ Erreur sauvegarde assignation:', error);
            this.showImportError('Erreur lors de la sauvegarde');
        }
    },

    updateTotalTime() {
        try {
            const prep = parseFloat(document.getElementById('prep-time')?.value) || 0;
            const machining = parseFloat(document.getElementById('machining-time')?.value) || 0;
            const finishing = parseFloat(document.getElementById('finishing-time')?.value) || 0;
            const total = prep + machining + finishing;
            
            const totalDisplay = document.getElementById('total-estimated-time');
            if (totalDisplay) {
                totalDisplay.textContent = `${total.toFixed(1)} min`;
            }
        } catch (error) {
            console.error('❌ Erreur mise à jour temps total:', error);
        }
    },

    /**
     * Ajout des styles CSS
     */
    addDSTVStyles() {
        if (document.getElementById('dstv-demo-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'dstv-demo-styles';
        styles.textContent = `
            /* Styles de base pour la démo DSTV - Version complète dans le fichier CSS dédié */
            .access-denied, .error-page {
                min-height: 70vh;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }
            
            .access-denied-content, .error-content {
                max-width: 500px;
                margin: 0 auto;
                padding: 2rem;
            }
            
            .access-denied-icon, .error-icon {
                font-size: 4rem;
                margin-bottom: 1rem;
                color: var(--accent-color, #ff6b35);
            }
            
            .access-denied-actions, .error-actions {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-top: 2rem;
                flex-wrap: wrap;
            }
        `;
        
        document.head.appendChild(styles);
    }
};

console.log('🔄 DSTV Demo page loaded with complete corrections');