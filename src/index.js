import "./less/index.less";

// Your code goes here!

//These are my DOM selectors

const busImg = document.querySelector(".container .intro img");
const nav = document.querySelector(".nav");
const placePicker = document.querySelector(".content-pick");
const destinations = document.querySelector(".content-destination");
const adventureAwaits = document.querySelector(".inverse-content");
const contentSection = document.querySelector(".content-section");
const introSectionH2 = document.querySelector(".intro h2");
const introSection = document.querySelector(".intro p");
const title = document.querySelector(".logo-heading");
const footer = document.querySelector(".footer");

//These are my re-useable functions
function locationBodyColor(e) {
  let x = e.offsetX;
  let y = e.offsetY;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
}

function randomBodyColor() {
  const newColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.color = "#" + newColor;
}

function makeDisappear(e) {
  e.target.style.display = "none";
}

function firstClick(e) {
  e.target.textContent = "Hmm, Try a double click";
  e.target.style.fontWeight = "bold";
  e.target.style.border = "2px solid black";
  e.target.style.textAlign = "center";
}

function clickTwice(e) {
  e.target.textContent = "Maybe one click again?";
  e.target.textAlign = "center";
}

function selector(e) {
  let newColor1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let newColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  e.target.style.background = newColor1;
  e.target.style.color = newColor2;
  e.target.style.border = `2px solid ${newColor2}`;
  e.target.style.fontWeight = "bold";
}

function byeBye(e) {
  if (
    placePicker.children[0].children[2].style.display === "none" &&
    placePicker.children[1].children[2].style.display === "none" &&
    placePicker.children[2].children[2].style.display === "none"
  )
    makeDisappear(e);
  comeAgain();
}

function comeAgain() {
  if (title.style.display === "none") {
    footer.children[0].textContent = "We Hope You Come Back Soon!";
    footer.children[0].style.fontWeight = "bold";
    footer.children[0].textAlign = "center";
  }
}

function preventHome(e) {
  e.preventDefault();
}

//1. Changes the body background Color when mousemove in bus image
busImg.addEventListener("mousemove", locationBodyColor);

//This is to test preventDefault
nav.children[0].addEventListener("click", preventHome);

//2. Changes the body font Color when clicking the nav links
nav.children[1].addEventListener("click", randomBodyColor);
nav.children[2].addEventListener("click", randomBodyColor);
nav.children[3].addEventListener("click", randomBodyColor);

//3. makes the first sign me up button disappear when mouseenter
placePicker.children[0].children[2].addEventListener(
  "mouseenter",
  makeDisappear
);

//4. Changes the middle sign me up button text on click
placePicker.children[1].children[2].addEventListener("click", firstClick);

//5. Changes the middle sign me up button text again on double click
placePicker.children[1].children[2].addEventListener("dblclick", clickTwice);

//6. makes the middle sign me up button disappear on mouseout
placePicker.children[1].children[2].addEventListener("mouseout", makeDisappear);

//7. Changes the last sign me up button background/font weight/color on mousedown
placePicker.children[2].children[2].addEventListener("mousedown", selector);

//8. Changes the last sign me up button background/font weight/color on mouseup
placePicker.children[2].children[2].addEventListener("mouseup", selector);

//9. Makes the last sign me up button disappear when mouseleave
placePicker.children[2].children[2].addEventListener(
  "mouseleave",
  makeDisappear
);

//10. Elements disappear after mouse track through, or clicks, if all buttons have disappeared

placePicker.addEventListener("mousemove", byeBye);
destinations.addEventListener("mousemove", byeBye);
adventureAwaits.addEventListener("mouseout", byeBye);
contentSection.addEventListener("mousemove", byeBye);
introSectionH2.addEventListener("mousemove", byeBye);
introSection.addEventListener("mousemove", byeBye);
busImg.addEventListener("mouseout", byeBye);
nav.children[0].addEventListener("click", byeBye);
nav.children[1].addEventListener("click", byeBye);
nav.children[2].addEventListener("click", byeBye);
nav.children[3].addEventListener("click", byeBye);
title.addEventListener("mouseenter", byeBye);
