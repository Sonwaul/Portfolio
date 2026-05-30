"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/header/Navbar";
import HeroSection from "./components/sections/HeroSection";

const ExperienceSection = dynamic(
  () => import("./components/sections/ExperienceSection"),
  { loading: () => <div style={{ minHeight: "600px" }} /> }
);

const SkillsSection = dynamic(
  () => import("./components/sections/SkillsSection"),
  { loading: () => <div style={{ minHeight: "500px" }} /> }
);

const ProjectsSection = dynamic(
  () => import("./components/sections/ProjectsSection"),
  { loading: () => <div style={{ minHeight: "700px" }} /> }
);

const TestimonialsSection = dynamic(
  () => import("./components/sections/TestimonialsSection"),
  { loading: () => <div style={{ minHeight: "400px" }} /> }
);

const ContactSection = dynamic(
  () => import("./components/sections/ContactSection"),
  { loading: () => <div style={{ minHeight: "600px" }} /> }
);

const CvFloatingButton = dynamic(
  () => import("./components/ui/CvFloatingButton")
);

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
      <CvFloatingButton />
    </main>
  );
}
