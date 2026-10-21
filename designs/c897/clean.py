import numpy as np, cv2
from PIL import Image
im=Image.open('designs/c897/src_print.png').convert('RGBA'); a=np.array(im)
H,W=a.shape[:2]
r,g,b=[a[:,:,i].astype(int) for i in range(3)]
al=a[:,:,3]>40
cream=((r>225)&(g>205)&(b>165)&(b<225)&al).astype('uint8')
cream[:3150]=0
cream=cv2.dilate(cream,np.ones((3,3),np.uint8),iterations=1)
# text halo: dilate generously, only in the lettering band
big=cv2.dilate(cream,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(41,41)))
out=a.copy(); out[:705,:,3]=0
out[:,:,3]=np.where(big>0,0,out[:,:,3])
# drop remnants: anything connected comps small and y>3150
al2=(out[:,:,3]>40).astype('uint8')
n,lab,st,_=cv2.connectedComponentsWithStats(al2,8)
for i in range(1,n):
    x,y,w,h,ar=st[i]
    if y>3150 and ar<60000 : out[lab==i,3]=0
im2=Image.fromarray(out,'RGBA'); bb=im2.getbbox(); print(bb)
art=im2.crop(bb); art.save('designs/c897/art_only.png'); print(art.size)
v=Image.new('RGBA',art.size,(40,40,40,255)); v.alpha_composite(art); v.convert('RGB').resize((700,int(700*art.height/art.width))).save('designs/c897/art_only_view.jpg')
