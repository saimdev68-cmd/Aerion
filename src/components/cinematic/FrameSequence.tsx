"use client";

import React, { useRef } from "react";
import { useFrameSequence } from "@/hooks/useFrameSequence";
import { FrameCanvas, FrameCanvasHandle } from "./FrameCanvas";
import { ScrollController } from "./ScrollController";
import { LoadingScreen } from "./LoadingScreen";

interface FrameSequenceProps {
  onHeroExplore?: () => void;
}

export function FrameSequence({ onHeroExplore }: FrameSequenceProps) {
  const { getImage, loadingProgress, isReady } = useFrameSequence();
  const canvasHandleRef = useRef<FrameCanvasHandle | null>(null);

  return (
    <div className="relative w-full">
      {/* Minimal Automotive Loading Screen */}
      <LoadingScreen
        progress={loadingProgress}
        isReady={isReady}
      />

      {/* Full-Screen Render Canvas (Pinned background) */}
      <FrameCanvas
        ref={canvasHandleRef}
        getImage={getImage}
      />

      {/* Tall Scroll Trigger Controller & Storyline Overlays */}
      <ScrollController
        canvasHandleRef={canvasHandleRef}
      />
    </div>
  );
}
