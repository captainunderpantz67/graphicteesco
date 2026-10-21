import sys; sys.path.insert(0,'.')
from designs.lib import *
from PIL import ImageDraw
import numpy as np, cv2
im=Image.open('designs/c905/src_print.png').convert('RGBA'); _s=np.array(im)
_al=(_s[:,:,3]>40).astype('uint8'); _nn,_lab,_st,_=cv2.connectedComponentsWithStats(_al,8)
_gold=max(range(1,_nn),key=lambda i:(_lab==i).sum() if _st[i][0]==0 else 0)   # the golfer-and-scene component touches x=0 (the lettering is separate components)
_s[:,:,3]=np.where(_lab==_gold,_s[:,:,3],0); a=Image.fromarray(_s,'RGBA'); a=a.crop(a.getbbox()); a.save('designs/c905/art_only.png'); print('art',a.size)
# worn edge where the source lettering cut the flag, hole and grass flat (R4.1): noisy erosion of the last 110 px, only in those two row bands
_n=np.array(a); _h,_w=_n.shape[:2]; _rng=np.random.default_rng(11); _f=np.zeros((_h,_w),np.float32)
for _sg,_wt in ((30,.5),(12,.3),(5,.2)):
    _x=_rng.random((_h,_w)).astype(np.float32); _x=cv2.GaussianBlur(_x,(0,0),_sg); _x=(_x-_x.min())/(_x.max()-_x.min()); _f+=_wt*_x
_f=(_f-_f.min())/(_f.max()-_f.min())
_xs=np.arange(_w)[None,:].repeat(_h,0); _ys=np.arange(_h)[:,None].repeat(_w,1)
_t=np.clip((_xs-(_w-110))/110.0,0,1)**1.1*1.1
_band=((_ys>1480)&(_ys<1720))|((_ys>2050)&(_ys<2390))
_lum=_n[:,:,:3].astype(np.float32).mean(2)
_kill=(_f<_t)&_band&(_xs>_w-110)&(_lum>=70)&(_n[:,:,3]>0)
_n[:,:,3][_kill]=0
_dk=(_xs>_w-60)&_band&(_lum<70)&(_n[:,:,3]>0); _n[:,:,3][_dk]=0
a=Image.fromarray(_n,'RGBA'); a.save('designs/c905/art_ragged.png')
W=3000; FONT=sys.argv[1] if len(sys.argv)>1 else 'bevan'; COL=1300; CX=W-COL//2-20
def block(tag,hf,pf,key):
    h=line_same(['I ONLY','GOLF'],FONT,float(sys.argv[2]) if len(sys.argv)>2 else 0.82,COL,hf,key,kw=15)
    p=line_same(['FOR THE','OUTFITS'],FONT,1.0,COL,pf,key,kw=15)
    return h,p
for tag,hf,pf,key in (('ash',(30,92,62,255),(180,36,96,255),CREAM),('light',(124,196,150,255),(246,110,168,255),(20,26,44,255))):
    h,p=block(tag,hf,pf,key)
    lines=h+p; gap=40; th=sum(l.height for l in lines)+gap*(len(lines)-1)+60
    H=max(a.height,th); out=Image.new('RGBA',(W,H),(0,0,0,0)); out.alpha_composite(a,(20,(H-a.height)//2))
    y=(H-th)//2
    for i,l in enumerate(lines):
        if i==2: y+=60
        out.alpha_composite(l,(W-COL-20+(COL-l.width)//2,y)); y+=l.height+gap
    out=out.crop(out.getbbox()); out.save(f'docs/print-files/905-golf-outfits-{tag}.png')
    for t,c in {'grey':(150,150,150,255),'navy':(26,34,62,255),'black':(20,20,20,255)}.items():
        bg=Image.new('RGBA',out.size,c); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*out.height/out.width))).save(f'designs/prev_905-golf-outfits-{tag}_{t}.png')
    print(tag,'head',[l.width for l in h],'punch',[l.width for l in p],'type',sum(l.height for l in lines),'of',out.height,round(sum(l.height for l in lines)/out.height,3),'subject',a.width,round(a.width/out.width,2),out.size,'aspect',round(out.height/out.width,2))
