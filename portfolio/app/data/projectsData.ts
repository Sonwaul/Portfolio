export interface ProjectHighlight {
  value: string;
  label: string;
  labelEn?: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  roleEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  objective: string;
  objectiveEn: string;
  missions: string[];
  missionsEn: string[];
  highlights: ProjectHighlight[];
  tags: string[];
  year: string;
  link: string | null;
  accentColor: string;
  logo?: string;
}

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Julien Faure",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Migration B2B · Synchronisation Sage",
    shortDescriptionEn: "B2B Migration · Sage Synchronization",
    objective:
      "Moderniser l'image de marque et l'expérience utilisateur tout en conservant les habitudes et automatisations métier complexes.",
    objectiveEn:
      "Modernize the brand image and user experience while preserving complex business habits and automations.",
    missions: [
      "Interconnexion automatisée avec l'ERP Sage X3 via échange de fichiers à plat.",
      "Interface moderne respectant les flux de commande spécifiques au B2B.",
      "Accompagnement au changement pour la transition des clients historiques.",
    ],
    missionsEn: [
      "Automated integration with Sage X3 ERP via flat-file exchange.",
      "Modern interface tailored to B2B-specific ordering workflows.",
      "Change management support for long-standing B2B clients.",
    ],
    highlights: [
      { value: "26 mai 2026", label: "Lancement", labelEn: "Launch" },
      { value: "Sage X3", label: "ERP intégré", labelEn: "Integrated ERP" },
      { value: "B2B · 10 ans+", label: "Contexte client", labelEn: "Client context" },
    ],
    tags: ["Shopify", "Sage"],
    year: "2026",
    link: "https://julien-faure.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Julien_Faure.png",
  },
  {
    id: "proj2",
    title: "Creditsafe",
    role: "Lead Développeur Back-end & Product Owner",
    roleEn: "Lead Back-end Developer & Product Owner",
    shortDescription: "Application officielle Shopify Store · Autonomie totale",
    shortDescriptionEn: "Official Shopify App Store · Full Autonomy",
    objective:
      "Offrir une solution fintech intégrée pour les marchands Shopify, gérée de A à Z - de la conception technique à la relation directionnelle.",
    objectiveEn:
      "Deliver a fully integrated fintech solution for Shopify merchants, managed end-to-end - from technical design to stakeholder relations.",
    missions: [
      "Architecture d'application Shopify complexe avec gestion intégrale du cycle de vie du produit.",
      "Cadrage en sprints agiles et relation directe avec les équipes de Creditsafe.",
      "Formation technique des équipes internes et présentation directionnelle.",
    ],
    missionsEn: [
      "Complex Shopify app architecture with full product lifecycle management.",
      "Agile sprint planning with direct engagement with Creditsafe's teams.",
      "Internal team technical training and steering committee presentations.",
    ],
    highlights: [
      { value: "25 mai 2026", label: "Publication", labelEn: "Published" },
      { value: "Shopify App Store", label: "Distribution", labelEn: "Distribution" },
      { value: "100% autonome", label: "Méthode", labelEn: "Approach" },
    ],
    tags: ["Shopify App", "API Shopify", "Remix"],
    year: "2026",
    link: "https://apps.shopify.com/creditsafe-1?locale=fr",
    accentColor: "#6C9A8B",
    logo: "/projects/Creditsafe.png",
  },
  {
    id: "proj3",
    title: "Parapluie 1705",
    role: "Chef de Projet & Développeur Full Stack",
    roleEn: "Project Manager & Full Stack Developer",
    shortDescription: "E-commerce médiatisé · France 2",
    shortDescriptionEn: "Featured e-commerce · France 2 TV",
    objective:
      "Accompagner le lancement d'un produit innovant mis en avant lors du Concours Lépine 2025 sur France 2.",
    objectiveEn:
      "Support the launch of an innovative product showcased during the 2025 Concours Lépine on France 2 national TV.",
    missions: [
      "Design épuré et optimisé pour absorber les pics d'audience TV.",
      "Formation complète des utilisateurs pour une gestion autonome de la boutique.",
      "Relation client de proximité pour un cadrage sur-mesure.",
    ],
    missionsEn: [
      "Clean, performance-optimized design built to handle TV-driven traffic spikes.",
      "Full user training for autonomous store management post-launch.",
      "Close-knit client relationship for tailored project framing.",
    ],
    highlights: [
      { value: "16 avril 2026", label: "Lancement", labelEn: "Launch" },
      { value: "France 2", label: "Médiatisation", labelEn: "Media coverage" },
      { value: "Concours Lépine 2025", label: "Événement", labelEn: "Event" },
    ],
    tags: ["Shopify", "UX/UI"],
    year: "2026",
    link: "https://1705.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Parapluie_1705.png",
  },
  {
    id: "proj4",
    title: "Sonolens",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Architecture Multi-flux · ERP EBP SDK & Système de location",
    shortDescriptionEn: "Multi-flow Architecture · EBP SDK ERP & Rental System",
    objective:
      "Centraliser plusieurs activités web sur une seule instance Shopify pour automatiser la gestion des stocks d'un modèle hybride vente/location.",
    objectiveEn:
      "Consolidate multiple web activities onto a single Shopify instance to automate inventory management for a hybrid sale/rental business model.",
    missions: [
      "Connecteur API complexe relié à l'ERP EBP (SDK) et aux logiciels logistiques.",
      "Système de réservation de location de matériel couplé à la vente de produits classiques.",
      "Automatisation des stocks en temps réel via l'ERP.",
    ],
    missionsEn: [
      "Complex API connector linked to EBP ERP (SDK) and logistics software.",
      "Equipment rental booking system coupled with standard product sales.",
      "Real-time inventory automation via ERP.",
    ],
    highlights: [
      { value: "10 avril 2026", label: "Livraison", labelEn: "Delivered" },
      { value: "Multi-flux", label: "Architecture", labelEn: "Architecture" },
      { value: "Vente + Location", label: "Modèle métier", labelEn: "Business model" },
    ],
    tags: ["Shopify", "API Shopify", "EBP SDK"],
    year: "2026",
    link: "https://sonolens.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Sonolens.png",
  },
  {
    id: "proj5",
    title: "Outrebon",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Relation client de proximité · ERP Kaeliips",
    shortDescriptionEn: "Local Client Relations · Kaeliips ERP",
    objective:
      "Assurer une synchronisation parfaite entre les stocks physiques et la boutique en ligne via une intégration ERP sur-mesure.",
    objectiveEn:
      "Ensure seamless synchronization between physical stock and the online store through a custom ERP integration.",
    missions: [
      "Déploiement d'un connecteur sur-mesure lié à l'API de l'ERP Kaeliips.",
      "Comités de projet physiques réguliers pour un suivi précis de l'avancement.",
      "Maintenance évolutive rigoureuse après lancement.",
    ],
    missionsEn: [
      "Custom connector deployment linked to the Kaeliips ERP API.",
      "Regular in-person project committees for precise progress tracking.",
      "Rigorous post-launch evolutionary maintenance.",
    ],
    highlights: [
      { value: "10 mars 2026", label: "Lancement", labelEn: "Launch" },
      { value: "Kaeliips API", label: "ERP connecté", labelEn: "Connected ERP" },
      { value: "Maintenance active", label: "Suivi", labelEn: "Follow-up" },
    ],
    tags: ["Shopify", "API Shopify", "PHP", "Kaeliips"],
    year: "2026",
    link: "https://sa-outrebon.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Outrebon.png",
  },
  {
    id: "proj6",
    title: "Exsud",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Projet International (Belgique/Pologne) · Secteur Luxe",
    shortDescriptionEn: "International Project (Belgium/Poland) · Luxury Sector",
    objective:
      "Préparer l'événement Maison & Déco à Paris avec une interface élégante, un SEO international solide et une expérience luxe aboutie.",
    objectiveEn:
      "Prepare for the Maison & Déco Paris event with an elegant interface, strong international SEO, and a polished luxury experience.",
    missions: [
      "Architecture multi-langues et multi-pays (Belgique, Pologne).",
      "Interface ultra-élégante répondant aux codes du luxe et du design.",
      "Optimisation SEO internationale pour la visibilité européenne.",
    ],
    missionsEn: [
      "Multi-language and multi-country architecture (Belgium, Poland).",
      "Ultra-elegant interface aligned with luxury and design codes.",
      "International SEO optimization for European visibility.",
    ],
    highlights: [
      { value: "20 janv. 2026", label: "Réalisation", labelEn: "Completed" },
      { value: "Belgique · Pologne", label: "Marchés", labelEn: "Markets" },
      { value: "Maison & Déco Paris", label: "Événement", labelEn: "Event" },
    ],
    tags: ["Shopify", "SEO"],
    year: "2026",
    link: "https://exsud.com/",
    accentColor: "#6C9A8B",
    logo: "/projects/Exsud.png",
  },
  {
    id: "proj7",
    title: "Automatic Technologies",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Interopérabilité ERP EBP SaaS · Enjeux SEO",
    shortDescriptionEn: "EBP SaaS ERP Interoperability · SEO Migration",
    objective:
      "Moderniser la plateforme sans perdre le positionnement historique sur Google tout en automatisant les flux métiers via l'ERP.",
    objectiveEn:
      "Modernize the platform without losing established Google rankings while automating business workflows via ERP.",
    missions: [
      "Interconnexion automatisée par API REST entre l'ERP EBP SaaS et Shopify.",
      "Conservation de l'intégrité des données SEO lors de la migration.",
      "Automatisation complète des flux métiers (produits et commandes).",
    ],
    missionsEn: [
      "Automated REST API integration between EBP SaaS ERP and Shopify.",
      "Preservation of SEO data integrity throughout the migration.",
      "Full automation of business workflows (products and orders).",
    ],
    highlights: [
      { value: "24 déc. 2025", label: "Lancement", labelEn: "Launch" },
      { value: "5 ★ Google", label: "Avis client", labelEn: "Client review" },
      { value: "EBP SaaS API", label: "ERP connecté", labelEn: "Connected ERP" },
    ],
    tags: ["Shopify", "API Shopify", "PHP", "SEO", "EBP SaaS"],
    year: "2025",
    link: "https://automatic-technologies.com/",
    accentColor: "#6C9A8B",
    logo: "/projects/Automatic-technologies.png",
  },
  {
    id: "proj8",
    title: "Emballages.fr",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Lancement d'activité · Couplage ERP EBP SaaS",
    shortDescriptionEn: "Business Launch · EBP SaaS ERP Coupling",
    objective:
      "Maximiser le démarrage de l'activité grâce à une structure SEO performante et un back-office entièrement automatisé.",
    objectiveEn:
      "Maximize business launch performance through a strong SEO structure and a fully automated back-office.",
    missions: [
      "Intégration API entre l'ERP EBP SaaS et la plateforme Shopify.",
      "Optimisation technique SEO pointue pour un lancement immédiat.",
      "Accompagnement stratégique sur le choix de la stack technique.",
    ],
    missionsEn: [
      "API integration between EBP SaaS ERP and the Shopify platform.",
      "In-depth technical SEO optimization for immediate launch.",
      "Strategic advisory on the technical stack selection.",
    ],
    highlights: [
      { value: "16 nov. 2025", label: "Mise en ligne", labelEn: "Go live" },
      { value: "EBP SaaS API", label: "ERP connecté", labelEn: "Connected ERP" },
      { value: "Lancement d'activité", label: "Contexte", labelEn: "Context" },
    ],
    tags: ["Shopify", "API Shopify", "PHP", "SEO", "EBP SaaS"],
    year: "2025",
    link: "https://www.emballages.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Emballages_fr.png",
  },
  {
    id: "proj9",
    title: "Tandem Fragrances",
    role: "Chef de Projet Tech & UI/UX Designer",
    roleEn: "Tech Project Manager & UI/UX Designer",
    shortDescription: "Lancement e-commerce · UX/UI & Mentorat",
    shortDescriptionEn: "E-commerce Launch · UX/UI & Mentoring",
    objective:
      "Allier esthétisme de marque et performance technique tout en formant les équipes internes aux architectures sur-mesure.",
    objectiveEn:
      "Combine brand aesthetics with technical performance while training internal teams on custom platform architectures.",
    missions: [
      "Phase complète d'UX/UI Design réalisée sur Figma.",
      "Intégration Front-end sur-mesure et respectueuse de l'identité visuelle.",
      "Mentorat technique des collaborateurs alternants sur le projet.",
    ],
    missionsEn: [
      "Complete UX/UI design phase delivered on Figma.",
      "Custom front-end integration aligned with the visual identity.",
      "Technical mentoring of apprentice team members on the project.",
    ],
    highlights: [
      { value: "27 sept. 2025", label: "Livraison", labelEn: "Delivered" },
      { value: "Figma · Front-end", label: "Stack design", labelEn: "Design stack" },
      { value: "Mentorat interne", label: "Formation", labelEn: "Training" },
    ],
    tags: ["Shopify", "Figma", "UX/UI"],
    year: "2025",
    link: "https://tandem-fragrances.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Tandem-fragrances.png",
  },
  {
    id: "proj10",
    title: "Les Ateliers de Langres",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Intégration ERP Sage · Projet long terme complexe",
    shortDescriptionEn: "Sage ERP integration · Complex long-term project",
    objective:
      "Automatiser des flux métiers volumineux pour dégager un gain de temps opérationnel majeur grâce à une intégration ERP avancée.",
    objectiveEn:
      "Automate high-volume business workflows to deliver significant operational time savings through advanced ERP integration.",
    missions: [
      "Intégration avancée par fichiers à plat (JSON automatisés) avec l'ERP Sage.",
      "Gestion d'un périmètre technique et fonctionnel très large.",
      "Optimisation des flux de données pour réduire les erreurs manuelles.",
    ],
    missionsEn: [
      "Advanced integration via automated flat-file processing (JSON) with Sage ERP.",
      "Management of a very broad technical and functional scope.",
      "Data flow optimization to reduce manual errors.",
    ],
    highlights: [
      { value: "9 juin 2025", label: "Livraison", labelEn: "Delivered" },
      { value: "1 an+", label: "Durée", labelEn: "Duration" },
      { value: "Sage · JSON", label: "Intégration", labelEn: "Integration" },
    ],
    tags: ["Shopify", "API Shopify", "PHP", "Sage"],
    year: "2025",
    link: "https://les-ateliers-de-langres.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Ateliers_de_langres.png",
  },
  {
    id: "proj11",
    title: "Minois Paris",
    role: "Lead Projet & Développeur Back-end",
    roleEn: "Project Lead & Back-end Developer",
    shortDescription: "Shopify Plus B2B · Connecteur ERP Sellsy",
    shortDescriptionEn: "Shopify Plus B2B · Sellsy ERP Connector",
    objective:
      "Proposer une expérience d'achat professionnelle fluide sur Shopify Plus répondant à de très fortes exigences de flux B2B.",
    objectiveEn:
      "Deliver a seamless B2B purchasing experience on Shopify Plus, meeting high enterprise workflow requirements.",
    missions: [
      "Infrastructure Shopify Plus pour supporter des volumes de vente élevés.",
      "Connecteur API REST sur-mesure avec l'ERP Sellsy.",
      "Gestion des tarifs et conditions spécifiques aux professionnels.",
    ],
    missionsEn: [
      "Shopify Plus infrastructure to handle high sales volumes.",
      "Custom REST API connector with Sellsy ERP.",
      "Management of professional-tier pricing and terms.",
    ],
    highlights: [
      { value: "5 avril 2025", label: "Déploiement", labelEn: "Deployed" },
      { value: "Shopify Plus", label: "Infrastructure", labelEn: "Infrastructure" },
      { value: "Sellsy API", label: "ERP connecté", labelEn: "Connected ERP" },
    ],
    tags: ["Shopify Plus", "API Shopify", "Sellsy"],
    year: "2025",
    link: "https://www.minoisparis.com/",
    accentColor: "#6C9A8B",
    logo: "/projects/Minois_paris.png",
  },
  {
    id: "proj12",
    title: "Skintips",
    role: "Lead Projet & Développeur Back-end",
    roleEn: "Project Lead & Back-end Developer",
    shortDescription: "Connecteur Shopify × ERP Sellsy",
    shortDescriptionEn: "Shopify × Sellsy ERP Connector",
    objective:
      "Automatiser la transmission des commandes vers l'ERP pour fluidifier les expéditions et fiabiliser la gestion logistique.",
    objectiveEn:
      "Automate order transmission to ERP to streamline fulfillment and ensure reliable logistics management.",
    missions: [
      "Développement d'une passerelle API REST entre Shopify et Sellsy.",
      "Gestion globale de la maintenance applicative et du suivi post-lancement.",
      "Optimisation continue des flux logistiques.",
    ],
    missionsEn: [
      "Development of a REST API gateway between Shopify and Sellsy.",
      "Full application maintenance management and post-launch monitoring.",
      "Continuous logistics workflow optimization.",
    ],
    highlights: [
      { value: "20 déc. 2024", label: "Lancement", labelEn: "Launch" },
      { value: "Sellsy API", label: "ERP connecté", labelEn: "Connected ERP" },
      { value: "Maintenance active", label: "Suivi", labelEn: "Follow-up" },
    ],
    tags: ["Shopify", "API Shopify", "PHP", "Sellsy"],
    year: "2024",
    link: "https://www.skintips.co/",
    accentColor: "#6C9A8B",
    logo: "/projects/Skintips.png",
  },
  {
    id: "proj13",
    title: "Nemrod",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Plateforme B2B · Synchronisation Sellsy",
    shortDescriptionEn: "B2B platform · Sellsy synchronization",
    objective:
      "Digitaliser la prise de commande pour les professionnels avec des tarifs dynamiques et une synchronisation ERP temps réel.",
    objectiveEn:
      "Digitalize B2B order management with dynamic pricing and real-time ERP synchronization.",
    missions: [
      "Passerelle de synchronisation automatisée via l'API Sellsy.",
      "Interface client B2B dédiée avec flux de tarifs spécifiques.",
      "Suivi de maintenance continu et relation client de proximité.",
    ],
    missionsEn: [
      "Automated synchronization gateway via the Sellsy API.",
      "Dedicated B2B client interface with custom pricing workflows.",
      "Continuous maintenance follow-up and close client relations.",
    ],
    highlights: [
      { value: "19 nov. 2024", label: "Lancement", labelEn: "Launch" },
      { value: "5 ★ Google", label: "Avis client", labelEn: "Client review" },
      { value: "Sellsy API", label: "ERP connecté", labelEn: "Connected ERP" },
    ],
    tags: ["Shopify", "API Shopify", "PHP", "Sellsy"],
    year: "2024",
    link: "https://pro.nemrod.co/",
    accentColor: "#6C9A8B",
    logo: "/projects/Nemrod.png",
  },
  {
    id: "proj14",
    title: "Mademoiselle Biloba",
    role: "Chef de Projet Tech & UI/UX Designer",
    roleEn: "Tech Project Manager & UI/UX Designer",
    shortDescription: "Migration Shopify POS · Optimisation Conversion IA",
    shortDescriptionEn: "Shopify POS Migration · AI Conversion Optimization",
    objective:
      "Unifier les ventes physiques et en ligne tout en optimisant la conversion via les dernières innovations UX/UI et IA.",
    objectiveEn:
      "Unify physical and online sales while optimizing conversion through the latest UX/UI and AI innovations.",
    missions: [
      "Migration complète du catalogue et déploiement du système Shopify POS.",
      "Implémentation de modules UX/UI basés sur l'IA pour booster la conversion.",
      "Suivi de maintenance actif depuis le lancement.",
    ],
    missionsEn: [
      "Full catalog migration and Shopify POS system deployment.",
      "Implementation of AI-powered UX/UI modules to boost conversion.",
      "Active maintenance follow-up since launch.",
    ],
    highlights: [
      { value: "1 nov. 2024", label: "Lancement", labelEn: "Launch" },
      { value: "Shopify POS", label: "Solution omnicanale", labelEn: "Omnichannel" },
      { value: "IA · UX/UI", label: "Technologies", labelEn: "Technologies" },
    ],
    tags: ["Shopify", "Shopify POS", "UX/UI"],
    year: "2024",
    link: "https://mademoiselle-biloba.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Mademoiselle_biloba.png",
  },
  {
    id: "proj15",
    title: "Les Garçons Bouchers",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Support stratégique long terme & Mentorat alternants",
    shortDescriptionEn: "Long-term Strategic Support & Apprentice Mentoring",
    objective:
      "Moderniser l'image d'un acteur alimentaire historique et automatiser ses flux ERP tout en valorisant les équipes internes.",
    objectiveEn:
      "Modernize a historic food industry brand's image and automate its ERP workflows while developing internal teams.",
    missions: [
      "Supervision technique du connecteur ERP Kaeliips via API.",
      "Animation de sessions de formation pour les équipes client et les alternants.",
      "Maintenance stratégique et relation client sur le long terme.",
    ],
    missionsEn: [
      "Technical supervision of the Kaeliips ERP API connector.",
      "Led training sessions for client teams and apprentices.",
      "Strategic long-term maintenance and client relationship management.",
    ],
    highlights: [
      { value: "23 oct. 2024", label: "Lancement", labelEn: "Launch" },
      { value: "Kaeliips API", label: "ERP connecté", labelEn: "Connected ERP" },
      { value: "Mentorat", label: "Formation", labelEn: "Training" },
    ],
    tags: ["Shopify", "API Shopify", "PHP", "Kaeliips"],
    year: "2024",
    link: "https://lesgarconsbouchers.fr/",
    accentColor: "#6C9A8B",
    logo: "/projects/Garcons_bouchers.png",
  },
  {
    id: "proj16",
    title: "Fondation des Possibles",
    role: "Chef de Projet Tech & UI/UX Designer",
    roleEn: "Tech Project Manager & UI/UX Designer",
    shortDescription: "Accompagnement historique · Figma & Relation client",
    shortDescriptionEn: "Historical Support · Figma & Client relations",
    objective:
      "Créer une plateforme solidaire moderne avec un accompagnement client de long terme qui se poursuit encore aujourd'hui.",
    objectiveEn:
      "Build a modern social impact platform with a long-term client partnership that continues to this day.",
    missions: [
      "Conception intégrale des wireframes et maquettes sur Figma.",
      "Pilotage de l'accompagnement sur-mesure sur le long terme.",
      "Gestion complète de la relation client et de l'analyse des besoins.",
    ],
    missionsEn: [
      "Full wireframe and mockup design on Figma.",
      "Long-term custom partnership management.",
      "Complete client relationship management and needs analysis.",
    ],
    highlights: [
      { value: "7 mai 2024", label: "Lancement", labelEn: "Launch" },
      { value: "Suivi continu", label: "Partenariat", labelEn: "Partnership" },
      { value: "1er projet Shopify", label: "Étape clé", labelEn: "Key milestone" },
    ],
    tags: ["Shopify", "Figma", "UX/UI"],
    year: "2024",
    link: "https://lafondationdespossibles.com/",
    accentColor: "#6C9A8B",
    logo: "/projects/Fondation-des-possibles.png",
  },
];
