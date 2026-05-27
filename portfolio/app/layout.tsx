import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { SITE_URL } from "./config";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-title",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Elliot Infelta - Lead Projet & Développeur Full Stack",
    template: "%s | Elliot Infelta",
  },
  description:
    "Portfolio d'Elliot Infelta, Lead Projet & Développeur Full Stack basé à Lille. Spécialisé Shopify, intégrations ERP et pilotage de projets web au sein de l'agence HUGGII.",
  keywords: [
    "Elliot Infelta",
    "Lead Projet",
    "Développeur Full Stack",
    "Shopify",
    "ERP",
    "Lille",
    "HUGGII",
    "chef de projet web",
    "développeur PHP",
    "intégration ERP",
  ],
  authors: [{ name: "Elliot Infelta", url: SITE_URL }],
  creator: "Elliot Infelta",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Elliot Infelta",
    title: "Elliot Infelta - Lead Projet & Développeur Full Stack",
    description:
      "Portfolio d'Elliot Infelta, Lead Projet & Développeur Full Stack basé à Lille. Spécialisé Shopify, intégrations ERP et pilotage de projets web.",
    images: [
      {
        url: "/share-banner.png",
        width: 1200,
        height: 630,
        alt: "Elliot Infelta - Lead Projet & Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elliot Infelta - Lead Projet & Développeur Full Stack",
    description:
      "Portfolio d'Elliot Infelta, Lead Projet & Développeur Full Stack basé à Lille. Spécialisé Shopify et intégrations ERP.",
    images: ["/share-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
