// Your code goes here
//Variable Declarations & Element Instantiations
const home = document.querySelector(".home");
const heroImg = document.querySelector(".container .intro img");

const btns = document
  .querySelectorAll(".btn")
  .forEach(elem => elem.addEventListener("click", playJingle, true));

const happyAudio = new Audio("audio/happy.mp3");

const myInput = document.createElement("textArea");

myInput.setAttribute(
  "style",
  "width: 100%; height: 100px; padding: 10px; margin: 0 0 20px; border: 1px solid #CCC; border-radius: 4px; resize: vertical; font-size: 1.5rem; "
);

myInput.setAttribute("rows", "100");
myInput.setAttribute("cols", "100");
myInput.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam at urna eget finibus. Fusce facilisis nulla posuere libero volutpat, eu eleifend odio venenatis. Etiam vestibulum sapien libero, in porttitor est scelerisque nec. Etiam eget pharetra ante. In id sollicitudin nulla. Aliquam ullamcorper sagittis dolor at ultricies. Sed maximus risus at massa fermentum vehicula. Pellentesque malesuada venenatis orci, aliquet vehicula quam tincidunt at. Ut non orci vitae magna laoreet pharetra. Nam rhoncus nibh eu turpis ullamcorper aliquam. Nulla ornare nec nisi eget lobortis. Morbi condimentum mattis mi, sed placerat mauris euismod eu. Praesent varius metus sit amet tortor iaculis, at accumsan metus molestie. Proin dignissim laoreet tellus, nec faucibus ante. Sed purus ex, bibendum quis gravida a, euismod quis erat. Aenean nec aliquam dui, sed congue metus. Cras sollicitudin laoreet vulputate. Aliquam bibendum sodales dui, a semper diam interdum ut. Aliquam aliquam volutpat libero. Vivamus viverra consectetur leo in tincidunt. Curabitur fermentum elit eu scelerisque pharetra. Integer tincidunt convallis condimentum. Praesent aliquam elit eu lectus suscipit luctus sed sit amet metus. Maecenas sem libero, tincidunt id pretium sed, aliquet nec urna. Cras euismod odio odio, ac rhoncus lorem varius eget. Donec velit metus, imperdiet sit amet turpis eget, euismod molestie justo. Aenean pellentesque velit vel ex iaculis, ut sagittis dui sodales. Morbi pellentesque erat non ex dapibus condimentum. Donec congue sem non libero viverra, et egestas orci semper. Phasellus facilisis feugiat ligula et vehicula. Phasellus consectetur magna diam, in efficitur elit efficitur in. Integer sit amet quam a metus vulputate varius. Sed porttitor eros et nunc cursus bibendum. Sed augue sapien, rhoncus nec congue vitae, euismod eget elit. Etiam tortor turpis, luctus id gravida ac, dignissim eu neque. Nullam malesuada luctus vulputate. Pellentesque semper ultricies lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquam convallis tellus, vitae venenatis erat cursus at. Pellentesque vitae facilisis sapien. Phasellus vel vulputate quam. Quisque pretium maximus urna non pretium. Quisque consequat lorem tristique est imperdiet, sit amet volutpat turpis cursus. Proin blandit metus quis volutpat tristique. Fusce aliquam sem ipsum, quis sagittis metus elementum vel. Duis ut dolor ligula. Proin posuere est id turpis faucibus, nec viverra purus accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ornare molestie semper. Morbi vel dui a odio efficitur lobortis id in lectus. Nulla facilisi. Nullam quis odio luctus, condimentum neque a, cursus magna. Sed porta id odio vel fermentum. Quisque semper ex interdum orci tincidunt, scelerisque consequat sapien finibus. Proin ac tristique nunc. Aenean gravida consequat nunc, vel tristique lorem pellentesque et. Pellentesque non quam turpis. Donec gravida quis libero gravida placerat. Aenean id ex at odio ultrices lobortis.";

home.appendChild(myInput);

const imgs = document.querySelectorAll(".img-content");
imgs.forEach(elem => {
  elem.children[0].classList.add("draggable");
  elem.children[0].setAttribute("draggable", true);
});

let dragged, draggedOver;

//Functions
function moveHero(e) {
  e.target.style.right = 0;
  console.log("heroMoved");
  e.target.removeEventListener("mouseover", moveHero, true);
}

function playJingle(e) {
  happyAudio.play();
}

function displayMessage(e) {
  if (e.keyCode === 77) {
    let welcome = prompt(
      "Welcome to the Fun Bus! What is your name?",
      "Your name"
    );

    if (welcome !== "") alert(`Hi ${welcome}! Get on the bus, let's ride!`);

    document.removeEventListener("keydown", displayMessage, true);
  }
}

function logSelection(e) {
  const selection = e.target.value.substring(
    e.target.selectionStart,
    e.target.selectionEnd
  );
  console.log(`You selected: ${selection}`);
}

function logYOffset() {
  window.pageYOffset > 500 && window.pageYOffset < 700
    ? console.log(`Page Y-Offset ${window.pageYOffset}`)
    : false;
}

function logPageDimensions() {
  console.log(
    `Window Width: ${window.innerWidth}, Window Height: ${window.innerHeight}`
  );
}

function cheeryGreeting() {
  const d = new Date();
  const dayPart =
    d.getHours() < 12
      ? "Morning"
      : d.getHours() > 11 && d.getHours() < 18
      ? "Afternoon"
      : "Evening";

  console.log(`Good ${dayPart}!`);
}

function dragStart(e) {
  dragged = e.target;
}

function dragOver(e) {
  e.preventDefault();
  draggedOver = e.target;
  e.target.className.includes("draggable")
    ? (e.target.style.opacity = "0.5")
    : false;
  return;
}

function dragLeave() {
  draggedOver.style.opacity = "1";
}

function dropped(e) {
  e.preventDefault();
  const cloneDragged = dragged.cloneNode(true);
  const cloneDraggedOver = draggedOver.cloneNode(true);
  draggedOver.parentNode.appendChild(cloneDragged);
  dragged.parentNode.appendChild(cloneDraggedOver);

  dragged.parentNode.removeChild(dragged);
  draggedOver.parentNode.removeChild(draggedOver);

  cloneDraggedOver.style.opacity = "1";
}

//Event Listeners
heroImg.addEventListener("mouseover", moveHero, true);
document.addEventListener("keydown", displayMessage, true);
myInput.onselect = logSelection;
document.addEventListener("scroll", logYOffset, true);
window.onresize = logPageDimensions;
window.onload = cheeryGreeting;
document.addEventListener("dragstart", dragStart, false);
document.addEventListener("dragover", dragOver, false);
document.addEventListener("dragleave", dragLeave, false);
document.addEventListener("drop", dropped, false);
// ***Unique Listeners***
// click
// mouseover
// keydown
// select
// scroll
// resize
// load/onload
// drag / drop
