import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/app/config";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items, homeLabel }: { items: BreadcrumbItem[]; homeLabel: string }) {
  const fullItems: BreadcrumbItem[] = [{ label: homeLabel, href: "/" }, ...items];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href === "/" ? "" : item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav className="breadcrumb" aria-label={homeLabel}>
        <ol className="breadcrumb-list">
          {fullItems.map((item, i) => {
            const isLast = i === fullItems.length - 1;
            return (
              <li key={i} className="breadcrumb-item">
                {isLast || !item.href ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
                {!isLast && <ChevronRight size={13} className="breadcrumb-sep" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
