var beamjs = beamjs || {};

beamjs.headersize = 0;

beamjs.setHeaderSize = function(headersize) {
  this.headersize = headersize;
  return headersize;
}

beamjs.setHeaderSizeById = function(id) {
  height = document.getElementById(id).offsetHeight;
  this.headersize = height;
  return height;
}

beamjs.add = function(element, menu, area) {
  m = document.getElementById(menu);
  if (area != undefined) {
    headings = document.getElementById(area).getElementsByTagName(element);
  }
  else {
    headings = document.getElementsByTagName(element);
  }
  for(var i = 0; i < headings.length; i++) {
    var text = headings[i].innerHTML;
    var id_text = text.replace(" ", "_");
    headings[i].id = id_text;
    var item = document.createElement("li");
    item.innerHTML = text;
    item.onclick = function() {
      window.scrollTo(0, 0);
      id_text = this.innerHTML.replace(" ", "_");
      var rect = document.getElementById(id_text).getBoundingClientRect();
      var pos = rect.top - beamjs.headersize;
      window.scrollTo(0, pos);
    };
    m.appendChild(item);
  }
}
