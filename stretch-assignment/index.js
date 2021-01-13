//Selecting blocks
let blocks = document.querySelectorAll('.block');

blocks.forEach((block) => block.style.order = 0);

//Making block that's clicked go to the top of column
blocks.forEach((block) => block.addEventListener('click', (event) => {
    blocks.forEach((block2) => block2.style.order = Number(window.getComputedStyle(block2).getPropertyValue('order')) + 1);
    event.target.style.order = 0;
}));

//Make blocks move to right while click is held down on them
blocks.forEach((block) => block.addEventListener('click', (event) => {
    moveRight(event.target);
}));

//const moveRight = (element) => {
    //element.style.backgroundColor = 'yellow';};