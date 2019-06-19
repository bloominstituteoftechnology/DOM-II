// Your code goes here
// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

// selectors

const logoHeading = document.querySelector("h1");
console.log(logoHeading);
const navLinks = document.querySelectorAll("nav a");
console.log(navLinks);
const busImg = document.querySelector(".intro img");
console.log(busImg);

const titles = document.querySelectorAll("h2");
console.log(titles);
const mapImg = document.querySelector(".img-content img");
console.log(mapImg);
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
const secondTitles = document.querySelectorAll("h4");
console.log(secondTitles);
const footer = document.querySelector(".footer");
console.log(footer);
const allText = document.querySelectorAll("p");
console.log(allText);

// event listeners

window.addEventListener("resize", function(event) {
  alert("Old dog new Tricks!");
});

buttons.forEach(function(currentValue, index) {
  currentValue.addEventListener("mouseover", function(event) {
    currentValue.style.color = "green";
    console.log(`buttons fired!`);
    event.target.style.color = "purple";
    setTimeout(function() {
      event.target.style.color = "orange";
    }, 500);
  });
});

let newTexty = document.querySelector(".intro h2");
window.addEventListener("load", event => {
  newTexty.textContent = "The Venga Bus is coming!!";
  console.log("page is fully loaded");
});

window.addEventListener("scroll", () => {
  document.querySelector("body").style.background = "dodgerblue";
});

mapImg.addEventListener("", function() {
  console.log("clicking is easier");
  mapImg.style.display = "none";
});

logoHeading.addEventListener("dblclick", function() {
  console.log("i love doublemint");
  logoHeading.style.color = "crimson";
});

footer.onmouseout = function() {
  console.log("annoying popup");
  footer.style.display = "crimson";
};

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(event) {
    navLinks[i].style.color = "yellow";
    console.log("im working on refresh");
    event.preventDefault();
  });
}
