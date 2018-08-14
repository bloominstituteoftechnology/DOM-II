// Your code goes here
//Get References
const sandBus = document.querySelector(".sandbus");
const mainNav = document.querySelector(".nav");
const welcometofun = document.querySelector(".welcometofun");
const footer = document.querySelector(".footer");
const htwooo = document.querySelectorAll("h2");
// //Add Event Listeners

sandBus.addEventListener("mouseover", event => {
  event.target.style.opacity = "0.5";
});
sandBus.addEventListener("mouseout", event => {
  event.target.style.opacity = "1.0";
});

mainNav.addEventListener("click", event => {
  event.target.style.color = "red";
  event.target.style.color = preventDefault();
});

document.addEventListener("keypress", event => {
  const keyName = event.key;
  alert("keydown event\n\n" + "key: " + keyName);
});

document.addEventListener("wheel", event => {
  event.target.style.background = getRandomColor();
  event.target.style.color = getRandomColor();
});

let dragged;
document.addEventListener("drag", event => {}, false);

document.addEventListener("dragstart", event => {
  dragged = event.target;
  event.target.style.opacity = 0.1;
});

document.addEventListener("dragend", event => {
  event.target.style.opacity = "";
});

footer.addEventListener("dblclick", event => {
  event.preventDefault();
  event.target.style.background = "pink";
  event.target.style.color = "blue";
});

document.addEventListener("copy", event => {
  alert("STOP! THIEF!");
  event.target.classList.toggle("hide-this");
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
