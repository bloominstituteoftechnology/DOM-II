const rockets = (event) => {
  let lowestOrder = blocks
    .map((block) => parseInt(block.style.order)) // Make an array consisting of each block's order value
    .reduce((acc, current) => current < acc ? current : acc); // Reduce to the lowest value
  event.target.style.order = lowestOrder - 1; // One lower puts this block on top
  blocks.forEach((block) => block.style.order = parseInt(block.style.order) + 1); // Increment all orders to reduce chance of overflow
};

const traveler = (event) => {
  event.target.style.transform = `translateX(${event.clientX + 200}px)`; // Move the block 100px further right
  document.addEventListener('mouseup', untraveler); // Register the event on the document so that it fires regardless of cursor position
};

const untraveler = (event) => {
  let target = blocks.find((block) => block.style.transform != ''); // Find the block that is "in play"
  target.style.transform = '';
};

let blocks = Array.from(document.querySelectorAll('.block'));
blocks.forEach((block) => {
  block.style.transition = "transform 2s"; // Animate our transforms to avoid intervals
  block.style.order = 0; // Initialize order style to prevent errors
  block.addEventListener('click', rockets); // mousedown + mouseup, must be inside box for both to trigger
  block.addEventListener('mousedown', traveler); // triggers immediately 
});
