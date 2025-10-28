"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import { useThemeToggle } from "./useThemeToggle";
import { useLanguage } from "@/app/i18n/LanguageContext";

/**
 * Navbar
 * ------
 * - Capsule de navigation (logo, liens)
 * - Sélecteur de langue (drapeau + dropdown)
 * - Sélecteur de thème (clair/sombre)
 * - Burger mobile
 */
export default function Navbar() {
  // état d'UI interne
  const [isMenuOpen, setIsMenuOpen] = useState(false); // menu mobile ouvert ?
  const [hasScrolled, setHasScrolled] = useState(false); // scroll pour éventuellement faire des effets (ici quasi inutile visuellement maintenant mais on le garde)

  // thème clair / sombre
  const { isDark, toggleTheme } = useThemeToggle();

  // langue
  const { currentLang, messages } = useLanguage();

  // détecter le scroll
  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // empêcher le body de scroller quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbarContainer}>
          {/* Logo / nom perso */}
          <a href="#top" className={styles.logo}>
            {messages.brandName}
          </a>

          {/* Liens + actions */}
          <div className={styles.rightSection}>
            {/* Liens desktop */}
            <ul className={styles.navLinks}>
              <li><a href="#about">{messages.nav.about}</a></li>
              <li><a href="#skills">{messages.nav.skills}</a></li>
              <li><a href="#experience">{messages.nav.experience}</a></li>
              <li><a href="#projects">{messages.nav.projects}</a></li>
              <li><a href="#contact">{messages.nav.contact}</a></li>
            </ul>

            {/* Sélecteur de langue (drapeau + dropdown) */}
            <LanguageSelector />

            {/* Bouton thème clair/sombre */}
            <button
              onClick={toggleTheme}
              className={`${styles.utilityButton} ${styles.themeButton}`}
              aria-label="Changer le thème clair / sombre"
              title="Changer le thème clair / sombre"
            >
              {isDark ? "🌙" : "☀️"}
            </button>

            {/* Burger mobile */}
            <button
              className={styles.burgerButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu mobile"
            >
              <span
                className={`${styles.burgerLine} ${
                  isMenuOpen ? styles.topOpen : ""
                }`}
              />
              <span
                className={`${styles.burgerLine} ${
                  isMenuOpen ? styles.middleOpen : ""
                }`}
              />
              <span
                className={`${styles.burgerLine} ${
                  isMenuOpen ? styles.bottomOpen : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile en plein écran */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            {messages.nav.about}
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            {messages.nav.skills}
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            {messages.nav.experience}
          </a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            {messages.nav.projects}
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            {messages.nav.contact}
          </a>
        </div>
      )}
    </>
  );
}


/**
 * LanguageSelector
 * ----------------
 * Bouton rond qui affiche le drapeau de la langue actuelle.
 * Quand on clique dessus -> ouvre un menu déroulant
 * pour choisir une autre langue.
 *
 * Points importants:
 * - clique en dehors ferme le menu
 * - accessible clavier (tab + enter)
 */
function LanguageSelector() {
  const { currentLang, setLang } = useLanguage();

  // menu ouvert ?
  const [open, setOpen] = useState(false);

  // ref pour détecter les clics en dehors
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // ferme le menu si on clique ailleurs que dans le sélecteur
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // associe un drapeau à chaque langue
  function getFlag(lang: string) {
    switch (lang) {
      case "fr":
        return "🇫🇷";
      case "en":
        return "🇬🇧";
      default:
        return "🏳️"; // fallback neutre pour langue future
    }
  }

  // liste des langues disponibles
  // -> super facile à étendre si tu ajoutes "es", "de", etc.
  const availableLanguages: { code: "fr" | "en"; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" }
  ];

  // quand on choisit une langue
  function handleSelect(langCode: "fr" | "en") {
    setLang(langCode);
    setOpen(false);
  }

  return (
    <div className={styles.langWrapper} ref={wrapperRef}>
      {/* Bouton principal qui ouvre / ferme le menu */}
      <button
        className={`${styles.utilityButton} ${styles.langButton}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        title="Changer de langue"
      >
        <span className={styles.langFlag}>{getFlag(currentLang)}</span>
      </button>

      {/* Dropdown des langues */}
      {open && (
        <ul className={styles.langDropdown} role="listbox">
          {availableLanguages.map((lang) => (
            <li key={lang.code}>
              <button
                className={styles.langDropdownItem}
                onClick={() => handleSelect(lang.code)}
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
