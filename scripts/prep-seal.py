#!/usr/bin/env python3
"""prep-seal.py in.png out.png [width=3000] [seal=9] [dark_threshold=200]: print-prep for art whose white inside (faces, skin, shirts) must stay opaque.
Background = white connected to the border after the dark line work is dilated by `seal` px (so gaps in an outline can't leak into a face), then grown back
into near-white pixels by `seal` px to remove the fringe. Upscales with Lanczos; soft alpha edge."""
import sys, numpy as np, cv2
from PIL import Image
src = Image.open(sys.argv[1]).convert('RGB'); W = int(sys.argv[3]) if len(sys.argv) > 3 else 3000; seal = int(sys.argv[4]) if len(sys.argv) > 4 else 9; DT = int(sys.argv[5]) if len(sys.argv) > 5 else 200
a = np.array(src); g = a.min(2); h, w = g.shape
dark = (g < DT).astype(np.uint8); sealed = cv2.dilate(dark, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * seal + 1, 2 * seal + 1)))
free = (sealed == 0).astype(np.uint8); n, lab = cv2.connectedComponents(free, connectivity=4)
border = set(lab[0, :]) | set(lab[-1, :]) | set(lab[:, 0]) | set(lab[:, -1]); border.discard(0)
bg = np.isin(lab, list(border)); white = (g > max(225, DT + 20))
for _ in range(seal + 2):
    grow = cv2.dilate(bg.astype(np.uint8), np.ones((3, 3), np.uint8)).astype(bool) & white; bg = bg | grow
al = np.where(bg, 0, 255).astype(np.uint8)
rgba = np.dstack([a, al]); im = Image.fromarray(rgba, 'RGBA'); sc = W / w; im = im.resize((W, round(h * sc)), Image.LANCZOS)
al2 = np.array(im.getchannel('A')); al2 = np.where(al2 > 127, 255, 0).astype(np.uint8); al2 = cv2.GaussianBlur(al2, (0, 0), 1.0); im.putalpha(Image.fromarray(al2))
im = im.crop(im.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()); im.save(sys.argv[2], dpi=(300, 300)); print(sys.argv[2], im.size)
