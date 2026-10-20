import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/398-fine-dumpster-dining.png').convert('RGBA'); W=im.width
art=im.crop((0,468,W,2466)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*1.25),int(art.height*1.25)),Image.LANCZOS)
DK=(32,44,60,255); ORG=(232,150,40,255); DORG=(184,100,16,255)
for tag,c1,k1,c2,k2,bg in (('sand',DK,CREAM,DORG,CREAM,(214,196,160,255)),('navy',CREAM,DK,ORG,DK,(38,50,88,255))):
    h1=line("TABLE FOR ONE.",'bowlby',0.97,W,c1,k1,kw=29); h2=line("IT'S A DUMPSTER.",'alfa',0.985,W,c2,k2,kw=27)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'398-v2-table-{tag}',{tag:bg}); print(out.size,out.height/out.width)
