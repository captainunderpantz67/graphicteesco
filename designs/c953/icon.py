from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# cookie: round disc with a bite taken out of the upper right and chocolate chip holes
d.ellipse((200,200,1800,1800),fill=0)
for cx,cy,r in [(1560,520,300),(1380,300,170),(1760,720,170)]: d.ellipse((cx-r,cy-r,cx+r,cy+r),fill=255)
for x,y in [(600,700),(1000,520),(480,1150),(900,1000),(1300,1150),(700,1450),(1150,1500),(1500,1400)]:
    d.ellipse((x-85,y-70,x+85,y+70),fill=255)
im.save('designs/c953/chest_src.png'); im.resize((500,500)).save('designs/c953/icon_view.png')
