#!/usr/bin/env python3
"""c-relayout.py <src.png> <head_end_row> <punch_start_row> <out_ash.png> [<out_navy.png> <navy_mode>] (lane C, R3.7.8 punch-width fix; run with /usr/bin/python3)
Scales the punch band (rows >= punch_start_row) so it is 1% wider than the headline band (rows < head_end_row) and rebuilds the print on a canvas as wide as the punch.
Navy file (optional): navy_mode 'punch' swaps the punch's fill and keyline inks (dark fill -> cream, cream keyline -> navy); 'head' repaints the headline cream."""
import sys, numpy as np
from PIL import Image
src, he, ps, out_ash = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
im = Image.open(src).convert('RGBA'); W, H = im.size
head, mid, punch = im.crop((0, 0, W, he)), im.crop((0, he, W, ps)), im.crop((0, ps, W, H))
head = head.crop(head.getbbox()); punch = punch.crop(punch.getbbox()); hw, pw = head.width, punch.width
tw = int(round(hw * 1.01)); sc = tw / pw; punch = punch.resize((tw, int(round(punch.height * sc))), Image.LANCZOS)
mid = mid.crop(mid.getbbox()); gap = 36
CW = max(tw, W, mid.width); height = head.height + gap + mid.height + gap + punch.height
def build(h, p):
    o = Image.new('RGBA', (CW, height), (0, 0, 0, 0)); y = 0
    o.alpha_composite(h, ((CW - h.width) // 2, y)); y += h.height + gap
    o.alpha_composite(mid, ((CW - mid.width) // 2, y)); y += mid.height + gap
    o.alpha_composite(p, ((CW - p.width) // 2, y)); return o
build(head, punch).save(out_ash)
print(f'headline {hw} px / punch {pw} -> {tw} px ({tw / hw * 100:.1f}% of the headline); canvas {CW} x {height}; art {mid.width} px wide')
if len(sys.argv) > 5:
    out_navy, mode = sys.argv[5], sys.argv[6]; CREAM = np.array([246, 236, 214]); NAVY = np.array([26, 34, 62])
    def swap(band):
        a = np.array(band).astype(float); m = a[:, :, 3] > 200; c = a[m][:, :3]; lum = c.sum(1)
        A = np.median(c[lum <= np.percentile(lum, 35)], 0); B = np.median(c[lum >= np.percentile(lum, 92)], 0)
        d = B - A; s = np.clip(((a[:, :, :3] - A) @ d) / (d @ d), 0, 1)[..., None]
        a[:, :, :3] = CREAM + s * (NAVY - CREAM); return Image.fromarray(a.astype('uint8'), 'RGBA')
    if mode == 'punch': build(head, swap(punch)).save(out_navy)
    else:
        h = np.array(head); h[h[:, :, 3] > 0, :3] = CREAM; build(Image.fromarray(h, 'RGBA'), punch).save(out_navy)
    print('navy file', out_navy, mode)
