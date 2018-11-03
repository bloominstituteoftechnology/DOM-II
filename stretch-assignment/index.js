const blocks = document.querySelectorAll('.block');

// Variable to keep track of order, so block goes to top
let order = 0;

blocks.forEach(block => {
  // Setting the click event listener on each block
  block.addEventListener('click', function(event) {
    order --;
    // Make block rise to top
    event.target.style.order = order;
  });
});