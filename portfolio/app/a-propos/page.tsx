import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

const TITLE = "À propos";
const DESCRIPTION =
  "Lead Projet & Développeur Full Stack, 3 ans chez HUGGII. Découvrez mon parcours, ma méthode de travail et ce qui m'anime.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/a-propos" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/a-propos",
    siteName: "Elliot Infelta",
    title: `${TITLE} | Elliot Infelta`,
    description: DESCRIPTION,
    images: [
      { url: "/share-banner.png", width: 1200, height: 630, alt: "Elliot Infelta - Lead Projet & Développeur Full Stack" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Elliot Infelta`,
    description: DESCRIPTION,
    images: ["/share-banner.png"],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
