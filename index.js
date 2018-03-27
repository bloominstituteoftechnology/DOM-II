// rockets code

// let lowest = 0;

// const blocks = document.querySelector('.blocks');

// const rocket = (event) => {
//     lowest--;
//     event.target.style.order = lowest;
// }

// blocks.addEventListener('click', rocket);





// traveller code

const block = document.querySelectorAll('.block');
// let offset = document.querySelectorAll('.block').style.width;

let moveBy = window.innerWidth - 100;

const moveRight = (event) => {
    event.target.style.transform = 'translate('+moveBy+'%)';
}

const moveLeft = (event) => {
    event.target.style.transform = 'translate(0px)';
}

for (let i = 0; i < block.length; i++) {
    block[i].style.transitionDuration = '6s';
    block[i].addEventListener('mousedown', moveRight);
    block[i].addEventListener('mouseenter', moveRight);
    block[i].addEventListener('mouseenter', moveLeft);
    block[i].addEventListener('mouseleave', moveLeft);
    block[i].addEventListener('mouseup', moveLeft);
}