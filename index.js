// Refernces to DOM elements
const blockDiv = document.querySelector('.blocks');
const blockList = document.querySelectorAll('.block');

// Give event listener to all elements in blockList
for (let i = 0; i < Array.from(blockList).length; i++) {
  blockList[i].addEventListener('click', function() {
    this.remove();
    blockDiv.prepend(this);
  });
}