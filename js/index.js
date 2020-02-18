// Your code goes here

// Mouse Enter

let theBus = document.querySelector("h1");
theBus.addEventListener("mouseover", () => {
  theBus.style.backgroundColor = "green";
  theBus.style.color = "black";
});

// Mouse Leave

theBus.addEventListener("mouseleave", () => {
  alert("Special Offer!");
});

// Dlouble Click

let changePic = document.querySelector(".intro img");
changePic.addEventListener("dblclick", () => {
  changePic.src =
    "https://images.unsplash.com/photo-1537522306408-8435f315b2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
});

// Resize Event

let newSize = document.querySelector(".intro img");

window.addEventListener("resize", () => {
  newSize.style.display = "none";
});

// Mouse Down Event

let down = document.querySelector(".img-content img");
down.addEventListener("mousedown", () => {
  down.style.border = "10px solid red";
});

// Mouse Up Event

let up = document.querySelector(".img-content img");
down.addEventListener("mouseup", () => {
  down.style.display = "none";
});

// Copy Event

let copyEvent = document.querySelector("p");
copyEvent.addEventListener("copy", () => {
  alert("Property of Fun Bus inc!");
});

// Load Event

let loadEvent = document.querySelector("p");
window.addEventListener("load", () => {
  alert("Page is fully loaded!");
});

// Dragstart Event

const dragDelete = document.querySelector(".intro img");
dragDelete.addEventListener("dragstart", () => {
  dragDelete.style.display = "none";
});

// Footer changes background when  you enter / leave
const footer = document.querySelector("footer");

footer.addEventListener("mouseenter", foot => {
  foot.target.style.backgroundColor = "yellow";
});

footer.addEventListener("mouseleave", foot => {
  foot.target.style.backgroundColor = "#FFEBCD";
});

// Keydown/Keyup
const keyBttn = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
  keyBttn.textContent = "Travel far!";
  keyBttn.style.color = "#f65c78";
  keyBttn.style.fontSize = "4rem";
});

window.addEventListener("keyup", () => {
  keyBttn.textContent = "Dont miss out!";
  keyBttn.style.color = "#212529";
  keyBttn.style.fontSize = "4rem";
});
