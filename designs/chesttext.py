import sys
from PIL import Image, ImageDraw, ImageFont
def render(lines, font, out, wght=None, size=400, gap=0.3):
    """black text lines on white, centred; out = chest_src.png for emb-prep"""
    f = ImageFont.truetype(font, size)
    if wght:
        try: f.set_variation_by_axes([wght])
        except Exception: pass
    W = 4000; im = Image.new('L', (W, 3000), 255); d = ImageDraw.Draw(im); y = 100
    for t in lines:
        bb = d.textbbox((0, 0), t, font=f); w = bb[2] - bb[0]; h = bb[3] - bb[1]
        d.text(((W - w) // 2 - bb[0], y - bb[1]), t, font=f, fill=0); y += h + int(size * gap)
    im.save(out); return out
if __name__ == '__main__':
    out, font, wght = sys.argv[1:4]; render(sys.argv[4:], font, out, int(wght) if wght != '0' else None)
