const blocks = document.querySelector('.blocks');
const allBlocks = document.querySelectorAll('.block');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');
const body = document.querySelector('#container');
// all the varialbes i could possibly need and more

let order = -1;

const first = (e) => {
    const child = e.target;
    child.style.order = order;
    order--;
};
// the function used to make a  box move to the top

for (i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('click', first);
    blocks.children[i].style.transition = '.5s';
}

// // -------- Part 1 is above ---------
// // -------- Part 2 is below ---------

let interval;
let lastTarg;

const begin = (e) => {
    lastTarg = e;
    clearInterval(interval);
    interval = window.setInterval(increment, 150, e);
}

const specEnd = lastTarg => {
    clearInterval(interval);
    interval = window.setInterval(decrement, 150, lastTarg);
}

// const end = (e) => {
//     clearInterval(interval);
//     interval = window.setInterval(decrement, 75, e);
// }

const increment = (targ) => {
    let targLength = targ.target.style.marginLeft.length;
    let value;

    if (targLength > 0) {
        let value = parseInt(targ.target.style.marginLeft);
        if (value <300) value += 20;
        targ.target.style.marginLeft = String(value) + 'px';
    } else targ.target.style.marginLeft = '10px';
}

const decrement = (targ) => {
    let value = parseInt(targ.target.style.marginLeft);
    value -= 20;
    if (value < 10) {
        targ.target.style.marginLeft = '';
        clearInterval(interval);
        return;
    }
    targ.target.style.marginLeft = (String(value) + "px");
}

for (i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('mousedown', begin);
}

body.addEventListener('mouseup', specEnd);