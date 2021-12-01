import './less/index.less'

// Your code goes here!
const nav = document.querySelector('.nav');
nav.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 200);
  }, false);

nav.addEventListener('click', function(event){
    button.textContent = `Click count: ${event.detail}`;
});
