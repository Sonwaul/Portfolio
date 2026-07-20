"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { timelineItems, educationItems, TimelineItem } from "@/app/data/timelineData";
import Modal from "@/app/components/ui/Modal";
import { TagBadge } from "@/app/components/ui/TagBadge";

export default function ExperienceSection() {
  const { messages, currentLang } = useLanguage();
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
    <section id="parcours" className="experience-section">
      <div className="container experience-content">
        <div className="section-header">
          <h2 className="section-title">{messages.experience.title}</h2>
          <p className="section-subtitle">{messages.experience.subtitle}</p>
        </div>

        <div className="experience-tabs">
          <button
            className={`experience-tab ${activeTab === "experience" ? "experience-tab-active" : ""}`}
            onClick={() => handleTabChange("experience")}
          >
            <Briefcase size={16} aria-hidden="true" /> {messages.experience.experienceTab}
          </button>
          <button
            className={`experience-tab ${activeTab === "education" ? "experience-tab-active" : ""}`}
            onClick={() => handleTabChange("education")}
          >
            <GraduationCap size={16} aria-hidden="true" /> {messages.experience.educationTab}
          </button>
        </div>

        <div className={`timeline-h-wrapper${fading ? " timeline-fading" : ""}`}>
          <div className="timeline-h-track">
            <div className="timeline-h-line" />

            {[...items].reverse().map((item, i) => (
              <div
                key={item.id}
                className={`timeline-h-node ${i % 2 === 0 ? "node-above" : "node-below"}`}
              >
                <div className={`timeline-h-dot${item.current ? " dot-current" : ""}`} />
                <div className="timeline-h-stem" />
                <div className="timeline-h-card">
                  <div className="timeline-h-period">
                    {item.startDate} → {item.current ? messages.experience.present : item.endDate}
                    {item.current && (
                      <span className="timeline-badge">{messages.experience.currentBadge}</span>
                    )}
                  </div>
                  <p className="timeline-h-company">{item.company}</p>
                  <p className="timeline-h-role">
                    {currentLang === "en" && item.roleEn ? item.roleEn : item.role}
                  </p>
                  <div className="timeline-h-tags">
                    {item.tags.slice(0, 3).map((tag) => (
                      <TagBadge key={tag} tag={tag} size={13} />
                    ))}
                  </div>
                  <button className="timeline-btn" onClick={() => handleOpen(item)}>
                    {messages.experience.seeDetails} <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={selectedItem !== null}
        onClose={() => setSelectedItem(null)}
        accentColor={selectedItem?.accentColor}
      >
        {selectedItem && (
          <div className="modal-detail">
            <div className="modal-hero">
              {selectedItem.logo
                ? <div className="modal-hero-logo-wrap">
                    <Image src={selectedItem.logo} alt={selectedItem.company} width={0} height={0} sizes="180px" style={{ width: "auto", height: "52px", objectFit: "contain" }} />
                  </div>
                : <span className="modal-hero-initial">{selectedItem.company.charAt(0)}</span>
              }
              <h3 className="modal-hero-title">{selectedItem.company}</h3>
              <p className="modal-hero-role">
                {currentLang === "en" && selectedItem.roleEn ? selectedItem.roleEn : selectedItem.role}
              </p>
              <div className="modal-hero-meta">
                <span className="modal-hero-year">
                  <Calendar size={14} aria-hidden="true" /> {selectedItem.startDate} → {selectedItem.current ? messages.experience.present : selectedItem.endDate}
                </span>
                <span className="modal-hero-year"><MapPin size={14} aria-hidden="true" /> {selectedItem.location}</span>
                {selectedItem.current && (
                  <span className="modal-hero-badge">{messages.experience.currentBadge}</span>
                )}
              </div>
            </div>
            <div className="modal-content-inner modal-content-inner--left">
              <p className="modal-short-desc">
                {currentLang === "en" && selectedItem.shortDescriptionEn
                  ? selectedItem.shortDescriptionEn
                  : selectedItem.shortDescription}
              </p>

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
                  <h4 className="modal-missions-title">{messages.experience.missions}</h4>
                  <ul className="modal-missions-list">
                    {(currentLang === "en" && selectedItem.missionsEn
                      ? selectedItem.missionsEn
                      : selectedItem.missions
                    ).map((mission, i) => (
                      <li key={i}>{mission}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="timeline-tags" style={{ marginTop: "1.2rem" }}>
                {selectedItem.tags.map((tag) => (
                  <TagBadge key={tag} tag={tag} size={15} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
