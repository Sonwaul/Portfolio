export interface Project {
  id: string;
  title: string;
  role: string;
  roleEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  description: string;
  descriptionEn: string;
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
    shortDescription: "Migration B2B · Synchronisation Sage X3",
    shortDescriptionEn: "B2B Migration · Sage X3 Synchronization",
    description:
      "Pilotage global de la refonte d'une plateforme e-commerce B2B vieillissante de plus de 10 ans vers l'écosystème Shopify (lancé le 26 mai 2026). Gestion des plannings, distribution des tâches et animation des réunions clients. Le défi consistait à moderniser l'interface tout en maintenant l'interconnexion automatisée par échange de fichiers à plat avec l'ERP Sage X3 et en accompagnant le changement pour les clients B2B historiques. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Led the comprehensive overhaul of an aging B2B e-commerce platform (over 10 years old) migrating to Shopify (launched May 26, 2026). Managed timelines, task allocation, and client workshops. The core challenge was modernizing the interface while securing automated flat-file synchronization with Sage X3 ERP and managing user adoption for historical B2B clients. Project executed within HUGGII agency.",
    tags: ["Shopify", "ERP Fichier à plat", "B2B & B2C", "Sage X3"],
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
    description:
      "Développement et publication en totale autonomie d'une application officielle sur le Shopify App Store (publiée le 25 mai 2026). Gestion intégrale du cycle de vie du produit : de la relation directe avec les équipes de Creditsafe au cadrage en sprints agiles, jusqu'à la présentation directionnelle et la formation technique des équipes internes. Une expertise unique sur la conception d'applications Shopify de bout en bout. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "End-to-end development and publication of an official application on the Shopify App Store (released May 25, 2026). Managed the entire product lifecycle: from direct relations with Creditsafe teams and agile sprint planning, to steering committee presentations and internal team training. Project executed within HUGGII agency.",
    tags: ["Shopify App", "API Shopify", "React / Next.js"],
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
    description:
      "Conception et réalisation intégrale de la plateforme e-commerce (lancée le 16 avril 2026). Accompagnement, relation client de proximité et formation des utilisateurs chez le client. Projet à fort impact médiatique, mis en avant sur France 2 lors d'un reportage dédié au Concours Lépine 2025. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "End-to-end design and creation of the e-commerce platform (launched April 16, 2026). Handled client user training and direct client relations. High-impact project featured on France 2 national television during a report on the 2025 Concours Lépine. Project executed within HUGGII agency.",
    tags: ["Shopify", "UX/UI", "B2C"],
    year: "2026",
    link: "https://1705.fr/",
    accentColor: "#3E7C59",
    logo: "/projects/Parapluie_1705.png",
  },
  {
    id: "proj4",
    title: "Sonolens",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Architecture Multi-flux · ERP EBP SDK & Système de location",
    shortDescriptionEn: "Multi-flow Architecture · EBP SDK ERP & Rental System",
    description:
      "Conception technique et gestion de projet pour fusionner plusieurs sites web sur une seule instance Shopify. Mise en place d'un connecteur complexe multi-flux via API (EBP SDK) et logiciels logistiques pour automatiser la gestion des stocks en temps réel pour un modèle hybride : réservation de location de matériel et vente de produits. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Technical blueprint and project management to consolidate multiple sites into a single Shopify storefront. Implemented a complex multi-flow API connector linked to EBP ERP (via SDK) and warehouse software to automate real-time inventory management for a hybrid business model. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "ERP Fichier à plat", "EBP SDK", "B2B & B2C"],
    year: "2026",
    link: "https://sonolens.fr/",
    accentColor: "#85B3A3",
    logo: "/projects/Sonolens.png",
  },
  {
    id: "proj5",
    title: "Outrebon",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Relation client de proximité · ERP Kaeliips",
    shortDescriptionEn: "Local Client Relations · Kaeliips ERP",
    description:
      "Pilotage de la relation client de proximité via des comités de projet physiques réguliers pour suivre l'avancée du projet (aboutissant au lancement le 10 mars 2026). Conception et déploiement du connecteur API Shopify lié à l'API de l'ERP Kaeliips, suivi d'un accompagnement rigoureux en maintenance évolutive. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Management of client relations through regular physical project committees to track project progress (resulting in the March 10, 2026 launch). Designed and deployed the Shopify API connector linked to the Kaeliips ERP API, followed by continuous scalable maintenance. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP API", "Kaeliips", "B2B"],
    year: "2026",
    link: "https://sa-outrebon.fr/",
    accentColor: "#3D6B58",
    logo: "/projects/Outrebon.png",
  },
  {
    id: "proj6",
    title: "Exsud",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Projet International (Belgique/Pologne) · Secteur Luxe",
    shortDescriptionEn: "International Project (Belgium/Poland) · Luxury Sector",
    description:
      "Migration de la plateforme e-commerce pour une grande marque belgo-polonaise (réalisé le 20 janvier 2026), dans le cadre de la préparation de l'événement Maison & Déco à Paris. Création d'une interface ultra-élégante couplée à un très gros objectif de structure SEO internationale. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Developed the e-commerce store migration for a prominent Belgian-Polish brand (completed January 20, 2026), preparing for the Maison & Déco Paris event. Delivered a high-end elegant interface coupled with complex international SEO architecture. Project executed within HUGGII agency.",
    tags: ["Shopify", "SEO", "B2C"],
    year: "2026",
    link: "https://exsud.com/",
    accentColor: "#76A595",
    logo: "/projects/Exsud.png",
  },
  {
    id: "proj7",
    title: "Automatic Technologies",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Interopérabilité ERP EBP SaaS · Enjeux SEO",
    shortDescriptionEn: "EBP SaaS ERP Interoperability · SEO Migration",
    description:
      "Direction d'un projet complexe à forts enjeux d'interopérabilité technique et de référencement (lancé le 24 décembre 2025). Conservation du positionnement Google historique lors de la migration. Interconnexion automatisée par API Rest des flux métiers via l'ERP EBP SaaS et l'API Shopify. Recommandation client 5 étoiles sur Google. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Directed a complex project with high stakes in technical interoperability and SEO migration data integrity (launched December 24, 2025). Interconnected business workflows via API with EBP SaaS ERP and Shopify API. Received a 5-star Google review. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP API", "SEO", "B2B", "EBP SaaS"],
    year: "2025",
    link: "https://automatic-technologies.com/",
    accentColor: "#6B9E90",
    logo: "/projects/Automatic-technologies.png",
  },
  {
    id: "proj8",
    title: "Emballages.fr",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Lancement d'activité · Couplage ERP EBP SaaS",
    shortDescriptionEn: "Business Launch · EBP SaaS ERP Coupling",
    description:
      "Accompagnement au lancement d'une nouvelle activité commerciale à fort enjeu économique (mise en ligne le 16 novembre 2025). Gestion de la relation client et de projet axée sur l'intégration par API de l'ERP EBP SaaS avec Shopify, combinée à une optimisation technique SEO pointue pour maximiser le démarrage. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Supported the launch of a new business activity with high economic stakes (live on November 16, 2025). Project management focused on API integration between EBP SaaS ERP and Shopify, combined with technical SEO optimization. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP API", "SEO", "B2B", "EBP SaaS"],
    year: "2025",
    link: "https://www.emballages.fr/",
    accentColor: "#597E6F",
    logo: "/projects/Emballages_fr.png",
  },
  {
    id: "proj9",
    title: "Tandem Fragrances",
    role: "Chef de Projet Tech & UI/UX Designer",
    roleEn: "Tech Project Manager & UI/UX Designer",
    shortDescription: "Lancement e-commerce · UX/UI & Mentorat",
    shortDescriptionEn: "E-commerce Launch · UX/UI & Mentoring",
    description:
      "Pilotage et coordination d'un projet e-commerce lancé avec succès dans les délais impartis. Réalisation de la phase d'UX/UI Design sur Figma, intégration Front-end et mise en place d'un mentorat interne avec les collaborateurs alternants pour appréhender les architectures sur-mesure. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project management and coordination of an e-commerce project delivered on time and on brief. Executed UX/UI design via Figma, Front-end integration, and internal mentoring with apprentices to manage custom platform workflows. Project executed within HUGGII agency.",
    tags: ["Shopify", "Figma", "UX/UI", "B2C"],
    year: "2025",
    link: "https://tandem-fragrances.fr/",
    accentColor: "#8FB4A7",
    logo: "/projects/Tandem-fragrances.png",
  },
  {
    id: "proj10",
    title: "Les Ateliers de Langres",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Intégration ERP Sage · Projet long terme complexe",
    shortDescriptionEn: "Sage ERP integration · Complex long-term project",
    description:
      "Gestion de projet long terme sur un périmètre technique et fonctionnel complexe. Intégration avancée par échange de fichiers à plat (CSV/XML automatisés) entre l'API Shopify et l'ERP Sage, apportant un gain de temps opérationnel majeur et un vrai succès commercial pour le client. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Long-term project management within a complex technical scope. Successfully integrated the Shopify API with Sage ERP using automated flat-file processing (CSV/XML), delivering significant operational time savings. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP Fichier à plat", "B2B", "Sage"],
    year: "2025",
    link: "https://les-ateliers-de-langres.fr/",
    accentColor: "#7BA896",
    logo: "/projects/Ateliers_de_langres.png",
  },
  {
    id: "proj11",
    title: "Minois Paris",
    role: "Lead Projet & Développeur Back-end",
    roleEn: "Project Lead & Back-end Developer",
    shortDescription: "Shopify Plus B2B · Connecteur ERP Sellsy",
    shortDescriptionEn: "Shopify Plus B2B · Sellsy ERP Connector",
    description:
      "Développement de la plateforme e-commerce B2B sur l'infrastructure haut de gamme Shopify Plus pour une marque de référence majeure (déployée le 5 avril 2025). Conception et intégration réussie du connecteur API Rest sur-mesure entre Shopify et l'ERP Sellsy pour répondre à de très fortes exigences de flux. Maintenance active. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Developed the B2B store on high-tier Shopify Plus infrastructure for a leading reference brand (deployed April 5, 2025). Designed and successfully integrated a custom REST API connector between Shopify and Sellsy ERP to meet high enterprise standards. Project executed within HUGGII agency.",
    tags: ["Shopify Plus", "API Shopify", "B2B", "ERP API", "Sellsy"],
    year: "2025",
    link: "https://www.minoisparis.com/",
    accentColor: "#5E8E7E",
    logo: "/projects/Minois_paris.png",
  },
  {
    id: "proj12",
    title: "Skintips",
    role: "Lead Projet & Développeur Back-end",
    roleEn: "Project Lead & Back-end Developer",
    shortDescription: "Connecteur Shopify × ERP Sellsy",
    shortDescriptionEn: "Shopify × Sellsy ERP Connector",
    description:
      "Pilotage de projet et développement d'un connecteur sur-mesure basé sur l'API Rest entre l'écosystème Shopify et l'ERP Sellsy (aboutissant au lancement le 20 décembre 2024). Gestion globale de la maintenance applicative et du suivi, avec optimisation continue des flux logistiques. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project management and custom REST API connector development between Shopify and Sellsy ERP (launched December 20, 2024). Handled comprehensive application maintenance and monitoring, optimizing logistics workflows. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP API", "Sellsy", "B2B"],
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
    description:
      "Gestion de projet, relation client et architecture technique d'une plateforme e-commerce orientée B2B lancée le 19 novembre 2024 (flux de tarifs professionnels). Développement d'une passerelle de synchronisation automatisée via l'API Sellsy, récompensée par un avis client 5 étoiles et un suivi de maintenance continu. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project management, client relations, and technical architecture for a B2B e-commerce platform launched November 19, 2024 (wholesale pricing workflows). Developed an automated data synchronization gateway via Sellsy API, backed by a 5-star review. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP API", "B2B", "Sellsy"],
    year: "2024",
    link: "https://pro.nemrod.co/",
    accentColor: "#9DBFB5",
    logo: "/projects/Nemrod.png",
  },
  {
    id: "proj14",
    title: "Mademoiselle Biloba",
    role: "Chef de Projet Tech & UI/UX Designer",
    roleEn: "Tech Project Manager & UI/UX Designer",
    shortDescription: "Migration Shopify POS · Optimisation Conversion IA",
    shortDescriptionEn: "Shopify POS Migration · AI Conversion Optimization",
    description:
      "Projet initié le 1 novembre 2024 avec un suivi de maintenance actif depuis le lancement. Migration complète du catalogue vers Shopify incluant le système de caisse physique Shopify POS. Implémentation régulière des dernières nouveautés technologiques liées à l'IA, à l'UX/UI et à l'optimisation du taux de conversion. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project launched November 1, 2024, with continuous evolutionary maintenance. Full migration to Shopify including omnichannel Shopify POS integration. Regularly deployed cutting-edge web developments in AI, UX/UI, and conversion rate optimization. Project executed within HUGGII agency.",
    tags: ["Shopify", "Shopify POS", "UX/UI", "B2C"],
    year: "2024",
    link: "https://mademoiselle-biloba.fr/",
    accentColor: "#91BFB0",
    logo: "/projects/Mademoiselle_biloba.png",
  },
  {
    id: "proj15",
    title: "Les Garçons Bouchers",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    shortDescription: "Support stratégique long terme & Mentorat alternants",
    shortDescriptionEn: "Long-term Strategic Support & Apprentice Mentoring",
    description:
      "Accompagnement continu, relation client et maintenance stratégique depuis le lancement du premier virage numérique de cet acteur alimentaire majeur le 23 octobre 2024. Supervision technique du connecteur de l'ERP Kaeliips géré par API et animation de sessions de formation régulières pour les alternants de l'agence et les équipes du client. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Continuous strategic support, client relations, and maintenance since this major food industry client's first digital shift launched October 23, 2024. Technical supervision of the Kaeliips ERP API connector and led regular training sessions for apprentices. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP API", "B2C", "Kaeliips"],
    year: "2024",
    link: "https://lesgarconsbouchers.fr/",
    accentColor: "#517A6B",
    logo: "/projects/Garcons_bouchers.png",
  },
  {
    id: "proj16",
    title: "Fondation des Possibles",
    role: "Chef de Projet Tech & UI/UX Designer",
    roleEn: "Tech Project Manager & UI/UX Designer",
    shortDescription: "Accompagnement historique · Figma & Relation client",
    shortDescriptionEn: "Historical Support · Figma & Client relations",
    description:
      "Premier projet d'envergure mené sur l'écosystème Shopify dès le 7 mai 2024. Gestion complète de la relation client, conception des wireframes sur Figma et pilotage d'un accompagnement sur-mesure sur le long terme qui se poursuit encore aujourd'hui. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "First major project executed on the Shopify ecosystem on May 7, 2024. Managed client relations, wireframe design via Figma, and directed a tailored, long-term partnership that continues today. Project executed within HUGGII agency.",
    tags: ["Shopify", "Figma", "UX/UI"],
    year: "2024",
    link: "https://lafondationdespossibles.com/",
    accentColor: "#5B8A7A",
    logo: "/projects/Fondation-des-possibles.png",
  },
];