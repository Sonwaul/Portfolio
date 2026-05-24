"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { projects, Project } from "@/app/data/projectsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Modal from "@/app/components/ui/Modal";

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: (p: Project) => void; index: number }) {
  const { messages } = useLanguage();
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
        <p className="project-card-desc">{project.shortDescription}</p>
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
  const { messages } = useLanguage();
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
            <div className="modal-meta">
              <span>📅 {selectedProject.year}</span>
              <span className={`project-status ${selectedProject.status === "ongoing" ? "status-ongoing" : "status-done"}`}>
                {selectedProject.status === "ongoing" ? messages.projects.statusOngoing : messages.projects.statusDone}
              </span>
            </div>
            <p className="modal-full-desc">{selectedProject.description}</p>
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
              {!selectedProject.link && !selectedProject.github && (
                <p className="modal-no-link">Liens disponibles prochainement.</p>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
