"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";
import TestimonialsCarousel from "@/app/components/ui/TestimonialsCarousel";

export default function TestimonialsSection() {
  const { messages } = useLanguage();

  return (
    <TestimonialsCarousel
      id="temoignages"
      title={messages.testimonials.title}
      subtitle={messages.testimonials.subtitle}
    />
  );
}
