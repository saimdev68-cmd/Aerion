"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_CHAPTERS } from "@/lib/constants";
import { FRAME_CONFIG } from "@/lib/frameSequence";
import { FrameCanvasHandle } from "./FrameCanvas";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollControllerProps {
  canvasHandleRef: React.RefObject<FrameCanvasHandle>;
  onProgressChange?: (progress: number, currentFrame: number) => void;
}

export function ScrollController({
  canvasHandleRef,
  onProgressChange,
}: ScrollControllerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!triggerRef.current || !containerRef.current) return;

    // Main GSAP ScrollTrigger timeline pinning the sequence
    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true, // Direct synchronized scrub with zero artificial delay
      onUpdate: (self) => {
        const progress = self.progress;
        const targetFrameIndex = Math.min(
          FRAME_CONFIG.totalFrames - 1,
          Math.max(0, Math.floor(progress * (FRAME_CONFIG.totalFrames - 1)))
        );

        if (canvasHandleRef.current) {
          canvasHandleRef.current.setTargetFrame(targetFrameIndex);
        }

        if (onProgressChange) {
          onProgressChange(progress, targetFrameIndex + 1);
        }
      },
    });

    // Create coordinated fade-in / fade-out animations for each narrative chapter
    const ctx = gsap.context(() => {
      STORY_CHAPTERS.forEach((chapter, index) => {
        const elem = chapterRefs.current[index];
        if (!elem) return;

        // Calculate normalized trigger points (0.0 to 1.0)
        const startProgress = (chapter.startFrame - 1) / (FRAME_CONFIG.totalFrames - 1);
        const endProgress = (chapter.endFrame - 1) / (FRAME_CONFIG.totalFrames - 1);
        const duration = endProgress - startProgress;

        // Chapter Timeline
        gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: () => `top+=${startProgress * (triggerRef.current?.offsetHeight || 0)} top`,
            end: () => `top+=${endProgress * (triggerRef.current?.offsetHeight || 0)} top`,
            scrub: true,
          },
        })
          .fromTo(
            elem,
            { opacity: 0, y: 35, pointerEvents: "none" },
            { opacity: 1, y: 0, pointerEvents: "auto", duration: duration * 0.25, ease: "power2.out" }
          )
          .to(elem, { opacity: 1, y: 0, duration: duration * 0.5 }) // Hold visible
          .to(elem, { opacity: 0, y: -25, pointerEvents: "none", duration: duration * 0.25, ease: "power2.in" });
      });
    }, containerRef);

    return () => {
      st.kill();
      ctx.revert();
    };
  }, [canvasHandleRef, onProgressChange]);

  const scrollToSection = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Responsive Tall Scroll Track: 550vh on mobile, 750vh on desktop */}
      <div
        id="cinematic-sequence"
        ref={triggerRef}
        className="relative w-full h-[550vh] md:h-[750vh]"
      >
        {/* Sticky Viewport Container for Overlay Content */}
        <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center px-4 sm:px-6 md:px-16 pointer-events-none select-none z-10">
          {/* Chapter Overlays */}
          {STORY_CHAPTERS.map((chapter, i) => (
            <div
              key={chapter.id}
              ref={(el) => {
                chapterRefs.current[i] = el;
              }}
              style={{ willChange: "transform, opacity" }}
              className={`absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-20 max-w-7xl mx-auto opacity-0 ${chapter.positionClass || "items-start text-left"}`}
            >
              <div className="max-w-xl">
                {chapter.subtitle && (
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] sm:text-[11px] font-mono tracking-[0.3em] text-zinc-400 uppercase mb-2.5 sm:mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-pulse" />
                    <span>{chapter.subtitle}</span>
                  </div>
                )}

                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white font-display leading-[0.9] drop-shadow-xl">
                  {chapter.title}
                </h2>

                {chapter.description && (
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-lg drop-shadow">
                    {chapter.description}
                  </p>
                )}

                {/* Optional Metrics Grid for Chapters with Stats */}
                {chapter.stats && (
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-6">
                    {chapter.stats.map((s, si) => (
                      <div
                        key={si}
                        className="p-2 sm:p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md"
                      >
                        <span className="text-[8px] sm:text-[9px] font-mono text-zinc-500 uppercase tracking-wider block">
                          {s.label}
                        </span>
                        <span className="text-base sm:text-lg md:text-xl font-bold font-mono text-white">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Final Chapter CTA */}
                {i === STORY_CHAPTERS.length - 1 && (
                  <div className="mt-8 pointer-events-auto">
                    <button
                      onClick={() => scrollToSection("design")}
                      className="group px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center gap-3 shadow-2xl hover:scale-105"
                    >
                      <span>EXPLORE DESIGN</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
