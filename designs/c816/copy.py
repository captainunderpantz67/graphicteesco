import json
faq=[
("How does the I Play Army Golf zip hoodie fit?","It is a regular-fit unisex zip-up in sizes S through 3XL. Order your usual size for a regular fit, or go up one size to wear it over a polo and a base layer. Graphic Tees Co. offers a free size exchange if the first pick is off."),
("Is this zip hoodie warm enough for a morning round?","It is a mid-weight layer. The Graphic Tees Co. zip hoodie is a Gildan 18600 in 8 oz fleece, 50% cotton and 50% polyester, soft inside and outside, with a metal zipper, front pouch pockets and an unlined hood. It handles crisp fall mornings on the course well."),
("Where are the print and the embroidery on this golf zip hoodie?","The full design, LEFT. RIGHT. LEFT. with the golfer, the pines and I PLAY ARMY GOLF. underneath, is printed across the back so the zipper never splits it. On the front, a small embroidered golfer sits on the left chest with no words, and LEFT is stitched on the left cuff."),
("How do I care for the embroidery on this hoodie?","Zip the Graphic Tees Co. hoodie, turn it inside out and wash cold with similar colors, then tumble dry on low or hang dry. Skip bleach and do not iron over the stitching. The golfer on the chest and the LEFT cuff are stitched thread, which keeps its shape wash after wash with gentle care."),
("Is it a good golf gift for him?","Yes. The joke is the one every weekend golfer knows, and it works for dads, husbands and the friend who never breaks 100. The Graphic Tees Co. embroidered zip hoodie prints and stitches to order in Ash or Navy, includes a free size exchange, and for Christmas you should order by about December 8."),
]
print([len(a.split()) for q,a in faq])
h='''<h3>The Story</h3>
<p>Left. Right. Left. An embroidered zip hoodie for the golfer who plays army golf, and an easy golf gift for him this Christmas.</p>
<p>The full print is on the back: LEFT. RIGHT. LEFT. across the top and I PLAY ARMY GOLF. in dark green capitals below. In between, a 1970s golfer in plaid flares and a visor holds a proud follow-through while his ball's dotted path zigzags between pine stands on either side of the fairway. On the front, a golfer in a follow-through is embroidered on the left chest, and the word LEFT is stitched on the left cuff.</p>
<p>Army golf is the slang for a ball that goes left, right, left, and the joke is the swing that looks perfect anyway. Zip it over a polo for a crisp morning on the course or the drive home from the range. Original art, made for Graphic Tees Co. and printed and stitched the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester fleece, soft inside and outside</li>
<li>Fabric weight: 8 oz/yd²</li>
<li>Embroidered left-chest golfer and left-cuff LEFT, printed back</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Sizes S–3XL</li>
<li>Colors: Ash, Navy</li>
<li>Blank product sourced from Honduras and El Salvador</li>
</ul>
<h3>Questions</h3>
'''+'\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q,a in faq)+'\n'
json.dump(h,open('designs/c816/copy.json','w'),ensure_ascii=False); print(json.dumps(h,ensure_ascii=False))
