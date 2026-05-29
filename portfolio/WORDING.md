# Wording de référence - Portfolio Elliot Infelta

> Document à jour au 29/05/2026. Reflète l'état exact des fichiers `fr.json`, `en.json`, `projectsData.ts`, `timelineData.ts`, `skillsData.ts` et `reviewsData.ts`.

---

## 1. Navigation

| Clé | FR | EN |
|---|---|---|
| `nav.hero` | Présentation | About |
| `nav.experience` | Parcours | Background |
| `nav.skills` | Compétences | Skills |
| `nav.projects` | Projets | Projects |
| `nav.testimonials` | Avis | Reviews |
| `nav.contact` | Contact | Contact |
| `close` | Fermer | Close |
| `languageLabel` | FR | EN |

---

## 2. Section Hero

### Badges
| Clé | FR | EN |
|---|---|---|
| `hero.badgeLocation` | Toufflers · Lille Métropole | Toufflers · Lille Area |
| `hero.badgeAge` | ans *(unité - âge calculé automatiquement depuis `BIRTH_DATE` dans `config.ts`)* | y.o. *(unit - age auto-computed from `BIRTH_DATE` in `config.ts`)* |
| `hero.badgeRole` | Lead Projet · HUGGII | Project Lead · HUGGII |

### Titres & CTA
| Clé | FR | EN |
|---|---|---|
| `hero.role` | Lead Projet & Développeur Full Stack | Project Lead & Full Stack Developer |
| `hero.cta` | Voir mon parcours | See my background |

### Description

**FR :**
> Bonjour, je suis Elliot. À 23 ans, j'évolue au cœur de la métropole lilloise. Mon parcours a débuté dans les lignes de code, là où la logique pure rencontre la création. Aujourd'hui, je suis ce pilier central du projet web : un manager capable de parler le langage des développeurs tout en traduisant les besoins business des clients. Ma vision ? Créer une fusion entre l'innovation technique et l'accompagnement humain.

**EN :**
> Hi, I'm Elliot. At 23, I'm based in the heart of the Lille metropolitan area. My journey began in lines of code, where pure logic meets creation. Today, I am that central pillar of web projects: a manager who speaks the language of developers while translating clients' business needs. My vision? Creating a fusion between technical innovation and human-centered support.

---

## 3. Section Parcours

### Labels UI
| Clé | FR | EN |
|---|---|---|
| `experience.title` | Parcours Professionnel & Académique | Professional & Academic Background |
| `experience.subtitle` | Expériences et formations qui ont façonné mon profil | Experiences and training that shaped my profile |
| `experience.currentBadge` | En cours | Ongoing |
| `experience.experienceTab` | Expériences | Experience |
| `experience.educationTab` | Formations | Education |
| `experience.missions` | Missions | Missions |
| `experience.seeDetails` | Voir le détail | See details |
| `experience.present` | Aujourd'hui | Today |

---

### Expérience 1 - HUGGII · Lead Projet (CDI)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Période :** Sept. 2023 → Aujourd'hui · Roubaix

**Description courte FR :**
> Pilier central des projets web de l'agence. J'assure le lien direct entre les besoins business des clients et l'équipe technique, de la phase d'analyse initiale jusqu'à la livraison. Mes missions incluent le pilotage de projet, la rédaction des devis et cahiers des charges, la formation et le mentorat des collaborateurs, ainsi que le développement d'architectures et de flux complexes. J'intègre l'IA générative (Claude, Claude Code, Gemini) dans mon workflow de développement et de gestion de projet, et j'utilise des agents IA pour optimiser mes tâches quotidiennes.

**Description courte EN :**
> Central pillar of the agency's web projects. I ensure a direct connection between clients' business needs and the technical team, from initial analysis to final delivery. My responsibilities include project management, drafting specifications and quotes, onboarding and mentoring team members, as well as developing robust architectures and complex workflows. I actively integrate generative AI (Claude, Claude Code, Gemini) into my development and project management workflows, and leverage AI agents to optimize my daily tasks.

**Missions FR :**
- Pilotage de projets de A à Z via ClickUp en méthode Agile
- Relation client directe : analyse des besoins, devis, réunions de suivi
- Formation et mentorat des collaborateurs
- Connexion Shopify aux CRM/ERP via API, WebServices, CSV et JSON
- Maintenance serveurs internes, logs et scripts fonctionnels
- Intégration de l'IA (Claude Code, Gemini) dans le workflow de développement
- Utilisation de Claude pour l'analyse, la rédaction et le pilotage de projet
- Déploiement d'agents IA ClickUp pour l'automatisation des tâches récurrentes

**Missions EN :**
- End-to-end project management using ClickUp and Agile methodology
- Direct client communication: requirements analysis, quoting, follow-up meetings
- Onboarding and mentoring of team members
- Shopify integrations with CRM/ERP via API, WebServices, CSV and JSON
- Internal server maintenance, log monitoring and functional scripting
- AI integration (Claude Code, Gemini) into the development workflow
- Using Claude for analysis, writing, and project management
- Deploying ClickUp AI agents to automate recurring tasks

**Tags :** Lead Projet, ClickUp, Agile, Shopify, API, Symfony, Formation, Relation Client, IA Générative, Claude Code, Gemini, Agents IA

---

### Expérience 2 - HUGGII · Développeur PHP (Alternance)
**Rôle FR :** Développeur Web PHP (Alternant) · **EN :** PHP Web Developer (Apprenticeship)  
**Période :** Sept. 2022 → Août 2023 · Roubaix

**Description courte FR :**
> Conception, réalisation et déploiement d'une solution multi-site e-commerce sécurisée sous Symfony. Gestion et automatisation de flux de données complexes (tarifs, produits, commandes) entre l'application et les différents ERP/CRM des clients via des connecteurs API et CSV. Pilotage technique de la migration de projets vers l'écosystème Shopify.

**Description courte EN :**
> Design, development, and deployment of a secure multi-site e-commerce solution using Symfony. Managed and automated complex data workflows (pricing, products, orders) between the application and clients' ERP/CRM systems via API and CSV connectors. Technical lead on project migrations to the Shopify ecosystem.

**Missions FR :**
- Conception d'une solution multi-site e-commerce sécurisée sous Symfony
- Automatisation de flux de données (tarifs, produits, commandes) via API et CSV
- Pilotage technique de la migration de projets vers Shopify

**Missions EN :**
- Design of a secure multi-site e-commerce solution using Symfony
- Automated data workflows (pricing, products, orders) via API and CSV connectors
- Technical lead on project migrations to the Shopify ecosystem

---

### Expérience 3 - Anetmo · Stage
**Rôle FR :** Stagiaire Développeur Web · **EN :** Web Developer Intern  
**Période :** Jan. 2022 → Fév. 2022 · Hem

**Description courte FR :**
> Création, déploiement et maintenance de sites vitrines et e-commerce basés sur WordPress et PrestaShop. Prise en charge directe de la relation client technique pour la présentation des maquettes et l'adaptation des livrables en fonction des spécifications du cahier des charges.

**Description courte EN :**
> Creation, deployment, and maintenance of showcase and e-commerce websites based on WordPress and PrestaShop. Directly managed technical client relations for mockup presentations and adjusted deliverables based on project specifications.

**Missions FR :**
- Création et déploiement de sites vitrines et e-commerce (WordPress, PrestaShop)
- Maintenance et évolutions des sites existants
- Relation client technique : présentation des maquettes et adaptation des livrables

**Missions EN :**
- Creation and deployment of showcase and e-commerce websites (WordPress, PrestaShop)
- Maintenance and updates of existing websites
- Technical client relations: mockup presentations and deliverable adjustments

---

### Expérience 4 - Proditex · Stage
**Rôle FR :** Stagiaire Développeur Web · **EN :** Web Developer Intern  
**Période :** Mai 2021 → Juin 2021 · Leers

**Description courte FR :**
> Développement complet d'une application interne dédiée à la gestion des commandes. Conception de la logique algorithmique, modélisation et administration de la base de données relationnelle SQL, et mise en production de la solution.

**Description courte EN :**
> Full development of an internal order management application. Designed the algorithmic logic, modeled and administered the SQL relational database, and deployed the solution live.

**Missions FR :**
- Développement d'une application interne de gestion des commandes
- Conception de la logique algorithmique et modélisation SQL
- Mise en production de la solution

**Missions EN :**
- Development of an internal order management application
- Algorithmic logic design and SQL database modeling
- Live deployment of the solution

---

### Formation 1 - IUT A · Université de Lille
**Diplôme FR :** Licence Professionnelle DA2I · **EN :** Professional Bachelor's Degree – Software Architecture & Web Integration (DA2I)  
**Période :** 2022 → 2023 · Lille

**Description courte FR :** Approfondissement de l'architecture logicielle, Java et Spring. Méthodes agiles et projet tuteuré.  
**Description courte EN :** Deep dive into software architecture, Java and Spring Framework. Agile methodologies applied in a supervised company project.

**Missions FR :**
- Architecture applicative avancée et patterns de conception
- Java et Spring Framework
- Méthodes agiles appliquées en contexte projet
- Projet tuteuré en entreprise

**Missions EN :**
- Advanced application architecture and design patterns
- Java and Spring Framework
- Agile methodologies in project contexts
- Supervised project within a company

---

### Formation 2 - Lycée Saint Rémi · BTS
**Diplôme FR :** BTS SIO option SLAM · **EN :** Higher National Diploma – IT Solutions & Business Applications (SLAM)  
**Période :** 2020 → 2022 · Roubaix

**Description courte FR :** Développement d'applications (Java, Python, PHP, Symfony) et gestion de bases de données SQL.  
**Description courte EN :** Application development (Java, Python, PHP, Symfony) and SQL database design and management.

**Missions FR :**
- Développement d'applications : Java, Python, PHP, Symfony
- Conception et gestion de bases de données SQL
- Projets de développement en équipe

**Missions EN :**
- Application development: Java, Python, PHP, Symfony
- SQL database design and management
- Team-based development projects

---

### Formation 3 - Lycée Saint Rémi · BAC
**Diplôme FR :** BAC S – Sciences de l'Ingénieur option ISN · **EN :** Scientific Baccalaureate – Engineering Sciences with Digital Technology Specialization (ISN)  
**Période :** 2017 → 2020 · Roubaix

**Description courte FR :** Formation de la pensée logique, mathématique et initiation aux sciences du numérique.  
**Description courte EN :** Development of logical and mathematical thinking with an introduction to computer science and digital technology.

**Missions FR :**
- Mathématiques avancées et Sciences de l'Ingénieur
- Spécialisation ISN : logique algorithmique et résolution de problèmes

**Missions EN :**
- Advanced mathematics and engineering sciences
- ISN specialization: algorithmic logic and problem solving

---

## 4. Section Compétences

### Labels UI
| Clé | FR | EN |
|---|---|---|
| `skills.title` | Expertises & Compétences | Expertise & Skills |
| `skills.subtitle` | Du développement technique au pilotage de projet | From technical development to project management |
| `skills.toggleAll` | Vue globale | Full view |
| `skills.toggleTech` | Vue technique | Technical view |
| `skills.toggleManagement` | Vue management | Management view |

### Intro

**FR :**
> Après 3 ans chez HUGGII, mes compétences couvrent aussi bien l'architecture technique que le pilotage de projet client. Une double casquette que je mets au service de projets e-commerce concrets, de l'analyse des besoins à la mise en production.

**EN :**
> After 3 years at HUGGII, my expertise spans both technical architecture and client project management. A dual profile I bring to every e-commerce project, from requirements analysis to go-live.

---

### Carte 1 - Management & Relation Client
**Sous-titre FR :** Pilotage de projet & soft skills · **EN :** Project management & soft skills

| Groupe FR | Groupe EN | Compétences FR | Compétences EN |
|---|---|---|---|
| Pilotage de Projet | Project Management | Agile / Scrum, ClickUp, Compréhension de CDC, Devis & Chiffrage | Agile / Scrum, ClickUp, Spec Analysis, Quoting & Estimation |
| Relation Client | Client Relations | Relation Client, Écoute active, Communication | Client Relations, Active Listening, Communication |
| Pédagogie & Leadership | Pedagogy & Leadership | Mentorat, Formation, Bilans de compétences | Mentoring, Training, Skills Assessment |
| IA & Workflow | AI & Workflow | Claude (gestion de projet), Agents IA ClickUp | Claude (project management), ClickUp AI Agents |

---

### Carte 2 - Architecture & Développement
**Sous-titre FR :** Back-end, front-end & Shopify · **EN :** Back-end, front-end & Shopify

| Groupe FR | Groupe EN | Compétences |
|---|---|---|
| Back-end | Back-end | PHP / Symfony, Java / Spring, Python, Architecture flux |
| Écosystème Shopify | Shopify Ecosystem | Shopify, Liquid *(logo liquid.svg)*, API Shopify, Apps Shopify |
| Front-end | Front-end | HTML / CSS, JavaScript, React / Next.js, Liquid / Twig *(logo liquid.svg)* |
| IA & LLMs | AI & LLMs | Claude (assistance dev), Claude Code (CLI), Gemini (analyse & génération) |

---

### Carte 3 - Outils & Environnement
**Sous-titre FR :** Data, DevOps & design · **EN :** Data, DevOps & design

| Groupe FR | Groupe EN | Compétences |
|---|---|---|
| Bases de données | Databases | SQL / MySQL, PostgreSQL |
| DevOps & Ops | DevOps & Ops | Git / GitHub, Maintenance & Logs |
| Support & Accès distant | Support & Remote Access | TeamViewer, AnyDesk |
| Design & UX/UI | Design & UX/UI | Figma, UX/UI Design |
| IDEs Agentiques & CLI | Agentic IDEs & CLIs | Antigravity (Google), Claude (application), CLI IA |

---

## 5. Section Projets

### Labels UI
| Clé | FR | EN |
|---|---|---|
| `projects.title` | Projets Réalisés | Completed Projects |
| `projects.subtitle` | Un best-of des projets les plus représentatifs de mon parcours | A curated selection of the most representative projects from my journey |
| `projects.viewDetails` | Voir les détails | View details |
| `projects.visitSite` | Découvrir le projet | View project |
| `projects.techStack` | Outils & Stack | Tools & Stack |
| `projects.objective` | Objectif | Objective |
| `projects.missions` | Missions clés | Key Missions |

> **Structure modale (depuis 28/05/2026) :** chaque projet dispose de `objective` + `missions[]` + `highlights[]` à la place de l'ancien champ `description`. Les `highlights` sont 3 chips (value + label FR/EN).

---

### proj1 - Julien Faure (2026)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Migration B2B · Synchronisation Sage · **EN :** B2B Migration · Sage Synchronization

**Objectif FR :** Moderniser l'image de marque et l'expérience utilisateur tout en conservant les habitudes et automatisations métier complexes.  
**Objectif EN :** Modernize the brand image and user experience while preserving complex business habits and automations.

**Missions FR :**
- Interconnexion automatisée avec l'ERP Sage X3 via échange de fichiers à plat.
- Interface moderne respectant les flux de commande spécifiques au B2B.
- Accompagnement au changement pour la transition des clients historiques.

**Missions EN :**
- Automated integration with Sage X3 ERP via flat-file exchange.
- Modern interface tailored to B2B-specific ordering workflows.
- Change management support for long-standing B2B clients.

**Highlights :** 26 mai 2026 (Lancement) · Sage X3 (ERP intégré) · B2B · 10 ans+ (Contexte client)

---

### proj2 - Creditsafe (2026)
**Rôle FR :** Lead Développeur Back-end & Product Owner · **EN :** Lead Back-end Developer & Product Owner  
**Court FR :** Application officielle Shopify Store · Autonomie totale · **EN :** Official Shopify App Store · Full Autonomy

**Objectif FR :** Offrir une solution fintech intégrée pour les marchands Shopify, gérée de A à Z - de la conception technique à la relation directionnelle.  
**Objectif EN :** Deliver a fully integrated fintech solution for Shopify merchants, managed end-to-end - from technical design to stakeholder relations.

**Missions FR :**
- Architecture d'application Shopify complexe avec gestion intégrale du cycle de vie du produit.
- Cadrage en sprints agiles et relation directe avec les équipes de Creditsafe.
- Formation technique des équipes internes et présentation directionnelle.

**Missions EN :**
- Complex Shopify app architecture with full product lifecycle management.
- Agile sprint planning with direct engagement with Creditsafe's teams.
- Internal team technical training and steering committee presentations.

**Highlights :** 25 mai 2026 (Publication) · Shopify App Store (Distribution) · 100% autonome (Méthode)

---

### proj3 - Parapluie 1705 (2026)
**Rôle FR :** Chef de Projet & Développeur Full Stack · **EN :** Project Manager & Full Stack Developer  
**Court FR :** E-commerce médiatisé · France 2 · **EN :** Featured e-commerce · France 2 TV

**Objectif FR :** Accompagner le lancement d'un produit innovant mis en avant lors du Concours Lépine 2025 sur France 2.  
**Objectif EN :** Support the launch of an innovative product showcased during the 2025 Concours Lépine on France 2 national TV.

**Missions FR :**
- Design épuré et optimisé pour absorber les pics d'audience TV.
- Formation complète des utilisateurs pour une gestion autonome de la boutique.
- Relation client de proximité pour un cadrage sur-mesure.

**Missions EN :**
- Clean, performance-optimized design built to handle TV-driven traffic spikes.
- Full user training for autonomous store management post-launch.
- Close-knit client relationship for tailored project framing.

**Highlights :** 16 avril 2026 (Lancement) · France 2 (Médiatisation) · Concours Lépine 2025 (Événement)

---

### proj4 - Sonolens (2026)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Architecture Multi-flux · ERP EBP SDK & Système de location · **EN :** Multi-flow Architecture · EBP SDK ERP & Rental System

**Objectif FR :** Centraliser plusieurs activités web sur une seule instance Shopify pour automatiser la gestion des stocks d'un modèle hybride vente/location.  
**Objectif EN :** Consolidate multiple web activities onto a single Shopify instance to automate inventory management for a hybrid sale/rental business model.

**Missions FR :**
- Connecteur API complexe relié à l'ERP EBP (SDK) et aux logiciels logistiques.
- Système de réservation de location de matériel couplé à la vente de produits classiques.
- Automatisation des stocks en temps réel via l'ERP.

**Missions EN :**
- Complex API connector linked to EBP ERP (SDK) and logistics software.
- Equipment rental booking system coupled with standard product sales.
- Real-time inventory automation via ERP.

**Highlights :** 10 avril 2026 (Livraison) · Multi-flux (Architecture) · Vente + Location (Modèle métier)

---

### proj5 - Outrebon (2026)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Relation client de proximité · ERP Kaeliips · **EN :** Local Client Relations · Kaeliips ERP

**Objectif FR :** Assurer une synchronisation parfaite entre les stocks physiques et la boutique en ligne via une intégration ERP sur-mesure.  
**Objectif EN :** Ensure seamless synchronization between physical stock and the online store through a custom ERP integration.

**Missions FR :**
- Déploiement d'un connecteur sur-mesure lié à l'API de l'ERP Kaeliips.
- Comités de projet physiques réguliers pour un suivi précis de l'avancement.
- Maintenance évolutive rigoureuse après lancement.

**Missions EN :**
- Custom connector deployment linked to the Kaeliips ERP API.
- Regular in-person project committees for precise progress tracking.
- Rigorous post-launch evolutionary maintenance.

**Highlights :** 10 mars 2026 (Lancement) · Kaeliips API (ERP connecté) · Maintenance active (Suivi)

---

### proj6 - Exsud (2026)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Projet International (Belgique/Pologne) · Secteur Luxe · **EN :** International Project (Belgium/Poland) · Luxury Sector

**Objectif FR :** Préparer l'événement Maison & Déco à Paris avec une interface élégante, un SEO international solide et une expérience luxe aboutie.  
**Objectif EN :** Prepare for the Maison & Déco Paris event with an elegant interface, strong international SEO, and a polished luxury experience.

**Missions FR :**
- Architecture multi-langues et multi-pays (Belgique, Pologne).
- Interface ultra-élégante répondant aux codes du luxe et du design.
- Optimisation SEO internationale pour la visibilité européenne.

**Missions EN :**
- Multi-language and multi-country architecture (Belgium, Poland).
- Ultra-elegant interface aligned with luxury and design codes.
- International SEO optimization for European visibility.

**Highlights :** 20 janv. 2026 (Réalisation) · Belgique · Pologne (Marchés) · Maison & Déco Paris (Événement)

---

### proj7 - Automatic Technologies (2025)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Interopérabilité ERP EBP SaaS · Enjeux SEO · **EN :** EBP SaaS ERP Interoperability · SEO Migration

**Objectif FR :** Moderniser la plateforme sans perdre le positionnement historique sur Google tout en automatisant les flux métiers via l'ERP.  
**Objectif EN :** Modernize the platform without losing established Google rankings while automating business workflows via ERP.

**Missions FR :**
- Interconnexion automatisée par API REST entre l'ERP EBP SaaS et Shopify.
- Conservation de l'intégrité des données SEO lors de la migration.
- Automatisation complète des flux métiers (produits et commandes).

**Missions EN :**
- Automated REST API integration between EBP SaaS ERP and Shopify.
- Preservation of SEO data integrity throughout the migration.
- Full automation of business workflows (products and orders).

**Highlights :** 24 déc. 2025 (Lancement) · 5 ★ Google (Avis client) · EBP SaaS API (ERP connecté)

---

### proj8 - Emballages.fr (2025)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Lancement d'activité · Couplage ERP EBP SaaS · **EN :** Business Launch · EBP SaaS ERP Coupling

**Objectif FR :** Maximiser le démarrage de l'activité grâce à une structure SEO performante et un back-office entièrement automatisé.  
**Objectif EN :** Maximize business launch performance through a strong SEO structure and a fully automated back-office.

**Missions FR :**
- Intégration API entre l'ERP EBP SaaS et la plateforme Shopify.
- Optimisation technique SEO pointue pour un lancement immédiat.
- Accompagnement stratégique sur le choix de la stack technique.

**Missions EN :**
- API integration between EBP SaaS ERP and the Shopify platform.
- In-depth technical SEO optimization for immediate launch.
- Strategic advisory on the technical stack selection.

**Highlights :** 16 nov. 2025 (Mise en ligne) · EBP SaaS API (ERP connecté) · Lancement d'activité (Contexte)

---

### proj9 - Tandem Fragrances (2025)
**Rôle FR :** Chef de Projet Tech & UI/UX Designer · **EN :** Tech Project Manager & UI/UX Designer  
**Court FR :** Lancement e-commerce · UX/UI & Mentorat · **EN :** E-commerce Launch · UX/UI & Mentoring

**Objectif FR :** Allier esthétisme de marque et performance technique tout en formant les équipes internes aux architectures sur-mesure.  
**Objectif EN :** Combine brand aesthetics with technical performance while training internal teams on custom platform architectures.

**Missions FR :**
- Phase complète d'UX/UI Design réalisée sur Figma.
- Intégration Front-end sur-mesure et respectueuse de l'identité visuelle.
- Mentorat technique des collaborateurs alternants sur le projet.

**Missions EN :**
- Complete UX/UI design phase delivered on Figma.
- Custom front-end integration aligned with the visual identity.
- Technical mentoring of apprentice team members on the project.

**Highlights :** 27 sept. 2025 (Livraison) · Figma · Front-end (Stack design) · Mentorat interne (Formation)

---

### proj10 - Les Ateliers de Langres (2025)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Intégration ERP Sage · Projet long terme complexe · **EN :** Sage ERP integration · Complex long-term project

**Objectif FR :** Automatiser des flux métiers volumineux pour dégager un gain de temps opérationnel majeur grâce à une intégration ERP avancée.  
**Objectif EN :** Automate high-volume business workflows to deliver significant operational time savings through advanced ERP integration.

**Missions FR :**
- Intégration avancée par fichiers à plat (CSV/XML automatisés) avec l'ERP Sage.
- Gestion d'un périmètre technique et fonctionnel très large.
- Optimisation des flux de données pour réduire les erreurs manuelles.

**Missions EN :**
- Advanced integration via automated flat-file processing (CSV/XML) with Sage ERP.
- Management of a very broad technical and functional scope.
- Data flow optimization to reduce manual errors.

**Highlights :** 9 juin 2025 (Livraison) · 1 an+ (Durée) · Sage · CSV/XML (Intégration)

---

### proj11 - Minois Paris (2025)
**Rôle FR :** Lead Projet & Développeur Back-end · **EN :** Project Lead & Back-end Developer  
**Court FR :** Shopify Plus B2B · Connecteur ERP Sellsy · **EN :** Shopify Plus B2B · Sellsy ERP Connector

**Objectif FR :** Proposer une expérience d'achat professionnelle fluide sur Shopify Plus répondant à de très fortes exigences de flux B2B.  
**Objectif EN :** Deliver a seamless B2B purchasing experience on Shopify Plus, meeting high enterprise workflow requirements.

**Missions FR :**
- Infrastructure Shopify Plus pour supporter des volumes de vente élevés.
- Connecteur API REST sur-mesure avec l'ERP Sellsy.
- Gestion des tarifs et conditions spécifiques aux professionnels.

**Missions EN :**
- Shopify Plus infrastructure to handle high sales volumes.
- Custom REST API connector with Sellsy ERP.
- Management of professional-tier pricing and terms.

**Highlights :** 5 avril 2025 (Déploiement) · Shopify Plus (Infrastructure) · Sellsy API (ERP connecté)

---

### proj12 - Skintips (2024)
**Rôle FR :** Lead Projet & Développeur Back-end · **EN :** Project Lead & Back-end Developer  
**Court FR :** Connecteur Shopify × ERP Sellsy · **EN :** Shopify × Sellsy ERP Connector

**Objectif FR :** Automatiser la transmission des commandes vers l'ERP pour fluidifier les expéditions et fiabiliser la gestion logistique.  
**Objectif EN :** Automate order transmission to ERP to streamline fulfillment and ensure reliable logistics management.

**Missions FR :**
- Développement d'une passerelle API REST entre Shopify et Sellsy.
- Gestion globale de la maintenance applicative et du suivi post-lancement.
- Optimisation continue des flux logistiques.

**Missions EN :**
- Development of a REST API gateway between Shopify and Sellsy.
- Full application maintenance management and post-launch monitoring.
- Continuous logistics workflow optimization.

**Highlights :** 20 déc. 2024 (Lancement) · Sellsy API (ERP connecté) · Maintenance active (Suivi)

---

### proj13 - Nemrod (2024)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Plateforme B2B · Synchronisation Sellsy · **EN :** B2B platform · Sellsy synchronization

**Objectif FR :** Digitaliser la prise de commande pour les professionnels avec des tarifs dynamiques et une synchronisation ERP temps réel.  
**Objectif EN :** Digitalize B2B order management with dynamic pricing and real-time ERP synchronization.

**Missions FR :**
- Passerelle de synchronisation automatisée via l'API Sellsy.
- Interface client B2B dédiée avec flux de tarifs spécifiques.
- Suivi de maintenance continu et relation client de proximité.

**Missions EN :**
- Automated synchronization gateway via the Sellsy API.
- Dedicated B2B client interface with custom pricing workflows.
- Continuous maintenance follow-up and close client relations.

**Highlights :** 19 nov. 2024 (Lancement) · 5 ★ Google (Avis client) · Sellsy API (ERP connecté)

---

### proj14 - Mademoiselle Biloba (2024)
**Rôle FR :** Chef de Projet Tech & UI/UX Designer · **EN :** Tech Project Manager & UI/UX Designer  
**Court FR :** Migration Shopify POS · Optimisation Conversion IA · **EN :** Shopify POS Migration · AI Conversion Optimization

**Objectif FR :** Unifier les ventes physiques et en ligne tout en optimisant la conversion via les dernières innovations UX/UI et IA.  
**Objectif EN :** Unify physical and online sales while optimizing conversion through the latest UX/UI and AI innovations.

**Missions FR :**
- Migration complète du catalogue et déploiement du système Shopify POS.
- Implémentation de modules UX/UI basés sur l'IA pour booster la conversion.
- Suivi de maintenance actif depuis le lancement.

**Missions EN :**
- Full catalog migration and Shopify POS system deployment.
- Implementation of AI-powered UX/UI modules to boost conversion.
- Active maintenance follow-up since launch.

**Highlights :** 1 nov. 2024 (Lancement) · Shopify POS (Solution omnicanale) · IA · UX/UI (Technologies)

---

### proj15 - Les Garçons Bouchers (2024)
**Rôle FR :** Lead Projet & Développeur Full Stack · **EN :** Project Lead & Full Stack Developer  
**Court FR :** Support stratégique long terme & Mentorat alternants · **EN :** Long-term Strategic Support & Apprentice Mentoring

**Objectif FR :** Moderniser l'image d'un acteur alimentaire historique et automatiser ses flux ERP tout en valorisant les équipes internes.  
**Objectif EN :** Modernize a historic food industry brand's image and automate its ERP workflows while developing internal teams.

**Missions FR :**
- Supervision technique du connecteur ERP Kaeliips via API.
- Animation de sessions de formation pour les équipes client et les alternants.
- Maintenance stratégique et relation client sur le long terme.

**Missions EN :**
- Technical supervision of the Kaeliips ERP API connector.
- Led training sessions for client teams and apprentices.
- Strategic long-term maintenance and client relationship management.

**Highlights :** 23 oct. 2024 (Lancement) · Kaeliips API (ERP connecté) · Mentorat (Formation)

---

### proj16 - Fondation des Possibles (2024)
**Rôle FR :** Chef de Projet Tech & UI/UX Designer · **EN :** Tech Project Manager & UI/UX Designer  
**Court FR :** Accompagnement historique · Figma & Relation client · **EN :** Historical Support · Figma & Client relations

**Objectif FR :** Créer une plateforme solidaire moderne avec un accompagnement client de long terme qui se poursuit encore aujourd'hui.  
**Objectif EN :** Build a modern social impact platform with a long-term client partnership that continues to this day.

**Missions FR :**
- Conception intégrale des wireframes et maquettes sur Figma.
- Pilotage de l'accompagnement sur-mesure sur le long terme.
- Gestion complète de la relation client et de l'analyse des besoins.

**Missions EN :**
- Full wireframe and mockup design on Figma.
- Long-term custom partnership management.
- Complete client relationship management and needs analysis.

**Highlights :** 7 mai 2024 (Lancement) · Suivi continu (Partenariat) · 1er projet Shopify (Étape clé)

---

## 6. Section Témoignages

### Labels UI
| Clé | FR | EN |
|---|---|---|
| `testimonials.title` | Témoignages & Recommandations | Testimonials & Recommendations |
| `testimonials.subtitle` | Retours de clients et collaborateurs | Feedback from clients and collaborators |

---

### Avis 1 - Nemrod ⭐⭐⭐⭐⭐
> Accompagnement sur-mesure de la part de Huggii. Ils ont réussi à trouver des solutions à tous nos besoins et toutes problématiques. Mention spéciale à Elliot pour sa réactivité et sa bonne humeur, c'était un réel plaisir de travailler ensemble !

### Avis 2 - TANDEM · Fragrances & Ombres Portées ⭐⭐⭐⭐⭐
> Un sans faute dans ce partenariat où nous avons été accompagnés par Elliot sur la création de nos 2 sites marchands. Nos objectifs techniques, esthétiques et graphiques qui étaient ambitieux ont été atteints, dans les temps, tout en intégrant les contraintes de Shopify. Nous avons particulièrement apprécié la compétence, la disponibilité, la réactivité, la patience et l'état d'esprit toujours positif de notre interlocuteur. Alors OUI nous recommandons sans réserve Huggii pour la création de sites internet sur Shopify !

### Avis 3 - Fondation des Possibles ⭐⭐⭐⭐⭐
> La Fondation des Possibles est ravie d'avoir fait appel à Huggii pour la refonte de son site. Guillaume et Elliot ont su comprendre notre demande très vite et le résultat est vraiment à la hauteur de nos attentes ! N'hésitez plus si vous avez un site à faire.

### Avis 4 - Skintips ⭐⭐⭐⭐⭐
> Elliot notre développeur a été d'une patience et d'un professionnalisme exceptionnel. Je recommande Huggii.

### Avis 5 - Automatic Technologies ⭐⭐⭐⭐⭐
> Nous avons fait appel à HUGGII pour la réalisation de notre nouveau site Internet. L'équipe HUGGII a réussi à faire une passerelle EBP/Shopify qui nous simplifie le travail de mise à jour des produits ainsi que des commandes. Elliot, qui était en charge de notre dossier, a été à l'écoute et d'une grande réactivité. C'est un véritable plaisir de travailler avec des personnes compétentes et à l'écoute des attentes. Bravo à toute l'équipe HUGGII !

---

## 7. Section Contact

### Labels UI
| Clé | FR | EN |
|---|---|---|
| `contact.title` | Contact & Collaboration | Contact & Collaboration |
| `contact.subtitle` | Un projet web ou une opportunité de collaboration ? Échangeons directement. | A web project or collaboration opportunity? Let's talk directly. |
| `contact.namePlaceholder` | Votre nom | Your name |
| `contact.emailPlaceholder` | Votre email | Your email |
| `contact.subjectPlaceholder` | Objet | Subject |
| `contact.messagePlaceholder` | Votre message... | Your message... |
| `contact.socialsTitle` | Me retrouver | Connect with me |
| `contact.submit` | Envoyer le message | Send message |
| `contact.sending` | Envoi en cours… | Sending… |
| `contact.success` | Message envoyé ! Je vous répondrai rapidement. | Message sent! I'll get back to you shortly. |
| `contact.error` | Une erreur est survenue. Réessayez ou contactez-moi directement. | Something went wrong. Please try again or contact me directly. |
| `contact.location` | Toufflers / Lille Métropole | Toufflers / Lille Metropolitan Area |
| `contact.linkedinLabel` | LinkedIn | LinkedIn |
| `contact.emailLabel` | Email | Email |
| `contact.phoneLabel` | Téléphone | Phone |
| `contact.cvLabel` | Consulter mon CV | View my Resume |
| `contact.cvModalTitle` | Curriculum Vitae | Curriculum Vitae |
| `contact.cvDownload` | Télécharger | Download |
| `contact.cvDownloadFull` | Télécharger mon CV | Download my Resume |
| `contact.cvEnlarge` | Agrandir | Enlarge |
| `contact.footerCopy` | Tous droits réservés | All rights reserved |
