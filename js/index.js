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

// ---------- SELECTORS ----------
let destinationSection = document.querySelector(".content-destination");
let destinationImg = document.querySelector(".content-destination img");
const home = document.querySelector(".home");

// =========== MOUSEOVER ==========
let imgContent = document.querySelectorAll(".content-section .img-content img");
imgContent[0].addEventListener("mouseover", function(e) {
  e.target.style.opacity = ".6";
  e.target.style.transition = ".4s";
});

destinationImg.addEventListener(
  "mouseover",
  e => (e.target.style.cursor = "pointer")
);

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
  nav.style.borderBottom = "2px dashed #1782B8";
  nav.style.transition = "1s";
});

// =========== LOAD ==========
let tl = new TimelineMax();
let logo = document.querySelector(".logo-heading");
let navLinks = document.querySelectorAll(".nav-link");
window.addEventListener("load", function() {
  // alert("Welcome to Fun Bus!");
  TweenMax.from(logo, 1, { y: -100 });
  tl.staggerFrom(navLinks, 1, { y: 35 }, 0.2);
  tl.from(home, 1, { opacity: 0 }, 1);
});

// =========== FOCUS ==========
let form = document.querySelector(".cta-form");
form.addEventListener(
  "focus",
  function(e) {
    e.target.style.backgroundColor = "#17A2B8";
  },
  true
);

// =========== SCROLL ==========
let funBusIcon = document.querySelector("#bus-icon img");
let html = document.querySelector("html");
window.addEventListener("scroll", function() {
  funBusIcon.style.marginRight = "90%";
  funBusIcon.style.transition = "7s";
  navLinks.forEach(link => {
    link.style.color = "white";
    link.style.transition = "1s";
  });
});

// =========== SELECT ==========
body.addEventListener("select", function(e) {
  e.target.style.fontSize = "4em";
});

// =========== DOUBLE CLICK ==========

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

// =========== PREVENT DEFAULT ==========
let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
});
