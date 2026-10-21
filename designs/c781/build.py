import sys; sys.path.insert(0,'.')
from designs.c_common import *
build(781,'designs/c781/art_pp.png',["ON GUARD."],["(ASLEEP.)"],'alfa',((70,40,24,255),(158,64,28,255)),AW=int(sys.argv[1]),W=int(sys.argv[2]),hfrac=0.9,kw=7,g=30)
