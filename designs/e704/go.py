import os, sys, json, subprocess, urllib.request, time
PID='483426030'; CAT='317'; d='designs/e704'; py=sys.executable
H={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'gtc'}
def get(p): return json.load(urllib.request.urlopen(urllib.request.Request('https://api.printful.com'+p,headers=H),timeout=60))['result']
ids={}
for k in ('light',):
    png=f'{d}/print_{k}.png'
    url=subprocess.check_output([py,'scripts/fal-host.py',png],text=True).strip()
    fid=subprocess.check_output([py,'scripts/pf-sync.py','upload',url,os.path.basename(png)],text=True).strip()
    for _ in range(30):
        f=get(f'/files/{fid}')
        if f.get('width') and f.get('status')=='ok': break
        time.sleep(4)
    ids[k]=(fid,f['width'],f['height'],f['url']); print(k,ids[k],flush=True)
json.dump(ids,open(f'{d}/ids.json','w'))
dk=[]; lt=['Storm']
BL='1080398177'
sh=['cd /home/user/graphicteesco','export FW=1500 TOP=75 FORCE=1']
for g,cs in (('light',lt),):
    for c in cs: sh.append(f"ONLY='/ {c} /' {py} scripts/pf-sync.py setfile {PID} {ids[g][0]} {BL} >> {d}/s.log 2>&1")
sh.append('export FORCE=0')
sh.append('for i in 1 2 3; do '+' ; '.join(f"ONLY='/ {c} /' {py} scripts/pf-sync.py setfile {PID} {ids[g][0]} {BL} >> {d}/s.log 2>&1" for g,cs in (('light',lt),) for c in cs)+'; done')
sh.append(f'touch {d}/sync_done')
open(f'{d}/sync.sh','w').write('\n'.join(sh)+'\n')
subprocess.Popen(['bash',f'{d}/sync.sh'],start_new_session=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
vs=get(f'/sync/products/{PID}')['sync_variants']; env=dict(os.environ,FW='1500',TOP='75')
for g,cs in (('light',lt),):
    fid,w,h,u=ids[g]
    for c in cs:
        v=next(v for v in vs if f' / {c} / M' in v['name'] or f'{c} / M' in v['name'])
        subprocess.run([py,'scripts/pf-mockup.py',CAT,u,str(w),str(h),'-',str(v['variant_id']),f'{d}/m/mk_{c}.json'],env=env,check=True,stdout=subprocess.DEVNULL)
        m=json.load(open(f'{d}/m/mk_{c}.json')); print(c,list(m.values())[0]['front:main'],flush=True)
print('ALLDONE')
