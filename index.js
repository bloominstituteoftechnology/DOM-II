let a = document.getElementsByClassName('block--red')[0];
let b = document.getElementsByClassName('block--blue')[0];
let c = document.getElementsByClassName('block--green')[0];
let d = document.getElementsByClassName('block--pink')[0];
let e = document.getElementsByClassName('block--gray')[0];

let bA = [a, b, c, d, e];
let count = -1;

function rocket(e) {
    e.target.style.order = count;
    count--;
}

function down(e) {
    e.target.style.transitionProperty = 'margin-left';
    e.target.style.marginLeft = '900px';
    e.target.style.transitionDuration = '8s';
}

function up(e) {
    e.target.style.marginLeft = '10px';
}

bA.forEach((item) => item.addEventListener('click', rocket));

bA.forEach((item) => item.addEventListener('mousedown', down));

bA.forEach((item) => item.addEventListener('mouseup', up));
