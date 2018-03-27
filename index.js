const redblock = document.querySelector('.block--red');
const blueblock = document.querySelector('.block--blue');
const greenblock = document.querySelector('.block--green');
const pinkblock = document.querySelector('.block--pink');
const grayblock = document.querySelector('.block--gray');
const parent = document.querySelector('.blocks');



let lowest = 0;

const rocket = (event) => {
    lowest = lowest - 1;
    event.target.style.order = lowest;

}
parent.addEventListener('click', rocket);

// greenblock.addEventListener('click', rocket);
// blueblock.addEventListener('click', rocket);
// redblock.addEventListener('click', rocket);
// pinkblock.addEventListener('click', rocket)
// grayblock.addEventListener('click', rocket);
