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
    label: "Gestion & Management",
    icon: "🌳",
    skills: [
      { name: "Relation commerciale", level: 88 },
      { name: "Formation d'équipes", level: 85 },
      { name: "Cahiers des charges", level: 82 },
      { name: "UX / UI Design", level: 70 },
      { name: "Gestion de planning", level: 80 },
    ],
  },
  {
    id: "ecommerce",
    label: "Expertise E-commerce",
    icon: "🌲",
    skills: [
      { name: "Shopify (CMS & API)", level: 90 },
      { name: "Symfony", level: 82 },
      { name: "Prestashop", level: 75 },
      { name: "WordPress", level: 78 },
    ],
  },
  {
    id: "technique",
    label: "Technique",
    icon: "🌱",
    skills: [
      { name: "PHP", level: 85 },
      { name: "Java / Spring", level: 65 },
      { name: "MySQL / PostgreSQL", level: 78 },
      { name: "Liquid / Twig", level: 80 },
    ],
  },
  {
    id: "outils",
    label: "Outils & Connecteurs",
    icon: "🌿",
    skills: [
      { name: "API & WebServices", level: 85 },
      { name: "ERP / CRM", level: 78 },
      { name: "Import/Export CSV · XML · JSON", level: 82 },
      { name: "Git / GitHub", level: 80 },
    ],
  },
];
