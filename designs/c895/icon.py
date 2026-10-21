from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# face
d.ellipse((480,760,1520,1800),outline=0,width=110)
d.arc((640,1060,900,1240),20,160,fill=0,width=70); d.arc((1100,1060,1360,1240),20,160,fill=0,width=70)   # closed eyes
d.arc((780,1280,1220,1600),20,160,fill=0,width=75)  # calm smile
# storm cloud
for box in ((560,330,900,670),(780,180,1220,620),(1080,300,1440,660),(520,470,1480,700)):
    d.ellipse(box,fill=0)
# lightning bolt cut out of the cloud
d.polygon([(1020,300),(880,560),(990,560),(930,720),(1130,470),(1010,470),(1080,300)],fill=255)
im.save('designs/c895/chest_src.png'); im.resize((500,500)).save('designs/c895/icon_view.png')
