"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

const TOPICS_FR = ["IA & Dev", "Intégrations ERP", "Architecture web", "SEO technique", "Lancements de projets"];
const TOPICS_EN = ["AI & Dev", "ERP Integrations", "Web Architecture", "Technical SEO", "Project launches"];

export default function BlogTeaser() {
  const { messages, currentLang } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const topics = currentLang === "en" ? TOPICS_EN : TOPICS_FR;

  return (
    <section className={`blog-teaser-section ${isVisible ? "reveal-visible" : "reveal-hidden"}`} ref={ref}>
      <div className="container blog-teaser-content">

        <p className="blog-teaser-label">
          {currentLang === "en" ? "My blog" : "Mon blog"}
        </p>

        <h2 className="section-title blog-teaser-title">
          {messages.home.blogCtaTitle}
        </h2>

        <p className="blog-teaser-desc">
          {messages.home.blogCtaDesc}
        </p>

        <div className="blog-teaser-topics">
          {topics.map((topic) => (
            <span key={topic} className="blog-teaser-topic">
              {topic}
            </span>
          ))}
        </div>

        <Link href="/blog" className="hero-cta">
          {messages.home.blogCtaBtn}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>

      </div>
    </section>
  );
}
