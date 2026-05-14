export interface TimelineTab {
  label: string;
  missions: string[];
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  shortDescription: string;
  missions: string[];
  tabs?: TimelineTab[];
  tags: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    id: "exp1",
    type: "experience",
    company: "HUGGII",
    role: "CDI Technicien Développeur Full Stack & Lead Projet",
    location: "Roubaix",
    startDate: "Sept. 2023",
    endDate: null,
    current: true,
    shortDescription: "Pilier central des projets web : du client à l'équipe, de l'analyse à la livraison.",
    missions: [
      "Pilotage de projets de A à Z via ClickUp (Agile)",
      "Relation client directe : analyse des besoins, devis, réunions de suivi",
      "Mentorat des alternants via la méthode « back-up »",
      "Connexion Shopify aux CRM/ERP via API, WebServices, CSV et JSON",
      "Maintenance serveurs internes, logs et scripts fonctionnels",
    ],
    tabs: [
      {
        label: "Management & Pilotage",
        missions: [
          "Gestion de projets : Pilotage de A à Z via ClickUp en méthode Agile (définition des tâches, deadlines et priorités).",
          "Relation Client : Interlocuteur direct pour l'analyse des besoins métier, la rédaction de devis et les réunions de suivi.",
          "Formation : Mentorat des alternants via la méthode « back-up » : transmission du savoir et accompagnement vers l'autonomie.",
          "Accompagnement : Suivi après-vente, maintenance informative et conseils stratégiques pour booster les ventes clients.",
        ],
      },
      {
        label: "Expertise Technique",
        missions: [
          "Architecture Shopify : Développement de thèmes (Liquid), d'applications sur-mesure et configuration avancée.",
          "Flux de données : Utilisation d'API, WebServices, CSV et JSON pour connecter Shopify aux CRM/ERP.",
          "Infrastructure : Maintenance des serveurs internes, gestion des logs et déploiement de scripts fonctionnels.",
        ],
      },
    ],
    tags: ["Lead Projet", "ClickUp", "Agile", "Shopify", "API", "Formation"],
  },
  {
    id: "exp2",
    type: "experience",
    company: "HUGGII",
    role: "Alternant Développeur Web PHP",
    location: "Roubaix",
    startDate: "2022",
    endDate: "2023",
    current: false,
    shortDescription: "Architecture e-commerce multi-sites et migration stratégique vers l'écosystème Shopify.",
    missions: [
      "Conception d'une solution multi-site e-commerce sécurisée sous Symfony",
      "Migration stratégique de projets vers Shopify",
      "Développement de connecteurs flux de données complexes (API/CSV/JSON)",
    ],
    tags: ["PHP", "Symfony", "Shopify", "API", "E-commerce"],
  },
  {
    id: "exp3",
    type: "experience",
    company: "Proditex · Anetmo",
    role: "Développeur Web — Stages",
    location: "Métropole Lilloise",
    startDate: "2021",
    endDate: "2022",
    current: false,
    shortDescription: "Immersion dans le monde pro : HTML, CSS, JavaScript et respect des cahiers des charges.",
    missions: [
      "Création d'une application de gestion de commandes en PHP/MySQL (Proditex)",
      "Premier contact avec le relationnel client et analyse des besoins métier",
      "Maîtrise des fondamentaux du Web (HTML/CSS/JS)",
    ],
    tags: ["HTML/CSS", "JS", "PHP", "Relation Client"],
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
  },
];
