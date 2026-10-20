import json
title="Unisex Turtle – Shell of a Person. Hoodie"
story=["<p>SHELL OF A PERSON. is the turtle hoodie for the friend at the end of a long week, flat on the couch with nothing left, made for the grocery run in sweats, early classes and every Sunday that needs a nap.</p>",
"<p>SHELL OF runs across the top in heavy slab capitals and A PERSON. fills the bottom, even wider. Between them a small green box turtle lies flat on a patch of clover with its legs splayed and its chin on the ground, eyes half closed, head halfway into its domed shell, a tiny paper cup tipped over beside one front foot.</p>",
"<p>Navy carries cream and mustard lettering with a cream edge around the turtle; Sand gets deep green-black and faded red lettering. Original art, made for Graphic Tees Co. and printed the day you order it.</p>"]
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
faq=[("Is this turtle hoodie warm enough for cold days?","Yes. The Shell of a Person. hoodie from Graphic Tees Co. is a Gildan 18500 pullover in 8 oz fleece, 50% cotton and 50% polyester, with a double-lined hood and a front pouch pocket. It is an easy layer for chilly mornings, cold classrooms and long days on the couch."),
("How does the Shell of a Person. hoodie fit?","It is a classic unisex cut in sizes S through 3XL. Order your usual size for a regular fit, or go up one for a roomier, comfier layer. If it is not right, Graphic Tees Co. offers a free size exchange, so the first pick carries no risk at all."),
("Is this a good gift for a worn-out friend?","It is a natural one. Everyone has a friend who is a shell of a person by Friday, and the flat turtle makes the joke land without a word of explanation. It comes in Sand and Navy, prints to order, and the free size exchange covers a wrong guess on size."),
("How do I wash the hoodie so the print lasts?","Turn the Graphic Tees Co. hoodie inside out, wash it in cold water with similar colors and tumble dry on low. Skip bleach and ironing on the print. The design is printed directly on the fabric, so gentle care keeps the lettering and the tired turtle sharp wash after wash."),
("When should I order for Christmas delivery?","Order by about December 8 to have the Shell of a Person. hoodie for Christmas. Each Graphic Tees Co. hoodie is printed to order after you buy, and shipping is free on orders over $45. Orders placed after that date may arrive after the holiday, so earlier is safer.")]
for q,a in faq: print(len(a.split()))
h="<h3>The Story</h3>\n"+"\n".join(story)+"\n"+det+"<h3>Questions</h3>\n"+"\n".join(f"<p><strong>{q}</strong><br>{a}</p>" for q,a in faq)+"\n"
s={"title":title,"handle":"unisex-turtle-shell-of-a-person-hoodie","slug":"turtle-shell-hoodie","catalog":146,"colors":["Sand","Navy"],"sizes":["S","M","L","XL","2XL","3XL"],"price":"39.99","productType":"Hoodie",
"tags":["graphic-hoodies-for-men","graphic-hoodies-for-women","hoodie","turtle","ai-art","intake-done"],"seo":{"title":"Turtle Hoodie – Shell of a Person.","description":"A funny turtle hoodie for the friend who is a shell of a person: a worn-out box turtle flat on the clover. Gildan pullover, 8 oz fleece, Sand or Navy."},"descriptionHtml":h}
print(len(s['seo']['title']),len(s['seo']['description']))
json.dump(s,open('designs/c754/spec.json','w'))
