import sys; sys.path.insert(0,'.')
from designs.lib import *
from PIL import ImageDraw
im=Image.open('designs/c905/src_print.png').convert('RGBA')
a=im.crop((0,0,1498,im.height))
# redraw the clipped flag tip (pennant points right past the cut)
import numpy as np
n=np.array(a); n[:1500,1465:,3]=0; a=Image.fromarray(n,'RGBA')
d=ImageDraw.Draw(a)
d.polygon([(1491,1806),(1491,1861),(1540,1861)],fill=(60,110,90,255))
bb=a.getbbox(); a=a.crop(bb); a.save('designs/c905/art_only.png'); print('art',a.size)
W=3000; FONT=sys.argv[1] if len(sys.argv)>1 else 'bevan'; COL=1420; CX=W-COL//2-20
def block(tag,hf,pf,key):
    h=line_same(['I ONLY','GOLF'],FONT,float(sys.argv[2]) if len(sys.argv)>2 else 0.82,COL,hf,key,kw=15)
    p=line_same(['FOR THE','OUTFITS'],FONT,1.0,COL,pf,key,kw=15)
    return h,p
for tag,hf,pf,key in (('ash',(30,92,62,255),(180,36,96,255),CREAM),('light',(124,196,150,255),(246,110,168,255),(20,26,44,255))):
    h,p=block(tag,hf,pf,key)
    lines=h+p; gap=40; th=sum(l.height for l in lines)+gap*(len(lines)-1)+60
    H=max(a.height,th); out=Image.new('RGBA',(W,H),(0,0,0,0)); out.alpha_composite(a,(20,(H-a.height)//2))
    y=(H-th)//2
    for i,l in enumerate(lines):
        if i==2: y+=60
        out.alpha_composite(l,(W-COL-20+(COL-l.width)//2,y)); y+=l.height+gap
    out=out.crop(out.getbbox()); out.save(f'docs/print-files/905-golf-outfits-{tag}.png')
    for t,c in {'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)}.items():
        bg=Image.new('RGBA',out.size,c); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*out.height/out.width))).save(f'designs/prev_905-golf-outfits-{tag}_{t}.png')
    print(tag,'head',[l.width for l in h],'punch',[l.width for l in p],'type',sum(l.height for l in lines),'of',out.height,round(sum(l.height for l in lines)/out.height,3),'subject',a.width,round(a.width/out.width,2),out.size,'aspect',round(out.height/out.width,2))
