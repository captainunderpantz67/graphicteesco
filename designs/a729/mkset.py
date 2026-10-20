import json,re,sys
SET={
'729':dict(title="Women's Christmas – I Did Christmas. Again. Long Sleeve Tee",handle="womens-christmas-family-credits-i-did-christmas-again-long-sleeve-tee",slug="credits-mom-ls",cat=356,cols=["White","Red"],sizes=["XS","S","M","L","XL","2XL"],price="32.99",ptype="T-Shirt",
 tags=["christmas-shirts","christmas-shirts-for-women","funny-christmas-shirts","graphic-tees-for-women","group-shirts","family-christmas-set","ai-art","intake-done"],category="gid://shopify/TaxonomyCategory/aa-1-13-8",
 short="I Did Christmas. Again.",who="mom",
 seo=("Matching Family Christmas Shirts: I Did Christmas. Again.","Matching family Christmas shirts, mom's piece: a long sleeve tee with a lopsided tree under I DID CHRISTMAS. AGAIN. Adult sizes XS–2XL."),
 one="I Did Christmas. Again. The mom's piece of our matching family Christmas shirts set, for the Christmas-morning photo: she did the shopping, the wrapping and the tree, and says so with a straight face.",
 wear="Wear it to Christmas morning, the family photo or the cookie swap, and pair it with the Dad, Kid and Baby pieces of the Christmas Credits set.",
 fit="This adult long sleeve tee is a Bella+Canvas 3501 in sizes XS through 2XL",ink="the headline deep red and AGAIN. pine green on White, cream and mustard on Red",
 gift="the mom who runs Christmas, a sister who does the same job, or whoever is organizing the family photo",
 setq="Is there a matching set?",seta="Yes. This is Mom's piece of the Christmas Credits family set; Dad, the kids and the baby each get their own line on the same tree art, each on its own page, and White and Red are the colors all four share so the photo matches.",
 spec_extra="long sleeve",
 ),
'730':dict(title="Men's Christmas – I Carried the Tree. That's My Part. Long Sleeve Tee",handle="mens-christmas-family-credits-i-carried-the-tree-long-sleeve-tee",slug="credits-dad-ls",cat=356,cols=["White","Red"],sizes=["XS","S","M","L","XL","2XL"],price="32.99",ptype="T-Shirt",
 tags=["christmas-shirts","christmas-shirts-for-men","funny-christmas-shirts","graphic-tees-for-men","family-christmas-set","ai-art","intake-done"],category="gid://shopify/TaxonomyCategory/aa-1-13-8",
 short="I Carried the Tree. That's My Part.",who="dad",
 seo=("Family Christmas Shirts: I Carried the Tree. Dad Tee","Family Christmas shirts, dad's piece: a long sleeve tee with a lopsided tree and a ladder under I CARRIED THE TREE. THAT'S MY PART. Adult sizes XS–2XL."),
 one="I carried the tree, that's my part: a dad's long sleeve tee from our family Christmas shirts set, for the one who hauled the tree in and considers the job done for the year.",
 wear="Wear it to the tree trimming, Christmas morning or the family photo, with Mom's, the kids' and the baby's pieces of the Christmas Credits set.",
 fit="This adult long sleeve tee is a Bella+Canvas 3501 in sizes XS through 2XL",ink="the headline deep red and THAT'S MY PART. pine green on White, cream and mustard on Red",
 gift="the dad who hauled the tree in, a brother who does it every year, or the one who always takes the ladder job",
 setq="Is there a matching set?",seta="Yes. This is Dad's piece of the Christmas Credits family set; Mom, the kids and the baby each get their own line on the same tree art, each on its own page, and White and Red are the colors all four share so the photo matches.",
 ),
'731':dict(title="Kids' Christmas – I Woke Everyone Up. Youth Long Sleeve Tee",handle="kids-christmas-family-credits-i-woke-everyone-up-youth-long-sleeve-tee",slug="credits-kid-ls",cat=511,cols=["White","Red"],sizes=["S","M","L"],price="27.99",ptype="T-Shirt",
 tags=["family-christmas-set","christmas","ai-art","intake-done"],category="gid://shopify/TaxonomyCategory/aa-1-13-8",
 short="I Woke Everyone Up. At 4:52 A.M.",who="kid",
 seo=("Christmas Long Sleeve Shirt: I Woke Everyone Up. Kid","A Christmas long sleeve shirt for kids: a lopsided tree under I WOKE EVERYONE UP. AT 4:52 A.M. Youth sizes S, M and L."),
 one="I woke everyone up at 4:52 a.m.: a Christmas long sleeve shirt for the kid who was awake before the sun on Christmas morning, and the kids' piece of our Christmas Credits family set.",
 wear="Wear it to the tree, the stockings and the family photo, with the Mom, Dad and Baby pieces of the set. It makes a funny kids christmas long sleeve for the early riser.",
 fit="This youth long sleeve tee is a Bella+Canvas 3501Y in youth sizes S, M and L only",ink="the headline deep red and AT 4:52 A.M. pine green on White, cream and mustard on Red",
 gift="the early-rising kid, a cousin who counts down the days, or a parent who wants the family photo to match",
 setq="Is there a matching set?",seta="Yes. This is the kids' piece of the Christmas Credits family set; Mom, Dad and the baby each get their own line on the same tree art, each on its own page, and White and Red are the colors all four share so the photo matches.",
 ),
'732':dict(title="Baby Christmas – I Ate the Bow. Worth It. Baby Bodysuit",handle="baby-christmas-family-credits-i-ate-the-bow-baby-bodysuit",slug="credits-baby-bs",cat=843,cols=["White","Red"],sizes=["6M","12M","18M","24M"],price="22.99",ptype="Baby Bodysuit",
 tags=["family-christmas-set","christmas","ai-art","intake-done"],category="gid://shopify/TaxonomyCategory/aa-1-25-10",
 short="I Ate the Bow. Worth It.",who="baby",
 seo=("Christmas Onesie: I Ate the Bow. Worth It. Baby Bodysuit","A funny Christmas onesie: a lopsided tree under I ATE THE BOW. WORTH IT. on a jersey baby bodysuit in White or Red, 6M to 24M."),
 one="I ate the bow, worth it: a Christmas onesie for the baby who got more joy out of the ribbon than the present, and the baby's piece of our Christmas Credits family set.",
 wear="Dress the baby in it for Christmas morning and the family photo, next to the Mom, Dad and Kid pieces. It also works as a baby christmas outfit for a first Christmas.",
 fit="This baby jersey bodysuit is a Rabbit Skins 4424 in sizes 6M, 12M, 18M and 24M",ink="the headline deep red and WORTH IT. pine green on White, cream and mustard on Red",
 gift="the new parents, a grandparent shopping for a first Christmas, or an aunt who likes a matching family photo",
 setq="Is there a matching set?",seta="Yes. This is the baby's piece of the Christmas Credits family set; Mom, Dad and the kids each get their own line on the same tree art, each on its own page, and White and Red are the colors all four share so the photo matches.",
 ),
}
def build(k):
    s=SET[k]
    art=("The art is a 1950s Christmas-card scene: a cheerful, slightly lopsided decorated Christmas tree in a living room corner with big-bulb lights sagging off one branch, a few wrapped presents on a red rug (one with its bow missing and a torn corner), a wooden stepladder leaning beside it, and a small stool holding a candy cane and a tipped glass of milk with a half-eaten cookie. ")
    lines={'729':"I DID CHRISTMAS. runs across the top and AGAIN. stacks across the bottom, ",'730':"I CARRIED THE TREE. runs across the top and THAT'S MY PART. across the bottom, ",'731':"I WOKE EVERYONE UP. runs across the top and AT 4:52 A.M. across the bottom, ",'732':"I ATE THE BOW. runs across the top and WORTH IT. across the bottom, "}[k]
    tail="in heavy deep-red and pine-green capitals on White and in cream and mustard capitals on Red, where the scene also gets a cream outline."
    L356=["Regular fit, crew neck, long sleeves with 2 in ribbed cuffs","100% Airlume combed, ring-spun cotton","Fabric weight: 4.2 oz/yd² — lightweight","Side-seamed construction, cover-stitched collar"]
    blankL={'729':L356,'730':L356,'731':["Regular fit, crew neck, long sleeves with ribbed cuffs","100% Airlume combed, ring-spun cotton","Fabric weight: 4.2 oz/yd² — lightweight","Side-seamed construction"],'732':["Regular fit, envelope neckline, lap shoulders","100% combed ring-spun cotton jersey","Fabric weight: 5 oz/yd²","Three-snap closure"]}[k]
    mat={'729':"It is 100% Airlume combed, ring-spun cotton at a lightweight 4.2 oz/yd², with side seams, a cover-stitched collar and 2-inch ribbed cuffs.",'730':"It is 100% Airlume combed, ring-spun cotton at a lightweight 4.2 oz/yd², with side seams, a cover-stitched collar and 2-inch ribbed cuffs.",'731':"It is 100% Airlume combed, ring-spun cotton at a lightweight 4.2 oz/yd², with side seams and ribbed cuffs.",'732':"It is 100% combed ring-spun cotton jersey at 5 oz/yd², with lap shoulders, an envelope neckline and a three-snap closure."}[k]
    qa=[
     (f"How does it fit?",f"{s['fit']}. Order your usual size for a regular fit or go up one for a roomier look. Compare the size chart with a piece you already own, and Graphic Tees Co. offers one free size exchange within 30 days of delivery."),
     ("What is it made of and how do I wash it?",f"{mat} From Graphic Tees Co.: turn it inside out, wash it cold with similar colors and tumble dry low. Skip bleach so the red, green and mustard inks stay bright, and do not iron over the print."),
     ("What colors does it come in and how is it printed?",f"It comes in White and Red, the two colors the whole set shares. On White {s['ink'].split(' on White')[0].replace('the headline deep red','the headline is deep red')}; on Red they turn to cream and mustard with a cream outline around the scene. Graphic Tees Co. prints each one to order."),
     (s['setq'],s['seta']),
     ("Who is it a good gift for?",f"It suits {s['gift']}. Graphic Tees Co. prints it to order, orders of $45 or more ship free, and the free size exchange within 30 days covers a wrong guess on size."),
     ("When should I order it for Christmas?",f"Order by about December 8 so it arrives before Christmas. Each piece is printed to order, which takes a few business days, then ships within the US. A misprint or damaged item is reprinted or refunded within 30 days, and orders of $45 or more ship free."),
    ]
    qs=''.join(f"<p><strong>{q}</strong><br>{a}</p>\n" for q,a in qa)
    sizes=s['sizes']
    h=("<h3>The Story</h3>\n<p>"+s['one']+"</p>\n<p>"+art+lines+tail+"</p>\n<p>"+s['wear']+" Original art, made for Graphic Tees Co. and printed the day you order it.</p>\n"
       "<h3>Details &amp; Fit</h3>\n<ul>\n"+"".join("<li>"+b+"</li>\n" for b in blankL)+"<li>Sizes "+sizes[0]+"–"+sizes[-1]+(" (youth S, M, L only)" if k=='731' else "")+"</li>\n<li>2 colors: White, Red</li>\n<li>Blank product sourced from "+{"729":"Nicaragua, Honduras, or the US","730":"Nicaragua, Honduras, or the US","731":"Honduras, Nicaragua, or the US","732":"India"}[k]+"</li>\n</ul>\n<h3>Questions</h3>\n"+qs).rstrip('\n')
    spec={"title":s['title'],"handle":s['handle'],"slug":s['slug'],"catalog":s['cat'],"colors":s['cols'],"sizes":s['sizes'],"price":s['price'],"compare":"","productType":s['ptype'],"tags":s['tags'],"seo":{"title":s['seo'][0],"description":s['seo'][1]},"descriptionHtml":h}
    print(k,'seo',len(s['seo'][0]),len(s['seo'][1]),'faq',[len(a.split()) for q,a in qa])
    json.dump(spec,open(f'designs/a{k}/spec.json','w'))
for k in SET: build(k)
