import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np
im=Image.open('designs/c906/src_print.png').convert('RGBA'); a=im.crop((0,385,im.width,2963)); a=a.crop(a.getbbox())
n=np.array(a).astype(int); r,g,b,al=[n[:,:,i] for i in range(4)]
lum=(r*3+g*6+b)//10
navy=(al>40)&(b>r+8)&(lum<115)
m=n.copy(); m[navy,0]=240; m[navy,1]=228; m[navy,2]=200
light=Image.fromarray(m.astype('uint8'),'RGBA'); light.save('designs/c906/art_light.png'); a.save('designs/c906/art_dark.png')
W=3000; FONT=sys.argv[3] if len(sys.argv)>3 else 'big'; AW=float(sys.argv[1]); HF=float(sys.argv[2])
for tag,hf,pf,key,art0 in (('ash',(38,50,86,255),(180,70,40,255),CREAM,a),('light',(246,236,214,255),(238,128,84,255),(20,26,44,255),light)):
    top=[line('SORRY ABOUT',FONT,HF,W,hf,key,kw=15)]
    bot=line_same(['YOUR','WINDSHIELD'],FONT,1.0,W,pf,key,kw=15)
    aw=int(W*AW); art=art0.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'906-windshield-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=50)
    th=sum(t.height for t in top)+sum(b.height for b in bot)
    print(tag,'head',[t.width for t in top],'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
