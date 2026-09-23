# Image Sequence Directory

Place your **240 images** in this folder:
`public/sequence/`

## Recommended Naming Format

Name your files sequentially starting from 1 (or 0):

### Option A (Recommended - Padded 3 or 4 digits):
- `frame_001.jpg` through `frame_240.jpg`
- or `001.jpg` through `240.jpg`
- or `frame_0001.webp` through `frame_0240.webp`

### Option B (Simple numbers):
- `1.jpg` through `240.jpg` (or `.png` / `.webp`)

## Best Practices for 240 Images:
1. **Format**: `.webp` is strongly recommended for web performance (usually 60–80% smaller than PNG/JPG with identical quality).
2. **Resolution**: Full HD (1920x1080) or 2K. Keep individual frame size around 40KB–120KB each so the entire 240-frame sequence is fast to preload (~15MB–25MB total).
