// ============= Variables
const html = document.querySelector("html");
const headerLogo = document.querySelector(".logo-heading");
const nav = document.querySelector(".main-navigation");

const intro = document.querySelector(".intro");
const invContent = document.querySelector(".inverse-content");
const pickContent = document.querySelector(".content-pick");
const mainContainer = document.getElementsByClassName("container");

// ============= Functions

// ============= Event Listeners
headerLogo.addEventListener("mouseover", function() {
  headerLogo.style.fontSize = "7rem";
  headerLogo.style.fontWeight = "500";
  headerLogo.style.opacity = 0.5;
});

html.addEventListener("wheel", function(event) {
  html.style.background = "lightgray";
  nav.style.background = "lightgray";
});
