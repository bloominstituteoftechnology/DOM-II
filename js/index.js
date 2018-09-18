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

const busImg = document.querySelector(".intro img");
busImg.addEventListener("mouseover", event => {
  TweenMax.to(".intro img", 2, {
    opacity: 0.5
  });
});

const bod = document.querySelector(".body");
const btn = document.querySelector(".btn");
btn.addEventListener("dblclick", event => {
  bod.classList.toggle("chromium");
  event.stopPropagation();
});

const contentHeader = document.querySelector(".content-section");
contentHeader.addEventListener("mousemove", event => {
  contentHeader.style.color = "red";
});
