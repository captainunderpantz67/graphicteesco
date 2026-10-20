import sys; sys.path.insert(0,'.')
from PIL import Image, ImageDraw, ImageFont
import numpy as np
FD='designs/fonts/'
src=Image.open('docs/print-files/468-thriving-technically-green.png').convert('RGBA')
frog=src.crop((0,0,1200,725)); frog=frog.crop(frog.getbbox())
def solid(im,rgb):
    a=np.array(im); a[...,0],a[...,1],a[...,2]=rgb; return Image.fromarray(a)
def text(t,font,W):
    f=ImageFont.truetype(FD+font,400); w=f.getlength(t); size=int(400*W/w); f=ImageFont.truetype(FD+font,size)
    asc,desc=f.getmetrics(); im=Image.new('L',(int(f.getlength(t))+60,asc+desc+60),0); ImageDraw.Draw(im).text((30,30),t,font=f,fill=255)
    return im.crop(im.getbbox())
def build(name,rgb):
    W=1100
    t1=text("NOT ON FIRE.",'BowlbyOne-Regular.ttf',W); t2=text("THAT'S A WIN.",'BowlbyOne-Regular.ttf',W)
    fr=frog.resize((int(frog.width*600/frog.height),600),Image.LANCZOS)
    H=fr.height+40+t1.height+30+t2.height
    out=Image.new('RGBA',(1200,H+40),(0,0,0,0)); y=20
    out.alpha_composite(solid(fr,rgb),((1200-fr.width)//2,y)); y+=fr.height+40
    for t in (t1,t2):
        m=Image.new('RGBA',t.size,rgb+(255,)); out.paste(m,((1200-t.width)//2,y),t); y+=t.height+30
    print(name,'size',out.size,'caps heights px',t1.height,t2.height,'=',round(t1.height/300,2),'in; widths',t1.width,t2.width,'frog',fr.size)
    out.save(f'docs/print-files/468-v2-{name}.png')
    bg=Image.new('RGBA',out.size,(220,205,170,255) if name=='green' else (30,40,80,255)); bg.alpha_composite(out); bg.convert('RGB').save(f'designs/c468/prev_{name}.png')
build('green',(0,120,80)); build('white',(255,255,255))
