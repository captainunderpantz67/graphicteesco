import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np
im=Image.open('designs/c895/src_print.png').convert('RGBA'); a=im.crop((0,728,im.width,2578)); a=a.crop(a.getbbox())
n=np.array(a).astype(float); s=np.clip((n[:,:,0]-n[:,:,1])/110,0,1)[:,:,None]
navy=np.array([38,50,86]); red=np.array([150,36,48])
n[:,:,:3]=navy*(1-s)+red*s; dark=Image.fromarray(n.astype('uint8'),'RGBA')
W=3000; FONT='interblack'; AW=float(sys.argv[1]); HF=float(sys.argv[2])
for tag,hf,pf,key,art0 in (('ash',(150,36,48,255),(38,50,86,255),CREAM,dark),('light',(246,236,214,255),(228,110,92,255),(20,26,44,255),a)):
    top=[line('CALM FACE.',FONT,HF,W,hf,key,kw=15)]
    bot=[line('LOUD BRAIN.',FONT,1.0,W,pf,key,kw=15)]
    aw=int(W*AW); art=art0.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'895-calm-face-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=60)
    th=top[0].height+sum(b.height for b in bot)
    print(tag,'head',top[0].width,'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
