import type { Metadata } from "next";
import BlogPageContent from "./BlogPageContent";

export const metadata: Metadata = {
  title: "Blog — Elliot Infelta",
  description:
    "Réflexions sur l'IA appliquée au dev, les intégrations ERP complexes et les stratégies e-commerce. Articles bientôt disponibles.",
};

export default function BlogPage() {
  return <BlogPageContent />;
}
