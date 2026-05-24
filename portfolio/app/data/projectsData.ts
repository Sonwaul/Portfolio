export interface Project {
  id: string;
  title: string;
  role: string;
  roleEn?: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  description: string;
  descriptionEn?: string;
  tags: string[];
  year: string;
  status: "ongoing" | "done";
  link: string | null;
  github: string | null;
  accentColor: string;
  logo?: string;
}

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Skintips",
    role: "Lead Projet & Développeur Back-end",
    roleEn: "Project Lead & Back-end Developer",
    shortDescription: "Connecteur Shopify × ERP Sellsy",
    shortDescriptionEn: "Shopify × Sellsy ERP Connector",
    description:
      "Pilotage de projet et développement d'un connecteur sur-mesure entre l'écosystème Shopify et l'ERP Sellsy. Gestion globale de la maintenance applicative et du suivi, avec optimisation continue des flux logistiques. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project management and custom connector development between Shopify and Sellsy ERP. Handled comprehensive application maintenance and monitoring, optimizing logistics workflows. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP Sellsy"],
    year: "2024",
    status: "ongoing",
    link: "https://www.skintips.co/",
    github: null,
    accentColor: "#6C9A8B",
    logo: "/projects/skintips.webp",
  },
  {
    id: "proj2",
    title: "Parapluie 1705",
    role: "Chef de Projet & Développeur Full Stack",
    roleEn: "Project Manager & Full Stack Developer",
    shortDescription: "E-commerce médiatisé · France 2",
    shortDescriptionEn: "Featured e-commerce · France 2 TV",
    description:
      "Conception et réalisation intégrale de la plateforme e-commerce. Accompagnement et formation des utilisateurs chez le client. Projet à fort impact médiatique, mis en avant sur France 2 lors d'un reportage dédié au Concours Lépine 2025. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "End-to-end design and creation of the e-commerce platform. Handled client user training. High-impact project featured on France 2 national television during a report on the 2025 Concours Lépine. Project executed within HUGGII agency.",
    tags: ["Shopify"],
    year: "2025",
    status: "ongoing",
    link: "https://1705.fr/",
    github: null,
    accentColor: "#3E7C59",
  },
  {
    id: "proj3",
    title: "Tandem Fragrances",
    role: "Chef de Projet, UI/UX Designer & Mentor",
    roleEn: "Project Manager, UI/UX Designer & Mentor",
    shortDescription: "Double lancement · UX/UI & Mentorat",
    shortDescriptionEn: "Dual launch · UX/UI & Mentoring",
    description:
      "Management et coordination du projet dans le cadre d'un double lancement simultané. Réalisation de la phase d'UX/UI Design sur Figma, intégration Front-end et mise en place d'un mentorat interne avec les collaborateurs alternants. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project management and coordination within a simultaneous double-launch framework. Executed UX/UI design via Figma, Front-end integration, and internal mentoring with apprentices. Project executed within HUGGII agency.",
    tags: ["Shopify", "Figma", "UX/UI"],
    year: "2024",
    status: "done",
    link: "https://tandem-fragrances.fr/",
    github: null,
    accentColor: "#8FB4A7",
    logo: "/projects/tandem-fragrances.webp",
  },
  {
    id: "proj4",
    title: "Ombres Portées",
    role: "Chef de Projet, UI/UX Designer & Mentor",
    roleEn: "Project Manager, UI/UX Designer & Mentor",
    shortDescription: "E-commerce parfumerie · Shopify & Figma",
    shortDescriptionEn: "Perfumery e-commerce · Shopify & Figma",
    description:
      "Direction de projet pour la création de la boutique e-commerce en parallèle d'un second site de marque. Conception des maquettes sur Figma, intégration et maintenance, couplées à la formation des alternants de l'équipe. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project management for the e-commerce store creation alongside a second brand website. Designed mockups via Figma, handled integration and maintenance, and trained team apprentices. Project executed within HUGGII agency.",
    tags: ["Shopify", "Figma", "UX/UI"],
    year: "2024",
    status: "done",
    link: "https://ombres-portees-parfumeur.fr/",
    github: null,
    accentColor: "#4A7A6A",
  },
  {
    id: "proj5",
    title: "Les Ateliers de Langres",
    role: "Lead Projet & Consultant Technique",
    roleEn: "Project Lead & Technical Consultant",
    shortDescription: "Intégration ERP Sage · projet long terme",
    shortDescriptionEn: "Sage ERP integration · long-term project",
    description:
      "Gestion de projet long terme (plus d'un an) sur un périmètre technique complexe. Intégration avancée entre l'API Shopify et l'ERP Sage, apportant un gain de temps opérationnel majeur et un vrai succès commercial pour le client. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Long-term project management (over a year) within a complex technical scope. Successfully integrated the Shopify API with Sage ERP, delivering significant operational time savings and business growth. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP Sage"],
    year: "2023",
    status: "ongoing",
    link: "https://les-ateliers-de-langres.fr/",
    github: null,
    accentColor: "#7BA896",
  },
  {
    id: "proj6",
    title: "Outrebon",
    role: "Chef de Projet & Développeur Back-end",
    roleEn: "Project Manager & Back-end Developer",
    shortDescription: "Connecteur API Shopify × ERP Kaeliips",
    shortDescriptionEn: "Shopify API × Kaeliips ERP Connector",
    description:
      "Pilotage de la relation client via des comités de projet physiques réguliers. Conception et déploiement du connecteur API Shopify lié à l'ERP Kaeliips, suivi d'un accompagnement en maintenance évolutive. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Management of client relations through regular physical project committees. Designed and deployed the Shopify API connector linked to Kaeliips ERP, followed by continuous scalable maintenance. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP Kaeliips"],
    year: "2024",
    status: "done",
    link: "https://sa-outrebon.fr/",
    github: null,
    accentColor: "#3D6B58",
  },
  {
    id: "proj7",
    title: "Nemrod",
    role: "Lead Projet B2B & Développeur Back-end",
    roleEn: "B2B Project Lead & Back-end Developer",
    shortDescription: "Plateforme B2B · synchronisation Sellsy",
    shortDescriptionEn: "B2B platform · Sellsy synchronization",
    description:
      "Gestion de projet et architecture technique d'une plateforme e-commerce orientée B2B. Développement d'une passerelle de synchronisation automatisée via l'API Sellsy, récompensée par un avis client 5 étoiles. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Project management and technical architecture for a B2B e-commerce platform. Developed an automated data synchronization gateway via Sellsy API, backed by a 5-star review. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP Sellsy"],
    year: "2024",
    status: "done",
    link: "https://pro.nemrod.co/",
    github: null,
    accentColor: "#9DBFB5",
    logo: "/projects/nemrod.webp",
  },
  {
    id: "proj8",
    title: "Les Garçons Bouchers",
    role: "Consultant e-Commerce, Mentor & Lead Technique",
    roleEn: "e-Commerce Consultant, Mentor & Tech Lead",
    shortDescription: "Support stratégique & formation équipe",
    shortDescriptionEn: "Strategic support & team training",
    description:
      "Accompagnement continu et stratégique depuis 2024. Supervision technique du connecteur ERP Kaeliips et animation de sessions de formation régulières pour les alternants de l'agence et les équipes du client. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Continuous strategic support since 2024. Technical supervision of the Kaeliips ERP connector and led regular training sessions for both internal apprentices and client teams. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP Kaeliips"],
    year: "2024",
    status: "ongoing",
    link: "https://lesgarconsbouchers.fr/",
    github: null,
    accentColor: "#517A6B",
  },
  {
    id: "proj9",
    title: "Automatic Technologies",
    role: "Chef de Projet Tech & Expert SEO",
    roleEn: "Tech Project Manager & SEO Expert",
    shortDescription: "Interopérabilité ERP EBP × SEO",
    shortDescriptionEn: "EBP ERP interoperability × SEO",
    description:
      "Direction d'un projet complexe à forts enjeux d'interopérabilité technique et de référencement. Interconnexion des flux métiers via l'ERP EBP SaaS et l'API Shopify. Recommandation client 5 étoiles sur Google. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "Directed a complex project with high stakes in technical interoperability and SEO. Interconnected business workflows via EBP SaaS ERP and Shopify API. Received a 5-star Google review. Project executed within HUGGII agency.",
    tags: ["Shopify", "API Shopify", "PHP", "ERP EBP", "SEO"],
    year: "2024",
    status: "done",
    link: "https://automatic-technologies.com/",
    github: null,
    accentColor: "#6B9E90",
    logo: "/projects/automatic-technologies.webp",
  },
  {
    id: "proj10",
    title: "Fondation des Possibles",
    role: "Chef de Projet & UX/UI Planner",
    roleEn: "Project Manager & UX/UI Planner",
    shortDescription: "Premier Shopify · Figma & relation client",
    shortDescriptionEn: "First Shopify · Figma & client relations",
    description:
      "Premier projet d'envergure mené sur l'écosystème Shopify dès 2023. Gestion de la relation client, conception des wireframes sur Figma et pilotage d'un accompagnement sur-mesure sur le long terme. Projet réalisé au sein de l'agence HUGGII.",
    descriptionEn:
      "First major project executed on the Shopify ecosystem in 2023. Managed client relations, wireframe design via Figma, and directed a tailored, long-term partnership. Project executed within HUGGII agency.",
    tags: ["Shopify", "Figma", "UX/UI"],
    year: "2023",
    status: "done",
    link: "https://lafondationdespossibles.com/",
    github: null,
    accentColor: "#5B8A7A",
    logo: "/projects/fondation-des-possibles.webp",
  },
];
