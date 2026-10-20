import numpy as np, cv2
from PIL import Image, ImageDraw
im=Image.open('designs/c508/art_raw.png').convert('RGBA'); W,H=im.size; s=W/1836.0
P=[(40,900),(60,700),(150,610),(300,500),(450,430),(600,405),(700,425),(790,520),(850,640),(900,640),(1000,600),(1100,500),(1200,440),(1300,425),(1420,450),(1550,520),(1650,600),(1720,760),(1800,1000),(1830,1500),(1830,1836),(40,1836)]
m=Image.new('L',(W,H),0); ImageDraw.Draw(m).polygon([(x*s,y*s) for x,y in P],fill=255)
a=np.array(im); a[...,3]=np.where(np.array(m)>0,a[...,3],0)
# drop cream sticker border pixels & specks
r,g,b=a[...,0].astype(int),a[...,1].astype(int),a[...,2].astype(int)
al=(a[...,3]>40).astype(np.uint8); n,l,st,_=cv2.connectedComponentsWithStats(al,8)
for i in range(1,n):
    if st[i,4]<8000: a[l==i,3]=0
Image.fromarray(a).save('designs/c508/art_cut4.png'); print(W,H)
