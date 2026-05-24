export interface Skill {
  name: string;
  logo?: string;
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
          { name: "ClickUp", logo: "/skills/clickup.svg" },
          { name: "Compréhension de CDC" },
          { name: "Devis & Chiffrage" },
          { name: "Relation Client" },
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
          { name: "PHP / Symfony", logo: "/skills/symfony.svg" },
          { name: "Java / Spring", logo: "/skills/spring.svg" },
          { name: "Python", logo: "/skills/python.svg" },
          { name: "Architecture flux" },
        ],
      },
      {
        title: "Écosystème Shopify",
        skills: [
          { name: "Shopify", logo: "/skills/shopify.svg" },
          { name: "Liquid" },
          { name: "API Shopify", logo: "/skills/shopify.svg" },
          { name: "Apps Shopify", logo: "/skills/shopify.svg" },
        ],
      },
      {
        title: "Front-end",
        skills: [
          { name: "HTML / CSS", logo: "/skills/html5.svg" },
          { name: "JavaScript", logo: "/skills/javascript.svg" },
          { name: "React / Next.js", logo: "/skills/react.svg" },
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
          { name: "SQL / MySQL", logo: "/skills/mysql.svg" },
          { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
        ],
      },
      {
        title: "DevOps & Ops",
        skills: [
          { name: "Git / GitHub", logo: "/skills/github.svg" },
          { name: "Maintenance & Logs" },
        ],
      },
      {
        title: "Support & Accès distant",
        skills: [
          { name: "TeamViewer", logo: "/skills/teamviewer.svg" },
          { name: "AnyDesk", logo: "/skills/anydesk.svg" },
        ],
      },
      {
        title: "Design & Conception",
        skills: [
          { name: "Figma", logo: "/skills/figma.svg" },
          { name: "UX/UI Design" },
        ],
      },
    ],
  },
];
