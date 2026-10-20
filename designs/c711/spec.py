import json,re
H='mens-gym-rack-your-weights-respectfully-sweatpants'
hook=("Rack your weights. Respectfully. These gym sweatpants carry the line down the left leg for the lifter who re-racks everyone else's plates and says so politely, in the lounge, on cold mornings and on Christmas morning.")
art=("Above the words, a butler in a top hat and tails and white gloves carries an iron plate on a silver tray toward an empty weight rack, with a trail of loose plates behind him. RACK YOUR WEIGHTS. runs up the leg in heavy near-black slab letters, and Respectfully. closes it in a gold italic.")
wear=("It matches the <a href=\"/products/mens-gym-rack-your-weights-respectfully-oversized-hoodie\">Rack Your Weights. Respectfully. oversized hoodie</a>, so the two make a matching sweatsuit for the gym, the couch and the gift exchange. Original art, made for Graphic Tees Co. and printed the day you order it.")
qa=[
("Do these gym sweatpants fit true to size?","The Graphic Tees Co. Rack Your Weights. Respectfully. sweatpants are a unisex jogger cut with a ribbed waist, elastic inside the waistband, a drawstring and cuffed legs, in sizes XS through 2XL. Order your usual size, or go up one for a roomier lounge fit."),
("What are the sweatpants made of?","They are Cotton Heritage M7580 fleece sweatpants: a 100% cotton face over a 65% cotton, 35% polyester blend, tightly knit 3-end fleece with 5-thread stitching. They have two cross pockets in front and one top-stitched patch pocket on the back of the right leg."),
("How do I wash them?","Turn the sweatpants inside out, wash cold with like colors, and tumble dry low or hang dry. The print is applied directly to the fabric, so skipping high heat and bleach keeps the gold lettering bright. Wash the Graphic Tees Co. sweatpants separately from towels, which shed lint onto fleece."),
("What if the size is wrong?","Graphic Tees Co. gives one free size exchange within 30 days of delivery: we print the new size and you do not mail anything back. If the print arrives misprinted or the sweatpants arrive damaged, we reprint or refund them within 30 days of delivery."),
("Does it match the hoodie?","Yes. The Rack Your Weights. Respectfully. oversized hoodie from Graphic Tees Co. carries the same butler and the same words in near-black and gold. The sweatpants come in Carbon Grey and White, which sit close to the hoodie's Dust and Athletic Heather, so the set looks planned."),
("When should I order for Christmas?","Order by about December 8 so your Graphic Tees Co. sweatpants arrive before Christmas. Each pair is printed in 2-5 business days, then shipped, so ordering by that date leaves room for delivery. Sooner is safer if you also want the matching hoodie in the same order."),
]
for q,a in qa: print(len(a.split()),q)
faq=''.join(f'<p><strong>{q}</strong><br>{a}</p>\n' for q,a in qa)
d=(f"<h3>The Story</h3>\n<p>{hook}</p>\n<p>{art}</p>\n<p>{wear}</p>\n"
"<h3>Details &amp; Fit</h3>\n<ul>\n<li>Unisex jogger fit with cuffed, side-seamed legs, XS to 2XL</li>\n<li>100% cotton face, 65% cotton and 35% polyester blend, tightly knit 3-end fleece lining</li>\n<li>Ribbed waist, cuffs and gusset at the crotch, with elastic inside the waistband and flat matching drawstrings</li>\n<li>2 cross pockets in front and a top-stitched patch pocket on the back of the right leg</li>\n<li>Printed on the front left leg: butler art and the words, near-black ink and gold ink on light fleece</li>\n<li>Colors: Carbon Grey, White</li>\n<li>Blank product sourced from Pakistan</li>\n</ul>\n"
f"<h3>Questions</h3>\n{faq}").replace("<p><strong>","<p><strong>")
s={"title":"Men's Gym – Rack Your Weights. Respectfully. Sweatpants","handle":H,"slug":"mens-gym-rack-sweatpants","catalog":412,"colors":["Carbon Grey","White"],"sizes":["XS","S","M","L","XL","2XL"],"price":"44.99","productType":"Sweatpants",
"tags":["sweatpants","sweatsuit-sets","ai-art","intake-done"],
"seo":{"title":"Rack Your Weights. Respectfully. Gym Sweatpants for Men","description":"Funny gym sweatpants: a top-hatted butler and RACK YOUR WEIGHTS. Respectfully. down the left leg. Unisex fleece, XS-2XL, matches our gym hoodie."},"descriptionHtml":d}
print(len(s['seo']['title']),len(s['seo']['description']))
for w in ('frame','badge','shape behind','border'): print(w, w in d.lower())
json.dump(s,open('/tmp/claude-0/s/spec711.json','w'))
