export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  url: string;
  siteUrl?: string;
  logo?: string;
}

const reviewsData: Review[] = [
  {
    id: "rev1",
    author: "Nemrod",
    role: "Avis Google · huggii.com",
    rating: 5,
    text: "Accompagnement sur-mesure de la part de Huggii. Ils ont réussi à trouver des solutions à tous nos besoins et toutes problématiques. Mention spéciale à Elliot pour sa réactivité et sa bonne humeur, c'était un réel plaisir de travailler ensemble !",
    date: "2025-07",
    url: "https://share.google/MrzwN7KWDyuUBWWov",
    siteUrl: "https://pro.nemrod.co/",
    logo: "/projects/nemrod.png",
  },
  {
    id: "rev2",
    author: "TANDEM · Fragrances & Ombres Portées",
    role: "Avis Google · huggii.com",
    rating: 5,
    text: "Un sans faute dans ce partenariat où nous avons été accompagnés par Elliot sur la création de nos 2 sites marchands. Nos objectifs techniques, esthétiques et graphiques qui étaient ambitieux ont été atteints, dans les temps, tout en intégrant les contraintes de Shopify. Nous avons particulièrement apprécié la compétence, la disponibilité, la réactivité, la patience et l'état d'esprit toujours positif de notre interlocuteur. Alors OUI nous recommandons sans réserve Huggii pour la création de sites internet sur Shopify !",
    date: "2025-08",
    url: "https://share.google/RCHUC7GPjqGhFdT56",
    siteUrl: "https://tandem-fragrances.fr/",
    logo: "/projects/tandem-fragrances.png",
  },
  {
    id: "rev3",
    author: "Fondation des Possibles",
    role: "Avis Google · huggii.com",
    rating: 5,
    text: "La Fondation des Possibles est ravie d'avoir fait appel à Huggii pour la refonte de son site. Guillaume et Elliot ont su comprendre notre demande très vite et le résultat est vraiment à la hauteur de nos attentes ! N'hésitez plus si vous avez un site à faire.",
    date: "2024-03",
    url: "https://share.google/KzGjYzKa9Q569j6Qo",
    siteUrl: "https://lafondationdespossibles.com/",
    logo: "/projects/fondation-des-possibles.png",
  },
  {
    id: "rev4",
    author: "Skintips",
    role: "Avis Google · huggii.com",
    rating: 5,
    text: "Elliot notre développeur a été d'une patience et d'un professionnalisme exceptionnel. Je recommande Huggii.",
    date: "2024-12",
    url: "https://share.google/BsuyosP6qtknfYFzR",
    siteUrl: "https://www.skintips.co/",
    logo: "/projects/skintips.png",
  },
  {
    id: "rev5",
    author: "Automatic Technologies",
    role: "Avis Google · huggii.com",
    rating: 5,
    text: "Nous avons fait appel à HUGGII pour la réalisation de notre nouveau site Internet. L'équipe HUGGII a réussi à faire une passerelle EBP/Shopify qui nous simplifie le travail de mise à jour des produits ainsi que des commandes. Elliot, qui était en charge de notre dossier, a été à l'écoute et d'une grande réactivité. C'est un véritable plaisir de travailler avec des personnes compétentes et à l'écoute des attentes. Bravo à toute l'équipe HUGGII !",
    date: "2026-03",
    url: "https://share.google/CZyilnyDcRhjhXoNW",
    siteUrl: "https://automatic-technologies.com/",
    logo: "/projects/automatic-technologies.png",
  },
  {
    id: "rev6",
    author: "Batisec",
    role: "Avis Google · huggii.com",
    rating: 5,
    text: "J'ai fait appel à cette agence pour la refonte complète de mon site et je ne pourrais pas être plus satisfaite. Elliot qui m'a suivi du début à la fin de ce projet a été merveilleux ! Le code est propre, le site est extrêmement rapide et l'optimisation SEO porte déjà ses fruits. Un développeur qui comprend vraiment les enjeux business, au-delà de la simple technique. Je recommande les yeux fermés !",
    date: "2026-06",
    url: "https://share.google/rQj6zrUjmVAsDmBO9",
    siteUrl: "https://batisec.fr/",
    logo: "/projects/batisec.png",
  },
];

// Plus récent en premier
export const reviews: Review[] = [...reviewsData].sort((a, b) => b.date.localeCompare(a.date));
