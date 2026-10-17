#!/usr/bin/env python3
"""camo-halo.py in.png out.png [close_px=60] [halo_px=14] [cream=F2EAD3]: makes dark-line art readable on busy camo.
Lays a cream underlay beneath the art: the art's alpha is morphologically closed (fills gaps between branches/lines inside each element) and dilated by halo_px,
so every shape and letter carries its own cream backing that follows its contour (no frame, badge or panel, R4.1)."""
import sys, numpy as np, cv2
from PIL import Image
im = Image.open(sys.argv[1]).convert('RGBA'); a = np.array(im)
close = int(sys.argv[3]) if len(sys.argv) > 3 else 60; halo = int(sys.argv[4]) if len(sys.argv) > 4 else 14
cr = sys.argv[5] if len(sys.argv) > 5 else 'F2EAD3'; col = [int(cr[i:i+2], 16) for i in (0, 2, 4)]
m = (a[..., 3] > 40).astype(np.uint8)
if close: m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (close, close)))
pad = cv2.copyMakeBorder(m, 1, 1, 1, 1, cv2.BORDER_CONSTANT, value=0); inv = ((1 - pad) * 255).astype(np.uint8)
cv2.floodFill(inv, np.zeros((inv.shape[0] + 2, inv.shape[1] + 2), np.uint8), (0, 0), 0)
m = np.maximum(m, (inv[1:-1, 1:-1] > 0).astype(np.uint8))  # enclosed holes (gaps inside a shape) get the underlay too
if halo: m = cv2.dilate(m, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (halo * 2 + 1, halo * 2 + 1)))
m = cv2.GaussianBlur(m.astype(np.float32), (0, 0), 2.0)
under = np.zeros_like(a); under[..., :3] = col; under[..., 3] = (np.clip(m, 0, 1) * 255).astype(np.uint8)
out = Image.fromarray(under); out.alpha_composite(im); out.save(sys.argv[2]); print(out.size)
