import sys; sys.path.insert(0,'.')
from designs.lib import *
import numpy as np
im=Image.open('designs/c909/src_print.png').convert('RGBA'); a=im.crop((0,261,im.width,3132)); a=a.crop(a.getbbox())
n=np.array(a).astype(float); r,g,b,al=[n[:,:,i] for i in range(4)]
lum=(r*3+g*6+b)/10; sat=(r-g)
m=n.copy()
# maroon ink -> rose on dark blanks; keep pink/cream highlights; neutral dark fills -> dark charcoal kept (they read as shading)
mar=(al>40)&(sat>35)&(lum<150)
t=np.clip((150-lum)/110,0,1)[:,:,None]   # darker maroon -> brighter rose
rose=np.array([232,112,126.]); light=np.array([246,214,206.])
m[:,:,:3]=np.where(mar[:,:,None], rose*(0.55+0.45*t)+light*(0.0), m[:,:,:3])
neutral=(al>40)&(sat<=35)&(lum<110)
m[neutral,0]=48; m[neutral,1]=44; m[neutral,2]=52
lightart=Image.fromarray(m.astype('uint8'),'RGBA'); lightart.save('designs/c909/art_light.png'); a.save('designs/c909/art_dark.png')
W=3000; FONT=sys.argv[3] if len(sys.argv)>3 else 'bowlby'; COL=1380; GAP=44
for tag,hf,pf,key,art0 in (('ash',(110,20,36,255),(38,50,86,255),CREAM,a),('light',(246,214,206,255),(236,120,134,255),(20,26,44,255),lightart)):
    h=line_same(['DO NOT','SELL MY','BOOKS'],FONT,float(sys.argv[2]),COL,hf,key,kw=15)
    p=line_same(['AT MY','FUNERAL.'],FONT,1.0,COL,pf,key,kw=15)
    sc=1500/a.width*float(sys.argv[1]); art=art0.resize((int(a.width*sc),int(a.height*sc)))
    lines=h+p; th=sum(l.height for l in lines)+GAP*(len(lines)-1)+70
    H=max(art.height,th); out=Image.new('RGBA',(art.width+COL+60,H),(0,0,0,0)); out.alpha_composite(art,(0,(H-art.height)//2))
    y=(H-th)//2
    for i,l in enumerate(lines):
        if i==3: y+=70
        out.alpha_composite(l,(art.width+60+(COL-l.width)//2,y)); y+=l.height+GAP
    out=out.crop(out.getbbox()); out.save(f'docs/print-files/909-books-{tag}.png')
    for tt,c in {'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)}.items():
        bg=Image.new('RGBA',out.size,c); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*out.height/out.width))).save(f'designs/prev_909-books-{tag}_{tt}.png')
    ty=sum(l.height for l in lines)
    print(tag,'head',[l.width for l in h],'punch',[l.width for l in p],'type',ty,'of',out.height,round(ty/out.height,3),'subject',art.width,round(art.width/out.width,2),out.size,'aspect',round(out.height/out.width,2))
