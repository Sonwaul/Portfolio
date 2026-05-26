"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { skillZones, SkillZone } from "@/app/data/skillsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type Mode = "tech" | "management" | "all";

function SkillColCard({ zone, mode, lang }: { zone: SkillZone; mode: Mode; lang: string }) {
  const { ref, isVisible } = useScrollReveal();

  const dimmed =
    (mode === "tech"       && zone.id === "management") ||
    (mode === "management" && (zone.id === "tech" || zone.id === "tools"));

  const zoneTitle    = lang === "en" && zone.titleEn    ? zone.titleEn    : zone.title;
  const zoneSubtitle = lang === "en" && zone.subtitleEn ? zone.subtitleEn : zone.subtitle;

  return (
    <div
      ref={ref}
      className={[
        "skill-col",
        dimmed ? "skill-col-dimmed" : "",
        isVisible ? "reveal-visible" : "reveal-hidden",
      ].join(" ").trim()}
    >
      <div className="skill-col-header">
        <h3 className="skill-col-title">{zoneTitle}</h3>
        <p className="skill-col-subtitle">{zoneSubtitle}</p>
      </div>

      <div className="skill-col-groups">
        {zone.groups.map((group, gi) => (
          <div key={gi} className="skill-col-group">
            <p className="skill-col-group-label">{lang === "en" && group.titleEn ? group.titleEn : group.title}</p>
            <div className="skill-col-badges">
              {group.skills.map((skill, si) => (
                <span key={si} className="skill-badge">
                  {skill.logo && (
                    <Image src={skill.logo} alt="" width={16} height={16} className="skill-badge-logo" />
                  )}
                  {lang === "en" && skill.nameEn ? skill.nameEn : skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { messages, currentLang } = useLanguage();
  const [mode, setMode] = useState<Mode>("all");

  return (
    <section id="competences" className="skills-section">
      <div className="container skills-content">
        <div className="section-header">
          <h2 className="section-title">{messages.skills.title}</h2>
          <p className="section-subtitle">{messages.skills.subtitle}</p>
        </div>

        <p className="skills-intro">{messages.skills.intro}</p>

        <div className="skills-toggle-bar">
          <button
            className={`skills-toggle-btn ${mode === "all" ? "skills-toggle-active" : ""}`}
            onClick={() => setMode("all")}
          >
            {messages.skills.toggleAll}
          </button>
          <button
            className={`skills-toggle-btn ${mode === "tech" ? "skills-toggle-active skills-toggle-tech" : ""}`}
            onClick={() => setMode("tech")}
          >
            {messages.skills.toggleTech}
          </button>
          <button
            className={`skills-toggle-btn ${mode === "management" ? "skills-toggle-active skills-toggle-management" : ""}`}
            onClick={() => setMode("management")}
          >
            {messages.skills.toggleManagement}
          </button>
        </div>

        <div className="skills-grid">
          {skillZones.map((zone) => (
            <SkillColCard key={zone.id} zone={zone} mode={mode} lang={currentLang} />
          ))}
        </div>
      </div>
    </section>
  );
}
