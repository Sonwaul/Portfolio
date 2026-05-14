"use client";

import Navbar from "./components/header/Navbar";
import SkySection from "./components/sections/SkySection";
import MountainSection from "./components/sections/MountainSection";
import ForestSection from "./components/sections/ForestSection";
import RiverSection from "./components/sections/RiverSection";
import WaterfallSection from "./components/sections/WaterfallSection";
import LakeSection from "./components/sections/LakeSection";

export default function HomePage() {
  return (
    <main id="top">
      <Navbar />
      <SkySection />
      <MountainSection />
      <ForestSection />
      <RiverSection />
      <WaterfallSection />
      <LakeSection />
    </main>
  );
}
