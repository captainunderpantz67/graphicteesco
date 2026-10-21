import json
H='womens-gym-lift-heavy-reply-later-embroidered-zip-hoodie'
h='''<h3>The Story</h3>
<p>This gym zip up hoodie is for the woman who lifts first and answers the phone later, zipped on over a tank for the gym parking lot at 6 a.m. and the cooldown walk.</p>
<p>A woman in a headband and lifting boots sets up a deadlift over a loaded barbell while a rotary phone rings on a bench behind her, in red, cream, mustard and navy with a worn print texture. LIFT HEAVY. runs above it and REPLY LATER. below in heavy condensed capitals, the second line a touch wider than the first: coral and cream on Black and Navy, dark red and navy on Ash. The full print is on the back. On the front, a small kettlebell beside a face-down phone is embroidered on the left chest, and the word LATER is stitched on the left cuff, in white thread on Black and Navy and navy thread on Ash. Original art, made for Graphic Tees Co. and printed and stitched the day you order it.</p>
<h3>Details &amp; Fit</h3>
<ul>
<li>Regular fit zip-up hoodie with a metal zipper</li>
<li>50% cotton, 50% polyester fleece, soft inside and outside</li>
<li>Fabric weight: 8 oz/yd²</li>
<li>Embroidered left-chest kettlebell and phone and left-cuff LATER, printed back</li>
<li>Front pouch pockets and an unlined hood with color-matched drawcord</li>
<li>Double-needle stitching at shoulders, armholes, neck, waistband and cuffs</li>
<li>Sizes S–3XL</li>
<li>3 colors: Black, Navy and Ash</li>
<li>Blank product sourced from Honduras and El Salvador</li>
</ul>
<h3>Questions</h3>
'''
faq=[
("How does the Lift Heavy. Reply Later. zip hoodie fit?","The Lift Heavy. Reply Later. gym zip up hoodie from Graphic Tees Co. is a regular unisex fit in sizes S through 3XL. Order your usual size for an easy layer over a tank or tee, or go up one for a roomier fit. The first size exchange within 30 days is free."),
("Is this gym hoodie warm enough for early workouts?","It is a mid-weight layer. The Graphic Tees Co. zip hoodie is a Gildan 18600 in 8 oz fleece, 50% cotton and 50% polyester, soft inside and outside, with a metal zipper, front pouch pockets and an unlined hood. It handles cold parking lots, warm-ups and the drive home well."),
("Where are the print and the embroidery on this zip hoodie?","The full design, LIFT HEAVY. above the lifter, the loaded barbell and the ringing phone, and REPLY LATER. below, is printed across the back so the zipper never splits it. On the front, a small embroidered kettlebell and face-down phone sit on the left chest with no words, and LATER is stitched on the left cuff."),
("How do I care for the embroidery on this hoodie?","Zip the Graphic Tees Co. hoodie, turn it inside out and wash cold with similar colors, then tumble dry on low or hang dry. Skip bleach and do not iron over the stitching. The kettlebell on the chest and the LATER cuff are stitched thread, which keeps its shape wash after wash with gentle care."),
("Is it a good gift for a lifter, and when should I order for Christmas?","Yes, for the friend who leaves your texts on read until the last set is done. Graphic Tees Co. makes each embroidered hoodie to order, so for Christmas order by about December 8. Orders over $45 ship free in the US, and one free size exchange within 30 days covers a wrong guess on size."),
]
h+='\n'.join(f'<p><strong>{q}</strong><br>{a}</p>' for q,a in faq)
s={"title":"Women's Gym – Lift Heavy. Reply Later. Embroidered Zip Hoodie","handle":H,"slug":H,"catalog":692,"colors":["Black","Navy","Ash"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"57.99","productType":"Hoodie","tags":["zip-up-hoodies","zip-up-hoodies-for-women","graphic-hoodies-for-women","black-zip-up-hoodies","hoodie","ai-art","intake-done"],"seo":{"title":"Gym Zip Up Hoodie – Lift Heavy. Reply Later.","description":"A gym zip up hoodie: LIFT HEAVY. REPLY LATER. on the back over a deadlifter and a ringing phone, plus an embroidered kettlebell and phone on the chest."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c896/spec.json','w'),ensure_ascii=False)
