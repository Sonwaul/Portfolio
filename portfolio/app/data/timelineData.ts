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
    company: "Entreprise XYZ",
    role: "Chef de projet junior / Développeur",
    location: "Lille",
    startDate: "Jan. 2024",
    endDate: null,
    current: true,
    shortDescription: "Pilotage de projets web et relation client",
    missions: [
      "Gestion de la relation commerciale avec les clients (suivi, réunions, compte-rendus)",
      "Coordination et animation des équipes de développement",
      "Formation et accompagnement des alternants et nouvelles recrues",
      "Suivi des délais, KPIs et livrables des projets",
      "Rédaction de spécifications fonctionnelles et techniques",
    ],
    tags: ["Gestion de projet", "Relation client", "Leadership", "Formation"],
  },
  {
    id: "exp2",
    type: "experience",
    company: "Agence Web ABC",
    role: "Développeur Front-end",
    location: "Lille",
    startDate: "Sept. 2022",
    endDate: "Déc. 2023",
    current: false,
    shortDescription: "Développement d'interfaces web modernes",
    missions: [
      "Développement d'interfaces React / Next.js selon les maquettes Figma",
      "Intégration responsive et optimisation des performances web",
      "Participation aux cérémonies Agile (sprint planning, daily, rétrospective)",
      "Revue de code et mentoring des développeurs junior",
    ],
    tags: ["React", "Next.js", "TypeScript", "Figma", "Agile"],
  },
  {
    id: "exp3",
    type: "experience",
    company: "Startup Innovation",
    role: "Développeur Web (Stage)",
    location: "Lille",
    startDate: "Avr. 2022",
    endDate: "Août 2022",
    current: false,
    shortDescription: "Stage de développement full-stack",
    missions: [
      "Développement de nouvelles fonctionnalités sur une application SaaS",
      "Conception et mise en place de tests unitaires",
      "Collaboration avec les équipes produit et design",
      "Déploiement sur environnement de production (CI/CD)",
    ],
    tags: ["Node.js", "React", "PostgreSQL", "Docker"],
  },
];

export const educationItems: TimelineItem[] = [
  {
    id: "edu1",
    type: "education",
    company: "École Supérieure du Numérique",
    role: "Bachelor Chef de Projet Digital",
    location: "Lille",
    startDate: "Sept. 2023",
    endDate: null,
    current: true,
    shortDescription: "Management de projet, marketing digital, communication",
    missions: [
      "Management de projet et méthodes agiles (Scrum, Kanban)",
      "Stratégie marketing et communication digitale",
      "Gestion de la relation client et outils CRM",
      "Encadrement d'équipes projet et leadership",
      "Conduite du changement et gestion des risques",
    ],
    tags: ["Agile", "Marketing", "Management", "CRM"],
  },
  {
    id: "edu2",
    type: "education",
    company: "IUT Informatique",
    role: "BUT Informatique",
    location: "Lille",
    startDate: "Sept. 2020",
    endDate: "Juin 2023",
    current: false,
    shortDescription: "Développement logiciel, bases de données, réseaux",
    missions: [
      "Développement web (React, Node.js) et mobile",
      "Bases de données relationnelles SQL et NoSQL",
      "Architecture logicielle et patterns de conception",
      "Projets d'équipe en méthode agile avec Jira et Git",
    ],
    tags: ["Java", "SQL", "React", "Agile", "Git"],
  },
];
