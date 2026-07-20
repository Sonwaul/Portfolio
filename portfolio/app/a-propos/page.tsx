import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "À propos — Elliot Infelta",
  description:
    "Lead Projet & Développeur Full Stack, 3 ans chez HUGGII. Découvrez mon parcours, ma méthode de travail et ce qui m'anime.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
