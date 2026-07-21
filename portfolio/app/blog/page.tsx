import type { Metadata } from "next";
import { getAllBlogPosts } from "@/app/lib/mdx";
import BlogPageContent from "./BlogPageContent";

const TITLE = "Blog";
const DESCRIPTION =
  "Réflexions sur l'IA appliquée au dev, les intégrations ERP complexes et les stratégies e-commerce. Articles bientôt disponibles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/blog",
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

export default function BlogPage() {
  const frPosts = getAllBlogPosts("fr");
  const enPosts = getAllBlogPosts("en");

  return <BlogPageContent frPosts={frPosts} enPosts={enPosts} />;
}
