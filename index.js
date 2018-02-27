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

blue.addEventListener('click', (event) => {
    blocksDiv.insertBefore(blue, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

green.addEventListener('click', (event) => {
    blocksDiv.insertBefore(green, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

pink.addEventListener('click', (event) => {
    blocksDiv.insertBefore(pink, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});

gray.addEventListener('click', (event) => {
    blocksDiv.insertBefore(gray, firstBlock);
    firstBlock = document.getElementsByClassName('block')[0];
});