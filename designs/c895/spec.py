import json
H='unisex-nurse-calm-face-loud-brain-embroidered-zip-hoodie'
h='''<h3>The Story</h3>
<p>This nurse zip up hoodie is for the nurse whose face stays calm while the brain runs a double shift, zipped on over scrubs for the walk in at sunrise and the drive home after.</p>
<p>A long heart-monitor line spikes and dips across the print with a tangled scribble of loops in the middle where the calm should be, in coral, pink and cream with a worn print texture. CALM FACE. runs above it and LOUD BRAIN. below in heavy black capitals, the second line a touch wider than the first: cream and coral on Navy and Black, dark red and navy on Ash. The full print is on the back. On the front, a small serene face under a storm cloud is embroidered on the left chest, and the word SHIFT is stitched on the left cuff, in white thread on Navy and Black and navy thread on Ash. Original art, made for Graphic Tees Co. and printed and stitched the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester fleece, soft inside and outside</li>
<li>Fabric weight: 8 oz/yd²</li>
<li>Embroidered left-chest calm face under a storm cloud and left-cuff SHIFT, printed back</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Sizes S–3XL</li>
<li>3 colors: Navy, Black and Ash</li>
<li>Blank product sourced from Honduras and El Salvador</li>
</ul>
<h3>Questions</h3>
'''
faq=[
("How does the Calm Face, Loud Brain zip hoodie fit?","The Calm Face, Loud Brain nurse zip up hoodie from Graphic Tees Co. is a regular unisex fit in sizes S through 3XL. Order your usual size for an easy layer over scrubs or a tee, or go up one for a roomier fit. The first size exchange within 30 days is free."),
("Is this nurse hoodie warm enough for cold hospital halls?","It is a mid-weight layer. The Graphic Tees Co. zip hoodie is a Gildan 18600 in 8 oz fleece, 50% cotton and 50% polyester, soft inside and outside, with a metal zipper, front pouch pockets and an unlined hood. It handles chilly units, early commutes and break-room naps well, and the zip comes off fast."),
("Where are the print and the embroidery on this zip hoodie?","The full design, CALM FACE. above the heart-monitor line with its tangled scribble, and LOUD BRAIN. below, is printed across the back so the zipper never splits it. On the front, a small embroidered face under a storm cloud sits on the left chest with no words, and SHIFT is stitched on the left cuff."),
("How do I care for the embroidery on this hoodie?","Zip the Graphic Tees Co. hoodie, turn it inside out and wash cold with similar colors, then tumble dry on low or hang dry. Skip bleach and do not iron over the stitching. The face on the chest and the SHIFT cuff are stitched thread, which keeps its shape wash after wash with gentle care."),
("Is it a good gift for a nurse, and when should I order for Christmas?","Yes, for the nurse who says fine and means exhausted. Graphic Tees Co. makes each embroidered hoodie to order, so for Christmas order by about December 8. Orders over $45 ship free in the US, and one free size exchange within 30 days covers a wrong guess on size."),
]
h+='\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q,a in faq)
s={"title":"Unisex Nurse – Calm Face, Loud Brain Embroidered Zip Hoodie","handle":H,"slug":H,"catalog":692,"colors":["Navy","Black","Ash"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"57.99","productType":"Hoodie","tags":["zip-up-hoodies","zip-up-hoodies-for-men","zip-up-hoodies-for-women","graphic-hoodies-for-men","graphic-hoodies-for-women","black-zip-up-hoodies","hoodie","ai-art","intake-done"],"seo":{"title":"Nurse Zip Up Hoodie – Calm Face, Loud Brain","description":"A nurse zip up hoodie: CALM FACE. LOUD BRAIN. on the back over a heart-monitor line and a tangled scribble, plus an embroidered calm face on the chest."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c895/spec.json','w'),ensure_ascii=False)
