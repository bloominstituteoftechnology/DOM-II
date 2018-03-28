const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

// Rockets

let order = 0;
const go = () => {
    order: (0);
    order--;
    event.target.style.order = order.toString();
}

red.addEventListener('click', go);
blue.addEventListener('click', go);
green.addEventListener('click', go);
pink.addEventListener('click', go);
gray.addEventListener('click', go);

