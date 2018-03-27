const blocks = document.querySelector('.blocks');
const allBlocks = document.querySelectorAll('.block');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');
// all the varialbes i could possibly need and more

// const first = (e) => {
//     e.stopPropagation();
//     reset();
//     e.target.style.order -= 1;
// };
// // the function used to make a  box move to the top

// const reset = () => {
//     for (let i = 0; i < allBlocks.length; i++) {
//         allBlocks[i].style.order = 1;
//     }
// };
// //the function that makes all the other boxes go back to original order

// red.addEventListener('click', first);
// blue.addEventListener('click', first);
// green.addEventListener('click', first);
// pink.addEventListener('click', first);
// gray.addEventListener('click', first);

// // -------- Part 1 is above ---------
// // -------- Part 2 is below ---------
let interval;

const begin = (e) => {
    clearInterval(interval);
    interval = window.setInterval(increment, 75, e);
}

const end = (e) => {
    clearInterval(interval);
    interval = window.setInterval(decrement, 75, e);
}

const increment = (targ) => {
    let targLength = targ.target.style.marginLeft.length;
    let value;

    if (targLength > 0) {
        let value = parseInt(targ.target.style.marginLeft);
        if (value <300) value += 10;
        targ.target.style.marginLeft = String(value) + 'px';
    } else targ.target.style.marginLeft = '10px';
}

const decrement = (targ) => {
    let value = parseInt(targ.target.style.marginLeft);
    value -= 10;
    if (value < 10) {
        targ.target.style.marginLeft = '';
        clearInterval(interval);
        return;
    }
    targ.target.style.marginLeft = (String(value) + "px");
}

red.addEventListener('mousedown', begin);
blue.addEventListener('mousedown', begin);
green.addEventListener('mousedown', begin);
pink.addEventListener('mousedown', begin);
gray.addEventListener('mousedown', begin);

red.addEventListener('mouseup', end);
blue.addEventListener('mouseup', end);
green.addEventListener('mouseup', end);
pink.addEventListener('mouseup', end);
gray.addEventListener('mouseup', end);

blocks.addEventListener('mouseup', clearInterval(interval));