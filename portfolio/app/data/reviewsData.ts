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
    author: "Fond'Actions des Possibles",
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
  {
    id: "rev7",
    author: "Julien Faure",
    role: "Avis Google · huggii.com",
    rating: 5,
    text: "Nous sommes ravis d'avoir confié la refonte de notre site internet Julien Faure à l'agence HUGGII.\n\nMalgré la distance géographique, nous nous sommes sentis parfaitement compris et accompagnés tout au long du projet. Les équipes ont su être à l'écoute de nos besoins, force de proposition et très réactives, ce qui a permis de mener cette refonte avec beaucoup de fluidité et de sérénité.\n\nLe projet était ambitieux pour nous, puisqu'il s'agissait non seulement de refondre notre site, mais aussi d'accompagner notre passage vers une activité davantage orientée B2C. Sur ce type de projet, certains sujets très opérationnels — paramétrages, parcours clients, règles de livraison, implications comptables ou fiscales — mériteraient selon nous une phase de cadrage et de tests encore plus robuste, afin d'identifier plus tôt certaines subtilités.\n\nCela n'enlève rien à la qualité globale de l'accompagnement : nous sommes très satisfaits du résultat.\n\nUn grand merci à Guillaume, Elliot et tout le reste de l'équipe pour leur disponibilité, leur professionnalisme et leur précieux accompagnement. C'est un nouveau chapitre pour notre marque que nous sommes fiers de partager à leurs côtés.\n\nNous recommandons l'agence HUGGII pour leur qualité d'écoute, leur réactivité et leur capacité à accompagner un projet digital avec sérieux et engagement !",
    date: "2026-07",
    url: "https://share.google/erpsHFJX85uvlsP7v",
    siteUrl: "https://julien-faure.fr/",
    logo: "/projects/julien-faure.png",
  },
];

// Plus récent en premier
export const reviews: Review[] = [...reviewsData].sort((a, b) => b.date.localeCompare(a.date));
