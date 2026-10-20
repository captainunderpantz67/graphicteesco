import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/402-professionally-chilling.png').convert('RGBA'); W=im.width
art=im.crop((0,323,W,2813)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.92),int(art.height*0.92)),Image.LANCZOS)
NAVY=(28,44,90,255); RED=(206,70,48,255); DRED=(170,48,32,255)
for tag,c1,k1,c2,k2,bg in (('sandstone',NAVY,CREAM,DRED,CREAM,(190,160,120,255)),('storm',CREAM,NAVY,(255,150,110,255),NAVY,(86,112,148,255))):
    h1=line("SIX HOURS.",'bowlby',0.97,W,c1,k1,kw=29); pa,pb=line_same(["STARING","AT A HOLE."],'alfa',0.985,W,c2,k2,kw=27)
    print(tag,'headline px',h1.width,'punch px',pa.width,pb.width,'heights',h1.height,pa.height,pb.height,'art',art.size)
    out=lockup(art,W,[h1],[pa,pb],f'402-v2-hole-{tag}',{tag:bg}); print(out.size,out.height/out.width)
