"use client";

import React from "react";
import { BRAND } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onExplore?: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  const handleExplore = () => {
    if (onExplore) {
      onExplore();
    } else {
      const elem = document.getElementById("cinematic-sequence");
      if (elem) {
        window.scrollTo({
          top: window.innerHeight * 0.4,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-16 pointer-events-none select-none z-20">
      {/* Top Editorial Brand Badging */}
      <div className="max-w-3xl mt-8 sm:mt-10 md:mt-14">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 pointer-events-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.3em] text-zinc-300 uppercase">
            CONCEPT VEHICLE STUDY
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extralight uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white font-display leading-[0.88] drop-shadow-2xl">
          {BRAND.name}
        </h1>

        <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm font-light tracking-[0.3em] sm:tracking-[0.4em] text-zinc-400 uppercase">
          {BRAND.tagline}
        </p>

        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-md drop-shadow">
          {BRAND.subtext}
        </p>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4 pointer-events-auto">
        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
          <span className="text-zinc-300 font-semibold tracking-widest">AERION</span>
          <span>—</span>
          <span>FRAME 001</span>
        </div>

        <button
          onClick={handleExplore}
          className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors tracking-widest uppercase"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
