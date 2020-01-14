// Your code goes here
// This handler will be executed every time the cursor
// is moved over a different nav item

let nav = document.querySelector(".logo-heading");
console.log(nav)
nav.addEventListener(
  "mouseover",
  function(event) {
    // highlight the mouseover target
    event.target.style.color = "orange";
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false)

  const card = document.querySelector('h4');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});
