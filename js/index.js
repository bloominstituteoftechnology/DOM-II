// Your code goes here

// Body style
const body = document.querySelector('body');

body.style.background = "#d3d3d3";
body.style.border = "1.5rem dotted #ba8759";
body.style.padding = "5rem";

// Navbar style
const mainNavigation = document.querySelector('.main-navigation');

mainNavigation.style.background = "#d2b48c";
mainNavigation.style.padding = "1.5rem"; 

// Navbar links
const navContainer = document.querySelector('.nav-link');

navContainer.style.flexDirection = "row";
navContainer.style.justifyContent = "space-between";

// Styling each <a></a> in the navbar
const navBar = document.querySelectorAll('a');
navBar.forEach(nav => {
    nav.style.textDecoration = "none";
    nav.style.color = "#987456";
    nav.style.fontSize = "1.5rem";
    nav.style.padding = "1.5rem";
});

// Styling each <h1></h1>
const headerOne = document.querySelectorAll('h1');

headerOne.forEach(headerOne => {
    headerOne.style.color = "#ff7e00";
    headerOne.style.fontSize = "4rem";
});

// Styling each <h2></h2>
const headerTwo = document.querySelectorAll('h2');

headerTwo.forEach(header => {
    header.style.textAlign = "center";
    header.style.color = "#ff8c00";
    header.style.fontSize = "2.5rem";
});

// Styling each <h2></h2>
const headerFour = document.querySelectorAll('h4');

headerFour.forEach(header => {
    header.style.textAlign = "center";
    header.style.color = "#ff8c00";
    header.style.fontSize = "2rem";
});

// Mouseover and mouseleave
const images = document.querySelectorAll('.img-content');

images.forEach(imgs => {
    imgs.addEventListener("mouseover", () => {
        imgs.style.transform = "rotate(180deg)";
    });
});

images.forEach(imgs => {
    imgs.addEventListener("mouseleave", () => {
        imgs.style.transform = "rotate(360deg)";
    });
});

// Keydown
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape"){
        document.classList.add("off");
    }
});


// dblclick
const doubleClick = document.querySelector('p');

doubleClick.addEventListener('dblclick', function() {
    doubleClick.classList.toggle('.large');
})

// Focus


// resize for content-destination
const resizeOutput = document.querySelector('.content-destination');


function reportWindowSize() {
  resizeOutput.textContent = window.innerHeight;
  resizeOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

// Drag
var destination;

document.addEventListener("drag", function() {

}, false);

document.addEventListener("dragstart", function(event) {

  destination = event.target;

  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {

  event.target.style.opacity = "";
}, false);


document.addEventListener("dragover", function(event) {

  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {

  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {

  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {

  event.preventDefault();

  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    destination.parentNode.removeChild( destination );
    event.target.appendChild( destination );
  }
}, false);