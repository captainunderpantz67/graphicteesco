import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/368-lucky-horseshoe-ranch.png').convert('RGBA'); W=im.width
art=im.crop((0,437,W,2474)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*1.3),int(art.height*1.3)),Image.LANCZOS)
DK=(58,34,20,255); RUST=(176,64,40,255); GOLD=(240,176,56,255); DK2=(32,28,24,255)
for tag,c1,k1,c2,k2,bg in (('sandstone',DK,CREAM,RUST,CREAM,(190,160,120,255)),('storm',CREAM,DK2,GOLD,DK2,(86,112,148,255))):
    h1=line("ALL LUCK.",'alfa',0.66,W,c1,k1,kw=25); h2=line("NO HORSE SENSE.",'alfa',0.97,W,c2,k2,kw=25)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'368-v2-luck-{tag}',{tag:bg}); print(out.size,out.height/out.width)
