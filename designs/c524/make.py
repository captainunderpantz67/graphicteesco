import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('docs/print-files/524-i-said-it-nicely-hoodie.png').convert('RGBA'); W=im.width
art=im.crop((0,352,W,3140)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.78),int(art.height*0.78)),Image.LANCZOS)
DK=(30,26,22,255); GOLD=(236,168,24,255); DGOLD=(176,112,0,255); BRN=(120,56,20,255)
for tag,bg in (('sand',(214,196,160,255)),('pink',(244,214,222,255))):
    h1=line("I SAID IT NICELY",'bowlby',0.97,W,DK,CREAM,kw=29); h2=line("IN MY HEAD.",'alfa',0.985,W,BRN,CREAM,kw=27)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'524-v2-head-{tag}',{tag:bg}); print(out.size,out.height/out.width)
