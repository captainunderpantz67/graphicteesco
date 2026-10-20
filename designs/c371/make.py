import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/371-sunshine-with-boundaries.png').convert('RGBA'); W=im.width
art=im.crop((0,0,W,2610)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.92),int(art.height*0.92)),Image.LANCZOS)
BR=(72,44,16,255); GOLD=(240,176,36,255); DGOLD=(176,112,8,255)
for tag,c1,k1,c2,k2,bg in (('ash',BR,CREAM,DGOLD,CREAM,(200,200,200,255)),('navy',CREAM,BR,GOLD,BR,(38,50,88,255))):
    h1=line("SUNSHINE.",'bowlby',0.97,W,c1,k1,kw=29); pa,pb=line_same(["DO NOT TOUCH","THE PETALS."],'big',0.985,W,c2,k2,kw=27)
    print(tag,'headline px',h1.width,'punch px',pa.width,pb.width,'heights',h1.height,pa.height,pb.height,'art',art.size)
    out=lockup(art,W,[h1],[pa,pb],f'371-v3-petals-{tag}',{tag:bg}); print(out.size,out.height/out.width)
