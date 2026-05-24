"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { useLanguage } from "@/app/i18n/LanguageContext";

const SECTIONS = ["presentation", "parcours", "competences", "projets", "temoignages", "contact"] as const;
type SectionId = typeof SECTIONS[number];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("presentation");
  const { messages } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as SectionId);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const navItems = [
    { id: "presentation", label: messages.nav.hero },
    { id: "parcours",     label: messages.nav.experience },
    { id: "competences",  label: messages.nav.skills },
    { id: "projets",      label: messages.nav.projects },
    { id: "temoignages",  label: messages.nav.testimonials },
    { id: "contact",      label: messages.nav.contact },
  ] as const;

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbarContainer} data-section={activeSection}>
          <a href="#top" className={styles.logo}>{messages.brandName}</a>

          <div className={styles.rightSection}>
            <ul className={styles.navLinks}>
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ""}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <LanguageToggle />

            <button
              className={styles.burgerButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu mobile"
            >
              <span className={`${styles.burgerLine} ${isMenuOpen ? styles.topOpen : ""}`} />
              <span className={`${styles.burgerLine} ${isMenuOpen ? styles.middleOpen : ""}`} />
              <span className={`${styles.burgerLine} ${isMenuOpen ? styles.bottomOpen : ""}`} />
            </button>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <div className={styles.mobileMenu} data-section={activeSection}>
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? styles.mobileNavLinkActive : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

function LanguageToggle() {
  const { currentLang, setLang } = useLanguage();

  return (
    <div className={styles.langToggle}>
      <button
        className={`${styles.langBtn} ${currentLang === "fr" ? styles.langBtnActive : ""}`}
        onClick={() => setLang("fr")}
        aria-label="Passer en français"
      >
        FR
      </button>
      <span className={styles.langSep} aria-hidden="true">|</span>
      <button
        className={`${styles.langBtn} ${currentLang === "en" ? styles.langBtnActive : ""}`}
        onClick={() => setLang("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
