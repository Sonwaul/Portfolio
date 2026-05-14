"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import { useThemeToggle } from "./useThemeToggle";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { isDark, toggleTheme } = useThemeToggle();
  const { messages } = useLanguage();

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbarContainer}>
          <a href="#top" className={styles.logo}>
            {messages.brandName}
          </a>

          <div className={styles.rightSection}>
            <ul className={styles.navLinks}>
              <li><a href="#sky">{messages.nav.sky}</a></li>
              <li><a href="#mountain">{messages.nav.mountain}</a></li>
              <li><a href="#forest">{messages.nav.forest}</a></li>
              <li><a href="#river">{messages.nav.river}</a></li>
              <li><a href="#waterfall">{messages.nav.waterfall}</a></li>
              <li><a href="#lake">{messages.nav.lake}</a></li>
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
        <div className={styles.mobileMenu}>
          <a href="#sky" onClick={() => setIsMenuOpen(false)}>{messages.nav.sky}</a>
          <a href="#mountain" onClick={() => setIsMenuOpen(false)}>{messages.nav.mountain}</a>
          <a href="#forest" onClick={() => setIsMenuOpen(false)}>{messages.nav.forest}</a>
          <a href="#river" onClick={() => setIsMenuOpen(false)}>{messages.nav.river}</a>
          <a href="#waterfall" onClick={() => setIsMenuOpen(false)}>{messages.nav.waterfall}</a>
          <a href="#lake" onClick={() => setIsMenuOpen(false)}>{messages.nav.lake}</a>
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

  const availableLanguages: { code: "fr" | "en"; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
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
          {availableLanguages.map((lang) => (
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
