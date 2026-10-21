import sys; sys.path.insert(0,'.')
from designs.lib import *
im=Image.open('designs/c886/back.png').convert('RGBA'); a=im.crop((0,0,im.width,2654)); a=a.crop(a.getbbox())
W=3000; FONT=sys.argv[3] if len(sys.argv)>3 else 'graduate'; AW=float(sys.argv[1]); HF=float(sys.argv[2])
for tag,hf,pf,key in (('ash',(40,96,70,255),(38,50,86,255),CREAM),('light',(244,170,190,255),(246,236,214,255),(20,26,44,255))):
    top=[line('NOT TODAY.',FONT,HF,W,hf,key,kw=15)]
    bot=line_same(["I'M",'MOISTURIZING.'],FONT,1.0,W,pf,key,kw=15)
    aw=int(W*AW); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'886-not-today-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=50)
    th=sum(t.height for t in top)+sum(b.height for b in bot)
    print(tag,'head',[t.width for t in top],'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
