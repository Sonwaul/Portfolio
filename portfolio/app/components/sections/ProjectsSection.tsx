"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { projects, Project } from "@/app/data/projectsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Modal from "@/app/components/ui/Modal";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
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
          ? <Image src={project.logo} alt={project.title} width={0} height={0} sizes="240px" style={{ width: "auto", height: "auto", maxHeight: "120px", maxWidth: "100%", objectFit: "contain" }} />
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
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        <span className="project-btn">
          {messages.projects.viewDetails} →
        </span>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { messages, currentLang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => {
      if (t !== "À compléter" && t !== "To be filled") tagSet.add(t);
    }));
    const TAG_ORDER = [
      "Shopify", "Shopify Plus", "Shopify App", "Shopify POS",
      "API Shopify", "PHP", "React / Next.js",
      "ERP API", "ERP Fichier à plat", "EBP SDK", "EBP SaaS", "Sage X3", "Sage", "Sellsy", "Kaeliips",
      "B2B", "B2B & B2C", "B2C",
      "UX/UI", "Figma",
      "SEO",
    ];
    return Array.from(tagSet).sort((a, b) => {
      const ia = TAG_ORDER.indexOf(a);
      const ib = TAG_ORDER.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projets" className="projects-section">
      <div className="container projects-content">
        <div className="section-header">
          <h2 className="section-title">{messages.projects.title}</h2>
          <p className="section-subtitle">{messages.projects.subtitle}</p>
        </div>

        <div className="projects-filter">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            {currentLang === "en" ? "All" : "Tous"} ({projects.length})
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${activeFilter === tag ? "active" : ""}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        accentColor={selectedProject?.accentColor}
      >
        {selectedProject && (
          <div className="modal-detail">
            <div className="modal-hero">
              {selectedProject.logo
                ? <div className="modal-hero-logo-wrap">
                    <Image src={selectedProject.logo} alt={selectedProject.title} width={0} height={0} sizes="200px" style={{ width: "auto", height: "52px", objectFit: "contain" }} />
                  </div>
                : <span className="modal-hero-initial">{selectedProject.title.charAt(0)}</span>
              }
              <h3 className="modal-hero-title">{selectedProject.title}</h3>
              <p className="modal-hero-role">
                {currentLang === "en" && selectedProject.roleEn ? selectedProject.roleEn : selectedProject.role}
              </p>
              <span className="modal-hero-year">{selectedProject.year}</span>
            </div>
            <div className="modal-content-inner">
              <p className="modal-full-desc">
                {currentLang === "en" && selectedProject.descriptionEn
                  ? selectedProject.descriptionEn
                  : selectedProject.description}
              </p>
              <h4 className="modal-missions-title">{messages.projects.techStack}</h4>
              <div className="project-tags" style={{ marginTop: "0.5rem" }}>
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              {selectedProject.link && (
                <div className="modal-links">
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                    🔗 {messages.projects.visitSite}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
