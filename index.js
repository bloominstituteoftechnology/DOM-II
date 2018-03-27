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

//  RED ELEMENT  //
const redElement = document.querySelector('.block--red');

let ml = 10;
let decID, incID;

const increment = () => {
    ml++;
    redElement.style.marginLeft = ml + 'px';
}

const decrement = () => {
    ml--;
    redElement.style.marginLeft = ml + 'px';
}

redElement.addEventListener('mousedown', () => {
    clearInterval(decID);
    incID = setInterval(increment, 10);
});

redElement.addEventListener('mouseup', () => {
    clearInterval(incID);
    decID = setInterval(decrement, 10);
});

//  BLUE ELEMENT  //
const blueElement = document.querySelector('.block--blue');

let ml1 = 10;
let decID1, incID1;

const increment1 = () => {
    ml1++;
    blueElement.style.marginLeft = ml1 + 'px';
}

const decrement1 = () => {
    ml1--;
    blueElement.style.marginLeft = ml1 + 'px';
}

blueElement.addEventListener('mousedown', () => {
    clearInterval(decID1);
    incID1 = setInterval(increment1, 10);
});

blueElement.addEventListener('mouseup', () => {
    clearInterval(incID1);
    decID1 = setInterval(decrement1, 10);
});

//  GREEN ELEMENT  //
const greenElement = document.querySelector('.block--green');

let ml2 = 10;
let decID2, incID2;

const increment2 = () => {
    ml2++;
    greenElement.style.marginLeft = ml2 + 'px';
}

const decrement2 = () => {
    ml2--;
    greenElement.style.marginLeft = ml2 + 'px';
}

greenElement.addEventListener('mousedown', () => {
    clearInterval(decID2);
    incID2 = setInterval(increment2, 10);
});

greenElement.addEventListener('mouseup', () => {
    clearInterval(incID2);
    decID2 = setInterval(decrement2, 10);
});

//  PINK ELEMENT  //
const pinkElement = document.querySelector('.block--pink');

let ml3 = 10;
let decID3, incID3;

const increment3 = () => {
    ml3++;
    pinkElement.style.marginLeft = ml3 + 'px';
}

const decrement3 = () => {
    ml3++;
    pinkElement.style.marginLeft = ml3 + 'px';
}

pinkElement.addEventListener('mousedown', () => {
    clearInterval(decID3);
    incID3 = setInterval(increment3, 10);
});

pinkElement.addEventListener('mouseup', () => {
    clearInterval(incID3);
    decID3 = setInterval(decrement3, 10);
});