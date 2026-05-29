"use client";

import { useState } from "react";
import { Download, X, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

function FooterLangToggle() {
  const { currentLang, setLang } = useLanguage();
  return (
    <div className="footer-lang">
      <button
        className={`footer-lang-btn ${currentLang === "fr" ? "footer-lang-active" : ""}`}
        onClick={() => setLang("fr")}
        aria-label="Passer en français"
      >FR</button>
      <span className="footer-lang-sep" aria-hidden="true">|</span>
      <button
        className={`footer-lang-btn ${currentLang === "en" ? "footer-lang-active" : ""}`}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >EN</button>
    </div>
  );
}

export default function ContactSection() {
  const { messages } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="contact-section">

      {/* Full-screen modal triggered by "Agrandir" */}
      {cvOpen && (
        <div className="cv-overlay" onClick={() => setCvOpen(false)} role="dialog" aria-modal="true">
          <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cv-modal-header">
              <h3 className="cv-modal-title">{messages.contact.cvModalTitle}</h3>
              <div className="cv-modal-actions">
                <a href="/CV-Elliot_Infelta.pdf" download className="cv-download-btn">
                  <Download size={16} aria-hidden="true" /> {messages.contact.cvDownload}
                </a>
                <button className="cv-close-btn" onClick={() => setCvOpen(false)} aria-label="Fermer"><X size={18} aria-hidden="true" /></button>
              </div>
            </div>
            <iframe
              src="/CV-Elliot_Infelta.pdf#toolbar=0&navpanes=0&view=FitH"
              className="cv-iframe"
              title={messages.contact.cvModalTitle}
            />
          </div>
        </div>
      )}

      <div className="container contact-content">
        <div className="section-header">
          <h2 className="section-title">{messages.contact.title}</h2>
          <p className="section-subtitle">{messages.contact.subtitle}</p>
          <p className="contact-location"><MapPin size={16} aria-hidden="true" /> {messages.contact.location}</p>
        </div>

        {/* Socials banner */}
        <div className="contact-socials-band">
          <a href="https://github.com/Sonwaul" target="_blank" rel="noopener noreferrer" className="contact-social-link">
            <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            <div className="contact-social-text">
              <span className="contact-social-label">GitHub</span>
              <span className="contact-social-value">github.com/Sonwaul</span>
            </div>
          </a>

          <div className="contact-band-sep" aria-hidden="true" />

          <a href="https://www.linkedin.com/in/elliot-infelta/" target="_blank" rel="noopener noreferrer" className="contact-social-link">
            <svg className="contact-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <div className="contact-social-text">
              <span className="contact-social-label">{messages.contact.linkedinLabel}</span>
              <span className="contact-social-value">linkedin.com/in/elliot-infelta</span>
            </div>
          </a>

          <div className="contact-band-sep" aria-hidden="true" />

          <a href="mailto:contact@elliot-infelta.fr" className="contact-social-link">
            <svg className="contact-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m2 6 10 7 10-7"/>
            </svg>
            <div className="contact-social-text">
              <span className="contact-social-label">{messages.contact.emailLabel}</span>
              <span className="contact-social-value">contact@elliot-infelta.fr</span>
            </div>
          </a>
        </div>

        <div className="contact-inner">
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              {sent ? (
                <div className="contact-success">
                  <CheckCircle size={32} className="contact-success-icon" aria-hidden="true" />
                  <p>{messages.contact.success}</p>
                </div>
              ) : (
                <>
                  <input type="text" name="name" value={form.name} onChange={handleChange}
                    placeholder={messages.contact.namePlaceholder} required className="contact-input"/>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder={messages.contact.emailPlaceholder} required className="contact-input"/>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder={messages.contact.subjectPlaceholder} required className="contact-input"/>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder={messages.contact.messagePlaceholder} required rows={4} className="contact-textarea"/>
                  {error && <p className="contact-error">{messages.contact.error}</p>}
                  <button type="submit" className="contact-submit" disabled={loading}>
                    {loading ? messages.contact.sending : <>{messages.contact.submit} <ArrowRight size={16} aria-hidden="true" /></>}
                  </button>
                </>
              )}
            </form>
          </div>

          <div className="cv-preview-block">
            <div className="cv-preview-header">
              <div className="cv-preview-title">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                {messages.contact.cvModalTitle}
              </div>
              <div className="cv-preview-actions">
                <button className="cv-preview-btn cv-preview-btn-outline" onClick={() => setCvOpen(true)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                  {messages.contact.cvEnlarge}
                </button>
                <a href="/CV-Elliot_Infelta.pdf" download className="cv-preview-btn cv-preview-btn-filled">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  {messages.contact.cvDownload}
                </a>
              </div>
            </div>
            <div className="cv-preview-frame">
              <iframe
                src="/CV-Elliot_Infelta.pdf#toolbar=0&navpanes=0&view=FitH"
                className="cv-preview-iframe"
                title={messages.contact.cvModalTitle}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-footer">
        <p className="footer-copy" suppressHydrationWarning>
          © {new Date().getFullYear()} Elliot Infelta · {messages.contact.footerCopy}
        </p>
        <nav className="footer-nav">
          <a href="#presentation">{messages.nav.hero}</a>
          <a href="#parcours">{messages.nav.experience}</a>
          <a href="#competences">{messages.nav.skills}</a>
          <a href="#projets">{messages.nav.projects}</a>
          <a href="#temoignages">{messages.nav.testimonials}</a>
          <a href="#contact">{messages.nav.contact}</a>
        </nav>
        <FooterLangToggle />
      </div>
    </section>
  );
}
