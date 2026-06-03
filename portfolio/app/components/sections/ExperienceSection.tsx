"use client";

import { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { timelineItems, educationItems } from "@/app/data/timelineData";
import { TagBadge } from "@/app/components/ui/TagBadge";

export default function ExperienceSection() {
  const { messages, currentLang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");
  const [displayedTab, setDisplayedTab] = useState<"experience" | "education">("experience");
  const [fading, setFading] = useState(false);

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
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
