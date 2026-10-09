#!/usr/bin/env python3
"""Generate print art (text-to-image) for a design brief via fal.ai.

Output: designs/fal-art/<name>/<model>-<n>.png — pick one, then run scripts/print-prep.py on it.
Key: ~/.config/fal/key or FAL_KEY (never in the repo).

  python3 scripts/fal-art.py --name retro-santa --model ideogram --model recraft --n 2 \
      --art "A round-faced 1950s Santa ..." --text "HO HO HO (stacked retro script)" \
      --palette "tomato red, bubblegum pink, cream, black"
"""
import argparse, json, os, pathlib, sys, time, urllib.request, urllib.error

ROOT = pathlib.Path(__file__).resolve().parent.parent
MODELS = {
    'ideogram': 'ideogram/v4.5',
    'recraft': 'fal-ai/recraft/v4/text-to-image',
}
STYLE = (
    "Original t-shirt graphic, vintage screen-print style: flat ink shapes, limited {n}-ink palette ({palette}), "
    "subtle halftone and slightly off-register print texture, bold clean outlines. "
    "Isolated, centered artwork on a plain pure white background; nothing touching the edges. "
    "Just the flat artwork: no t-shirt, no mockup, no frame of a poster, no photo, no extra words, "
    "no logos, brands, licensed characters or signatures."
)


def fal_key() -> str:
    k = os.environ.get('FAL_KEY', '').strip()
    if not k:
        f = pathlib.Path.home() / '.config/fal/key'
        k = f.read_text().strip() if f.exists() else ''
    if not k:
        sys.exit('No fal.ai key: put it in ~/.config/fal/key or export FAL_KEY.')
    return k


def call(model_id: str, payload: dict, key: str) -> dict:
    req = urllib.request.Request(f'https://fal.run/{model_id}', data=json.dumps(payload).encode(), method='POST',
                                 headers={'Authorization': f'Key {key}', 'Content-Type': 'application/json'})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            msg = f'{e.code} {e.read()[:400]!r}'
            if e.code < 500:
                sys.exit(f'fal.ai error for {model_id}: {msg}')
        except (urllib.error.URLError, TimeoutError) as e:
            msg = str(e)
        time.sleep(4 * (attempt + 1))
    sys.exit(f'fal.ai error for {model_id}: {msg}')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--name', required=True)
    ap.add_argument('--art', required=True, help='what the graphic shows')
    ap.add_argument('--text', default='', help='exact lettering on the shirt, or empty for art only')
    ap.add_argument('--palette', required=True)
    ap.add_argument('--model', action='append', choices=MODELS)
    ap.add_argument('--n', type=int, default=2)
    a = ap.parse_args()
    key = fal_key()
    inks = len([c for c in a.palette.split(',') if c.strip()])
    lettering = (f'The only lettering is "{a.text}", spelled exactly like that, crisp and legible.' if a.text
                 else 'No lettering or text anywhere.')
    prompt = f"{a.art} {lettering} {STYLE.format(n=inks, palette=a.palette)}"
    out = ROOT / 'designs' / 'fal-art' / a.name
    out.mkdir(parents=True, exist_ok=True)
    (out / 'prompt.txt').write_text(prompt + '\n')
    for m in a.model or ['ideogram']:
        payload = {'prompt': prompt, 'image_size': 'square_hd'}
        if m == 'ideogram':
            payload.update({'num_images': a.n, 'quality': 'high', 'enable_prompt_expansion': False})
            runs = [payload]
        else:
            runs = [payload] * a.n  # recraft returns one image per call
        i = 0
        for p in runs:
            t = time.time()
            for img in call(MODELS[m], p, key).get('images', []):
                i += 1
                dst = out / f'{m}-{i}.png'
                with urllib.request.urlopen(img['url'], timeout=120) as r:
                    dst.write_bytes(r.read())
                print(f'{m}: {dst.relative_to(ROOT)}  ({time.time() - t:.0f}s)')


if __name__ == '__main__':
    main()
