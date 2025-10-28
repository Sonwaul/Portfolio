"use client";

import Navbar from "./components/header/Navbar";
import { useLanguage } from "./i18n/LanguageContext";

/**
 * Page principale (HomePage)
 * - On récupère les textes depuis le contexte de langue
 */
export default function HomePage() {
  const { messages } = useLanguage();

  return (
    <main id="top">
      <Navbar />

      {/* Section d'intro (Hero) */}
      <section
        id="hero"
        style={{
          paddingTop: "6rem", // espace à cause de la navbar fixe
          paddingLeft: "1rem",
          paddingRight: "1rem",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <p style={{ color: "var(--accent)" }}>
          {messages.hero.hello}
        </p>

        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            lineHeight: 1.3,
            color: "var(--text-light)",
          }}
        >
          {messages.hero.title}
        </h1>

        <p
          style={{
            marginTop: "1rem",
            color: "var(--text-light)",
            maxWidth: "40rem",
            lineHeight: 1.5,
          }}
        >
          {messages.hero.subtitle}
        </p>
      </section>

      {/* Les sections d'ancrage (pour scroller quand on clique sur le menu) */}
      <section id="about" style={{ height: "60vh", borderTop: "1px solid var(--border)" }} />
      <section id="skills" style={{ height: "60vh", borderTop: "1px solid var(--border)" }} />
      <section id="experience" style={{ height: "60vh", borderTop: "1px solid var(--border)" }} />
      <section id="projects" style={{ height: "60vh", borderTop: "1px solid var(--border)" }} />
      <section id="contact" style={{ height: "60vh", borderTop: "1px solid var(--border)" }} />
    </main>
  );
}
