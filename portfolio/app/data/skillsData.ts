export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "management",
    label: "Management & Projet",
    icon: "🎯",
    skills: [
      { name: "Gestion de projet", level: 85 },
      { name: "Méthodes Agile / Scrum", level: 80 },
      { name: "Relation client", level: 90 },
      { name: "Formation & coaching", level: 85 },
      { name: "Planification / Roadmap", level: 75 },
    ],
  },
  {
    id: "dev",
    label: "Développement Web",
    icon: "💻",
    skills: [
      { name: "React / Next.js", level: 82 },
      { name: "TypeScript", level: 72 },
      { name: "HTML / CSS", level: 92 },
      { name: "Node.js", level: 65 },
      { name: "SQL / Bases de données", level: 70 },
    ],
  },
  {
    id: "tools",
    label: "Outils & Environnement",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Notion / Jira", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Suite Office / Google", level: 90 },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    icon: "🌱",
    skills: [
      { name: "Communication", level: 93 },
      { name: "Pédagogie", level: 88 },
      { name: "Leadership", level: 80 },
      { name: "Adaptabilité", level: 90 },
      { name: "Organisation", level: 85 },
    ],
  },
];
