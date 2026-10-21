import sys; sys.path.insert(0,'.')
from designs.lock import *
a=Image.open('designs/c939/art_rag.png').convert('RGBA'); a=a.crop(a.getbbox()); print(a.size)
AW=float(sys.argv[1]); HF=float(sys.argv[2]); F=sys.argv[3]; PF=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
run(a,a,'939-protest',[],[['ATTENDING'],['UNDER','PROTEST']],F,AW,((170,50,40,255),(38,50,86,255),CREAM),((240,110,95,255),(246,236,214,255),(20,26,44,255)),HF=HF,PF=PF)
