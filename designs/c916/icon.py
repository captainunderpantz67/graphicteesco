from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# wide blocky head
d.rounded_rectangle((330,470,1670,1400),330,outline=0,width=120)
# folded (rose) ears hanging down at the sides, as solid wedges
d.polygon([(420,520),(300,900),(600,640)],fill=0)
d.polygon([(1580,520),(1700,900),(1400,640)],fill=0)
# forehead stripe (blaze) and happy closed eyes
d.rectangle((960,500,1040,640),fill=0)
d.arc((640,640,880,820),200,340,fill=0,width=75); d.arc((1120,640,1360,820),200,340,fill=0,width=75)
# big nose on a broad muzzle
d.ellipse((880,800,1120,940),fill=0)
# huge grin with a tongue hanging out
d.pieslice((600,930,1400,1330),0,180,fill=0)
d.rounded_rectangle((880,1130,1120,1560),110,fill=255); d.rounded_rectangle((880,1130,1120,1560),110,outline=0,width=60)
d.line((1000,1230,1000,1450),fill=0,width=34)
im.save('designs/c916/chest_src.png'); im.resize((500,500)).save('designs/c916/icon_view.png')
