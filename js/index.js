/** @format */

//changing bus image to a new one with dblclick (1)

const magicBus = document.querySelector(".intro img");

magicBus.addEventListener("dblclick", () => {
  magicBus.src =
    "https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";
  magicBus.alt = "a colorfully painted bus";
  console.log("hi");
});

//changing logo text with mouseenter and mouseleave(2 and 3)

const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseenter", () => {
  logo.style.color = "teal";
  logo.style.transform = "scale(1.5)";
  logo.style.transition = "all 1s";
});

logo.addEventListener("mouseleave", () => {
  logo.style.color = "black";
  logo.style.transform = "scale(1)";
  console.log(4);
});

// scroll effect(4)

const scrollColor = document.querySelector("body");

window.addEventListener("scroll", () => {
  scrollColor.style.color = "coral";
  console.log(scroll);
});
// resize event(5)

const resizeColor = document.querySelector("body");

window.addEventListener("resize", (event) => {
  resizeColor.style.backgroundColor = "turquoise";
  resizeColor.style.transition = "all 1s";
  console.log("resize", event);
});

//key up and key down(6 and 7)

const body = document.querySelector("body");

body.addEventListener("keydown", () => {
  event.target.style.backgroundColor = "peachpuff";
});

body.addEventListener("keyup", () => {
  event.target.style.backgroundColor = "aquamarine";
});

//aux click event on nav bar(8)

const nav = document.querySelectorAll("a");

nav.forEach((element) => {
  element.addEventListener("auxclick", () => {
    element.style.transform = "scale(1.3)";
    element.style.color = "teal";
  });
});

// mouseover mouseout on bottom pic (9 and 10)

const growPic = document.querySelector(".content-destination img");

growPic.addEventListener("mouseover", () => {
  growPic.style.transform = "scale(1.5)";
  growPic.style.transition = "0.5s";
  growPic.style.color = "orange";
});

const shrinkPic = document.querySelector(".content-destination img");
shrinkPic.addEventListener("mouseout", () => {
  shrinkPic.style.transform = "scale(1)";
  shrinkPic.style.transitionl = "0.5s";
  shrinkPic.style.color = "white";
});

// using preventDefault and stopPropagation on nav links

const navStop = document.querySelectorAll(".nav-link");

navStop.forEach((element) => {
  element.addEventListener("click", () => {
    element.preventDefault();
    element.stopPropagation();
    console.log("stopped");
  });
});
const navLinks = document.querySelectorAll(".nav-link");
