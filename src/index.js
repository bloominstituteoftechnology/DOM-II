import "./less/index.less";

// Your code goes here!
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function (event) {
  event.target.style.color = "green";
  event.target.style.fontSize = "80px";
});
const navBar = document.querySelector("nav");
navBar.addEventListener("mouseenter", function (ev) {
  ev.target.style.backgroundColor = "orange";
  ev.target.style.fontStyle = "italic";
});
navBar.addEventListener("mouseleave", function (ev) {
  ev.target.style.backgroundColor = "white";
  ev.target.style.fontStyle = "normal";
});
