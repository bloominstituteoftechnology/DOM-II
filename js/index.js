// Your code goes here

// #1 Single click to change background color / color of text
const subHeader1 = document.querySelector("h2");

subHeader1.addEventListener("click", e => {
  e.target.style.backgroundColor = "green";
  e.target.style.color = "yellow";
});

// #2 Double click body for new background color
const bodyOfPage = document.querySelector("body");

bodyOfPage.addEventListener("dblclick", e => {
  e.target.style.backgroundColor = "yellow";
});

// #3 Mouse Over first paragraph to increase fontSize
const firstParagraph = document.querySelector("p");
firstParagraph.addEventListener("mouseover", e => {
  e.target.style.fontSize = "2.5rem";
});

// #4 Mouse enter to change button styling
const botButtons = document.getElementsByClassName("btn");
botButtons[0].addEventListener("mouseenter", e => {
  e.target.style.color = "yellow";
  e.target.style.backgroundColor = "green";
});

botButtons[1].addEventListener("mouseenter", e => {
  e.target.style.color = "red";
  e.target.style.backgroundColor = "blue";
});

botButtons[2].addEventListener("mouseenter", e => {
  e.target.style.color = "black";
  e.target.style.backgroundColor = "white";
});

// #5 Mouse Leave to change font style of buttons
botButtons[0].addEventListener("mouseleave", e => {
  e.target.style.fontFamily = "verdana";
});
botButtons[1].addEventListener("mouseleave", e => {
  e.target.style.fontFamily = "Candara";
});
botButtons[2].addEventListener("mouseleave", e => {
  e.target.style.fontFamily = "Futara";
});

// #6 Mouse move to make first img disappear
const pageImg = document.getElementsByTagName("img");
pageImg[0].addEventListener("mousemove", e => {
  e.target.style.display = "none";
});

// #7 mouse leave to make second image disappear
pageImg[1].addEventListener("mouseleave", e => {
  e.target.style.display = "none";
});

// #8 Keypress to change background color
bodyOfPage.addEventListener("keypress", e => {
  e.target.style.backgroundColor = "red";
});

// #9 Wheel Event to change font of the body
bodyOfPage.addEventListener("wheel", e => {
  e.stopPropagation(); // Stop propogation stops whole page -> bg yellow
  e.target.style.backgroundColor = "orange";
});

// #10 Copy to clipboard alerts
bodyOfPage.addEventListener("copy", e => {
  e.target.style.fontSize = "5.8rem";
});

// preventDefault to make the links not refresh page

const navLinks = document.querySelectorAll("a");
navLinks[0].addEventListener("click", e => {
  e.preventDefault();
});
navLinks[1].addEventListener("click", e => {
  e.preventDefault();
});
navLinks[2].addEventListener("click", e => {
  e.preventDefault();
});
navLinks[3].addEventListener("click", e => {
  e.preventDefault();
});
