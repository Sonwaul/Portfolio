"use client";

import Image from "next/image";
import Link from "next/link";
import { type LucideIcon, ChevronDown, ArrowRight } from "lucide-react";

export interface PageHeroBadge {
  icon: LucideIcon;
  text: string;
  accent?: boolean;
}

export interface PageHeroCta {
  label: string;
  href: string;
  variant: "primary" | "outline";
  external?: boolean;
  iconType?: "chevron" | "arrow";
}

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  badges?: PageHeroBadge[];
  title: string;
  subtitle?: string;
  description: string;
  ctas?: PageHeroCta[];
}

export default function PageHero({
  imageSrc,
  imageAlt,
  badges = [],
  title,
  subtitle,
  description,
  ctas = [],
}: PageHeroProps) {
  return (
    <section className="hero-section">
      <div className="container hero-content">

        <div className="hero-photo-wrapper">
          <div className="hero-photo-blob">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={420}
              height={600}
              className="hero-photo-img"
              priority
              sizes="(max-width: 640px) 200px, (max-width: 768px) 350px, 420px"
            />
          </div>
          <div className="hero-photo-glow" aria-hidden="true" />
        </div>

        <div className="hero-text">
          {badges.length > 0 && (
            <div className="hero-badges">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className={`hero-badge${badge.accent ? " hero-badge-role" : ""}`}
                >
                  <badge.icon size={14} aria-hidden="true" />
                  {badge.text}
                </div>
              ))}
            </div>
          )}

          <h1 className="hero-name">{title}</h1>
          {subtitle && <p className="hero-role">{subtitle}</p>}
          <p className="hero-description">{description}</p>

          {ctas.length > 0 && (
            <div className="hero-cta-group">
              {ctas.map((cta, i) =>
                cta.external ? (
                  <a
                    key={i}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cta.variant === "primary" ? "hero-cta" : "hero-cta-outline"}
                  >
                    {cta.label}
                    {cta.iconType === "chevron"
                      ? <ChevronDown size={18} className="hero-cta-arrow" aria-hidden="true" />
                      : <ArrowRight size={16} aria-hidden="true" />}
                  </a>
                ) : (
                  <Link
                    key={i}
                    href={cta.href}
                    className={cta.variant === "primary" ? "hero-cta" : "hero-cta-outline"}
                  >
                    {cta.label}
                    {cta.iconType === "chevron"
                      ? <ChevronDown size={18} className="hero-cta-arrow" aria-hidden="true" />
                      : <ArrowRight size={16} aria-hidden="true" />}
                  </Link>
                )
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
