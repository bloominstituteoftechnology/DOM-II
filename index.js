// Refernces to DOM elements
const blockDiv = document.querySelector('.blocks');
const blockList = document.querySelectorAll('.block');
let lastBlockClicked;

// Give event listener to all elements in blockList
for (let i = 0; i < blockList.length; i++) {
  // Move to top of stack on click
  blockList[i].addEventListener('click', function() {
    this.remove();
    blockDiv.prepend(this);
  });
  // Move to right on mouse down
  blockList[i].addEventListener('mousedown', function() {
    this.classList.add('move-right');
    lastBlockClicked = this;
  });
}
