import { SITE_URL } from "@/app/config";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Elliot Infelta",
    jobTitle: "Lead Projet & Développeur Full Stack",
    url: SITE_URL,
    image: `${SITE_URL}/elliot-infelta.jpg`,
    email: "contact@elliot-infelta.fr",
    sameAs: [
      "https://www.linkedin.com/in/elliot-infelta/",
      "https://github.com/Sonwaul",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toufflers",
      addressRegion: "Hauts-de-France",
      addressCountry: "FR",
    },
    worksFor: {
      "@type": "Organization",
      name: "HUGGII",
    },
    knowsAbout: [
      "Shopify", "PHP", "JavaScript", "React", "Next.js",
      "Intégration ERP", "Gestion de projet", "Agile", "Scrum",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Elliot Infelta - Portfolio",
    url: SITE_URL,
    author: { "@type": "Person", name: "Elliot Infelta" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
