import sys; sys.path.insert(0,'.')
from designs.lock import *
im=Image.open('designs/c914/src_print.png').convert('RGBA'); a=im.crop((0,522,im.width,2843)); a=a.crop(a.getbbox()); a.save('designs/c914/art.png')
run(a,a,'914-pilates-core',[['I HAVE']],[['CORE ISSUES']],'bowlby',float(sys.argv[1]),((38,50,86,255),(150,52,80,255),CREAM),((244,160,180,255),(246,236,214,255),(20,26,44,255)),HF=float(sys.argv[2]),PF=1.0)
