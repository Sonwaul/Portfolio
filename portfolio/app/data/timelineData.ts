export interface TimelineTab {
  label: string;
  missions: string[];
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  company: string;
  role: string;
  roleEn?: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  shortDescription: string;
  shortDescriptionEn?: string;
  missions: string[];
  missionsEn?: string[];
  tabs?: TimelineTab[];
  tags: string[];
  logo?: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: "exp1",
    type: "experience",
    company: "HUGGII",
    role: "Lead Projet & Développeur Full Stack",
    roleEn: "Project Lead & Full Stack Developer",
    location: "Roubaix",
    startDate: "Sept. 2023",
    endDate: null,
    current: true,
    shortDescription: "Pilier central des projets web de l'agence. J'assure le lien direct entre les besoins business des clients et l'équipe technique, de la phase d'analyse initiale jusqu'à la livraison. Mes missions incluent le pilotage de projet, la rédaction des devis et cahiers des charges, la formation et le mentorat des collaborateurs, ainsi que le développement d'architectures et de flux complexes.",
    shortDescriptionEn: "Central pillar of the agency's web projects. I ensure a direct connection between clients' business needs and the technical team, from initial analysis to final delivery. My responsibilities include project management, drafting specifications and quotes, onboarding and mentoring team members, as well as developing robust architectures and complex workflows.",
    missions: [
      "Pilotage de projets de A à Z via ClickUp en méthode Agile",
      "Relation client directe : analyse des besoins, devis, réunions de suivi",
      "Formation et mentorat des collaborateurs",
      "Connexion Shopify aux CRM/ERP via API, WebServices, CSV et JSON",
      "Maintenance serveurs internes, logs et scripts fonctionnels",
    ],
    missionsEn: [
      "End-to-end project management using ClickUp and Agile methodology",
      "Direct client communication: requirements analysis, quoting, follow-up meetings",
      "Onboarding and mentoring of team members",
      "Shopify integrations with CRM/ERP via API, WebServices, CSV and JSON",
      "Internal server maintenance, log monitoring and functional scripting",
    ],
    tags: ["Lead Projet", "ClickUp", "Agile", "Shopify", "API", "Symfony", "Formation", "Relation Client"],
    logo: "/experiences/huggii.png",
  },
  {
    id: "exp2",
    type: "experience",
    company: "HUGGII",
    role: "Développeur Web PHP (Alternant)",
    roleEn: "PHP Web Developer (Apprenticeship)",
    location: "Roubaix",
    startDate: "Sept. 2022",
    endDate: "Août 2023",
    current: false,
    shortDescription: "Conception, réalisation et déploiement d'une solution multi-site e-commerce sécurisée sous Symfony. Gestion et automatisation de flux de données complexes (tarifs, produits, commandes) entre l'application et les différents ERP/CRM des clients via des connecteurs API et CSV. Pilotage technique de la migration de projets vers l'écosystème Shopify.",
    shortDescriptionEn: "Design, development, and deployment of a secure multi-site e-commerce solution using Symfony. Managed and automated complex data workflows (pricing, products, orders) between the application and clients' ERP/CRM systems via API and CSV connectors. Technical lead on project migrations to the Shopify ecosystem.",
    missions: [
      "Conception d'une solution multi-site e-commerce sécurisée sous Symfony",
      "Automatisation de flux de données (tarifs, produits, commandes) via API et CSV",
      "Pilotage technique de la migration de projets vers Shopify",
    ],
    missionsEn: [
      "Design of a secure multi-site e-commerce solution using Symfony",
      "Automated data workflows (pricing, products, orders) via API and CSV connectors",
      "Technical lead on project migrations to the Shopify ecosystem",
    ],
    tags: ["PHP", "Symfony", "Shopify", "API", "E-commerce", "Flux de données", "Migrations"],
    logo: "/experiences/huggii.png",
  },
  {
    id: "exp3",
    type: "experience",
    company: "Anetmo",
    role: "Stagiaire Développeur Web",
    roleEn: "Web Developer Intern",
    location: "Hem",
    startDate: "Jan. 2022",
    endDate: "Fév. 2022",
    current: false,
    shortDescription: "Création, déploiement et maintenance de sites vitrines et e-commerce basés sur WordPress et PrestaShop. Prise en charge directe de la relation client technique pour la présentation des maquettes et l'adaptation des livrables en fonction des spécifications du cahier des charges.",
    shortDescriptionEn: "Creation, deployment, and maintenance of showcase and e-commerce websites based on WordPress and PrestaShop. Directly managed technical client relations for mockup presentations and adjusted deliverables based on project specifications.",
    missions: [
      "Création et déploiement de sites vitrines et e-commerce (WordPress, PrestaShop)",
      "Maintenance et évolutions des sites existants",
      "Relation client technique : présentation des maquettes et adaptation des livrables",
    ],
    missionsEn: [
      "Creation and deployment of showcase and e-commerce websites (WordPress, PrestaShop)",
      "Maintenance and updates of existing websites",
      "Technical client relations: mockup presentations and deliverable adjustments",
    ],
    tags: ["WordPress", "PrestaShop", "Relation Client", "E-commerce"],
    logo: "/experiences/anetmo.png",
  },
  {
    id: "exp4",
    type: "experience",
    company: "Proditex",
    role: "Stagiaire Développeur Web",
    roleEn: "Web Developer Intern",
    location: "Leers",
    startDate: "Mai 2021",
    endDate: "Juin 2021",
    current: false,
    shortDescription: "Développement complet d'une application interne dédiée à la gestion des commandes. Conception de la logique algorithmique, modélisation et administration de la base de données relationnelle SQL, et mise en production de la solution.",
    shortDescriptionEn: "Full development of an internal order management application. Designed the algorithmic logic, modeled and administered the SQL relational database, and deployed the solution live.",
    missions: [
      "Développement d'une application interne de gestion des commandes",
      "Conception de la logique algorithmique et modélisation SQL",
      "Mise en production de la solution",
    ],
    missionsEn: [
      "Development of an internal order management application",
      "Algorithmic logic design and SQL database modeling",
      "Live deployment of the solution",
    ],
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    logo: "/experiences/proditex.png",
  },
];

export const educationItems: TimelineItem[] = [
  {
    id: "edu1",
    type: "education",
    company: "IUT A – Université de Lille",
    role: "Licence Professionnelle DA2I",
    location: "Lille",
    startDate: "2022",
    endDate: "2023",
    current: false,
    shortDescription: "Approfondissement de l'architecture logicielle, Java et Spring. Méthodes agiles et projet tuteuré.",
    missions: [
      "Architecture applicative avancée et patterns de conception",
      "Java et Spring Framework",
      "Méthodes agiles appliquées en contexte projet",
      "Projet tuteuré en entreprise",
    ],
    tags: ["Java", "Spring", "Architecture", "Agile"],
    logo: "/experiences/iut.png",
  },
  {
    id: "edu2",
    type: "education",
    company: "Lycée Saint Rémi",
    role: "BTS SIO option SLAM",
    location: "Roubaix",
    startDate: "2020",
    endDate: "2022",
    current: false,
    shortDescription: "Développement d'applications (Java, Python, PHP, Symfony) et gestion de bases de données SQL.",
    missions: [
      "Développement d'applications : Java, Python, PHP, Symfony",
      "Conception et gestion de bases de données SQL",
      "Projets de développement en équipe",
    ],
    tags: ["Java", "Python", "PHP", "Symfony"],
    logo: "/experiences/saint-remi.png",
  },
  {
    id: "edu3",
    type: "education",
    company: "Lycée Saint Rémi",
    role: "BAC S – Sciences de l'Ingénieur option ISN",
    location: "Roubaix",
    startDate: "2017",
    endDate: "2020",
    current: false,
    shortDescription: "Formation de la pensée logique, mathématique et initiation aux sciences du numérique.",
    missions: [
      "Mathématiques avancées et Sciences de l'Ingénieur",
      "Spécialisation ISN : logique algorithmique et résolution de problèmes",
    ],
    tags: ["Maths", "Sciences", "ISN", "Algorithmique"],
    logo: "/experiences/saint-remi.png",
  },
];
