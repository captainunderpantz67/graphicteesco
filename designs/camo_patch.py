"""Camo patch lockup (R11.13): art reduced to 3 solid inks on ONE bone patch with a dark outline, heavy lettering below.
Usage: from designs.camo_patch import camo; camo(n, art_path, head, punch, W=3400, ...) -> docs/print-files/<n>-camo.png"""
import sys; sys.path.insert(0, '.')
from designs.lib import *
import numpy as np, cv2
BONE = (240, 230, 205, 255); BLACK = (22, 20, 18, 255); ORANGE = (255, 106, 0, 255)
def posterize(path, w, red=55, dark=120, keepmin=2500, blur=7):
    a = Image.open(path).convert('RGBA'); a = a.resize((w, round(a.height * w / a.width)), Image.LANCZOS)
    arr = np.array(a).astype(np.float32); al = arr[..., 3] > 60
    rgb = cv2.medianBlur(arr[..., :3].astype(np.uint8), blur | 1).astype(np.float32)
    L = rgb @ np.array([0.3, 0.59, 0.11]); redness = rgb[..., 0] - (rgb[..., 1] + rgb[..., 2]) / 2
    ink = np.zeros(L.shape, np.uint8)  # 0 bone, 1 black, 2 orange
    ink[al & (L < dark)] = 1; ink[al & (redness > red) & (L >= 60)] = 2
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
def camo(n, art_path, head, punch, W=3400, patchw=0.82, ol=68, pad=70, r=150, hfont='anton', hfrac=1.0, pfrac=1.0, kw=31, g=44, hcol=BONE, pcol=ORANGE, samepunch=True, **pz):
    art = posterize(art_path, int(W * patchw) - 2 * (ol + pad), **pz); P = patch(art, W, ol, pad, r)
    mk = line_same if samepunch else None
    hs = line_same(head, hfont, hfrac, W, hcol, BLACK, kw=kw) if len(head) > 1 else [line(head[0], hfont, hfrac, W, hcol, BLACK, kw=kw)]
    ps = line_same(punch, hfont, pfrac, W, pcol, BLACK, kw=kw) if len(punch) > 1 else [line(punch[0], hfont, pfrac, W, pcol, BLACK, kw=kw)]
    out = lockup(P, W, [], hs + ps, f'{n}-camo', {'duck': (88, 98, 70, 255), 'wood': (63, 58, 46, 255), 'black': (30, 32, 28, 255)}, g=g)
    out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox()); out.save(f'docs/print-files/{n}-camo.png', dpi=(300, 300))
    print(out.size, 'aspect', round(out.height / out.width, 2), 'head', [l.width for l in hs], 'punch', [l.width for l in ps], 'patch', P.size)
    return out
