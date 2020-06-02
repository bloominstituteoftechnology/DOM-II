//selectors
const navLinks = document.querySelectorAll(".nav-link");
const bottomBtns = document.querySelectorAll(".btn");
const newInput = document.createElement("input");
const nav = document.querySelector("nav");
const body = document.querySelector("body");
const logo = document.querySelector(".logo-heading");
const topImg = document.querySelector(".intro img");
const midImg = document.querySelector(".img-content img");
const allH2 = document.querySelectorAll("h2");

//array for random theme generator
const colors = [
  "dodgerblue",
  "slategrey",
  "midnightblue",
  "indianred",
  "darkslateblue",
  "chocolate",
];
//Added search box at top
newInput.id = "search";
nav.appendChild(newInput);

///////// AddEventListeners Below //////////

//Searchbox Keydown & Keyup
newInput.addEventListener("keydown", () => {
  newInput.style.backgroundColor = "yellow";
});
newInput.addEventListener("keyup", () => {
  newInput.style.backgroundColor = "pink";
});

//Top Nav Mouseout & Mouseover
navLinks.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    element.style.color = "hotpink";
    element.style.transform = "scale(1.2)";
  });

  element.addEventListener("mouseout", () => {
    element.style.color = "black";
    element.style.transform = "scale(1)";
  });
});

//Bottom Button One Double Click
bottomBtns[0].textContent = "Double Click Me";
bottomBtns[0].addEventListener("dblclick", () => {
  alert("Yay you double clicked!");
});

//Bottom Button Two Click
bottomBtns[1].textContent = "Random Theme";
bottomBtns[1].addEventListener("click", () => {
  let random = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[random];
  body.style.color = "white";
  logo.style.color = "black";
});

//Bottom Button Three Wheel Zoom
bottomBtns[2].textContent = "Mouse Wheel Me";

let scale = 1;
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.1, scale), 2);
  bottomBtns[2].style.transform = `scale(${scale})`;
}

bottomBtns[2].addEventListener("wheel", zoom);

//DragStart DragEnd middle Image
midImg.className = "fill";
const fill = document.querySelector(".fill");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

//MouseEnter
allH2[0].addEventListener("mouseenter", slide);
// allH2[1].addEventListener("mouseenter", slide);
function slide() {
  allH2[0].style.transform = "translateX(250px)";
  allH2[0].style.transition = "3s";
}

// allH2.forEach((element) => {
//   element.addEventListener("mouseenter", (event) => {
//     element.style.transform = "translateX(250px)";
//     element.style.transition = "3s";
//   });
// });
