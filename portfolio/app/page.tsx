"use client";

import Navbar from "./components/header/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
