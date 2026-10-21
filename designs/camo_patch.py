"""Camo patch lockup (R11.13): art reduced to 3 solid inks on ONE bone patch with a dark outline, heavy lettering below.
Usage: from designs.camo_patch import camo; camo(n, art_path, head, punch, W=3400, ...) -> docs/print-files/<n>-camo.png"""
import sys; sys.path.insert(0, '.')
from designs.lib import *
import numpy as np, cv2
BONE = (240, 230, 205, 255); BLACK = (22, 20, 18, 255); ORANGE = (255, 106, 0, 255)
def posterize(path, w, crop=None, dark=105, sat=0.42, edge=34, fillL=0, keepmin=2500, blur=5, adapt=None):
    a = Image.open(path).convert('RGBA')
    if crop: W0, H0 = a.size; a = a.crop((int(crop[0] * W0), int(crop[1] * H0), int(crop[2] * W0), int(crop[3] * H0)))
    a = a.crop(a.getchannel('A').point(lambda v: 255 if v > 60 else 0).getbbox()); a = a.resize((w, round(a.height * w / a.width)), Image.LANCZOS)
    arr = np.array(a); al = arr[..., 3] > 60
    rgb = cv2.medianBlur(arr[..., :3], blur | 1); hsv = cv2.cvtColor(rgb, cv2.COLOR_RGB2HSV).astype(np.float32)
    L = rgb.astype(np.float32) @ np.array([0.3, 0.59, 0.11], np.float32); hue = hsv[..., 0] * 2; S = hsv[..., 1] / 255; V = hsv[..., 2] / 255
    g = cv2.GaussianBlur(L, (0, 0), 2); gx = cv2.Sobel(g, cv2.CV_32F, 1, 0); gy = cv2.Sobel(g, cv2.CV_32F, 0, 1); gm = np.hypot(gx, gy) / 4
    ink = np.zeros(L.shape, np.uint8)  # 0 bone, 1 black, 2 orange
    ink[al & (S > sat) & (V > 0.38) & ((hue < 62) | (hue > 345)) & (L > 55)] = 2
    ink[al & ((L < dark) | ((gm > edge) & (L < 215)))] = 1
    if fillL: ink[al & (L < fillL) & (ink != 2)] = 1
    if adapt: ad = cv2.adaptiveThreshold(cv2.GaussianBlur(L, (0, 0), 1.5).astype(np.uint8), 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, adapt[0] | 1, adapt[1]); ink[al & (ad > 0) & (ink != 2)] = 1
    # cut the grey outline fringe the alpha leaves around the subject
    for v in (1, 2):
        m = (ink == v).astype(np.uint8); n, lab, st, _ = cv2.connectedComponentsWithStats(m, connectivity=8)
        for i in range(1, n):
            if st[i, cv2.CC_STAT_AREA] < keepmin: ink[lab == i] = 0
    out = np.zeros(L.shape + (4,), np.uint8); out[...] = BONE
    out[ink == 1] = BLACK; out[ink == 2] = ORANGE
    return Image.fromarray(out)
def patch(art, W, ol, pad, r):
    w = art.width + 2 * (ol + pad); h = art.height + 2 * pad + 2 * ol; im = Image.new('RGBA', (w, h), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, w - 1, h - 1), r, fill=BLACK); d.rounded_rectangle((ol, ol, w - 1 - ol, h - 1 - ol), r - ol // 2, fill=BONE)
    im.alpha_composite(art, ((w - art.width) // 2, ol + pad)); return im
def camo(n, art_path, head, punch, W=3400, patchw=0.84, aspect=1.12, ol=68, pad=70, r=150, hfont='anton', hfrac=1.0, pfrac=1.0, kw=31, g=44, hcol=BONE, pcol=ORANGE, crop=None, **pz):
    """Lettering first (full width W), then the art is sized so the whole print stays within `aspect` (height/width) and `patchw` of W."""
    L = lambda t, c, f: line_same(t, hfont, f, W, c, BLACK, kw=kw) if len(t) > 1 else [line(t[0], hfont, f, W, c, BLACK, kw=kw)]
    hs = L(head, hcol, hfrac); ps = L(punch, pcol, pfrac) if punch else []; th = sum(l.height for l in hs + ps)
    src = posterize(art_path, 1000, crop=crop, **pz); ratio = src.height / src.width
    avail = aspect * W - th - g - 2 * (ol + pad)
    aw = int(min(patchw * W - 2 * (ol + pad), avail / ratio)); art = posterize(art_path, aw, crop=crop, **pz); P = patch(art, W, ol, pad, r)
    out = lockup(P, W, [], hs + ps, f'{n}-camo', {'duck': (88, 98, 70, 255), 'wood': (63, 58, 46, 255), 'black': (30, 32, 28, 255)}, g=g)
    out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()); out.save(f'docs/print-files/{n}-camo.png', dpi=(300, 300))
    print(out.size, 'aspect', round(out.height / out.width, 2), 'head', [l.width for l in hs], 'punch', [l.width for l in ps], 'patch', P.size, 'type share', round(th / out.height, 2))
    return out
