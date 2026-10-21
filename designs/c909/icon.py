from PIL import Image, ImageDraw
S=2000
im=Image.new('L',(S,S),255); d=ImageDraw.Draw(im)
def book(y,x0,x1,h):
    d.rounded_rectangle((x0,y,x1,y+h),40,fill=0)
    d.rectangle((x0+100,y+h*0.30,x0+135,y+h*0.70),fill=255)   # spine bands
    d.rectangle((x1-135,y+h*0.30,x1-100,y+h*0.70),fill=255)
    d.rectangle((x0+260,y+h*0.42,x1-260,y+h*0.58),fill=255)  # label
book(1180,300,1700,330)
book(840,420,1760,330)
book(500,340,1660,330)
# bookmark ribbon hanging from the top book
d.polygon([(1450,500),(1590,500),(1590,230),(1520,300),(1450,230)],fill=0)
im.save('designs/c909/chest_src.png'); im.resize((500,500)).save('designs/c909/icon_view.png')
