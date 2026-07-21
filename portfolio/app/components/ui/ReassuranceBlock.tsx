"use client";

import Link from "next/link";
import { ArrowRight, Clock, Layers, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import TestimonialsCarousel from "@/app/components/ui/TestimonialsCarousel";

export default function ReassuranceBlock({ hideCta = false }: { hideCta?: boolean }) {
  const { messages } = useLanguage();

  return (
    <>
      {!hideCta && (
        <section className="reassurance-cta">
          <div className="container reassurance-cta-inner">
            <p className="reassurance-cta-eyebrow">{messages.reassurance.contactEyebrow}</p>
            <h2 className="reassurance-cta-title">{messages.reassurance.contactTitle}</h2>
            <p className="reassurance-cta-desc">{messages.reassurance.contactDesc}</p>

            <div className="reassurance-cta-chips">
              <span className="reassurance-chip"><Clock size={13} aria-hidden="true" /> &lt; 48h de réponse</span>
              <span className="reassurance-chip"><Layers size={13} aria-hidden="true" /> Lead Projet & Dev Full Stack</span>
              <span className="reassurance-chip"><ShieldCheck size={13} aria-hidden="true" /> 15+ projets livrés</span>
            </div>

            <Link href="/contact" className="reassurance-cta-btn">
              {messages.reassurance.contactCta} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}

      <TestimonialsCarousel title={messages.reassurance.reviewsTitle} />
    </>
  );
}
