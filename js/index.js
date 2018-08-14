// Your code goes here

//Select elements
let header = document.querySelector("header");
let logo = document.querySelector(".logo-heading");
let headers = document.querySelector(".intro h2");
let input = document.querySelector(".input");
let navItems = document.querySelectorAll(".nav-link");
let go = document.querySelector(".text-content h2");
let fontColor = "#212529";

//Add event: make logo larger on mouseover and addHover
logo.addEventListener("click", event => {
  logo.style.fontSize = "60px";
});
addHover(logo);

//Add event : mouseon mouse leave to header
header.addEventListener("mouseover", function(event) {
  //header.style.backgroundColor = "red";
});

//Add event: keydown to input field
input.addEventListener("keydown", event => {
  headers.innerText = "STOP TYPING!!!";

  //   headers.forEach(item => {
  //     item.innerText = "";
  //   });
});

//Add event : mouseenter + mouse leave
navItems.forEach(function(item) {
  addHover(item);
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
