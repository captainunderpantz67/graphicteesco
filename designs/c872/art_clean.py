import numpy as np, cv2
from PIL import Image
im=Image.open('designs/c872/back.png').convert('RGBA'); a=np.array(im)
al=(a[:,:,3]>40).astype('uint8')
n,lab,st,_=cv2.connectedComponentsWithStats(al,8)
main=lab[2400,1900]
keep=(lab==main)
# letters merged into main: remove sage-green pixels in the text band
rgb=a[:,:,:3].astype(int); lum=rgb.sum(2)/3
r,g,b=rgb[:,:,0],rgb[:,:,1],rgb[:,:,2]
sage=(g>=r-5)&(g>=b+8)&(lum>85)&(lum<185)         # olive/sage letter fill and outline
dark=lum<75; ivory=(lum>190)
band=np.zeros_like(keep); band[:780,:]=True
rm=band&sage&~dark
keep2=keep&~rm
# remove whatever of the band is now small debris (letter specks): connected comps of keep2 with area<4000 within band
al2=keep2.astype('uint8'); n2,lab2,st2,_=cv2.connectedComponentsWithStats(al2,8)
for i in range(1,n2):
    if st2[i][4]<6000 and st2[i][1]<800: keep2[lab2==i]=False
out=a.copy(); out[:,:,3]=np.where(keep2,a[:,:,3],0)
im2=Image.fromarray(out,'RGBA'); bb=im2.getbbox(); print(bb)
im2.crop(bb).save('designs/c872/art_only.png'); print(im2.crop(bb).size)
v=Image.new('RGBA',im2.crop(bb).size,(120,120,120,255)); v.alpha_composite(im2.crop(bb)); v.convert('RGB').resize((700,int(700*v.height/v.width))).save('designs/c872/art_only_view.jpg')
