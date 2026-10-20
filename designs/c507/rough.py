import sys, numpy as np, cv2
from PIL import Image
# rough.py in out depth seed: carves worn uneven edges (dark ink included) into the outer 'depth' px of the art
im = Image.open(sys.argv[1]).convert('RGBA'); a = np.array(im); depth = float(sys.argv[3]); rng = np.random.default_rng(int(sys.argv[4]))
al = (a[..., 3] > 40).astype(np.uint8); al = np.pad(al, 2); dist = cv2.distanceTransform(al, cv2.DIST_L2, 5)[2:-2, 2:-2]
n = np.zeros(al[2:-2, 2:-2].shape, np.float32)
for s, w in ((70, .45), (28, .35), (10, .2)):
    f = rng.random(n.shape).astype(np.float32); f = cv2.GaussianBlur(f, (0, 0), s); f = (f - f.min()) / (f.max() - f.min()); n += w * f
n = (n - n.min()) / (n.max() - n.min())
kill = (dist < depth * (0.15 + 1.2 * n)) & (dist < depth)
a[..., 3][kill & (a[..., 3] > 0)] = 0
Image.fromarray(a).save(sys.argv[2]); print('dropped', int(kill.sum()))
