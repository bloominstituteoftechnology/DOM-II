// Your code goes here

let newWindow;

let introH2 = document.querySelector(".intro > h2");
introH2.addEventListener("mouseover", (event) => {
  newWindow = window.open("hello", "world", "width=150, height=150");
  event.target.style.color = "yellow";
});

introH2.addEventListener("mouseleave", (event) => {
  event.target.style.color = "black";
});

let body = document.querySelector("body");
body.addEventListener("keydown", (event) => {
  if (event.keyCode === 65) {
    event.target.style.color = "pink";
  }
});

body.addEventListener("keydown", (event) => {
  if (event.keyCode === 66) {
    event.target.style.color = "black";
  }
});

let newSpan = document.createElement("span");

let wheelScroll = document.querySelector("body");
wheelScroll.addEventListener("wheel", (event) => {
  newSpan.textContent = "HELLO I AM A NEW SPAN";
  body.appendChild(newSpan);
  //   console.log("firing!");
});

let loadingScreen = window;
loadingScreen.addEventListener("load", (event) => {
  console.log("loaded up!");
});

let focusFeature = document.querySelector(".nav-link");
console.log(focusFeature);
focusFeature.addEventListener("focus", (event) => {
  event.target.style.fontSize = "3rem";
  console.log("works");
});

let def = document.defaultView;

let windowResize = window;
windowResize.addEventListener("resize", (event) => {
  newWindow.resizeTo(500, 500);
  console.log("working");
  return def;
});

let scrolling = window;
scrolling.addEventListener("scroll", (event) => {
  scrolling.setTimeout(
    window.setTimeout(window.alert, 90 * 1000, "Refresh the page!")
  );
  console.log("scroll works");
});

// let selectText = document.querySelector(".theSelect");
// console.log(selectText);
// selectText.addEventListener("select", (event) => {
//   event.target.style.backgroundColor = "red";
// });

function logSelection(event) {
  const log = document.querySelector(".logo-heading");
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  log.textContent = selection;
}

const input = document.querySelector("input");
input.addEventListener("select", logSelection);

let clickAlert = document.querySelector("body");
clickAlert.addEventListener("dblclick", (event) => {
  alert("You just double clicked!");
});

// DRAG DRAG DRAG DRAG

let dropzone = document.getElementById("drop-box");
let drag = document.querySelector("#drag");
let img = document.querySelector("#drag");

document.addEventListener(
  "drag",
  function (event) {
    console.log("working");
    event.dataTransfer.setData("text", event.target.id);
  },
  false
);

dropzone.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
    console.log("drop working");
  },
  false
);
