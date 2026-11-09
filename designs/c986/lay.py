import numpy as np
from PIL import Image
im=Image.open('designs/c986/src.png').convert('RGBA'); W,H=im.size
head=im.crop((0,0,W,760)); mid=im.crop((0,760,W,3935)); punch=im.crop((0,3935,W,H))
head,mid,punch=[x.crop(x.getbbox()) for x in (head,mid,punch)]
sc=0.55; mid=mid.resize((int(mid.width*sc),int(mid.height*sc)),Image.LANCZOS)
CW=max(head.width,punch.width); g=40; h=head.height+g+mid.height+g+punch.height
o=Image.new('RGBA',(CW,h),(0,0,0,0)); y=0
for x in (head,mid,punch):
    o.alpha_composite(x,((CW-x.width)//2,y)); y+=x.height+g
o.save('designs/c986/print_sand.png'); o.save('designs/c986/print_navy.png')
print(CW,h,'head',head.width,'punch',punch.width,'art',mid.width,mid.width/CW,'type',(head.height+punch.height)/h,'FW1500 height in',1500*h/CW/150)
bg=Image.new('RGB',o.size,(236,224,200)); bg.paste(o,mask=o.split()[3]); bg.resize((400,int(400*h/CW))).save('designs/c986/prev_sand.jpg')
bg=Image.new('RGB',o.size,(26,34,62)); bg.paste(o,mask=o.split()[3]); bg.resize((400,int(400*h/CW))).save('designs/c986/prev_navy.jpg')
