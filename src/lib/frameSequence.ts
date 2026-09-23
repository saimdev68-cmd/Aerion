export const FRAME_CONFIG = {
  totalFrames: 240,
  folderPath: "/images",
  // We observed the files in public/images/ are named frame_001.jpg to frame_240.jpg
  fileNamePrefix: "frame_",
  fileExtension: "jpg",
  zeroPad: 3,
  startIndex: 1,
};

/**
 * Returns formatted URL for a given frame index (0-based, index 0 -> frame 1)
 */
export function getFrameUrl(
  index: number,
  prefix: string = FRAME_CONFIG.fileNamePrefix,
  ext: string = FRAME_CONFIG.fileExtension
): string {
  const frameNum = FRAME_CONFIG.startIndex + Math.max(0, Math.min(FRAME_CONFIG.totalFrames - 1, index));
  const padded = frameNum.toString().padStart(FRAME_CONFIG.zeroPad, "0");
  return `${FRAME_CONFIG.folderPath}/${prefix}${padded}.${ext}`;
}

/**
 * Calculates optimal render dimensions to ensure the supercar is completely visible
 * without distortion or stretching across all device screen aspect ratios.
 */
export function calculateAspectRatioFit(
  imgWidth: number,
  imgHeight: number,
  canvasWidth: number,
  canvasHeight: number,
  mode: "cover" | "contain" | "smart" = "smart"
): { width: number; height: number; x: number; y: number } {
  const imgRatio = imgWidth / imgHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  if (mode === "contain") {
    let width = canvasWidth;
    let height = canvasWidth / imgRatio;
    if (height > canvasHeight) {
      height = canvasHeight;
      width = canvasHeight * imgRatio;
    }
    return {
      width,
      height,
      x: (canvasWidth - width) / 2,
      y: (canvasHeight - height) / 2,
    };
  }

  if (mode === "cover") {
    let width = canvasWidth;
    let height = canvasWidth / imgRatio;
    if (height < canvasHeight) {
      height = canvasHeight;
      width = canvasHeight * imgRatio;
    }
    return {
      width,
      height,
      x: (canvasWidth - width) / 2,
      y: (canvasHeight - height) / 2,
    };
  }

  // "smart" mode: maintains cover on desktop/ultrawide but gently scales on narrow mobile screens
  // so the car is never cropped aggressively on the left or right.
  const isMobilePortrait = canvasWidth < canvasHeight && canvasWidth < 768;
  if (isMobilePortrait) {
    // Fill canvas but allow slight vertical centering with contain-like padding
    let width = canvasWidth * 1.15;
    let height = width / imgRatio;
    return {
      width,
      height,
      x: (canvasWidth - width) / 2,
      y: (canvasHeight - height) / 2,
    };
  } else {
    let width = canvasWidth;
    let height = canvasWidth / imgRatio;
    if (height < canvasHeight) {
      height = canvasHeight;
      width = canvasHeight * imgRatio;
    }
    return {
      width,
      height,
      x: (canvasWidth - width) / 2,
      y: (canvasHeight - height) / 2,
    };
  }
}
