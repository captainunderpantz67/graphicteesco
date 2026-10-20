import os,json,subprocess,sys,urllib.request
H={'Authorization':'Bearer '+os.environ['PRINTFUL_TOKEN'],'User-Agent':'g'}
def f(i): return json.load(urllib.request.urlopen(urllib.request.Request(f'https://api.printful.com/files/{i}',headers=H)))['result']
F={'d':f(1090311837),'l':f(1090311897)}
cols=[('Black','d',4017),('Navy','d',4112),('Dark_Grey_Heather','d',8461),('Heather_Forest','d',8489),('Maroon','d',4107),('Natural','l',14683),('Ash','l',4027),('Athletic_Heather','l',6949)]
env=dict(os.environ,FW='1650',TOP='75')
for c,k,v in cols:
    x=F[k]
    subprocess.run([sys.executable,'scripts/pf-mockup.py','71',x['url'],str(x['width']),str(x['height']),'-',str(v),f'designs/e656/m/mock_{c}.json'],env=env,check=True,stdout=subprocess.DEVNULL)
    u=json.load(open(f'designs/e656/m/mock_{c}.json'))[str(v)]['front:main']
    open(f'designs/e656/m/m_{c}.jpg','wb').write(urllib.request.urlopen(u).read()); open(f'designs/e656/m/murl_{c}.txt','w').write(u); print(c,u,flush=True)
