import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/509-swipe-right-public-land.png').convert('RGBA'); W=im.width
art=Image.open('designs/c509/art_rag.png').convert('RGBA'); art=art.crop(art.getbbox()); art=art.resize((int(art.width*1.05),int(art.height*1.05)),Image.LANCZOS)
DK=(30,40,76,255); CORAL=(248,140,112,255); DCOR=(170,56,44,255)
for tag,c1,k1,c2,k2,bg in (('ash',DK,CREAM,DCOR,CREAM,(200,200,200,255)),('navy',CREAM,DK,CORAL,DK,(38,50,88,255))):
    h1=line("I'M NOT SINGLE.",'big',0.97,W,c1,k1,kw=27); h2=line("I HAVE A CANYON.",'bowlby',0.985,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'509-v3-canyon-{tag}',{tag:bg}); print(out.size)
