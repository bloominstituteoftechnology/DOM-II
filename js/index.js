// Your code goes here
// mouseover ---- Used on "Let's Go!" img
// keydown ------
// wheel -------- Used on nav
// drag / drop --
// load --------- Used on window
// focus -------- Used on form
// resize -------
// scroll ------- Used on fixed icon - to animate
// select -------
// dblclick ---- Used on pick

// =========== MOUSEOVER ==========
let imgContent = document.querySelectorAll(".content-section .img-content img");
imgContent[0].addEventListener("mouseover", function(e) {
  e.target.style.opacity = ".6";
  e.target.style.transition = ".4s";
});

// =========== WHEEL ==========
let nav = document.querySelector(".main-navigation");
window.addEventListener("wheel", function() {
  nav.style.backgroundColor = "#17A2B8";
  nav.style.color = "white";
  nav.style.border = "2px solid #17A2B8";
  nav.style.transition = "1s";
});

// =========== LOAD ==========
window.addEventListener("load", function() {
  alert("Welcome to Fun Bus!");
});

// =========== SCROLL ==========
let funBusIcon = document.querySelector("#bus-icon img");
let html = document.querySelector("html");
window.addEventListener(
  "scroll",
  function() {
    funBusIcon.style.border = "1px solid red";
    funBusIcon.style.display = "block";
    funBusIcon.style.transition = "1s";
  },
  true
);

// =========== FOCUS ==========
let input = document.querySelector(".cta-form");
input.addEventListener(
  "focus",
  function(e) {
    e.target.style.backgroundColor = "#f4f4f4";
  },
  true
);

// =========== DOUBLE CLICK ==========
let destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("dblclick", function(e) {
  e.target.src =
    "https://coolsurfstuff.com/wp-content/uploads/2017/10/5-1-600x200.jpg";
});
