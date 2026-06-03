"use client";

import { Clock, Search, Zap, Target } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import ContactSection from "@/app/components/sections/ContactSection";
import ReassuranceBlock from "@/app/components/ui/ReassuranceBlock";

const REASONS = [
  { icon: Search, titleKey: "reason1Title", descKey: "reason1Desc" },
  { icon: Zap,    titleKey: "reason2Title", descKey: "reason2Desc" },
  { icon: Target, titleKey: "reason3Title", descKey: "reason3Desc" },
] as const;

export default function ContactPageContent() {
  const { messages } = useLanguage();
  const cp = messages.contactPage;

  return (
    <main>

      {/* ── Intro ── */}
      <section className="cp-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">{cp.h1}</h1>
            <p className="section-subtitle" style={{ maxWidth: "660px", margin: "0 auto 1.5rem" }}>
              {cp.intro}
            </p>
            <div className="cp-badge">
              <Clock size={13} aria-hidden="true" />
              {cp.engagement}
            </div>
          </div>
        </div>
      </section>

      {/* ── Formulaire ── */}
      <ContactSection hideHeader />

      {/* ── Pourquoi collaborer ── */}
      <section className="cp-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{cp.h2Why}</h2>
          </div>
          <div className="cp-reasons">
            {REASONS.map(({ icon: Icon, titleKey, descKey }, i) => (
              <div key={i} className="cp-reason">
                <div className="cp-reason-icon">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="cp-reason-title">{cp[titleKey]}</h3>
                <p className="cp-reason-desc">{cp[descKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Réassurance avis ── */}
      <ReassuranceBlock hideCta />

    </main>
  );
}
