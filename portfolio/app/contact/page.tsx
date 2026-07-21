import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

const TITLE = "Contact & Expertise – Consultant Lead Projet E-commerce";
const DESCRIPTION = "Discutons de votre architecture e-commerce. Audit technique, pilotage de projet complexe et intégration de flux ERP. Réponse assurée sous 48h.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/contact",
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

export default function ContactPage() {
  return <ContactPageContent />;
}
