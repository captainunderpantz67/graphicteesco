#!/usr/bin/env python3
"""ragged-edge.py in.png out.png y0 y1 [depth=110] [seed=1]: breaks straight, cut-off edges of a scene patch into worn, broken edges.
Within the rows y0..y1 only, pixels closer than `depth` px to the art's outer edge are dropped where a blurred noise field is high (the nearer the edge, the more are dropped);
dark line work is kept. Run on the print-prep file BEFORE camo-halo.py so the halo follows the ragged outline."""
import sys, numpy as np, cv2
from PIL import Image
im = Image.open(sys.argv[1]).convert('RGBA'); a = np.array(im); y0, y1 = int(sys.argv[3]), int(sys.argv[4])
depth = float(sys.argv[5]) if len(sys.argv) > 5 else 110; rng = np.random.default_rng(int(sys.argv[6]) if len(sys.argv) > 6 else 1)
al = (a[..., 3] > 40).astype(np.uint8); dist = cv2.distanceTransform(al, cv2.DIST_L2, 5)
n = np.zeros(al.shape, np.float32)
for s, w in ((60, .5), (25, .3), (9, .2)):
    f = rng.random(al.shape).astype(np.float32); f = cv2.GaussianBlur(f, (0, 0), s); f = (f - f.min()) / (f.max() - f.min()); n += w * f
n = (n - n.min()) / (n.max() - n.min())
lum = a[..., :3].astype(np.float32).mean(2); dark = lum < 110
drop = (dist < depth * (0.25 + 1.1 * n)) & (dist < depth)
band = np.zeros(al.shape, bool); band[y0:y1] = True
kill = drop & band & ~dark & (al > 0)
a[..., 3][kill] = 0; Image.fromarray(a).save(sys.argv[2]); print('dropped', int(kill.sum()))
