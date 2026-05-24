"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { projects, Project } from "@/app/data/projectsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Modal from "@/app/components/ui/Modal";

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: (p: Project) => void; index: number }) {
  const { messages, currentLang } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-card project-card-${index + 1} ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
      style={{ "--card-accent": project.accentColor } as React.CSSProperties}
    >
      <div className="project-card-accent" />
      <div className="project-card-body">
        <div className="project-card-top">
          <span className={`project-status ${project.status === "ongoing" ? "status-ongoing" : "status-done"}`}>
            {project.status === "ongoing" ? messages.projects.statusOngoing : messages.projects.statusDone}
          </span>
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
        <button className="project-btn" onClick={() => onOpen(project)}>
          {messages.projects.viewDetails} →
        </button>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { messages, currentLang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projets" className="projects-section">
      <div className="container projects-content">
        <div className="section-header">
          <h2 className="section-title">{messages.projects.title}</h2>
          <p className="section-subtitle">{messages.projects.subtitle}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} index={i} />
          ))}
        </div>
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
      >
        {selectedProject && (
          <div className="modal-detail">
            {selectedProject.logo && (
              <div className="modal-company-logos">
                <Image src={selectedProject.logo} alt={selectedProject.title} width={180} height={56} className="modal-company-logo" />
              </div>
            )}
            <div className="modal-meta">
              <span>📅 {selectedProject.year}</span>
              <span className={`project-status ${selectedProject.status === "ongoing" ? "status-ongoing" : "status-done"}`}>
                {selectedProject.status === "ongoing" ? messages.projects.statusOngoing : messages.projects.statusDone}
              </span>
            </div>
            <p className="modal-project-role">
              {currentLang === "en" && selectedProject.roleEn ? selectedProject.roleEn : selectedProject.role}
            </p>
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
            <div className="modal-links">
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                  🔗 {messages.projects.visitSite}
                </a>
              )}
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                  💻 {messages.projects.viewCode}
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
