from PIL import Image, ImageDraw
import math
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
# sun ring with short rays behind the tree (upper right)
cx,cy=1330,640
d.ellipse((cx-330,cy-330,cx+330,cy+330),outline=0,width=95)
for k in range(8):
    a=math.radians(k*45+22)
    d.line((cx+math.cos(a)*430,cy+math.sin(a)*430,cx+math.cos(a)*540,cy+math.sin(a)*540),fill=0,width=70)
# pine tree: three stacked tiers + trunk, with a white keyline gap so it sits in front of the sun
tx=860
def tier(top,bottom,half):
    return [(tx,top),(tx+half,bottom),(tx-half,bottom)]
for pts in (tier(380,880,260),tier(640,1160,370),tier(920,1440,480)):
    d.polygon(pts,fill=255)           # knock out the sun behind the tree
for pts in (tier(380,880,225),tier(640,1160,335),tier(920,1440,445)):
    d.polygon(pts,fill=0)
d.rectangle((tx-70,1440,tx+70,1600),fill=0)
im.save('designs/c918/chest_src.png'); im.resize((500,500)).save('designs/c918/icon_view.png')
