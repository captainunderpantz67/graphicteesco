from PIL import Image, ImageDraw, ImageFont
import sys
src=Image.open('docs/print-files/487-university-of-staying-in.png').convert('RGBA')
art=src.crop((0,845,3370,3175)); art=art.crop(art.getbbox())
FD='designs/fonts/'
def line(text,font,size,maxw,fill,track=0.0,wght=None):
    while True:
        f=ImageFont.truetype(FD+font,size)
        if wght:
            f.set_variation_by_axes([36,wght,30,0]) if 'Fraunces' in font else f.set_variation_by_axes([wght])
        adv=[f.getlength(c) for c in text]; t=int(size*track)
        tot=int(sum(adv)+t*(len(text)-1))
        if tot<=maxw: break
        size=int(size*0.97)
    asc,desc=f.getmetrics()
    im=Image.new('RGBA',(tot+200,asc+desc+100),(0,0,0,0)); d=ImageDraw.Draw(im); x=100
    for c,a in zip(text,adv):
        d.text((x,50),c,font=f,fill=fill); x+=a+t
    return im.crop(im.getbbox())
def build(name,c1,c2,c3):
    W=art.width
    h2=line('STAYING IN','Fraunces[SOFT,WONK,opsz,wght].ttf',1400,int(W*1.0),c2,0.0,900)
    h1=line('UNIVERSITY OF','Fraunces[SOFT,WONK,opsz,wght].ttf',900,int(W*1.0),c1,0.02,900)
    h3=line('EST. WHENEVER.','Fraunces[SOFT,WONK,opsz,wght].ttf',700,int(W*0.78),c3,0.04,900)
    print(name,art.size,h1.size,h2.size,h3.size,'h1/h2',h1.height/h2.height)
    g=70
    H=h1.height+g+h2.height+110+art.height+110+h3.height
    out=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
    out.alpha_composite(h1,((W-h1.width)//2,y)); y+=h1.height+g
    out.alpha_composite(h2,((W-h2.width)//2,y)); y+=h2.height+110
    out.alpha_composite(art,(0,y)); y+=art.height+110
    out.alpha_composite(h3,((W-h3.width)//2,y))
    out.save(f'designs/c487/{name}.png'); print(out.size)
    for tag,bgc in (('dark',(38,50,88,255)),('light',(236,224,200,255))):
        bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c487/prev_{name}_{tag}.png')
CREAM=(243,231,207,255); ORANGE=(226,138,70,255); NAVY=(30,40,78,255); RUST=(170,78,42,255)
build('print_light',CREAM,ORANGE,CREAM)
build('print_dark',NAVY,RUST,NAVY)
