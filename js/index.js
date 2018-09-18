// Your code goes here

//wholeNav and navHeader given same listener event + result of changing their background to red
//navHeader is nested inside wholeNav, so stopPropagation() keeps a click on it
//from changing the whole nav background
const wholeNav = document.querySelector(".nav-container");
wholeNav.addEventListener("click", event => {
  event.currentTarget.classList.toggle("change-red");
});

const navHeader = document.querySelector(".logo-heading");
navHeader.addEventListener("click", event => {
  event.currentTarget.classList.toggle("change-red");
  event.stopPropagation();
});

//makes img fade slightly when moused over
const busImg = document.querySelector(".intro img");
busImg.addEventListener("mouseover", event => {
  TweenMax.to(".intro img", 2, {
    opacity: 0.5
  });
});

//made button that can make background color constantly change on dblclick
const bod = document.querySelector(".body");
const btn = document.querySelector(".btn");
btn.addEventListener("dblclick", event => {
  bod.classList.toggle("chromium");
  event.stopPropagation();
});

//intro section turns red when mousedover
const intro = document.querySelector(".intro");
intro.addEventListener("mousemove", event => {
  intro.style.color = "red";
});

//text-content turns green on keydown
const textSec = document.querySelector(".text-content");
bod.addEventListener("keydown", event => {
  textSec.style.color = "green";
});

//page background turns purple when resized
window.addEventListener("resize", event => {
  bod.style.backgroundColor = "purple";
});
