// Rockets commit
const redBlock = document.getElementsByClassName('block--red');
const blueBlock = document.getElementsByClassName('block--blue');
const greenBlock = document.getElementsByClassName('block--green');
const pinkBlock = document.getElementsByClassName('block--pink');
const grayBlock = document.getElementsByClassName('block--gray');
let count = 0;

const blockTop = (event) => {
    event.target.style.order = count--;
}

blueBlock[0].addEventListener('click', blockTop);
redBlock[0].addEventListener('click', blockTop);
greenBlock[0].addEventListener('click', blockTop);
pinkBlock[0].addEventListener('click', blockTop);
grayBlock[0].addEventListener('click', blockTop);