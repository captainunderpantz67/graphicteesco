#!/usr/bin/python3
"""cover-erase-composite.py cover print out x0 y0 w --old x0,y0,x1,y1 --ref x0,y0,x1,y1 [--hair-seed x,y] [--thr 20]
--ref is a patch of bare fabric on the same garment (not covered by the old print)
Local-only erase: old print pixels (distance from the median fabric colour of the box > thr) are inpainted at full resolution, so fabric outside the print is left exactly as photographed (no box).
Then the print goes on masked, multiplied by the local fabric luminance. Hair (dark pixels connected to --hair-seed) is never covered."""
import sys, numpy as np, cv2
from PIL import Image
a = sys.argv[1:]; cov, prt, out = a[:3]; x0, y0, w = (int(v) for v in a[3:6])
def opt(n, d=None): return a[a.index(n) + 1] if n in a else d
ox0, oy0, ox1, oy1 = (int(v) for v in opt('--old').split(','))
c = np.array(Image.open(cov).convert('RGB')); H, W = c.shape[:2]
lum = c.astype(np.float32).mean(2)
hair = np.zeros((H, W), np.uint8)
if opt('--hair-seed'):
    sx, sy = (int(v) for v in opt('--hair-seed').split(',')); n, lab = cv2.connectedComponents(cv2.morphologyEx((lum < float(opt('--hair-dark', 40))).astype(np.uint8), cv2.MORPH_OPEN, np.ones((7, 7), np.uint8)))
    hair = cv2.dilate((lab == lab[sy, sx]).astype(np.uint8), np.ones((5, 5), np.uint8))
# fabric reference: smooth surface from bright, low-saturation-ish pixels of a ring around the box
box = np.zeros((H, W), np.uint8); box[oy0:oy1 + 1, ox0:ox1 + 1] = 1
lab3 = cv2.cvtColor(c, cv2.COLOR_RGB2LAB).astype(np.float32)
# print pixels: clearly darker, greyer (snow) or more saturated than the fabric (--fab-lum lo, --fab-sat lo,hi tune it); everything else stays as photographed
sat = c.astype(np.float32).max(2) - c.astype(np.float32).min(2)
llo = float(opt('--dark', 168)); slo, shi = (float(v) for v in opt('--sat', '32,70').split(','))
m = (((lum < llo) | (sat < slo) | (sat > shi)) & (box > 0) & (hair == 0)).astype(np.uint8)
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8)); m = cv2.dilate(m, np.ones((int(opt('--grow', 7)), int(opt('--grow', 7))), np.uint8)); m[hair > 0] = 0
src = c.copy(); small = cv2.resize(src, (W // 2, H // 2), interpolation=cv2.INTER_AREA)
big = np.maximum(m, cv2.dilate(hair, np.ones((9, 9), np.uint8))); ms = cv2.resize(big, (W // 2, H // 2), interpolation=cv2.INTER_NEAREST)
est = cv2.GaussianBlur(cv2.resize(cv2.inpaint(small, ms, 8, cv2.INPAINT_TELEA), (W, H), interpolation=cv2.INTER_CUBIC).astype(np.float32), (0, 0), 2.0)
if '--white' in a:  # light garment: repaint from bare white-fabric pixels only (normalised blur), so skin, hair and background cannot bleed in
    valid = (cv2.dilate(m, np.ones((5, 5), np.uint8)) == 0) & (sat < 20) & (lum > 195); valid = cv2.erode(valid.astype(np.uint8), np.ones((3, 3), np.uint8)).astype(np.float32)
    cf = c.astype(np.float32) * valid[..., None]; est = None
    for sg in (8.0, 20.0, 45.0, 90.0):  # widen the blur until enough bare fabric is in reach; never leave a hole
        dn = cv2.GaussianBlur(valid, (0, 0), sg)[..., None]; e = cv2.GaussianBlur(cf, (0, 0), sg) / np.maximum(dn, 1e-3); wgt = np.clip(dn * 6, 0, 1)
        est = e if est is None else np.where(est_ok, est, e)
        est_ok = (wgt > 0.99) if sg == 8.0 else (est_ok | (wgt > 0.99))
est = est + np.random.default_rng(3).normal(0, 1.0, c.shape)
Mf = cv2.GaussianBlur(m.astype(np.float32), (0, 0), 1.0)[..., None]
clean = c.astype(np.float32) * (1 - Mf) + est * Mf
p = Image.open(prt).convert('RGBA'); h = round(w * p.height / p.width); p = p.resize((w, h), Image.LANCZOS); pa = np.array(p).astype(np.float32)
A = np.zeros((H, W), np.float32); R = np.zeros((H, W, 3), np.float32)
A[y0:y0 + h, x0:x0 + w] = pa[..., 3] / 255; R[y0:y0 + h, x0:x0 + w] = pa[..., :3]; A[hair > 0] = 0
sh = cv2.GaussianBlur(clean, (0, 0), 4).mean(2, keepdims=True) / np.median(clean.mean(2)[box > 0])
res = clean * (1 - A[..., None]) + np.clip(R * np.clip(sh, 0.55, 1.05), 0, 255) * A[..., None]
Image.fromarray(np.clip(res, 0, 255).astype(np.uint8)).save(out, quality=92)
print('erased px', int(m.sum()), 'print', w, h, 'at', x0, y0)
