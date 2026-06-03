"use client";

import dynamic from "next/dynamic";
import HeroSection from "./components/sections/HeroSection";

const ExperienceSection = dynamic(
  () => import("./components/sections/ExperienceSection"),
  { loading: () => <div style={{ minHeight: "600px" }} /> }
);

const SkillsSection = dynamic(
  () => import("./components/sections/SkillsSection"),
  { loading: () => <div style={{ minHeight: "500px" }} /> }
);

const ProjectsPreview = dynamic(
  () => import("./components/sections/ProjectsPreview"),
  { loading: () => <div style={{ minHeight: "600px" }} /> }
);


const TestimonialsSection = dynamic(
  () => import("./components/sections/TestimonialsSection"),
  { loading: () => <div style={{ minHeight: "400px" }} /> }
);

const ContactSection = dynamic(
  () => import("./components/sections/ContactSection"),
  { loading: () => <div style={{ minHeight: "600px" }} /> }
);


export default function HomePage() {
  return (
    <main id="top">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsPreview />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
