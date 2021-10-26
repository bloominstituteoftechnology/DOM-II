// Your code goes here

const nav1 = document.querySelectorAll("a");

nav1[0].addEventListener("click", (e) => {
  e.target.style.color = "pink";
  nav1.preventDefault();
});
nav1[1].addEventListener("click", (e) => {
  e.target.style.color = "purple";
  nav1.preventDefault();
});

nav1[2].addEventListener("click", (e) => {
  e.target.style.color = "blue";
  nav1.preventDefault();
});

nav1[3].addEventListener("click", (e) => {
  e.target.style.color = "teal";
  nav1.preventDefault();
});
const footer1 = document.querySelector(".footer");
footer1.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "green";
});
footer1.addEventListener("mouseover", (event) => {
  event.target.style.fontSize = "2.5rem";
});

const intro = document.querySelector(".intro");
intro.addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = "teal";
});
const subtext = document.querySelector("h1.logo-subtext");
const logo1 = document.querySelector("h1.logo-heading");

logo1.addEventListener("mouseover", () => {
  subtext.classList.remove("off");
});

logo1.addEventListener("mouseout", () => {
  subtext.classList.add("off");
});
const body1 = document.querySelector("body");
body1.addEventListener("wheel", () => {
  body1.style.backgroundColor = "blue";
  body1.style.color = "purple";
  logo1.style.color = "white";
  subtext.style.color = "black";
  stopPropogation();
});