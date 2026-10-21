#!/usr/bin/env python3
"""b-livemedia.py <id> <alt base> <Color=variantId>... : media JSON from $S/mk<id>.json (front per color, back of the first color), alt '<base>, <Color>, front view'."""
import sys, json, os
S = os.environ['S']; n, base = sys.argv[1:3]; pairs = [p.split('=') for p in sys.argv[3:]]
mk = json.load(open(os.path.join(S, 'mk%s.json' % n)))
m = [{'originalSource': mk[v]['front:main'], 'alt': f'{base}, {c}, front view', 'mediaContentType': 'IMAGE'} for c, v in pairs]
v0 = mk[pairs[0][1]]; b = v0.get('back:main') or v0.get('front:Back') or v0.get('back:Back')
m.append({'originalSource': b, 'alt': f'{base}, back view with Graphic Tees Co. neck logo', 'mediaContentType': 'IMAGE'})
print(json.dumps(m))
