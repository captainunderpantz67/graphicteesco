"""aop_extract.py <front.jpg> <plain.jpg> <out.png>: recover the chest art of a live AOP front panel as RGBA (alpha = where the front differs from the plain pattern panel), cropped to its bbox."""
import sys; import numpy as np, cv2
from PIL import Image
a = np.asarray(Image.open(sys.argv[2]).convert('RGB')).astype(np.int16); b = np.asarray(Image.open(sys.argv[1]).convert('RGB')).astype(np.int16)
d = np.abs(a - b).sum(2) > 24
d = cv2.morphologyEx(d.astype(np.uint8), cv2.MORPH_CLOSE, cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (7, 7)))
n, lab, st, _ = cv2.connectedComponentsWithStats(d, connectivity=8); keep = np.zeros(d.shape, bool)
for i in range(1, n):
    if st[i, 4] > 4000: keep |= lab == i
ys, xs = np.where(keep); x0, x1, y0, y1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1
rgba = np.dstack([b.astype(np.uint8), (keep * 255).astype(np.uint8)])[y0:y1, x0:x1]
Image.fromarray(rgba, 'RGBA').save(sys.argv[3]); print(sys.argv[3], rgba.shape[1], rgba.shape[0], 'at', x0, y0)
