// js/pages/legal.js - Pages légales complètes

window.pages = window.pages || {};

// =================================
// PAGE MENTIONS LÉGALES
// =================================

window.pages['mentions-legales'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" type="button" aria-label="Retourner à l'accueil">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title">Mentions Légales</h1>
                        <p class="section-subtitle">Informations légales obligatoires</p>
                    </div>

                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>📋 Identification de l'Entreprise</h2>
                            <div class="legal-info">
                                <p><strong>Raison sociale :</strong> ${OweoConfig.company.legalName}</p>
                                <p><strong>Nom commercial :</strong> ${OweoConfig.company.name}</p>
                                <p><strong>Forme juridique :</strong> SASU </p>
                                <p><strong>Capital social :</strong> 500 €</p>
                                <p><strong>SIRET :</strong> 123 456 789 00012</p>
                                <p><strong>Code APE :</strong> 6202A - Conseil en systèmes et logiciels informatiques</p>
                                <p><strong>N° TVA intracommunautaire :</strong> FR12 123456789</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📍 Siège Social</h2>
                            <div class="legal-info">
                                <p><strong>Adresse :</strong><br>
                                ${OweoConfig.contact.address.street}<br>
                                ${OweoConfig.contact.address.postalCode} ${OweoConfig.contact.address.city}<br>
                                ${OweoConfig.contact.address.country}</p>
                                
                                <p><strong>Téléphone :</strong> ${OweoConfig.contact.phone}</p>
                                <p><strong>Email :</strong> ${OweoConfig.contact.email}</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>👨‍💼 Directeur de la Publication</h2>
                            <div class="legal-info">
                                <p><strong>Nom :</strong> Nicolas DUBAIN</p>
                                <p><strong>Qualité :</strong> Gérant</p>
                                <p><strong>Email :</strong> ${OweoConfig.contact.email}</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🌐 Hébergement du Site</h2>
                            <div class="legal-info">
                                <p><strong>Hébergeur :</strong> OVH SAS</p>
                                <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
                                <p><strong>Téléphone :</strong> 1007</p>
                                <p><strong>Site web :</strong> <a href="https://www.ovh.com" target="_blank" rel="noopener">www.ovh.com</a></p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>⚖️ Propriété Intellectuelle</h2>
                            <div class="legal-info">
                                <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.</p>
                                
                                <p>Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
                                
                                <p>La reproduction de tout ou partie de ce site sur un support électronique quelconque est formellement interdite sauf autorisation expresse du directeur de la publication.</p>
                                
                                <p>Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📱 Cookies et Traceurs</h2>
                            <div class="legal-info">
                                <p>Ce site utilise des cookies pour améliorer l'expérience utilisateur et mesurer l'audience.</p>
                                
                                <p><strong>Cookies utilisés :</strong></p>
                                <ul>
                                    <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site</li>
                                    <li><strong>Cookies analytiques :</strong> Google Analytics (si acceptés)</li>
                                    <li><strong>Cookies marketing :</strong> Calendly (si utilisé)</li>
                                </ul>
                                
                                <p>Vous pouvez configurer vos préférences de cookies via notre <a href="#politique-confidentialite" data-nav-item="politique-confidentialite">politique de confidentialité</a>.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>⚠️ Limitation de Responsabilité</h2>
                            <div class="legal-info">
                                <p>Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour à différentes périodes de l'année, mais peut toutefois contenir des inexactitudes ou des omissions.</p>
                                
                                <p>Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à ${OweoConfig.contact.email}.</p>
                                
                                <p>Oweo ne pourra en aucun cas être tenu responsable de tout dommage de quelque nature qu'il soit résultant de l'interprétation ou de l'utilisation des informations et/ou documents disponibles sur ce site.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📧 Contact</h2>
                            <div class="legal-info">
                                <p>Pour toute question relative aux mentions légales, vous pouvez nous contacter :</p>
                                <ul>
                                    <li><strong>Email :</strong> ${OweoConfig.contact.email}</li>
                                    <li><strong>Téléphone :</strong> ${OweoConfig.contact.phone}</li>
                                    <li><strong>Courrier :</strong> ${OweoConfig.contact.address.street}, ${OweoConfig.contact.address.postalCode} ${OweoConfig.contact.address.city}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('⚖️ Mentions légales page initialized');
        this.setupBackButton();
    },

    setupBackButton() {
        if (typeof window.setupBackButton === 'function') {
            window.setupBackButton();
        }
    }
};

// =================================
// PAGE CONDITIONS D'UTILISATION
// =================================

window.pages['conditions-utilisation'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" type="button" aria-label="Retourner à l'accueil">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title">Conditions d'Utilisation</h1>
                        <p class="section-subtitle">Conditions générales d'utilisation du site web</p>
                        <p class="text-muted"><em>Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}</em></p>
                    </div>

                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>📖 Objet</h2>
                            <div class="legal-info">
                                <p>Les présentes conditions générales d'utilisation (CGU) ont pour objet l'encadrement juridique de l'utilisation du site ${OweoConfig.siteName} et de ses services.</p>
                                
                                <p>Ce contrat est conclu entre :</p>
                                <ul>
                                    <li>Le gérant du site internet, ci-après désigné « l'Éditeur »</li>
                                    <li>Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelée « l'Utilisateur »</li>
                                </ul>
                                
                                <p>Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🎯 Accès au Site</h2>
                            <div class="legal-info">
                                <p><strong>Accès libre :</strong> Le site est accessible gratuitement depuis n'importe où par tout Utilisateur ayant un accès à Internet. Tous les frais nécessaires pour l'accès aux services (matériel informatique, connexion Internet...) sont à la charge de l'Utilisateur.</p>
                                
                                <p><strong>Disponibilité :</strong> L'Éditeur se réserve le droit de modifier, suspendre ou interrompre le site à tout moment et sans préavis. Il ne saurait être tenu responsable des conséquences de ces modifications pour l'Utilisateur.</p>
                                
                                <p><strong>Évolution :</strong> L'Éditeur se réserve le droit de faire évoluer les présentes CGU à tout moment. Dans ce cas, la date de mise à jour sera clairement mentionnée.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📋 Services Proposés</h2>
                            <div class="legal-info">
                                <p>Le site ${OweoConfig.siteName} propose les services suivants :</p>
                                <ul>
                                    <li><strong>Information :</strong> Conseils et guides sur la transformation digitale des entreprises de métallurgie</li>
                                    <li><strong>Expertise :</strong> Présentation de solutions ERP et outils de gestion spécialisés</li>
                                    <li><strong>Contact :</strong> Mise en relation pour des prestations de conseil</li>
                                    <li><strong>Ressources :</strong> Documentation et guides téléchargeables</li>
                                </ul>
                                
                                <p>Le site se contente de fournir des informations. Toute prestation de service fait l'objet d'un contrat séparé entre l'Éditeur et le Client.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>👥 Responsabilités de l'Utilisateur</h2>
                            <div class="legal-info">
                                <p>L'Utilisateur s'engage à :</p>
                                <ul>
                                    <li>Utiliser le site conformément aux présentes CGU</li>
                                    <li>Ne pas perturber le bon fonctionnement du site</li>
                                    <li>Respecter les droits de propriété intellectuelle</li>
                                    <li>Ne pas utiliser le site à des fins illégales ou préjudiciables</li>
                                    <li>Fournir des informations exactes lors des prises de contact</li>
                                </ul>
                                
                                <p><strong>Sanctions :</strong> En cas de non-respect des présentes CGU, l'Éditeur se réserve le droit de bloquer l'accès au site à l'Utilisateur.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🛡️ Responsabilités de l'Éditeur</h2>
                            <div class="legal-info">
                                <p><strong>Contenu :</strong> L'Éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.</p>
                                
                                <p><strong>Technique :</strong> L'Éditeur ne saurait être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'Utilisateur s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus.</p>
                                
                                <p><strong>Liens externes :</strong> Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de l'Éditeur.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🔒 Données Personnelles</h2>
                            <div class="legal-info">
                                <p>L'Éditeur s'engage à respecter la réglementation en vigueur applicable au traitement des données personnelles et, en particulier, le règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 applicable à compter du 25 mai 2018 (RGPD).</p>
                                
                                <p>Pour plus d'informations sur le traitement de vos données personnelles, consultez notre <a href="#politique-confidentialite" data-nav-item="politique-confidentialite">Politique de Confidentialité</a>.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>⚖️ Droit Applicable et Juridiction</h2>
                            <div class="legal-info">
                                <p><strong>Droit applicable :</strong> Les présentes CGU sont soumises à l'application du droit français.</p>
                                
                                <p><strong>Langue :</strong> Si les présentes CGU venaient à être traduites en une ou plusieurs langues étrangères, seul le texte français ferait foi en cas de litige.</p>
                                
                                <p><strong>Juridiction :</strong> En cas de litige, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître du litige.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📞 Contact</h2>
                            <div class="legal-info">
                                <p>Pour toute question relative aux présentes CGU, vous pouvez nous contacter :</p>
                                <ul>
                                    <li><strong>Email :</strong> ${OweoConfig.contact.email}</li>
                                    <li><strong>Téléphone :</strong> ${OweoConfig.contact.phone}</li>
                                    <li><strong>Courrier :</strong> ${OweoConfig.contact.address.street}, ${OweoConfig.contact.address.postalCode} ${OweoConfig.contact.address.city}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('📋 Conditions d\'utilisation page initialized');
        this.setupBackButton();
        this.bindInternalLinks();
    },

    setupBackButton() {
        if (typeof window.setupBackButton === 'function') {
            window.setupBackButton();
        }
    },

    bindInternalLinks() {
        // Gérer les liens internes vers d'autres pages légales
        document.querySelectorAll('[data-nav-item]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.navItem;
                
                if (window.router && typeof window.router.navigate === 'function') {
                    window.router.navigate(`/${page}`);
                } else {
                    window.location.hash = page;
                }
            });
        });
    }
};

// =================================
// PAGE POLITIQUE DE CONFIDENTIALITÉ
// =================================

window.pages['politique-confidentialite'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" type="button" aria-label="Retourner à l'accueil">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title">Politique de Confidentialité & Cookies</h1>
                        <p class="section-subtitle">Protection de vos données personnelles - Conformité RGPD</p>
                        <p class="text-muted"><em>Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}</em></p>
                    </div>

                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>🛡️ Engagement de Protection</h2>
                            <div class="legal-info">
                                <p>${OweoConfig.company.name} s'engage à protéger la confidentialité de vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française Informatique et Libertés.</p>
                                
                                <p>Cette politique vous informe sur :</p>
                                <ul>
                                    <li>Les données que nous collectons</li>
                                    <li>Pourquoi nous les collectons</li>
                                    <li>Comment nous les utilisons</li>
                                    <li>Vos droits concernant ces données</li>
                                    <li>Notre utilisation des cookies</li>
                                </ul>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>👤 Responsable du Traitement</h2>
                            <div class="legal-info">
                                <p><strong>Identité :</strong> ${OweoConfig.company.legalName}</p>
                                <p><strong>Adresse :</strong> ${OweoConfig.contact.address.street}, ${OweoConfig.contact.address.postalCode} ${OweoConfig.contact.address.city}</p>
                                <p><strong>Email :</strong> ${OweoConfig.contact.email}</p>
                                <p><strong>Téléphone :</strong> ${OweoConfig.contact.phone}</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📊 Données Collectées</h2>
                            <div class="legal-info">
                                <h3>Données collectées directement :</h3>
                                <ul>
                                    <li><strong>Formulaire de contact :</strong> Nom, prénom, email, téléphone, entreprise, message</li>
                                    <li><strong>Calendly :</strong> Nom, email, téléphone (si fournis)</li>
                                    <li><strong>Newsletter :</strong> Adresse email (si souscription)</li>
                                </ul>
                                
                                <h3>Données collectées automatiquement :</h3>
                                <ul>
                                    <li><strong>Données techniques :</strong> Adresse IP, navigateur, système d'exploitation</li>
                                    <li><strong>Cookies de fonctionnement :</strong> Préférences, session</li>
                                    <li><strong>Statistiques (si acceptées) :</strong> Pages visitées, durée, source de trafic</li>
                                </ul>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🎯 Finalités du Traitement</h2>
                            <div class="legal-info">
                                <p>Nous utilisons vos données pour :</p>
                                
                                <div class="purpose-item">
                                    <h4>📞 Répondre à vos demandes</h4>
                                    <ul>
                                        <li><strong>Base légale :</strong> Intérêt légitime</li>
                                        <li><strong>Durée :</strong> 3 ans après dernier contact</li>
                                        <li><strong>Finalité :</strong> Service client et suivi commercial</li>
                                    </ul>
                                </div>

                                <div class="purpose-item">
                                    <h4>📈 Améliorer notre site</h4>
                                    <ul>
                                        <li><strong>Base légale :</strong> Consentement (cookies analytiques)</li>
                                        <li><strong>Durée :</strong> 25 mois maximum</li>
                                        <li><strong>Finalité :</strong> Analyse d'audience et optimisation</li>
                                    </ul>
                                </div>

                                <div class="purpose-item">
                                    <h4>📧 Communication marketing</h4>
                                    <ul>
                                        <li><strong>Base légale :</strong> Consentement</li>
                                        <li><strong>Durée :</strong> Jusqu'à désabonnement + 3 ans</li>
                                        <li><strong>Finalité :</strong> Newsletter et offres commerciales</li>
                                    </ul>
                                </div>

                                <div class="purpose-item">
                                    <h4>⚖️ Obligations légales</h4>
                                    <ul>
                                        <li><strong>Base légale :</strong> Obligation légale</li>
                                        <li><strong>Durée :</strong> Selon obligations (ex: 10 ans comptabilité)</li>
                                        <li><strong>Finalité :</strong> Respect des obligations fiscales et comptables</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🔐 Vos Droits RGPD</h2>
                            <div class="legal-info">
                                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                                
                                <div class="rights-grid">
                                    <div class="right-item">
                                        <h4>📖 Droit d'accès</h4>
                                        <p>Connaître les données que nous avons sur vous</p>
                                    </div>
                                    
                                    <div class="right-item">
                                        <h4>✏️ Droit de rectification</h4>
                                        <p>Corriger des données inexactes ou incomplètes</p>
                                    </div>
                                    
                                    <div class="right-item">
                                        <h4>🗑️ Droit d'effacement</h4>
                                        <p>Demander la suppression de vos données</p>
                                    </div>
                                    
                                    <div class="right-item">
                                        <h4>⏸️ Droit de limitation</h4>
                                        <p>Limiter le traitement de vos données</p>
                                    </div>
                                    
                                    <div class="right-item">
                                        <h4>📦 Droit de portabilité</h4>
                                        <p>Récupérer vos données dans un format standard</p>
                                    </div>
                                    
                                    <div class="right-item">
                                        <h4>🚫 Droit d'opposition</h4>
                                        <p>Vous opposer au traitement de vos données</p>
                                    </div>
                                </div>
                                
                                <div class="exercise-rights">
                                    <h4>💬 Exercer vos droits</h4>
                                    <p>Pour exercer ces droits, contactez-nous :</p>
                                    <ul>
                                        <li><strong>Email :</strong> ${OweoConfig.contact.email}</li>
                                        <li><strong>Courrier :</strong> ${OweoConfig.contact.address.street}, ${OweoConfig.contact.address.postalCode} ${OweoConfig.contact.address.city}</li>
                                    </ul>
                                    <p><em>Nous vous répondrons dans un délai maximum d'1 mois.</em></p>
                                </div>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🍪 Politique des Cookies</h2>
                            <div class="legal-info">
                                <h3>Qu'est-ce qu'un cookie ?</h3>
                                <p>Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site web. Il permet de vous reconnaître lors de votre prochaine visite.</p>
                                
                                <h3>Types de cookies utilisés :</h3>
                                
                                <div class="cookie-category">
                                    <h4>🔧 Cookies techniques (obligatoires)</h4>
                                    <p><strong>Finalité :</strong> Fonctionnement du site</p>
                                    <p><strong>Durée :</strong> Session ou 1 an maximum</p>
                                    <p><strong>Exemples :</strong> Préférences, panier, session utilisateur</p>
                                    <p><em>Ces cookies ne nécessitent pas votre consentement.</em></p>
                                </div>

                                <div class="cookie-category">
                                    <h4>📊 Cookies analytiques (optionnels)</h4>
                                    <p><strong>Finalité :</strong> Mesure d'audience</p>
                                    <p><strong>Service :</strong> Google Analytics</p>
                                    <p><strong>Durée :</strong> 25 mois maximum</p>
                                    <p><strong>Données :</strong> Pages vues, durée, source de trafic (anonymisées)</p>
                                </div>

                                <div class="cookie-category">
                                    <h4>📅 Cookies tiers (optionnels)</h4>
                                    <p><strong>Calendly :</strong> Planification de rendez-vous</p>
                                    <p><strong>Finalité :</strong> Améliorer l'expérience de prise de rendez-vous</p>
                                    <p><strong>Durée :</strong> Selon politique Calendly</p>
                                </div>

                                <h3>⚙️ Gestion des cookies</h3>
                                <p>Vous pouvez contrôler et gérer les cookies de plusieurs façons :</p>
                                <ul>
                                    <li><strong>Bandeau de consentement :</strong> Lors de votre première visite</li>
                                    <li><strong>Paramètres navigateur :</strong> Bloquer/supprimer les cookies</li>
                                    <li><strong>Outils dédiés :</strong> YourOnlineChoices.eu</li>
                                </ul>

                                <div class="cookie-consent-panel">
                                    <h4>🎛️ Mes préférences cookies</h4>
                                    <button class="btn btn-primary" onclick="window.showCookieConsent && window.showCookieConsent()">
                                        Gérer mes préférences
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🔒 Sécurité des Données</h2>
                            <div class="legal-info">
                                <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :</p>
                                <ul>
                                    <li><strong>Chiffrement :</strong> HTTPS sur tout le site</li>
                                    <li><strong>Accès limité :</strong> Seules les personnes autorisées accèdent aux données</li>
                                    <li><strong>Sauvegarde :</strong> Sauvegardes régulières et sécurisées</li>
                                    <li><strong>Mise à jour :</strong> Systèmes et logiciels régulièrement mis à jour</li>
                                    <li><strong>Formation :</strong> Sensibilisation à la protection des données</li>
                                </ul>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🌍 Transferts de Données</h2>
                            <div class="legal-info">
                                <p><strong>Principe :</strong> Vos données sont principalement traitées en Union Européenne.</p>
                                
                                <p><strong>Services tiers :</strong> Certains services peuvent impliquer des transferts hors UE :</p>
                                <ul>
                                    <li><strong>Google Analytics :</strong> États-Unis (clauses contractuelles types)</li>
                                    <li><strong>Calendly :</strong> États-Unis (clauses contractuelles types)</li>
                                </ul>
                                
                                <p>Ces transferts sont encadrés par des garanties appropriées conformément au RGPD.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📞 Contact DPO</h2>
                            <div class="legal-info">
                                <p>Pour toute question relative à la protection de vos données personnelles :</p>
                                
                                <div class="contact-dpo">
                                    <p><strong>Délégué à la Protection des Données :</strong> Nicolas DUBAIN</p>
                                    <p><strong>Email :</strong> dpo@oweo-consulting.fr</p>
                                    <p><strong>Courrier :</strong> DPO - ${OweoConfig.contact.address.street}, ${OweoConfig.contact.address.postalCode} ${OweoConfig.contact.address.city}</p>
                                </div>
                                
                                <p><strong>Réclamation :</strong> Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :</p>
                                <ul>
                                    <li><strong>Site web :</strong> <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a></li>
                                    <li><strong>Adresse :</strong> CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</li>
                                    <li><strong>Téléphone :</strong> 01 53 73 22 22</li>
                                </ul>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🔄 Modifications</h2>
                            <div class="legal-info">
                                <p>Cette politique de confidentialité peut être modifiée à tout moment pour refléter les changements dans nos pratiques ou pour des raisons légales.</p>
                                
                                <p>En cas de modification substantielle, nous vous en informerons par :</p>
                                <ul>
                                    <li>Une notification sur le site web</li>
                                    <li>Un email si vous êtes abonné à notre newsletter</li>
                                    <li>Mise à jour de la date en haut de cette page</li>
                                </ul>
                                
                                <p>Nous vous encourageons à consulter régulièrement cette page.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('🔒 Politique de confidentialité page initialized');
        this.setupBackButton();
        this.bindInternalLinks();
        this.setupCookieConsent();
    },

    setupBackButton() {
        if (typeof window.setupBackButton === 'function') {
            window.setupBackButton();
        }
    },

    bindInternalLinks() {
        document.querySelectorAll('[data-nav-item]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = link.dataset.navItem;
                
                if (window.router && typeof window.router.navigate === 'function') {
                    window.router.navigate(`/${page}`);
                } else {
                    window.location.hash = page;
                }
            });
        });
    },

    setupCookieConsent() {
        // Fonction pour afficher le panneau de consentement des cookies
        window.showCookieConsent = function() {
            // Ici on pourrait intégrer un vrai système de gestion des cookies
            alert('Panneau de gestion des cookies\n\nFonctionnalité à implémenter avec une vraie solution comme Axeptio, Onetrust, ou développement custom.');
        };
    }
};

// =================================
// PAGE CONDITIONS GÉNÉRALES (optionnelle)
// =================================

window.pages['conditions-generales'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" type="button" aria-label="Retourner à l'accueil">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title">Conditions Générales de Vente</h1>
                        <p class="section-subtitle">Conditions applicables aux prestations de conseil</p>
                        <p class="text-muted"><em>Dernière mise à jour : ${new Date().toLocaleDateString('fr-FR')}</em></p>
                    </div>

                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>📋 Préambule</h2>
                            <div class="legal-info">
                                <p>Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de conseil proposées par ${OweoConfig.company.legalName}, ci-après dénommée « Oweo ».</p>
                                
                                <p>Elles définissent les droits et obligations des parties dans le cadre de la vente de prestations de conseil en transformation digitale et déploiement de solutions ERP.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🎯 Champ d'Application</h2>
                            <div class="legal-info">
                                <p><strong>Prestations concernées :</strong></p>
                                <ul>
                                    <li>Diagnostic et audit organisationnel</li>
                                    <li>Conseil en transformation digitale</li>
                                    <li>Accompagnement sélection ERP</li>
                                    <li>Gestion de projet de déploiement</li>
                                    <li>Formation et support</li>
                                </ul>
                                
                                <p><strong>Clients concernés :</strong> Entreprises, professionnels et collectivités.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>💰 Tarifs et Modalités de Paiement</h2>
                            <div class="legal-info">
                                <h3>Tarification</h3>
                                <ul>
                                    <li><strong>Diagnostic initial :</strong> Gratuit (dans la limite de 5 par mois)</li>
                                    <li><strong>Prestations de conseil :</strong> Tarif jour selon devis personnalisé</li>
                                    <li><strong>Accompagnement projet :</strong> Forfait ou régie selon nature du projet</li>
                                </ul>
                                
                                <h3>Modalités de paiement</h3>
                                <ul>
                                    <li><strong>Délai :</strong> 30 jours fin de mois</li>
                                    <li><strong>Modalités :</strong> Virement bancaire</li>
                                    <li><strong>Acompte :</strong> 30% à la commande pour projets > 10k€</li>
                                    <li><strong>Facturation :</strong> Mensuelle ou selon jalons définis</li>
                                </ul>
                                
                                <h3>Retard de paiement</h3>
                                <p>En cas de retard de paiement, des pénalités sont applicables au taux de 3 fois le taux légal, majorées d'une indemnité forfaitaire de 40€.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>📝 Commande et Devis</h2>
                            <div class="legal-info">
                                <p><strong>Processus :</strong></p>
                                <ol>
                                    <li>Diagnostic initial gratuit</li>
                                    <li>Proposition commerciale détaillée</li>
                                    <li>Validation par bon de commande signé</li>
                                    <li>Démarrage de la prestation</li>
                                </ol>
                                
                                <p><strong>Validité des devis :</strong> 30 jours</p>
                                <p><strong>Modification :</strong> Tout changement de périmètre fait l'objet d'un avenant.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🎯 Obligations des Parties</h2>
                            <div class="legal-info">
                                <h3>Obligations d'Oweo</h3>
                                <ul>
                                    <li>Réaliser les prestations avec diligence et compétence</li>
                                    <li>Respecter les délais convenus</li>
                                    <li>Livrer les documents et livrables prévus</li>
                                    <li>Conseiller le client selon l'état de l'art</li>
                                    <li>Respecter la confidentialité</li>
                                </ul>
                                
                                <h3>Obligations du Client</h3>
                                <ul>
                                    <li>Fournir les informations nécessaires</li>
                                    <li>Donner accès aux locaux et systèmes</li>
                                    <li>Désigner un interlocuteur principal</li>
                                    <li>Respecter les échéances de paiement</li>
                                    <li>Valider les livrables dans les délais</li>
                                </ul>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>⚠️ Responsabilité et Garanties</h2>
                            <div class="legal-info">
                                <h3>Limitation de responsabilité</h3>
                                <p>La responsabilité d'Oweo est limitée au montant des honoraires perçus au titre du contrat concerné.</p>
                                
                                <h3>Garanties</h3>
                                <ul>
                                    <li><strong>Garantie de conformité :</strong> 3 mois après livraison</li>
                                    <li><strong>Support :</strong> 6 mois de support inclus</li>
                                    <li><strong>Résultats :</strong> Obligation de moyens renforcée</li>
                                </ul>
                                
                                <h3>Exclusions</h3>
                                <p>Oweo ne peut être tenu responsable des conséquences d'un défaut de collaboration du client ou de l'utilisation non conforme des recommandations.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🔒 Confidentialité et Propriété Intellectuelle</h2>
                            <div class="legal-info">
                                <h3>Confidentialité</h3>
                                <p>Oweo s'engage à respecter la confidentialité de toutes les informations communiquées par le client.</p>
                                
                                <h3>Propriété intellectuelle</h3>
                                <ul>
                                    <li><strong>Méthodes Oweo :</strong> Restent propriété d'Oweo</li>
                                    <li><strong>Développements spécifiques :</strong> Propriété du client sauf accord contraire</li>
                                    <li><strong>Documentation :</strong> Licence d'utilisation accordée au client</li>
                                </ul>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🔄 Résiliation</h2>
                            <div class="legal-info">
                                <h3>Résiliation de plein droit</h3>
                                <ul>
                                    <li>Non-paiement après mise en demeure</li>
                                    <li>Non-respect des obligations contractuelles</li>
                                    <li>Procédure collective</li>
                                </ul>
                                
                                <h3>Résiliation amiable</h3>
                                <p>Possible par accord écrit des parties avec règlement des prestations réalisées.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>⚖️ Dispositions Générales</h2>
                            <div class="legal-info">
                                <p><strong>Droit applicable :</strong> Droit français</p>
                                <p><strong>Juridiction :</strong> Tribunaux de Nantes</p>
                                <p><strong>Intégralité :</strong> Les CGV constituent l'intégralité de l'accord</p>
                                <p><strong>Modification :</strong> Par avenant écrit uniquement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('💼 Conditions générales page initialized');
        this.setupBackButton();
    },

    setupBackButton() {
        if (typeof window.setupBackButton === 'function') {
            window.setupBackButton();
        }
    }
};

// =================================
// PAGE COMPLIANCE (optionnelle)
// =================================

window.pages['compliance'] = {
    render() {
        return `
            <section class="section">
                <div class="container">
                    <button class="btn-back" type="button" aria-label="Retourner à l'accueil">← Retour</button>
                    
                    <div class="section-header">
                        <h1 class="section-title">Compliance & Certifications</h1>
                        <p class="section-subtitle">Nos engagements qualité et conformité</p>
                    </div>

                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>🏆 Certifications et Qualifications</h2>
                            <div class="legal-info">
                                <h3>Certifications métier</h3>
                                <ul>
                                    <li><strong>Sage X3 :</strong> Consultant certifié</li>
                                    <li><strong>Microsoft Partner :</strong> Solutions partenaires</li>
                                    <li><strong>EN1090 :</strong> Expert en conformité qualité</li>
                                </ul>
                                
                                <h3>Formations continues</h3>
                                <p>Nos consultants suivent régulièrement des formations pour maintenir leur expertise à jour sur les dernières évolutions technologiques et réglementaires.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🔐 Sécurité Informatique</h2>
                            <div class="legal-info">
                                <h3>Mesures de protection</h3>
                                <ul>
                                    <li><strong>Chiffrement :</strong> Toutes les communications sont chiffrées</li>
                                    <li><strong>Accès sécurisé :</strong> VPN et authentification forte</li>
                                    <li><strong>Sauvegarde :</strong> Données sauvegardées quotidiennement</li>
                                    <li><strong>Antivirus :</strong> Protection en temps réel</li>
                                </ul>
                                
                                <h3>Conformité RGPD</h3>
                                <p>Nous respectons scrupuleusement le RGPD et appliquons le principe de privacy by design dans tous nos projets.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🎯 Déontologie Professionnelle</h2>
                            <div class="legal-info">
                                <h3>Code de conduite</h3>
                                <ul>
                                    <li><strong>Intégrité :</strong> Conseil impartial et objectif</li>
                                    <li><strong>Confidentialité :</strong> Secret professionnel absolu</li>
                                    <li><strong>Compétence :</strong> Intervention dans notre domaine d'expertise</li>
                                    <li><strong>Transparence :</strong> Information claire sur nos méthodes</li>
                                </ul>
                                
                                <h3>Conflits d'intérêts</h3>
                                <p>Nous déclarons systématiquement tout conflit d'intérêt potentiel et nous nous abstenons d'intervenir le cas échéant.</p>
                            </div>
                        </div>

                        <div class="legal-section">
                            <h2>🌱 Responsabilité Sociétale</h2>
                            <div class="legal-info">
                                <h3>Engagement environnemental</h3>
                                <ul>
                                    <li><strong>Numérique responsable :</strong> Optimisation énergétique des solutions</li>
                                    <li><strong>Déplacements :</strong> Privilégier le télétravail quand possible</li>
                                    <li><strong>Dématérialisation :</strong> Réduction de l'usage papier</li>
                                </ul>
                                
                                <h3>Impact social</h3>
                                <ul>
                                    <li><strong>Formation :</strong> Transfert de compétences aux équipes clients</li>
                                    <li><strong>Emploi local :</strong> Priorité aux fournisseurs locaux</li>
                                    <li><strong>Accessibilité :</strong> Solutions inclusives</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    init() {
        console.log('🏆 Compliance page initialized');
        this.setupBackButton();
    },

    setupBackButton() {
        if (typeof window.setupBackButton === 'function') {
            window.setupBackButton();
        }
    }
};

console.log('⚖️ Legal pages loaded successfully');