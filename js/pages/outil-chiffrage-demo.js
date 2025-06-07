// js/pages/outil-chiffrage-demo.js - Démonstration outil de chiffrage charpente métallique

window.pages = window.pages || {};

window.pages['outil-chiffrage-demo'] = {
    render() {
        return `
            <!-- Header de la page -->
            <section class="section">
                <div class="container">
                    <button class="btn-back">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title">Démonstration : Outil de Chiffrage Charpente Métallique</h1>
                        <p class="section-subtitle">
                            Interface simplifiée d'un logiciel de chiffrage spécialisé avec structure hiérarchique et métrés automatisés
                        </p>
                    </div>
                    
                    <!-- Barre d'outils de chiffrage -->
                    <div class="chiffrage-toolbar">
                        <div class="toolbar-left">
                            <span class="project-info">📋 Projet: Hangar Industriel 40x25m</span>
                            <span class="client-info">👤 Client: SARL Construction Métallique</span>
                        </div>
                        <div class="toolbar-right">
                            <button class="btn btn-secondary btn-sm">💾 Sauvegarder</button>
                            <button class="btn btn-primary btn-sm">📄 Générer Devis</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Interface de chiffrage principale -->
            <section class="chiffrage-interface">
                <div class="container">
                    <div class="chiffrage-layout">
                        
                        <!-- Colonne gauche : Structure hiérarchique -->
                        <div class="chiffrage-tree">
                            <div class="tree-header">
                                <h3>🏗️ Structure du Projet</h3>
                                <button class="btn btn-outline btn-sm" id="add-rubrique">+ Ajouter Rubrique</button>
                            </div>
                            
                            <div class="tree-content" id="project-tree">
                                <!-- Contenu généré dynamiquement -->
                            </div>
                        </div>
                        
                        <!-- Colonne droite : Détails et calculs -->
                        <div class="chiffrage-details">
                            <div class="details-header">
                                <h3 id="selected-item-title">Sélectionnez un élément</h3>
                                <div class="details-actions">
                                    <button class="btn btn-outline btn-sm" id="add-article">+ Article</button>
                                    <button class="btn btn-outline btn-sm" id="add-metre">+ Métré</button>
                                </div>
                            </div>
                            
                            <div class="details-content" id="details-content">
                                <div class="empty-selection">
                                    <p>👆 Sélectionnez un élément dans l'arborescence pour voir les détails</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Récapitulatif financier -->
                    <div class="chiffrage-summary">
                        <h3>💰 Récapitulatif Financier</h3>
                        <div class="summary-grid">
                            <div class="summary-item">
                                <div class="summary-label">Matières Premières</div>
                                <div class="summary-value" id="total-matieres">45 280 €</div>
                            </div>
                            <div class="summary-item">
                                <div class="summary-label">Main d'Œuvre</div>
                                <div class="summary-value" id="total-mo">28 350 €</div>
                            </div>
                            <div class="summary-item">
                                <div class="summary-label">Sous-Traitance</div>
                                <div class="summary-value" id="total-st">8 200 €</div>
                            </div>
                            <div class="summary-item highlight">
                                <div class="summary-label">Total HT</div>
                                <div class="summary-value" id="total-ht">81 830 €</div>
                            </div>
                            <div class="summary-item">
                                <div class="summary-label">Marge (%)</div>
                                <div class="summary-value" id="marge-percent">22%</div>
                            </div>
                            <div class="summary-item final">
                                <div class="summary-label">Prix de Vente HT</div>
                                <div class="summary-value" id="prix-vente">99 832 €</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Modal d'ajout d'article -->
            <div class="modal" id="article-modal" style="display: none;">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Ajouter un Article</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="article-form">
                            <div class="form-group">
                                <label for="article-designation">Désignation</label>
                                <input type="text" id="article-designation" placeholder="Ex: IPE 240 L=6m">
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="article-quantite">Quantité</label>
                                    <input type="number" id="article-quantite" step="0.01" placeholder="12">
                                </div>
                                <div class="form-group">
                                    <label for="article-unite">Unité</label>
                                    <select id="article-unite">
                                        <option value="ml">ml (mètre linéaire)</option>
                                        <option value="kg">kg</option>
                                        <option value="t">T (tonne)</option>
                                        <option value="m2">m²</option>
                                        <option value="u">U (unité)</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="article-prix-unitaire">Prix Unitaire (€)</label>
                                    <input type="number" id="article-prix-unitaire" step="0.01" placeholder="15.50">
                                </div>
                                <div class="form-group">
                                    <label for="article-temps-mo">Temps MO (h)</label>
                                    <input type="number" id="article-temps-mo" step="0.1" placeholder="2.5">
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancel-article">Annuler</button>
                        <button class="btn btn-primary" id="save-article">Ajouter</button>
                    </div>
                </div>
            </div>

            <!-- Modal d'ajout de métré -->
            <div class="modal" id="metre-modal" style="display: none;">
                <div class="modal-backdrop"></div>
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Ajouter un Métré Automatique</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="metre-form">
                            <div class="form-group">
                                <label for="metre-designation">Désignation</label>
                                <input type="text" id="metre-designation" placeholder="Ex: Charpente principale €/T">
                            </div>
                            <div class="form-group">
                                <label for="metre-formule">Type de Calcul</label>
                                <select id="metre-formule">
                                    <option value="eur_t">€/T (Euro par tonne)</option>
                                    <option value="eur_m2">€/m² (Euro par m²)</option>
                                    <option value="eur_ml">€/ml (Euro par ml)</option>
                                    <option value="eur_kg">€/kg (Euro par kg)</option>
                                    <option value="forfait">Forfait</option>
                                    <option value="formule_custom">Formule personnalisée</option>
                                </select>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="metre-coefficient">Coefficient</label>
                                    <input type="number" id="metre-coefficient" step="0.01" placeholder="2850" 
                                           title="Ex: 2850 €/T pour la charpente principale">
                                </div>
                                <div class="form-group">
                                    <label for="metre-base-calcul">Base de Calcul</label>
                                    <select id="metre-base-calcul">
                                        <option value="poids_total">Poids total des articles</option>
                                        <option value="surface_total">Surface totale</option>
                                        <option value="longueur_total">Longueur totale</option>
                                        <option value="nb_articles">Nombre d'articles</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="metre-description">Description du Calcul</label>
                                <textarea id="metre-description" rows="2" 
                                          placeholder="Calcul automatique basé sur le poids total des profilés avec coefficient 2850€/T incluant découpe, assemblage et finition"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" id="cancel-metre">Annuler</button>
                        <button class="btn btn-primary" id="save-metre">Ajouter</button>
                    </div>
                </div>
            </div>
        `;
    },

    init() {
        console.log('🔧 Initialisation de la page outil de chiffrage...');
        
        // VÉRIFICATION D'ACCÈS CLIENT OBLIGATOIRE
        if (!this.verifyClientAccess()) {
            this.renderAccessDenied();
            return;
        }
        
        // Attendre que le DOM soit prêt
        setTimeout(() => {
            this.initializeChiffrageData();
            this.renderProjectTree();
            this.bindEvents();
            this.setupModals();
            this.addDemoCSS();
            this.addClientAccessCSS();
            
            if (typeof window.setupBackButton === 'function') {
                window.setupBackButton();
            }
            
            console.log('✅ Page outil de chiffrage initialisée (accès client vérifié)');
            
            // Afficher un message de bienvenue client
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
        
        const hasAccess = window.OweoClientAccess.hasAccess();
        console.log('🔐 Client access check:', hasAccess);
        
        return hasAccess;
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
                            Cette démonstration interactive est exclusivement réservée à nos clients.
                        </p>
                        
                        <div class="access-denied-actions">
                            <button class="btn btn-primary btn-large" onclick="OweoClientAccess.showAuthModal()">
                                🔑 Saisir Code d'Accès
                            </button>
                            <button class="btn btn-secondary btn-large" onclick="history.back()">
                                ← Retour
                            </button>
                        </div>
                        
                        <div class="access-denied-help">
                            <h3>💡 Comment obtenir l'accès ?</h3>
                            <div class="help-steps">
                                <div class="help-step">
                                    <span class="step-number">1</span>
                                    <p>Contactez votre référent Oweo</p>
                                </div>
                                <div class="help-step">
                                    <span class="step-number">2</span>
                                    <p>Obtenez votre code client personnalisé</p>
                                </div>
                                <div class="help-step">
                                    <span class="step-number">3</span>
                                    <p>Accédez aux démonstrations exclusives</p>
                                </div>
                            </div>
                            
                            <div class="help-contact">
                                <p>Besoin d'aide ? Contactez-nous :</p>
                                <div class="contact-links">
                                    <a href="mailto:contact@oweo-consulting.fr" class="contact-link">
                                        📧 contact@oweo-consulting.fr
                                    </a>
                                    <a href="tel:+33123456789" class="contact-link">
                                        📞 01 23 45 67 89
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
        
        // Ajouter les styles pour la page d'accès refusé
        this.addAccessDeniedCSS();
    },

    /**
     * Afficher un message de bienvenue client
     */
    showClientWelcome() {
        if (typeof window.OweoClientAccess === 'undefined') return;
        
        const sessionInfo = window.OweoClientAccess.getSessionInfo();
        if (!sessionInfo) return;
        
        // Afficher une notification de bienvenue
        if (window.OweoUtils && window.OweoUtils.notification) {
            window.OweoUtils.notification.show(
                `🎯 Bienvenue dans la démonstration ERP interactive !`,
                'success',
                4000
            );
        }
        
        // Ajouter une bannière client dans l'interface
        const container = document.querySelector('.chiffrage-toolbar .toolbar-left');
        if (container && !container.querySelector('.client-badge')) {
            const clientBadge = document.createElement('span');
            clientBadge.className = 'client-badge';
            clientBadge.innerHTML = `🔐 Session Client Active`;
            container.appendChild(clientBadge);
        }
    },

    // Données d'exemple pour la démo
    chiffrageData: {
        projet: {
            nom: "Hangar Industriel 40x25m",
            client: "SARL Construction Métallique",
            rubriques: []
        },
        selectedItem: null
    },

    initializeChiffrageData() {
        // Données d'exemple préchargées
        this.chiffrageData.projet.rubriques = [
            {
                id: 'rubrique_1',
                type: 'rubrique',
                nom: '🏗️ STRUCTURE PRINCIPALE',
                expanded: true,
                chapitres: [
                    {
                        id: 'chapitre_1_1',
                        type: 'chapitre',
                        nom: 'Ossature Portique',
                        expanded: true,
                        sousChapitres: [
                            {
                                id: 'souschap_1_1_1',
                                type: 'sous-chapitre',
                                nom: 'Poteaux',
                                expanded: false,
                                articles: [
                                    {
                                        id: 'art_1_1_1_1',
                                        type: 'article',
                                        designation: 'IPE 240 H=7m',
                                        quantite: 10,
                                        unite: 'U',
                                        prixUnitaire: 285.50,
                                        poids: 18.2,
                                        tempsMO: 2.5
                                    },
                                    {
                                        id: 'art_1_1_1_2',
                                        type: 'article',
                                        designation: 'IPE 270 H=7m',
                                        quantite: 8,
                                        unite: 'U',
                                        prixUnitaire: 325.80,
                                        poids: 20.8,
                                        tempsMO: 2.8
                                    }
                                ],
                                metres: [
                                    {
                                        id: 'metre_1_1_1_1',
                                        type: 'metre',
                                        designation: 'Assemblage poteaux €/T',
                                        formule: 'eur_t',
                                        coefficient: 2850,
                                        baseCalcul: 'poids_total',
                                        description: 'Assemblage, découpe et finition des poteaux'
                                    }
                                ]
                            },
                            {
                                id: 'souschap_1_1_2',
                                type: 'sous-chapitre',
                                nom: 'Traverses',
                                expanded: false,
                                articles: [
                                    {
                                        id: 'art_1_1_2_1',
                                        type: 'article',
                                        designation: 'IPE 360 L=25m',
                                        quantite: 6,
                                        unite: 'U',
                                        prixUnitaire: 1250.00,
                                        poids: 142.8,
                                        tempsMO: 8.5
                                    }
                                ],
                                metres: []
                            }
                        ]
                    },
                    {
                        id: 'chapitre_1_2',
                        type: 'chapitre',
                        nom: 'Contreventements',
                        expanded: false,
                        sousChapitres: []
                    }
                ]
            },
            {
                id: 'rubrique_2',
                type: 'rubrique',
                nom: '🔩 ASSEMBLAGES ET FIXATIONS',
                expanded: false,
                chapitres: []
            },
            {
                id: 'rubrique_3',
                type: 'rubrique',
                nom: '🎨 FINITIONS ET PROTECTION',
                expanded: false,
                chapitres: []
            }
        ];
    },

    renderProjectTree() {
        const treeContainer = document.getElementById('project-tree');
        if (!treeContainer) return;

        let html = '';
        
        this.chiffrageData.projet.rubriques.forEach(rubrique => {
            html += this.renderTreeItem(rubrique, 0);
        });
        
        treeContainer.innerHTML = html;
    },

    renderTreeItem(item, level) {
        const isSelected = this.chiffrageData.selectedItem?.id === item.id;
        const indentClass = `tree-level-${level}`;
        const expandIcon = item.expanded ? '📂' : '📁';
        
        let html = `
            <div class="tree-item ${indentClass} ${isSelected ? 'selected' : ''}" 
                 data-item-id="${item.id}" 
                 data-item-type="${item.type}">
                <div class="tree-item-content">
                    ${level > 0 ? '<span class="tree-indent"></span>'.repeat(level) : ''}
                    <span class="tree-expand" data-expand="${item.id}">
                        ${this.hasChildren(item) ? expandIcon : '📄'}
                    </span>
                    <span class="tree-label">${item.nom || item.designation}</span>
                    <span class="tree-type">${this.getTypeLabel(item.type)}</span>
                </div>
            </div>
        `;
        
        // Ajouter les enfants si l'élément est étendu
        if (item.expanded) {
            // Chapitres
            if (item.chapitres) {
                item.chapitres.forEach(chapitre => {
                    html += this.renderTreeItem(chapitre, level + 1);
                });
            }
            
            // Sous-chapitres
            if (item.sousChapitres) {
                item.sousChapitres.forEach(sousChapitre => {
                    html += this.renderTreeItem(sousChapitre, level + 1);
                });
            }
            
            // Articles
            if (item.articles) {
                item.articles.forEach(article => {
                    html += this.renderTreeItem(article, level + 1);
                });
            }
            
            // Métrés
            if (item.metres) {
                item.metres.forEach(metre => {
                    html += this.renderTreeItem(metre, level + 1);
                });
            }
        }
        
        return html;
    },

    hasChildren(item) {
        return (item.chapitres && item.chapitres.length > 0) ||
               (item.sousChapitres && item.sousChapitres.length > 0) ||
               (item.articles && item.articles.length > 0) ||
               (item.metres && item.metres.length > 0);
    },

    getTypeLabel(type) {
        const labels = {
            'rubrique': 'RUB',
            'chapitre': 'CHAP',
            'sous-chapitre': 'S-CHAP',
            'article': 'ART',
            'metre': 'MÉTRÉ'
        };
        return labels[type] || type.toUpperCase();
    },

    bindEvents() {
        // Événements de l'arborescence
        document.addEventListener('click', (e) => {
            // Expand/Collapse
            if (e.target.hasAttribute('data-expand')) {
                e.preventDefault();
                e.stopPropagation();
                const itemId = e.target.getAttribute('data-expand');
                this.toggleExpand(itemId);
                return;
            }
            
            // Sélection d'item
            const treeItem = e.target.closest('.tree-item');
            if (treeItem) {
                const itemId = treeItem.getAttribute('data-item-id');
                const itemType = treeItem.getAttribute('data-item-type');
                this.selectItem(itemId, itemType);
                return;
            }
        });

        // Boutons d'ajout
        document.getElementById('add-article')?.addEventListener('click', () => {
            this.showModal('article-modal');
        });

        document.getElementById('add-metre')?.addEventListener('click', () => {
            this.showModal('metre-modal');
        });
    },

    toggleExpand(itemId) {
        const item = this.findItemById(itemId);
        if (item) {
            item.expanded = !item.expanded;
            this.renderProjectTree();
        }
    },

    selectItem(itemId, itemType) {
        // Retirer la sélection précédente
        document.querySelectorAll('.tree-item.selected').forEach(el => {
            el.classList.remove('selected');
        });
        
        // Ajouter la nouvelle sélection
        const selectedElement = document.querySelector(`[data-item-id="${itemId}"]`);
        if (selectedElement) {
            selectedElement.classList.add('selected');
        }
        
        // Mettre à jour les détails
        const item = this.findItemById(itemId);
        this.chiffrageData.selectedItem = item;
        this.renderItemDetails(item);
    },

    findItemById(itemId) {
        // Recherche récursive dans toute la structure
        const searchInArray = (items) => {
            for (const item of items) {
                if (item.id === itemId) return item;
                
                // Rechercher dans les enfants
                if (item.chapitres) {
                    const found = searchInArray(item.chapitres);
                    if (found) return found;
                }
                if (item.sousChapitres) {
                    const found = searchInArray(item.sousChapitres);
                    if (found) return found;
                }
                if (item.articles) {
                    const found = searchInArray(item.articles);
                    if (found) return found;
                }
                if (item.metres) {
                    const found = searchInArray(item.metres);
                    if (found) return found;
                }
            }
            return null;
        };
        
        return searchInArray(this.chiffrageData.projet.rubriques);
    },

    renderItemDetails(item) {
        const titleElement = document.getElementById('selected-item-title');
        const contentElement = document.getElementById('details-content');
        
        if (!item) {
            titleElement.textContent = 'Sélectionnez un élément';
            contentElement.innerHTML = '<div class="empty-selection"><p>👆 Sélectionnez un élément dans l\'arborescence pour voir les détails</p></div>';
            return;
        }
        
        titleElement.textContent = `${this.getTypeLabel(item.type)} - ${item.nom || item.designation}`;
        
        let html = '';
        
        switch (item.type) {
            case 'article':
                html = this.renderArticleDetails(item);
                break;
            case 'metre':
                html = this.renderMetreDetails(item);
                break;
            default:
                html = this.renderGroupDetails(item);
                break;
        }
        
        contentElement.innerHTML = html;
    },

    renderArticleDetails(article) {
        const totalMatieres = article.quantite * article.prixUnitaire;
        const totalMO = article.tempsMO * article.quantite * 45; // 45€/h
        const totalPoids = article.poids * article.quantite;
        
        return `
            <div class="article-details">
                <div class="details-section">
                    <h4>📋 Informations Article</h4>
                    <div class="details-grid">
                        <div class="detail-item">
                            <label>Désignation:</label>
                            <span>${article.designation}</span>
                        </div>
                        <div class="detail-item">
                            <label>Quantité:</label>
                            <span>${article.quantite} ${article.unite}</span>
                        </div>
                        <div class="detail-item">
                            <label>Prix unitaire:</label>
                            <span>${article.prixUnitaire.toFixed(2)} €</span>
                        </div>
                        <div class="detail-item">
                            <label>Poids unitaire:</label>
                            <span>${article.poids} kg</span>
                        </div>
                        <div class="detail-item">
                            <label>Temps MO:</label>
                            <span>${article.tempsMO} h/U</span>
                        </div>
                    </div>
                </div>
                
                <div class="details-section">
                    <h4>💰 Calculs Automatiques</h4>
                    <div class="calculs-grid">
                        <div class="calcul-item">
                            <label>Total Matières:</label>
                            <span class="calcul-value">${totalMatieres.toFixed(2)} €</span>
                        </div>
                        <div class="calcul-item">
                            <label>Total Main d'Œuvre:</label>
                            <span class="calcul-value">${totalMO.toFixed(2)} €</span>
                        </div>
                        <div class="calcul-item">
                            <label>Poids Total:</label>
                            <span class="calcul-value">${totalPoids.toFixed(1)} kg</span>
                        </div>
                        <div class="calcul-item highlight">
                            <label>Total Article:</label>
                            <span class="calcul-value">${(totalMatieres + totalMO).toFixed(2)} €</span>
                        </div>
                    </div>
                </div>
                
                <div class="details-actions">
                    <button class="btn btn-outline btn-sm">✏️ Modifier</button>
                    <button class="btn btn-outline btn-sm">📋 Dupliquer</button>
                    <button class="btn btn-outline btn-sm text-danger">🗑️ Supprimer</button>
                </div>
            </div>
        `;
    },

    renderMetreDetails(metre) {
        // Calcul simulé basé sur les articles du même sous-chapitre
        const baseValue = 2.5; // Simulation: 2.5T de matière
        const calculResult = baseValue * metre.coefficient;
        
        return `
            <div class="metre-details">
                <div class="details-section">
                    <h4>⚡ Métré Automatique</h4>
                    <div class="details-grid">
                        <div class="detail-item">
                            <label>Désignation:</label>
                            <span>${metre.designation}</span>
                        </div>
                        <div class="detail-item">
                            <label>Type de calcul:</label>
                            <span>${this.getFormuleLabel(metre.formule)}</span>
                        </div>
                        <div class="detail-item">
                            <label>Coefficient:</label>
                            <span>${metre.coefficient} ${this.getUniteCoefficient(metre.formule)}</span>
                        </div>
                        <div class="detail-item">
                            <label>Base de calcul:</label>
                            <span>${this.getBaseCalculLabel(metre.baseCalcul)}</span>
                        </div>
                    </div>
                </div>
                
                <div class="details-section">
                    <h4>🔢 Calcul en Temps Réel</h4>
                    <div class="calcul-automatique">
                        <div class="calcul-formule">
                            <span class="formule-text">
                                ${baseValue.toFixed(2)} ${this.getUniteBase(metre.baseCalcul)} × ${metre.coefficient} ${this.getUniteCoefficient(metre.formule)}
                            </span>
                        </div>
                        <div class="calcul-resultat">
                            <label>Résultat:</label>
                            <span class="resultat-value">${calculResult.toFixed(2)} €</span>
                        </div>
                    </div>
                    
                    <div class="calcul-description">
                        <p><strong>Description:</strong> ${metre.description}</p>
                    </div>
                </div>
                
                <div class="details-actions">
                    <button class="btn btn-outline btn-sm">✏️ Modifier Formule</button>
                    <button class="btn btn-outline btn-sm">📊 Voir Détail Calcul</button>
                    <button class="btn btn-outline btn-sm text-danger">🗑️ Supprimer</button>
                </div>
            </div>
        `;
    },

    renderGroupDetails(item) {
        // Calcul des totaux pour les groupes
        const stats = this.calculateGroupStats(item);
        
        return `
            <div class="group-details">
                <div class="details-section">
                    <h4>📊 Récapitulatif ${this.getTypeLabel(item.type)}</h4>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <label>Nombre d'articles:</label>
                            <span>${stats.nbArticles}</span>
                        </div>
                        <div class="stat-item">
                            <label>Nombre de métrés:</label>
                            <span>${stats.nbMetres}</span>
                        </div>
                        <div class="stat-item">
                            <label>Poids total:</label>
                            <span>${stats.poidsTotal.toFixed(1)} kg</span>
                        </div>
                        <div class="stat-item">
                            <label>Temps MO total:</label>
                            <span>${stats.tempsMOTotal.toFixed(1)} h</span>
                        </div>
                        <div class="stat-item highlight">
                            <label>Montant total:</label>
                            <span>${stats.montantTotal.toFixed(2)} €</span>
                        </div>
                    </div>
                </div>
                
                <div class="details-section">
                    <h4>🏗️ Composition</h4>
                    <div class="composition-list">
                        ${this.renderCompositionList(item)}
                    </div>
                </div>
            </div>
        `;
    },

    calculateGroupStats(item) {
        let stats = {
            nbArticles: 0,
            nbMetres: 0,
            poidsTotal: 0,
            tempsMOTotal: 0,
            montantTotal: 0
        };
        
        // Fonction récursive pour calculer les stats
        const calculateRecursive = (element) => {
            if (element.articles) {
                element.articles.forEach(article => {
                    stats.nbArticles++;
                    stats.poidsTotal += (article.poids || 0) * (article.quantite || 0);
                    stats.tempsMOTotal += (article.tempsMO || 0) * (article.quantite || 0);
                    stats.montantTotal += (article.prixUnitaire || 0) * (article.quantite || 0);
                    stats.montantTotal += (article.tempsMO || 0) * (article.quantite || 0) * 45; // 45€/h
                });
            }
            
            if (element.metres) {
                element.metres.forEach(metre => {
                    stats.nbMetres++;
                    // Simulation calcul métré
                    stats.montantTotal += 2.5 * metre.coefficient; // Simulation
                });
            }
            
            // Récursion sur les enfants
            ['chapitres', 'sousChapitres'].forEach(childType => {
                if (element[childType]) {
                    element[childType].forEach(child => calculateRecursive(child));
                }
            });
        };
        
        calculateRecursive(item);
        return stats;
    },

    renderCompositionList(item) {
        let html = '';
        
        // Fonction récursive pour lister les éléments
        const renderRecursive = (element, level = 0) => {
            const indent = '&nbsp;'.repeat(level * 4);
            
            if (element.articles) {
                element.articles.forEach(article => {
                    html += `
                        <div class="composition-item">
                            ${indent}📄 ${article.designation} (${article.quantite} ${article.unite})
                        </div>
                    `;
                });
            }
            
            if (element.metres) {
                element.metres.forEach(metre => {
                    html += `
                        <div class="composition-item metre">
                            ${indent}⚡ ${metre.designation}
                        </div>
                    `;
                });
            }
            
            ['chapitres', 'sousChapitres'].forEach(childType => {
                if (element[childType]) {
                    element[childType].forEach(child => {
                        html += `
                            <div class="composition-item group">
                                ${indent}📁 ${child.nom}
                            </div>
                        `;
                        renderRecursive(child, level + 1);
                    });
                }
            });
        };
        
        renderRecursive(item);
        return html || '<p>Aucun élément dans cette section.</p>';
    },

    getFormuleLabel(formule) {
        const labels = {
            'eur_t': '€ par Tonne',
            'eur_m2': '€ par m²',
            'eur_ml': '€ par mètre linéaire',
            'eur_kg': '€ par kg',
            'forfait': 'Forfait',
            'formule_custom': 'Formule personnalisée'
        };
        return labels[formule] || formule;
    },

    getUniteCoefficient(formule) {
        const unites = {
            'eur_t': '€/T',
            'eur_m2': '€/m²',
            'eur_ml': '€/ml',
            'eur_kg': '€/kg',
            'forfait': '€',
            'formule_custom': ''
        };
        return unites[formule] || '';
    },

    getBaseCalculLabel(baseCalcul) {
        const labels = {
            'poids_total': 'Poids total des articles',
            'surface_total': 'Surface totale',
            'longueur_total': 'Longueur totale',
            'nb_articles': 'Nombre d\'articles'
        };
        return labels[baseCalcul] || baseCalcul;
    },

    getUniteBase(baseCalcul) {
        const unites = {
            'poids_total': 'T',
            'surface_total': 'm²',
            'longueur_total': 'ml',
            'nb_articles': 'U'
        };
        return unites[baseCalcul] || '';
    },

    setupModals() {
        // Fermeture des modales
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-backdrop') || 
                e.target.classList.contains('modal-close') ||
                e.target.id === 'cancel-article' ||
                e.target.id === 'cancel-metre') {
                this.hideModals();
            }
        });

        // Sauvegarde des formes
        document.getElementById('save-article')?.addEventListener('click', () => {
            this.saveArticle();
        });

        document.getElementById('save-metre')?.addEventListener('click', () => {
            this.saveMetre();
        });
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

    saveArticle() {
        // Simulation - dans un vrai logiciel, cela ajouterait l'article à la structure
        console.log('Article ajouté (simulation)');
        this.hideModals();
        // Ici on pourrait recalculer et re-rendre l'arborescence
    },

    saveMetre() {
        // Simulation - dans un vrai logiciel, cela ajouterait le métré à la structure
        console.log('Métré ajouté (simulation)');
        this.hideModals();
        // Ici on pourrait recalculer et re-rendre l'arborescence
    },

    addDemoCSS() {
        if (document.getElementById('chiffrage-demo-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'chiffrage-demo-styles';
        styles.textContent = `
            /* Styles pour la démo de chiffrage */
            .chiffrage-toolbar {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--space-4);
                margin: var(--space-6) 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: var(--space-4);
            }
            
            .toolbar-left, .toolbar-right {
                display: flex;
                gap: var(--space-4);
                align-items: center;
                flex-wrap: wrap;
            }
            
            .project-info, .client-info {
                font-size: var(--font-size-sm);
                color: var(--text-secondary);
                padding: var(--space-2) var(--space-3);
                background: var(--bg-dark);
                border-radius: var(--radius-sm);
            }
            
            .client-badge {
                font-size: var(--font-size-sm);
                color: var(--success-color);
                padding: var(--space-2) var(--space-3);
                background: rgba(76, 175, 80, 0.1);
                border: 1px solid var(--success-color);
                border-radius: var(--radius-sm);
                font-weight: 600;
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.7; }
            }
            
            .chiffrage-interface {
                background: var(--bg-card);
                border-radius: var(--radius-lg);
                padding: var(--space-6);
                margin: var(--space-6) 0;
            }
            
            .chiffrage-layout {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-6);
                min-height: 600px;
            }
            
            .chiffrage-tree, .chiffrage-details {
                background: var(--bg-dark);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                overflow: hidden;
            }
            
            .tree-header, .details-header {
                background: var(--bg-medium);
                padding: var(--space-4);
                border-bottom: 1px solid var(--border-color);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .tree-content {
                max-height: 500px;
                overflow-y: auto;
                padding: var(--space-2);
            }
            
            .tree-item {
                margin: var(--space-1) 0;
                border-radius: var(--radius-sm);
                transition: var(--transition-fast);
                cursor: pointer;
            }
            
            .tree-item:hover {
                background: var(--bg-card-hover);
            }
            
            .tree-item.selected {
                background: var(--primary-color);
                color: var(--text-inverse);
            }
            
            .tree-item-content {
                display: flex;
                align-items: center;
                gap: var(--space-2);
                padding: var(--space-2) var(--space-3);
                font-size: var(--font-size-sm);
            }
            
            .tree-expand {
                cursor: pointer;
                width: 20px;
                text-align: center;
            }
            
            .tree-label {
                flex: 1;
                font-weight: 500;
            }
            
            .tree-type {
                font-size: var(--font-size-xs);
                padding: var(--space-1) var(--space-2);
                background: var(--secondary-color);
                color: white;
                border-radius: var(--radius-sm);
                font-weight: 600;
            }
            
            .tree-level-1 .tree-item-content {
                padding-left: var(--space-6);
            }
            
            .tree-level-2 .tree-item-content {
                padding-left: var(--space-10);
            }
            
            .tree-level-3 .tree-item-content {
                padding-left: var(--space-12);
            }
            
            .details-content {
                padding: var(--space-4);
                max-height: 500px;
                overflow-y: auto;
            }
            
            .empty-selection {
                text-align: center;
                color: var(--text-muted);
                padding: var(--space-8);
            }
            
            .details-section {
                margin-bottom: var(--space-6);
                padding-bottom: var(--space-4);
                border-bottom: 1px solid var(--border-color);
            }
            
            .details-section:last-child {
                border-bottom: none;
                margin-bottom: 0;
            }
            
            .details-section h4 {
                margin-bottom: var(--space-4);
                color: var(--primary-color);
                font-size: var(--font-size-lg);
            }
            
            .details-grid, .stats-grid, .calculs-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-3);
            }
            
            .detail-item, .stat-item, .calcul-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--space-2);
                background: var(--bg-card);
                border-radius: var(--radius-sm);
                font-size: var(--font-size-sm);
            }
            
            .detail-item label, .stat-item label, .calcul-item label {
                font-weight: 600;
                color: var(--text-secondary);
            }
            
            .calcul-value {
                font-weight: bold;
                color: var(--primary-color);
            }
            
            .calcul-item.highlight, .stat-item.highlight {
                background: var(--primary-color);
                color: var(--text-inverse);
            }
            
            .calcul-automatique {
                background: var(--bg-medium);
                padding: var(--space-4);
                border-radius: var(--radius-md);
                margin: var(--space-4) 0;
            }
            
            .calcul-formule {
                text-align: center;
                margin-bottom: var(--space-3);
            }
            
            .formule-text {
                font-family: 'Courier New', monospace;
                background: var(--bg-dark);
                padding: var(--space-2) var(--space-4);
                border-radius: var(--radius-sm);
                color: var(--primary-color);
                font-weight: bold;
            }
            
            .calcul-resultat {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .resultat-value {
                font-size: var(--font-size-xl);
                font-weight: bold;
                color: var(--success-color);
            }
            
            .calcul-description {
                margin-top: var(--space-4);
                padding: var(--space-3);
                background: var(--bg-card);
                border-radius: var(--radius-sm);
                font-size: var(--font-size-sm);
                color: var(--text-secondary);
            }
            
            .composition-list {
                max-height: 200px;
                overflow-y: auto;
                background: var(--bg-card);
                border-radius: var(--radius-sm);
                padding: var(--space-3);
            }
            
            .composition-item {
                padding: var(--space-1) 0;
                font-size: var(--font-size-sm);
                border-bottom: 1px solid var(--border-color);
            }
            
            .composition-item:last-child {
                border-bottom: none;
            }
            
            .composition-item.metre {
                color: var(--accent-color);
                font-weight: 600;
            }
            
            .composition-item.group {
                color: var(--primary-color);
                font-weight: 600;
            }
            
            .details-actions {
                display: flex;
                gap: var(--space-2);
                margin-top: var(--space-4);
                flex-wrap: wrap;
            }
            
            .chiffrage-summary {
                background: var(--bg-card);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                padding: var(--space-6);
                margin-top: var(--space-6);
            }
            
            .chiffrage-summary h3 {
                margin-bottom: var(--space-4);
                color: var(--primary-color);
            }
            
            .summary-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: var(--space-4);
            }
            
            .summary-item {
                background: var(--bg-dark);
                padding: var(--space-4);
                border-radius: var(--radius-md);
                text-align: center;
                border: 1px solid var(--border-color);
            }
            
            .summary-item.highlight {
                background: var(--secondary-color);
                color: white;
            }
            
            .summary-item.final {
                background: var(--primary-color);
                color: white;
                font-weight: bold;
            }
            
            .summary-label {
                font-size: var(--font-size-sm);
                color: var(--text-secondary);
                margin-bottom: var(--space-2);
            }
            
            .summary-item.highlight .summary-label,
            .summary-item.final .summary-label {
                color: rgba(255, 255, 255, 0.8);
            }
            
            .summary-value {
                font-size: var(--font-size-xl);
                font-weight: bold;
            }
            
            /* Modales */
            .modal {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: var(--z-modal);
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal.modal-visible {
                opacity: 1;
            }
            
            .modal-backdrop {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(4px);
            }
            
            .modal-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: var(--bg-dark);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-lg);
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
            }
            
            .modal-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: var(--space-6);
                border-bottom: 1px solid var(--border-color);
            }
            
            .modal-close {
                background: none;
                border: none;
                font-size: var(--font-size-2xl);
                color: var(--text-secondary);
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .modal-body {
                padding: var(--space-6);
            }
            
            .modal-footer {
                display: flex;
                justify-content: flex-end;
                gap: var(--space-3);
                padding: var(--space-6);
                border-top: 1px solid var(--border-color);
            }
            
            .form-group {
                margin-bottom: var(--space-4);
            }
            
            .form-group label {
                display: block;
                margin-bottom: var(--space-2);
                font-weight: 600;
                color: var(--text-primary);
            }
            
            .form-group input,
            .form-group select,
            .form-group textarea {
                width: 100%;
                padding: var(--space-3);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-sm);
                background: var(--bg-medium);
                color: var(--text-primary);
                font-size: var(--font-size-base);
            }
            
            .form-group input:focus,
            .form-group select:focus,
            .form-group textarea:focus {
                outline: none;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
            }
            
            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-4);
            }
            
            .text-danger {
                color: var(--error-color);
            }
            
            /* Responsive */
            @media (max-width: 1024px) {
                .chiffrage-layout {
                    grid-template-columns: 1fr;
                }
                
                .summary-grid {
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                }
            }
            
            @media (max-width: 768px) {
                .chiffrage-toolbar {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .toolbar-left, .toolbar-right {
                    justify-content: center;
                }
                
                .details-grid, .stats-grid, .calculs-grid {
                    grid-template-columns: 1fr;
                }
                
                .form-row {
                    grid-template-columns: 1fr;
                }
                
                .modal-content {
                    width: 95%;
                }
            }
        `;
        
        document.head.appendChild(styles);
    },

    /**
     * Ajouter les styles CSS pour l'accès refusé
     */
    addAccessDeniedCSS() {
        if (document.getElementById('access-denied-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'access-denied-styles';
        styles.textContent = `
            .access-denied {
                min-height: 80vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .access-denied-content {
                text-align: center;
                max-width: 600px;
                margin: 0 auto;
                padding: var(--space-8);
                background: var(--bg-card);
                border: 2px solid var(--border-color);
                border-radius: var(--radius-xl);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            }
            
            .access-denied-icon {
                font-size: 4rem;
                margin-bottom: var(--space-6);
                animation: bounce 2s infinite;
            }
            
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-10px); }
                60% { transform: translateY(-5px); }
            }
            
            .access-denied-content h1 {
                color: var(--primary-color);
                margin-bottom: var(--space-4);
                font-size: var(--font-size-3xl);
            }
            
            .access-denied-message {
                color: var(--text-secondary);
                font-size: var(--font-size-lg);
                margin-bottom: var(--space-8);
                line-height: var(--line-height-relaxed);
            }
            
            .access-denied-actions {
                display: flex;
                gap: var(--space-4);
                justify-content: center;
                margin-bottom: var(--space-8);
                flex-wrap: wrap;
            }
            
            .access-denied-help {
                border-top: 1px solid var(--border-color);
                padding-top: var(--space-6);
            }
            
            .access-denied-help h3 {
                color: var(--text-primary);
                margin-bottom: var(--space-6);
            }
            
            .help-steps {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: var(--space-4);
                margin-bottom: var(--space-6);
            }
            
            .help-step {
                background: var(--bg-dark);
                padding: var(--space-4);
                border-radius: var(--radius-md);
                border: 1px solid var(--border-color);
            }
            
            .step-number {
                display: inline-block;
                width: 30px;
                height: 30px;
                background: var(--primary-color);
                color: white;
                border-radius: var(--radius-full);
                text-align: center;
                line-height: 30px;
                font-weight: bold;
                margin-bottom: var(--space-3);
            }
            
            .help-step p {
                margin: 0;
                color: var(--text-secondary);
                font-size: var(--font-size-sm);
            }
            
            .help-contact {
                margin-top: var(--space-6);
            }
            
            .help-contact p {
                color: var(--text-secondary);
                margin-bottom: var(--space-4);
            }
            
            .contact-links {
                display: flex;
                gap: var(--space-4);
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .contact-link {
                color: var(--primary-color);
                text-decoration: none;
                padding: var(--space-3) var(--space-4);
                border: 1px solid var(--primary-color);
                border-radius: var(--radius-md);
                transition: var(--transition-fast);
                font-size: var(--font-size-sm);
                font-weight: 500;
            }
            
            .contact-link:hover {
                background: var(--primary-color);
                color: white;
                transform: translateY(-2px);
            }
            
            @media (max-width: 768px) {
                .access-denied-content {
                    padding: var(--space-6);
                    margin: var(--space-4);
                }
                
                .access-denied-actions {
                    flex-direction: column;
                    align-items: center;
                }
                
                .help-steps {
                    grid-template-columns: 1fr;
                }
                
                .contact-links {
                    flex-direction: column;
                    align-items: center;
                }
            }
        `;
        
        document.head.appendChild(styles);
    }
};

console.log('🔧 Page outil de chiffrage chargée');