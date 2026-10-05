#!/usr/bin/env python3
"""Graphic Tees Co. back-neck badge: script wordmark in a circle with arc lettering. Transparent PNG, 300 DPI."""
import math, sys
from PIL import Image, ImageDraw, ImageFont
F = 'designs/brand/fonts/'
SCRIPT = ImageFont.truetype(F + 'yellowtail-latin-400-normal.ttf', 380)
CAPS = ImageFont.truetype(F + 'big-shoulders-display-latin-800-normal.ttf', 150)
SMALL = ImageFont.truetype(F + 'big-shoulders-display-latin-800-normal.ttf', 118)
COMPANY = ImageFont.truetype(F + 'big-shoulders-display-latin-800-normal.ttf', 132)

def badge(color, S=2000):
    im = Image.new('RGBA', (S, S), (0, 0, 0, 0)); d = ImageDraw.Draw(im); c = S / 2
    d.ellipse((16, 16, S - 16, S - 16), outline=color, width=30)          # outer ring
    d.ellipse((96, 96, S - 96, S - 96), outline=color, width=10)          # inner ring
    # (no inner track ring: it cut through the script)

    def arc_text(text, radius, center_deg, top=True, font=SMALL, spacing=10):
        widths = [d.textlength(ch, font=font) + spacing for ch in text]
        total = sum(widths); ang = total / radius                         # radians spanned
        a = math.radians(center_deg) - (ang / 2 if top else -ang / 2)
        for ch, w in zip(text, widths):
            step = w / radius; mid = a + (step / 2 if top else -step / 2)
            x = c + radius * math.cos(mid); y = c + radius * math.sin(mid)
            g = Image.new('RGBA', (int(w * 2) + 40, 220), (0, 0, 0, 0))
            ImageDraw.Draw(g).text((g.width / 2, 110), ch, font=font, fill=color, anchor='mm')
            rot = -(math.degrees(mid) + 90) if top else -(math.degrees(mid) - 90)
            g = g.rotate(rot, resample=Image.BICUBIC, expand=True)
            im.alpha_composite(g, (int(x - g.width / 2), int(y - g.height / 2)))
            a += step if top else -step

    arc_text('ORIGINAL ART', 770, -90, top=True)
    arc_text('PRINTED TO ORDER', 770, 90, top=False)
    for sx in (c - 770, c + 770):                                          # side stars on the track
        r = 26; d.regular_polygon((sx, c, r), 4, rotation=45, fill=color)

    # Wordmark block, vertically centered as one unit:
    #   Graphic (script) / Tees (script) / ——— COMPANY ——— (caps)
    g_box = d.textbbox((0, 0), 'Graphic', font=SCRIPT); t_box = d.textbbox((0, 0), 'Tees', font=SCRIPT)
    gh = g_box[3] - g_box[1]; th = t_box[3] - t_box[1]
    gap1, gap2 = -60, 40                       # script lines overlap a little (ascenders); caps line sits clear
    ch = d.textbbox((0, 0), 'COMPANY', font=COMPANY)[3]
    total = gh + gap1 + th + gap2 + ch
    y = c - total / 2
    d.text((c, y - g_box[1]), 'Graphic', font=SCRIPT, fill=color, anchor='lt' if False else None) if False else None
    gw = g_box[2] - g_box[0]; d.text((c - gw / 2 - g_box[0], y - g_box[1]), 'Graphic', font=SCRIPT, fill=color, stroke_width=5, stroke_fill=color)
    y += gh + gap1
    tw = t_box[2] - t_box[0]; d.text((c - tw / 2 - t_box[0] + 40, y - t_box[1]), 'Tees', font=SCRIPT, fill=color, stroke_width=5, stroke_fill=color)
    y += th + gap2
    cw = d.textlength('COMPANY', font=COMPANY)
    d.text((c - cw / 2, y), 'COMPANY', font=COMPANY, fill=color)
    ly = y + ch * 0.55
    d.line((c - cw / 2 - 210, ly, c - cw / 2 - 40, ly), fill=color, width=10)
    d.line((c + cw / 2 + 40, ly, c + cw / 2 + 210, ly), fill=color, width=10)
    return im

if __name__ == '__main__':
    hexc = sys.argv[1] if len(sys.argv) > 1 else '#c2461f'
    col = tuple(int(hexc[i:i + 2], 16) for i in (1, 3, 5)) + (255,)
    out = sys.argv[2] if len(sys.argv) > 2 else 'designs/brand/back-logo.png'
    badge(col).save(out, dpi=(300, 300)); print(out)
