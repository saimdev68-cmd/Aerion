"use client";

import React from "react";
import { ENGINEERING_CARDS } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export function Engineering() {
  return (
    <section
      id="technology"
      className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-center px-4 sm:px-6 md:px-16 py-24 sm:py-28 z-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400">
              03 / TECHNOLOGY
            </span>
          </div>
          <span className="text-xs font-mono tracking-widest text-zinc-600">
            AERION.ARCH.REV5
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight uppercase tracking-[0.15em] sm:tracking-[0.18em] text-white font-display leading-[0.95] mb-4">
            ENGINEERED<br />
            <span className="text-zinc-500">FOR MOTION.</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
            At the confluence of motorsport telemetry and computational design. Every electronic and mechanical system is calibrated to respond with zero perceptible latency.
          </p>
        </div>

        {/* Editorial Architecture 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-2xl bg-zinc-950/60 border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 group relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
                    {card.subtitle}
                  </span>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-300 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-light uppercase tracking-wider text-white mb-3 flex items-center justify-between font-display">
                  <span>{card.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </h3>

                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>SPEC: AERION HYPER-GT</span>
                <span>TOLERANCE: ±0.01MM</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
