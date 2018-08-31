// change color and size of a tags on mouseenter
const aNavs = document.querySelectorAll("nav a");
aNavs.forEach(a => {
  a.addEventListener("mouseenter", function(e) {
    a.style.cursor = "pointer";
    a.preventDefault();
  });
});

//change opactiy of images on mouse enter and exit
const imgs = document.querySelectorAll(".img-content img");

imgs.forEach(img => {
  img.addEventListener("mouseover", function(e) {
    img.style.opacity = 0.5;
    e.preventDefault();
  }),
    img.addEventListener("mouseout", function() {
      img.style.opacity = 1;
    });
});

const firstMainImg = document.querySelector(".img-content img");
const secondMainImg = document.getElementsByClassName("img-content")[1];

// show pageY on scroll
// create div to house pageY value
const scrollCoords = document.createElement("div");
scrollCoords.style.position = "fixed";
scrollCoords.style.height = "50px";
scrollCoords.style.width = "100px";
scrollCoords.style.bottom = 0;
scrollCoords.style.right = 0;
scrollCoords.style.fontSize = "30px";
scrollCoords.style.margin = "0 auto";

document.addEventListener("scroll", function(e) {
  e.stopPropagation();
  scrollCoords.innerHTML = e.pageY;
  e.pageY > 1055
    ? (document.body.style.backgroundColor = "lightgray")
    : (document.body.style.backgroundColor = "aqua");
  e.pageY > 640
    ? (firstMainImg.style.opacity = 0)
    : (firstMainImg.style.opacity = 1);
  e.pageY > 960
    ? (secondMainImg.style.opacity = 0)
    : (secondMainImg.style.opacity = 1);
});
document.body.appendChild(scrollCoords);

// mousedown event on button
const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => {
  button.addEventListener("mousedown", function(e) {
    button.style.color = "yellow";
    button.style.backgroundColor = "black";
    button.addEventListener("mouseup", function(e) {
      button.style.color = "white";
      button.style.backgroundColor = "#17A2B8";
      e.stopPropagation();
    });
  });

  button.addEventListener("mouseover", function(e) {
    button.style.color = "#17A2B8";
    button.style.backgroundColor = "white";
    button.addEventListener("mouseout", function(e) {
      button.style.color = "white";
      button.style.backgroundColor = "#17A2B8";
      e.stopPropagation();
    });
  });

  // dblclick
  button.addEventListener(
    "dblclick",
    e => (button.style.backgroundColor = "limegreen")
  );
});

// document loads animation with transform

window.addEventListener("load", function(e) {
  alert("Welcome to the Fun Bus Travel Agency!");
});

// keydown when someone is scrolling
document.addEventListener("keydown", e => {
  console.log(e.key);
});

// const createQueryEventWithStyle = function(selector, eventType, styleToChange, styleValue ) {
//
//     let targ = document.querySelector(selector);
//     targ.addEventListener(eventType, (e) => {
//         return targ.style.styleToChange = styleValue;
//     });
// }
//
// createQueryEventWithStyle('.img-content img', 'mouseenter', 'opacity', 0.5);
