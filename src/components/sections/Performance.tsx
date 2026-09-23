"use client";

import React from "react";
import { SPECIFICATIONS } from "@/lib/constants";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { Gauge } from "lucide-react";

export function Performance() {
  return (
    <section
      id="performance"
      className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-center px-4 sm:px-6 md:px-16 py-24 sm:py-28 z-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16 gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400">
              02 / PERFORMANCE
            </span>
          </div>

          <div className="inline-flex items-center gap-2 border border-white/20 px-3.5 py-1 rounded-full bg-white/[0.03] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
              CONCEPT SPECIFICATIONS
            </span>
          </div>
        </div>

        {/* Section Hero Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight uppercase tracking-[0.15em] sm:tracking-[0.18em] text-white font-display leading-[0.95] mb-4">
            PURE<br />
            <span className="text-zinc-500">PROPULSION.</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
            Calculated for the outer limits of road dynamics. Fictional benchmarks modeled using computational fluid simulation and electric telemetry.
          </p>
        </div>

        {/* 6 Grid Specs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIFICATIONS.map((spec, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-zinc-950/70 border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-white/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                  {spec.label}
                </span>
                <Gauge className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
              </div>

              <div className="flex items-baseline gap-2 my-2 font-display">
                <span className="text-5xl md:text-6xl font-light font-mono tracking-tight text-white">
                  <AnimatedNumber value={spec.value} />
                </span>
                {spec.unit && (
                  <span className="text-xl font-mono text-zinc-400">
                    {spec.unit}
                  </span>
                )}
              </div>

              <p className="text-xs text-zinc-400 font-light mt-4 leading-relaxed border-t border-white/5 pt-4">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
