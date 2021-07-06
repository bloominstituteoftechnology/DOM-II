// Your code goes here

//1
let nav_links = document.querySelectorAll(".nav-link");
nav_links.forEach((element) => {
  element.addEventListener("mouseover", function (event) {
    this.style.color = "purple";
  });
  element.addEventListener("mouseout", function (event) {
    element.removeAttribute("style");
  });
});

//2
let logo_heading = document.querySelector(".logo-heading");
logo_heading.addEventListener("click", function (event) {
  this.style.color = "red";
});

//3
logo_heading.addEventListener("dblclick", function (event) {
  this.style.color = "blue";
});

//4
let intro = document.querySelector(".intro");
intro.addEventListener("mouseover", function (event) {
  this.style.color = "orange";
});
intro.addEventListener("mouseout", function (event) {
  intro.removeAttribute("style");
});

//5

let text = document.querySelector(".text-content");
text.addEventListener("select", function (event) {
  text.style.color = `blue`;
});

//6

let page = window;
page.addEventListener("load", function (event) {
  alert(`Press 'N' to toggle between night mode`);
});

//7

text.addEventListener("click", function (event) {
  alert("Time for fun!");
});

//8
let body = document.querySelector(".text-content");

body.addEventListener("wheel", function (event) {
  event.target.style.fontSize = "22px";
});

//9

page.addEventListener("resize", function (event) {
  console.log(`Window has been resized`);
});

//10

const destination = document.querySelector(".content-pick");

destination.addEventListener("mouseover", function (event) {
  destination.style.color = "cyan";
});
destination.addEventListener("mouseout", function (event) {
  destination.removeAttribute("style");
});
