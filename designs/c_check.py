import os,json,sys,urllib.request
from collections import Counter
T=os.environ['PRINTFUL_TOKEN']; pid=open(f'designs/c{sys.argv[1]}/pid').read().strip()
d=json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/sync/products/{pid}',headers={'Authorization':'Bearer '+T,'User-Agent':'gtc'})))['result']
print(Counter((v['name'].split('/')[-2].strip(),{x['type']:x['id'] for x in v['files']}.get('default'),{x['type']:x['id'] for x in v['files']}.get('back'),v['synced']) for v in d['sync_variants']))
