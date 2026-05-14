"use client";

import { useState } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function LakeSection() {
  const { messages } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: dans un vrai projet, envoyer vers une API ou service mail
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="lake" className="lake-section">
      {/* Reflet du lac en fond */}
      <div className="lake-reflection" aria-hidden="true" />

      <div className="container lake-content">
        <div className="section-header section-header-light">
          <h2 className="section-title">{messages.lake.title}</h2>
          <p className="section-subtitle">{messages.lake.subtitle}</p>
          <p className="lake-location">📍 {messages.lake.location}</p>
        </div>

        <div className="lake-inner">
          {/* Formulaire */}
          <form className="lake-form" onSubmit={handleSubmit}>
            {sent ? (
              <div className="lake-success">
                <span className="lake-success-icon">✅</span>
                <p>{messages.lake.success}</p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={messages.lake.namePlaceholder}
                  required
                  className="lake-input"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={messages.lake.emailPlaceholder}
                  required
                  className="lake-input"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={messages.lake.messagePlaceholder}
                  required
                  rows={5}
                  className="lake-textarea"
                />
                <button type="submit" className="lake-submit">
                  {messages.lake.submit} →
                </button>
              </>
            )}
          </form>

          {/* Réseaux sociaux */}
          <div className="lake-socials">
            <a
              href="https://linkedin.com/in/elliot-infelta"
              target="_blank"
              rel="noopener noreferrer"
              className="lake-social-link"
            >
              <span className="lake-social-icon">in</span>
              <span>{messages.lake.linkedinLabel}</span>
            </a>
            <a
              href="mailto:elliot@exemple.com"
              className="lake-social-link"
            >
              <span className="lake-social-icon">@</span>
              <span>{messages.lake.emailLabel}</span>
            </a>
            <a
              href="#"
              className="lake-social-link"
            >
              <span className="lake-social-icon">+</span>
              <span>{messages.lake.otherLabel}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="lake-footer">
        <p>© {new Date().getFullYear()} Elliot Infelta · Fait avec ♥ depuis la métropole Lilloise</p>
      </div>
    </section>
  );
}
