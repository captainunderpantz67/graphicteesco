import json
title="Unisex Poker – I Fold. It's Self-Care. Hoodie"
story=["<p>I FOLD. IT'S SELF-CARE. is the poker hoodie for the home-game regular who folds every hand and calls it wellness, worn to game night, the casino trip and the couch afterwards.</p>",
"<p>I FOLD. runs across the top in tall condensed capitals and IT'S SELF-CARE. fills the bottom, much wider. Between them a droopy-eyed basset hound in a green dealer's visor sits at the corner of a green felt table, calmly pushing its face-down cards away with one paw while a neat stack of red and cream chips sits untouched beside it.</p>",
"<p>Navy carries cream and mustard lettering with a cream edge around the dog; Sand gets deep green-black and faded red lettering. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
det="""<h3>Details &amp; Fit</h3>
<ul>
<li>Classic unisex fit, pullover with a double-lined hood and matching drawcord</li>
<li>50% pre-shrunk cotton, 50% polyester</li>
<li>Fabric weight: 8.0 oz/yd²</li>
<li>Air-jet spun yarn with a soft feel</li>
<li>Front pouch pocket, ribbed cuffs and waistband with spandex</li>
<li>Sizes S–3XL</li>
<li>Colors: Sand, Navy</li>
<li>Blank product sourced from Bangladesh, Nicaragua, Honduras or El Salvador</li>
</ul>
"""
faq=[("Is this hoodie warm enough for a cold game night?","Yes. The I Fold. It's Self-Care. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for a chilly garage game, a long night at the table or the drive home."),
("How does the I Fold. It's Self-Care. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier, cozier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a poker player?","It is a natural one. Anyone who folds more hands than they play knows the excuse, so it lands with home-game regulars, casino-trip friends and the one who always leaves early. It comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the serene basset sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the I Fold. It's Self-Care. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"unisex-poker-i-fold-its-self-care-hoodie","slug":"poker-fold-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","graphic-hoodies-for-women","hoodie","poker","ai-art","intake-done"],"seo":{"title":"Poker Hoodie – I Fold. It's Self-Care.","description":"A funny poker hoodie for the player who folds and calls it wellness: I FOLD. IT'S SELF-CARE. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c755/spec.json','w'))
