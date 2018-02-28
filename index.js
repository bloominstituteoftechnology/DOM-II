let red = document.getElementsByClassName('block--red')[0];
let blue = document.getElementsByClassName('block--blue')[0];
let green = document.getElementsByClassName('block--green')[0];
let pink = document.getElementsByClassName('block--pink')[0];
let gray = document.getElementsByClassName('block--gray')[0];

let count = -1;

function bubble(element) {
    element.target.style.order = count;
    count -= 1;
}

red.addEventListener('click', bubble);
blue.addEventListener('click', bubble);
green.addEventListener('click', bubble);
pink.addEventListener('click', bubble);
gray.addEventListener('click', bubble);
