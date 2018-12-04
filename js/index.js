// ============= Variables
const html = document.querySelector("html");
const headerLogo = document.querySelector(".logo-heading");
const nav = document.querySelector(".main-navigation");
const navLinks = document.querySelectorAll("a");
const intro = document.querySelector(".intro");
const headline = document.querySelector(".intro h2");

// const invContent = document.querySelector(".inverse-content");
// const pickContent = document.querySelector(".content-pick");
// const mainContainer = document.getElementsByClassName("container");

// ============= Functions
(function() {
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
    });
  });
})();

// ============= Event Listeners
headerLogo.addEventListener("mouseover", function(event) {
  headerLogo.style.fontSize = "7rem";
  headerLogo.style.fontWeight = "500";
  headerLogo.style.opacity = 0.5;
});

html.addEventListener("wheel", function(event) {
  html.style.background = "lightgray";
  nav.style.background = "lightgray";
});

nav.addEventListener("dblclick", function(event) {
  nav.style.height = "300px";
  intro.style.paddingTop = "320px";
});

html.addEventListener("keydown", () => {
  headline.textContent = "The Fun Bus Don't Stop!!!";
});

// GSAP Animation
// nav.addEventListener("load", function() {
//   TweenMax.to(nav, 2, { width: "200px", height: "150px" });
// });
