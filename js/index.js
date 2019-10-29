// Your code goes here

//Mouse Enter
const busImg = document.querySelector(".yellowBus");

busImg.addEventListener("mouseenter", () => {
  busImg.style.transform = "rotate(360deg)";
  busImg.style.transition = "all 2.5s";
});
//Mouse Leave
busImg.addEventListener("mouseleave", () => {
  busImg.style.transform = "scale(1)";
});

//Wheel
const colorP = document.querySelector(".intro p");

colorP.addEventListener("wheel", () => {
  colorP.style.backgroundColor = "dodgerblue";
});

//resize
const losMap = document.querySelector(".map");
window.addEventListener("resize", () => {
  losMap.src =
    "https://images.unsplash.com/photo-1509066380918-7487b4bb1fb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1965&q=80";
});

//on click

document.querySelectorAll("h2").forEach(element => {
  element.addEventListener("click", () => {
    element.style.color = "seagreen";
    element.style.backgroundColor = "dodgerblue";
    element.style.borderRadius = "2rem";
  });
});

//on doubleclick

document.querySelectorAll("h2").forEach(element => {
  element.addEventListener("dblclick", () => {
    element.style.color = "black";
    element.style.backgroundColor = "white";
  });
});

//keyup

const keyStroke = document.querySelector("body");

keyStroke.addEventListener("keyup", () => {
  keyStroke.style.backgroundColor = "white";
});

//keydown

const keyTap = document.querySelector("body");

keyStroke.addEventListener("keydown", () => {
  keyStroke.style.backgroundColor = "black";
});

//auxclick

document.querySelectorAll("a").forEach(element => {
  element.addEventListener("auxclick", () => {
    element.style.color = "seagreen";
    element.style.backgroundColor = "dodgerblue";
    element.style.borderRadius = "2rem";
  });
});

//mouseclick mousedown

document.querySelectorAll("p").forEach(element => {
  element.addEventListener("mousedown", () => {
    element.style.color = "orange";
    element.style.backgroundColor = "black";
  });
});

//Stop Propagation

const body = document.querySelector("body");

body.addEventListener("click", event => {
  body.style.backgroundColor = "silver";
  console.log("end");
  event.stopPropagation();
});

const bread = document.querySelector(".nav");
bread.addEventListener("click", event => {
  bread.style.backgroundColor = "rebeccapurple";
  event.stopPropagation();
});

const breadFriend = document.querySelector(".nav a");
breadFriend.addEventListener("click", event => {
  breadFriend.style.backgroundColor = "dodgerblue";
  // console.log("start")
  console.log(event);
  event.stopPropagation();
});

const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", event => {
  console.log("stopped the link");
  event.preventDefault();
});
