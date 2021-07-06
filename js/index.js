// Your code goes here

//1
let nav_links = document.querySelectorAll(".nav-link");
nav_links.forEach((element) => {
  element.addEventListener("mouseover", function (event) {
    this["style"]["color"] = "purple";
  });
  element.addEventListener("mouseout", function (event) {
    element.removeAttribute("style");
  });
});

//2
let logo_heading = document.querySelector(".logo-heading");
logo_heading.addEventListener("click", function (event) {
  this["style"]["color"] = "red";
});

//3
logo_heading.addEventListener("dblclick", function (event) {
  this["style"]["color"] = "blue";
});

//4
let intro = document.querySelector(".intro");
intro.addEventListener("mouseover", function (event) {
  this["style"]["color"] = "orange";
});
intro.addEventListener("mouseout", function (event) {
  intro.removeAttribute("style");
});

//5
