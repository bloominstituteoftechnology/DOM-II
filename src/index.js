import './less/index.less'

// Your code goes here!
const title = document.querySelector('h1');
console.log(title.textContent);
title.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "hotpink";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
