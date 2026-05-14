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
  tags: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    id: "exp1",
    type: "experience",
    company: "HUGGII",
    role: "Technicien Développeur Full Stack & Lead Projets",
    location: "Roubaix",
    startDate: "Sept. 2023",
    endDate: null,
    current: true,
    shortDescription: "Pilier central des projets web : du client à l'équipe, de l'analyse à la livraison.",
    missions: [
      "Gestion de projets complexes de bout en bout (analyse, coordination, livraison)",
      "Interface directe avec les clients pour l'analyse des besoins et le suivi",
      "Formation technique et accompagnement des alternants et nouveaux arrivants",
      "Maintenance de l'infrastructure serveurs et scripts critiques",
      "Rédaction de cahiers des charges et spécifications fonctionnelles",
    ],
    tags: ["Lead Projets", "Relation client", "PHP", "Shopify", "Formation"],
  },
  {
    id: "exp2",
    type: "experience",
    company: "HUGGII",
    role: "Développeur Web PHP (Alternance)",
    location: "Roubaix",
    startDate: "2022",
    endDate: "2023",
    current: false,
    shortDescription: "Architecture e-commerce multi-sites et migration stratégique vers Shopify.",
    missions: [
      "Architecture d'une solution e-commerce multi-sites sous Symfony",
      "Migration stratégique vers Shopify via API",
      "Développement de connecteurs ERP/CRM (import/export CSV/XML/JSON)",
      "Maintenance et évolution des modules PHP existants",
    ],
    tags: ["PHP", "Symfony", "Shopify", "API", "E-commerce"],
  },
  {
    id: "exp3",
    type: "experience",
    company: "Proditex & Anetmo",
    role: "Développeur Web (Stages)",
    location: "Métropole Lilloise",
    startDate: "2021",
    endDate: "2022",
    current: false,
    shortDescription: "Premiers pas en développement web et découverte du relationnel client.",
    missions: [
      "Découverte du relationnel client et analyse des besoins métier",
      "Création de sites vitrines et e-commerce (WordPress, Prestashop)",
      "Premiers déploiements sur OVH",
      "Personnalisation de thèmes et intégration de plugins",
    ],
    tags: ["WordPress", "Prestashop", "PHP", "OVH"],
  },
];

export const educationItems: TimelineItem[] = [
  {
    id: "edu1",
    type: "education",
    company: "IUT A – Université de Lille",
    role: "Licence Pro DA2I",
    location: "Lille",
    startDate: "2022",
    endDate: "2023",
    current: false,
    shortDescription: "Développement d'Applications et Intelligence des Interfaces.",
    missions: [
      "Développement web avancé et architecture applicative",
      "Gestion de projet et méthodes agiles",
      "Intelligence artificielle appliquée aux interfaces",
      "Projet tuteuré en entreprise",
    ],
    tags: ["Développement Web", "Agile", "IA", "Projet tuteuré"],
  },
  {
    id: "edu2",
    type: "education",
    company: "Lycée Saint Rémi",
    role: "BTS SIO – Solutions Logicielles et Applications Métiers",
    location: "Lille",
    startDate: "2020",
    endDate: "2022",
    current: false,
    shortDescription: "Formation aux solutions logicielles et au développement applicatif.",
    missions: [
      "Développement d'applications (PHP, Java, SQL)",
      "Administration des systèmes et réseaux",
      "Cybersécurité et gestion des données",
      "Projets de développement en équipe",
    ],
    tags: ["PHP", "Java", "SQL", "Réseaux", "Sécurité"],
  },
];
