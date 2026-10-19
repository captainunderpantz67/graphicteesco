import os,sys,json,time,urllib.request,urllib.error
T=os.environ['PRINTFUL_TOKEN']
def call(m,p,b=None):
    for _ in range(10):
        try: return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com'+p,method=m,data=json.dumps(b).encode() if b else None,headers={'Authorization':'Bearer '+T,'Content-Type':'application/json','User-Agent':'gtc'}),timeout=60))['result']
        except urllib.error.HTTPError as e:
            if e.code==429: time.sleep(int(e.headers.get('Retry-After',30))+2); continue
            raise Exception(f'{e.code} {e.read()[:300]}')
url,out=sys.argv[1:3]
t=call('POST','/mockup-generator/create-task/881',{'variant_ids':[22782],'format':'jpg','files':[{'placement':'front','image_url':url,'position':{'area_width':954,'area_height':954,'width':954,'height':954,'top':0,'left':0}}]})
while True:
    time.sleep(8); r=call('GET','/mockup-generator/task?task_key='+t['task_key'])
    if r['status']=='completed': break
    if r['status']=='failed': sys.exit('failed '+json.dumps(r)[:300])
urls=[]
for m in r['mockups']:
    urls.append(m['mockup_url'])
    for e in m.get('extra',[]): urls.append(e['url'])
json.dump(urls,open(out,'w'),indent=1);print(urls)
