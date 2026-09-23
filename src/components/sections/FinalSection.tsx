"use client";

import React from "react";
import { BRAND } from "@/lib/constants";
import { ArrowUp } from "lucide-react";

export function FinalSection() {
  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="final"
      className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-between px-4 sm:px-6 md:px-16 pt-32 pb-12 z-20 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto my-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-300 uppercase">
            AERION ARCHIVE
          </span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white font-display leading-[0.88] drop-shadow-2xl">
          {BRAND.name}
        </h2>

        <p className="text-base sm:text-xl md:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] text-zinc-400 uppercase mt-4">
          {BRAND.tagline}
        </p>

        <p className="mt-8 text-xs sm:text-sm md:text-base text-zinc-400 font-light tracking-wider max-w-md mx-auto">
          {BRAND.subtext}
        </p>

        <div className="mt-12">
          <button
            onClick={handleReplay}
            className="group px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-[0.25em] hover:bg-zinc-200 transition-all flex items-center gap-3 shadow-2xl hover:scale-105 active:scale-95"
            aria-label="Replay 3D Experience"
          >
            <span>REPLAY EXPERIENCE</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Minimal Luxury Automotive Footer */}
      <footer className="w-full max-w-7xl mx-auto border-t border-white/10 pt-8 mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="text-zinc-200 font-bold tracking-widest">{BRAND.name}</span>
          <span>© {BRAND.year} AERION</span>
          <span>•</span>
          <span>CONCEPT EXPERIENCE</span>
        </div>

        <div className="flex items-center gap-4 text-zinc-400">
          <span>THE ART OF MOTION</span>
        </div>
      </footer>
    </section>
  );
}
