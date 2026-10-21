"""Lane C hoodie helpers (from the c773 build). Run with /usr/bin/python3 from the repo root."""
import sys, json, os; sys.path.insert(0, '.')
from designs.lib import *
import numpy as np, cv2
CR = (246, 236, 214, 255); MU = (226, 169, 53, 255)
def load_art(path, edge=True, bottom_fade=False):
    art = Image.open(path).convert('RGBA'); al = np.array(art.getchannel('A'))
    n, lab, st, _ = cv2.connectedComponentsWithStats((al > 40).astype(np.uint8), connectivity=8); keep = np.zeros_like(al, bool)
    for i in range(1, n):
        if st[i, cv2.CC_STAT_AREA] > 15000: keep |= (lab == i)
    al[~keep] = 0; H0, W0 = al.shape
    if edge:
        rng = np.random.default_rng(7); nz = cv2.GaussianBlur(rng.random((H0, W0)).astype(np.float32), (0, 0), 6); nz = (nz - nz.min()) / (nz.max() - nz.min())
        yy, xx = np.mgrid[0:H0, 0:W0]; d = np.minimum.reduce([yy, xx, H0 - 1 - yy, W0 - 1 - xx]).astype(np.float32)
        al = (al * np.clip((d / 110) * 1.4 - nz * 0.9, 0, 1)).astype(np.uint8)
    art.putalpha(Image.fromarray(al)); return art.crop(art.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
def halo(a, px):
    al = np.array(a.getchannel('A')); k = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (2 * px + 1, 2 * px + 1)); d = cv2.dilate(al, k)
    h = Image.new('RGBA', a.size, CREAM); h.putalpha(Image.fromarray(d)); h.alpha_composite(a); return h
def build(n, art_path, head, punch, font, sand, AW=1800, W=3400, hfrac=0.9, pfrac=1.0, pfont=None):
    """head/punch: list of text lines. sand=(headline ink, punch ink). Writes docs/print-files/<n>-{navy,sand}.png and prints the 7h/7k/7l numbers."""
    art = load_art(art_path); art = art.resize((AW, round(art.height * AW / art.width)), Image.LANCZOS)
    for mode, (hc, pc, aa, bg) in {'navy': (CR, MU, halo(art, 16), (31, 42, 77, 255)), 'sand': (sand[0], sand[1], art, (226, 214, 188, 255))}.items():
        hs = [line(t, font, hfrac, W, hc, hc, kw=3) for t in head]; ps = [line(t, pfont or font, pfrac, W, pc, pc, kw=3) for t in punch]
        out = lockup(aa, W, hs, ps, f'{n}-{mode}', {mode: bg}, g=40); out = out.crop(out.getchannel('A').point(lambda v: 255 if v > 10 else 0).getbbox())
        out.save(f'docs/print-files/{n}-{mode}.png', dpi=(300, 300)); th = sum(l.height for l in hs + ps)
        print(mode, out.size, 'headline', max(l.width for l in hs), 'punch', max(l.width for l in ps), 'type', th, 'of', out.height, round(th / out.height, 2), 'subject', art.width, 'of', out.width, round(art.width / out.width, 2))
