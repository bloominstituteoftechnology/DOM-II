import './less/index.less'

// Your code goes here!

// Title
const title = document.querySelector('h1');
console.log(title.textContent);
title.addEventListener("mouseover", function( event ) {
    event.target.style.color = "hotpink";  
    setTimeout(function() {
      event.target.style.color = "";
    }, 400);
  }, false);

// Tab key fn
const printKey = function(e) {
    // console.log(e.key);
    if(e.key === "Enter") {
        alert("Warning! The fun bus can be extremely fun!")
    }
}

document.addEventListener("keydown", printKey);



