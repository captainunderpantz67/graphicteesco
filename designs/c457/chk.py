import json,os,sys,urllib.request,collections
H={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'gtc'}
ok=True
for p,exp in (('482511422',{1090931878}),('482648619',{1090932110,1090932129})):
    r=json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com/sync/products/'+p,headers=H)))['result']['sync_variants']
    c=collections.Counter(next((f['id'] for f in v['files'] if f['type'] in('default','front')),0) for v in r)
    print(p,dict(c)); ok&=set(c)<=exp
sys.exit(0 if ok else 1)
