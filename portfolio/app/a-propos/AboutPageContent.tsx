"use client";

import Image from "next/image";
import { MapPin, Briefcase, User, RefreshCw, MessageCircle, Users, Dumbbell, Heart, Gamepad2, Tv } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { BIRTH_DATE, BLOG_ENABLED } from "@/app/config";
import PageHero from "@/app/components/ui/PageHero";
import SkillsSection from "@/app/components/sections/SkillsSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import BlogTeaser from "@/app/components/sections/BlogTeaser";
import ReassuranceBlock from "@/app/components/ui/ReassuranceBlock";
import ContactSection from "@/app/components/sections/ContactSection";

function getAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

const METHOD_ITEMS = [
  { icon: RefreshCw,      titleKey: "method1Title", descKey: "method1Desc" },
  { icon: MessageCircle,  titleKey: "method2Title", descKey: "method2Desc" },
  { icon: Users,          titleKey: "method3Title", descKey: "method3Desc" },
] as const;

const INTERESTS = [
  { icon: Dumbbell, key: "interest1" },
  { icon: Heart,    key: "interest2" },
  { icon: Gamepad2, key: "interest3" },
  { icon: Tv,       key: "interest4" },
] as const;

export default function AboutPageContent() {
  const { messages } = useLanguage();
  const ap = messages.aboutPage;
  const age = getAge(BIRTH_DATE);

  return (
    <>
      <PageHero
        imageSrc="/elliot-infelta-pro.png"
        imageAlt="Elliot Infelta"
        badges={[
          { icon: User,     text: `${age} ${messages.hero.badgeAge}` },
          { icon: MapPin,   text: messages.hero.badgeLocation },
          { icon: Briefcase, text: messages.hero.badgeRole, accent: true },
        ]}
        title={ap.heroTitle}
        subtitle={messages.hero.role}
        description={ap.heroDesc}
        ctas={[
          { label: messages.experience.seeMore, href: "#parcours", variant: "primary", iconType: "chevron" },
        ]}
        breadcrumbItems={[{ label: messages.breadcrumb.about }]}
        breadcrumbHomeLabel={messages.breadcrumb.home}
      />

      <SkillsSection hideAboutCta />
      <ExperienceSection />

      {/* Biographie */}
      <section className="about-bio-section">
        <div className="container about-bio-content">
          <div className="about-bio-text">
            <p className="about-eyebrow">{ap.heroTitle}</p>
            <h2 className="about-section-title">{ap.bioTitle}</h2>
            <p className="about-bio-body">{ap.bioText}</p>
          </div>
          <div className="about-bio-visual">
            <div className="about-bio-blob">
              <Image
                src="/elliot-infelta.jpg"
                alt="Elliot Infelta"
                width={420}
                height={560}
                className="hero-photo-img"
                priority
                sizes="(max-width: 768px) 240px, 420px"
              />
            </div>
            <div className="hero-photo-glow" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Comment je travaille */}
      <section className="about-method-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{ap.methodTitle}</h2>
            <p className="section-subtitle">{ap.methodSubtitle}</p>
          </div>
          <div className="about-method-grid">
            {METHOD_ITEMS.map(({ icon: Icon, titleKey, descKey }, i) => (
              <div key={i} className="about-method-card">
                <div className="about-method-icon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="about-method-title">{ap[titleKey]}</h3>
                <p className="about-method-desc">{ap[descKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres d'intérêts */}
      <section className="about-interests-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{ap.interestsTitle}</h2>
          </div>
          <div className="about-interests-grid">
            {INTERESTS.map(({ icon: Icon, key }, i) => (
              <div key={i} className="about-interest-card">
                <div className="about-interest-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <p className="about-interest-label">{ap[key]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {BLOG_ENABLED && <BlogTeaser />}
      <ReassuranceBlock />
      <ContactSection />
    </>
  );
}
