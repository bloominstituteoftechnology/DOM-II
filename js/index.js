/** @format */

//changing bus image to a new one with dblclick

const magicBus = document.querySelector(".intro img");

magicBus.addEventListener("dblclick", () => {
  magicBus.src =
    "https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80";
  magicBus.alt = "a colorfully painted bus";
  console.log("hi");
});

//changing logo text with mouseenter and mouseleave

const logo = document.querySelector(".logo-heading");

logo.addEventListener("mouseenter", () => {
  logo.style.color = "teal";
  logo.style.transform = "scale(1.5)";
  logo.style.transition = "all 1s";
});

logo.addEventListener("mouseleave", () => {
  logo.style.color = "black";
  logo.style.transform = "scale(1)";
  console.log(4);
});

/*// using preventDefault

const navStop = document.querySelectorAll("a");

navStop.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped");
});
*/

// scroll effect

const scrollColor = document.querySelector("body");

window.addEventListener("scroll", () => {
  scrollColor.style.color = "purple";
  console.log(scroll);
});
// resize event

const resizeColor = document.querySelector("body");

window.addEventListener("resize", (event) => {
  resizeColor.style.backgroundColor = "turquoise";
  resizeColor.style.transition = "all 1s";
  console.log("resize", event);
});
