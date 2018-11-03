//Rockets move to top

//array like object containing all blocks
const blockList = document.querySelectorAll('.block');

//set event listeners to all blocks
blockList.forEach(block => block.addEventListener('click', function(event) {
    event.stopPropagation();
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

//Travelers move to right

const colorArray = ['red', 'blue', 'green', 'pink', 'gray'];
const travelers = [];
for(let i = 0; i < colorArray.length; i++) {
  travelers.push(document.querySelector(`.block--${colorArray[i]}`));
}


travelers.forEach(traveler => traveler.addEventListener('mousedown', function(event) {
  const posX = 1000;
  TweenMax.to(event.target, 1, {x: posX});
}));
