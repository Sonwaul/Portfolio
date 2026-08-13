"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, ExternalLink, Lock, Layers, Calendar, Code2 } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { TagBadge } from "@/app/components/ui/TagBadge";
import { projects, Project } from "@/app/data/projectsData";
import PageHero from "@/app/components/ui/PageHero";
import ReassuranceBlock from "@/app/components/ui/ReassuranceBlock";
import ContactSection from "@/app/components/sections/ContactSection";
import Modal from "@/app/components/ui/Modal";

const ERP_TAGS = ["Sage", "EBP SDK", "EBP SaaS", "Sellsy", "Kaeliips"];
const DESIGN_TAGS = ["UX/UI", "Figma"];

type Filter = "all" | "erp" | "design" | "seo" | "app";

const FILTER_DEFS: { key: Filter; fr: string; en: string; match: (p: Project) => boolean }[] = [
  { key: "all",    fr: "Tous",             en: "All",             match: () => true },
  { key: "erp",    fr: "Intégration ERP",  en: "ERP Integration", match: (p) => p.tags.some((t) => ERP_TAGS.includes(t)) },
  { key: "design", fr: "UX/UI & Design",   en: "UX/UI & Design",  match: (p) => p.tags.some((t) => DESIGN_TAGS.includes(t)) },
  { key: "seo",    fr: "SEO",              en: "SEO",             match: (p) => p.tags.includes("SEO") },
  { key: "app",    fr: "App Shopify",       en: "Shopify App",     match: (p) => p.tags.includes("Shopify App") },
];

function GalleryCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const { messages, currentLang } = useLanguage();

  return (
    <div className="gallery-card" style={{ cursor: "pointer" }} onClick={() => onOpen(project)}>
      <div className="gallery-card-image">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, (max-width: 1200px) 33vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="gallery-card-initials-wrap">
            <span className="gallery-card-initials">{project.title.charAt(0)}</span>
          </div>
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
          <span className="gallery-card-btn">
            {messages.projects.viewDetails} <ArrowRight size={13} aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RealisationsPageContent() {
  const { messages, currentLang } = useLanguage();
  const rp = messages.realisationsPage;
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () => projects.filter(FILTER_DEFS.find((f) => f.key === filter)!.match),
    [filter]
  );

  const count = (key: Filter) =>
    projects.filter(FILTER_DEFS.find((f) => f.key === key)!.match).length;

  return (
    <>
      <PageHero
        imageSrc="/mes-realisations.jpg"
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
        breadcrumbItems={[{ label: messages.breadcrumb.realisations }]}
        breadcrumbHomeLabel={messages.breadcrumb.home}
      />

      <main id="gallery" className="realisations-page">
        <div className="container">

          <div className="realisations-filters" role="group" aria-label={currentLang === "en" ? "Filter projects" : "Filtrer les projets"}>
            {FILTER_DEFS.map((f) => (
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
              <GalleryCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>

        </div>
      </main>

      <ReassuranceBlock />
      <ContactSection />

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        accentColor={selectedProject?.accentColor}
      >
        {selectedProject && (
          <div className="modal-detail">
            <div className="modal-hero">
              {selectedProject.logo ? (
                <div className="modal-hero-logo-wrap">
                  <Image
                    src={selectedProject.logo}
                    alt={selectedProject.title}
                    width={0}
                    height={0}
                    sizes="200px"
                    style={{ width: "auto", height: "52px", objectFit: "contain" }}
                  />
                </div>
              ) : (
                <span className="modal-hero-initial">{selectedProject.title.charAt(0)}</span>
              )}
              <h3 className="modal-hero-title">{selectedProject.title}</h3>
              <p className="modal-hero-role">
                {currentLang === "en" && selectedProject.roleEn ? selectedProject.roleEn : selectedProject.role}
              </p>
              <span className="modal-hero-year">{selectedProject.year}</span>
            </div>
            <div className="modal-content-inner modal-content-inner--left">
              <h4 className="modal-missions-title">{messages.projects.objective}</h4>
              <p className="modal-full-desc">
                {currentLang === "en" ? selectedProject.objectiveEn : selectedProject.objective}
              </p>

              <h4 className="modal-missions-title">{messages.projects.missions}</h4>
              <ul className="modal-missions-list" style={{ width: "100%", marginBottom: "1.4rem" }}>
                {(currentLang === "en" ? selectedProject.missionsEn : selectedProject.missions).map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>

              {selectedProject.highlights.length > 0 && (
                <div className="modal-highlights">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="modal-highlight-chip">
                      <span className="modal-highlight-value">{h.value}</span>
                      <span className="modal-highlight-label">
                        {currentLang === "en" && h.labelEn ? h.labelEn : h.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <h4 className="modal-missions-title" style={{ marginTop: "1.4rem" }}>{messages.projects.techStack}</h4>
              <div className="project-tags" style={{ marginTop: "0.5rem" }}>
                {selectedProject.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} size={15} baseClass="project-tag" />
                ))}
              </div>

              <div className="modal-links">
                {selectedProject.link ? (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                    <ExternalLink size={15} aria-hidden="true" /> {messages.projects.visitSite}
                  </a>
                ) : (
                  <span className="project-internal-badge">
                    <Lock size={12} aria-hidden="true" /> {messages.projects.internalApp}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
