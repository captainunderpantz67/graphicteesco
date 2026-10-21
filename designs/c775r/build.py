import sys; sys.path.insert(0,'.')
from designs.c_common import *
AW=int(sys.argv[1]); TW=int(sys.argv[2]); GAP=int(sys.argv[3]); SMALL=float(sys.argv[4]) if len(sys.argv)>4 else 0.62
art=load_art('designs/c775r/art_pp.png',minarea=1500); art=art.resize((AW,round(art.height*AW/art.width)),Image.LANCZOS)
W=AW+GAP+TW
for mode,(sc,bc,aa,bg) in {'navy':(CR,(190,170,215,255),halo(art,16),(31,42,77,255)),'sand':((74,28,84,255),(52,62,74,255),art,(226,214,188,255))}.items():
    small=line_same(["SLEEPS","ALL DAY."],'anton',SMALL,TW,sc,sc,kw=3); big=line_same(["JUDGES","ALL NIGHT."],'anton',1.0,TW,bc,bc,kw=3)
    lines=small+big; g=36
    th=sum(l.height for l in lines)+g*(len(lines)-1)+30  # extra 30 between the pairs
    H=max(art.height,th)
    out=Image.new('RGBA',(W,H),(0,0,0,0)); out.alpha_composite(aa,(0,0)); y=0
    for i,l in enumerate(lines):
        out.alpha_composite(l,(AW+GAP,y)); y+=l.height+g+(30 if i==1 else 0)
    out=out.crop(out.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox()); out.save(f'docs/print-files/775-{mode}.png',dpi=(300,300))
    b=Image.new('RGBA',out.size,bg); b.alpha_composite(out); b.convert('RGB').resize((600,int(600*out.height/out.width))).save(f'designs/prev_775-{mode}_{mode}.png')
    print(mode,out.size,'line widths',[l.width for l in lines],'type sum',sum(l.height for l in lines),'block h',th,'of',out.height,'subject',art.width,'of',out.width,round(art.width/out.width,2))
