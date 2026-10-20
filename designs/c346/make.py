import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np
im=Image.open('designs/c346/art_clean.png').convert('RGBA'); W=im.width
a=np.array(im)[:,:,3]; rows=np.where((a>40).any(1))[0]; y0=rows.min(); 
art=im.crop((0,y0,W,3603)); art=art.crop(art.getbbox()); art=art.resize((int(art.width*0.92),int(art.height*0.92)),Image.LANCZOS)
ROSE=(160,56,68,255); GREEN=(58,92,62,255)
for tag,bg in (('sand',(214,196,160,255)),('grey',(160,160,165,255))):
    h1=line("CASSEROLE",'bowlby',0.985,W,ROSE,CREAM,kw=29); h2=line("MINISTRY",'alfa',0.985,W,GREEN,CREAM,kw=27)
    print(tag,'headline px',h1.width,'punch px',h2.width,'heights',h1.height,h2.height,'art',art.size)
    out=lockup(art,W,[h1],[h2],f'346-v2-casserole-{tag}',{tag:bg}); print(out.size,out.height/out.width)
