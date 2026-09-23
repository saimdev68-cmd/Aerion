"use client";

import { useEffect, useState } from "react";
import { FRAME_CONFIG } from "@/lib/frameSequence";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const progress = Math.max(0, Math.min(1, window.scrollY / totalHeight));
            const frame = Math.floor(progress * (FRAME_CONFIG.totalFrames - 1)) + 1;
            setScrollProgress(progress);
            setCurrentFrame(frame);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, currentFrame };
}
