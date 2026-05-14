export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  year: string;
  status: "ongoing" | "done";
  link: string | null;
  github: string | null;
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Portfolio Nature",
    shortDescription: "Un portfolio immersif inspiré des éléments naturels",
    description:
      "Ce portfolio que vous consultez actuellement a été entièrement conçu et développé avec Next.js 16, TypeScript et Tailwind CSS 4. Le design s'articule autour d'un voyage à travers la nature — du ciel jusqu'au lac — pour créer une expérience de navigation originale et mémorable. Chaque section possède son identité visuelle propre.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "React 19"],
    year: "2025",
    status: "ongoing",
    link: null,
    github: null,
    accentColor: "#87CEEB",
  },
  {
    id: "proj2",
    title: "App de Gestion de Projet",
    shortDescription: "Outil interne de suivi de tâches et gestion d'équipe",
    description:
      "Développement d'une application web permettant à une équipe de gérer ses projets, tâches et ressources. L'application intègre un système de rôles et permissions, un tableau de bord avec KPIs, un module de communication interne, et un suivi de la charge de travail. Projet mené de la conception UX/UI jusqu'à la mise en production.",
    tags: ["React", "Node.js", "PostgreSQL", "Figma", "Docker"],
    year: "2024",
    status: "done",
    link: null,
    github: null,
    accentColor: "#6C9A8B",
  },
  {
    id: "proj3",
    title: "Refonte Site E-commerce",
    shortDescription: "Refonte complète d'un site pour un artisan local",
    description:
      "Refonte complète d'un site e-commerce pour un artisan local. Le projet incluait l'audit de l'existant, la création des maquettes Figma, l'intégration d'un CMS headless (Strapi), le développement du catalogue produit et d'un système de prise de rendez-vous en ligne. Livré dans les délais avec un gain de +40% de conversions.",
    tags: ["Next.js", "Strapi", "Figma", "Tailwind CSS"],
    year: "2024",
    status: "done",
    link: null,
    github: null,
    accentColor: "#A9B7AD",
  },
];
