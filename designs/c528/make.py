import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/528-pace-leisurely-zip-hoodie.png').convert('RGBA'); W=im.width
art=im.crop((0,0,W,3530)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.92),int(art.height*0.92)),Image.LANCZOS)
DK=(52,30,24,255); RED=(200,56,48,255); DRED=(168,40,34,255)
for tag,bg in (('ash',(200,200,200,255)),('white',(250,250,250,255))):
    h1=line("ON MY WAY.",'bowlby',0.97,W,DK,CREAM,kw=29); h2=line("EVENTUALLY.",'alfa',0.985,W,DRED,CREAM,kw=27)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'528-v2-eventually-{tag}',{tag:bg}); print(out.size,out.height/out.width)
