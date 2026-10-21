"""Camo redo batch (R11.13) for the live hunting hoodies: sources are the live Printful print files with the baked lettering cropped off."""
import sys; sys.path.insert(0, '.')
from designs.camo_patch import *
S = '/tmp/claude-0/-home-user-graphicteesco/e2d59130-111b-51db-bf6c-1ae31c4d7325/scratchpad/'
K = dict(dark=80, edge=999, blur=5, adapt=(61, 14))
J = {
 841: (['PROFESSIONAL'], ['TREE SITTER'], (0, 0.26, 1, 1.0), {}),
 842: (['I SAW YOU MOVE.'], [], (0, 0, 1, 0.70), {}),
 843: (['DOE NOT'], ['DISTURB'], (0, 0, 1, 0.66), dict(fillL=200, aspect=1.25, patchw=0.92, hfrac=0.92, pfrac=0.92)),
 844: (['LONG BEARD,'], ['SHORT TEMPER.'], (0, 0.13, 1, 0.885), {}),
 845: (['SIT. WAIT. SNACK.'], [], (0, 0, 1, 0.885), {}),
 865: (['OPENING DAY.'], ['UP AT 4. SAW NOTHING.'], (0, 0, 1, 0.78), dict(hfrac=0.8)),
 866: (['NO DEER TODAY.'], ['GREAT NAP THOUGH.'], (0, 0.19, 1, 1.0), dict(fillL=225, patchw=0.92)),
 868: (['FLUENT IN HONK'], [], (0, 0, 1, 0.85), {}),
 869: (['FULL DRAW,'], ['ZERO DEER'], (0, 0.13, 1, 0.885), dict(aspect=1.1, hfrac=0.95, pfrac=0.95)),
 870: (['ANTLER ENVY'], [], (0, 0, 1, 0.745), dict(fillL=225)),
}
if __name__ == '__main__':
    for n in map(int, sys.argv[1:]):
        h, p, cr, kw = J[n]; print(n, end=' ')
        camo(n, S + 'live%d.png' % n, h, p, crop=cr, **{**K, **kw})
