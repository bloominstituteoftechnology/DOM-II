function onTheMove() {
    var elem = document.getElementById("block block--gray");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.botto = pos + 'px'; 
      }
    }
  }