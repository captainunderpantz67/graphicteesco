#!/usr/bin/env python3
"""Keyword-gap finder for one product (Sam's "buy the bottom" rule).

Seeds (2-4 niche-true phrases about the DESIGN) -> Google autocomplete (real search phrasing)
-> RankHero measurement (Etsy volume, KD, competing listings) -> ranked gap list.

Usage: python3 scripts/keyword-gap.py "snowman shirt" "hot cocoa shirt" --women
Prints JSON rows sorted by gap score. Pick 6-8 phrases that truly describe the art, skip any
already assigned to another product (docs/product-keyword-map.json) or to a collection head.
"""
import json, re, html, subprocess, time, urllib.parse, sys

JUNK = re.compile(r'\b(amazon|etsy|walmart|target|shein|temu|kohls|old navy|near me|svg|png|pdf|designs?|template|free|diy|cricut|pattern|kids?|toddler|baby|babies|infant|youth|boys?|girls?|meaning|lyrics|song|cast|tiktok|reddit|wholesale|bulk|nike|adidas|disney|grinch|harry|stanley|elf|peanuts|snoopy|barbie|bluey|taylor|swift|yellowstone|carhartt|ugly sweater|sweater|sweatshirt|hoodie|pajamas?|pjs|onesie|jersey|dress|socks|hat|mug|ornament|decor|costume|tank|long sleeve)\b', re.I)
SHIRT = re.compile(r'\b(shirts?|tees?|t-shirts?|t shirts?|tshirts?|graphic tee)\b')

def suggest(q):
    u = 'https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=' + urllib.parse.quote(q)
    try: return json.loads(subprocess.run(['curl', '-s', '--max-time', '8', u], capture_output=True, text=True).stdout)[1]
    except Exception: return []

def rankhero(p):
    slug = re.sub(r'[^a-z0-9]+', '-', p.lower()).strip('-')
    t = html.unescape(subprocess.run(['curl', '-s', '--max-time', '15', '-A', 'Mozilla/5.0', f'https://www.rankhero.com/keywords/{slug}'], capture_output=True, text=True).stdout)
    kd = re.search(r'keyword difficulty of (\d+)/100', t); vol = re.search(r'Global search volume: ([\d,]+)', t); comp = re.search(r'Competition: ([\d,]+)', t)
    time.sleep(0.4)
    return {'volume': int(vol.group(1).replace(',', '')) if vol else None, 'kd': int(kd.group(1)) if kd else None,
            'competition': int(comp.group(1).replace(',', '')) if comp else None}

def gap_score(r):
    # Higher = more searches per unit of difficulty and competition. Unmeasured = 0 (never build on it).
    if not r['volume'] or r['kd'] is None: return 0
    comp = (r['competition'] or 1) / 1000
    return round(r['volume'] / ((r['kd'] + 5) * (1 + comp) ** 0.5), 2)

if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    aud = 'women' if '--women' in sys.argv else 'men'
    cands = set(args)
    for s in args:
        for q in (s, s + ' for', f'{s} {aud}'):
            for x in suggest(q):
                x = x.lower().strip()
                if not JUNK.search(x) and SHIRT.search(x) and len(x.split()) <= 6: cands.add(x)
    rows = [{'phrase': c, **rankhero(c)} for c in sorted(cands)]
    for r in rows: r['gap'] = gap_score(r)
    print(json.dumps(sorted(rows, key=lambda r: -r['gap']), indent=1))
