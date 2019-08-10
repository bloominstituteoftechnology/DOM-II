// Your code goes here

// 1. scroll event
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
  console.log("scroll event")
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

// 2. mouse over
let test = document.getElementById("redNav");
  
// This handler will be executed every time the cursor
// is moved over a different nav item
test.addEventListener("mouseover", function( event ) {   
  // highlight the mouseover target
  event.target.style.color = "red";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.color = "";
  }, 500);
}, false);

// 3. keydown
function keydownFunction() {
    alert("You pressed a key inside the input field");
  }