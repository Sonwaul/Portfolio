export interface Skill {
  name: string;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface SkillZone {
  id: "management" | "tech" | "tools";
  title: string;
  subtitle: string;
  groups: SkillGroup[];
}

export const skillZones: SkillZone[] = [
  {
    id: "management",
    title: "Management & Relation Client",
    subtitle: "Pilotage de projet & soft skills",
    groups: [
      {
        title: "Pilotage & Outils",
        skills: [
          { name: "Agile / Scrum" },
          { name: "ClickUp" },
          { name: "Jira" },
          { name: "Rédaction de CDC" },
          { name: "Devis & Chiffrage" },
          { name: "Relation Client" },
          { name: "Négociation" },
        ],
      },
      {
        title: "Pédagogie & Leadership",
        skills: [
          { name: "Mentorat" },
          { name: "Bilans de compétences" },
          { name: "Écoute active" },
          { name: "Formation" },
        ],
      },
    ],
  },
  {
    id: "tech",
    title: "Architecture & Développement",
    subtitle: "Back-end, front-end & Shopify",
    groups: [
      {
        title: "Back-end",
        skills: [
          { name: "PHP / Symfony" },
          { name: "Java / Spring" },
          { name: "Python" },
          { name: "Architecture flux" },
        ],
      },
      {
        title: "Écosystème Shopify",
        skills: [
          { name: "Shopify" },
          { name: "Liquid" },
          { name: "API Shopify" },
          { name: "Apps Shopify" },
        ],
      },
      {
        title: "Front-end",
        skills: [
          { name: "HTML / CSS" },
          { name: "JavaScript" },
          { name: "React / Next.js" },
          { name: "Twig" },
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Outils & Environnement",
    subtitle: "Data, DevOps & conception",
    groups: [
      {
        title: "Bases de données",
        skills: [
          { name: "SQL / MySQL" },
          { name: "PostgreSQL" },
        ],
      },
      {
        title: "DevOps & Ops",
        skills: [
          { name: "Git / GitHub" },
          { name: "Docker" },
          { name: "Serveurs Linux" },
          { name: "Maintenance & Logs" },
        ],
      },
      {
        title: "Design & Conception",
        skills: [
          { name: "Figma" },
          { name: "UX/UI Design" },
          { name: "Algorithmique" },
        ],
      },
    ],
  },
];
