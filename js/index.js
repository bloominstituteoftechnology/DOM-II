// Your code goes here
//
//  img.addEventListener("mouseover", (event) => {
//     img.target.style.color = "orange"
//  })

//1. copy
let intro = document.querySelector(".intro h2");
intro.addEventListener("copy", (event) => {
  alert("Intro is copied");
});

//2. mouseover
let buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("mouseover", (event) => {
  event.stopPropagation();
  event.target.style.backgroundColor = "purple";
});
buttons[1].addEventListener("mouseover", (event) => {
  event.stopPropagation();
  event.target.style.backgroundColor = "purple";
});
buttons[2].addEventListener("mouseover", (event) => {
  event.stopPropagation();
  event.target.style.backgroundColor = "purple";
});

//3. click
let busSand = document.querySelector(".intro img");
busSand.addEventListener("click", (event) => {
  alert("Welcome To Fun Bus!");
});

//4. remove
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseleave", (event) => {
  event.stopPropagation();
  event.target.remove("letsGo");
});

//5. contextmenu
let navLinks = document.querySelectorAll(".nav a");
navLinks[0].addEventListener("contextmenu", (event) => {
  event.preventDefault(); //Stop the navigation from items from refreshing the page
  event.target.style.color = "red";
});
navLinks[1].addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.target.style.color = "red";
});
navLinks[2].addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.target.style.color = "red";
});
navLinks[3].addEventListener("contextmenu", (event) => {
  event.preventDefault();
  event.target.style.color = "red";
});

//6. wheel
let footer = document.querySelector("footer");
footer.addEventListener("wheel", (event) => {
  event.target.style.backgroundColor = "yellow";
});

//7. doubleclick
let letsGo = document.querySelector(".content-section h2");
letsGo.addEventListener("dblclick", (event) => {
  event.stopPropagation();
  event.target.style.opacity = 0.5;
});

//9 keydown
let container = document.querySelector("body");
container.addEventListener("keydown", (event) => {
  event.target.style.backgroundColor = "gray";
});

//8 mousemove
let destination = document.querySelectorAll(".destination h4");
destination[0].addEventListener("mousemove", (event) => {
  event.target.style.fontFamily = "Verdana";
});
destination[1].addEventListener("mousemove", (event) => {
  event.target.style.fontFamily = "Verdana";
});
destination[2].addEventListener("mousemove", (event) => {
  event.target.style.fontFamily = "Verdana";
});

//10 mouseenter
let para = document.querySelector(".content-destination p");
para.addEventListener("mouseenter", (event) => {
  event.target.style.fontWeight = "Bolder";
});