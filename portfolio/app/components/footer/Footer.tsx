"use client";

import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function Footer() {
  const { messages } = useLanguage();

  const navLinks = [
    { href: "/realisations", label: messages.footer.navRealisations },
    { href: "/blog",         label: messages.footer.navBlog },
    { href: "/a-propos",     label: messages.footer.navAbout },
    { href: "/contact",      label: messages.footer.navContact },
  ];

  return (
    <footer className="border-t border-[rgba(28,43,33,0.08)] bg-[#F8F9F6]">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="font-[family-name:var(--font-title)] font-semibold text-[#1C2B21] text-lg hover:opacity-70 transition-opacity"
            >
              {messages.brandName}
            </Link>
            <p className="text-sm text-[#1C2B21]/55 font-[family-name:var(--font-body)] max-w-[220px]">
              {messages.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3" aria-label="Navigation footer">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#1C2B21]/65 hover:text-[#1C2B21] transition-colors font-[family-name:var(--font-body)]"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[rgba(28,43,33,0.06)]">
          <p className="text-xs text-[#1C2B21]/35 font-[family-name:var(--font-body)]">
            © {new Date().getFullYear()} {messages.brandName} · {messages.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
