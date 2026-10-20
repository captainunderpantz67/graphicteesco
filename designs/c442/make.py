import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/442-calculated-mostly.png').convert('RGBA'); W=im.width
art=im.crop((0,0,W,3050)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.9),int(art.height*0.9)),Image.LANCZOS)
DK=(30,40,70,255); GOLD=(236,176,60,255); BROWN=(96,62,20,255); RED=(168,48,34,255)
for tag,c1,k1,c2,k2,bg in (('ash',DK,CREAM,RED,CREAM,(200,200,200,255)),('navy',CREAM,DK,GOLD,DK,(38,50,88,255))):
    h1=line("SORRY ABOUT",'alfa',0.97,W,c1,k1,kw=27); h2=line("YOUR PAWN.",'alfa',0.985,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'442-v2-pawn-{tag}',{tag:bg}); print(out.size)
