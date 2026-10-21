import sys; sys.path.insert(0,'.')
from designs.lib import *
a=Image.open('designs/c897/art_only.png').convert('RGBA')
W=3000; FONT='alfa'; AW=float(sys.argv[1]) if len(sys.argv)>1 else 0.62; HF=float(sys.argv[2]) if len(sys.argv)>2 else 0.7
for tag,hf,pf,key in (('ash',(170,70,30,255),(38,50,86,255),CREAM),('light',(238,150,60,255),(246,236,214,255),(20,26,44,255))):
    top=[line('OOPS.',FONT,HF,W,hf,key,kw=15)]
    bot=[line('ANYWAY.',FONT,1.0,W,pf,key,kw=15)]
    aw=int(W*AW); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'897-oops-anyway-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)},g=40)
    th=top[0].height+sum(b.height for b in bot)
    print(tag,'head',top[0].width,'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,3),'subject',art.width,round(art.width/W,2),o.size,'aspect',round(o.height/o.width,2))
