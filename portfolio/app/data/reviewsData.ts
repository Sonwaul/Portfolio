export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "rev1",
    author: "Marie Dupont",
    role: "Directrice, Agence XYZ",
    rating: 5,
    text: "Elliot est un collaborateur exceptionnel. Sa capacité à jongler entre le technique et le relationnel est vraiment rare. Il a su gérer les attentes de nos clients tout en guidant notre équipe de développement avec brio.",
    date: "Nov. 2024",
  },
  {
    id: "rev2",
    author: "Thomas Bernard",
    role: "Client entrepreneur",
    rating: 5,
    text: "Très professionnel, à l'écoute et réactif. Elliot a su transformer notre vision floue en un projet web concret. Il a expliqué chaque étape sans jargon technique, ce qui a été vraiment appréciable.",
    date: "Août 2024",
  },
  {
    id: "rev3",
    author: "Sophie Martin",
    role: "Alternante, Agence Web",
    rating: 5,
    text: "Elliot m'a formée lors de mon alternance avec une patience et une pédagogie remarquables. Il sait adapter son niveau d'explication et rend la montée en compétence naturelle et progressive.",
    date: "Juin 2024",
  },
  {
    id: "rev4",
    author: "Lucas Petit",
    role: "Développeur, équipe projet",
    rating: 5,
    text: "Travailler avec Elliot c'est avoir un chef d'orchestre bienveillant. Il comprend les contraintes techniques, fait le lien avec le client et crée un environnement de travail serein. Je recommande sans hésiter.",
    date: "Fév. 2025",
  },
];
