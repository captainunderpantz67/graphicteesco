import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/405-snack-hoard.png').convert('RGBA'); W=im.width
art=im.crop((0,0,W,2268)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*1.12),int(art.height*1.12)),Image.LANCZOS)
DK=(24,60,64,255); RED=(200,50,38,255); TEAL=(0,150,140,255)
for tag,c1,k1,c2,k2,bg in (('sand',DK,CREAM,RED,CREAM,(214,196,160,255)),('navy',CREAM,DK,(250,196,70,255),DK,(38,50,88,255))):
    h1=line("GOLD IS OVERRATED.",'big',0.97,W,c1,k1,kw=27); h2=line("I PREFER DUMPLINGS.",'bowlby',0.985,W,c2,k2,kw=29)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'405-v2-gold-{tag}',{tag:bg}); print(out.size,out.height/out.width)
