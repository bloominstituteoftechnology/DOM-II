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
let interval;

const begin = (e) => {
    e.stopPropagation();
    clearInterval(interval);
    interval = window.setInterval(moveRight, 10, e);
}

const end = (e) => {
    e.stopPropagation();
    clearInterval(interval);
    while (e.target.style.marginLeft !== '') {
        interval = window.setInterval(goBack, 10, e);
    }
    if (e.target.style.marginLeft === '') clearInterval(interval);
}

const moveRight = (e) => {
    e.target.style.marginLeft = increment(e.target.style.marginLeft);
};

const goBack = (e) => {
    e.target.style.marginLeft = decrement(e.target.style.marginLeft);
};

const increment = (string) => {
    let value = parseInt(string);
    if (value === NaN) value = 0;
    value += 10;
    return (String(value) + "px");
}

const decrement = (string) => {
    let value = parseInt(string);
    value -= 10;
    if (value === 0) return ''
    return (String(value) + "px");
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