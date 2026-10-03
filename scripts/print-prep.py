#!/usr/bin/env python3
"""Flow/AI art on a white background -> print-ready transparent PNG for Printful.
Usage: print-prep.py in.jpg out.png [--width 3600]
- removes the white background by flood-filling from the borders (keeps whites INSIDE the art)
- crops to the art, upscales (Lanczos + light unsharp), 300 DPI, soft alpha edges."""
import sys, argparse, numpy as np, cv2
from PIL import Image, ImageFilter
ap = argparse.ArgumentParser(); ap.add_argument('src'); ap.add_argument('dst')
ap.add_argument('--width', type=int, default=3600); ap.add_argument('--tol', type=int, default=28)
a = ap.parse_args()
img = cv2.imread(a.src, cv2.IMREAD_COLOR); h, w = img.shape[:2]
# pixels "close to white"
near = (np.min(img, axis=2) > 255 - a.tol).astype(np.uint8)
# connected components of near-white touching the border = background
# thin strokes (fishing line, hair, sparkles) can enclose pockets of background: let the flood pass through them
art = 1 - near
thin = art & (1 - cv2.morphologyEx(art, cv2.MORPH_OPEN, np.ones((9, 9), np.uint8)))
n, lab = cv2.connectedComponents(near | thin, connectivity=4)
border = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
bg = np.isin(lab, list(border)) & (near == 1)
alpha = np.where(bg, 0, 255).astype(np.uint8)
# soften the edge: fade alpha by whiteness in a 2px ring
ring = cv2.dilate(bg.astype(np.uint8), np.ones((5, 5), np.uint8)) & (~bg).astype(np.uint8)
white = np.min(img, axis=2).astype(np.float32)
alpha = np.where(ring == 1, np.clip((255 - white) * 4, 0, 255), alpha).astype(np.uint8)
ys, xs = np.where(alpha > 0); y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
rgba = cv2.cvtColor(img, cv2.COLOR_BGR2RGBA); rgba[..., 3] = alpha
im = Image.fromarray(rgba[y0:y1, x0:x1])
scale = a.width / im.width
im = im.resize((a.width, round(im.height * scale)), Image.LANCZOS)
rgb = im.convert('RGB').filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=2))
out = rgb.convert('RGBA'); out.putalpha(im.getchannel('A'))
out.save(a.dst, dpi=(300, 300), optimize=True)
print(f'{a.dst}: {out.width}x{out.height}px  (src art {x1-x0}x{y1-y0}, upscale x{scale:.2f})')
