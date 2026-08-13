"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { TagBadge } from "@/app/components/ui/TagBadge";
import { projects, Project } from "@/app/data/projectsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Modal from "@/app/components/ui/Modal";

const MAX_PROJECTS = 12;
const PER_PAGE = 4;
const pool = projects.slice(0, MAX_PROJECTS);
const totalPages = Math.ceil(pool.length / PER_PAGE);

function PreviewCard({ project, onOpen, priority = false }: { project: Project; onOpen: (p: Project) => void; priority?: boolean }) {
  const { messages, currentLang } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-card ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
      style={{ "--card-accent": project.accentColor, cursor: "pointer" } as React.CSSProperties}
      onClick={() => onOpen(project)}
    >
      <div className="project-card-header">
        {project.logo
          ? <Image src={project.logo} alt={project.title} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw" style={{ objectFit: "cover" }} priority={priority} />
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
        <span className="project-btn">
          {messages.projects.viewDetails} <ArrowRight size={14} aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

export default function ProjectsPreview() {
  const { messages, currentLang } = useLanguage();
  const [page, setPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
            <PreviewCard key={project.id} project={project} onOpen={setSelectedProject} priority={page === 0 && index === 0} />
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
    </section>
  );
}
