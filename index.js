const blocks = document.querySelector('.blocks');
const allBlocks = document.querySelectorAll('.block');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');
// all the varialbes i could possibly need and more

const first = (e) => {
    event.stopPropagation();
    reset();
    e.target.style.order -= 1;
}
// the function used to make a  box move to the top

const reset = () => {
    for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.order = 1;
    }
}
//the function that makes all the other boxes go back to original order

red.addEventListener('click', first);
blue.addEventListener('click', first);
green.addEventListener('click', first);
pink.addEventListener('click', first);
gray.addEventListener('click', first);