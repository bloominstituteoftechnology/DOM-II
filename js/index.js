// Your code goes here
const funBus = document.querySelector('.logo-heading');
// console.log(funBus);




// Returns a function that can be used in an event handler to allow the mousewheel to cycle through color for the target element
const colorSpinner = () => {
  let counter = 0.50;
  const color = ['salmon', 'dodgerblue', 'black', 'heatherpurple', 'tomato', 'seagreen', 'chocolate', 'deeppink', 'yellow', 'crimson']
  return function (event) {
    let change = event.deltaY; //records mouse wheel movement
    if (change < 0) {
         counter += 0.05;
      if(counter >= 1) counter = 0;
    }  // mousewheel movement increases or decreases counter variable
    if (change > 0) {
      counter -= 0.05;
      if(counter <= 0) counter = 0.95;
    }
    // console.log(counter);
    let colorIndex = Math.floor(counter * 10); //takes counter value, and provides
    // console.log(colorIndex);
    event.target.style.color = color[colorIndex];
    // console.log(event)
  }
}

// The logo heading will cycle through colors when the mouse wheel is spun while pointing at the element
const paraSpinner = colorSpinner();
funBus.addEventListener('wheel', paraSpinner);



// Footer will change colors and then back again on a mouse click
const footer = document.querySelector('footer');
footer.addEventListener('click', function(event) {
  event.target.classList.toggle('background-change');
})

// Causes popup window to appear when anywhere on the page is double-clicked on
const page = document.querySelector('body');
page.addEventListener('dblclick', function() {
  window.alert("What are you poking at?");

})

// Background color of parent div will change randomly with each click of any "Sign Me Up" button
const destinationButtons = document.querySelectorAll('.btn');
destinationButtons.forEach(item => item.addEventListener('click', function(event) {
  event.target.parentNode.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}))

// Images will fade when moused over
const pics = document.querySelectorAll('img');
pics.forEach(item => item.addEventListener('mouseover', function(event) {
  event.target.classList.toggle('fade');
  document.querySelector('.main-navigation').style.zIndex = 10;
  // console.log(event.target);
}))

// Makes links larger when clicked
const links = document.querySelectorAll('a');
links.forEach(item=> item.addEventListener('click', event => {
  event.preventDefault();
  event.target.style.fontSize = '200%';
}));

// Changes paragraph colors when mouse is over, and changes back when mouse leaves
const paragraph = document.querySelectorAll('p');
paragraph.forEach(item => item.addEventListener('mouseenter', event => {
  event.target.style.color = '#f70496';
}))

paragraph.forEach(item => item.addEventListener('mouseleave', event => {
  event.target.removeAttribute('style');
}))

// Double clicking on h2 elements, window alert displays.  Stop propogation stops overall document dblclick event from firing
const divHeaders = document.querySelectorAll('h2');
function headAlert(event) {
  window.alert(`${event.target.textContent}`);
  event.stopPropagation();
}

divHeaders.forEach(item => item.addEventListener('dblclick', headAlert));

// Clicking on the nav header logo will change the page's background color to the current color of the nav header logo

funBus.addEventListener('click', function(item) {
  event.stopPropagation();
  if(!event.target.style.color) page.style.backgroundColor = 'black';
  else page.style.backgroundColor = event.target.style.color;
})

// Changes font of links to monospace when nav bar element is clicked on
const navBar = document.querySelector('.nav-container');
navBar.addEventListener('click', function(event) {
  links.forEach(item => item.style.fontFamily = 'monospace')
})

// page.addEventListener('click', function(event) {
//   console.log(event.target);
// })
