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
  busimage.setAttribute('src', 'beachbus.jpg')
});




// homeTag.addEventListener('click', (event) => {
//   event.preventDefault();
// });
// myBtn.addEventListener('click', (event) => {


//Step 3: Do something!
//   TweenMax.to(".main-nav", 10, {
//     opacity: 0
//   });

// event.target is whatever we are interacting with
//console.log(event.target);

// event.currentTarget is whatever we assigned the event listener to
//console.log(event.currentTarget);
  
//event.currentTarget.style.color = "red";
//myParagraph.classList.toggle('change');