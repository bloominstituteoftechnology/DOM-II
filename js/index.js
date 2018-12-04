// ============= Variables
const html = document.querySelector("html");
const headerLogo = document.querySelector(".logo-heading");
const nav = document.querySelector(".main-navigation");
const navLinks = document.querySelectorAll("a");
const intro = document.querySelector(".intro");
const headline = document.querySelector(".intro h2");
const headerImage = document.querySelector(".intro img");
const footer = document.querySelector(".footer");
const body = document.querySelector("body");
const headerText = document.querySelector(".intro textarea");

// ============= Functions
(function() {
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.stopPropagation();
      event.preventDefault();
      link.style.border = "1px dotted #C0C0C0";
    });
    link.addEventListener("focus", function(event) {
      event.stopPropagation();
      link.style.background = "red";
    });
  });
})();

// ============= Event Listeners

window.addEventListener("scroll", function() {
  body.style.color = "red";
});

headerLogo.addEventListener("mouseover", _ => {
  headerLogo.style.fontSize = "7rem";
  headerLogo.style.fontWeight = "500";
  headerLogo.style.opacity = 0.5;
});

window.addEventListener("load", function() {
  headerLogo.style.background = "green";
});

html.addEventListener("wheel", _ => {
  html.style.background = "lightgray";
  nav.style.background = "lightgray";
});

nav.addEventListener("dblclick", _ => {
  nav.style.height = "300px";
  intro.style.paddingTop = "320px";
});

nav.addEventListener("click", function(event) {
  event.stopPropagation();
  nav.style.background = "blue";
});

html.addEventListener("keydown", _ => {
  headline.textContent = "The Fun Bus Don't Stop!!!";
});

headerImage.addEventListener("drag", _ => {
  headerImage.style.border = "5px solid black";
});

headerText.addEventListener("select", function() {
  headerText.style.lineHeight = 3;
});

window.addEventListener("resize", function() {
  body.style.border = "20px solid red";
});

// ========= Stretch Goal
window.addEventListener("load", _ => {
  TweenMax.to(headerImage, 5, { rotation: "360deg" });
});
