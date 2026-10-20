import os,json,urllib.request
H={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'gtc'}
r=json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com/sync/products/482392859',headers=H)))['result']
v=r['sync_variants']
ok=[x for x in v if any(f['id']==1090187258 for f in x['files'] if f.get('type')=='default')]
print(len(ok),len(v))
