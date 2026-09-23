"use client";

import React, { useEffect, useState } from "react";
import { BRAND } from "@/lib/constants";

interface LoadingScreenProps {
  progress: number; // 0 to 100
  isReady: boolean;
  onLoaded?: () => void;
}

export function LoadingScreen({ progress, isReady, onLoaded }: LoadingScreenProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  // Automatically fade out once initial assets are ready, with unconditional safety timeout
  useEffect(() => {
    let fadeTimer: NodeJS.Timeout;
    let removeTimer: NodeJS.Timeout;

    const triggerDismiss = () => {
      setIsFadingOut(true);
      if (onLoaded) onLoaded();
      removeTimer = setTimeout(() => setIsRemoved(true), 700);
    };

    if (isReady) {
      fadeTimer = setTimeout(triggerDismiss, 400);
      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }

    // Safety fallback: guaranteed dismissal after 2.0 seconds regardless of network quirks
    const safetyTimer = setTimeout(triggerDismiss, 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      clearTimeout(safetyTimer);
    };
  }, [isReady, onLoaded]);

  if (isRemoved) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white transition-opacity duration-700 ease-out select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Loading AERION"
      role="status"
    >
      {/* Background ambient subtle glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[140px] pointer-events-none" />

      {/* Monogram Brand Symbol */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* AERION Logo Mark SVG */}
        <div className="w-14 h-14 mb-8 flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12">
            <defs>
              <linearGradient id="load-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="60%" stopColor="#C5CBD3" />
                <stop offset="100%" stopColor="#7B828E" />
              </linearGradient>
              <linearGradient id="load-logo-core" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#4B5260" />
              </linearGradient>
            </defs>
            <path d="M50 14 L18 84 L30 84 L50 36 L70 84 L82 84 Z" fill="url(#load-logo-grad)" />
            <path d="M50 42 L34 80 L66 80 Z" fill="#050505" />
            <path d="M50 46 L40 70 L60 70 Z" fill="url(#load-logo-core)" />
            <path d="M32 64 L68 64 L65 67 L35 67 Z" fill="#FFFFFF" opacity="0.6" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.35em] uppercase text-white font-display mb-3">
          {BRAND.name}
        </h1>

        <p className="text-[11px] sm:text-xs uppercase tracking-[0.45em] text-zinc-400 font-light mb-8">
          LOADING
        </p>

        {/* Minimal Hairline Progress Bar */}
        <div className="w-48 sm:w-64 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
          <div
            className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-400 transition-all duration-200 ease-out"
            style={{ width: `${Math.max(10, Math.min(100, progress))}%` }}
          />
        </div>
      </div>
    </div>
  );
}
