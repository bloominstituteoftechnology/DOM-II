// Refernces to DOM elements
const blockDiv = document.querySelector('.blocks');
const blockList = document.querySelectorAll('.block');
let lastBlockClicked;

// Give event listener to all elements in blockList
for (let i = 0; i < blockList.length; i++) {
  // Move to right on mouse down
  blockList[i].addEventListener('mousedown', function() {
    this.remove();
    blockDiv.prepend(this);
    this.classList.add('move-right');
    lastBlockClicked = this;
  });
}

// Move back to left on mouse up
document.addEventListener('mouseup', function() {
  lastBlockClicked.classList.remove('move-right');
});

console.log();