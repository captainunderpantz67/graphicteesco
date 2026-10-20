import json,os
H='unisex-homebody-plans-canceled-mood-improved-sweatpants'
hook=("PLANS CANCELED. MOOD IMPROVED. runs down the left leg of these fleece sweatpants for the homebody who is secretly thrilled the plans fell through, on lazy Sundays, on cold mornings and on Christmas morning.")
art=("Above the words, a sleepy orange tabby is tucked under a knitted blanket on a round armchair, one paw draped over a face-down phone. PLANS CANCELED. runs up the leg in orange and MOOD IMPROVED. closes it in cream, both in tall, heavy condensed capitals.")
wear=("It matches the <a href=\"/products/unisex-homebody-plans-canceled-mood-improved-hoodie\">Plans Canceled. Mood Improved. hoodie</a>, so the two make a matching sweatsuit for the couch, the group chat excuse and the gift exchange. Original art, made for Graphic Tees Co. and printed the day you order it.")
qa=[
("Do these sweatpants fit true to size?","The Graphic Tees Co. Plans Canceled. Mood Improved. sweatpants are a unisex jogger cut with a ribbed waist, elastic inside the waistband, flat drawstrings and cuffed legs, in sizes XS through 2XL. Order your usual size, or go up one for a roomier lounge fit."),
("What are the sweatpants made of?","They are Cotton Heritage M7580 fleece sweatpants: a 100% cotton face over a 65% cotton, 35% polyester blend, tightly knit 3-end fleece with 5-thread stitching. They have two cross pockets in front and one top-stitched patch pocket on the back of the right leg."),
("How do I wash them?","Turn the sweatpants inside out, wash cold with like colors, and tumble dry low or hang dry. The print is applied directly to the fabric, so skipping high heat and bleach keeps the lettering bright. Wash the Graphic Tees Co. sweatpants separately from towels, which shed lint onto fleece."),
("What if the size is wrong?","Graphic Tees Co. gives one free size exchange within 30 days of delivery: we print the new size and you do not mail anything back. If the print arrives misprinted or the sweatpants arrive damaged, we reprint or refund them within 30 days of delivery."),
("Does it match the hoodie?","Yes. The Plans Canceled. Mood Improved. hoodie from Graphic Tees Co. carries the same orange tabby and the same words. The sweatpants come in Navy Blazer and Charcoal Heather, and the hoodie comes in Navy and Sand, so Navy Blazer matches the navy hoodie."),
("When should I order for Christmas?","Order by about December 8 so your Graphic Tees Co. sweatpants arrive before Christmas. Each pair is printed in 2-5 business days, then shipped, so ordering by that date leaves room for delivery. Sooner is safer if you also want the matching hoodie in the same order."),
]
for q,a in qa: print(len(a.split()),q)
faq=''.join(f'<p><strong>{q}</strong><br>{a}</p>\n' for q,a in qa)
d=(f"<h3>The Story</h3>\n<p>{hook}</p>\n<p>{art}</p>\n<p>{wear}</p>\n"
"<h3>Details &amp; Fit</h3>\n<ul>\n<li>Unisex jogger fit with cuffed, side-seamed legs, XS to 2XL</li>\n<li>100% cotton face, 65% cotton and 35% polyester blend, tightly knit 3-end fleece lining</li>\n<li>Ribbed waist, cuffs and gusset at the crotch, with elastic inside the waistband and flat matching drawstrings</li>\n<li>2 cross pockets in front and a top-stitched patch pocket on the back of the right leg</li>\n<li>Printed on the front left leg: orange tabby art with orange and cream lettering and a dark keyline, on both colors</li>\n<li>Colors: Navy Blazer, Charcoal Heather</li>\n<li>Blank product sourced from Pakistan</li>\n</ul>\n"
f"<h3>Questions</h3>\n{faq}")
s={"title":"Unisex Homebody – Plans Canceled. Mood Improved. Sweatpants","handle":H,"slug":"unisex-homebody-plans-canceled-sweatpants","catalog":412,"colors":["Navy Blazer","Charcoal Heather"],"sizes":["XS","S","M","L","XL","2XL"],"price":"44.99","productType":"Sweatpants",
"tags":["sweatpants","sweatsuit-sets","ai-art","intake-done"],
"seo":{"title":"Fleece Sweatpants: Plans Canceled Mood Improved","description":"Funny fleece sweatpants: a sleepy tabby and PLANS CANCELED. MOOD IMPROVED. down the left leg. Unisex, XS-2XL, matches our homebody hoodie."},"descriptionHtml":d}
print(len(s['seo']['title']),len(s['seo']['description']))
for w in ('frame','badge','shape behind','border'): print(w, w in d.lower())
os.makedirs('/tmp/claude-0/s',exist_ok=True)
json.dump(s,open('/tmp/claude-0/s/spec714.json','w'))
