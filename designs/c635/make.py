from PIL import Image, ImageDraw, ImageFont, ImageFilter
import sys
PF='docs/print-files/'; FD='designs/fonts/'
def make(src,fill,name,key=None):
    im=Image.open(PF+src).convert('RGBA'); W=im.width
    head=im.crop((0,0,W,304)); art=im.crop((0,334,W,3424))
    f=ImageFont.truetype(FD+'BowlbyOne-Regular.ttf',900)
    t='AGAIN.'; bb=f.getbbox(t); tw=bb[2]-bb[0]
    size=int(900*(W*0.62)/tw); f=ImageFont.truetype(FD+'BowlbyOne-Regular.ttf',size); bb=f.getbbox(t)
    tw,th=bb[2]-bb[0],bb[3]-bb[1]
    pad=60; lay=Image.new('RGBA',(tw+2*pad,th+2*pad),(0,0,0,0)); d=ImageDraw.Draw(lay)
    if key:
        k=Image.new('L',lay.size,0); ImageDraw.Draw(k).text((pad-bb[0],pad-bb[1]),t,font=f,fill=255)
        k=k.filter(ImageFilter.MaxFilter(25)); lay.paste(Image.new('RGBA',lay.size,key),(0,0),k)
    d.text((pad-bb[0],pad-bb[1]),t,font=f,fill=fill)
    lay=lay.crop(lay.getbbox())
    g=40; H=304+g+art.height+g+lay.height
    out=Image.new('RGBA',(W,H),(0,0,0,0)); out.alpha_composite(head,(0,0)); out.alpha_composite(art,(0,304+g))
    out.alpha_composite(lay,((W-lay.width)//2,304+g+art.height+g))
    out.save(f'docs/print-files/635-{name}.png'); print(name,out.size,'again h',lay.height,'w',lay.width,'head h 304, aspect',H/W)
    bgc=(40,50,80,255) if 'navy' in name else (200,200,200,255)
    bg=Image.new('RGBA',out.size,bgc); bg.alpha_composite(out); bg.convert('RGB').resize((700,int(700*H/W))).save(f'designs/c635/prev_{name}.png')
make('635-out-fished-dark-ink.png',(31,42,74,255),'v2-ash',(240,232,212,255))
make('635-out-fished-light-ink.png',(240,232,206,255),'v2-navy',(140,50,36,255))
