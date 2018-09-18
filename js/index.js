// DOM II Instructions

// Using your index.js file, create 10 unique event listeners. using your creativity to make the Fun Bus site more interactive. Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

//  Nest two similar events somewhere in the site and prevent the event propagation properly
//  Stop the navigation from items from refreshing the page by using preventDefault()

// Your code goes here

// Event Listeners - Step 1: Get the reference
const sitetitle = document.querySelector('.logo-heading');
const busimage = document.querySelector('.intro img');
const contentsection = document.querySelector('.content-section');
const navlinks = document.querySelector('a');
const intro = document.querySelector('.intro');
const text = document.querySelector('.text-content p');
//console.log(busimage);
// const home = document.querySelector('.home');
// const myBtn = document.querySelector('.btn');
// const myParagraph = document.querySelector('.testing');

// // Step 2 & 3: Add Event Listener to the reference & do something in {}. 

//Event 1 - Mouseover Fun Bus turns it blue. 
sitetitle.addEventListener('mouseover', (event) =>  
  {sitetitle.style.color = 'blue';
});

//Event 2 - If "f" is pressed an alert is displayed. 
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(keyName === 'f') {
    alert(`You pressed ${keyName}! You get 1 free bus!`);
  }
});

//Event 3 - Swap bus image if wheel is used over the bus image. 
busimage.addEventListener('wheel', (event) =>  {
  busimage.setAttribute('src', 'img/beachbus.jpeg')
});

//Event 4
//Adds a message to the console once the page loads. 
window.addEventListener("load", function(event) {
  console.log("All resources finished loading! Start!");
});

//Event 5
//Changes Nav items to red when focused. 
// Definition and Usage. The focus event occurs when an element gets focus (when selected by a mouse click or by "tab-navigating" to it). The focus() method triggers the focus event, or attaches a function to run when a focus event occurs. Tip: This method is often used together with the blur() method.

//Currently just does the first one, need to update using forEach.
navlinks.addEventListener("focus", function(event) {
  navlinks.style.color = 'red';
  event.preventDefault();
});

//Event 6
//Logs the window size every time it is re-sized. 
window.addEventListener("resize", function(event) {
  var w = window.outerWidth;
  var h = window.outerHeight;
  console.log(`The window is ${w} by ${h}`);
});

//Event 7
//Changes intro section background to lightblue on scroll 
window.addEventListener("scroll", function(event) {
  event.stopPropagation();
  intro.style.background = 'lightblue';
});

//Event 8
//Paragraph disappears on select. DOESN'T WORK YET
window.addEventListener("select", function(event) {
  text.display = 'none';
});

//Event 9
//Adds a red border if bus image is double clicked. 
busimage.addEventListener("dblclick", function(event) {
  busimage.style.border = 'solid red';
});

//Event 9
//Bus image border is solid blue if fullscreen 
document.addEventListener("fullscreenchange", function(event) {
  busimage.style.border = 'solid blue';
});

//Event 10
//Bus image goes away i 
intro.addEventListener("ontouchstart", function(event) {
  busimage.style.border = 'solid blue';
});

//Event 11
//Changes footer section background to lightred on scroll. Not propagated from earlier. 
document.addEventListener("scroll", function(event) {
  intro.style.background = 'lightred';
});


