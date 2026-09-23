"use client";

import React, { useRef } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FrameSequence } from "@/components/cinematic/FrameSequence";
import { Design } from "@/components/sections/Design";
import { Performance } from "@/components/sections/Performance";
import { Engineering } from "@/components/sections/Engineering";
import { FinalSection } from "@/components/sections/FinalSection";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function Home() {
  const sequenceRef = useRef<HTMLDivElement>(null);

  const handleHeroExplore = () => {
    if (sequenceRef.current) {
      sequenceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative bg-[#050505] min-h-screen text-white selection:bg-white/20 selection:text-white overflow-x-clip">
      {/* Minimal Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Floating Transparent Luxury Navbar */}
      <Navbar />

      {/* Hero Section at Frame 001 */}
      <Hero onExplore={handleHeroExplore} />

      {/* Master 240-Frame Cinematic Scroll Track */}
      <div ref={sequenceRef}>
        <FrameSequence onHeroExplore={handleHeroExplore} />
      </div>

      {/* Post-Sequence Deep Dive: Design, Performance, Technology, Final */}
      <Design />
      <Performance />
      <Engineering />
      <FinalSection />
    </main>
  );
}
