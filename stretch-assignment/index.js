//Selecting blocks
let blocks = document.querySelectorAll('.block');

//Making block that's clicked go to the top of column
blocks.forEach((block) => block.addEventListener('click', (event) => {
    blocks.forEach((block) => block.style.order = 0);
    event.target.style.order = -1;
}));