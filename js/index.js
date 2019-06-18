// Your code goes here
// ----- Mouseover -----
let content = document.querySelector(" h2"); 

content.addEventListener("mouseenter", function(event){
    event.target,style.color = "blue"; 
setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);


content.addEventListener("mouseover", function(event){
    event.target.style.color = "green"
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

// ----- KeyDown -----




    