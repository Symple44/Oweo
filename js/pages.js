// js/pages.js

window.pages = {};

// Page d'accueil
window.pages.home = {
    render() {
        return `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">🚀 Hub d'Expertise Digitale</div>
                        <h1 class="gradient-text">Guides & Conseils pour votre Transformation Numérique</h1>
                        <p>Ressources expertes, guides pratiques et conseils personnalisés pour digitaliser efficacement votre entreprise de charpente métallique.</p>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="grid grid-2">
                        ${this.renderExpertiseCards()}
                    </div>
                </div>
            </section>
        `;
    },

    renderExpertiseCards() {
        const cards = [
            {
                icon: '🛠️',
                title: 'Outils de Gestion',
                description: 'Guides complets pour choisir, implémenter et optimiser vos outils de gestion métier.',
                features: ['Comparatifs ERP spécialisés', 'Guide ROI et budgétisation', 'Checklist d\'implémentation', 'Retours d\'expérience terrain'],
                page: 'outils-gestion'
            },
            {
                icon: '💻',
                title: 'Développement & Intégrations',
                description: 'Conseils techniques pour vos projets de développement sur-mesure et intégrations système.',
                features: ['Architectures recommandées', 'Stack technique optimale', 'Gestion de projet dev', 'Bonnes pratiques sécurité'],
                page: 'developpement'
            },
            {
                icon: '📋',
                title: 'Conformité EN1090',
                description: 'Guide complet pour la mise en conformité EN1090 avec solutions digitales adaptées.',
                features: ['Exigences détaillées', 'Solutions digitales conformes', 'Processus de certification', 'Outils de suivi qualité'],
                page: 'en1090'
            },
            {
                icon: '🤖',
                title: 'IA & Innovation',
                description: 'Intégration de l\'intelligence artificielle dans vos processus métier de charpente métallique.',
                features: ['Cas d\'usage IA concrets', 'ROI et faisabilité', 'Technologies émergentes', 'Roadmap d\'implémentation'],
                page: 'ia-projets'
            },
            {
                icon: '⚡',
                title: 'Optimisation Production',
                description: 'Méthodes d\'audit et d\'optimisation de vos flux de production avec le digital.',
                features: ['Audit processus production', 'Identification goulots', 'Solutions lean digitales', 'KPI et tableaux de bord'],
                page: 'optimisation'
            },
            {
                icon: '🎯',
                title: 'Gestion de Projet',
                description: 'Méthodologies éprouvées pour mener à bien vos projets de transformation numérique.',
                features: ['Méthodologies agiles', 'Planification et suivi', 'Gestion des risques', 'Conduite du changement'],
                page: 'gestion-projet'
            }
        ];

        return cards.map(card => `
            <div class="card" onclick="router.navigate('${card.page}')" style="cursor: pointer;">
                <div class="card-icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <ul class="feature-list">
                    ${card.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    },

    init() {
        console.log('Home page initialized');
    }
};

// Page Outils de Gestion
window.pages['outils-gestion'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Outils de Gestion</h2>
                        <p class="section-subtitle">Guides experts pour choisir et implémenter les meilleurs outils de gestion pour votre entreprise</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="outils-articles"></div>

                    <div class="grid grid-4" id="outils-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['outils-gestion'], 'outils-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['outils-gestion'], 'outils-tips');
    }
};

// Page Développement
window.pages['developpement'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Développement & Intégrations</h2>
                        <p class="section-subtitle">Conseils techniques et bonnes pratiques pour vos projets de développement spécifique</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="dev-articles"></div>

                    <div class="grid grid-4" id="dev-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['developpement'], 'dev-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['developpement'], 'dev-tips');
    }
};

// Page EN1090
window.pages['en1090'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conformité EN1090</h2>
                        <p class="section-subtitle">Guide complet pour la mise en conformité EN1090 avec solutions digitales</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="en1090-articles"></div>

                    <div class="grid grid-4" id="en1090-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['en1090'], 'en1090-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['en1090'], 'en1090-tips');
    }
};

// Page IA & Projets
window.pages['ia-projets'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">IA & Innovation</h2>
                        <p class="section-subtitle">Intégration de l'intelligence artificielle dans vos processus métier</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="ia-articles"></div>

                    <div class="grid grid-4" id="ia-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['ia-projets'], 'ia-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['ia-projets'], 'ia-tips');
    }
};

// Page Optimisation
window.pages['optimisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Optimisation Production</h2>
                        <p class="section-subtitle">Méthodes d'audit et d'optimisation de vos flux de production avec le digital</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="optimisation-articles"></div>

                    <div class="grid grid-4" id="optimisation-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['optimisation'], 'optimisation-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['optimisation'], 'optimisation-tips');
    }
};

// Page Gestion de Projet
window.pages['gestion-projet'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Gestion de Projet Digital</h2>
                        <p class="section-subtitle">Méthodologies éprouvées pour mener à bien vos projets de transformation numérique</p>
                    </div>
                    
                    <div class="grid grid-3">
                        <div class="tip-card">
                            <h4>🎯 Méthodologie Agile</h4>
                            <p>Adoptez une approche agile avec des sprints courts et des livraisons fréquentes pour réduire les risques.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>📋 Planification</h4>
                            <p>Définissez clairement les objectifs, les livrables et les critères de succès dès le démarrage du projet.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>👥 Équipe Projet</h4>
                            <p>Constituez une équipe mixte avec des profils métier et techniques pour garantir l'adéquation des solutions.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>📊 Suivi Performance</h4>
                            <p>Mettez en place des indicateurs de performance et des points de contrôle réguliers.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>🔄 Conduite du Changement</h4>
                            <p>Accompagnez les utilisateurs avec formation, communication et support pendant la transition.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>⚠️ Gestion des Risques</h4>
                            <p>Identifiez les risques en amont et préparez des plans de contingence pour les scenarios critiques.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('Gestion projet page initialized');
    }
};

// Pages Légales
window.pages['mentions-legales'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Mentions Légales</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Éditeur du site</h3>
                        <p><strong>Oweo</strong><br>
                        Société de conseil en transformation numérique<br>
                        Paris, France<br>
                        Email : contact@oweo.fr<br>
                        Téléphone : +33 1 23 45 67 89</p>

                        <h3>Directeur de publication</h3>
                        <p>Le directeur de la publication est le représentant légal de Oweo.</p>

                        <h3>Hébergement</h3>
                        <p>Ce site est hébergé par :<br>
                        [Nom de l'hébergeur]<br>
                        [Adresse de l'hébergeur]</p>

                        <h3>Propriété intellectuelle</h3>
                        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>

                        <h3>Responsabilité</h3>
                        <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['conditions-utilisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conditions d'Utilisation</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Objet</h3>
                        <p>Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par Oweo et de définir les conditions d'accès et d'utilisation des services par « l'Utilisateur ».</p>

                        <h3>Accès au site</h3>
                        <p>Le site Oweo permet à l'Utilisateur un accès gratuit aux services suivants :</p>
                        <ul>
                            <li>Consultation de guides et articles d'expertise</li>
                            <li>Accès aux conseils en transformation numérique</li>
                            <li>Prise de contact pour des services de conseil</li>
                        </ul>

                        <h3>Acceptation des conditions</h3>
                        <p>L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.</p>

                        <h3>Utilisation appropriée</h3>
                        <p>L'Utilisateur s'engage à utiliser les services de manière loyale et conformément à leur destination. Il s'interdit notamment de :</p>
                        <ul>
                            <li>Porter atteinte aux droits de propriété intellectuelle de Oweo</li>
                            <li>Utiliser les services à des fins illégales ou non autorisées</li>
                            <li>Tenter d'accéder aux systèmes informatiques de manière non autorisée</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['politique-confidentialite'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Politique de Confidentialité & Cookies</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Collecte des données</h3>
                        <p>Oweo s'engage à respecter votre vie privée. Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :</p>
                        <ul>
                            <li>Données de navigation (pages visitées, durée de visite)</li>
                            <li>Données de contact (nom, email, téléphone) uniquement si vous nous contactez</li>
                            <li>Données techniques (adresse IP, navigateur) pour la sécurité</li>
                        </ul>

                        <h3>Utilisation des données</h3>
                        <p>Vos données sont utilisées exclusivement pour :</p>
                        <ul>
                            <li>Répondre à vos demandes de contact</li>
                            <li>Améliorer nos services et contenus</li>
                            <li>Assurer la sécurité du site</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>

                        <h3>Cookies</h3>
                        <p>Notre site utilise des cookies pour :</p>
                        <ul>
                            <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                            <li><strong>Cookies analytiques :</strong> Pour mesurer l'audience (avec votre consentement)</li>
                        </ul>

                        <h3>Vos droits RGPD</h3>
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul>
                            <li>Droit d'accès à vos données</li>
                            <li>Droit de rectification</li>
                            <li>Droit d'effacement</li>
                            <li>Droit de portabilité</li>
                            <li>Droit d'opposition</li>
                        </ul>
                        <p>Pour exercer ces droits, contactez-nous à : contact@oweo.fr</p>

                        <h3>Conservation des données</h3>
                        <p>Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect de la réglementation en vigueur.</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['conditions-generales'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conditions Générales</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Services proposés</h3>
                        <p>Oweo propose les services suivants :</p>
                        <ul>
                            <li>Conseil en transformation numérique pour entreprises de charpente métallique</li>
                            <li>Accompagnement dans le choix d'outils de gestion</li>
                            <li>Expertise en développement et intégrations</li>
                            <li>Conseil en conformité EN1090</li>
                            <li>Projets d'intelligence artificielle appliquée</li>
                            <li>Optimisation des processus de production</li>
                        </ul>

                        <h3>Modalités de prestation</h3>
                        <p>Nos prestations de conseil sont réalisées selon les modalités suivantes :</p>
                        <ul>
                            <li>Audit préalable des besoins et processus existants</li>
                            <li>Proposition d'une solution adaptée</li>
                            <li>Accompagnement lors de la mise en œuvre</li>
                            <li>Support et formation des équipes</li>
                        </ul>

                        <h3>Tarification</h3>
                        <p>Nos tarifs sont établis sur devis personnalisé en fonction :</p>
                        <ul>
                            <li>De la complexité du projet</li>
                            <li>Du périmètre d'intervention</li>
                            <li>De la durée d'accompagnement souhaitée</li>
                        </ul>

                        <h3>Propriété intellectuelle</h3>
                        <p>Les méthodologies, outils et livrables développés par Oweo restent la propriété exclusive d'Oweo. Les adaptations spécifiques réalisées pour le client deviennent propriété du client.</p>

                        <h3>Responsabilité</h3>
                        <p>Oweo s'engage à mettre en œuvre tous les moyens nécessaires pour atteindre les objectifs définis. Notre responsabilité est limitée au montant des honoraires perçus pour la prestation concernée.</p>

                        <h3>Confidentialité</h3>
                        <p>Oweo s'engage à respecter la confidentialité de toutes les informations communiquées par le client dans le cadre de nos prestations.</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['compliance'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Compliance</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Conformité RGPD</h3>
                        <p>Oweo est en conformité avec le Règlement Général sur la Protection des Données (RGPD) :</p>
                        <ul>
                            <li>✅ Registre des traitements de données tenu à jour</li>
                            <li>✅ Procédures de gestion des droits des personnes</li>
                            <li>✅ Mesures de sécurité techniques et organisationnelles</li>
                            <li>✅ Formation de nos équipes aux enjeux de protection des données</li>
                        </ul>

                        <h3>Sécurité des données</h3>
                        <p>Nous mettons en place des mesures de sécurité appropriées :</p>
                        <ul>
                            <li>Chiffrement des données sensibles</li>
                            <li>Accès limité et authentification forte</li>
                            <li>Sauvegardes sécurisées et redondantes</li>
                            <li>Monitoring et détection d'intrusions</li>
                        </ul>

                        <h3>Éthique professionnelle</h3>
                        <p>Oweo respecte un code d'éthique strict :</p>
                        <ul>
                            <li>Transparence dans nos recommandations</li>
                            <li>Indépendance vis-à-vis des fournisseurs</li>
                            <li>Confidentialité des informations clients</li>
                            <li>Objectivité dans nos analyses</li>
                        </ul>

                        <h3>Certifications et normes</h3>
                        <p>Nous nous engageons à respecter les standards de l'industrie :</p>
                        <ul>
                            <li>ISO 27001 pour la sécurité de l'information</li>
                            <li>Méthodologies ITIL pour la gestion des services</li>
                            <li>Principes du développement agile</li>
                            <li>Bonnes pratiques de la cybersécurité</li>
                        </ul>

                        <h3>Audit et contrôle</h3>
                        <p>Nos processus font l'objet d'audits réguliers :</p>
                        <ul>
                            <li>Revue annuelle de nos procédures</li>
                            <li>Tests de sécurité périodiques</li>
                            <li>Évaluation de la satisfaction client</li>
                            <li>Amélioration continue de nos pratiques</li>
                        </ul>

                        <h3>Contact Compliance</h3>
                        <p>Pour toute question relative à la compliance :<br>
                        Email : compliance@oweo.fr<br>
                        DPO : dpo@oweo.fr</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};// js/pages.js

window.pages = {};

// Page d'accueil
window.pages.home = {
    render() {
        return `
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-badge">🚀 Hub d'Expertise Digitale</div>
                        <h1 class="gradient-text">Guides & Conseils pour votre Transformation Numérique</h1>
                        <p>Ressources expertes, guides pratiques et conseils personnalisés pour digitaliser efficacement votre entreprise de charpente métallique.</p>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="grid grid-2">
                        ${this.renderExpertiseCards()}
                    </div>
                </div>
            </section>
        `;
    },

    renderExpertiseCards() {
        const cards = [
            {
                icon: '🛠️',
                title: 'Outils de Gestion',
                description: 'Guides complets pour choisir, implémenter et optimiser vos outils de gestion métier.',
                features: ['Comparatifs ERP spécialisés', 'Guide ROI et budgétisation', 'Checklist d\'implémentation', 'Retours d\'expérience terrain'],
                page: 'outils-gestion'
            },
            {
                icon: '💻',
                title: 'Développement & Intégrations',
                description: 'Conseils techniques pour vos projets de développement sur-mesure et intégrations système.',
                features: ['Architectures recommandées', 'Stack technique optimale', 'Gestion de projet dev', 'Bonnes pratiques sécurité'],
                page: 'developpement'
            },
            {
                icon: '📋',
                title: 'Conformité EN1090',
                description: 'Guide complet pour la mise en conformité EN1090 avec solutions digitales adaptées.',
                features: ['Exigences détaillées', 'Solutions digitales conformes', 'Processus de certification', 'Outils de suivi qualité'],
                page: 'en1090'
            },
            {
                icon: '🤖',
                title: 'IA & Innovation',
                description: 'Intégration de l\'intelligence artificielle dans vos processus métier de charpente métallique.',
                features: ['Cas d\'usage IA concrets', 'ROI et faisabilité', 'Technologies émergentes', 'Roadmap d\'implémentation'],
                page: 'ia-projets'
            },
            {
                icon: '⚡',
                title: 'Optimisation Production',
                description: 'Méthodes d\'audit et d\'optimisation de vos flux de production avec le digital.',
                features: ['Audit processus production', 'Identification goulots', 'Solutions lean digitales', 'KPI et tableaux de bord'],
                page: 'optimisation'
            },
            {
                icon: '🎯',
                title: 'Gestion de Projet',
                description: 'Méthodologies éprouvées pour mener à bien vos projets de transformation numérique.',
                features: ['Méthodologies agiles', 'Planification et suivi', 'Gestion des risques', 'Conduite du changement'],
                page: 'gestion-projet'
            }
        ];

        return cards.map(card => `
            <div class="card" onclick="router.navigate('${card.page}')" style="cursor: pointer;">
                <div class="card-icon">${card.icon}</div>
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <ul class="feature-list">
                    ${card.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    },

    init() {
        console.log('Home page initialized');
    }
};

// Pages Légales
window.pages['mentions-legales'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Mentions Légales</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Éditeur du site</h3>
                        <p><strong>Oweo</strong><br>
                        Société de conseil en transformation numérique<br>
                        Paris, France<br>
                        Email : contact@oweo.fr<br>
                        Téléphone : +33 1 23 45 67 89</p>

                        <h3>Directeur de publication</h3>
                        <p>Le directeur de la publication est le représentant légal de Oweo.</p>

                        <h3>Hébergement</h3>
                        <p>Ce site est hébergé par :<br>
                        [Nom de l'hébergeur]<br>
                        [Adresse de l'hébergeur]</p>

                        <h3>Propriété intellectuelle</h3>
                        <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>

                        <h3>Responsabilité</h3>
                        <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['conditions-utilisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conditions d'Utilisation</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Objet</h3>
                        <p>Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par Oweo et de définir les conditions d'accès et d'utilisation des services par « l'Utilisateur ».</p>

                        <h3>Accès au site</h3>
                        <p>Le site Oweo permet à l'Utilisateur un accès gratuit aux services suivants :</p>
                        <ul>
                            <li>Consultation de guides et articles d'expertise</li>
                            <li>Accès aux conseils en transformation numérique</li>
                            <li>Prise de contact pour des services de conseil</li>
                        </ul>

                        <h3>Acceptation des conditions</h3>
                        <p>L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation ci-après décrites. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.</p>

                        <h3>Utilisation appropriée</h3>
                        <p>L'Utilisateur s'engage à utiliser les services de manière loyale et conformément à leur destination. Il s'interdit notamment de :</p>
                        <ul>
                            <li>Porter atteinte aux droits de propriété intellectuelle de Oweo</li>
                            <li>Utiliser les services à des fins illégales ou non autorisées</li>
                            <li>Tenter d'accéder aux systèmes informatiques de manière non autorisée</li>
                        </ul>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['politique-confidentialite'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Politique de Confidentialité & Cookies</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Collecte des données</h3>
                        <p>Oweo s'engage à respecter votre vie privée. Nous collectons uniquement les données nécessaires au bon fonctionnement de nos services :</p>
                        <ul>
                            <li>Données de navigation (pages visitées, durée de visite)</li>
                            <li>Données de contact (nom, email, téléphone) uniquement si vous nous contactez</li>
                            <li>Données techniques (adresse IP, navigateur) pour la sécurité</li>
                        </ul>

                        <h3>Utilisation des données</h3>
                        <p>Vos données sont utilisées exclusivement pour :</p>
                        <ul>
                            <li>Répondre à vos demandes de contact</li>
                            <li>Améliorer nos services et contenus</li>
                            <li>Assurer la sécurité du site</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>

                        <h3>Cookies</h3>
                        <p>Notre site utilise des cookies pour :</p>
                        <ul>
                            <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                            <li><strong>Cookies analytiques :</strong> Pour mesurer l'audience (avec votre consentement)</li>
                        </ul>

                        <h3>Vos droits RGPD</h3>
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul>
                            <li>Droit d'accès à vos données</li>
                            <li>Droit de rectification</li>
                            <li>Droit d'effacement</li>
                            <li>Droit de portabilité</li>
                            <li>Droit d'opposition</li>
                        </ul>
                        <p>Pour exercer ces droits, contactez-nous à : contact@oweo.fr</p>

                        <h3>Conservation des données</h3>
                        <p>Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées, dans le respect de la réglementation en vigueur.</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['conditions-generales'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conditions Générales</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Services proposés</h3>
                        <p>Oweo propose les services suivants :</p>
                        <ul>
                            <li>Conseil en transformation numérique pour entreprises de charpente métallique</li>
                            <li>Accompagnement dans le choix d'outils de gestion</li>
                            <li>Expertise en développement et intégrations</li>
                            <li>Conseil en conformité EN1090</li>
                            <li>Projets d'intelligence artificielle appliquée</li>
                            <li>Optimisation des processus de production</li>
                        </ul>

                        <h3>Modalités de prestation</h3>
                        <p>Nos prestations de conseil sont réalisées selon les modalités suivantes :</p>
                        <ul>
                            <li>Audit préalable des besoins et processus existants</li>
                            <li>Proposition d'une solution adaptée</li>
                            <li>Accompagnement lors de la mise en œuvre</li>
                            <li>Support et formation des équipes</li>
                        </ul>

                        <h3>Tarification</h3>
                        <p>Nos tarifs sont établis sur devis personnalisé en fonction :</p>
                        <ul>
                            <li>De la complexité du projet</li>
                            <li>Du périmètre d'intervention</li>
                            <li>De la durée d'accompagnement souhaitée</li>
                        </ul>

                        <h3>Propriété intellectuelle</h3>
                        <p>Les méthodologies, outils et livrables développés par Oweo restent la propriété exclusive d'Oweo. Les adaptations spécifiques réalisées pour le client deviennent propriété du client.</p>

                        <h3>Responsabilité</h3>
                        <p>Oweo s'engage à mettre en œuvre tous les moyens nécessaires pour atteindre les objectifs définis. Notre responsabilité est limitée au montant des honoraires perçus pour la prestation concernée.</p>

                        <h3>Confidentialité</h3>
                        <p>Oweo s'engage à respecter la confidentialité de toutes les informations communiquées par le client dans le cadre de nos prestations.</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}
};

window.pages['compliance'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Compliance</h2>
                    </div>
                    
                    <div class="card" style="max-width: 800px; margin: 0 auto;">
                        <h3>Conformité RGPD</h3>
                        <p>Oweo est en conformité avec le Règlement Général sur la Protection des Données (RGPD) :</p>
                        <ul>
                            <li>✅ Registre des traitements de données tenu à jour</li>
                            <li>✅ Procédures de gestion des droits des personnes</li>
                            <li>✅ Mesures de sécurité techniques et organisationnelles</li>
                            <li>✅ Formation de nos équipes aux enjeux de protection des données</li>
                        </ul>

                        <h3>Sécurité des données</h3>
                        <p>Nous mettons en place des mesures de sécurité appropriées :</p>
                        <ul>
                            <li>Chiffrement des données sensibles</li>
                            <li>Accès limité et authentification forte</li>
                            <li>Sauvegardes sécurisées et redondantes</li>
                            <li>Monitoring et détection d'intrusions</li>
                        </ul>

                        <h3>Éthique professionnelle</h3>
                        <p>Oweo respecte un code d'éthique strict :</p>
                        <ul>
                            <li>Transparence dans nos recommandations</li>
                            <li>Indépendance vis-à-vis des fournisseurs</li>
                            <li>Confidentialité des informations clients</li>
                            <li>Objectivité dans nos analyses</li>
                        </ul>

                        <h3>Certifications et normes</h3>
                        <p>Nous nous engageons à respecter les standards de l'industrie :</p>
                        <ul>
                            <li>ISO 27001 pour la sécurité de l'information</li>
                            <li>Méthodologies ITIL pour la gestion des services</li>
                            <li>Principes du développement agile</li>
                            <li>Bonnes pratiques de la cybersécurité</li>
                        </ul>

                        <h3>Audit et contrôle</h3>
                        <p>Nos processus font l'objet d'audits réguliers :</p>
                        <ul>
                            <li>Revue annuelle de nos procédures</li>
                            <li>Tests de sécurité périodiques</li>
                            <li>Évaluation de la satisfaction client</li>
                            <li>Amélioration continue de nos pratiques</li>
                        </ul>

                        <h3>Contact Compliance</h3>
                        <p>Pour toute question relative à la compliance :<br>
                        Email : compliance@oweo.fr<br>
                        DPO : dpo@oweo.fr</p>
                    </div>
                </div>
            </section>
        `;
    },
    init() {}

// Page Outils de Gestion
window.pages['outils-gestion'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Outils de Gestion</h2>
                        <p class="section-subtitle">Guides experts pour choisir et implémenter les meilleurs outils de gestion pour votre entreprise</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="outils-articles"></div>

                    <div class="grid grid-4" id="outils-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['outils-gestion'], 'outils-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['outils-gestion'], 'outils-tips');
    }
};

// Page Développement
window.pages['developpement'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Développement & Intégrations</h2>
                        <p class="section-subtitle">Conseils techniques et bonnes pratiques pour vos projets de développement spécifique</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="dev-articles"></div>

                    <div class="grid grid-4" id="dev-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['developpement'], 'dev-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['developpement'], 'dev-tips');
    }
};

// Page EN1090
window.pages['en1090'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Conformité EN1090</h2>
                        <p class="section-subtitle">Guide complet pour la mise en conformité EN1090 avec solutions digitales</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="en1090-articles"></div>

                    <div class="grid grid-4" id="en1090-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['en1090'], 'en1090-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['en1090'], 'en1090-tips');
    }
};

// Page IA & Projets
window.pages['ia-projets'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">IA & Innovation</h2>
                        <p class="section-subtitle">Intégration de l'intelligence artificielle dans vos processus métier</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="ia-articles"></div>

                    <div class="grid grid-4" id="ia-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['ia-projets'], 'ia-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['ia-projets'], 'ia-tips');
    }
};

// Page Optimisation
window.pages['optimisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Optimisation Production</h2>
                        <p class="section-subtitle">Méthodes d'audit et d'optimisation de vos flux de production avec le digital</p>
                    </div>
                    
                    <div class="grid grid-2 mb-3" id="optimisation-articles"></div>

                    <div class="grid grid-4" id="optimisation-tips"></div>
                </div>
            </section>
        `;
    },

    init() {
        ArticleRenderer.renderArticleGrid(window.ArticlesData['optimisation'], 'optimisation-articles');
        ArticleRenderer.renderTipsGrid(window.TipsData['optimisation'], 'optimisation-tips');
    }
};

// Page Gestion de Projet
window.pages['gestion-projet'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" onclick="router.navigate('home')">← Retour</button>
                    <div class="section-header">
                        <h2 class="section-title gradient-text">Gestion de Projet Digital</h2>
                        <p class="section-subtitle">Méthodologies éprouvées pour mener à bien vos projets de transformation numérique</p>
                    </div>
                    
                    <div class="grid grid-3">
                        <div class="tip-card">
                            <h4>🎯 Méthodologie Agile</h4>
                            <p>Adoptez une approche agile avec des sprints courts et des livraisons fréquentes pour réduire les risques.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>📋 Planification</h4>
                            <p>Définissez clairement les objectifs, les livrables et les critères de succès dès le démarrage du projet.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>👥 Équipe Projet</h4>
                            <p>Constituez une équipe mixte avec des profils métier et techniques pour garantir l'adéquation des solutions.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>📊 Suivi Performance</h4>
                            <p>Mettez en place des indicateurs de performance et des points de contrôle réguliers.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>🔄 Conduite du Changement</h4>
                            <p>Accompagnez les utilisateurs avec formation, communication et support pendant la transition.</p>
                        </div>
                        
                        <div class="tip-card">
                            <h4>⚠️ Gestion des Risques</h4>
                            <p>Identifiez les risques en amont et préparez des plans de contingence pour les scenarios critiques.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('Gestion projet page initialized');
    }
};