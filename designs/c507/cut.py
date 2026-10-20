import numpy as np, cv2
from PIL import Image, ImageDraw
im = Image.open('designs/c507/art_raw.png').convert('RGBA'); a = np.array(im); H, W = a.shape[:2]
L = [(570, 20), (585, 250), (640, 420), (720, 600), (780, 800), (795, 1000), (780, 1700)]; R = [(1365, 20), (1340, 250), (1290, 420), (1230, 600), (1180, 800), (1155, 1000), (1170, 1700)]
m = Image.new('L', (W, H), 0); ImageDraw.Draw(m).polygon(L + R[::-1], fill=255); plume = np.array(m) > 0
yy = np.arange(H)[:, None] * np.ones((1, W)); xx = np.ones((H, 1)) * np.arange(W)[None, :]
r, g, b = a[..., 0].astype(int), a[..., 1].astype(int), a[..., 2].astype(int); lum = (r + g + b) / 3
coral = (r > 190) & (g < 150) & (b < 140)
sky_zone = yy < 1500
dark = lum < 90
volcano = (xx > 1100) & (xx < 1620) & (yy > 1230) & (yy < 1500) & (lum < 130)
keep = (~sky_zone) | (plume & ~coral) | (sky_zone & dark & (yy >= 700)) | volcano
alpha = (a[..., 3] > 40) & keep
n, lab, st, _ = cv2.connectedComponentsWithStats(alpha.astype(np.uint8), 8)
for i in range(1, n):
    if st[i, cv2.CC_STAT_AREA] < 5000: alpha[lab == i] = False
a[..., 3] = np.where(alpha, a[..., 3], 0)
Image.fromarray(a).save('designs/c507/art_cut.png')
ys, xs = np.where(alpha); print('bbox', xs.min(), ys.min(), xs.max(), ys.max())
bg = Image.new('RGBA', im.size, (150, 150, 155, 255)); bg.alpha_composite(Image.fromarray(a)); bg.convert('RGB').resize((600, int(600 * H / W))).save('/tmp/claude-0/-home-user-graphicteesco/e56cc388-03b6-5de7-bf21-dc3e2d31976e/scratchpad/cut507.png')
