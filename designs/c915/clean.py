import numpy as np, cv2
from PIL import Image
im=Image.open('designs/c915/src_print.png').convert('RGBA'); a=np.array(im); H,W=a.shape[:2]
r,g,b,al=[a[:,:,i].astype(int) for i in range(4)]
vis=al>40
k=3600/1400.0
ys,xs=np.mgrid[0:H,0:W]; xv=xs/k; yv=ys/k
cream=vis&(r>205)&(g>195)&(b>170)&((r-b)<50)
n,lab=cv2.connectedComponents(cream.astype('uint8'),connectivity=8)
seed=lab[int(300*k),int(660*k)]; print('seed label',seed)
goose=(lab==seed)
goose=cv2.dilate(goose.astype('uint8'),np.ones((25,25),np.uint8))>0
def poly(pts):
    m=np.zeros((H,W),np.uint8); cv2.fillPoly(m,[np.array([(int(x*k),int(y*k)) for x,y in pts])],1); return m>0
head=poly([(535,235),(700,200),(770,300),(760,350),(600,300),(540,270)])|poly([(455,400),(520,330),(585,355),(560,395),(480,412)])
protect=goose|head
ybot=285+280*((xv-620)/545.0)**2+30
zone=vis&(yv<ybot)&(yv<590)
pal=zone&(((r-b)>45)|((r<150)&(g<100)&(b<80)))
pal=pal&~protect
pal_u8=cv2.morphologyEx(pal.astype('uint8'),cv2.MORPH_CLOSE,cv2.getStructuringElement(cv2.MORPH_ELLIPSE,(61,61)))
# fill white counters: close + holes, but never protected pixels
cnts,_=cv2.findContours(pal_u8,cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)
filled=np.zeros((H,W),np.uint8); cv2.drawContours(filled,cnts,-1,1,-1)
rm=(filled>0)&zone&~protect
rm=cv2.dilate(rm.astype('uint8'),np.ones((9,9),np.uint8))>0
rm&=~protect
out=a.copy(); out[rm,3]=0
dark=(r<150)&(g<100)&(b<90)
box1=vis&(xv<450)&(yv<516)
box2=vis&(xv>=450)&(xv<524)&(yv<430)&dark&(xv<472)
box3=vis&(xv>=100)&(xv<270)&(yv>=456)&(yv<564)&dark
out[box1|box2|box3,3]=0
al2=(out[:,:,3]>40).astype('uint8'); nn,lb,stt,_=cv2.connectedComponentsWithStats(al2,8)
for i in range(1,nn):
    if stt[i,4]<30000: out[lb==i,3]=0
Image.fromarray(out,'RGBA').save('designs/c915/clean_full.png')
bg=Image.new('RGBA',(W,H),(70,70,70,255)); bg.alpha_composite(Image.fromarray(out,'RGBA'))
bg.convert('RGB').resize((700,700)).save('designs/c915/clean_view.jpg')
