import type { Metadata } from "next";
import RealisationsPageContent from "./RealisationsPageContent";

const TITLE = "Réalisations";
const DESCRIPTION =
  "Découvrez mes projets e-commerce : intégrations ERP (Sage, EBP, Sellsy), développement Shopify, design UX/UI. 15+ projets livrés depuis 2024.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/realisations" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/realisations",
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

export default function RealisationsPage() {
  return <RealisationsPageContent />;
}
