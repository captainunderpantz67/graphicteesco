from PIL import Image, ImageDraw, ImageFont
src=Image.open('designs/first5/clocked-print.png').convert('RGBA')
cat=src.crop((0,0,3000,1990)); cat=cat.crop(cat.getbbox())
CREAM=(243,231,207,255)
def line(text,font,size,maxw,track=0.0):
    while True:
        f=ImageFont.truetype('designs/fonts/'+font,size)
        adv=[f.getlength(c) for c in text]; t=int(size*track)
        tot=int(sum(adv)+t*(len(text)-1))
        if tot<=maxw: break
        size=int(size*0.97)
    asc,desc=f.getmetrics()
    im=Image.new('RGBA',(tot+200,asc+desc+100),(0,0,0,0)); d=ImageDraw.Draw(im); x=100
    for c,a in zip(text,adv):
        d.text((x,50),c,font=f,fill=CREAM); x+=a+t
    return im.crop(im.getbbox())
W=cat.width
h1=line('CLOCKED IT.','BowlbyOne-Regular.ttf',900,int(W*1.0))
h2=line('SAID NOTHING.','Anton-Regular.ttf',700,int(W*0.62),0.03)
print(cat.size,h1.size,h2.size,h2.height/h1.height)
gap=90
H=cat.height+gap+h1.height+60+h2.height
out=Image.new('RGBA',(W,H),(0,0,0,0)); y=0
out.alpha_composite(cat,(0,0)); y=cat.height+gap
out.alpha_composite(h1,((W-h1.width)//2,y)); y+=h1.height+60
out.alpha_composite(h2,((W-h2.width)//2,y))
out.save('designs/a478/print.png'); print(out.size)
bg=Image.new('RGBA',out.size,(25,25,25,255)); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*H/W))).save('/tmp/claude-0/-home-user-graphicteesco/b5199641-8ecc-5c6a-923b-7ecc9222cdc8/scratchpad/p478.png')
