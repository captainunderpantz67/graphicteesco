import sys, numpy as np, cv2
from PIL import Image
# rough2.py in out depth seed [closing=160] [keep_top=0]: worn, uneven outer edges; distance is measured to the OUTSIDE of the art only (interior knocked-out gaps are ignored)
im = Image.open(sys.argv[1]).convert('RGBA'); a = np.array(im); depth = float(sys.argv[3]); rng = np.random.default_rng(int(sys.argv[4]))
ck = int(sys.argv[5]) if len(sys.argv) > 5 else 160; keep_top = int(sys.argv[6]) if len(sys.argv) > 6 else 0
al = (a[..., 3] > 40).astype(np.uint8); al = np.pad(al, ck)
closed = cv2.morphologyEx(al, cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (ck, ck)))
# fill remaining interior holes: flood fill the outside
ff = closed.copy(); h, w = ff.shape; mask = np.zeros((h + 2, w + 2), np.uint8); cv2.floodFill(ff, mask, (0, 0), 2); closed = (ff != 2).astype(np.uint8)
dist = cv2.distanceTransform(closed, cv2.DIST_L2, 5)[ck:-ck, ck:-ck]
n = np.zeros(dist.shape, np.float32)
for s, wt in ((70, .45), (28, .35), (10, .2)):
    f = rng.random(n.shape).astype(np.float32); f = cv2.GaussianBlur(f, (0, 0), s); f = (f - f.min()) / (f.max() - f.min()); n += wt * f
n = (n - n.min()) / (n.max() - n.min())
kill = (dist < depth * (0.15 + 1.2 * n)) & (dist < depth)
if keep_top: kill[:keep_top] = False
a[..., 3][kill & (a[..., 3] > 0)] = 0
Image.fromarray(a).save(sys.argv[2]); print('dropped', int(kill.sum()))
