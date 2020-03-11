// Your code goes here
// homeLink.addEventListener(
//   "click", // string with the name of the event
//   () => {
//     // things we want happening when this
//     // link gets clicked
//     console.log("the link got clicked");
//   }
// );
function clickEventHandler(event) {
  console.log(event.type + "!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  //   console.log(event.target);
  //   console.log(event.currentTarget);
}
document.querySelector("a").addEventListener("click", clickEventHandler);
document.querySelector("nav").addEventListener("click", clickEventHandler);
document.querySelector("header").addEventListener("click", clickEventHandler);
document.body.addEventListener("click", clickEventHandler);
document.addEventListener("click", clickEventHandler);
window.addEventListener("click", clickEventHandler);
//using prevent default so a tags dont do anything
document.querySelector("a").addEventListener("click", function(event) {
  event.preventDefault();
});

//changed Fun Bus
document.getElementById("homeLink").addEventListener("mouseover", mouseOver);
document.getElementById("homeLink").addEventListener("mouseout", mouseOut);
function mouseOver() {
  document.getElementById("homeLink").style.color = "yellow";
}
function mouseOut() {
  document.getElementById("homeLink").style.color = "black";
}

//playing with console.log when it loads the page
window.onload = event => {
  console.log("page is super done amigo");
};

//playing with the h2
function pause() {
  document.body.classList.add("paused");
  log.textContent = "FOCUS LOST!";
}

function play() {
  document.body.classList.remove("paused");
  log.textContent =
    "This document has focus. Click outside the document to lose focus.";
}

const log = document.getElementById("bus");

window.addEventListener("blur", pause);
window.addEventListener("focus", play);

//bottom of the page
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

//playing with the scroll

window.onscroll = function() {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myP").className = "test";
  } else {
    document.getElementById("myP").className = "";
  }
}
//playing with imag
document.getElementById("myImg").addEventListener("error", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "The image could not be loaded.";
}
//keydown 7
const bam = document.getElementById("boom");

bam.addEventListener("keydown", boo);

function boo() {
  bam.style.backgroundColor = "red";
}

// keyup 8
document.getElementById("fname").addEventListener("keyup", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}
//dble click 9
document.getElementById("double").addEventListener("dblclick", callback);

function callback() {
  document.getElementById("double").textContent = "I was double-clicked!";
}

//load 10

document.getElementById("myFrame").addEventListener("load", wade);

function wade() {
  document.getElementById("lola").innerHTML = "Iframe is loaded.";
}

//propogationg
const parent = document.querySelector(".destination");
let child = document.querySelector(".destination .btn");

parent.addEventListener("click", event => {
  event.target.style.backgroundColor = "red";
});

child.addEventListener("click", event => {
  event.stopPropagation();
});
