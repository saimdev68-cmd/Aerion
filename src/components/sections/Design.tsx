"use client";

import React from "react";

export function Design() {
  return (
    <section
      id="design"
      className="relative min-h-screen w-full bg-[#050505] text-white flex flex-col justify-center px-4 sm:px-6 md:px-16 py-24 sm:py-28 z-20 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-zinc-400" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-400">
              01 / DESIGN PHILOSOPHY
            </span>
          </div>
          <span className="text-xs font-mono tracking-widest text-zinc-600">
            AERO.CURVATURE.2026
          </span>
        </div>

        {/* Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.15em] sm:tracking-[0.2em] uppercase leading-[0.95] text-white mb-6 sm:mb-8 font-display">
              SCULPTED<br />
              <span className="text-zinc-500">BY SPEED.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-4 flex flex-col justify-between space-y-8">
            <p className="text-sm sm:text-base tracking-wider text-zinc-400 leading-relaxed font-light">
              Every surface is shaped around movement, balance and aerodynamic precision. No ornamental excess—only pure purpose etched into carbon weave.
            </p>

            <div className="p-6 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-sm space-y-4">
              <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                COEFFICIENT OF DRAG
              </div>
              <div className="text-3xl font-light tracking-widest text-white font-mono">
                0.28 <span className="text-xs text-zinc-400 tracking-normal font-sans">Cd (Aero Low)</span>
              </div>
              <div className="text-xs text-zinc-400 font-light leading-relaxed">
                Adaptive active surfaces morph dynamically between high downforce braking and laminar slipstream modes.
              </div>
            </div>
          </div>
        </div>

        {/* 3 Technical Design Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="p-8 rounded-2xl bg-zinc-950/50 border border-white/10 hover:border-white/25 transition-all duration-300">
            <div className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-4">
              SURFACE 01
            </div>
            <h3 className="text-lg font-light tracking-[0.2em] text-white uppercase mb-3 font-display">
              VENTURI CHANNELS
            </h3>
            <p className="text-xs tracking-wider text-zinc-400 leading-relaxed font-light">
              Sculpted underbody tunnels generate ground-effect vacuum, anchoring the chassis with razor precision at triple-digit velocities.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950/50 border border-white/10 hover:border-white/25 transition-all duration-300">
            <div className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-4">
              SURFACE 02
            </div>
            <h3 className="text-lg font-light tracking-[0.2em] text-white uppercase mb-3 font-display">
              NEGATIVE SPACES
            </h3>
            <p className="text-xs tracking-wider text-zinc-400 leading-relaxed font-light">
              Air is guided through rather than around the vehicle. Front fender evacuators evacuate turbulent wheel-well pressure cleanly.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-zinc-950/50 border border-white/10 hover:border-white/25 transition-all duration-300">
            <div className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-4">
              SURFACE 03
            </div>
            <h3 className="text-lg font-light tracking-[0.2em] text-white uppercase mb-3 font-display">
              ACTIVE SPOILER
            </h3>
            <p className="text-xs tracking-wider text-zinc-400 leading-relaxed font-light">
              A seamlessly integrated trailing edge wing acts as an airbrake under deceleration, generating immediate rear-axle stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
