#!/usr/bin/env python3
"""b-tee2media.py <id> <alt base> <Color=variantId>... : media JSON for a two-file tee from $S/mk<id>d.json + mk<id>l.json (front per color in the order given, then the back of the first color)."""
import sys, json, os
S = os.environ['S']; n, base = sys.argv[1:3]; pairs = [p.split('=') for p in sys.argv[3:]]; mk = {}
for f in ('mk%sd.json' % n, 'mk%sl.json' % n): mk.update(json.load(open(os.path.join(S, f))))
m = [{'originalSource': mk[v]['front:main'], 'alt': f'{base}, {c}, front view', 'mediaContentType': 'IMAGE'} for c, v in pairs]
v0 = mk[pairs[0][1]]; b = v0.get('back:main') or v0.get('front:Back') or v0.get('back:Back')
m.append({'originalSource': b, 'alt': f'{base}, back view with Graphic Tees Co. neck logo', 'mediaContentType': 'IMAGE'})
print(json.dumps(m))
