import sys; sys.path.insert(0,'.')
from designs.lib import *
W=3142
art=Image.open('designs/c508/art_rag4.png').convert('RGBA'); art=art.crop(art.getbbox()); art=art.resize((int(art.width*1.2),int(art.height*1.2)),Image.LANCZOS)
DK=(26,34,66,255); PINK=(244,150,170,255); DPINK=(184,62,98,255); GOLD=(236,170,52,255)
for tag,c1,k1,c2,k2,bg in (('sand',DK,CREAM,DPINK,CREAM,(214,196,160,255)),('navy',CREAM,DK,PINK,DK,(38,50,88,255))):
    h1=line("NO ITINERARY.",'big',0.97,W,c1,k1,kw=27); h2=line("JUST GRAZING.",'bowlby',0.985,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'508-v3-graze-{tag}',{tag:bg}); print(out.size,out.height/out.width)
