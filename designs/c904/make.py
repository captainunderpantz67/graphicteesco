import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('designs/c904/src_print.png').convert('RGBA'); a=im.crop((0,474,im.width,2784)); a=a.crop(a.getbbox())
W=3000; FONT=sys.argv[3] if len(sys.argv)>3 else 'oswald'; AW=float(sys.argv[1]); HF=float(sys.argv[2])
for tag,hf,pf,key in (('ash',(150,96,20,255),(38,50,86,255),CREAM),('light',(238,170,60,255),(232,120,92,255),(20,26,44,255))):
    top=line_same(['WILDLY','LOW'],FONT,HF,W,hf,key,kw=15)
    bot=[line('MAINTENANCE',FONT,1.0,W,pf,key,kw=15)]
    aw=int(W*AW); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'904-wildly-low-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=50)
    th=sum(t.height for t in top)+sum(b.height for b in bot)
    print(tag,'head',[t.width for t in top],'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
