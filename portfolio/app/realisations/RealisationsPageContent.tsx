"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Lock, Layers, Calendar, Code2 } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { TagBadge } from "@/app/components/ui/TagBadge";
import { projects, Project } from "@/app/data/projectsData";
import PageHero from "@/app/components/ui/PageHero";
import ReassuranceBlock from "@/app/components/ui/ReassuranceBlock";
import ContactSection from "@/app/components/sections/ContactSection";

const ERP_TAGS = ["Sage", "EBP SDK", "EBP SaaS", "Sellsy", "Kaeliips"];
const DESIGN_TAGS = ["UX/UI", "Figma"];

type Filter = "all" | "erp" | "design" | "seo" | "app";

function GalleryCard({ project }: { project: Project }) {
  const { messages, currentLang } = useLanguage();

  return (
    <div className="gallery-card">
      <div className="gallery-card-logo">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={0}
            height={0}
            sizes="160px"
            style={{ width: "auto", height: "auto", maxHeight: "72px", maxWidth: "140px", objectFit: "contain" }}
          />
        ) : (
          <span className="gallery-card-initials">{project.title.charAt(0)}</span>
        )}
      </div>

      <div className="gallery-card-body">
        <span className="gallery-card-year">{project.year}</span>
        <h2 className="gallery-card-title">{project.title}</h2>
        <p className="gallery-card-role">
          {currentLang === "en" && project.roleEn ? project.roleEn : project.role}
        </p>
        <p className="gallery-card-desc">
          {currentLang === "en" && project.shortDescriptionEn
            ? project.shortDescriptionEn
            : project.shortDescription}
        </p>

        <div className="gallery-card-tags">
          {project.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} size={12} baseClass="project-tag" />
          ))}
        </div>

        <div className="gallery-card-footer">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-card-btn"
            >
              {messages.projects.visitSite} <ArrowRight size={13} aria-hidden="true" />
            </a>
          ) : (
            <span className="project-internal-badge">
              <Lock size={12} aria-hidden="true" /> {messages.projects.internalApp}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function RealisationsPageContent() {
  const { messages, currentLang } = useLanguage();
  const rp = messages.realisationsPage;
  const [filter, setFilter] = useState<Filter>("all");

  const filterDefs: { key: Filter; fr: string; en: string; match: (p: Project) => boolean }[] = [
    { key: "all",    fr: "Tous",             en: "All",             match: () => true },
    { key: "erp",    fr: "Intégration ERP",  en: "ERP Integration", match: (p) => p.tags.some((t) => ERP_TAGS.includes(t)) },
    { key: "design", fr: "UX/UI & Design",   en: "UX/UI & Design",  match: (p) => p.tags.some((t) => DESIGN_TAGS.includes(t)) },
    { key: "seo",    fr: "SEO",              en: "SEO",             match: (p) => p.tags.includes("SEO") },
    { key: "app",    fr: "App Shopify",       en: "Shopify App",     match: (p) => p.tags.includes("Shopify App") },
  ];

  const filtered = useMemo(
    () => projects.filter(filterDefs.find((f) => f.key === filter)!.match),
    [filter]
  );

  const count = (key: Filter) =>
    projects.filter(filterDefs.find((f) => f.key === key)!.match).length;

  return (
    <>
      <PageHero
        imageSrc="/elliot-infelta.jpg"
        imageAlt="Elliot Infelta"
        badges={[
          { icon: Layers,   text: rp.heroBadge1 },
          { icon: Calendar, text: rp.heroBadge2 },
          { icon: Code2,    text: rp.heroBadge3, accent: true },
        ]}
        title={rp.heroTitle}
        description={rp.heroDescription}
        ctas={[
          { label: rp.heroCtaPrimary,   href: "#gallery",   variant: "primary",  iconType: "chevron" },
          { label: rp.heroCtaSecondary, href: "/contact",   variant: "outline",  iconType: "arrow" },
        ]}
      />

      <main id="gallery" className="realisations-page">
        <div className="container">

          <div className="realisations-filters" role="group" aria-label={currentLang === "en" ? "Filter projects" : "Filtrer les projets"}>
            {filterDefs.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`realisations-filter-btn${filter === f.key ? " active" : ""}`}
                aria-pressed={filter === f.key}
              >
                {currentLang === "en" ? f.en : f.fr}
                <span className="realisations-filter-count">{count(f.key)}</span>
              </button>
            ))}
          </div>

          <p className="realisations-count">
            {filtered.length}&nbsp;{currentLang === "en"
              ? `project${filtered.length > 1 ? "s" : ""}`
              : `projet${filtered.length > 1 ? "s" : ""}`}
          </p>

          <div className="realisations-grid">
            {filtered.map((project) => (
              <GalleryCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </main>

      <ReassuranceBlock />
      <ContactSection />
    </>
  );
}
