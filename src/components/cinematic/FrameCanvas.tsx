"use client";

import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import { calculateAspectRatioFit, FRAME_CONFIG } from "@/lib/frameSequence";
import { useIsMobile } from "@/hooks/useIsMobile";

export interface FrameCanvasHandle {
  setTargetFrame: (frame: number) => void;
  getCurrentFrame: () => number;
  getTargetFrame: () => number;
  getFps: () => number;
}

interface FrameCanvasProps {
  getImage: (index: number) => HTMLImageElement | null;
  onFrameUpdate?: (frame: number, progress: number, fps: number) => void;
}

export const FrameCanvas = forwardRef<FrameCanvasHandle, FrameCanvasProps>(
  function FrameCanvas({ getImage, onFrameUpdate }, ref) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const isMobile = useIsMobile();

    // Independent animation values (NOT stored in React state to ensure 60fps)
    const currentFrameRef = useRef(0);
    const targetFrameRef = useRef(0);
    const rafIdRef = useRef<number | null>(null);

    // Performance & FPS tracking
    const fpsRef = useRef(60);
    const frameTimesRef = useRef<number[]>([]);
    const lastRenderTimeRef = useRef(performance.now());

    // Expose control handles to parent scroll controller
    useImperativeHandle(ref, () => ({
      setTargetFrame: (frame: number) => {
        targetFrameRef.current = Math.max(
          0,
          Math.min(FRAME_CONFIG.totalFrames - 1, frame)
        );
      },
      getCurrentFrame: () => Math.round(currentFrameRef.current),
      getTargetFrame: () => targetFrameRef.current,
      getFps: () => Math.round(fpsRef.current),
    }));

    // Draw frame onto canvas
    const drawFrame = useCallback(
      (frameIndex: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) return;

        const img = getImage(frameIndex);
        if (!img || !img.complete || img.naturalWidth === 0) return;

        // Calculate responsive fit maintaining exact aspect ratio
        const fit = calculateAspectRatioFit(
          img.naturalWidth,
          img.naturalHeight,
          canvas.width,
          canvas.height,
          "smart"
        );

        ctx.fillStyle = "#050505";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, fit.x, fit.y, fit.width, fit.height);
      },
      [getImage]
    );

    // Canvas resize handler
    const updateCanvasSize = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = isMobile
        ? Math.min(window.devicePixelRatio || 1, 1.5)
        : Math.min(window.devicePixelRatio || 1, 2.0);

      const w = window.innerWidth;
      const h = window.innerHeight;

      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        // Redraw current frame immediately after resize
        drawFrame(Math.round(currentFrameRef.current));
      }
    }, [isMobile, drawFrame]);

    useEffect(() => {
      updateCanvasSize();
      window.addEventListener("resize", updateCanvasSize, { passive: true });
      return () => window.removeEventListener("resize", updateCanvasSize);
    }, [updateCanvasSize]);

    // 60 FPS Render Loop with smooth lerp interpolation
    useEffect(() => {
      let isRunning = true;

      const render = (time: number) => {
        if (!isRunning) return;

        // Calculate FPS
        const delta = time - lastRenderTimeRef.current;
        lastRenderTimeRef.current = time;
        if (delta > 0) {
          frameTimesRef.current.push(1000 / delta);
          if (frameTimesRef.current.length > 30) {
            frameTimesRef.current.shift();
          }
          const sum = frameTimesRef.current.reduce((a, b) => a + b, 0);
          fpsRef.current = sum / frameTimesRef.current.length;
        }

        // Smooth frame interpolation
        const diff = targetFrameRef.current - currentFrameRef.current;
        if (Math.abs(diff) > 0.02) {
          // Smoothing factor: 0.2 provides high responsiveness with silky cinematic glide
          currentFrameRef.current += diff * 0.22;
        } else {
          currentFrameRef.current = targetFrameRef.current;
        }

        const renderFrame = Math.round(currentFrameRef.current);
        drawFrame(renderFrame);

        if (onFrameUpdate) {
          onFrameUpdate(
            renderFrame,
            currentFrameRef.current / (FRAME_CONFIG.totalFrames - 1),
            fpsRef.current
          );
        }

        rafIdRef.current = requestAnimationFrame(render);
      };

      rafIdRef.current = requestAnimationFrame(render);

      return () => {
        isRunning = false;
        if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      };
    }, [drawFrame, onFrameUpdate]);

    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#050505]">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="AERION futuristic supercar concept"
          className="w-full h-full block object-cover"
          style={{ width: "100vw", height: "100vh" }}
        />
        {/* Subtle Ambient Vignette Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,5,0.7)_100%)]" />
      </div>
    );
  }
);
