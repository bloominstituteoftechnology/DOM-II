// ________ INSTRUCTIONS ________
// rockets:
// When a block is clicked, it should go to the top of the stack
// travelers:
// While a mouse is clicked down on a box, it should move to the right
// When the mouse button is released, it should travel back to its original position
// A mouse down that occurs during a transition back to the original position
// should send it traveling to the right agian from its current position

// Events
// The Event Object
// Event Handlers
// click
// mousedown
// mouseup
// scroll
// keydown
// window.setInterval


// ________ VARIABLES ________
const blockParent = document.querySelector('.blocks');
const blockAll = document.querySelector('.block');
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');
const body = document.querySelector('body');
let redPos = 0;
let bluePos = 0;
let greenPos = 0;
let pinkPos = 0;
let grayPos = 0;

/*
**********************************************************************************
YOU HAVE TO COMMENT OUT EITHER ROCKETS ||OR|| TRAVELLERS SECTION FOR CODE TO WORK.
**********************************************************************************
*/

// // ________ ROCKETS ________
// const rocket = (event) => {
//     event.stopPropagation();
//     event.target.style.order = 0;
//     if (event.target === redBlock){
//         blueBlock.style.order +=1;
//         greenBlock.style.order +=1;
//         pinkBlock.style.order +=1;
//         grayBlock.style.order +=1;
//     }
//     if (event.target === blueBlock){
//         redBlock.style.order +=1;
//         greenBlock.style.order +=1;
//         pinkBlock.style.order +=1;
//         grayBlock.style.order +=1;
//     }
//     if (event.target === greenBlock){
//         redBlock.style.order +=1;
//         blueBlock.style.order +=1;
//         pinkBlock.style.order +=1;
//         grayBlock.style.order +=1;
//     }
//     if (event.target === pinkBlock){
//         redBlock.style.order +=1;
//         blueBlock.style.order +=1;
//         greenBlock.style.order +=1;
//         grayBlock.style.order +=1;
//     }
//     if (event.target === grayBlock){
//         redBlock.style.order +=1;
//         blueBlock.style.order +=1;
//         greenBlock.style.order +=1;
//         pinkBlock.style.order +=1;
//     }
// }

// redBlock.addEventListener('click', rocket);
// blueBlock.addEventListener('click', rocket);
// greenBlock.addEventListener('click', rocket);
// pinkBlock.addEventListener('click', rocket);
// grayBlock.addEventListener('click', rocket);



// ________ TRAVELLERS ________

// Block Setup
redBlock.style.position = 'absolute';
blueBlock.style.position = 'absolute';
greenBlock.style.position = 'absolute';
pinkBlock.style.position = 'absolute';
grayBlock.style.position = 'absolute';
redBlock.style.top = '8px';
blueBlock.style.top = '128px';
greenBlock.style.top = '248px';
pinkBlock.style.top = '368px';
grayBlock.style.top = '488px';

// Code
const travel = () => {
    if (event.target === redBlock){
        redBlock.style.left =  (redPos +=10) + 'px';
    }
    if (event.target === blueBlock){
        event.target.style.left =  (bluePos +=10) + 'px';
    }
    if (event.target === greenBlock){
        event.target.style.left =  (greenPos +=10) + 'px';
    }
    if (event.target === pinkBlock){
        event.target.style.left =  (pinkPos +=10) + 'px';
    }
    if (event.target === grayBlock){
        event.target.style.left =  (grayPos +=10) + 'px';
    }
}

redBlock.addEventListener('click', travel);
blueBlock.addEventListener('click', travel);
greenBlock.addEventListener('click', travel);
pinkBlock.addEventListener('click', travel);
grayBlock.addEventListener('click', travel);