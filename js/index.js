// Your code goes here

// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ ] Stop the navigation from items from refreshing the page by using `preventDefault()`

// reference the DOM
const navBar = document.querySelector(".main-navigation");
const navItems = document.querySelectorAll(".nav a");
const logoHeading = document.querySelector(".logo-heading");
const logoHeadingBus = document.querySelector(".logo-heading-bus");
const background = document.querySelector(".background");

// on hover over Fun Bus, remove Fun Bus, replace with image of bus

// When mouseover navbar, change "Fun Bus" text to picture of bus
navBar.addEventListener("mouseover", e => {
  logoHeadingBus.classList.remove("logo-toggle-no-bus");
  logoHeading.classList.add("logo-toggle-no-text");
});

// Revert to original layout when mouseout from navbar
navBar.addEventListener("mouseout", e => {
  logoHeading.classList.remove("logo-toggle-no-text");
  logoHeadingBus.classList.add("logo-toggle-no-bus");
});

// When clicking on img of bus, do a backflip
logoHeadingBus.addEventListener("click", e => {
  logoHeadingBus.classList.toggle("wiggle-bus");
});

// double clicking "About Us" changes the text to "But What About You?"
navItems[1].addEventListener("dblclick", e => {
  navItems[1].innerHTML = "What About You?";
  console.log("click");
});

// press "spacebar" key to make all of the text white
document.addEventListener("keydown", e => {
  if (e.keyCode === 32) {
    document.querySelector("body").style.color = "white";
  }
});

// onload, popup an alert
window.addEventListener("load", e => {
    alert("press space to whiten text, scroll to change colors, SHIFT + k to flip colors");
});

// 8th event change background color to pink when resizing window
window.addEventListener("resize", e => {
    background.style.background = "pink";    
});

// keypress when "K" is pressed, change background to "orange"
document.addEventListener("keypress", e => {
    if(e.keyCode === 75) {
        console.log(e.keyCode);
        background.style.background = "orange";
    }
}); 

// keyup when K is released, change background to "green"
document.addEventListener("keyup", e => {
    if(e.keyCode === 75) {
        background.style.background = "green";
    }
});


let red = 0;
let r = 0;
let green = 0;
let g = 0;
let blue = 0;
let b = 0;

let red2 = 0;
let r2 = 0;
let green2 = 0;
let g2 = 0;
let blue2 = 0;
let b2 = 0;

background.addEventListener("wheel", e => {
  if (r < 15) {
    r += e.deltaY / 100;
    red = r.toString(16);
    console.log(`${red}${red2}${green}${green2}${blue}${blue2}`);
  }
  if (r === 15 && r2 < 15) {
    r2 += e.deltaY / 100;
    red2 = r2.toString(16);
    console.log(`${red}${red2}${green}${green2}${blue}${blue2}`);
  }
  if (r2 === 15 && g < 15) {
    g += e.deltaY / 100;
    green = g.toString(16);
    console.log(`${red}${red2}${green}${green2}${blue}${blue2}`);
  }
  if (g === 15 && g2 < 15) {
    g2 += e.deltaY / 100;
    green2 = g2.toString(16);
    console.log(`${red}${red2}${green}${green2}${blue}${blue2}`);
  }
  if (r2 === 15 && g2 === 15 && b < 15) {
    b += e.deltaY / 100;
    blue = b.toString(16);
    console.log(`${red}${red2}${green}${green2}${blue}${blue2}`);
  }
  if (g2 === 15 && b2 < 15) {
    b2 += e.deltaY / 100;
    blue2 = b2.toString(16);
    console.log(`${red}${red2}${green}${green2}${blue}${blue2}`);
  }

  if(r2 > 10 && g2 > 10 && b2 > 10){
      document.querySelector('body').style.color = "black";
  }
   // F2A5FF
  background.style.background = `#${red}${red2}${green}${green2}${blue}${blue2}`;
});
background.style.background = `#${red}${red2}${green}${green2}${blue}${blue2}`;
