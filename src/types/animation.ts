export interface FrameChapter {
  id: string;
  startFrame: number;
  endFrame: number;
  title: string;
  subtitle?: string;
  description?: string;
  stats?: Array<{ label: string; value: string }>;
  positionClass?: string; // Align text: left, center, right
}

export interface FrameSequenceConfig {
  totalFrames: number;
  folderPath: string;
  fileNamePrefix: string;
  fileExtension: string;
  zeroPad: number;
  startIndex: number;
}

export interface DebugMetrics {
  currentFrame: number;
  targetFrame: number;
  totalFrames: number;
  scrollProgress: number;
  fps: number;
  loadedCount: number;
  totalLoadedRatio: number;
}
