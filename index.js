/* Rockets */

// const redElement = document.querySelector('.block--red');
// const blueElement = document.querySelector('.block--blue');
// const greenElement = document.querySelector('.block--green');
// const pinkElement = document.querySelector('.block--pink');
// const grayElement = document.querySelector('.block--gray');

// redElement.style.order = '1';
// blueElement.style.order = '2';
// greenElement.style.order = '3';
// pinkElement.style.order = '4';
// grayElement.style.order = '5';

// let highOrder = 6;

// const lower = (event) => {
//     event.target.style.order = highOrder;
//     highOrder++;
// }

// redElement.addEventListener('click', lower);
// blueElement.addEventListener('click', lower);
// greenElement.addEventListener('click', lower);
// pinkElement.addEventListener('click', lower);
// grayElement.addEventListener('click', lower);

// Create left margin on each box
// Increase margin overtime in set interval
// Increase margin on mousedown & return to original position on mouseup

const elements = document.querySelector('.blocks').children;

let ml = 10;
let decID = {};
let incID = {};

const increment = (x) => {
    ml++;
    x.style.marginLeft = ml + 'px';
}

const decrement = (x) => {
    ml--;
    x.style.marginLeft = ml + 'px';
}
Array.from(elements).forEach(x => {
    x.addEventListener('mousedown', () => {
        clearInterval(decID.x);
        incID.x = setInterval(increment(x), 10);
    });
    
    x.addEventListener('mouseup', () => {
        clearInterval(incID.x);
        decID.x = setInterval(decrement(x), 10);
    });
})