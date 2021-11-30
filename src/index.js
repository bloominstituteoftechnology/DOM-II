import e from "cors";
import "./less/index.less";

// Your code goes here!
const funBusHeader = document.querySelector("h1");
const openingParagraph = document.querySelector(".container .intro p");
const contactLink = document.querySelector("a:nth-of-type(4)");

const mainTitles = document.querySelectorAll("h2");
mainTitles.forEach((title) => title);

const signUpButton = document.querySelectorAll(".btn");
signUpButton.forEach((button) => {
  button;
});

const contentDestination = document.querySelector(".content-destination");

function mouseOnHeaderLogo() {
  funBusHeader.style.color = "gold";
}
function mouseNotHovering() {
  funBusHeader.style.color = "black";
}

function contactLinkBackgroundColor() {
  contactLink.style.backgroundColor = "red";
}

function boldParagraph(e) {
  e.target.style.fontWeight = "Bold";
}

function titleSelected(e) {
  e.target.style.backgroundColor = "grey";
}

function doubleClick(e) {
  e.target.style.fontWeight = "Bold";
  e.target.style.border = "Black";
}

function scrollEffect() {
  if (window.scroll >= 700) {
    contentDestination.style.opacity = "1";
    contentDestination.style.transition = "1s ease-in-out";
  } else {
    contentDestination.style.opacity = "0";
    contentDestination.style.transform = "translateX(-50px";
  }
}

funBusHeader.addEventListener("mouseover", mouseOnHeaderLogo);
funBusHeader.addEventListener("mouseleave", mouseNotHovering);
openingParagraph.addEventListener("mouseenter", boldParagraph);
contactLink.addEventListener("keydown", contactLinkBackgroundColor);

mainTitles.addEventListener("select", titleSelected);
signUpButton.addEventListener("dblclick", doubleClick);

contentDestination.addEventListener("scroll", scrollEffect);
