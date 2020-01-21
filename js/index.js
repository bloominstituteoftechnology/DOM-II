// Your code goes here

// Mouseover & Mouseout - makes nav bar background limeGreen when hovering off and white when hovering over
const navBar = document.querySelector(".nav");

navBar.addEventListener("mouseenter", () => {
  navBar.style.backgroundColor = "limeGreen";
});

navBar.addEventListener("mouseleave", () => {
  navBar.style.backgroundColor = "white";
});

navBar.addEventListener("click", () => {
  e.preventDefault();
  console.log("navBar has been clicked!");
});

const aLinks = document.querySelectorAll(".nav a");
aLinks.forEach(item => {
  item.addEventListener("click", () => {
    e.stopPropagation();
    e.preventDefault();
    console.log(`${e.target.innerText} was clicked!`);
  });
});

// Wheel - makes top img bigger and smaller with scroll bar on mouse
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 3);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("img");
el.onwheel = zoom;

// Dblclick - makes the first button at bottom of page bigger when clicked twice
const btn = document.querySelector(".btn");

console.log(btn);

btn.addEventListener("dblclick", () => {
  btn.style.width = "250px";
  btn.style.height = "50px";
});

// Click Count - makes the first button at bottom of page have a counter
const click = document.querySelector(".btn");

click.addEventListener("click", () => {
  click.innerHTML = `Click count: ${event.detail}`;
});

// Copy Notifier - will notify you with a pop up if you try to copy any of the paragraphs
const copy = document.querySelectorAll("p");

copy.forEach(item => {
  item.addEventListener("copy", () => {
    window.alert("Hey! Don't copy me, that's stealing ya know!");
  });
});

copy.forEach(item => {
  item.addEventListener("cut", () => {
    window.alert("Hey! Don't cut me fool!");
  });
});

// Click - changes fun bus logo to blue when clicked
const logoChange = document.querySelector(".logo-heading");

logoChange.addEventListener("click", () => {
  logoChange.style.color = "blue";
});

// Keydown & Keyup - changes body to red when key is pressed down, and back to black when keyup
const backgroundChange = document.querySelector("body");

backgroundChange.addEventListener("keydown", () => {
  backgroundChange.style.color = "red";
});

backgroundChange.addEventListener("keyup", () => {
  backgroundChange.style.color = "black";
});
