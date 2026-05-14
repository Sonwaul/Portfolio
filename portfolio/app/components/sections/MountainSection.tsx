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
      {/* Silhouette montagne pleine hauteur — pics émergent dans le ciel bleu */}
      <div className="mountain-bg" aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="mountain-svg">
          {/* Chaîne lointaine */}
          <path
            d="M0,900 L0,340 L190,210 L370,310 L520,140 L700,220 L860,90 L1040,210 L1200,140 L1390,260 L1440,230 L1440,900 Z"
            className="mountain-path-far"
          />
          {/* Chaîne intermédiaire */}
          <path
            d="M0,900 L0,400 L220,270 L410,370 L575,185 L720,55 L865,165 L1065,320 L1185,215 L1365,340 L1440,305 L1440,900 Z"
            className="mountain-path-mid"
          />
          {/* Chaîne de premier plan — pic central à y=0 */}
          <path
            d="M0,900 L0,460 L255,330 L450,435 L615,240 L720,0 L825,215 L1005,390 L1120,285 L1305,415 L1440,380 L1440,900 Z"
            className="mountain-path-near"
          />
          {/* Neige — pic central (720, 0) */}
          <path
            d="M702,85 L711,38 L720,0 L729,38 L738,85 L730,68 L720,28 L710,68 Z"
            fill="white" fillOpacity="0.93"
          />
          {/* Neige — pic gauche (615, 240) */}
          <path
            d="M605,278 L611,256 L615,240 L619,256 L625,278 L620,266 L615,252 L610,266 Z"
            fill="white" fillOpacity="0.88"
          />
          {/* Neige — pic droit (825, 215) */}
          <path
            d="M815,253 L821,232 L825,215 L829,232 L835,253 L830,241 L825,228 L820,241 Z"
            fill="white" fillOpacity="0.88"
          />
          {/* Neige — pic intermédiaire gauche (860, 90) */}
          <path
            d="M853,122 L857,103 L860,90 L863,103 L867,122 L863,112 L860,98 L857,112 Z"
            fill="white" fillOpacity="0.82"
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
