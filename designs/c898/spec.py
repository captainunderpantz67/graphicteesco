import json
h='''<h3>The Story</h3>
<p>This tennis zip up hoodie is for the player whose backhand has opinions and shares them across the net, zipped on over a tennis dress at the courts and after the match.</p>
<p>A wooden tennis racket tied with a pink ribbon bow sits beside a fuzzy optic-yellow ball mid-bounce, in cream, sage, blush and yellow with a worn print texture. MY BACKHAND runs above it and HAS OPINIONS below in heavy condensed capitals, the second line a touch wider than the first: pink and yellow on Black and Navy, raspberry and navy on Ash. The full print is on the back. On the front, a small tennis racket and ball is embroidered on the left chest, and the word LOVE is stitched on the left cuff, in white thread on Black and Navy and navy thread on Ash. Original art, made for Graphic Tees Co. and printed and stitched the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester fleece, soft inside and outside</li>
<li>Fabric weight: 8 oz/yd²</li>
<li>Embroidered left-chest racket and ball and left-cuff LOVE, printed back</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Sizes S–3XL</li>
<li>3 colors: Black, Navy and Ash</li>
<li>Blank product sourced from Honduras and El Salvador</li>
</ul>
<h3>Questions</h3>
'''
faq=[
("How does the My Backhand Has Opinions zip hoodie fit?","The My Backhand Has Opinions tennis zip up hoodie from Graphic Tees Co. is a regular unisex fit in sizes S through 3XL. Order your usual size for an easy layer over a tennis dress, or go up one for a roomier fit. The first size exchange within 30 days is free."),
("Is this tennis hoodie warm enough for early matches?","It is a mid-weight layer. The Graphic Tees Co. zip hoodie is a Gildan 18600 in 8 oz fleece, 50% cotton and 50% polyester, soft inside and outside, with a metal zipper, front pouch pockets and an unlined hood. It handles cool morning courts and the walk back to the car well."),
("Where are the print and the embroidery on this zip hoodie?","The full design, MY BACKHAND above the racket with its ribbon bow and the bouncing ball, and HAS OPINIONS below, is printed across the back so the zipper never splits it. On the front, a small embroidered racket and ball sits on the left chest with no words, and LOVE is stitched on the left cuff."),
("How do I care for the embroidery on this hoodie?","Zip the Graphic Tees Co. hoodie, turn it inside out and wash cold with similar colors, then tumble dry on low or hang dry. Skip bleach and do not iron over the stitching. The racket on the chest and the LOVE cuff are stitched thread, which keeps its shape wash after wash with gentle care."),
("Is it a good gift for a tennis player, and when should I order for Christmas?","Yes, for the player who argues with the line judge and wins. Graphic Tees Co. makes each embroidered hoodie to order, so for Christmas order by about December 8. Orders over $45 ship free in the US, and one free size exchange within 30 days covers a wrong guess on size."),
]
print([len(a.split()) for q,a in faq])
h+='\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q,a in faq)
s={"title":"Women's Tennis – My Backhand Has Opinions Embroidered Zip Hoodie","handle":"womens-tennis-my-backhand-has-opinions-embroidered-zip-hoodie","slug":"womens-tennis-my-backhand-has-opinions-embroidered-zip-hoodie","catalog":692,"colors":["Navy","Black","Ash"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"57.99","productType":"Hoodie","tags":["zip-up-hoodies","zip-up-hoodies-for-women","graphic-hoodies-for-women","black-zip-up-hoodies","hoodie","ai-art","intake-done"],"seo":{"title":"Tennis Zip Up Hoodie – My Backhand Has Opinions","description":"A tennis zip up hoodie: MY BACKHAND HAS OPINIONS on the back with a vintage racket, ribbon bow and bouncing ball, plus an embroidered racket on the chest."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c898/spec.json','w'),ensure_ascii=False)
