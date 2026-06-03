"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { TagBadge } from "@/app/components/ui/TagBadge";
import { projects, Project } from "@/app/data/projectsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const MAX_PROJECTS = 9;
const PER_PAGE = 3;
const pool = projects.slice(0, MAX_PROJECTS);
const totalPages = Math.ceil(pool.length / PER_PAGE);

function PreviewCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const { messages, currentLang } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
      style={{ "--card-accent": project.accentColor } as React.CSSProperties}
    >
      <div className="project-card-header">
        {project.logo
          ? <Image src={project.logo} alt={project.title} width={0} height={0} sizes="240px" style={{ width: "auto", height: "auto", maxHeight: "120px", maxWidth: "100%", objectFit: "contain" }} priority={priority} />
          : <span className="project-card-header-initials">{project.title.charAt(0)}</span>
        }
      </div>
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-year">{project.year}</span>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-role">
          {currentLang === "en" && project.roleEn ? project.roleEn : project.role}
        </p>
        <p className="project-card-desc">
          {currentLang === "en" && project.shortDescriptionEn ? project.shortDescriptionEn : project.shortDescription}
        </p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} size={13} baseClass="project-tag" />
          ))}
        </div>
        <Link href={`/realisations/${project.slug}`} className="project-btn">
          {messages.projects.viewDetails} <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default function ProjectsPreview() {
  const { messages } = useLanguage();
  const [page, setPage] = useState(0);

  const current = pool.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="projets" className="projects-section">
      <div className="container projects-content">

        <div className="section-header">
          <h2 className="section-title">{messages.home.projectsPreviewTitle}</h2>
          <p className="section-subtitle">{messages.home.projectsPreviewSubtitle}</p>
        </div>

        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/realisations" className="hero-cta-outline">
            {messages.home.projectsPreviewCta} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="projects-grid--preview">
          {current.map((project, index) => (
            <PreviewCard key={project.id} project={project} priority={page === 0 && index === 0} />
          ))}
        </div>

        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "2.5rem" }}>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              style={{
                width: 38, height: 38,
                borderRadius: "50%",
                border: "1.5px solid var(--c-border)",
                background: "transparent",
                color: page === 0 ? "var(--c-bonus)" : "var(--c-text)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: page === 0 ? "not-allowed" : "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              aria-label="Page précédente"
            >
              <ChevronLeft size={18} />
            </button>

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    width: i === page ? 24 : 8,
                    height: 8,
                    borderRadius: 999,
                    border: "none",
                    background: i === page ? "var(--c-hover)" : "var(--c-border)",
                    cursor: "pointer",
                    transition: "width 0.3s ease, background 0.2s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              style={{
                width: 38, height: 38,
                borderRadius: "50%",
                border: "1.5px solid var(--c-border)",
                background: "transparent",
                color: page === totalPages - 1 ? "var(--c-bonus)" : "var(--c-text)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: page === totalPages - 1 ? "not-allowed" : "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              aria-label="Page suivante"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
