from PIL import Image, ImageDraw, ImageFont
import sys
art=Image.open('designs/c507/art_rag5.png').convert('RGBA'); art=art.crop(art.getbbox())
W=int(sys.argv[1]); AWF=float(sys.argv[2])
arts=art.resize((int(W*AWF),int(art.height*W*AWF/art.width)),Image.LANCZOS); AH=arts.height
FD='designs/fonts/'
def line(text,size,maxw,fill,track=0.0):
    while True:
        f=ImageFont.truetype(FD+'Fraunces[SOFT,WONK,opsz,wght].ttf',size); f.set_variation_by_axes([36,900,30,0])
        adv=[f.getlength(c) for c in text]; t=int(size*track)
        tot=int(sum(adv)+t*(len(text)-1))
        if tot<=maxw: break
        size=int(size*0.98)
    asc,desc=f.getmetrics()
    im=Image.new('RGBA',(tot+200,asc+desc+100),(0,0,0,0)); d=ImageDraw.Draw(im); x=100
    for c,a in zip(text,adv):
        d.text((x,50),c,font=f,fill=fill); x+=a+t
    return im.crop(im.getbbox())
def build(name,c1,c2,c3):
    h1=line('MY TYPE?',900,int(W*AWF*0.95),c1,0.02)
    h2=line('GEOTHERMALLY',900,W,c2,0.0)
    h3=line('ACTIVE.',900,int(W*0.85),c3,0.03)
    print(name,'scene',arts.size,'headline GEOTHERMALLY px',h2.width,'MY TYPE? px',h1.width,'ACTIVE px',h3.width)
    g=30
    H=h1.height+g+AH+g+h2.height+g+h3.height
    out=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
    for im in (h1,):
        out.alpha_composite(im,((W-im.width)//2,y)); y+=im.height+g
    out.alpha_composite(arts,((W-arts.width)//2,y)); y+=AH+g
    out.alpha_composite(h2,((W-h2.width)//2,y)); y+=h2.height+g
    out.alpha_composite(h3,((W-h3.width)//2,y))
    out.save(f'designs/c507/v5_{name}.png'); print(out.size,'aspect',H/W)
    for tag,bgc in (('dark',(38,50,88,255)),('light',(206,190,170,255))):
        bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c507/prev5_{name}_{tag}.png')
CORAL=(232,115,90,255); CREAM=(243,231,207,255); GOLD=(236,170,60,255); NAVY=(28,40,78,255); RUST=(176,72,48,255); TEAL=(36,108,128,255)
build('print_dark',CORAL,CREAM,GOLD)
build('print_light',RUST,NAVY,TEAL)
