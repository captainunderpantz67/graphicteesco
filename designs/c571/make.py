import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/571-teacher-zip-back.png').convert('RGBA'); W=im.width
art=im.crop((0,337,W,3159)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.94),int(art.height*0.94)),Image.LANCZOS)
DK=(28,34,60,255); RED=(210,48,36,255); GOLD=(240,170,30,255); DGOLD=(170,104,0,255)
for tag,c1,k1,c2,k2,bg in (('ash',DK,CREAM,RED,CREAM,(200,200,200,255)),('navy',CREAM,DK,GOLD,DK,(38,50,88,255))):
    h1=line("IT'S RAINING.",'big',0.97,W,c1,k1,kw=27); h2=line("SEND COFFEE.",'bowlby',0.985,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'571-v2-coffee-{tag}',{tag:bg}); print(out.size,out.height/out.width)
