//array like object containing all blocks
const blockList = document.querySelectorAll('.block');

//set event listeners to all blocks
blockList.forEach(block => block.addEventListener('click', function(event) {
    //set targets order to current - 5
    current = event.target.style.order;
    event.target.style.order = (current) - 5;

    //reset all other blocks to order 0
    for(let i = 0; i < blockList.length; i++) {
      if(blockList[i].classList[1] !== event.target.classList[1]) {
        blockList[i].style.order = 0;
      }
    }
}));
