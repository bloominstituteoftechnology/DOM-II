// Refernces to DOM elements
const body = document.querySelector('body');
const blockDiv = document.querySelector('.blocks');
// blockList will be in flux
let blockList = document.querySelectorAll('.block');
// Mouse events
const mouseDown = new MouseEvent('mousedown');
const mouseUp = new MouseEvent('mouseup');

// Is this page going crazy?
let goCrazy; // Initialize here to reach during seperate event calls
let goingCrazy = false;
// Track last clicked box
let lastBlockClicked;

// Give event listener to all elements in blockList
for (let i = 0; i < blockList.length; i++) {
  blockList[i].addEventListener('mousedown', function() {
    // Moves to top of stack
    this.remove();
    blockDiv.prepend(this);
    // Moves to right
    this.classList.add('move-right');
    lastBlockClicked = this;
  });
}
// Move back to left on mouse up
document.addEventListener('mouseup', () => {
  lastBlockClicked.classList.remove('move-right');
});

// Set up auto click function for interval
clickBottomBlock = () => {
  blockList = document.querySelectorAll('.block');
  blockList[blockList.length - 1].dispatchEvent(mouseDown);
  setTimeout(() => document.dispatchEvent(mouseUp), 20);
}

// When body is clicked GO CRAZY!!!... or not?
body.addEventListener('click', () => {
  if (goingCrazy) { // Chill out
    clearInterval(goCrazy);
    goingCrazy = false;
  } else if (!goingCrazy) { // Go crazy
    goCrazy = setInterval(clickBottomBlock, 200);
    goingCrazy = true;
  }
})