import sys; sys.path.insert(0,'.')
from designs.c_common import *
build(777,'designs/c777/art_pp.png',["GROOMER","APPOINTMENT:"],["OVERDUE."],'graduate',((70,40,24,255),(158,64,28,255)),AW=int(sys.argv[1]),W=int(sys.argv[2]),hfrac=0.965,hsame=True,kw=13)
