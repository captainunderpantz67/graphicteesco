from PIL import Image, ImageDraw
S=2000
big=Image.new('L',(S,S),255); d=ImageDraw.Draw(big)
# paddle: rounded face with a handle, drawn upright then rotated 35 degrees
p=Image.new('L',(1200,1600),255); pd=ImageDraw.Draw(p)
pd.rounded_rectangle((100,60,1100,1020),420,fill=0)
pd.rectangle((520,1000,680,1500),fill=0); pd.rounded_rectangle((470,1400,730,1560),40,fill=0)
pd.rounded_rectangle((260,220,940,860),300,outline=255,width=40)
p=p.rotate(35,expand=True,fillcolor=255,resample=Image.BICUBIC)
big.paste(p,(120,60),Image.eval(p,lambda v:255-v))
# ball with holes, lower right
bx,by,br=1380,1330,330
d.ellipse((bx-br,by-br,bx+br,by+br),fill=0)
import math
holes=[(0,0)]+[(150*math.cos(a*math.pi/3),150*math.sin(a*math.pi/3)) for a in range(6)]+[(250*math.cos(a*math.pi/3+0.5),250*math.sin(a*math.pi/3+0.5)) for a in range(0,6,2)]
for hx,hy in holes:
    d.ellipse((bx+hx-38,by+hy-38,bx+hx+38,by+hy+38),fill=255)
big.save('designs/c942/chest_src.png'); big.resize((500,500)).save('designs/c942/icon_view.png')
