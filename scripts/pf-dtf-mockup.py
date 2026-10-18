#!/usr/bin/env python3
"""pf-dtf-mockup.py <variant_id> <back_url> <chest_url> <out.json>: v2 mockup task for the 4740 half zip (technique dtfilm), back_large_dtf + chest_left_dtf, flat front (30771) + flat back (30772); writes {variant: {style: url}}."""
import os,sys,json,time,urllib.request,urllib.error
T=os.environ['PRINTFUL_TOKEN']
def call(m,p,b=None):
    for _ in range(10):
        try: return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com'+p,method=m,data=json.dumps(b).encode() if b else None,headers={'Authorization':'Bearer '+T,'Content-Type':'application/json','User-Agent':'gtc'}),timeout=60))
        except urllib.error.HTTPError as e:
            if e.code==429: time.sleep(int(e.headers.get('Retry-After',30))+2); continue
            raise Exception(f'{e.code} {e.read()[:600]}')
vid,back,chest,out=sys.argv[1:5]
def pl(n,u): return {'placement':n,'technique':'dtfilm','layers':[{'type':'file','url':u}]}
r=call('POST','/v2/mockup-tasks',{'format':'jpg','products':[{'source':'catalog','catalog_product_id':1631,'catalog_variant_ids':[int(vid)],'mockup_style_ids':[30771,30772],'placements':[pl('back_large_dtf',back),pl('chest_left_dtf',chest)]}]})
tid=r['data'][0]['id']
for _ in range(60):
    time.sleep(5); d=call('GET',f'/v2/mockup-tasks?id={tid}')['data'][0]
    if d['status']=='completed': break
    if d['status']=='failed': raise Exception(d['failure_reasons'])
res={}
for c in d['catalog_variant_mockups']:
    for m in c['mockups']: res.setdefault(str(c['catalog_variant_id']),{})[str(m['style_id'])]=m['mockup_url']
json.dump(res,open(out,'w'),indent=1);print(json.dumps(res)[:400])
