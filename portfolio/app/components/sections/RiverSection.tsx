"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { projects, Project } from "@/app/data/projectsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Modal from "@/app/components/ui/Modal";

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const { messages } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`river-card ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
      style={{ "--card-accent": project.accentColor } as React.CSSProperties}
    >
      <div className="river-card-accent-line" />
      <div className="river-card-body">
        <div className="river-card-top">
          <span className={`river-status ${project.status === "ongoing" ? "status-ongoing" : "status-done"}`}>
            {project.status === "ongoing" ? messages.river.statusOngoing : messages.river.statusDone}
          </span>
          <span className="river-year">{project.year}</span>
        </div>
        <h3 className="river-card-title">{project.title}</h3>
        <p className="river-card-desc">{project.shortDescription}</p>
        <div className="river-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="river-tag">{tag}</span>
          ))}
        </div>
        <button className="river-btn" onClick={() => onOpen(project)}>
          {messages.river.viewDetails} →
        </button>
      </div>
    </div>
  );
}

export default function RiverSection() {
  const { messages } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="river" className="river-section">
      {/* Ondulations décoratives */}
      <div className="river-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="river-wave-svg">
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            className="river-wave-path"
          />
        </svg>
      </div>

      <div className="container river-content">
        <div className="section-header section-header-light">
          <h2 className="section-title">{messages.river.title}</h2>
          <p className="section-subtitle">{messages.river.subtitle}</p>
        </div>

        <div className="river-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      {/* Modal projet */}
      <Modal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
      >
        {selectedProject && (
          <div className="modal-detail">
            <div className="modal-meta">
              <span>📅 {selectedProject.year}</span>
              <span className={`river-status ${selectedProject.status === "ongoing" ? "status-ongoing" : "status-done"}`}>
                {selectedProject.status === "ongoing" ? messages.river.statusOngoing : messages.river.statusDone}
              </span>
            </div>
            <p className="modal-full-desc">{selectedProject.description}</p>
            <h4 className="modal-missions-title">{messages.river.techStack}</h4>
            <div className="river-tags" style={{ marginTop: "0.5rem" }}>
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="river-tag">{tag}</span>
              ))}
            </div>
            <div className="modal-links">
              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                  🔗 {messages.river.visitSite}
                </a>
              )}
              {selectedProject.github && (
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link-btn">
                  💻 {messages.river.viewCode}
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
