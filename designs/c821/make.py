import sys; sys.path.insert(0,'.')
from designs.lib import *
a=Image.open('designs/c821/art_t.png').convert('RGBA'); a=a.crop(a.getbbox())
W=3000; NAVY=(38,50,86,255)
for tag,hf,pf,key in (('ash',(171,72,36,255),NAVY,CREAM),('navy',(232,128,76,255),CREAM,NAVY)):
    top=[line('TOOK THE DAY OFF.','bevan',1.0,W,hf,key,kw=15)]
    bot=[line('THE DEER','bevan',1.0,W,pf,key,kw=15),line('DID TOO.','bevan',1.0,W,pf,key,kw=15)]
    aw=int(W*0.5); art=a.resize((aw,int(a.height*aw/a.width)))
    o=lockup(art,W,top,bot,'821-took-the-day-off-'+tag,{'grey':(150,150,150,255),'navy':(26,34,62,255),'ash':(226,226,226,255)},g=50)
    th=top[0].height+sum(b.height for b in bot)
    print(tag,'head',top[0].width,'punch',[b.width for b in bot],'type',th,'of',o.height,round(th/o.height,2),'subject',art.width,round(art.width/W,2),o.size)
