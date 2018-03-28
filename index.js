const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

// -------------Rockets commit-------------
/*
let count = 0;

const blockTop = (event) => {
    event.target.style.order = count--;
}

blueBlock.addEventListener('click', blockTop);
redBlock.addEventListener('click', blockTop);
greenBlock.addEventListener('click', blockTop);
pinkBlock.addEventListener('click', blockTop);
grayBlock.addEventListener('click', blockTop);
*/

// ----------Travelers commit-----------

// I tried to make the code more compact and loop through however it broke each time. I left the attempts commented

// const blocks = document.querySelector('.blocks').childNodes; //tried a few different ways to select them here

const goRight = (event) => {
    event.target.classList.add("go-right");
    event.target.classList.remove("go-left");
}

const goLeft = (event) => {
    event.target.classList.add("go-left");
    event.target.classList.remove("go-right");
}

// blocks.forEach(() => {addEventListener('mousedown', goRight)});
blueBlock.addEventListener('mousedown', goRight);
redBlock.addEventListener('mousedown', goRight);
greenBlock.addEventListener('mousedown', goRight);
pinkBlock.addEventListener('mousedown', goRight);
grayBlock.addEventListener('mousedown', goRight);

// blocks.forEach(() => {addEventListener('mouseup', goLeft)});
blueBlock.addEventListener('mouseup', goLeft);
redBlock.addEventListener('mouseup', goLeft);
greenBlock.addEventListener('mouseup', goLeft);
pinkBlock.addEventListener('mouseup', goLeft);
grayBlock.addEventListener('mouseup', goLeft);

// blocks.forEach(() => {addEventListener('mouseleave', goLeft)});
blueBlock.addEventListener('mouseleave', goLeft);
redBlock.addEventListener('mouseleave', goLeft);
greenBlock.addEventListener('mouseleave', goLeft);
pinkBlock.addEventListener('mouseleave', goLeft);
grayBlock.addEventListener('mouseleave', goLeft);