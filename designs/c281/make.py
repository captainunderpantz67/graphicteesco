from PIL import Image, ImageDraw, ImageFont, ImageFilter
FD='designs/fonts/'
RED=(196,18,48,255); GREEN=(24,112,84,255); KEY=(46,28,24,255)
def line(text,font,W,fill,key,kw=29):
    f=ImageFont.truetype(FD+font,800); tot=f.getlength(text); size=int(800*W/(tot*1.0)); 
    f=ImageFont.truetype(FD+font,size); pad=60
    bb=f.getbbox(text); im=Image.new('RGBA',(bb[2]-bb[0]+2*pad,bb[3]-bb[1]+2*pad),(0,0,0,0))
    k=Image.new('L',im.size,0); ImageDraw.Draw(k).text((pad-bb[0],pad-bb[1]),text,font=f,fill=255)
    k=k.filter(ImageFilter.MaxFilter(kw)); im.paste(Image.new('RGBA',im.size,key),(0,0),k)
    ImageDraw.Draw(im).text((pad-bb[0],pad-bb[1]),text,font=f,fill=fill)
    return im.crop(im.getbbox())
src=Image.open('docs/print-files/281-in-it-for-the-doorbusters-v2.png').convert('RGBA'); W=src.width
art=src.crop((0,900,W,src.height)); art=art.crop(art.getbbox())
L=int(W*0.985)
h1=line("I'M NOT SHOPPING.",'Anton-Regular.ttf',L-60,RED,KEY)
h2=line("I'M COMPETING.",'BowlbyOne-Regular.ttf',L-60,GREEN,KEY)
print('headline',h1.width,'punch',h2.width,'heights',h1.height,h2.height)
sc=0.82; art=art.resize((int(art.width*sc),int(art.height*sc)),Image.LANCZOS)
g=70; H=h1.height+g+art.height+g+h2.height
out=Image.new('RGBA',(L,H),(0,0,0,0))
out.alpha_composite(h1,((L-h1.width)//2,0)); y=h1.height+g
out.alpha_composite(art,((L-art.width)//2,y)); y+=art.height+g
out.alpha_composite(h2,((L-h2.width)//2,y))
out=out.crop(out.getbbox()); out.save('docs/print-files/281-not-shopping-competing.png',dpi=(300,300)); print(out.size,out.height/out.width)
bg=Image.new('RGBA',out.size,(236,224,200,255)); bg.alpha_composite(out); bg.convert('RGB').resize((600,int(600*out.height/out.width))).save('designs/c281/prev.png')
