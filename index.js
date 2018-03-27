const changecolor = (event) => {
    event.target.style.backgroundColor = 'pink';
}

let lowest = 0;

const blocks = document.querySelector('.blocks');

const rocket = (event) => {
    lowest--;
    event.target.style.order = lowest;
}

blocks.addEventListener('click', rocket);