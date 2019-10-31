// Your code goes here
window.addEventListener("load", function(event) {
  this.alert("page loading");
});

// window.addEventListener('click', function(event){

// }
// const img = document.querySelector("img");
// img.addEventListener("mouseover", function(event) {});

// // const button = document.querySelector('.btn');
// // button.addEventListener('click', functon()

const img = document.querySelector("img");
img.addEventListener("mouseenter", function(event) {
  event.target.style.border = "4px dashed blue";
});

const button = document.querySelector(".btn");
button.addEventListener("dblclick", () => {
  this.alert("clicked");
});

const p = document.querySelector("p");
p.addEventListener("copy", function(event) {
  this.alert("dont copy my copyright?");
});

const body = document.querySelector("body");
window.addEventListener("scroll", () => {
  body.style.backgroundColor = "linear-gradient (red,orange,blue)";
});

const header = document.querySelector(".intro");
header.addEventListener("select", () => {
  header.style.webkitAnimation = ".4s bounce";
});

const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseout", () => {
  (logo.style.color = ""), (logo.textContent = "Fun Bus");
});

const container = document.querySelector(".container home");
container.addEventListener("mouseover", () => {
  event.target.style.backgroundColor = "blue";
});

const head = document.querySelector("h4");
head.addEventListener("mouseleave", function(event) {
  event.target.style.border = "2px dashed black";
});

const section = document.querySelector("section");
section.addEventListener("wheel", function(event) {
  event.style.color = "blue";
});
