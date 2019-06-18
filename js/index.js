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

buttons.forEach(function(currentValue, index) {
  currentValue.addEventListener("mouseover", function(event) {
    currentValue.style.color = "green";
    console.log(`buttons fired!`);
    event.target.style.color = "purple";
    setTimeout(function() {
      event.target.style.color = "orange";
    }, 500);
  });
  //   buttons[1].addEventListener('click', function(event) {
  //       console.log(`button2 icu`);
});

// busImg.addEventListener("click", function() {
//   busImg.style.display = "none";
// });

mapImg.addEventListener("resize", function() {
  console.log("clicking is easier");
  mapImg.style.display = "none";
});

logoHeading.addEventListener("dblclick", function() {
  console.log("i love doublemint");
  logoHeading.style.color = "crimson";
});

footer.onmouseout = function() {
  console.log("annoying popup");
  alert("please don't leave this page");
};

// allText.forEach(function(currentValue, index) {
//   currentValue.addEventListener("wheel", function(event) {
//     console.log("wow wheelsg");
//   });
// });

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(event) {
    navLinks[i].style.color = "yellow";
    console.log("im working u can't refresh");
    event.preventDefault();
  });
}
