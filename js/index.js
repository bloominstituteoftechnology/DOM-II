// Your code goes here
//Select elements
let header = document.querySelector("header");
let logo = document.querySelector(".logo-heading");
let headers = document.querySelector(".intro h2");
let input = document.querySelector(".input");
let navItems = document.querySelectorAll(".nav-link");
let go = document.querySelector(".text-content h2");
let images = document.querySelectorAll("img");
console.log(images);
let fontColor = "#212529";
let buttons = document.querySelectorAll(".btn");

//Add event: make logo larger on mouseover and addHover
logo.addEventListener("click", event => {
  logo.style.fontSize = "60px";
});
addHover(logo);

//Add event : mouseon mouse leave to header
header.addEventListener("mouseover", function(event) {
  // header.style.backgroundColor = "red";
  event.preventDefault();
});

//Add event : mouseenter + mouse leave , prevent click Had to make some minor changes
navItems.forEach(function(item) {
  addHover(item);
  item.addEventListener("click", function(event) {
    event.preventDefault();
  });
});
function addHover(item) {
  item.addEventListener("mouseenter", function(event) {
    item.style.color = "#f0dd21";
  });

  item.addEventListener("mouseleave", function(event) {
    item.style.color = fontColor;
  });
}

go.addEventListener("click", function(event) {
  let img = document.querySelector(".img-content");
  img.classList.toggle("rotate");
});

//Add event: opacity on images whe mouse over
images.forEach(function(img) {
  img.addEventListener("mouseenter", function(item) {
    img.style.opacity = ".3";
  });

  img.addEventListener("mouseleave", function(item) {
    img.style.opacity = "1";
  });
});

// Add event: scroll
let counter = 0;
window.addEventListener("scroll", function(event) {
  console.log("scroll!");
  counter++;
  if (counter > 200) {
    alert("You've scrolled too much!!");
    counter = 0;
  }
});

//Add event: resize
window.addEventListener("resize", function(event) {
  alert("Is this better?!");
});

//Add event: load
window.addEventListener("load", function(event) {
  console.log("It loads!");
});

// Add event: click
buttons.forEach(function(btn) {
  btn.addEventListener("click", function(event) {
    alert("We will get in contact with you!");
  });
});