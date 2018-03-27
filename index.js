// elements in block
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

// rockets
    // When a block is clicked, it should go to the top of the stack
    // holds current value of flex order at the time of a 'click' event
    // let order = 0;
    // event
    // const move = () => {
        // decrement order: (-) orders will move to the top of the main-axis
        // default order is 0 for all blocks
    // 	order--;
    // 	event.target.style.order = order.toString();
    // }

    // event listeners
    // red.addEventListener('click', move);
    // blue.addEventListener('click', move);
    // green.addEventListener('click', move);
    // pink.addEventListener('click', move);
    // gray.addEventListener('click', move);


// travelers


// Move block along cross-axis on click
// red.addEventListener('click', moveRight);
// blue.addEventListener('click', moveRight);
// green.addEventListener('click', moveRight);
// pink.addEventListener('click', moveRight);
// gray.addEventListener('click', moveRight);

// red.addEventListener('mouseup', moveBack);
// blue.addEventListener('mouseup', moveBack);
// green.addEventListener('mouseup', moveBack);
// pink.addEventListener('mouseup', moveBack);
// gray.addEventListener('mouseup', moveBack);

// Counter variable

let marginPX = 0;
const block = getElementsByClass('block');
block.stopPropogation();
block.addEventListener('click', moveRight);
block.addEventListener('mouseup', moveBack);

const moveRight = (event) => {
    if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }


const moveBack = (event) => {

