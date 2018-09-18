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
});