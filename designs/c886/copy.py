import json
h='''<h3>The Story</h3>
<p>Not today, I'm moisturizing: this frog hoodie is for the woman in curlers and a clay mask who has put the whole world on hold, zipped on for a lazy Sunday and the campus coffee run.</p>
<p>A chubby, warty toad sits on a lily pad in pink hair curlers and a green clay face mask with a cucumber slice over each eye, one hand raised in a firm stop and entirely unimpressed. NOT TODAY. runs above it and I'M MOISTURIZING. below in heavy slab capitals, the second block wider than the first: pink and cream on Navy, forest green and navy on Ash. The full scene prints large on the back. On the front, a toad's face with a cucumber slice over each eye and curlers on top is embroidered on the left chest, and the words MASK ON are stitched on the left cuff, in navy thread on Ash and white thread on Navy. Zip it up and consider the matter closed. Original art, made for Graphic Tees Co. and printed and stitched the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester fleece, soft inside and outside</li>
<li>Fabric weight: 8 oz/yd²</li>
<li>Embroidered left-chest toad face and left-cuff MASK ON, printed back</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Sizes S–5XL (Ash runs S–3XL)</li>
<li>2 colors: Ash and Navy</li>
<li>Blank product sourced from Honduras and El Salvador</li>
</ul>
<h3>Questions</h3>
'''
faq=[
("Where are the print and the embroidery on this frog zip hoodie?","The full toad scene with NOT TODAY. above and I'M MOISTURIZING. below is printed across the back, so the zipper never splits the art. On the front, a small embroidered toad face with cucumber-slice eyes sits on the left chest with no words, and MASK ON is stitched on the left cuff, so the hoodie looks clean zipped or open."),
("Is it a frog or a toad?","A toad, a warty one, and proud of it. The Not Today, I'm Moisturizing zip hoodie from Graphic Tees Co. is a frog hoodie for anyone who loves the whole amphibian crowd, from the lily pad on the back to the toad face stitched on the chest."),
("How do I care for the embroidery on this hoodie?","Zip the Graphic Tees Co. hoodie, turn it inside out and wash cold with similar colors, then tumble dry on low or hang dry. Skip bleach and do not iron over the stitching. The toad on the chest and the MASK ON cuff are stitched thread, which keeps its shape wash after wash with gentle care."),
("Why Ash and Navy, and how does it fit?","The sage, pink and cream art reads softly on light Ash and bright on dark Navy. It is a regular-fit unisex zip-up in sizes S through 3XL on Ash and up to 5XL on Navy, and Graphic Tees Co. offers one free size exchange within 30 days of delivery."),
("Is it a good gift for a frog lover, and when should I order for Christmas?","Yes, for the friend with a frog collection and a firm no-texting policy on spa nights. Graphic Tees Co. makes each embroidered hoodie to order, so for Christmas order by about December 8. Orders over $45 ship free in the US."),
]
h+='\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q,a in faq)
seo={"title":"Frog Hoodie – Not Today, I'm Moisturizing Zip-Up","description":"Frog hoodie: an unimpressed toad in curlers and a clay mask on the back, NOT TODAY. I'M MOISTURIZING., plus an embroidered toad face on the chest. Ash or Navy."}
print(len(seo['title']),len(seo['description']),[len(a.split()) for q,a in faq])
json.dump({"id":"gid://shopify/Product/15362485322032","title":"Women's Frog – Not Today, I'm Moisturizing Embroidered Zip Hoodie","descriptionHtml":h,"seo":seo},open('designs/c886/input.json','w'),ensure_ascii=False,separators=(',',':'))
