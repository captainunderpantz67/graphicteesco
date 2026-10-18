#!/usr/bin/env python3
"""cover-composite2.py cover.webp print.png out.webp x0 y0 w --old x0,y0,x1,y1 [--hair-seed x,y] [--force x0,y0,x1,y1] [--hair-dark 48] [--diff 22]
Clean erase + composite (R6.9, 2026-10-18 rules): the old print inside --old is repainted from the surrounding fabric (normalised blur of garment pixels outside the old print,
no flat fill), hair (dark pixels connected to --hair-seed) is left exactly as photographed and never painted over, then the new print goes on at x0,y0,w with the photo's luminance multiplied in.
Place the print so it starts to the right of / below the hair, so nothing covers a letter."""
import sys, numpy as np, cv2
from PIL import Image
a = sys.argv[1:]; cov, prt, out = a[:3]; x0, y0, w = (int(v) for v in a[3:6])
def opt(n, d=None): return a[a.index(n) + 1] if n in a else d
ox0, oy0, ox1, oy1 = (int(v) for v in opt('--old').split(','))
c = np.array(Image.open(cov).convert('RGB')).astype(np.float32); H, W = c.shape[:2]
lum = c.mean(2); sat = c.max(2) - c.min(2)
hair = np.zeros((H, W), np.uint8)
if opt('--hair-seed'):
    sx, sy = (int(v) for v in opt('--hair-seed').split(',')); dk = (lum < float(opt('--hair-dark', 48))).astype(np.uint8)
    n, lab = cv2.connectedComponents(dk); hair = (lab == lab[sy, sx]).astype(np.uint8) if lab[sy, sx] else hair
    hair = cv2.dilate(hair, np.ones((3, 3), np.uint8))
yy, xx = np.mgrid[0:H, 0:W]
if opt('--force'):  # x0,y0,x1,y1 of leftover old-print pixels that touch the hair: treated as print, not hair
    fx0, fy0, fx1, fy1 = (int(v) for v in opt('--force').split(',')); hair[fy0:fy1 + 1, fx0:fx1 + 1] = 0
box = ((xx >= ox0) & (xx <= ox1) & (yy >= oy0) & (yy <= oy1))
# fabric estimate: inpaint the old print box AND the hair out of a 1/4-scale copy (so the hair cannot smear into the fill), upsample, add grain
sc = 4; small = cv2.resize(c.astype(np.uint8), (W // sc, H // sc), interpolation=cv2.INTER_AREA)
big = np.zeros((H, W), np.uint8); big[(box | (hair > 0))] = 1
big = cv2.dilate(big, np.ones((9, 9), np.uint8)); ms = cv2.resize(big, (W // sc, H // sc), interpolation=cv2.INTER_NEAREST)
fs = cv2.inpaint(small, ms, 6, cv2.INPAINT_TELEA)
est = cv2.GaussianBlur(cv2.resize(fs, (W, H), interpolation=cv2.INTER_CUBIC).astype(np.float32), (0, 0), 3)
est = est + np.random.default_rng(7).normal(0, 1.1, est.shape)
ring = (xx >= ox0 - 55) & (xx <= ox1 + 55) & (yy >= oy0 - 30) & (yy <= oy1 + 45) & ~box & (hair == 0)
old = (box & (np.abs(c - est).max(2) > float(opt('--diff', 22))) & (hair == 0)).astype(np.uint8)
if opt('--force'): old[fy0:fy1 + 1, fx0:fx1 + 1] = (np.abs(c - est).max(2)[fy0:fy1 + 1, fx0:fx1 + 1] > 12)
old = cv2.dilate(old, np.ones((7, 7), np.uint8)); old[hair > 0] = 0
Mf = cv2.GaussianBlur(old.astype(np.float32), (0, 0), float(opt('--feather', 1.0)))[..., None]
clean = c * (1 - Mf) + est * Mf
if opt('--force'):  # small forced box: repaint locally with a full-resolution inpaint so its tone follows the adjacent fabric, not the wide estimate
    fm = np.zeros((H, W), np.uint8); sub = clean.mean(2)[fy0:fy1 + 1, fx0:fx1 + 1] < 150; fm[fy0:fy1 + 1, fx0:fx1 + 1] = sub; fm = cv2.dilate(fm, np.ones((5, 5), np.uint8))
    clean = np.where(fm[..., None] > 0, cv2.inpaint(np.clip(clean, 0, 255).astype(np.uint8), fm, 4, cv2.INPAINT_TELEA).astype(np.float32), clean)
p = Image.open(prt).convert('RGBA'); h = round(w * p.height / p.width); p = p.resize((w, h), Image.LANCZOS); pa = np.array(p).astype(np.float32)
A = np.zeros((H, W), np.float32); R = np.zeros((H, W, 3), np.float32)
A[y0:y0 + h, x0:x0 + w] = pa[..., 3] / 255; R[y0:y0 + h, x0:x0 + w] = pa[..., :3]
if opt('--over-hair'):  # x0,y0,x1,y1: thin strands crossing the first letters are painted over by the letters (hair behind the print) instead of hiding them
    ohx0, ohy0, ohx1, ohy1 = (int(v) for v in opt('--over-hair').split(',')); keep = np.ones((H, W), bool); keep[ohy0:ohy1 + 1, ohx0:ohx1 + 1] = False; A[(hair > 0) & keep] = 0
else: A[hair > 0] = 0  # never over the hair
sh = cv2.GaussianBlur(clean, (0, 0), 3).mean(2, keepdims=True); sh = np.clip((sh + 25) / (np.median(sh[ring]) + 25), 0.75, 1.1)
res = clean * (1 - A[..., None]) + np.clip(R * sh, 0, 255) * A[..., None]
Image.fromarray(np.clip(res, 0, 255).astype(np.uint8)).save(out, quality=90)
print('old print px erased', int(old.sum()), 'print', w, h, 'at', x0, y0)
