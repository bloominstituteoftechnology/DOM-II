// Your code goes here
//#1 Hover over logo-heading to turn orange using mouseenter
var headerTitle = document.querySelector(".logo-heading");

headerTitle.addEventListener(
  "mouseenter",
  function (event) {
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

//#2 Click buttons at bottom to see button count
const button = document.querySelector(".btn");

button.addEventListener("click", function (event) {
  button.innerHTML = `Click count: ${event.detail}`;
});

//#3 onclick give position right above middle image
let log = document.querySelector(".content-section");

document.onclick = inputChange;

function inputChange(event) {
  log.textContent = `Position: (${event.clientX}, ${event.clientY})`;
}

//#4 mouseover detected on p

let p = document.querySelector("p");
p.onmouseover = logMouseOver;
p.onmouseout = logMouseOut;

function logMouseOver() {
  p.innerHTML = "MOUSE OVER detected";
}

function logMouseOut() {
  p.innerHTML = "MOUSE OUT detected";
}
