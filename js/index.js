// Your code goes here
// mouseover ---- Used on "Let's Go!" img
// keydown ------ Used on body bg color
// wheel -------- Used on nav
// drag / drop --
// load --------- Used on window
// focus -------- Used on form
// resize -------
// scroll ------- Used on fixed icon - to animate
// select ------- Used on textarea
// dblclick ---- Used on pick

// =========== MOUSEOVER ==========
let imgContent = document.querySelectorAll(".content-section .img-content img");
imgContent[0].addEventListener("mouseover", function(e) {
  e.target.style.opacity = ".6";
  e.target.style.transition = ".4s";
});

// =========== KEYDOWN ==========
let body = document.querySelector("body");
body.addEventListener("keydown", function(e) {
  e.target.style.backgroundColor = "#aaa";
  e.target.style.transition = "5s";
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

// =========== FOCUS ==========
let form = document.querySelector(".cta-form");
form.addEventListener(
  "focus",
  function(e) {
    e.target.style.backgroundColor = "#f4f4f4";
  },
  true
);

// =========== SCROLL ==========
let funBusIcon = document.querySelector("#bus-icon img");
let html = document.querySelector("html");
window.addEventListener(
  "scroll",
  function() {
    // funBusIcon.style.border = "1px solid red";
    funBusIcon.style.marginRight = "90%";
    funBusIcon.style.transition = "7s";
  },
  true
);

// =========== SELECT ==========
body.addEventListener("select", function(e) {
  e.target.style.fontSize = "4em";
});

// =========== DOUBLE CLICK ==========
let destinationSection = document.querySelector(".content-destination");
let destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("dblclick", function(e) {
  e.stopPropagation();
  e.target.src =
    "https://coolsurfstuff.com/wp-content/uploads/2017/10/5-1-600x200.jpg";
});

// =========== STOP PROPAGATION ==========
destinationSection.addEventListener("dblclick", function() {
  destinationSection.parentNode.style.backgroundColor = "#17A2B8";
  body.style.color = "white";
});
