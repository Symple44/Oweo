// js/pages/import-dstv-demo.js - Démonstration Import DSTV et Assignation Machines

window.pages = window.pages || {};

window.pages['import-dstv-demo'] = {
    render() {
        return `
            <!-- Header de la page -->
            <section class="section">
                <div class="container">
                    <button class="btn-back">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title">🔄 Import DSTV & Assignation Automatique aux Machines</h1>
                        <p class="section-subtitle">
                            Démonstration d'import de fichiers DSTV avec assignation intelligente des pièces aux machines de production
                        </p>
                    </div>
                    
                    <!-- Barre d'état du processus -->
                    <div class="process-steps">
                        <div class="step active" data-step="1">
                            <div class="step-number">1</div>
                            <div class="step-label">Import DSTV</div>
                        </div>
                        <div class="step" data-step="2">
                            <div class="step-number">2</div>
                            <div class="step-label">Analyse Pièces</div>
                        </div>
                        <div class="step" data-step="3">
                            <div class="step-number">3</div>
                            <div class="step-label">Assignation Auto</div>
                        </div>
                        <div class="step" data-step="4">
                            <div class="step-number">4</div>
                            <div class="step-label">Révision</div>
                        </div>
                        <div class="step" data-step="5">
                            <div class="step-number">5</div>
                            <div class="step-label">Export ERP</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Interface principale -->
            <section class="dstv-interface">
                <div class="container">
                    
                    <!-- Zone d'import -->
                    <div class="import-zone" id="import-zone">
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
                                        🏗️ Profils Portique (15 pièces)
                                    </button>
                                    <button class="btn btn-outline btn-sm" data-demo="plaques">
                                        🔲 Plaques Assemblage (8 pièces)
                                    </button>
                                    <button class="btn btn-outline btn-sm" data-demo="mixte">
                                        🔧 Projet Complet (32 pièces)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Configuration des machines -->
                    <div class="machines-config" id="machines-config" style="display: none;">
                        <div class="config-header">
                            <h3>⚙️ Configuration des Machines</h3>
                            <button class="btn btn-secondary btn-sm" id="edit-machines">✏️ Modifier</button>
                        </div>
                        
                        <div class="machines-grid" id="machines-grid">
                            <!-- Généré dynamiquement -->
                        </div>
                    </div>

                    <!-- Tableau d'analyse des pièces -->
                    <div class="pieces-analysis" id="pieces-analysis" style="display: none;">
                        <div class="analysis-header">
                            <h3>🔍 Analyse des Pièces Importées</h3>
                            <div class="analysis-controls">
                                <button class="btn btn-secondary btn-sm" id="run-auto-assign">🤖 Assignation Auto</button>
                                <button class="btn btn-primary btn-sm" id="validate-assignments">✅ Valider Tout</button>
                            </div>
                        </div>
                        
                        <div class="pieces-table-container">
                            <table class="pieces-table" id="pieces-table">
                                <thead>
                                    <tr>
                                        <th>Pièce</th>
                                        <th>Type</th>
                                        <th>Dimensions</th>
                                        <th>Matériau</th>
                                        <th>Complexité</th>
                                        <th>Machine Assignée</th>
                                        <th>Temps Estimé</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- Généré dynamiquement -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Récapitulatif par machine -->
                    <div class="machines-summary" id="machines-summary" style="display: none;">
                        <h3>📊 Récapitulatif par Machine</h3>
                        <div class="summary-grid" id="summary-grid">
                            <!-- Généré dynamiquement -->
                        </div>
                    </div>

                    <!-- Zone d'export -->
                    <div class="export-zone" id="export-zone" style="display: none;">
                        <div class="export-header">
                            <h3>📤 Export vers ERP</h3>
                            <p>Générer les ordres de fabrication et planifier la production</p>
                        </div>
                        
                        <div class="export-options">
                            <div class="export-item">
                                <h4>📋 Ordres de Fabrication</h4>
                                <p>Création automatique des OF par machine avec temps et matières</p>
                                <button class="btn btn-primary">Générer les OF</button>
                            </div>
                            
                            <div class="export-item">
                                <h4>📅 Planning Production</h4>
                                <p>Intégration au planning avec gestion des disponibilités</p>
                                <button class="btn btn-primary">Planifier Production</button>
                            </div>
                            
                            <div class="export-item">
                                <h4>📊 Chiffrage Automatique</h4>
                                <p>Mise à jour des temps et coûts dans le devis</p>
                                <button class="btn btn-primary">Mettre à Jour Devis</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Modal de modification d'assignation -->
            <div class="modal" id="assign-modal" style="display: none;">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>🔧 Modifier l'Assignation</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="current-piece-info" id="current-piece-info">
                            <!-- Info de la pièce courante -->
                        </div>
                        
                        <div class="machine-selection">
                            <h4>Machines Compatibles</h4>
                            <div class="machines-list" id="machines-list">
                                <!-- Liste des machines avec temps estimés -->
                            </div>
                        </div>
                        
                        <div class="time-adjustment">
                            <h4>Ajustement Manuel du Temps</h4>
                            <div class="time-inputs">
                                <div class="time-input">
                                    <label>Temps de Préparation (min)</label>
                                    <input type="number" id="prep-time" step="0.5" placeholder="15">
                                </div>
                                <div class="time-input">
                                    <label>Temps d'Usinage (min)</label>
                                    <input type="number" id="machining-time" step="0.1" placeholder="8.5">
                                </div>
                                <div class="time-input">
                                    <label>Temps de Finition (min)</label>
                                    <input type="number" id="finishing-time" step="0.5" placeholder="3">
                                </div>
                            </div>
                            
                            <div class="total-time">
                                <label>Temps Total Estimé:</label>
                                <span id="total-estimated-time">26.5 min</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancel-assign">Annuler</button>
                        <button class="btn btn-primary" id="save-assign">Sauvegarder</button>
                    </div>
                </div>
            </div>

            <!-- Modal de configuration des machines -->
            <div class="modal" id="machines-config-modal" style="display: none;">
                <div class="modal-backdrop"></div>
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

    init() {
        console.log('🔄 Initialisation de la page import DSTV...');
        
        // VÉRIFICATION D'ACCÈS CLIENT OBLIGATOIRE
        if (!this.verifyClientAccess()) {
            this.renderAccessDenied();
            return;
        }
        
        // Attendre que le DOM soit prêt
        setTimeout(() => {
            this.initializeMachinesData();
            this.bindEvents();
            this.addDSTVStyles();
            
            if (typeof window.setupBackButton === 'function') {
                window.setupBackButton();
            }
            
            console.log('✅ Page import DSTV initialisée (accès client vérifié)');
            this.showClientWelcome();
        }, 100);
    },

    /**
     * Vérifier l'accès client
     */
    verifyClientAccess() {
        if (typeof window.OweoClientAccess === 'undefined') {
            console.error('❌ OweoClientAccess not available');
            return false;
        }
        
        return window.OweoClientAccess.hasAccess();
    },

    /**
     * Afficher la page d'accès refusé
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
                        </p>
                        
                        <div class="access-denied-actions">
                            <button class="btn btn-primary btn-large" onclick="OweoClientAccess.showAuthModal()">
                                🔑 Saisir Code d'Accès
                            </button>
                            <button class="btn btn-secondary btn-large" onclick="history.back()">
                                ← Retour
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    showClientWelcome() {
        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(
                `🔄 Démonstration Import DSTV - Assignation Automatique activée !`,
                'success',
                4000
            );
        }
    },

    // Données des machines et leurs paramètres
    machinesData: {
        'oxycoupage': {
            id: 'oxycoupage',
            nom: 'Oxycoupage CNC',
            type: 'découpe',
            icone: '🔥',
            capacites: {
                epaisseurMax: 300,
                longueurMax: 12000,
                largeurMax: 3000,
                materiaux: ['S235', 'S355', 'S420', 'S460']
            },
            temps: {
                preparation: 15, // minutes
                vitesseCoupe: 800, // mm/min pour épaisseur 20mm
                facteurEpaisseur: 0.8, // réduction vitesse par mm d'épaisseur
                finition: 5
            },
            couts: {
                horaire: 65, // €/h
                consommables: 0.15 // €/mm de coupe
            },
            priorite: 3, // 1=max, 5=min
            disponible: true
        },
        'plasma': {
            id: 'plasma',
            nom: 'Plasma HD',
            type: 'découpe',
            icone: '⚡',
            capacites: {
                epaisseurMax: 80,
                longueurMax: 6000,
                largeurMax: 2000,
                materiaux: ['S235', 'S355', 'Inox', 'Alu']
            },
            temps: {
                preparation: 10,
                vitesseCoupe: 2000, // mm/min
                facteurEpaisseur: 0.9,
                finition: 3
            },
            couts: {
                horaire: 85,
                consommables: 0.08
            },
            priorite: 2,
            disponible: true
        },
        'laser': {
            id: 'laser',
            nom: 'Laser Fibre 6kW',
            type: 'découpe',
            icone: '🔦',
            capacites: {
                epaisseurMax: 25,
                longueurMax: 4000,
                largeurMax: 2000,
                materiaux: ['S235', 'S355', 'Inox', 'Alu']
            },
            temps: {
                preparation: 8,
                vitesseCoupe: 3500, // mm/min pour 8mm
                facteurEpaisseur: 0.7,
                finition: 2
            },
            couts: {
                horaire: 120,
                consommables: 0.05
            },
            priorite: 1,
            disponible: true
        },
        'poinconnage': {
            id: 'poinconnage',
            nom: 'Poinçonneuse CNC',
            type: 'perçage',
            icone: '🔩',
            capacites: {
                epaisseurMax: 40,
                longueurMax: 15000,
                largeurMax: 1500,
                materiaux: ['S235', 'S355', 'S420']
            },
            temps: {
                preparation: 12,
                vitessePercage: 60, // trous/min
                facteurDiametre: 1.2,
                finition: 5
            },
            couts: {
                horaire: 75,
                consommables: 0.02
            },
            priorite: 2,
            disponible: true
        },
        'sciage': {
            id: 'sciage',
            nom: 'Scie à Ruban Automatique',
            type: 'tronçonnage',
            icone: '🪚',
            capacites: {
                diametreMax: 500,
                longueurMax: 18000,
                materiaux: ['S235', 'S355', 'S420', 'S460', 'Inox']
            },
            temps: {
                preparation: 5,
                vitesseCoupe: 80, // mm²/min
                facteurMateriau: 1.0,
                finition: 2
            },
            couts: {
                horaire: 45,
                consommables: 0.01
            },
            priorite: 4,
            disponible: true
        }
    },

    // Données d'exemple DSTV
    exampleDSTVData: {
        'profils': [
            {
                id: 'P001',
                nom: 'Poteau IPE240-01',
                type: 'profil',
                section: 'IPE240',
                longueur: 7000,
                materiau: 'S355',
                epaisseur: 9.8,
                perimetreCoupe: 480,
                nbTrous: 12,
                complexite: 'moyenne'
            },
            {
                id: 'P002',
                nom: 'Traverse IPE360-01',
                type: 'profil',
                section: 'IPE360',
                longueur: 12000,
                materiau: 'S355',
                epaisseur: 12.7,
                perimetreCoupe: 720,
                nbTrous: 24,
                complexite: 'élevée'
            },
            {
                id: 'P003',
                nom: 'Panne IPE200-01',
                type: 'profil',
                section: 'IPE200',
                longueur: 6000,
                materiau: 'S235',
                epaisseur: 8.5,
                perimetreCoupe: 400,
                nbTrous: 8,
                complexite: 'simple'
            },
            {
                id: 'P004',
                nom: 'Contrevent L100x10',
                type: 'profil',
                section: 'L100x10',
                longueur: 4500,
                materiau: 'S235',
                epaisseur: 10,
                perimetreCoupe: 200,
                nbTrous: 4,
                complexite: 'simple'
            },
            {
                id: 'P005',
                nom: 'Jarret IPE270-01',
                type: 'profil',
                section: 'IPE270',
                longueur: 3200,
                materiau: 'S355',
                epaisseur: 10.2,
                perimetreCoupe: 540,
                nbTrous: 16,
                complexite: 'élevée'
            }
        ],
        'plaques': [
            {
                id: 'PL001',
                nom: 'Platine Poteau 400x400',
                type: 'plaque',
                longueur: 400,
                largeur: 400,
                epaisseur: 20,
                materiau: 'S355',
                perimetreCoupe: 1600,
                nbTrous: 8,
                complexite: 'moyenne'
            },
            {
                id: 'PL002',
                nom: 'Gousset Assemblage',
                type: 'plaque',
                longueur: 350,
                largeur: 250,
                epaisseur: 15,
                materiau: 'S235',
                perimetreCoupe: 1200,
                nbTrous: 6,
                complexite: 'élevée'
            },
            {
                id: 'PL003',
                nom: 'Raidisseur 300x150',
                type: 'plaque',
                longueur: 300,
                largeur: 150,
                epaisseur: 8,
                materiau: 'S235',
                perimetreCoupe: 900,
                nbTrous: 4,
                complexite: 'simple'
            }
        ]
    },

    currentPieces: [],
    currentStep: 1,

    initializeMachinesData() {
        this.renderMachinesConfig();
    },

    bindEvents() {
        // Import de fichiers
        document.getElementById('file-input')?.addEventListener('change', (e) => {
            this.handleFileImport(e.target.files);
        });

        // Démo buttons
        document.querySelectorAll('[data-demo]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const demoType = e.target.dataset.demo;
                this.loadDemoData(demoType);
            });
        });

        // Assignation automatique
        document.getElementById('run-auto-assign')?.addEventListener('click', () => {
            this.runAutoAssignment();
        });

        // Validation
        document.getElementById('validate-assignments')?.addEventListener('click', () => {
            this.validateAssignments();
        });

        // Configuration machines
        document.getElementById('edit-machines')?.addEventListener('click', () => {
            this.showMachinesConfigModal();
        });

        // Modales
        this.bindModalEvents();

        // Drag & Drop
        this.setupDragDrop();
    },

    setupDragDrop() {
        const dropZone = document.getElementById('file-drop-zone');
        if (!dropZone) return;

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, this.preventDefaults, false);
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => dropZone.classList.add('dragover'), false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropZone.addEventListener(eventName, () => dropZone.classList.remove('dragover'), false);
        });

        dropZone.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            this.handleFileImport(files);
        }, false);
    },

    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    },

    loadDemoData(type) {
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
            statut: 'nouveau'
        }));

        this.advanceToStep(2);
        this.renderPiecesAnalysis();
    },

    handleFileImport(files) {
        // Simulation de l'import de fichiers DSTV
        console.log('📁 Importing files:', Array.from(files).map(f => f.name));
        
        // Pour la démo, on simule l'analyse de fichiers
        setTimeout(() => {
            this.loadDemoData('mixte'); // Charger données d'exemple
            
            if (window.OweoUtils && window.OweoUtils.notification) {
                window.OweoUtils.notification.show(
                    `✅ ${files.length} fichier(s) DSTV importé(s) avec succès`,
                    'success'
                );
            }
        }, 1500);
    },

    advanceToStep(step) {
        this.currentStep = step;
        
        // Mise à jour visuelle des étapes
        document.querySelectorAll('.step').forEach(s => {
            const stepNum = parseInt(s.dataset.step);
            s.classList.toggle('active', stepNum === step);
            s.classList.toggle('completed', stepNum < step);
        });

        // Affichage des sections correspondantes
        this.updateVisibleSections();
    },

    updateVisibleSections() {
        const sections = {
            1: ['import-zone'],
            2: ['machines-config', 'pieces-analysis'],
            3: ['machines-config', 'pieces-analysis'],
            4: ['machines-config', 'pieces-analysis', 'machines-summary'],
            5: ['machines-config', 'pieces-analysis', 'machines-summary', 'export-zone']
        };

        // Masquer toutes les sections d'abord
        ['import-zone', 'machines-config', 'pieces-analysis', 'machines-summary', 'export-zone'].forEach(id => {
            const element = document.getElementById(id);
            if (element) element.style.display = 'none';
        });

        // Afficher les sections pour l'étape courante
        const visibleSections = sections[this.currentStep] || [];
        visibleSections.forEach(id => {
            const element = document.getElementById(id);
            if (element) element.style.display = 'block';
        });
    },

    renderMachinesConfig() {
        const container = document.getElementById('machines-grid');
        if (!container) return;

        container.innerHTML = Object.values(this.machinesData).map(machine => `
            <div class="machine-card ${machine.disponible ? 'available' : 'unavailable'}">
                <div class="machine-header">
                    <span class="machine-icon">${machine.icone}</span>
                    <h4>${machine.nom}</h4>
                    <span class="machine-status ${machine.disponible ? 'online' : 'offline'}">
                        ${machine.disponible ? '🟢' : '🔴'}
                    </span>
                </div>
                <div class="machine-specs">
                    <div class="spec-item">
                        <label>Type:</label>
                        <span>${machine.type}</span>
                    </div>
                    <div class="spec-item">
                        <label>Coût/h:</label>
                        <span>${machine.couts.horaire}€</span>
                    </div>
                    <div class="spec-item">
                        <label>Priorité:</label>
                        <span class="priority-${machine.priorite}">${machine.priorite}/5</span>
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderPiecesAnalysis() {
        const tbody = document.querySelector('#pieces-table tbody');
        if (!tbody) return;

        tbody.innerHTML = this.currentPieces.map((piece, index) => `
            <tr class="piece-row ${piece.statut}" data-piece-index="${index}">
                <td class="piece-name">
                    <strong>${piece.nom}</strong>
                    <small>${piece.id}</small>
                </td>
                <td class="piece-type">
                    <span class="type-badge type-${piece.type}">${piece.type}</span>
                </td>
                <td class="piece-dimensions">
                    ${this.formatDimensions(piece)}
                </td>
                <td class="piece-material">
                    <span class="material-badge">${piece.materiau}</span>
                    <small>${piece.epaisseur}mm</small>
                </td>
                <td class="piece-complexity">
                    <span class="complexity-${piece.complexite}">${piece.complexite}</span>
                </td>
                <td class="piece-machine">
                    ${piece.machineAssignee ? 
                        `<span class="machine-assigned">${this.machinesData[piece.machineAssignee]?.icone} ${this.machinesData[piece.machineAssignee]?.nom}</span>` :
                        '<span class="machine-pending">⏳ En attente</span>'
                    }
                </td>
                <td class="piece-time">
                    ${piece.tempsEstime ? 
                        `<span class="time-estimated">${piece.tempsEstime.total.toFixed(1)} min</span>` :
                        '<span class="time-pending">-</span>'
                    }
                </td>
                <td class="piece-actions">
                    <button class="btn btn-outline btn-xs" onclick="dstvDemo.editAssignment(${index})">
                        ✏️ Modifier
                    </button>
                </td>
            </tr>
        `).join('');
    },

    formatDimensions(piece) {
        if (piece.type === 'profil') {
            return `${piece.section}<br><small>L: ${piece.longueur}mm</small>`;
        } else {
            return `${piece.longueur}×${piece.largeur}mm<br><small>e: ${piece.epaisseur}mm</small>`;
        }
    },

    runAutoAssignment() {
        console.log('🤖 Running automatic assignment...');
        
        this.currentPieces.forEach((piece, index) => {
            const assignment = this.calculateOptimalAssignment(piece);
            piece.machineAssignee = assignment.machine;
            piece.tempsEstime = assignment.temps;
            piece.statut = 'assigne';
        });

        this.renderPiecesAnalysis();
        this.renderMachinesSummary();
        this.advanceToStep(4);

        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(
                `🤖 Assignation automatique terminée - ${this.currentPieces.length} pièces assignées`,
                'success'
            );
        }
    },

    calculateOptimalAssignment(piece) {
        const compatibleMachines = this.findCompatibleMachines(piece);
        
        if (compatibleMachines.length === 0) {
            return { machine: null, temps: null };
        }

        // Calcul du score pour chaque machine compatible
        let bestMachine = null;
        let bestScore = Infinity;
        let bestTime = null;

        compatibleMachines.forEach(machineId => {
            const machine = this.machinesData[machineId];
            const temps = this.calculateMachiningTime(piece, machine);
            const cout = this.calculateCost(temps, machine);
            
            // Score basé sur le coût, la priorité et l'efficacité
            const score = cout + (machine.priorite * 10) + (temps.total * 0.5);
            
            if (score < bestScore) {
                bestScore = score;
                bestMachine = machineId;
                bestTime = temps;
            }
        });

        return { machine: bestMachine, temps: bestTime };
    },

    findCompatibleMachines(piece) {
        const compatible = [];

        Object.values(this.machinesData).forEach(machine => {
            if (!machine.disponible) return;

            let isCompatible = false;

            if (piece.type === 'profil') {
                // Logique pour profils
                if (machine.type === 'découpe' && piece.nbTrous === 0) {
                    isCompatible = piece.epaisseur <= machine.capacites.epaisseurMax &&
                                 piece.longueur <= machine.capacites.longueurMax &&
                                 machine.capacites.materiaux.includes(piece.materiau);
                } else if (machine.type === 'perçage' && piece.nbTrous > 0) {
                    isCompatible = piece.epaisseur <= machine.capacites.epaisseurMax &&
                                 piece.longueur <= machine.capacites.longueurMax &&
                                 machine.capacites.materiaux.includes(piece.materiau);
                } else if (machine.type === 'tronçonnage') {
                    isCompatible = machine.capacites.materiaux.includes(piece.materiau);
                }
            } else if (piece.type === 'plaque') {
                // Logique pour plaques
                if (machine.type === 'découpe') {
                    isCompatible = piece.epaisseur <= machine.capacites.epaisseurMax &&
                                 piece.longueur <= machine.capacites.longueurMax &&
                                 piece.largeur <= machine.capacites.largeurMax &&
                                 machine.capacites.materiaux.includes(piece.materiau);
                } else if (machine.type === 'perçage' && piece.nbTrous > 0) {
                    isCompatible = piece.epaisseur <= machine.capacites.epaisseurMax &&
                                 piece.longueur <= machine.capacites.longueurMax &&
                                 machine.capacites.materiaux.includes(piece.materiau);
                }
            }

            if (isCompatible) {
                compatible.push(machine.id);
            }
        });

        return compatible;
    },

    calculateMachiningTime(piece, machine) {
        let preparation = machine.temps.preparation;
        let usinage = 0;
        let finition = machine.temps.finition;

        if (machine.type === 'découpe') {
            // Calcul basé sur le périmètre de coupe
            const vitesse = machine.temps.vitesseCoupe * Math.pow(machine.temps.facteurEpaisseur, piece.epaisseur - 10);
            usinage = (piece.perimetreCoupe / vitesse) * 60; // conversion en minutes
        } else if (machine.type === 'perçage') {
            // Calcul basé sur le nombre de trous
            const vitesse = machine.temps.vitessePercage;
            usinage = (piece.nbTrous / vitesse) * 60;
        } else if (machine.type === 'tronçonnage') {
            // Calcul basé sur la section
            const section = piece.type === 'profil' ? 
                this.getProfileSection(piece.section) : 
                piece.longueur * piece.largeur;
            usinage = (section / machine.temps.vitesseCoupe) / 60;
        }

        // Facteur de complexité
        const complexityFactor = {
            'simple': 1.0,
            'moyenne': 1.3,
            'élevée': 1.7
        }[piece.complexite] || 1.0;

        usinage *= complexityFactor;

        return {
            preparation,
            usinage,
            finition,
            total: preparation + usinage + finition
        };
    },

    getProfileSection(section) {
        // Estimation de la section des profilés courants (en mm²)
        const sections = {
            'IPE200': 2850,
            'IPE240': 3910,
            'IPE270': 4590,
            'IPE300': 5380,
            'IPE360': 7270,
            'L100x10': 1950
        };
        return sections[section] || 3000;
    },

    calculateCost(temps, machine) {
        const coutHoraire = machine.couts.horaire * (temps.total / 60);
        const coutConsommables = machine.couts.consommables * 100; // estimation
        return coutHoraire + coutConsommables;
    },

    renderMachinesSummary() {
        const container = document.getElementById('summary-grid');
        if (!container) return;

        const summary = this.calculateMachinesSummary();

        container.innerHTML = Object.entries(summary).map(([machineId, data]) => {
            const machine = this.machinesData[machineId];
            if (!machine) return '';

            return `
                <div class="machine-summary-card">
                    <div class="summary-header">
                        <span class="machine-icon">${machine.icone}</span>
                        <h4>${machine.nom}</h4>
                    </div>
                    <div class="summary-stats">
                        <div class="stat-item">
                            <label>Pièces assignées:</label>
                            <span class="stat-value">${data.nbPieces}</span>
                        </div>
                        <div class="stat-item">
                            <label>Temps total:</label>
                            <span class="stat-value">${data.tempsTotal.toFixed(1)} min</span>
                        </div>
                        <div class="stat-item">
                            <label>Coût estimé:</label>
                            <span class="stat-value">${data.coutTotal.toFixed(0)} €</span>
                        </div>
                        <div class="stat-item">
                            <label>Charge machine:</label>
                            <span class="stat-value charge-${this.getChargeLevel(data.tempsTotal)}">${this.getChargeLabel(data.tempsTotal)}</span>
                        </div>
                    </div>
                    <div class="pieces-list">
                        <h5>Pièces à usiner:</h5>
                        <ul>
                            ${data.pieces.map(piece => `
                                <li>${piece.nom} <small>(${piece.tempsEstime.total.toFixed(1)}min)</small></li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');
    },

    calculateMachinesSummary() {
        const summary = {};

        this.currentPieces.forEach(piece => {
            if (!piece.machineAssignee || !piece.tempsEstime) return;

            const machineId = piece.machineAssignee;
            const machine = this.machinesData[machineId];

            if (!summary[machineId]) {
                summary[machineId] = {
                    nbPieces: 0,
                    tempsTotal: 0,
                    coutTotal: 0,
                    pieces: []
                };
            }

            summary[machineId].nbPieces++;
            summary[machineId].tempsTotal += piece.tempsEstime.total;
            summary[machineId].coutTotal += this.calculateCost(piece.tempsEstime, machine);
            summary[machineId].pieces.push(piece);
        });

        return summary;
    },

    getChargeLevel(tempsTotal) {
        if (tempsTotal < 60) return 'faible';
        if (tempsTotal < 180) return 'moyenne';
        if (tempsTotal < 360) return 'elevee';
        return 'critique';
    },

    getChargeLabel(tempsTotal) {
        const level = this.getChargeLevel(tempsTotal);
        const labels = {
            'faible': 'Faible',
            'moyenne': 'Moyenne', 
            'elevee': 'Élevée',
            'critique': 'Critique'
        };
        return labels[level];
    },

    editAssignment(pieceIndex) {
        const piece = this.currentPieces[pieceIndex];
        this.currentEditingPiece = pieceIndex;
        
        this.showAssignmentModal(piece);
    },

    showAssignmentModal(piece) {
        const modal = document.getElementById('assign-modal');
        const pieceInfo = document.getElementById('current-piece-info');
        const machinesList = document.getElementById('machines-list');

        // Info de la pièce
        pieceInfo.innerHTML = `
            <div class="piece-detail">
                <h4>${piece.nom}</h4>
                <div class="piece-specs">
                    <span class="spec">Type: ${piece.type}</span>
                    <span class="spec">Matériau: ${piece.materiau}</span>
                    <span class="spec">Épaisseur: ${piece.epaisseur}mm</span>
                    <span class="spec">Complexité: ${piece.complexite}</span>
                </div>
            </div>
        `;

        // Machines compatibles
        const compatibleMachines = this.findCompatibleMachines(piece);
        machinesList.innerHTML = compatibleMachines.map(machineId => {
            const machine = this.machinesData[machineId];
            const temps = this.calculateMachiningTime(piece, machine);
            const cout = this.calculateCost(temps, machine);
            const isSelected = piece.machineAssignee === machineId;

            return `
                <div class="machine-option ${isSelected ? 'selected' : ''}" data-machine="${machineId}">
                    <div class="machine-info">
                        <div class="machine-name">
                            ${machine.icone} ${machine.nom}
                        </div>
                        <div class="machine-metrics">
                            <span class="metric">Temps: ${temps.total.toFixed(1)}min</span>
                            <span class="metric">Coût: ${cout.toFixed(0)}€</span>
                        </div>
                    </div>
                    <div class="machine-details">
                        <small>Prep: ${temps.preparation}min | Usinage: ${temps.usinage.toFixed(1)}min | Finition: ${temps.finition}min</small>
                    </div>
                </div>
            `;
        }).join('');

        // Event listeners pour la sélection
        machinesList.querySelectorAll('.machine-option').forEach(option => {
            option.addEventListener('click', () => {
                machinesList.querySelectorAll('.machine-option').forEach(o => o.classList.remove('selected'));
                option.classList.add('selected');
                this.selectedMachine = option.dataset.machine;
                this.updateTimeInputs(piece, this.machinesData[this.selectedMachine]);
            });
        });

        // Remplir les temps si machine déjà assignée
        if (piece.machineAssignee && piece.tempsEstime) {
            document.getElementById('prep-time').value = piece.tempsEstime.preparation;
            document.getElementById('machining-time').value = piece.tempsEstime.usinage.toFixed(1);
            document.getElementById('finishing-time').value = piece.tempsEstime.finition;
            this.selectedMachine = piece.machineAssignee;
        }

        this.updateTotalTime();
        this.showModal('assign-modal');
    },

    updateTimeInputs(piece, machine) {
        const temps = this.calculateMachiningTime(piece, machine);
        document.getElementById('prep-time').value = temps.preparation;
        document.getElementById('machining-time').value = temps.usinage.toFixed(1);
        document.getElementById('finishing-time').value = temps.finition;
        this.updateTotalTime();
    },

    updateTotalTime() {
        const prep = parseFloat(document.getElementById('prep-time').value) || 0;
        const machining = parseFloat(document.getElementById('machining-time').value) || 0;
        const finishing = parseFloat(document.getElementById('finishing-time').value) || 0;
        const total = prep + machining + finishing;
        
        document.getElementById('total-estimated-time').textContent = `${total.toFixed(1)} min`;
    },

    validateAssignments() {
        this.advanceToStep(5);
        
        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(
                `✅ Toutes les assignations validées - Prêt pour l'export ERP`,
                'success'
            );
        }
    },

    bindModalEvents() {
        // Fermeture des modales
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop') || 
                e.target.classList.contains('modal-close')) {
                this.hideModals();
            }
        });

        // Sauvegarde assignation
        document.getElementById('save-assign')?.addEventListener('click', () => {
            this.saveAssignment();
        });

        // Annulation
        document.getElementById('cancel-assign')?.addEventListener('click', () => {
            this.hideModals();
        });

        // Mise à jour temps en temps réel
        ['prep-time', 'machining-time', 'finishing-time'].forEach(id => {
            document.getElementById(id)?.addEventListener('input', () => {
                this.updateTotalTime();
            });
        });
    },

    saveAssignment() {
        if (this.currentEditingPiece === undefined || !this.selectedMachine) return;

        const piece = this.currentPieces[this.currentEditingPiece];
        const prep = parseFloat(document.getElementById('prep-time').value) || 0;
        const machining = parseFloat(document.getElementById('machining-time').value) || 0;
        const finishing = parseFloat(document.getElementById('finishing-time').value) || 0;

        piece.machineAssignee = this.selectedMachine;
        piece.tempsEstime = {
            preparation: prep,
            usinage: machining,
            finition: finishing,
            total: prep + machining + finishing
        };
        piece.statut = 'modifie';

        this.renderPiecesAnalysis();
        this.renderMachinesSummary();
        this.hideModals();

        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(
                `✅ Assignation mise à jour pour ${piece.nom}`,
                'success'
            );
        }
    },

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('modal-visible');
            }, 10);
        }
    },

    hideModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('modal-visible');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        });
    },

    addDSTVStyles() {
        if (document.getElementById('dstv-demo-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'dstv-demo-styles';
        styles.textContent = `
            /* Styles pour la démo DSTV */
            .process-steps {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: var(--space-4);
                margin: var(--space-8) 0;
                padding: var(--space-6);
                background: var(--bg-card);
                border-radius: var(--radius-lg);
                border: 1px solid var(--border-color);
            }
            
            .step {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: var(--space-2);
                padding: var(--space-3);
                border-radius: var(--radius-md);
                transition: var(--transition-base);
                opacity: 0.5;
            }
            
            .step.active {
                opacity: 1;
                background: var(--primary-color);
                color: white;
                transform: scale(1.1);
            }
            
            .step.completed {
                opacity: 0.8;
                background: var(--success-color);
                color: white;
            }
            
            .step-number {
                width: 30px;
                height: 30px;
                border: 2px solid currentColor;
                border-radius: var(--radius-full);
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: var(--font-size-sm);
            }
            
            .step-label {
                font-size: var(--font-size-xs);
                font-weight: 600;
                text-align: center;
            }
            
            .dstv-interface {
                margin: var(--space-8) 0;
            }
            
            /* Zone d'import */
            .import-zone {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                padding: var(--space-6);
                margin-bottom: var(--space-6);
            }
            
            .import-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: var(--space-6);
            }
            
            .import-info {
                display: flex;
                gap: var(--space-2);
            }
            
            .info-badge {
                padding: var(--space-1) var(--space-3);
                background: var(--success-color);
                color: white;
                border-radius: var(--radius-sm);
                font-size: var(--font-size-xs);
                font-weight: 600;
            }
            
            .file-drop-zone {
                border: 2px dashed var(--border-color);
                border-radius: var(--radius-lg);
                padding: var(--space-8);
                text-align: center;
                transition: var(--transition-base);
                cursor: pointer;
            }
            
            .file-drop-zone:hover,
            .file-drop-zone.dragover {
                border-color: var(--primary-color);
                background: rgba(0, 212, 255, 0.05);
            }
            
            .drop-content {
                margin-bottom: var(--space-6);
            }
            
            .drop-icon {
                font-size: 3rem;
                margin-bottom: var(--space-4);
                opacity: 0.7;
            }
            
            .drop-content h4 {
                color: var(--text-primary);
                margin-bottom: var(--space-2);
            }
            
            .drop-content p {
                color: var(--text-secondary);
                margin-bottom: var(--space-4);
            }
            
            .demo-files {
                border-top: 1px solid var(--border-color);
                padding-top: var(--space-4);
            }
            
            .demo-files h5 {
                color: var(--text-secondary);
                margin-bottom: var(--space-3);
                font-size: var(--font-size-sm);
            }
            
            .demo-buttons {
                display: flex;
                gap: var(--space-3);
                justify-content: center;
                flex-wrap: wrap;
            }
            
            /* Configuration machines */
            .machines-config {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                padding: var(--space-6);
                margin-bottom: var(--space-6);
            }
            
            .config-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: var(--space-6);
            }
            
            .machines-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: var(--space-4);
            }
            
            .machine-card {
                background: var(--bg-dark);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--space-4);
                transition: var(--transition-base);
            }
            
            .machine-card.available {
                border-color: var(--success-color);
            }
            
            .machine-card.unavailable {
                opacity: 0.6;
                border-color: var(--error-color);
            }
            
            .machine-header {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                margin-bottom: var(--space-4);
            }
            
            .machine-icon {
                font-size: var(--font-size-xl);
            }
            
            .machine-header h4 {
                flex: 1;
                margin: 0;
                color: var(--text-primary);
            }
            
            .machine-status {
                font-size: var(--font-size-sm);
            }
            
            .machine-specs {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-2);
            }
            
            .spec-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: var(--font-size-sm);
            }
            
            .spec-item label {
                color: var(--text-secondary);
                font-weight: 500;
            }
            
            .priority-1 { color: var(--success-color); }
            .priority-2 { color: var(--primary-color); }
            .priority-3 { color: var(--accent-color); }
            .priority-4 { color: var(--warning-color); }
            .priority-5 { color: var(--error-color); }
            
            /* Analyse des pièces */
            .pieces-analysis {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                padding: var(--space-6);
                margin-bottom: var(--space-6);
            }
            
            .analysis-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: var(--space-6);
            }
            
            .analysis-controls {
                display: flex;
                gap: var(--space-3);
            }
            
            .pieces-table-container {
                overflow-x: auto;
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
            }
            
            .pieces-table {
                width: 100%;
                border-collapse: collapse;
                font-size: var(--font-size-sm);
            }
            
            .pieces-table th {
                background: var(--bg-medium);
                padding: var(--space-3);
                text-align: left;
                border-bottom: 1px solid var(--border-color);
                color: var(--text-primary);
                font-weight: 600;
                position: sticky;
                top: 0;
                z-index: 10;
            }
            
            .pieces-table td {
                padding: var(--space-3);
                border-bottom: 1px solid var(--border-color);
                vertical-align: top;
            }
            
            .piece-row {
                transition: var(--transition-fast);
            }
            
            .piece-row:hover {
                background: var(--bg-card-hover);
            }
            
            .piece-row.nouveau {
                border-left: 3px solid var(--info-color);
            }
            
            .piece-row.assigne {
                border-left: 3px solid var(--success-color);
            }
            
            .piece-row.modifie {
                border-left: 3px solid var(--accent-color);
            }
            
            .piece-name strong {
                color: var(--text-primary);
                font-size: var(--font-size-base);
            }
            
            .piece-name small {
                color: var(--text-muted);
                display: block;
                margin-top: var(--space-1);
            }
            
            .type-badge {
                padding: var(--space-1) var(--space-2);
                border-radius: var(--radius-sm);
                font-size: var(--font-size-xs);
                font-weight: 600;
                text-transform: uppercase;
            }
            
            .type-profil {
                background: var(--primary-color);
                color: white;
            }
            
            .type-plaque {
                background: var(--secondary-color);
                color: white;
            }
            
            .material-badge {
                background: var(--bg-medium);
                color: var(--text-primary);
                padding: var(--space-1) var(--space-2);
                border-radius: var(--radius-sm);
                font-size: var(--font-size-xs);
                font-weight: 600;
            }
            
            .complexity-simple { color: var(--success-color); }
            .complexity-moyenne { color: var(--warning-color); }
            .complexity-élevée { color: var(--error-color); }
            
            .machine-assigned {
                background: var(--success-color);
                color: white;
                padding: var(--space-1) var(--space-2);
                border-radius: var(--radius-sm);
                font-size: var(--font-size-xs);
                font-weight: 600;
            }
            
            .machine-pending {
                color: var(--text-muted);
                font-style: italic;
            }
            
            .time-estimated {
                color: var(--success-color);
                font-weight: 600;
            }
            
            .time-pending {
                color: var(--text-muted);
            }
            
            /* Récapitulatif machines */
            .machines-summary {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                padding: var(--space-6);
                margin-bottom: var(--space-6);
            }
            
            .summary-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: var(--space-4);
            }
            
            .machine-summary-card {
                background: var(--bg-dark);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--space-5);
            }
            
            .summary-header {
                display: flex;
                align-items: center;
                gap: var(--space-3);
                margin-bottom: var(--space-4);
            }
            
            .summary-header h4 {
                margin: 0;
                color: var(--text-primary);
            }
            
            .summary-stats {
                margin-bottom: var(--space-4);
            }
            
            .stat-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: var(--space-2);
                font-size: var(--font-size-sm);
            }
            
            .stat-item label {
                color: var(--text-secondary);
            }
            
            .stat-value {
                font-weight: 600;
                color: var(--text-primary);
            }
            
            .charge-faible { color: var(--success-color); }
            .charge-moyenne { color: var(--warning-color); }
            .charge-elevee { color: var(--accent-color); }
            .charge-critique { color: var(--error-color); }
            
            .pieces-list h5 {
                margin-bottom: var(--space-3);
                color: var(--text-primary);
                font-size: var(--font-size-sm);
            }
            
            .pieces-list ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            
            .pieces-list li {
                padding: var(--space-1) 0;
                font-size: var(--font-size-xs);
                color: var(--text-secondary);
                border-bottom: 1px solid var(--border-color);
            }
            
            .pieces-list li:last-child {
                border-bottom: none;
            }
            
            /* Zone d'export */
            .export-zone {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                padding: var(--space-6);
            }
            
            .export-header {
                text-align: center;
                margin-bottom: var(--space-6);
            }
            
            .export-options {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: var(--space-6);
            }
            
            .export-item {
                background: var(--bg-dark);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--space-5);
                text-align: center;
            }
            
            .export-item h4 {
                color: var(--primary-color);
                margin-bottom: var(--space-3);
            }
            
            .export-item p {
                color: var(--text-secondary);
                margin-bottom: var(--space-4);
                font-size: var(--font-size-sm);
            }
            
            /* Modales */
            .modal-large .modal-content {
                max-width: 800px;
            }
            
            .current-piece-info {
                background: var(--bg-medium);
                padding: var(--space-4);
                border-radius: var(--radius-md);
                margin-bottom: var(--space-4);
            }
            
            .piece-detail h4 {
                margin-bottom: var(--space-3);
                color: var(--primary-color);
            }
            
            .piece-specs {
                display: flex;
                gap: var(--space-3);
                flex-wrap: wrap;
            }
            
            .piece-specs .spec {
                background: var(--bg-dark);
                padding: var(--space-1) var(--space-2);
                border-radius: var(--radius-sm);
                font-size: var(--font-size-xs);
                color: var(--text-secondary);
            }
            
            .machine-selection h4,
            .time-adjustment h4 {
                margin-bottom: var(--space-4);
                color: var(--text-primary);
            }
            
            .machines-list {
                max-height: 300px;
                overflow-y: auto;
                margin-bottom: var(--space-6);
            }
            
            .machine-option {
                background: var(--bg-medium);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--space-4);
                margin-bottom: var(--space-3);
                cursor: pointer;
                transition: var(--transition-fast);
            }
            
            .machine-option:hover {
                border-color: var(--primary-color);
            }
            
            .machine-option.selected {
                border-color: var(--primary-color);
                background: rgba(0, 212, 255, 0.1);
            }
            
            .machine-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: var(--space-2);
            }
            
            .machine-name {
                font-weight: 600;
                color: var(--text-primary);
            }
            
            .machine-metrics {
                display: flex;
                gap: var(--space-3);
            }
            
            .metric {
                font-size: var(--font-size-xs);
                color: var(--text-secondary);
            }
            
            .machine-details {
                color: var(--text-muted);
                font-size: var(--font-size-xs);
            }
            
            .time-inputs {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: var(--space-4);
                margin-bottom: var(--space-4);
            }
            
            .time-input label {
                display: block;
                margin-bottom: var(--space-2);
                font-weight: 600;
                color: var(--text-primary);
                font-size: var(--font-size-sm);
            }
            
            .time-input input {
                width: 100%;
                padding: var(--space-2);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-sm);
                background: var(--bg-medium);
                color: var(--text-primary);
            }
            
            .total-time {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--space-3);
                background: var(--bg-medium);
                border-radius: var(--radius-md);
                font-weight: 600;
            }
            
            .total-time span {
                color: var(--primary-color);
                font-size: var(--font-size-lg);
            }
            
            /* Responsive */
            @media (max-width: 1024px) {
                .process-steps {
                    flex-wrap: wrap;
                }
                
                .machines-grid {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                }
                
                .summary-grid {
                    grid-template-columns: 1fr;
                }
            }
            
            @media (max-width: 768px) {
                .import-header,
                .config-header,
                .analysis-header {
                    flex-direction: column;
                    gap: var(--space-3);
                    align-items: stretch;
                }
                
                .analysis-controls,
                .demo-buttons {
                    flex-direction: column;
                }
                
                .pieces-table-container {
                    font-size: var(--font-size-xs);
                }
                
                .export-options {
                    grid-template-columns: 1fr;
                }
                
                .time-inputs {
                    grid-template-columns: 1fr;
                }
                
                .machine-info {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: var(--space-2);
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
};

// Instance globale pour les callbacks
window.dstvDemo = window.pages['import-dstv-demo'];

console.log('🔄 Page import DSTV & assignation machines chargée');