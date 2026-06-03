import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact & Expertise | Elliot Infelta – Consultant Lead Projet E-commerce",
  description: "Discutons de votre architecture e-commerce. Audit technique, pilotage de projet complexe et intégration de flux ERP. Réponse assurée sous 48h.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
