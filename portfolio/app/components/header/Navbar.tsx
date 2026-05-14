"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import { useThemeToggle } from "./useThemeToggle";
import { useLanguage } from "@/app/i18n/LanguageContext";

const SECTIONS = ["sky", "mountain", "forest", "river", "waterfall", "lake"] as const;
type SectionId = typeof SECTIONS[number];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("sky");
  const { isDark, toggleTheme }         = useThemeToggle();
  const { messages }                    = useLanguage();

  // Scroll → détecte la section dans la zone centrale du viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
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
    { id: "sky",        label: messages.nav.sky },
    { id: "mountain",   label: messages.nav.mountain },
    { id: "forest",     label: messages.nav.forest },
    { id: "river",      label: messages.nav.river },
    { id: "waterfall",  label: messages.nav.waterfall },
    { id: "lake",       label: messages.nav.lake },
  ] as const;

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbarContainer} data-section={activeSection}>
          <a href="#top" className={styles.logo}>
            {messages.brandName}
          </a>

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

            <LanguageSelector />

            <button
              onClick={toggleTheme}
              className={`${styles.utilityButton} ${styles.themeButton}`}
              aria-label="Changer le thème clair / sombre"
            >
              {isDark ? "🌙" : "☀️"}
            </button>

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

function LanguageSelector() {
  const { currentLang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const langs = [
    { code: "fr" as const, label: "Français", flag: "🇫🇷" },
    { code: "en" as const, label: "English",  flag: "🇬🇧" },
  ];

  return (
    <div className={styles.langWrapper} ref={wrapperRef}>
      <button
        className={`${styles.utilityButton} ${styles.langButton}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        title="Changer de langue"
      >
        <span className={styles.langFlag}>
          {currentLang === "fr" ? "🇫🇷" : "🇬🇧"}
        </span>
      </button>

      {open && (
        <ul className={styles.langDropdown} role="listbox">
          {langs.map((lang) => (
            <li key={lang.code}>
              <button
                className={styles.langDropdownItem}
                onClick={() => { setLang(lang.code); setOpen(false); }}
                role="option"
                aria-selected={currentLang === lang.code}
              >
                <span className={styles.langDropdownFlag}>{lang.flag}</span>
                <span className={styles.langDropdownLabel}>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
