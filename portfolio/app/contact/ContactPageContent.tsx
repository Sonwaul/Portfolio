"use client";

import { Sparkles, MapPin, Briefcase, Code2, Layers, Building2 } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import ContactSection from "@/app/components/sections/ContactSection";
import ReassuranceBlock from "@/app/components/ui/ReassuranceBlock";
import PageHero from "@/app/components/ui/PageHero";

const REASONS = [
  { icon: Code2,     titleKey: "reason1Title", descKey: "reason1Desc" },
  { icon: Layers,    titleKey: "reason2Title", descKey: "reason2Desc" },
  { icon: Building2, titleKey: "reason3Title", descKey: "reason3Desc" },
] as const;

export default function ContactPageContent() {
  const { messages } = useLanguage();
  const cp = messages.contactPage;
  const hero = messages.hero;

  return (
    <>
      <PageHero
        imageSrc="/elliot-infelta.jpg"
        imageAlt="Elliot Infelta"
        badges={[
          { icon: Sparkles,  text: cp.heroBadge1, accent: true },
          { icon: MapPin,    text: cp.heroBadge2 },
          { icon: Briefcase, text: hero.badgeRole },
        ]}
        title={cp.h1}
        description={cp.intro}
        ctas={[
          { label: cp.heroCta, href: "#contact", variant: "primary", iconType: "chevron" },
        ]}
      />

      <main>
        <ContactSection hideHeader />

        <section className="cp-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">{cp.h2Why}</h2>
            </div>
            <div className="cp-reasons">
              {REASONS.map(({ icon: Icon, titleKey, descKey }, i) => (
                <div key={i} className="cp-reason">
                  <div className="cp-reason-icon">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="cp-reason-title">{cp[titleKey]}</h3>
                  <p className="cp-reason-desc">{cp[descKey]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ReassuranceBlock hideCta />
      </main>
    </>
  );
}
