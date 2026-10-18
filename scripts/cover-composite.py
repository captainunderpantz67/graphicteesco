#!/usr/bin/env python3
"""R6.9 composite: fit the exact print onto a cover's chest, multiply-shaded by the photo, hair kept on top.
Usage: cover-composite.py cover.webp print.png out.webp x0 y0 w [--hair-below-x N] [--dark N]
(x0,y0,w = where the print's left, top and width land on the cover, in cover pixels; the old print is inpainted away first)"""
import sys, numpy as np, cv2
from PIL import Image
a = sys.argv[1:]
cov, prt, out = a[0], a[1], a[2]
x0, y0, w = int(a[3]), int(a[4]), int(a[5])
dark = int(a[a.index('--dark') + 1]) if '--dark' in a else 85
hx = int(a[a.index('--hair-below-x') + 1]) if '--hair-below-x' in a else x0 + 20
c = np.array(Image.open(cov).convert('RGB')).astype(np.float32)
p = Image.open(prt).convert('RGBA')
h = round(w * p.height / p.width)
p = p.resize((w, h), Image.LANCZOS)
pa = np.array(p).astype(np.float32)
H, W = c.shape[:2]
import os; m = int(os.environ.get("CC_MARGIN", 24))
X0, Y0, X1, Y1 = max(0, x0 - m), max(0, y0 - m), min(W, x0 + w + m), min(H, y0 + h + m)
reg = c[Y0:Y1, X0:X1]
lum = reg.mean(2)
# hair = dark pixels connected to the hair mass outside the print box
dk = (lum < dark).astype(np.uint8)
n, lab = cv2.connectedComponents(dk)
hair = np.zeros_like(dk)
for i in range(1, n):
    comp = lab == i
    ys, xs = np.nonzero(comp)
    if xs.min() + X0 < hx and comp.sum() > 40:
        hair[comp] = 1
hair = cv2.dilate(hair, np.ones((3, 3), np.uint8))
# hair tip lying over the print box is repainted as garment (hair stays behind the shoulder), not kept on top
keep = hair.copy(); keep[:, max(0, x0 - X0 - 3):] = 0
over = hair.copy(); over[:, :max(0, x0 - X0 - 3)] = 0
# old print mask: pixels far from the garment tone
garment = np.median(reg.reshape(-1, 3), axis=0)
base = cv2.GaussianBlur(c, (0, 0), 25)[Y0:Y1, X0:X1]
diff = np.abs(reg - np.median(reg.reshape(-1, 3), 0)).max(2)
old = (((diff > 28) & (hair == 0)) | (over > 0)).astype(np.uint8)
old[:3, :] = 0; old[-3:, :] = 0; old[:, :3] = 0; old[:, -3:] = 0
old = cv2.dilate(old, np.ones((5, 5), np.uint8))
clean = cv2.inpaint(reg.astype(np.uint8), old, 6, cv2.INPAINT_TELEA).astype(np.float32)
clean = np.where(keep[..., None] > 0, reg, clean)
# shading from the cleaned garment
sh = cv2.GaussianBlur(clean, (0, 0), 3)
L = sh.mean(2, keepdims=True)
sh = np.clip((L + 25) / (np.median(L) + 25), 0.75, 1.1)  # luminance only, floored so near-black garments don't tint the print
alpha = np.zeros(reg.shape[:2], np.float32); rgb = np.zeros_like(reg)
ox, oy = x0 - X0, y0 - Y0
ph, pw = pa.shape[:2]
alpha[oy:oy + ph, ox:ox + pw] = pa[..., 3] / 255
rgb[oy:oy + ph, ox:ox + pw] = pa[..., :3]
pr = np.clip(rgb * sh, 0, 255)
res = clean * (1 - alpha[..., None]) + pr * alpha[..., None]
# hair back on top (feathered)
hm = cv2.GaussianBlur(keep.astype(np.float32), (0, 0), 0.8)[..., None]
res = res * (1 - hm) + reg * hm
c[Y0:Y1, X0:X1] = res
Image.fromarray(np.clip(c, 0, 255).astype(np.uint8)).save(out, quality=90)
