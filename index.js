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
 

const moveRigth = (event) => {
    event.target.style.marginLeft = "50px";
}

greenblock.addEventListener('mousedown', moveRigth);
blueblock.addEventListener('mousedown', moveRigth);
redblock.addEventListener('mousedown', moveRigth);
pinkblock.addEventListener('mousedown', moveRigth);
grayblock.addEventListener('mousedown', moveRigth);

const moveLeft = (event) => {
    event.target.style.marginLeft = '10px';
}

greenblock.addEventListener('mouseup', moveLeft);
blueblock.addEventListener('mouseup', moveLeft);
redblock.addEventListener('mouseup', moveLeft);
pinkblock.addEventListener('mouseup', moveLeft);
grayblock.addEventListener('mouseup', moveLeft);

