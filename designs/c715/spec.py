import json,os
H='unisex-national-park-the-view-better-be-worth-it-sweatpants'
HL='/products/unisex-national-park-switchbacks-build-character-heavyweight-hoodie'
hook=("THE VIEW BETTER BE WORTH IT. runs down the left leg of these vintage-style fleece sweatpants for the hiker who complains on every switchback and keeps climbing anyway, on trail days, lazy Sundays and Christmas morning.")
art=("Above the words, a grumpy marmot with an orange pack and a trekking pole trudges up a zigzag trail on a jagged peak, pine trees at its base and birds circling the summit. THE VIEW BETTER runs up the leg in cream capitals and BE WORTH IT. closes it in orange.")
wear=(f"It matches the <a href=\"{HL}\">Switchbacks Build Character heavyweight hoodie</a>, which carries the same marmot and the same line, so the two make a matching sweatsuit for the trailhead, the couch and the gift exchange. Original art, made for Graphic Tees Co. and printed the day you order it.")
qa=[
("Do these sweatpants fit true to size?","The Graphic Tees Co. The View Better Be Worth It. sweatpants are a unisex jogger cut with a ribbed waist, elastic inside the waistband, flat drawstrings and cuffed legs, in sizes XS through 2XL. Order your usual size, or go up one for a roomier lounge fit."),
("What are the sweatpants made of?","They are Cotton Heritage M7580 fleece sweatpants: a 100% cotton face over a 65% cotton, 35% polyester blend, tightly knit 3-end fleece with 5-thread stitching. They have two cross pockets in front and one top-stitched patch pocket on the back of the right leg."),
("How do I wash them?","Turn the sweatpants inside out, wash cold with like colors, and tumble dry low or hang dry. The print is applied directly to the fabric, so skipping high heat and bleach keeps the lettering bright. Wash the Graphic Tees Co. sweatpants separately from towels, which shed lint onto fleece."),
("What if the size is wrong?","Graphic Tees Co. gives one free size exchange within 30 days of delivery: we print the new size and you do not mail anything back. If the print arrives misprinted or the sweatpants arrive damaged, we reprint or refund them within 30 days of delivery."),
("Does it match the hoodie?","Yes. The Switchbacks Build Character heavyweight hoodie from Graphic Tees Co. carries the same marmot and the same words. The sweatpants come in Military Green and Navy Blazer, and the hoodie comes in Sandstone and Storm Blue, so Navy Blazer sits closest to the blue hoodie."),
("When should I order for Christmas?","Order by about December 8 so your Graphic Tees Co. sweatpants arrive before Christmas. Each pair is printed in 2-5 business days, then shipped, so ordering by that date leaves room for delivery. Sooner is safer if you also want the matching hoodie in the same order."),
]
for q,a in qa: print(len(a.split()),q)
faq=''.join(f'<p><strong>{q}</strong><br>{a}</p>\n' for q,a in qa)
d=(f"<h3>The Story</h3>\n<p>{hook}</p>\n<p>{art}</p>\n<p>{wear}</p>\n"
"<h3>Details &amp; Fit</h3>\n<ul>\n<li>Unisex jogger fit with cuffed, side-seamed legs, XS to 2XL</li>\n<li>100% cotton face, 65% cotton and 35% polyester blend, tightly knit 3-end fleece lining</li>\n<li>Ribbed waist, cuffs and gusset at the crotch, with elastic inside the waistband and flat matching drawstrings</li>\n<li>2 cross pockets in front and a top-stitched patch pocket on the back of the right leg</li>\n<li>Printed on the front left leg: marmot and mountain art with cream and orange lettering, on both colors</li>\n<li>Colors: Military Green, Navy Blazer</li>\n<li>Blank product sourced from Pakistan</li>\n</ul>\n"
f"<h3>Questions</h3>\n{faq}")
s={"title":"Unisex National Park – The View Better Be Worth It. Sweatpants","handle":H,"slug":"unisex-national-park-view-sweatpants","catalog":412,"colors":["Military Green","Navy Blazer"],"sizes":["XS","S","M","L","XL","2XL"],"price":"44.99","productType":"Sweatpants",
"tags":["sweatpants","sweatsuit-sets","ai-art","intake-done"],
"seo":{"title":"Vintage Sweatpants: The View Better Be Worth It","description":"Funny vintage-style fleece sweatpants: a grumpy marmot and THE VIEW BETTER BE WORTH IT. down the left leg. Unisex, XS-2XL, matches our hiking hoodie."},"descriptionHtml":d}
print(len(s['seo']['title']),len(s['seo']['description']))
for w in ('frame','badge','shape behind','border'): print(w, w in d.lower())
json.dump(s,open('/tmp/claude-0/s/spec715.json','w'))
