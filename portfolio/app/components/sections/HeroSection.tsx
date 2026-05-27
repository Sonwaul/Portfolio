"use client";

import Image from "next/image";
import { MapPin, User, Briefcase, ChevronDown } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { BIRTH_DATE } from "@/app/config";

function getAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

export default function HeroSection() {
  const { messages } = useLanguage();
  const age = getAge(BIRTH_DATE);

  return (
    <section id="presentation" className="hero-section">
      <div className="container hero-content">
        <div className="hero-photo-wrapper">
          <div className="hero-photo-blob">
            <Image
              src="/elliot-infelta.jpg"
              alt="Elliot Infelta"
              width={420}
              height={600}
              className="hero-photo-img"
              priority
            />
          </div>
          <div className="hero-photo-glow" aria-hidden="true" />
        </div>

        <div className="hero-text">
          <div className="hero-badges">
            <div className="hero-badge"><MapPin size={14} aria-hidden="true" /> {messages.hero.badgeLocation}</div>
            <div className="hero-badge"><User size={14} aria-hidden="true" /> {age} {messages.hero.badgeAge}</div>
            <div className="hero-badge hero-badge-role"><Briefcase size={14} aria-hidden="true" /> {messages.hero.badgeRole}</div>
          </div>
          <h1 className="hero-name">Elliot Infelta</h1>
          <p className="hero-role">{messages.hero.role}</p>
          <p className="hero-description">{messages.hero.description}</p>
          <a href="#parcours" className="hero-cta">
            {messages.hero.cta}
            <ChevronDown size={18} className="hero-cta-arrow" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
