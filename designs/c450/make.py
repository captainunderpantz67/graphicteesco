import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/450-shiny-object-syndrome.png').convert('RGBA'); W=im.width
art=im.crop((0,0,W,2545)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.9),int(art.height*0.9)),Image.LANCZOS)
DK=(26,26,40,255); GOLD=(236,184,60,255); DGOLD=(168,112,16,255)
for tag,c1,k1,c2,k2,bg in (('sand',DK,CREAM,DGOLD,CREAM,(214,196,160,255)),('navy',CREAM,DK,GOLD,DK,(38,50,88,255))):
    h1=line("FINDERS KEEPERS.",'big',0.97,W,c1,k1,kw=27)
    pa=line("SORRY ABOUT",'alfa',0.97,W,c2,k2,kw=27); pb=line("YOUR EARRING.",'alfa',0.97,W,c2,k2,kw=27)
    print(tag,'headline px',h1.width,'punch px',pa.width,pb.width,'heights',h1.height,pa.height,pb.height)
    out=lockup(art,W,[h1],[pa,pb],f'450-v2-earring-{tag}',{tag:bg}); print(out.size,out.height/out.width)
