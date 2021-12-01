// import from "express";
import "./less/index.less";

// Your code goes here!
//mouseover event listener
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", function (event) {
  event.target.style.color = "green";
  event.target.style.fontSize = "80px";
});
//mouseenter event listener
const navBar = document.querySelector("nav");
navBar.addEventListener("mouseenter", function (ev) {
  ev.target.style.backgroundColor = "orange";
  ev.target.style.fontStyle = "italic";
});
//mouseleave event listener
navBar.addEventListener("mouseleave", function (ev) {
  ev.target.style.backgroundColor = "white";
  ev.target.style.fontStyle = "normal";
});
// wheel event listener
const topImage = document.querySelector(".intro img");
topImage.addEventListener("wheel", function (e) {
  e.target.src =
    "https://www.colourbox.com/preview/15543391-city-bus-cartoon-style-vector-icon-silhouette.jpg";
});
//keydown event listener
const log = document.querySelector(".content-destination h2");
document.addEventListener("keydown", function (e) {
  log.textContent = `"You are pressing ${e.key}"`;
  log.style.color = "blue";
});

//load event listener

window.addEventListener("load", () => {
  window.alert("Load event has been activated");
});

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     const paragraph = document.querySelectorAll("p");
//     console.log(document.querySelectorAll("p"));
//     paragraph.forEach((e) => {
//       console.log(e);
//       e.style.color = "peach";
//     });
//   }, 3000);
// });

//const removeImg = document.querySelector(".inverse-content img");
// removeImg.addEventListener("load", function (e) {
//   e.target.src = "remove";
// });
//dblclick event listener
const changeImage = document.querySelector(".img-content img");
changeImage.addEventListener("dblclick", function (e) {
  e.target.src = "https://i.ebayimg.com/images/g/BAcAAOSwBLdZsViz/s-l300.jpg";
});

// resize event listener
const resizeWindow = (e) => {
  //console.log(e.target.innerHeight);
  e.target.innerHeight;
  e.target.innerWidth;
};
window.addEventListener("resize", resizeWindow);

// click event listener , use  of preventDefault
const link = document.querySelector("nav a");
link.addEventListener("click", function (e) {
  e.preventDefault();
});

//focus event listener on each button and a tag
document.addEventListener("DOMContentLoaded", () => {
  const focused = [
    ...Array.from(document.querySelectorAll(".btn")),
    ...Array.from(document.querySelectorAll("a")),
  ];
  console.log(focused);
  focused.forEach((el) => {
    el.addEventListener("focus", function (e) {
      console.log("focused on", e.target);
    });
  });
});
/// focus event listener on only first signup button
// const signUp = document.querySelector(".btn");
// signUp.addEventListener("focus", function () {
//   console.log("focus");
// });
