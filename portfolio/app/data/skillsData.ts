export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Bosquet {
  id: "canopee" | "tronc" | "racines";
  icon: string;
  title: string;
  subtitle: string;
  groups: SkillGroup[];
}

export const bosquets: Bosquet[] = [
  {
    id: "canopee",
    icon: "🌳",
    title: "La Canopée",
    subtitle: "Management & Humain",
    groups: [
      {
        title: "Pilotage",
        skills: [
          { name: "ClickUp" },
          { name: "Méthode Agile" },
          { name: "Respect des deadlines" },
          { name: "Arbitrage budgétaire" },
        ],
      },
      {
        title: "Relation Client",
        skills: [
          { name: "Avant-vente & Vulgarisation" },
          { name: "Rédaction de CDC" },
          { name: "Suivi stratégique" },
        ],
      },
      {
        title: "Pédagogie",
        skills: [
          { name: "Accompagnement à l'autonomie" },
          { name: "Bilans de compétences" },
        ],
      },
      {
        title: "Soft Skills",
        skills: [
          { name: "Résistance au stress" },
          { name: "Pédagogie" },
          { name: "Joie de vivre" },
          { name: "Écoute active" },
        ],
      },
    ],
  },
  {
    id: "tronc",
    icon: "🌲",
    title: "Le Tronc",
    subtitle: "Architecture & Tech",
    groups: [
      {
        title: "Back-end",
        skills: [
          { name: "Symfony" },
          { name: "Spring" },
          { name: "PHP" },
          { name: "Java" },
          { name: "Python" },
        ],
      },
      {
        title: "Écosystème Shopify",
        skills: [
          { name: "Architecture Shopify" },
          { name: "API Shopify" },
          { name: "Liquid" },
          { name: "Flux de données" },
          { name: "JSON / XML" },
        ],
      },
      {
        title: "Front-end",
        skills: [
          { name: "HTML" },
          { name: "CSS" },
          { name: "JavaScript" },
        ],
      },
    ],
  },
  {
    id: "racines",
    icon: "🌱",
    title: "Les Racines",
    subtitle: "Logique & Outils",
    groups: [
      {
        title: "Data",
        skills: [
          { name: "SQL" },
          { name: "MySQL" },
          { name: "PostgreSQL" },
        ],
      },
      {
        title: "DevOps & Outils",
        skills: [
          { name: "Git / GitHub" },
          { name: "Docker" },
          { name: "Maintenance serveurs" },
          { name: "Gestion de logs" },
        ],
      },
      {
        title: "Conception",
        skills: [
          { name: "UX/UI Design" },
          { name: "Figma" },
          { name: "Logique algorithmique" },
        ],
      },
    ],
  },
];
