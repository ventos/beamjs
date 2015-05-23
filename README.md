# beamjs

Creates menu items for all *elements* in a given *area*.

  beamjs.add(element, menu, area);


example:

  beamjs.add("h3", "menu", "content");

the area is optional, so you could also do this for all elements on the site:

  beamjs.add("h3", "menu");


Quite cool?  
But the best thing is, clicking on such an item will beam you right to the element.

### Troubleshooting

The site's **header** hides the element?  
Here is the solution:  

Tell beamjs the height in px:  

  beamjs.setHeaderSize(64);


or the header's name:  

  beamjs.setHeaderSizeById("header");
