let blocksDiv = document.querySelector('.blocks');

const red = document.getElementsByClassName('block--red')[0];
const blue = document.getElementsByClassName('block--blue')[0];
const green = document.getElementsByClassName('block--green')[0];
const pink = document.getElementsByClassName('block--pink')[0];
const gray = document.getElementsByClassName('block--gray')[0];

let firstBlock = document.getElementsByClassName('block')[0];

red.addEventListener('click', (event) => {
    blocksDiv.insertBefore(red, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

red.addEventListener('mousedown', (event) => {
    red.style.margin = '0 0 10px 100px';
});

window.addEventListener('mouseup', (event) => {
    red.style.margin = '10px';
});

blue.addEventListener('click', (event) => {
    blocksDiv.insertBefore(blue, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

function blueUp() {
    blocksDiv.insertBefore(blue, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
}

blue.addEventListener('mousedown', (event) => {
    blue.style.margin = '0 0 10px 100px';
});

window.addEventListener('mouseup', (event) => {
    blue.style.margin = '10px';
    blueUp();
});

green.addEventListener('click', (event) => {
    blocksDiv.insertBefore(green, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

green.addEventListener('mousedown', (event) => {
    green.style.margin = '0 0 10px 100px';
});

window.addEventListener('mouseup', (event) => {
    green.style.margin = '10px';
});

pink.addEventListener('click', (event) => {
    blocksDiv.insertBefore(pink, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

pink.addEventListener('mousedown', (event) => {
    pink.style.margin = '0 0 10px 100px';
});

window.addEventListener('mouseup', (event) => {
    pink.style.margin = '10px';
});

gray.addEventListener('click', (event) => {
    blocksDiv.insertBefore(gray, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

gray.addEventListener('mousedown', (event) => {
    gray.style.margin = '0 0 10px 100px';
});

window.addEventListener('mouseup', (event) => {
    gray.style.margin = '10px';
});