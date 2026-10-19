from PIL import Image, ImageDraw, ImageFont
import sys
art=Image.open('designs/a434/art.png').convert('RGBA'); art=art.crop(art.getbbox())
def line(text,font,size,maxw,fill):
    while True:
        f=ImageFont.truetype('designs/fonts/'+font,size)
        adv=[f.getlength(c) for c in text]; tot=int(sum(adv))
        if tot<=maxw: break
        size=int(size*0.98)
    asc,desc=f.getmetrics()
    im=Image.new('RGBA',(tot+300,asc+desc+200),(0,0,0,0)); d=ImageDraw.Draw(im); x=150
    for c,a in zip(text,adv):
        d.text((x,100),c,font=f,fill=fill); x+=a
    return im.crop(im.getbbox())
def build(name,c1,c2):
    W=3250
    gap=80
    h1=line('SHARING IS NOT','BowlbyOne-Regular.ttf',900,W,c1)
    h2=line('MY LOVE LANGUAGE.','Anton-Regular.ttf',900,W,c2)
    ah=int(1.09*W-h1.height-h2.height-2*gap); aw=int(ah*art.width/art.height)
    a2=art.resize((aw,ah),Image.LANCZOS)
    H=h1.height+gap+ah+gap+h2.height
    out=Image.new('RGBA',(W,H),(0,0,0,0))
    out.alpha_composite(h1,((W-h1.width)//2,0)); y=h1.height+gap
    out.alpha_composite(a2,((W-aw)//2,y)); y+=ah+gap
    out.alpha_composite(h2,((W-h2.width)//2,y))
    out.save(f'designs/a434/print-{name}.png'); print(name,out.size,h1.size,h2.size,art.size)
    return out
d=build('dust',(217,102,98,255),(15,51,83,255)); n=build('navy',(240,138,132,255),(253,239,219,255))
S='/tmp/claude-0/-home-user-graphicteesco/50049364-b5b7-5699-87f7-2d6669225dd7/scratchpad/p434.jpg'
ims=[]
for im,c in ((d,(214,203,180,255)),(n,(27,38,64,255))):
    bg=Image.new('RGBA',im.size,c); bg.alpha_composite(im); ims.append(bg.convert('RGB').resize((600,int(600*im.height/im.width))))
o=Image.new('RGB',(1200,ims[0].height)); o.paste(ims[0],(0,0)); o.paste(ims[1],(600,0)); o.save(S)
