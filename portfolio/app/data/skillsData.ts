export interface Skill {
  name: string;
  nameEn?: string;
  logo?: string;
}

export interface SkillGroup {
  title: string;
  titleEn?: string;
  skills: Skill[];
}

export interface SkillZone {
  id: "management" | "tech" | "tools";
  title: string;
  titleEn?: string;
  subtitle: string;
  subtitleEn?: string;
  groups: SkillGroup[];
}

export const skillZones: SkillZone[] = [
  {
    id: "management",
    title: "Management & Relation Client",
    titleEn: "Management & Client Relations",
    subtitle: "Pilotage de projet & soft skills",
    subtitleEn: "Project management & soft skills",
    groups: [
      {
        title: "Pilotage de Projet",
        titleEn: "Project Management",
        skills: [
          { name: "Agile / Scrum" },
          { name: "ClickUp", logo: "/skills/clickup.svg" },
          { name: "Compréhension de CDC", nameEn: "Spec Analysis" },
          { name: "Devis & Chiffrage", nameEn: "Quoting & Estimation" },
        ],
      },
      {
        title: "Relation Client",
        titleEn: "Client Relations",
        skills: [
          { name: "Relation Client", nameEn: "Client Relations" },
          { name: "Écoute active", nameEn: "Active Listening" },
          { name: "Communication", nameEn: "Communication" },
        ],
      },
      {
        title: "Pédagogie & Leadership",
        titleEn: "Pedagogy & Leadership",
        skills: [
          { name: "Mentorat", nameEn: "Mentoring" },
          { name: "Formation", nameEn: "Training" },
          { name: "Bilans de compétences", nameEn: "Skills Assessment" },
        ],
      },
      {
        title: "IA & Workflow",
        titleEn: "AI & Workflow",
        skills: [
          { name: "Claude (gestion de projet)", nameEn: "Claude (project management)", logo: "/skills/claude.svg" },
          { name: "Agents IA ClickUp", nameEn: "ClickUp AI Agents", logo: "/skills/clickup.svg" },
        ],
      },
    ],
  },
  {
    id: "tech",
    title: "Architecture & Développement",
    titleEn: "Architecture & Development",
    subtitle: "Back-end, front-end & Shopify",
    subtitleEn: "Back-end, front-end & Shopify",
    groups: [
      {
        title: "Back-end",
        titleEn: "Back-end",
        skills: [
          { name: "PHP / Symfony", logo: "/skills/symfony.svg" },
          { name: "Java / Spring", logo: "/skills/spring.svg" },
          { name: "Python", logo: "/skills/python.svg" },
          { name: "Architecture flux", nameEn: "Flow Architecture" },
        ],
      },
      {
        title: "Écosystème Shopify",
        titleEn: "Shopify Ecosystem",
        skills: [
          { name: "Shopify", logo: "/skills/shopify.svg" },
          { name: "Liquid", logo: "/skills/liquid.svg" },
          { name: "API Shopify", nameEn: "Shopify API", logo: "/skills/shopify.svg" },
          { name: "Apps Shopify", nameEn: "Shopify Apps", logo: "/skills/shopify.svg" },
        ],
      },
      {
        title: "Front-end",
        titleEn: "Front-end",
        skills: [
          { name: "HTML / CSS", logo: "/skills/html5.svg" },
          { name: "JavaScript", logo: "/skills/javascript.svg" },
          { name: "React / Next.js", logo: "/skills/react.svg" },
          { name: "Liquid / Twig", logo: "/skills/liquid.svg" },
        ],
      },
      {
        title: "IA & LLMs",
        titleEn: "AI & LLMs",
        skills: [
          { name: "Claude (assistance dev)", nameEn: "Claude (dev assistant)", logo: "/skills/claude.svg" },
          { name: "Claude Code (CLI)", nameEn: "Claude Code (CLI)", logo: "/skills/claude.svg" },
          { name: "Gemini (analyse & génération)", nameEn: "Gemini (analysis & generation)", logo: "/skills/gemini.svg" },
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Outils & Environnement",
    titleEn: "Tools & Environment",
    subtitle: "Data, DevOps & design",
    subtitleEn: "Data, DevOps & design",
    groups: [
      {
        title: "Bases de données",
        titleEn: "Databases",
        skills: [
          { name: "SQL / MySQL", logo: "/skills/mysql.svg" },
          { name: "PostgreSQL", logo: "/skills/postgresql.svg" },
        ],
      },
      {
        title: "DevOps & Ops",
        titleEn: "DevOps & Ops",
        skills: [
          { name: "Git / GitHub", logo: "/skills/github.svg" },
          { name: "Maintenance & Logs", nameEn: "Maintenance & Log Monitoring" },
        ],
      },
      {
        title: "Support & Accès distant",
        titleEn: "Support & Remote Access",
        skills: [
          { name: "TeamViewer", logo: "/skills/teamviewer.svg" },
          { name: "AnyDesk", logo: "/skills/anydesk.svg" },
        ],
      },
      {
        title: "Design & UX/UI",
        titleEn: "Design & UX/UI",
        skills: [
          { name: "Figma", logo: "/skills/figma.svg" },
          { name: "UX/UI Design" },
        ],
      },
      {
        title: "IDEs Agentiques & CLI",
        titleEn: "Agentic IDEs & CLIs",
        skills: [
          { name: "Antigravity (Google)", nameEn: "Antigravity (Google)", logo: "/skills/antigravity.svg" },
          { name: "Claude (application)", nameEn: "Claude (app)", logo: "/skills/claude.svg" },
          { name: "CLI IA", nameEn: "AI CLIs" },
        ],
      },
    ],
  },
];
