from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# slope wedge
d.polygon([(150,1700),(1850,700),(1850,820),(260,1790)],fill=0)
d.polygon([(150,1700),(260,1790),(150,1790)],fill=0)
# boulder resting on the slope (circle touching the line)
cx,cy,R=1320,640,430
d.ellipse((cx-R,cy-R,cx+R,cy+R),outline=0,width=110)
d.ellipse((cx-150,cy-150,cx+150,cy+150),fill=0)
# pushing figure: head, torso leaning, arms to boulder, legs on slope
d.ellipse((500,720,680,900),fill=0)
d.line((590,900,760,1180),fill=0,width=120)       # torso
d.line((660,960,880,860),fill=0,width=100)        # arm to boulder
d.line((760,1180,610,1380),fill=0,width=110)      # back leg
d.line((760,1180,960,1280),fill=0,width=110)      # front leg
im.save('designs/c894/chest_src.png'); im.resize((500,500)).save('designs/c894/icon_view.png')
