import type { Metadata } from "next";
import RealisationsPageContent from "./RealisationsPageContent";

export const metadata: Metadata = {
  title: "Réalisations — Elliot Infelta",
  description:
    "Découvrez mes projets e-commerce : intégrations ERP (Sage, EBP, Sellsy), développement Shopify, design UX/UI. 15+ projets livrés depuis 2024.",
};

export default function RealisationsPage() {
  return <RealisationsPageContent />;
}
