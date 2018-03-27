const blocks = document.querySelector('.blocks');
const allBlocks = document.querySelectorAll('.block');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

const first = (e) => {
    event.stopPropagation();
    reduce();
    e.target.style.order -= 1;
}

const reduce = () => {
    for (let i = 0; i < allBlocks.length; i++) {
        allBlocks[i].style.order = 1;
    }
    // red.style.order += 1;
    // blue.style.order += 1;
    // green.style.order += 1;
    // pink.style.order += 1;
    // gray.style.order += 1;
}

red.addEventListener('click', first);
blue.addEventListener('click', first);
green.addEventListener('click', first);
pink.addEventListener('click', first);
gray.addEventListener('click', first);