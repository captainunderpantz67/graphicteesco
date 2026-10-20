import json
title="Women's Nana – Mom Said No? That's Cute. Hoodie"
story=["<p>MOM SAID NO? THAT'S CUTE. is the grandma hoodie for the nana who runs her own rules at her house, made for Sunday cookie baking, the grandkids' visit and every holiday where she overrules their mother with a plate of cookies.</p>",
"<p>MOM SAID NO? runs across the top in heavy serif capitals and THAT'S CUTE. fills the bottom in bold pink script. Between them a grandmother in cat-eye glasses and a pink cardigan holds up a plate of chocolate chip cookies stacked a foot high, her flowered plum skirt swinging, a striped cookie jar with its lid knocked off beside her.</p>",
"<p>Navy carries cream and pink lettering with a cream edge around the art; Sand gets dark ink on the top line and pink on the script. It is the layer for a Christmas gift from the grandkids, or from mom, who is in on it. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this hoodie warm enough for a chilly kitchen?","Yes. The Mom Said No? That's Cute. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for cold mornings, cookie-baking afternoons and the walk out to the garden."),
("How does the Mom Said No? That's Cute. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier, cozier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a grandma?","It is a natural one. Every grandma has overruled a parent with a cookie, so the joke lands with nanas, grandkids and the moms who are in on it. The Graphic Tees Co. hoodie comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the cookie-stacking nana sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Mom Said No? That's Cute. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"womens-nana-mom-said-no-thats-cute-hoodie","slug":"nana-cute-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-women","hoodie","ai-art","intake-done"],"seo":{"title":"Grandma Hoodie – Mom Said No? That's Cute.","description":"A funny grandma hoodie for the nana who overrules mom with cookies: MOM SAID NO? THAT'S CUTE. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c699/spec.json','w'))
