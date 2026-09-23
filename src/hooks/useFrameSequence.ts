"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { FRAME_CONFIG, getFrameUrl } from "@/lib/frameSequence";

export function useFrameSequence() {
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(FRAME_CONFIG.totalFrames).fill(null)
  );
  const loadingStatusRef = useRef<boolean[]>(
    new Array(FRAME_CONFIG.totalFrames).fill(false)
  );

  const [loadedCount, setLoadedCount] = useState(0);
  const [initialBatchLoaded, setInitialBatchLoaded] = useState(false);
  const lastValidIndexRef = useRef(0);

  // Load a single frame by index (0-based)
  const loadSingleFrame = useCallback((index: number): Promise<HTMLImageElement | null> => {
    if (imagesRef.current[index] && imagesRef.current[index]?.complete) {
      return Promise.resolve(imagesRef.current[index]);
    }
    if (loadingStatusRef.current[index]) {
      return Promise.resolve(null);
    }

    loadingStatusRef.current[index] = true;
    return new Promise((resolve) => {
      const img = new Image();
      // Try primary filename with underscore (e.g. frame_001.jpg), fallback to no underscore (frame001.jpg)
      img.src = getFrameUrl(index, "frame_", "jpg");

      img.onload = () => {
        imagesRef.current[index] = img;
        lastValidIndexRef.current = index;
        setLoadedCount((prev) => prev + 1);
        resolve(img);
      };

      img.onerror = () => {
        // Fallback check without underscore if needed
        const fallbackImg = new Image();
        fallbackImg.src = getFrameUrl(index, "frame", "jpg");
        fallbackImg.onload = () => {
          imagesRef.current[index] = fallbackImg;
          lastValidIndexRef.current = index;
          setLoadedCount((prev) => prev + 1);
          resolve(fallbackImg);
        };
        fallbackImg.onerror = () => {
          // Gracefully resolve so pipeline continues smoothly without console noise
          setLoadedCount((prev) => prev + 1);
          resolve(null);
        };
      };
    });
  }, []);

  // Multi-Phase Preloading Strategy:
  useEffect(() => {
    let isCancelled = false;

    const startProgressiveLoad = async () => {
      // PHASE 1: Immediate hero frames (first 3 frames: 0, 1, 2)
      // Allows the hero section to render instantly on all connection speeds
      const heroFrames = [0, 1, 2];
      await Promise.all(heroFrames.map((idx) => loadSingleFrame(idx)));
      if (isCancelled) return;
      setInitialBatchLoaded(true);

      // PHASE 2: Key landmark frames across the full 240 range
      // Provides instantaneous visual references if the user scrolls quickly
      const landmarks: number[] = [];
      for (let i = 10; i < FRAME_CONFIG.totalFrames; i += 10) {
        landmarks.push(i);
      }
      for (let i = 0; i < landmarks.length; i += 4) {
        if (isCancelled) break;
        await Promise.all(landmarks.slice(i, i + 4).map((idx) => loadSingleFrame(idx)));
      }

      // PHASE 3: Background chunked loading of all remaining frames
      const chunkSize = 10;
      for (let i = 3; i < FRAME_CONFIG.totalFrames; i += chunkSize) {
        if (isCancelled) break;
        const chunk: Promise<any>[] = [];
        for (let j = i; j < Math.min(i + chunkSize, FRAME_CONFIG.totalFrames); j++) {
          chunk.push(loadSingleFrame(j));
        }
        await Promise.all(chunk);
        // Yield to main thread to ensure 60fps UI responsiveness
        await new Promise((r) => setTimeout(r, 20));
      }
    };

    startProgressiveLoad();

    return () => {
      isCancelled = true;
    };
  }, [loadSingleFrame]);

  // Retrieve an image, gracefully falling back to nearest loaded frame if current frame is loading
  const getImage = useCallback((index: number): HTMLImageElement | null => {
    const clamped = Math.max(0, Math.min(FRAME_CONFIG.totalFrames - 1, index));
    const direct = imagesRef.current[clamped];
    if (direct && direct.complete && direct.naturalWidth > 0) {
      lastValidIndexRef.current = clamped;
      return direct;
    }

    // Nearest search fallback
    for (let offset = 1; offset < 20; offset++) {
      const prev = clamped - offset;
      if (prev >= 0 && imagesRef.current[prev]?.complete) {
        return imagesRef.current[prev];
      }
      const next = clamped + offset;
      if (next < FRAME_CONFIG.totalFrames && imagesRef.current[next]?.complete) {
        return imagesRef.current[next];
      }
    }

    // Return the last successfully rendered valid frame
    return imagesRef.current[lastValidIndexRef.current];
  }, []);

  const progressPercentage = Math.round((loadedCount / FRAME_CONFIG.totalFrames) * 100);

  return {
    getImage,
    loadedCount,
    totalFrames: FRAME_CONFIG.totalFrames,
    loadingProgress: progressPercentage,
    isReady: initialBatchLoaded,
  };
}
