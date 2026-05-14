"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import { skillCategories } from "@/app/data/skillsData";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

function SkillBar({ name, level }: { name: string; level: number }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className="skill-item">
      <div className="skill-item-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function ForestSection() {
  const { messages } = useLanguage();

  return (
    <section id="forest" className="forest-section">
      {/* Arbres décoratifs en bas */}
      <div className="forest-trees" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`forest-tree forest-tree-${(i % 4) + 1}`} />
        ))}
      </div>

      <div className="container forest-content">
        <div className="section-header section-header-light">
          <h2 className="section-title">{messages.forest.title}</h2>
          <p className="section-subtitle">{messages.forest.subtitle}</p>
        </div>

        <div className="forest-grid">
          {skillCategories.map((category) => (
            <div key={category.id} className="forest-card">
              <div className="forest-card-header">
                <span className="forest-card-icon">{category.icon}</span>
                <h3 className="forest-card-title">{category.label}</h3>
              </div>
              <div className="forest-skills">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
