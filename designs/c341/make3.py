from PIL import Image, ImageDraw, ImageFilter
import sys, math, random
sys.path.insert(0,'designs/c341')
exec(open('designs/c341/make.py').read().split('def build')[0])
def cloud(w,h,fill,hl,ol=16):
    S=2; im=Image.new('RGBA',(w*S,h*S),(0,0,0,0)); d=ImageDraw.Draw(im)
    # puffs: (cx,cy,r) in fractions
    puffs=[(.20,.66,.20),(.38,.40,.27),(.62,.36,.30),(.80,.62,.21),(.50,.70,.26)]
    def shape(draw,grow,col):
        for cx,cy,r in puffs:
            R=r*h*S+grow; x=cx*w*S; y=cy*h*S
            draw.ellipse((x-R*1.05,y-R,x+R*1.05,y+R),fill=col)
        draw.rounded_rectangle((.20*w*S-0.2*h*S+0,.62*h*S,.80*w*S+0.2*h*S,.96*h*S),radius=int(.2*h*S),fill=col) if False else None
    shape(d,ol*S,(26,22,22,255)); inner=Image.new('RGBA',im.size,(0,0,0,0)); shape(ImageDraw.Draw(inner),0,fill)
    im.alpha_composite(inner)
    # highlight arcs
    d=ImageDraw.Draw(im)
    for cx,cy,r in puffs[1:3]:
        R=r*h*S*0.78; x=cx*w*S; y=cy*h*S
        d.arc((x-R,y-R,x+R,y+R),200,260,fill=hl,width=int(10*S))
    return im.resize((w,h),Image.LANCZOS)
def drop(w,h,col):
    S=3; im=Image.new('RGBA',(w*S,h*S),(0,0,0,0)); d=ImageDraw.Draw(im)
    def sh(g,c):
        d.polygon([(w*S/2,0+(-g)),(w*S/2-(w*S/2+g),h*S*0.62),(w*S/2+(w*S/2+g),h*S*0.62)],fill=c)
        d.ellipse((-g,h*S*0.62-w*S/2-g*0+0-g*0,w*S+g,h*S+g),fill=c)
    sh(10*S//2,(26,22,22,255)); sh(0,col)
    return im.resize((w,h),Image.LANCZOS)
def art_with_cloud(navy):
    im=Image.open('docs/print-files/341-smiling-through-it.png').convert('RGBA'); W=im.width
    art=im.crop((0,0,W,2705)); px=art.load()
    a=art.split()[3]; z=Image.new('L',(1050,560),0); a.paste(z,(1250,0))   # erase old cloud + scribble
    art.putalpha(a)
    cw,chh=900,420; cx=1758
    cl=cloud(cw,chh,(70,96,128,255) if not navy else (112,142,178,255),(210,226,240,255))
    if navy:
        al=cl.split()[3].filter(ImageFilter.MaxFilter(21)); halo=Image.new('RGBA',cl.size,CREAM); big=Image.new('RGBA',(cw+40,chh+40),(0,0,0,0)); big.paste(halo,(20,20),al); big.alpha_composite(cl,(20,20)); cl=big
    ox=cx-cl.width//2; art.alpha_composite(cl,(ox,10))
    dr=drop(70,130,(86,160,214,255))
    for i,(dx,dy) in enumerate([(-250,0),(-95,40),(70,0),(235,45)]):
        art.alpha_composite(dr,(cx+dx-35,10+chh+30+dy))
    return art
def build3(tag,c1,k1,c2,k2,bgc,navy):
    art=art_with_cloud(navy); W=art.width; art=art.crop(art.getbbox()); sc=0.92; art=art.resize((int(art.width*sc),int(art.height*sc)),Image.LANCZOS)
    h1=line("I'M FINE.",'Fraunces[SOFT,WONK,opsz,wght].ttf',0.80,W,c1,k1,kw=31,var=[9,900,100,1])
    h2b=line("LITTLE RAIN.",'Bevan-Regular.ttf',0.84,W,c2,k2,kw=21,track=10)
    sz=h2b.height
    # JUST A at the same type size
    h2a=line("JUST A",'Bevan-Regular.ttf',0.84*6/12*1.0,W,c2,k2,kw=21,track=10)
    s=h2b.height/ h2a.height; 
    print(tag,'h1',h1.size,'h2a',h2a.size,'h2b',h2b.size,'punch/headline width',h2b.width/h1.width)
    g=30; H=h1.height+g+art.height+g+h2a.height+g//2+h2b.height
    out=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
    out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+g
    out.alpha_composite(art,((W-art.width)//2,y)); y+=art.height+g
    out.alpha_composite(h2a,((W-h2a.width)//2,y)); y+=h2a.height+g//2
    out.alpha_composite(h2b,((W-h2b.width)//2,y))
    out.save(f'docs/print-files/341-v3-fine-{tag}.png'); print(out.size,H/W)
    bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c341/prev3_{tag}.png')
build3('dust',PLUM,CREAM,SAGE,CREAM,(200,184,170,255),False)
build3('navy',HPINK,NAVY:=(30,42,84,255),CREAM,NAVY,(38,50,88,255),True)
