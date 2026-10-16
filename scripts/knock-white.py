#!/usr/bin/env python3
"""knock-white.py in.png out.png [min_area=3000] [thresh=232]: make large enclosed pure-white regions transparent (letter counters, sky gaps, ladder gaps; R5.3.8).
Prints the component list; planned white inks (beards, eyes) are kept by raising min_area or pass --list to only print."""
import sys, numpy as np, cv2
from PIL import Image
a = np.array(Image.open(sys.argv[1]).convert('RGBA')); rgb = a[..., :3].astype(int); al = a[..., 3]
ma = int(sys.argv[3]) if len(sys.argv) > 3 and sys.argv[3].isdigit() else 3000; th = int(sys.argv[4]) if len(sys.argv) > 4 else 232
wh = ((rgb.min(2) > th) & (al > 200)).astype(np.uint8)
n, lab, st, cen = cv2.connectedComponentsWithStats(wh, connectivity=4)
keep = [i for i in range(1, n) if st[i, 4] >= ma]
for i in keep: print(i, st[i, 4], 'bbox', st[i, :4].tolist())
if '--list' in sys.argv: sys.exit()
reg = cv2.dilate(np.isin(lab, keep).astype(np.uint8), np.ones((5, 5), np.uint8)) & ((rgb.min(2) > 205) & (al > 200)).astype(np.uint8)
a[..., 3] = np.where(reg == 1, 0, al); Image.fromarray(a).save(sys.argv[2], dpi=(300, 300), optimize=True)
