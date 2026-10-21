from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
cx,cy,R=1000,740,640
d.ellipse((cx-R,cy-R,cx+R,cy+R),outline=0,width=130)
for x,y in ((800,540),(1000,480),(1200,550),(720,740),(900,720),(1100,760),(1270,740),(790,940),(1000,950),(1190,940),(900,860),(1100,540)):
    d.ellipse((x-56,y-56,x+56,y+56),fill=0)
d.polygon([(850,1440),(1150,1440),(1090,1480),(1075,1530),(925,1530),(910,1480)],fill=0)
d.rounded_rectangle((700,1360,1300,1470),55,fill=0)
im.save('designs/c906/chest_src.png'); im.resize((500,500)).save('designs/c906/icon_view.png')
