from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
cx,cy,R=1000,820,430
d.pieslice((cx-R,cy-R,cx+R,cy+R),180,360,fill=0)
d.pieslice((cx-R,cy-R,cx+R,cy+R),0,180,outline=0,width=100)
d.rectangle((cx-R,cy-50,cx+R,cy+50),fill=0)
d.rectangle((cx-40,cy-R-230,cx+40,cy-R+30),fill=0)
d.ellipse((cx-90,cy-R-320,cx+90,cy-R-140),fill=0)
d.line((250,1120,500,1060,750,1120,1000,1060,1250,1120,1500,1060,1750,1120),fill=0,width=70,joint='curve')
d.line((cx,cy+R,cx,1580),fill=0,width=40)
d.arc((cx-170,1400,cx+170,1740),0,210,fill=0,width=70)
d.polygon([(cx-170,1580),(cx-95,1520),(cx-215,1490)],fill=0)
im.save('designs/c926/chest_src.png'); im.resize((500,500)).save('designs/c926/icon_view.png')
