// Your code goes here
/*
1. mouseenter
2. mouseleave
3. click
4. mousedown
5. mouseup
6. dblclick
7. contextmenu
8. auxclick
9. resize
10.wheel
*/
//adds black border to Fun Bus image when enters then
//removes border when mouse leaves the image.

const eventHandler = event => {
  event.stopPropagation();
};

topBus = document.querySelector("header img");
topBus.addEventListener("mouseenter", function(event) {
  topBus.style.border = "2px solid black";
});

topBus.addEventListener("mouseleave", function(event) {
  topBus.style.border = "none";
});

//Popup that keeps track of the number of times the Home
//link has been pressed.
homeLink = document.querySelectorAll(".nav-link");
let clicks = 1;
homeLink[0].addEventListener("click", function(event) {
  alert(clicks++);
});

//When clicking down on the first sign up button, the background
//turns yellow.
signUpButton = document.querySelectorAll(".destination .btn");
signUpButton[0].addEventListener("mousedown", function(event) {
  signUpButton[0].style.backgroundColor = "yellow";
  event.stopPropagation();
});
signUpButton[0].addEventListener("mouseup", function(event) {
  signUpButton[0].style.backgroundColor = null;
});
//Nested Function to cancel propagation.
setUpParent = document.querySelectorAll(".destination");
setUpParent[0].addEventListener("mousedown", function(event) {
  setUpParent[0].style.backgroundColor = "yellow";
});
//Double clicking on text within the main body will make that text bold.
container = document.querySelectorAll(".container");
console.log(container[1]);
container[1].addEventListener("dblclick", function(event) {
  event.target.style.fontWeight = "bold";
});

//right clicking on text will make it disappear. The right
//click menu does not appear.
container[1].addEventListener("contextmenu", function(event) {
  event.target.style.color = "white";
  event.preventDefault();
});

//Fun Bus logo in header reverses when any non left mouse click occurs.
funBusLogo = document.querySelector(".logo-heading");
funBusLogo.addEventListener("auxclick", function(event) {
  str = "Fun Bus";
  funBusLogo.textContent = str
    .split("")
    .reverse()
    .join("");
});

//When window is resized, user will be alerted that they broke the internet.
window.addEventListener("resize", function(event) {
  alert("You broke the Internet! OH NOES");
});

//If you move your mouse wheel in the footer, the page will scroll to the top.
footer = document.querySelector("footer");
footer.addEventListener("wheel", function(event) {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

homeLink.forEach(a => {
  a.addEventListener("click", function(event) {
    event.preventDefault();
  });
});
