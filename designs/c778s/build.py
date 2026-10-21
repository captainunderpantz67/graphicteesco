import sys; sys.path.insert(0,'.')
from designs.c_common import *
AW=int(sys.argv[1]); TW=int(sys.argv[2]); GAP=int(sys.argv[3]); SMALL=float(sys.argv[4])
art=load_art('designs/c778s/art_pp.png',minarea=1500); art=art.resize((AW,round(art.height*AW/art.width)),Image.LANCZOS)
W=AW+GAP+TW
for mode,(sc,bc,aa,bg) in {'navy':(CR,(240,130,50,255),halo(art,16),(31,42,77,255)),'sand':((70,40,24,255),(158,64,28,255),art,(226,214,188,255))}.items():
    small=line_same(["CHEWED","THE","CHARGER."],'anton',SMALL,TW,sc,sc,kw=3); big=line_same(["FEEL","GREAT."],'anton',1.0,TW,bc,bc,kw=3)
    lines=small+big; g=34; extra=60
    th=sum(l.height for l in lines)+g*(len(lines)-1)+extra
    H=max(art.height,th); out=Image.new('RGBA',(W,H),(0,0,0,0)); out.alpha_composite(aa,(0,(H-art.height)//2)); y=(H-th)//2
    for i,l in enumerate(lines):
        out.alpha_composite(l,(AW+GAP,y)); y+=l.height+g+(extra if i==len(small)-1 else 0)
    out=out.crop(out.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox()); out.save(f'docs/print-files/778-{mode}.png',dpi=(300,300))
    b=Image.new('RGBA',out.size,bg); b.alpha_composite(out); b.convert('RGB').resize((600,int(600*out.height/out.width))).save(f'designs/prev_778-{mode}_{mode}.png')
    print(mode,out.size,'line widths',[l.width for l in lines],'type sum',sum(l.height for l in lines),'of',out.height,round(sum(l.height for l in lines)/out.height,2),'subject',art.width,'of',out.width,round(art.width/out.width,2))
