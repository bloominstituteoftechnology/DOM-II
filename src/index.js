// import from "express";
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

const topImage = document.querySelector(".intro img");
topImage.addEventListener("wheel", function (e) {
  e.target.src =
    "https://www.colourbox.com/preview/15543391-city-bus-cartoon-style-vector-icon-silhouette.jpg";
});
const log = document.querySelector(".content-destination h2");
document.addEventListener("keydown", function (e) {
  log.textContent = `"You are pressing ${e.key}"`;
  log.style.color = "blue";
});

window.addEventListener("load", () => {
  window.alert("Load event has been activated");
});

const writeOnImage = document.querySelector(".img-content img");
writeOnImage.addEventListener("dblclick", function (e) {
  e.target.src = "https://i.ebayimg.com/images/g/BAcAAOSwBLdZsViz/s-l300.jpg";
});
