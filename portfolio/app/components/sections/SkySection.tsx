"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";

export default function SkySection() {
  const { messages } = useLanguage();

  return (
    <section id="sky" className="sky-section">
      {/* Nuages de fond flottants */}
      <div className="cloud cloud-1" aria-hidden="true" />
      <div className="cloud cloud-2" aria-hidden="true" />
      <div className="cloud cloud-3" aria-hidden="true" />
      <div className="cloud cloud-4" aria-hidden="true" />
      <div className="cloud cloud-5" aria-hidden="true" />

      {/* Opening style Simpsons — deux masses de nuages qui s'écartent */}
      <div className="sky-intro-left" aria-hidden="true">
        <div className="sky-intro-bump sky-intro-bump-1" />
        <div className="sky-intro-bump sky-intro-bump-2" />
        <div className="sky-intro-bump sky-intro-bump-3" />
      </div>
      <div className="sky-intro-right" aria-hidden="true">
        <div className="sky-intro-bump sky-intro-bump-4" />
        <div className="sky-intro-bump sky-intro-bump-5" />
        <div className="sky-intro-bump sky-intro-bump-6" />
      </div>

      {/* Contenu principal */}
      <div className="container sky-content">
        <div className="sky-photo-wrapper">
          <div className="sky-photo-frame">
            <span className="sky-photo-initials">EI</span>
          </div>
          <div className="sky-photo-glow" aria-hidden="true" />
        </div>

        <div className="sky-text">
          <p className="sky-greeting">{messages.sky.greeting}</p>
          <h1 className="sky-name">Elliot Infelta</h1>
          <p className="sky-role">{messages.sky.role}</p>
          <p className="sky-location">
            <span className="sky-location-icon">📍</span>
            {messages.sky.location}
          </p>
          <p className="sky-description">{messages.sky.description}</p>
          <a href="#mountain" className="sky-cta">
            {messages.sky.cta}
            <span className="sky-cta-arrow">↓</span>
          </a>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="sky-scroll-hint">
        <span>{messages.sky.scrollHint}</span>
        <div className="sky-scroll-mouse">
          <div className="sky-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
