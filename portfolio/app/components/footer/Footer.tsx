"use client";

import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { BLOG_ENABLED } from "@/app/config";

const NAV_ITEMS = [
  { key: "about",        href: "/a-propos" },
  { key: "realisations", href: "/realisations" },
  ...(BLOG_ENABLED ? [{ key: "blog", href: "/blog" }] as const : []),
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
    <footer className="footer">
      <p className="footer-copy">
        © {new Date().getFullYear()} {messages.brandName} · {messages.footer.copyright}
      </p>
      <nav className="footer-nav" aria-label="Navigation footer">
        {NAV_ITEMS.map(({ key, href }) => (
          <Link key={href} href={href}>
            {navLabels[key]}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
