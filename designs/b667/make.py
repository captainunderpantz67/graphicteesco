import sys
from PIL import Image, ImageDraw, ImageFont
import numpy as np
W,H=7350,2550
BG=(243,231,207)
art=Image.open('designs/first5/sisyphus-print.png').convert('RGBA')
art=art.crop((0,300,art.width,2850))
bb=art.getchannel('A').point(lambda v:255 if v>10 else 0).getbbox(); art=art.crop(bb)
mh=520; art=art.resize((round(art.width*mh/art.height),mh),Image.LANCZOS)
cv=Image.new('RGBA',(W,H),BG+(255,))
# text zone (safe area of printfile, in px)
zx0,zx1,zy0,zy1=2500,4850,760,1900
stepx,stepy=art.width+260,mh+170
r=0
for y in range(380,H-300,stepy):
    off=(stepx//2) if r%2 else 0
    for x in range(-off,W,stepx):
        cx0,cx1=x,x+art.width
        if cx1>zx0-120 and cx0<zx1+120 and y+mh>zy0-100 and y<zy1+100: continue
        cv.alpha_composite(art,(x,y))
    r+=1
d=ImageDraw.Draw(cv)
f=ImageFont.truetype('designs/fonts/Cinzel[wght].ttf',560); f.set_variation_by_axes([900])
ink=(26,22,20)
def line(t,cy,fill,size):
    ff=ImageFont.truetype('designs/fonts/Cinzel[wght].ttf',size); ff.set_variation_by_axes([900])
    w=d.textlength(t,font=ff,features=None)
    while w>2000:
        size-=10; ff=ImageFont.truetype('designs/fonts/Cinzel[wght].ttf',size); ff.set_variation_by_axes([900]); w=d.textlength(t,font=ff)
    d.text(((W-w)/2,cy),t,font=ff,fill=fill,anchor='lm'); return size
sz=[line(t,y,ink,300) for t,y in (('SISYPHUS',820,),('HAD BAD',1130,),('PROGRAMMING',1440,))]
print(sz)
cv.convert('RGB').save('designs/b667/boxer-print.png')
cv.convert('RGB').resize((1470,510)).save('designs/b667/preview.png')
