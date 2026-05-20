export interface Skill {
  name: string;
  color?: string;
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
  description: string;
  groups: SkillGroup[];
}

export const bosquets: Bosquet[] = [
  {
    id: "canopee",
    icon: "🌳",
    title: "La Canopée",
    subtitle: "Management & Humain",
    description: "L'art de diriger et de transmettre.",
    groups: [
      {
        title: "Pilotage d'équipe",
        skills: [
          { name: "Agile",             color: "#78d48e" },
          { name: "ClickUp",           color: "#c084fc" },
          { name: "Jira",              color: "#60a5fa" },
          { name: "Relation Client",   color: "#fcd34d" },
          { name: "Négociation",       color: "#fcd34d" },
          { name: "Rédaction de CDC",  color: "#fcd34d" },
        ],
      },
      {
        title: "Pédagogie & Soft Skills",
        skills: [
          { name: "Mentorat",              color: "#86efac" },
          { name: "Bilans de compétences", color: "#86efac" },
          { name: "Écoute active",         color: "#fde68a" },
          { name: "Joie de vivre",         color: "#fde68a" },
        ],
      },
    ],
  },
  {
    id: "tronc",
    icon: "🌲",
    title: "Le Tronc",
    subtitle: "Architecture & Tech",
    description: "La structure et la robustesse logicielle.",
    groups: [
      {
        title: "Back-end",
        skills: [
          { name: "PHP",              color: "#c084fc" },
          { name: "Symfony",         color: "#c084fc" },
          { name: "Java",            color: "#fb923c" },
          { name: "Spring",          color: "#86efac" },
          { name: "Python",          color: "#60a5fa" },
          { name: "Architecture flux", color: "#a3a3a3" },
        ],
      },
      {
        title: "Écosystème Shopify",
        skills: [
          { name: "Shopify",       color: "#86efac" },
          { name: "Liquid",        color: "#86efac" },
          { name: "API Shopify",   color: "#86efac" },
          { name: "Apps Shopify",  color: "#86efac" },
        ],
      },
      {
        title: "Front-end",
        skills: [
          { name: "HTML",          color: "#fb923c" },
          { name: "CSS",           color: "#60a5fa" },
          { name: "JavaScript",    color: "#fde047" },
          { name: "Twig",          color: "#86efac" },
        ],
      },
    ],
  },
  {
    id: "racines",
    icon: "🌱",
    title: "Les Racines",
    subtitle: "Logique & Outils",
    description: "Le socle invisible et indispensable.",
    groups: [
      {
        title: "Data",
        skills: [
          { name: "SQL",        color: "#60a5fa" },
          { name: "MySQL",      color: "#60a5fa" },
          { name: "PostgreSQL", color: "#818cf8" },
        ],
      },
      {
        title: "Ops & Outils",
        skills: [
          { name: "Git",              color: "#f87171" },
          { name: "Docker",           color: "#38bdf8" },
          { name: "Serveurs",         color: "#a3a3a3" },
          { name: "Maintenance & Logs", color: "#a3a3a3" },
        ],
      },
      {
        title: "Conception",
        skills: [
          { name: "UX/UI Design",    color: "#e879f9" },
          { name: "Figma",           color: "#e879f9" },
          { name: "Algorithmique",   color: "#a3a3a3" },
        ],
      },
    ],
  },
];
