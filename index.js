const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

// Rockets commit
let count = 0;

const blockTop = (event) => {
    event.target.style.order = count--;
}

blueBlock.addEventListener('click', blockTop);
redBlock.addEventListener('click', blockTop);
greenBlock.addEventListener('click', blockTop);
pinkBlock.addEventListener('click', blockTop);
grayBlock.addEventListener('click', blockTop);

/*
// Travelers commit

const goRight = (event) => {

}

blueBlock.addEventListener('mousedown', goRight);
redBlock.addEventListener('mousedown', goRight);
greenBlock.addEventListener('mousedown', goRight);
pinkBlock.addEventListener('mousedown', goRight);
grayBlock.addEventListener('mousedown', goRight);
*/