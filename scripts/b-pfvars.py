#!/usr/bin/env python3
"""b-pfvars.py <sync product id> [size=M]: prints 'Color=printful variant id' for one size of every color (for mockups)."""
import sys, os, json, urllib.request
r = urllib.request.Request('https://api.printful.com/sync/products/%s' % sys.argv[1], headers={'Authorization': 'Bearer ' + os.environ['PRINTFUL_TOKEN'], 'User-Agent': 'gtc'})
d = json.load(urllib.request.urlopen(r))['result']['sync_variants']; sz = sys.argv[2] if len(sys.argv) > 2 else 'M'
for v in d:
    p = v['name'].split(' / ')
    if p[-1] == sz: print('%s=%s' % (p[-2], v['variant_id']))
