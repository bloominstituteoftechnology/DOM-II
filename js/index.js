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
  alert("clicked");
});

const p = document.querySelector("p");
p.addEventListener("copy", function(event) {
  alert("dont copy my copyright?");
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
