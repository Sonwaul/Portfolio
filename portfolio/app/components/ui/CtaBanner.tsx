"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBannerProps {
  title: string;
  cta: string;
  href: string;
}

export default function CtaBanner({ title, cta, href }: CtaBannerProps) {
  return (
    <div style={{ padding: "0 1.5rem 3rem" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          padding: "2rem 2.5rem",
          borderRadius: "1.5rem",
          background: "rgba(108, 154, 139, 0.07)",
          border: "1px solid rgba(108, 154, 139, 0.14)",
          flexWrap: "wrap",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-title)",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#1C2B21",
            margin: 0,
            maxWidth: "680px",
            lineHeight: 1.4,
          }}
        >
          {title}
        </p>
        <Link
          href={href}
          style={{
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.75rem",
            borderRadius: "9999px",
            background: "#1C2B21",
            color: "#F8F9F6",
            fontSize: "0.875rem",
            fontWeight: 500,
            fontFamily: "var(--font-body)",
            textDecoration: "none",
            transition: "background 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#2d4a37")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1C2B21")}
        >
          {cta} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
