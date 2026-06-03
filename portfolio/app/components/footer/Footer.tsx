"use client";

import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

const NAV_ITEMS = [
  { key: "about",        href: "/a-propos" },
  { key: "realisations", href: "/realisations" },
  { key: "blog",         href: "/blog" },
  { key: "contact",      href: "/contact" },
] as const;

type NavKey = typeof NAV_ITEMS[number]["key"];

export default function Footer() {
  const { messages } = useLanguage();

  const navLabels: Record<NavKey, string> = {
    realisations: messages.nav.realisations,
    blog:         messages.nav.blog,
    about:        messages.nav.about,
    contact:      messages.nav.contact,
  };

  return (
    <footer style={{
      borderTop: "1px solid var(--c-border)",
      padding: "1.5rem 2.5rem",
      marginTop: "4rem",
      display: "flex",
      alignItems: "center",
    }}>
      <p className="footer-copy" style={{ flex: 1 }}>
        © {new Date().getFullYear()} {messages.brandName} · {messages.footer.copyright}
      </p>
      <nav className="footer-nav" style={{ flex: 1, justifyContent: "center" }} aria-label="Navigation footer">
        {NAV_ITEMS.map(({ key, href }) => (
          <Link key={href} href={href}>
            {navLabels[key]}
          </Link>
        ))}
      </nav>
      <div style={{ flex: 1 }} />
    </footer>
  );
}
