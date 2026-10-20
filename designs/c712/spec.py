import json,os
H='mens-hunting-todays-special-tag-soup-sweatpants'
hook=("Tag soup is what a hunter eats when the season ends with the tag still in his pocket, and these mens sweatpants carry the joke down the left leg for the guy who came home empty-handed and made a bowl of soup anyway, in the deer blind, on cold mornings and on Christmas morning.")
art=("Above the words, a deer in a chef's hat ladles soup from a green and orange striped bowl while an orange hunting tag floats in the broth and steam curls off both sides. Today's Special runs up the leg in orange script, and TAG SOUP closes it in heavy cream slab letters with a black outline.")
wear=("It matches the <a href=\"/products/mens-hunting-todays-special-tag-soup-hoodie\">Today's Special: Tag Soup hoodie</a>, so the two make a matching sweatsuit for the deer camp, the couch and the gift exchange. Original art, made for Graphic Tees Co. and printed the day you order it.")
qa=[
("Do these hunting sweatpants fit true to size?","The Graphic Tees Co. Today's Special: Tag Soup sweatpants are a unisex jogger cut with a ribbed waist, elastic inside the waistband, a drawstring and cuffed legs, in sizes XS through 2XL. Order your usual size, or go up one for a roomier lounge fit."),
("What are the sweatpants made of?","They are Cotton Heritage M7580 fleece sweatpants: a 100% cotton face over a 65% cotton, 35% polyester blend, tightly knit 3-end fleece with 5-thread stitching. They have two cross pockets in front and one top-stitched patch pocket on the back of the right leg."),
("How do I wash them?","Turn the sweatpants inside out, wash cold with like colors, and tumble dry low or hang dry. The print is applied directly to the fabric, so skipping high heat and bleach keeps the cream and orange lettering bright. Wash the Graphic Tees Co. sweatpants separately from towels, which shed lint onto fleece."),
("What if the size is wrong?","Graphic Tees Co. gives one free size exchange within 30 days of delivery: we print the new size and you do not mail anything back. If the print arrives misprinted or the sweatpants arrive damaged, we reprint or refund them within 30 days of delivery."),
("Does it match the hoodie?","Yes. The Today's Special: Tag Soup hoodie from Graphic Tees Co. carries the same deer chef, the same orange tag and the same words in cream and orange. The sweatpants come in Military Green and Black, and the hoodie comes in Military Green too, so the set looks planned."),
("When should I order for Christmas?","Order by about December 8 so your Graphic Tees Co. sweatpants arrive before Christmas. Each pair is printed in 2-5 business days, then shipped, so ordering by that date leaves room for delivery. Sooner is safer if you also want the matching hoodie in the same order."),
]
for q,a in qa: print(len(a.split()),q)
faq=''.join(f'<p><strong>{q}</strong><br>{a}</p>\n' for q,a in qa)
d=(f"<h3>The Story</h3>\n<p>{hook}</p>\n<p>{art}</p>\n<p>{wear}</p>\n"
"<h3>Details &amp; Fit</h3>\n<ul>\n<li>Unisex jogger fit with cuffed, side-seamed legs, XS to 2XL</li>\n<li>100% cotton face, 65% cotton and 35% polyester blend, tightly knit 3-end fleece lining</li>\n<li>Ribbed waist, cuffs and gusset at the crotch, with elastic inside the waistband and flat matching drawstrings</li>\n<li>2 cross pockets in front and a top-stitched patch pocket on the back of the right leg</li>\n<li>Printed on the front left leg: deer chef art and the words, cream and orange ink with a black outline on dark fleece</li>\n<li>Colors: Military Green, Black</li>\n<li>Blank product sourced from Pakistan</li>\n</ul>\n"
f"<h3>Questions</h3>\n{faq}")
s={"title":"Men's Hunting – Today's Special: Tag Soup Sweatpants","handle":H,"slug":"mens-hunting-tag-soup-sweatpants","catalog":412,"colors":["Military Green","Black"],"sizes":["XS","S","M","L","XL","2XL"],"price":"44.99","productType":"Sweatpants",
"tags":["sweatpants","sweatsuit-sets","ai-art","intake-done"],
"seo":{"title":"Mens Sweatpants: Tag Soup Hunting Joke","description":"Funny mens sweatpants: a deer chef, an orange tag in the soup and TAG SOUP down the left leg. Unisex fleece, XS-2XL, matches our Tag Soup hunting hoodie."},"descriptionHtml":d}
print(len(s['seo']['title']),len(s['seo']['description']))
for w in ('frame','badge','shape behind','border'): print(w, w in d.lower())
os.makedirs('/tmp/claude-0/s',exist_ok=True)
json.dump(s,open('/tmp/claude-0/s/spec712.json','w'))
