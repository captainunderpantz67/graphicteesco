import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/397-currently-drifting.png').convert('RGBA'); W=im.width
art=im.crop((0,685,W,3450)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.92),int(art.height*0.92)),Image.LANCZOS)
DK=(42,28,22,255); ORG=(224,112,44,255); DORG=(176,76,24,255); TEAL=(26,110,124,255)
for tag,c1,k1,c2,k2,bg in (('sand',DK,CREAM,DORG,CREAM,(214,196,160,255)),('navy',CREAM,DK,(246,150,70,255),DK,(38,50,88,255))):
    h1=line("TODAY'S PLAN:",'bowlby',0.97,W,c1,k1,kw=29); pa=line("HORIZONTAL.",'bowlby',0.985,W,c2,k2,kw=29); pb=pa
    print(tag,'headline px',h1.width,'punch px',pa.width,pb.width,'heights',h1.height,pa.height,pb.height,'art',art.size)
    out=lockup(art,W,[h1],[pa],f'397-v3-plan-{tag}',{tag:bg}); print(out.size,out.height/out.width)
