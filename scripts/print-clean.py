#!/usr/bin/env python3
"""Second pass after print-prep.py: knock out enclosed pure-white pockets (letter counters, gaps
between letters) that the border flood can't reach, and drop stray specks.
Usage: print-clean.py designs/<slug>.png [--white 242] [--min-hole 4000] [--min-speck 1500]"""
import argparse, os, numpy as np, cv2
from PIL import Image
ap = argparse.ArgumentParser(); ap.add_argument('path')
ap.add_argument('--white', type=int, default=242); ap.add_argument('--min-hole', type=int, default=4000)
ap.add_argument('--min-speck', type=int, default=1500)
a = ap.parse_args()
im = Image.open(a.path).convert('RGBA'); arr = np.array(im)
rgb, alpha = arr[..., :3], arr[..., 3].copy()
white = ((rgb.min(axis=2) >= a.white) & (alpha > 0)).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(white, connectivity=4)
holes = 0
for i in range(1, n):
    if st[i, cv2.CC_STAT_AREA] >= a.min_hole:
        alpha[lab == i] = 0; holes += 1
solid = (alpha > 0).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(solid, connectivity=8)
specks = 0
for i in range(1, n):
    if st[i, cv2.CC_STAT_AREA] < a.min_speck:
        alpha[lab == i] = 0; specks += 1
arr[..., 3] = alpha
ys, xs = np.where(alpha > 0)
out = Image.fromarray(arr[ys.min():ys.max() + 1, xs.min():xs.max() + 1])
if out.width != im.width:
    out = out.resize((im.width, round(out.height * im.width / out.width)), Image.LANCZOS)
out.save(a.path, dpi=(300, 300), optimize=True)
if os.path.getsize(a.path) > 9_000_000:
    out.quantize(colors=256, method=Image.FASTOCTREE, dither=Image.NONE).save(a.path, dpi=(300, 300), optimize=True)
print(f'{a.path}: {holes} white pockets cleared, {specks} specks dropped, {out.width}x{out.height}, {os.path.getsize(a.path)/1e6:.1f} MB')
