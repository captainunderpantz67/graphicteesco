import numpy as np, cv2
from PIL import Image
im=Image.open('designs/c899/src_print.png').convert('RGBA'); a=np.array(im)
H,W=a.shape[:2]
al=(a[:,:,3]>40).astype('uint8')
n,lab,st,cen=cv2.connectedComponentsWithStats(al,8)
rgb=a[:,:,:3].astype(int)
r,g,b=rgb[:,:,0],rgb[:,:,1],rgb[:,:,2]
rust=(r>140)&(r<215)&(g>50)&(g<110)&(b>25)&(b<90)    # lettering rust
keep=np.ones((H,W),bool)
info=[]
for i in range(1,n):
    x,y,w,h,area=st[i]
    m=lab==i
    frac=(rust&m).sum()/max(area,1)
    info.append((i,x,y,w,h,area,round(frac,2)))
big=sorted(info,key=lambda t:-t[5])[:12]
for t in big: print(t)
rm=[t[0] for t in info if t[6]>0.4 and t[5]>1500 and t[0]!=11]
print('removing',len(rm))
keepmask=np.ones((H,W),bool)
for i in rm: keepmask[lab==i]=False
out=a.copy(); out[:,:,3]=np.where(keepmask,a[:,:,3],0)
# drop remaining tiny specks outside the main art bbox
x0,y0,w0,h0=st[11][:4]
ys,xs=np.mgrid[0:H,0:W]
outside=(xs<x0-40)|(xs>x0+w0+40)|(ys<y0-250)|(ys>y0+h0+40)
out[:,:,3]=np.where(outside,0,out[:,:,3])
im2=Image.fromarray(out,'RGBA'); bb=im2.getbbox(); print(bb)
art=im2.crop(bb); art.save('designs/c899/art_only.png'); print(art.size)
v=Image.new('RGBA',art.size,(40,40,40,255)); v.alpha_composite(art); v.convert('RGB').resize((700,int(700*art.height/art.width))).save('designs/c899/art_only_view.jpg')
