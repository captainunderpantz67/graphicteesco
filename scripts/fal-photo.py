#!/usr/bin/env python3
"""Generate a lifestyle photo of a person wearing one of our designs, via fal.ai.

Replaces Google Flow. The design file goes in as a reference image; the scene comes from
the prompt. Output: raw images in designs/fal/<name>/ and (with --cover) a 600x800 webp
cover in public/covers/<handle>.webp for the collection grid.

Key: put your fal.ai API key (only the key) in ~/.config/fal/key  — never in the repo.
     Or export FAL_KEY. Get one at https://fal.ai/dashboard/keys

Examples:
  # 5-image model test on one design
  python3 scripts/fal-photo.py --design designs/merry-and-bright.png --name merry-test \
      --model seedream --model kontext --n 2 --person "Black woman in her late 40s, short silver curls" \
      --scene "outdoor Christmas market at dusk, string lights" --shirt "black"

  # final cover for a product
  python3 scripts/fal-photo.py --design designs/merry-and-bright.png --name merry \
      --model seedream --person "..." --scene "..." --shirt black \
      --cover womens-christmas-merry-bright-graphic-tee

Imagery rules are baked into the prompt (docs/store-rules.md): scene matches the shirt's world,
whole face in frame, print unchanged and unobstructed, real ink on fabric, candid not glamour.
Always eyeball the result before using it; log every new person in docs/model-registry.md.
"""
import argparse, base64, json, os, pathlib, sys, time, urllib.request, urllib.error

ROOT = pathlib.Path(__file__).resolve().parent.parent
MODELS = {
    # model id on fal          image field     multi-image?
    'seedream': ('fal-ai/bytedance/seedream/v4/edit', 'image_urls', True),
    'kontext': ('fal-ai/flux-pro/kontext', 'image_url', False),
    'kontext-max': ('fal-ai/flux-pro/kontext/max', 'image_url', False),
}

RULES = (
    "The t-shirt shows the exact graphic from the reference image, printed large on the chest, completely unchanged: "
    "same colors, same text, same shapes, same background frame. Nothing covers the print (no hands, hair, lanyards, cups, straps). "
    "The print looks like real screen-printed ink on cotton, following the folds of the fabric, slightly matte, not a sticker. "
    "Documentary-style candid photo, looks like an unposed real photo; natural skin texture, no glamour retouching. "
    "Waist-up framing, the person's whole face and hair in frame with headroom, eyes visible. 35mm lens, shallow depth of field. "
    "No other text, logos or watermarks."
)


def fal_key() -> str:
    k = os.environ.get('FAL_KEY', '').strip()
    if not k:
        f = pathlib.Path.home() / '.config/fal/key'
        if f.exists():
            k = f.read_text().strip()
    if not k:
        sys.exit('No fal.ai key: put it in ~/.config/fal/key or export FAL_KEY.')
    return k


def data_uri(path: pathlib.Path, max_side: int = 1536) -> str:
    # Print masters are 3600px / ~9MB — far too big to post. A 1536px copy is plenty for a reference.
    import io
    from PIL import Image
    im = Image.open(path)
    im.thumbnail((max_side, max_side), Image.LANCZOS)
    buf = io.BytesIO()
    if im.mode in ('RGBA', 'LA', 'P'):
        im.convert('RGBA').save(buf, 'PNG', optimize=True); mime = 'image/png'
    else:
        im.convert('RGB').save(buf, 'JPEG', quality=90); mime = 'image/jpeg'
    return f'data:{mime};base64,' + base64.b64encode(buf.getvalue()).decode()


def call(model_id: str, payload: dict, key: str) -> dict:
    body = json.dumps(payload).encode()
    last = None
    for auth in (f'Key {key}', f'Bearer {key}'):  # fal accepts "Key"; newer docs show "Bearer"
        req = urllib.request.Request(f'https://fal.run/{model_id}', data=body, method='POST',
                                     headers={'Authorization': auth, 'Content-Type': 'application/json'})
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            last = f'{e.code} {e.read()[:400]!r}'
            if e.code not in (401, 403):
                break
    sys.exit(f'fal.ai error for {model_id}: {last}')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--design', required=True, help='print file (png) or a photo of the shirt')
    ap.add_argument('--name', required=True, help='folder name for outputs, e.g. merry-test')
    ap.add_argument('--model', action='append', choices=MODELS, help='repeatable; default seedream')
    ap.add_argument('--person', required=True, help='who: ethnicity, age, hair (must not repeat docs/model-registry.md)')
    ap.add_argument('--scene', required=True, help="where, in the shirt's own world")
    ap.add_argument('--shirt', default='black', help='shirt color, e.g. navy, heather stone, natural')
    ap.add_argument('--fit', default='relaxed-fit cotton t-shirt', help='e.g. "black cropped boxy cotton t-shirt"')
    ap.add_argument('--n', type=int, default=1, help='images per model')
    ap.add_argument('--cover', help='product handle: also write public/covers/<handle>.webp from the first image')
    a = ap.parse_args()

    key = fal_key()
    if a.design.startswith('http'):  # e.g. the Shopify front photo for designs we don't have the print file for
        tmp = ROOT / 'designs' / 'fal' / a.name / 'reference.jpg'
        tmp.parent.mkdir(parents=True, exist_ok=True)
        with urllib.request.urlopen(a.design.split('?')[0] + '?width=1500', timeout=60) as r:
            tmp.write_bytes(r.read())
        design = tmp
    else:
        design = (ROOT / a.design) if not pathlib.Path(a.design).is_absolute() else pathlib.Path(a.design)
    ref = data_uri(design)
    prompt = f"Realistic lifestyle photo, 3:4 vertical. {a.person}, {a.scene}. They wear a {a.shirt} {a.fit}. {RULES}"
    out_dir = ROOT / 'designs' / 'fal' / a.name
    out_dir.mkdir(parents=True, exist_ok=True)
    saved = []
    for m in a.model or ['seedream']:
        model_id, field, multi = MODELS[m]
        payload = {'prompt': prompt, 'num_images': a.n}
        payload[field] = [ref] if multi else ref
        if m == 'seedream':
            payload['image_size'] = 'portrait_4_3'
        else:
            payload.update({'aspect_ratio': '3:4', 'output_format': 'png'})
        t = time.time()
        res = call(model_id, payload, key)
        for i, img in enumerate(res.get('images', [])):
            dst = out_dir / f'{m}-{i + 1}.png'
            with urllib.request.urlopen(img['url'], timeout=120) as r:
                dst.write_bytes(r.read())
            saved.append(dst)
            print(f'{m}: {dst.relative_to(ROOT)}  ({time.time() - t:.0f}s)')
    (out_dir / 'prompt.txt').write_text(prompt + '\n')

    if a.cover and saved:
        from PIL import Image
        im = Image.open(saved[0]).convert('RGB')
        w, h = im.size
        tw = min(w, int(h * 3 / 4)); th = int(tw * 4 / 3)
        im = im.crop(((w - tw) // 2, (h - th) // 2, (w + tw) // 2, (h + th) // 2)).resize((600, 800), Image.LANCZOS)
        cov = ROOT / 'public' / 'covers' / f'{a.cover}.webp'
        im.save(cov, quality=82)
        print(f'cover: {cov.relative_to(ROOT)}  → add it to src/data/covers.ts and docs/model-registry.md')


if __name__ == '__main__':
    main()
