import React from "react";
import Image from "next/image";
import { Search, Palette } from "lucide-react";

const TAG_LOGOS: Record<string, string> = {
  "Shopify":             "/skills/shopify.svg",
  "Shopify Plus":        "/skills/shopify.svg",
  "Shopify App":         "/skills/shopify.svg",
  "Shopify POS":         "/skills/shopify.svg",
  "API Shopify":         "/skills/shopify.svg",
  "PHP":                 "/skills/php.svg",
  "React / Next.js":     "/skills/react.svg",
  "Figma":               "/skills/figma.svg",
  "JavaScript":          "/skills/javascript.svg",
  "HTML/CSS":            "/skills/html5.svg",
  "MySQL":               "/skills/mysql.svg",
  "PostgreSQL":          "/skills/postgresql.svg",
  "Python":              "/skills/python.svg",
  "Java":                "/skills/java.svg",
  "Spring":              "/skills/spring.svg",
  "Symfony":             "/skills/symfony.svg",
  "GitHub":              "/skills/github.svg",
  "Git":                 "/skills/git.svg",
  "WordPress":           "/skills/wordpress.svg",
  "PrestaShop":          "/skills/prestashop.svg",
  "ClickUp":             "/skills/clickup.svg",
  "Next.js":             "/skills/nextjs.svg",
  "React":               "/skills/react.svg",
  "EBP SDK":             "/skills/ebp.png",
  "EBP SaaS":            "/skills/ebp.png",
  "Sellsy":              "/skills/sellsy.png",
  "Sage":                "/skills/sage.png",
  "Sage X3":             "/skills/sage.png",
  "Kaeliips":            "/skills/kaeliips.png",
  "Remix":               "/skills/remix.svg",
  "Claude Code":         "/skills/claude.svg",
  "IA Générative":       "/skills/claude.svg",
  "Gemini":              "/skills/gemini.svg",
  "Antigravity":         "/skills/antigravity.svg",
  "Agents IA":           "/skills/clickup.svg",
};

const LUCIDE_ICONS: Record<string, React.ElementType> = {
  "SEO":   Search,
  "UX/UI": Palette,
};

export function TagIcon({ tag, size = 14 }: { tag: string; size?: number }) {
  const Icon = LUCIDE_ICONS[tag];
  if (Icon) return <Icon size={size} aria-hidden="true" />;
  const logo = TAG_LOGOS[tag];
  if (!logo) return null;
  return <Image src={logo} alt="" width={size} height={size} className="timeline-tag-logo" />;
}

export function TagBadge({
  tag,
  size = 14,
  baseClass = "timeline-tag",
}: {
  tag: string;
  size?: number;
  baseClass?: string;
}) {
  const logo = TAG_LOGOS[tag];
  return (
    <span className={baseClass}>
      <TagIcon tag={tag} size={size} />
      {tag}
    </span>
  );
}
