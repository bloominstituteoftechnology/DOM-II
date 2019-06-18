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
const footer = document.querySelector(".footer p");
console.log(footer);
const allText = document.querySelectorAll("p");
console.log(allText);

// even listeners

buttons.forEach(function(currentValue, index) {
  currentValue.style.color = "green";
  buttons[0].addEventListener(
    "mouseover",
    function(event) {
      console.log(`buttons fired!`);
      event.target.style.color = "purple";
      setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    },
    false
  );
  buttons[1].addEventListener();
});

busImg.addEventListener("click", function() {
  busImg.style.display = "none";
});

mapImg.addEventListener("mouseover", function() {
  mapImg.style.display = "";
});

logoHeading.addEventListener("blur", event => {
  event.target.style.background = "";
});
