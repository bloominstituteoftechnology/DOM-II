import { gsap } from "gsap";

// Your code goes here
console.log("working");

const launchB = document.querySelector("#launchButton");
const confirmButt = document.querySelector("#confirmButton");
const cancelButt = document.querySelector("#cancelButton");
const launchClear = document.querySelector("#launchClear");

const successM = document.querySelector(".success");
const failureM = document.querySelector(".failure");

const modal = document.querySelector(".modal");

launchB.addEventListener("click", eventLogger);

function eventLogger(event) {
  console.log("hi", `${event.type}`);
}

launchB.addEventListener("click", stopMod);

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    modal.classList.add("off");
    console.log("escape Key mofo");
  }
});

Array.from(document.all).forEach((elem) => {
  elem.addEventListener("click", logMe);
});

function logMe(e) {
  console.log(e.target);
  console.log(e.currentTarget.nodeName);
  e.stopPropagation();
}

document.addEventListener("click", logClick);

function logClick(e) {
  console.log(e.target);
}

function stopMod() {
  modal.classList.toggle("off");
}

confirmButt.addEventListener("click", confirmY);

function confirmY() {
  modal.classList.toggle("off");
  successM.classList.toggle("off");
  failureM.classList.add("off");
}

cancelButt.addEventListener("click", confirmN);

function confirmN() {
  modal.classList.toggle("off");
  failureM.classList.toggle("off");
  successM.classList.add("off");
}

launchClear.addEventListener("click", launchC);

function launchC(event) {
  modal.classList.add("off");
  failureM.classList.add("off");
  successM.classList.add("off");
}

document.querySelectorAll("a").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// ### Task 2: Create listeners for 10 types of events

// * [ ] Using your [index.js file](js/index.js), create [event listeners](https://developer.mozilla.org/en-US/docs/Web/Events) of at least 10 _different_ types. You must Use your creativity to make the Fun Bus site more interactive. For example you could change colors, animate objects, remove objects, etc. Here are some event types you could try to use:
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
// * [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

// const mainH = document.querySelector("h1");

// mainH.textContent = "hello";

// mainH.addEventListener("mouseover", (e) => {
//   mainH.textContent = "Hello";
//   mainH.style.fontSize = "250px";
//   mainH.style.border = "1px solid";
// });

// mainH.addEventListener("mouseout", (e) => {
//   mainH.textContent = "Funny Bus";
//   mainH.style.fontSize = "50px";
// });

// document.addEventListener("keydown", (e) => {

// });

// moves fun bus heading over
gsap.to(".logo-heading", {
  duration: 2,
  x: 100,
  ease: "bounce",
  backgroundColor: "white",
});

const allA = document.querySelectorAll("a");
console.log(allA);

// Asks user why he is pressing a key when a key is pressed
window.addEventListener("keydown", (e) => {
  allA.forEach((elem) => {
    e.preventDefault();
    elem.textContent = `why are you pressing ${e.key} you clown`;
  });
});

//blocks all links from working
// allA.forEach((elem) => {
//   elem.addEventListener("click", (e) => {
//     e.preventDefault();
//   });
// });

// Changes text of all links after key is pressed
// window.addEventListener("keyup", () => {
//   allA.forEach((elem) => {
//     elem.textContent = "Thanks for stopping hitting a key";
//   });
// });

// changes background to grey ons croll
window.addEventListener("wheel", () => {
  document.querySelector("body").style.background = "grey";
});

//logs what gets clicked
const titTwo = Array.from(document.querySelectorAll(".btn"));
console.log(titTwo);
allA.forEach((elem) => {
  elem.addEventListener("focus", (e) => {
    console.log(`I am in focus: ${e.target.textContent}`);
  });
});

//changes background to blue on keyup
// window.addEventListener("keyup", (e) => {
//   console.log("keyup");
//   if (e.key == "b") {
//     document.body.style.background = "blue";
//   }
// });

// const imaage = document.querySelector("img");

// const imaages = document.querySelectorAll("img");
// console.log(imaage);
// console.log(imaages);

// imaages.addEventListener('dragstart', dragstart)
// imaages.addEventListener('dragend'), dragend)
