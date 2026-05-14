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
  const [displayedTab, setDisplayedTab] = useState<"experience" | "education">("experience");
  const [fading, setFading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [modalTab, setModalTab] = useState(0);

  const items = displayedTab === "experience" ? timelineItems : educationItems;

  function handleTabChange(tab: "experience" | "education") {
    if (tab === activeTab || fading) return;
    setActiveTab(tab);
    setFading(true);
    setTimeout(() => {
      setDisplayedTab(tab);
      setFading(false);
    }, 220);
  }

  function handleOpen(item: TimelineItem) {
    setSelectedItem(item);
    setModalTab(0);
  }

  return (
    <section id="parcours" className="mountain-section">
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
            onClick={() => handleTabChange("experience")}
          >
            🏔️ {messages.mountain.experienceTab}
          </button>
          <button
            className={`mountain-tab ${activeTab === "education" ? "mountain-tab-active" : ""}`}
            onClick={() => handleTabChange("education")}
          >
            🎓 {messages.mountain.educationTab}
          </button>
        </div>

        {/* Timeline */}
        <div className={`timeline-wrapper${fading ? " timeline-fading" : ""}`}>
          <div className="timeline-line" />
          <div className="timeline-items">
            {items.map((item) => (
              <TimelineCard key={item.id} item={item} onOpen={handleOpen} />
            ))}
          </div>
        </div>
      </div>

      {/* Brume à la lisière de la forêt */}
      <div className="mountain-to-forest-mist" aria-hidden="true" />
      {/* Transition vers la forêt — cimes d'arbres en vert forêt */}
      <div className="mountain-to-forest-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,150 L0,115 L12,115 L28,68 L44,115 L58,115 L72,48 L86,115 L100,115 L116,75 L130,115 L144,115 L158,35 L172,115 L188,115 L202,58 L216,115 L230,115 L248,22 L266,115 L280,115 L295,62 L308,115 L322,115 L338,40 L354,115 L368,115 L382,70 L396,115 L410,115 L428,18 L446,115 L460,115 L474,52 L488,115 L502,115 L516,42 L530,115 L544,115 L558,75 L572,115 L586,115 L600,28 L614,115 L628,115 L642,58 L656,115 L670,115 L684,45 L698,115 L712,115 L730,15 L748,115 L762,115 L776,65 L790,115 L804,115 L818,38 L832,115 L846,115 L860,60 L874,115 L888,115 L902,25 L916,115 L930,115 L944,55 L958,115 L972,115 L986,42 L1000,115 L1014,115 L1028,70 L1042,115 L1056,115 L1070,20 L1084,115 L1098,115 L1112,50 L1126,115 L1140,115 L1154,38 L1168,115 L1182,115 L1196,65 L1210,115 L1224,115 L1238,28 L1252,115 L1266,115 L1280,55 L1294,115 L1308,115 L1322,45 L1336,115 L1350,115 L1364,72 L1378,115 L1392,115 L1410,35 L1428,115 L1440,88 L1440,150 Z" />
        </svg>
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

            {selectedItem.tabs ? (
              <>
                <div className="modal-inner-tabs">
                  {selectedItem.tabs.map((tab, i) => (
                    <button
                      key={i}
                      className={`modal-inner-tab ${modalTab === i ? "modal-inner-tab-active" : ""}`}
                      onClick={() => setModalTab(i)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <ul className="modal-missions-list">
                  {selectedItem.tabs[modalTab].missions.map((mission, i) => (
                    <li key={i}>{mission}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h4 className="modal-missions-title">{messages.mountain.missions}</h4>
                <ul className="modal-missions-list">
                  {selectedItem.missions.map((mission, i) => (
                    <li key={i}>{mission}</li>
                  ))}
                </ul>
              </>
            )}

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
