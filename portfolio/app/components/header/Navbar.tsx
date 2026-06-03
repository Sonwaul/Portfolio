"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useLanguage } from "@/app/i18n/LanguageContext";

const NAV_ITEMS = [
  { key: "realisations", href: "/realisations" },
  { key: "blog",         href: "/blog" },
  { key: "about",        href: "/a-propos" },
  { key: "contact",      href: "/#contact" },
] as const;

type NavKey = typeof NAV_ITEMS[number]["key"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { messages } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/#contact") return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const navLabels: Record<NavKey, string> = {
    realisations: messages.nav.realisations,
    blog:         messages.nav.blog,
    about:        messages.nav.about,
    contact:      messages.nav.contact,
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbarContainer}>
          <Link href="/" className={styles.logo}>{messages.brandName}</Link>

          <div className={styles.rightSection}>
            <ul className={styles.navLinks}>
              {NAV_ITEMS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${isActive(href) ? styles.navLinkActive : ""}`}
                  >
                    {navLabels[key]}
                  </Link>
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
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={isActive(href) ? styles.mobileNavLinkActive : ""}
              onClick={() => setIsMenuOpen(false)}
            >
              {navLabels[key]}
            </Link>
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
