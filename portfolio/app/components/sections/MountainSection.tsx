"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { timelineItems, educationItems, TimelineItem } from "@/app/data/timelineData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import Modal from "@/app/components/ui/Modal";

function TimelineCard({ item, onOpen }: { item: TimelineItem; onOpen: (item: TimelineItem) => void }) {
  const { messages } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`timeline-card ${item.type} ${isVisible ? "reveal-visible" : "reveal-hidden"}`}
    >
      <div className="timeline-dot" />
      <div className="timeline-card-inner">
        <div className="timeline-card-header">
          <div>
            <span className="timeline-period">
              {item.startDate} → {item.current ? messages.mountain.present : item.endDate}
            </span>
            {item.current && (
              <span className="timeline-badge">{messages.mountain.currentBadge}</span>
            )}
          </div>
          <span className="timeline-location">📍 {item.location}</span>
        </div>
        <h3 className="timeline-company">{item.company}</h3>
        <p className="timeline-role">{item.role}</p>
        <p className="timeline-short">{item.shortDescription}</p>
        <div className="timeline-tags">
          {item.tags.map((tag) => (
            <span key={tag} className="timeline-tag">{tag}</span>
          ))}
        </div>
        <button className="timeline-btn" onClick={() => onOpen(item)}>
          {messages.mountain.seeDetails} →
        </button>
      </div>
    </div>
  );
}

export default function MountainSection() {
  const { messages } = useLanguage();
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);

  const items = activeTab === "experience" ? timelineItems : educationItems;

  return (
    <section id="mountain" className="mountain-section">
      {/* Silhouette montagne SVG en fond */}
      <div className="mountain-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="mountain-svg">
          <path
            d="M0,320 L0,220 L180,80 L360,200 L540,40 L720,180 L900,60 L1080,160 L1260,100 L1440,200 L1440,320 Z"
            className="mountain-path-back"
          />
          <path
            d="M0,320 L0,280 L240,140 L480,260 L660,120 L840,240 L1020,160 L1200,280 L1440,200 L1440,320 Z"
            className="mountain-path-front"
          />
        </svg>
      </div>

      <div className="container mountain-content">
        <div className="section-header">
          <h2 className="section-title">{messages.mountain.title}</h2>
          <p className="section-subtitle">{messages.mountain.subtitle}</p>
        </div>

        {/* Onglets */}
        <div className="mountain-tabs">
          <button
            className={`mountain-tab ${activeTab === "experience" ? "mountain-tab-active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            🏔️ {messages.mountain.experienceTab}
          </button>
          <button
            className={`mountain-tab ${activeTab === "education" ? "mountain-tab-active" : ""}`}
            onClick={() => setActiveTab("education")}
          >
            🎓 {messages.mountain.educationTab}
          </button>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line" />
          <div className="timeline-items">
            {items.map((item) => (
              <TimelineCard key={item.id} item={item} onOpen={setSelectedItem} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal détail */}
      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        title={selectedItem ? `${selectedItem.company} — ${selectedItem.role}` : ""}
      >
        {selectedItem && (
          <div className="modal-detail">
            <div className="modal-meta">
              <span>
                📅 {selectedItem.startDate} → {selectedItem.current ? messages.mountain.present : selectedItem.endDate}
              </span>
              <span>📍 {selectedItem.location}</span>
              {selectedItem.current && (
                <span className="timeline-badge">{messages.mountain.currentBadge}</span>
              )}
            </div>
            <p className="modal-short-desc">{selectedItem.shortDescription}</p>
            <h4 className="modal-missions-title">{messages.mountain.missions}</h4>
            <ul className="modal-missions-list">
              {selectedItem.missions.map((mission, i) => (
                <li key={i}>{mission}</li>
              ))}
            </ul>
            <div className="timeline-tags" style={{ marginTop: "1rem" }}>
              {selectedItem.tags.map((tag) => (
                <span key={tag} className="timeline-tag">{tag}</span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
