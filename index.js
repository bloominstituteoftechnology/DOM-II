let red = document.getElementsByClassName('block--red')[0];
let blue = document.getElementsByClassName('block--blue')[0];
let green = document.getElementsByClassName('block--green')[0];
let pink = document.getElementsByClassName('block--pink')[0];
let gray = document.getElementsByClassName('block--gray')[0];

// let count = 0;

// function bubble(element) {
//     element.target.style.order = count;
//     count--;
// }

// red.addEventListener('click', bubble);
// blue.addEventListener('click', bubble);
// green.addEventListener('click', bubble);
// pink.addEventListener('click', bubble);
// gray.addEventListener('click', bubble);


function travel(element) {
    element.target.style.marginLeft = '50px';
}

function travelLeft(element) {
    element.target.style.marginLeft = '10px';
}

red.addEventListener('mousedown', travel);
red.addEventListener('mouseup', travelLeft);

blue.addEventListener('mousedown', travel);
blue.addEventListener('mouseup', travelLeft);

green.addEventListener('mousedown', travel);
green.addEventListener('mouseup', travelLeft);

pink.addEventListener('mousedown', travel);
pink.addEventListener('mouseup', travelLeft);

gray.addEventListener('mousedown', travel);
gray.addEventListener('mouseup', travelLeft);
