import json
H='womens-bookish-plot-twist-i-stayed-in-embroidered-zip-hoodie'
h='''<h3>The Story</h3>
<p>This bookish zip up hoodie is for the woman whose plot twist is staying in with the cat, a tall stack of books and a warm mug, zipped on for the library steps and the couch.</p>
<p>A striped armchair holds a tall stack of books with a steaming mug on top, a crocheted blanket spilling off the arm and a sleeping tabby curled up beside a reading lamp, in cream, sage, mustard, terracotta and brown with a worn print texture. PLOT TWIST: runs above it and I STAYED IN below in heavy serif capitals, the second line a touch wider than the first: terracotta and navy on Ash, orange and yellow on Black and Navy. The full print is on the back. On the front, a small open book under a little house roof is embroidered on the left chest, and the word CHAPTER is stitched on the left cuff, in white thread on Black and Navy and navy thread on Ash. Original art, made for Graphic Tees Co. and printed and stitched the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester fleece, soft inside and outside</li>
<li>Fabric weight: 8 oz/yd²</li>
<li>Embroidered left-chest book under a house roof and left-cuff CHAPTER, printed back</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Sizes S–3XL</li>
<li>3 colors: Black, Navy and Ash</li>
<li>Blank product sourced from Honduras and El Salvador</li>
</ul>
<h3>Questions</h3>
'''
faq=[
("How does the Plot Twist: I Stayed In zip hoodie fit?","The Plot Twist: I Stayed In bookish zip up hoodie from Graphic Tees Co. is a regular unisex fit in sizes S through 3XL. Order your usual size for an easy layer over a tee, or go up one for a roomier reading-chair fit. The first size exchange within 30 days is free."),
("Is this bookish hoodie warm enough for a cold library or couch?","It is a mid-weight layer. The Graphic Tees Co. zip hoodie is a Gildan 18600 in 8 oz fleece, 50% cotton and 50% polyester, soft inside and outside, with a metal zipper, front pouch pockets and an unlined hood. It handles chilly library aisles, autumn walks and long evenings on the couch well."),
("Where are the print and the embroidery on this zip hoodie?","The full design, PLOT TWIST: above the armchair, books, mug and sleeping cat, and I STAYED IN below, is printed across the back so the zipper never splits it. On the front, a small embroidered open book under a house roof sits on the left chest with no words, and CHAPTER is stitched on the left cuff."),
("How do I care for the embroidery on this hoodie?","Zip the Graphic Tees Co. hoodie, turn it inside out and wash cold with similar colors, then tumble dry on low or hang dry. Skip bleach and do not iron over the stitching. The book on the chest and the CHAPTER cuff are stitched thread, which keeps its shape wash after wash with gentle care."),
("Is it a good gift for a book lover, and when should I order for Christmas?","Yes, for the reader who cancels plans for a chapter. Graphic Tees Co. makes each embroidered hoodie to order, so for Christmas order by about December 8. Orders over $45 ship free in the US, and one free size exchange within 30 days covers a wrong guess on size."),
]
print([len(a.split()) for q,a in faq])
h+='\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q,a in faq)
s={"title":"Women's Bookish – Plot Twist: I Stayed In Embroidered Zip Hoodie","handle":H,"slug":H,"catalog":692,"colors":["Navy","Black","Ash"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"57.99","productType":"Hoodie","tags":["zip-up-hoodies","zip-up-hoodies-for-women","graphic-hoodies-for-women","black-zip-up-hoodies","hoodie","ai-art","intake-done"],"seo":{"title":"Bookish Zip Up Hoodie – Plot Twist: I Stayed In","description":"A bookish zip up hoodie: PLOT TWIST: I STAYED IN on the back over an armchair, a stack of books, a mug and a sleeping cat, plus an embroidered book on the chest."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c899/spec.json','w'),ensure_ascii=False)
