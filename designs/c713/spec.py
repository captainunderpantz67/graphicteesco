import json,os
H='womens-cat-do-not-disturb-biscuits-sweatpants'
hook=("DO NOT DISTURB. BISCUITS IN PROGRESS. runs down the left leg of these womens sweatpants for the cat mom pinned to the couch by a kneading cat, on lazy Sundays, on cold mornings and on Christmas morning.")
art=("Above the words, a round calico cat with her eyes squeezed shut kneads a chunky pink and blue knit blanket with both front paws, a ball of pink yarn rolled beside her. DO NOT DISTURB. runs up the leg in heavy slab letters, and BISCUITS IN PROGRESS. closes it in two lines of the same slab type.")
wear=("It matches the <a href=\"/products/womens-cat-making-biscuits-hoodie\">Do Not Disturb. Biscuits in Progress. hoodie</a>, so the two make a matching sweatsuit for the couch, the cat's favorite blanket and the gift exchange. Original art, made for Graphic Tees Co. and printed the day you order it.")
qa=[
("Do these womens sweatpants fit true to size?","The Graphic Tees Co. Do Not Disturb. Biscuits in Progress. sweatpants are a unisex jogger cut with a ribbed waist, elastic inside the waistband, flat drawstrings and cuffed legs, in sizes XS through 2XL. Order your usual size, or go up one for a roomier lounge fit."),
("What are the sweatpants made of?","They are Cotton Heritage M7580 fleece sweatpants: a 100% cotton face over a 65% cotton, 35% polyester blend, tightly knit 3-end fleece with 5-thread stitching. They have two cross pockets in front and one top-stitched patch pocket on the back of the right leg."),
("How do I wash them?","Turn the sweatpants inside out, wash cold with like colors, and tumble dry low or hang dry. The print is applied directly to the fabric, so skipping high heat and bleach keeps the lettering bright. Wash the Graphic Tees Co. sweatpants separately from towels, which shed lint onto fleece."),
("What if the size is wrong?","Graphic Tees Co. gives one free size exchange within 30 days of delivery: we print the new size and you do not mail anything back. If the print arrives misprinted or the sweatpants arrive damaged, we reprint or refund them within 30 days of delivery."),
("Does it match the hoodie?","Yes. The Do Not Disturb. Biscuits in Progress. hoodie from Graphic Tees Co. carries the same calico cat and the same words. The sweatpants come in Navy Blazer and Dusty Rose, and the hoodie comes in Navy and Sand, so Navy Blazer matches the navy hoodie."),
("When should I order for Christmas?","Order by about December 8 so your Graphic Tees Co. sweatpants arrive before Christmas. Each pair is printed in 2-5 business days, then shipped, so ordering by that date leaves room for delivery. Sooner is safer if you also want the matching hoodie in the same order."),
]
for q,a in qa: print(len(a.split()),q)
faq=''.join(f'<p><strong>{q}</strong><br>{a}</p>\n' for q,a in qa)
d=(f"<h3>The Story</h3>\n<p>{hook}</p>\n<p>{art}</p>\n<p>{wear}</p>\n"
"<h3>Details &amp; Fit</h3>\n<ul>\n<li>Unisex jogger fit with cuffed, side-seamed legs, XS to 2XL</li>\n<li>100% cotton face, 65% cotton and 35% polyester blend, tightly knit 3-end fleece lining</li>\n<li>Ribbed waist, cuffs and gusset at the crotch, with elastic inside the waistband and flat matching drawstrings</li>\n<li>2 cross pockets in front and a top-stitched patch pocket on the back of the right leg</li>\n<li>Printed on the front left leg: calico cat art and the words, cream and pink ink with a dark keyline on Navy Blazer, dark brown and wine ink on Dusty Rose</li>\n<li>Colors: Navy Blazer, Dusty Rose</li>\n<li>Blank product sourced from Pakistan</li>\n</ul>\n"
f"<h3>Questions</h3>\n{faq}")
s={"title":"Women's Cat – Do Not Disturb. Biscuits in Progress. Sweatpants","handle":H,"slug":"womens-cat-biscuits-sweatpants","catalog":412,"colors":["Navy Blazer","Dusty Rose"],"sizes":["XS","S","M","L","XL","2XL"],"price":"44.99","productType":"Sweatpants",
"tags":["sweatpants","sweatsuit-sets","ai-art","intake-done"],
"seo":{"title":"Womens Sweatpants: Do Not Disturb Cat Joke","description":"Funny womens sweatpants: a kneading calico cat and DO NOT DISTURB. BISCUITS IN PROGRESS. down the left leg. Unisex fleece, XS-2XL, matches our cat hoodie."},"descriptionHtml":d}
print(len(s['seo']['title']),len(s['seo']['description']))
for w in ('frame','badge','shape behind','border'): print(w, w in d.lower())
os.makedirs('/tmp/claude-0/s',exist_ok=True)
json.dump(s,open('/tmp/claude-0/s/spec713.json','w'))
