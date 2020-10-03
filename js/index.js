// Your code goes here

// 1) Click AND event Bubbling. I will count this as one method.

const title = document.querySelector("h1");
title.style.cursor = "pointer";
const headingOne = document.querySelector("h2");
headingOne.style.cursor = "pointer";
const headings = document.querySelectorAll("h2");

title.addEventListener("click", () => {
  title.style.fontWeight = "bold";
});

Array.from(headings).forEach((heading) => {
  heading.style.cursor = "pointer";
  heading.addEventListener("click", (element) => {
    heading.style.fontWeight = "bold";
    heading.style.color = "#17A2B8";
    element.stopPropagation();
  });
});

// 2 & 3) Hover Effect for all images using .forEach We can actually set the mouseenter and mouseleave animation listeners in the same exact forEach loop. We also do not have to stop propigation since we are using a .foreach loop and we are not targeting any elements outside of our loop with the same event. I am counting this as 2 events though because 10 different event types is a LOT AND the documentation linked in the readme.md clearly states that mouseenter and mouseleave are two seperate and different events. It's just easier and cleaner to include them together in the same loop.

const images = document.querySelectorAll("img");

Array.from(images).forEach((image) => {
  image.style.cursor = "zoom-in";
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.2)";
    image.style.transition = "transform 0.9s";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
    image.style.transition = "transform 0.9s";
  });
});

// 4) resize I want to enable or disable a dark mode for the entire page when the window is resized.

let darkMode = document.getElementsByTagName("body");
let doNotChangeThese = document.querySelectorAll("img");

window.addEventListener("resize", () => {
  console.log(darkMode);
  darkMode[0].style.filter = "invert(1) hue-rotate(180deg)";
  darkMode[0].style.backgroundColor = "black";
  Array.from(doNotChangeThese).forEach((image) => {
    image.style.filter = "invert(1) hue-rotate(180deg)";
  });
});

// 5) scroll I am going to make the header not fixed on scroll

const header = document.getElementsByClassName("main-navigation");

window.addEventListener("scroll", function () {
  header[0].style.position = "relative";
});

// 6) keydown Im just going to console.log the keys that are pressed.

document.addEventListener("keydown", (key) => {
  console.log("You pressed: ", key.key);
});

// 7) pointerover I will align p text center on pointerover

const firstParagraph = document.querySelector("p");
firstParagraph.style.cursor = "pointer";

firstParagraph.addEventListener("pointerover", () => {
  firstParagraph.style.textAlign = "center";
});

// 8) pointerout align the same p text left on pointer out

firstParagraph.addEventListener("pointerout", () => {
  firstParagraph.style.textAlign = "left";
});

// 9) doubleclick Its like single click but twice. Underline h4 text on doubleclick

const bottomHeadings = document.querySelectorAll("h4");

Array.from(bottomHeadings).forEach((heading) => {
  heading.style.cursor = "pointer";
  heading.addEventListener("dblclick", () => {
    heading.style.borderBottom = "1px solid #17A2B8";
  });
});

// 10) online && Offline

window.addEventListener("online", () => {
  console.log("You have connected to the network");
});

window.addEventListener("offline", () => {
  console.log("You have lost connection");
});
