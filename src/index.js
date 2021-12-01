import e from "cors";
import "./less/index.less";

// Your code goes here!
const funBusHeader = document.querySelector("h1");
const navLinks = document.querySelectorAll("a");
const busImage = document.querySelector("img:nth-of-type(1)");
const openingParagraph = document.querySelector(".container .intro p");
const contactLink = document.querySelector("a:nth-of-type(4)");

const mainTitles = document.querySelectorAll("h2");

const signUpButton = document.querySelectorAll(".btn");

const copyrightParagraph = document.querySelector("footer p");

function mouseOnHeaderLogo() {
  funBusHeader.style.color = "gold";
}
function mouseNotHovering() {
  funBusHeader.style.color = "black";
}

function focusEffect(e) {
  e.target.style.color = "Gold";
}

function blurEffect(e) {
  e.target.style.color = "Black";
}

function changeBusImage() {
  busImage.src = "https://unsplash.com/photos/T5jzpRTVF1U";
}

function contactLinkBackgroundColor() {
  contactLink.style.backgroundColor = "red";
}

function boldParagraph(e) {
  e.target.style.fontWeight = "Bold";
}

function titleSelected(e) {
  console.log(e);
  e.target.style.textDecoration = "underline";
}

function doubleClick(e) {
  e.target.style.fontWeight = "Bold";
  e.target.style.borderColor = "Black";
}

function copyEffect() {
  copyrightParagraph.style.textDecoration = "underline";
}

funBusHeader.addEventListener("mouseover", mouseOnHeaderLogo);
funBusHeader.addEventListener("mouseleave", mouseNotHovering);
navLinks.forEach((anchorTag) =>
  anchorTag.addEventListener("focus", focusEffect)
);
navLinks.forEach((anchorTag) => anchorTag.addEventListener("blur", blurEffect));
busImage.addEventListener("click", changeBusImage);
openingParagraph.addEventListener("mouseenter", boldParagraph);
contactLink.addEventListener("keydown", contactLinkBackgroundColor);
mainTitles.forEach((title) => title.addEventListener("select", titleSelected));
signUpButton.forEach((button) =>
  button.addEventListener("dblclick", doubleClick)
);
copyrightParagraph.addEventListener("copy", copyEffect);
