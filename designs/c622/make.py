from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,52,44,255); GREEN=(40,72,42,255); CREAM=(246,236,214,255); BROWN=(58,36,24,255)
def line(text,font,wfrac,W,fill,key,kw=31,track=0):
    f=ImageFont.truetype(FD+font,800); adv=[f.getlength(c) for c in text]
    tot=sum(adv)+track*(len(text)-1); size=int(800*W*wfrac/tot)
    f=ImageFont.truetype(FD+font,size); adv=[f.getlength(c) for c in text]; tr=int(track*size/800)
    asc,desc=f.getmetrics(); tot=int(sum(adv)+tr*(len(text)-1))
    pad=80; im=Image.new('RGBA',(tot+2*pad,asc+desc+2*pad),(0,0,0,0))
    def draw(layer,col):
        d=ImageDraw.Draw(layer); x=pad
        for c,a in zip(text,adv): d.text((x,pad),c,font=f,fill=col); x+=a+tr
    k=Image.new('L',im.size,0); d=ImageDraw.Draw(k); x=pad
    for c,a in zip(text,adv): d.text((x,pad),c,font=f,fill=255); x+=a+tr
    k=k.filter(ImageFilter.MaxFilter(kw)); im.paste(Image.new('RGBA',im.size,key),(0,0),k)
    draw(im,fill)
    return im.crop(im.getbbox())
src=Image.open('docs/print-files/622-army-golf-back.png').convert('RGBA')
W=src.width; head=src.crop((0,0,W,270)); art=src.crop((0,310,W,2974))
h2=line("I PLAY ARMY GOLF.",'Anton-Regular.ttf',0.82,W,GREEN,CREAM,kw=25,track=14)
print('h2',h2.size,'ratio h2/head',h2.height/270)
g=34; H=270+g+art.height+g+h2.height
out=Image.new('RGBA',(W,H),(0,0,0,0))
out.alpha_composite(head,(0,0)); y=270+g
out.alpha_composite(art,(0,y)); y+=art.height+g
out.alpha_composite(h2,((W-h2.width)//2,y))
out.save('docs/print-files/622-v2-army-golf.png'); print(out.size,H/W)
for n,c in (('ash',(200,200,200,255)),('white',(250,250,250,255))):
    bg=Image.new('RGBA',out.size,c); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save(f'designs/c622/prev_{n}.png')
