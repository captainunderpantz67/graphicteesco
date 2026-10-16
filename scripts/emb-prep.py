#!/usr/bin/env python3
"""emb-prep.py <in.png on white> <out.png> <thread hex> [width_px=1100] [min_stroke_px=18]: flat one-color transparent PNG for Printful chest embroidery (4 in = 1200 px at 300 dpi).
Binarizes, crops to the art, scales to width_px, thickens until the thinnest stroke is at least min_stroke_px (1.5 mm at 300 dpi) and pads onto a 1200 px wide canvas."""
import sys, cv2, numpy as np
from PIL import Image
src, dst, hexc = sys.argv[1:4]; W = int(sys.argv[4]) if len(sys.argv) > 4 else 1100; minstroke = int(sys.argv[5]) if len(sys.argv) > 5 else 18
g = cv2.imread(src, 0); m = (g < 150).astype('uint8'); ys, xs = np.where(m); m = m[ys.min():ys.max() + 1, xs.min():xs.max() + 1] * 255
s = W / m.shape[1]; m = cv2.resize(m, (W, int(m.shape[0] * s)), interpolation=cv2.INTER_CUBIC); m = ((m > 110) * 255).astype('uint8')
def thinnest(mm):  # median stroke width from the distance transform of the skeleton-ish ridge (use 2x the 5th-percentile local max distance)
    d = cv2.distanceTransform(mm, cv2.DIST_L2, 5); ridge = (d == cv2.dilate(d, np.ones((5, 5)))) & (d > 0); return float(np.percentile(d[ridge], 10) * 2)
t = thinnest(m); r = 0
while t < minstroke and r < 12:
    r += 1; k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3)); m = cv2.dilate(m, k); t = thinnest(m)
print(f'scale x{s:.2f}, thickened {r}px each side, p10 stroke width {t:.1f}px = {t / 300 * 25.4:.2f} mm; size {m.shape[1]}x{m.shape[0]}px = {m.shape[1] / 300:.2f} x {m.shape[0] / 300:.2f} in')
Wc = 1200; H = m.shape[0] + 40; can = np.zeros((H, Wc), 'uint8'); x = (Wc - m.shape[1]) // 2; can[20:20 + m.shape[0], x:x + m.shape[1]] = m
rgba = np.zeros((H, Wc, 4), 'uint8'); rgba[..., 0] = int(hexc[1:3], 16); rgba[..., 1] = int(hexc[3:5], 16); rgba[..., 2] = int(hexc[5:7], 16); rgba[..., 3] = can
Image.fromarray(rgba, 'RGBA').save(dst)
