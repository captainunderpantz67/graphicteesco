import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/364-orange-slice-manager.png').convert('RGBA'); W=im.width
art=im.crop((0,396,W,3040)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.95),int(art.height*0.95)),Image.LANCZOS)
DK=(28,36,70,255); ORG=(240,120,40,255); DORG=(196,84,16,255)
for tag,c1,k1,c2,k2,bg in (('ash',DK,CREAM,DORG,CREAM,(200,200,200,255)),('navy',CREAM,DK,ORG,DK,(38,50,88,255))):
    h1=line("HALFTIME SNACKS:",'big',0.97,W,c1,k1,kw=27); h2=line("MY ONLY JOB.",'bowlby',0.985,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'364-v2-halftime-{tag}',{tag:bg}); print(out.size,out.height/out.width)
