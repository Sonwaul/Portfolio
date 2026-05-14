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
    title: "Connecteur Shopify / ERP",
    shortDescription: "L'art de lier la technique au business",
    description:
      "Développement d'un connecteur sur mesure entre Shopify et les ERP/CRM clients. Synchronisation bidirectionnelle des produits, stocks et commandes via API REST, WebServices et fichiers CSV/XML/JSON. Projet piloté en autonomie : analyse des flux métier, conception technique et mise en production.",
    tags: ["Shopify", "API REST", "ERP", "CSV/XML/JSON", "PHP"],
    year: "2024",
    status: "done",
    link: null,
    github: null,
    accentColor: "#6C9A8B",
  },
  {
    id: "proj2",
    title: "Architecture Multi-site Symfony",
    shortDescription: "Démonstration de la rigueur logique",
    description:
      "Conception et développement d'une solution e-commerce multi-sites sécurisée sous Symfony. Architecture pensée pour gérer plusieurs boutiques depuis une seule administration, avec gestion des rôles, isolation des données par site et modules partagés. Un exercice de rigueur architecturale.",
    tags: ["Symfony", "PHP", "MySQL", "E-commerce", "Architecture"],
    year: "2023",
    status: "done",
    link: null,
    github: null,
    accentColor: "#87CEEB",
  },
  {
    id: "proj3",
    title: "Application de Gestion Interne",
    shortDescription: "Optimisation des processus métier",
    description:
      "Développement d'un outil interne de suivi des projets et des ressources pour une agence web. Tableau de bord avec KPIs, système de rôles et permissions, module de communication et suivi de charge de travail. Projet mené de la maquette Figma à la mise en production.",
    tags: ["React", "Node.js", "PostgreSQL", "Figma", "Docker"],
    year: "2024",
    status: "done",
    link: null,
    github: null,
    accentColor: "#A9B7AD",
  },
  {
    id: "proj4",
    title: "Création UX/UI Shopify",
    shortDescription: "Fusion graphique et technique",
    description:
      "Refonte complète d'une boutique Shopify : audit de l'existant, maquettes Figma, développement d'un thème sur mesure en Liquid, optimisation des conversions et de l'expérience mobile. Un projet à l'intersection du design et de la technique.",
    tags: ["Shopify", "Liquid", "Figma", "UX/UI", "CSS"],
    year: "2024",
    status: "done",
    link: null,
    github: null,
    accentColor: "#C8A96E",
  },
];
