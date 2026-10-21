from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# face (lower left)
fx,fy,R=700,1160,560
d.ellipse((fx-R,fy-R,fx+R,fy+R),outline=0,width=110)
d.arc((fx-330,fy-120,fx-70,fy+60),20,160,fill=0,width=70); d.arc((fx+70,fy-120,fx+330,fy+60),20,160,fill=0,width=70)   # closed eyes
d.arc((fx-230,fy+120,fx+230,fy+400),20,160,fill=0,width=75)  # calm smile
# storm cloud (upper right, overlapping nothing)
for box in ((1130,200,1430,500),(1290,60,1700,480),(1560,180,1900,520),(1090,340,1930,600)):
    d.ellipse(box,fill=0)
d.polygon([(1500,230),(1380,470),(1470,470),(1420,640),(1620,400),(1520,400),(1590,230)],fill=255)
im.save('designs/c895/chest_src.png'); im.resize((500,500)).save('designs/c895/icon_view.png')
