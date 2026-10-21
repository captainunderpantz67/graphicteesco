#!/usr/bin/env python3
"""b-camo-media.py <id> <alt base> <Color=variantId>... : reads $S/mk<id>.json + mk<id>x.json (pf-mockup outputs), prints productCreateMedia media JSON (one front per color, then the back view)."""
import sys, json, os
S = os.environ['S']; n, base = sys.argv[1:3]; pairs = [p.split('=') for p in sys.argv[3:]]
mk = {}
for f in ('mk%s.json' % n, 'mk%sx.json' % n): mk.update(json.load(open(os.path.join(S, f))))
media = [{'originalSource': mk[v]['front:main'], 'alt': f'{base}, {c}, front view with bone patch print', 'mediaContentType': 'IMAGE'} for c, v in pairs]
v0 = mk[pairs[0][1]]; b = v0.get('back:main') or v0.get('front:Back') or v0.get('back:Back')
media.append({'originalSource': b, 'alt': f'{base}, back view with Graphic Tees Co. neck logo', 'mediaContentType': 'IMAGE'})
print(json.dumps(media))
