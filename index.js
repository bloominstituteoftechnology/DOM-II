const blocks = document.querySelector('.blocks');
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

// ROCKETS ASSIGNMENT BELOW

let position = 0;// may require double-click/ x2 double-clicks
const moveToTop = (event) => {
    event.target.style.order = position;
    position--;
  };

  blueBlock.addEventListener('click', moveToTop);
  greenBlock.addEventListener('click', moveToTop);
  pinkBlock.addEventListener('click', moveToTop);
  grayBlock.addEventListener('click', moveToTop);
  redBlock.addEventListener('click', moveToTop);

// TRAVELERS ASSIGNMENT BELOW

const moveToRight = (event) => {
    event.stopPropagation();
    event.target.style.marginLeft = '1300px';
}


const moveToRight = (event) => {
    let margin = 0;
    const increment = () => {
        margin++;
        event.target.style.marginLeft = `${margin}px`
    }
    const incrementMl = setInterval(increment, 5);
}


redBlock.addEventListener('mousedown', moveToRight);
blueBlock.addEventListener('mousedown', moveToRight);
greenBlock.addEventListener('mousedown', moveToRight);
pinkBlock.addEventListener('mousedown', moveToRight);
grayBlock.addEventListener('mousedown', moveToRight);

redBlock.addEventListener('mouseup', moveBack);
blueBlock.addEventListener('mouseup', moveBack);
greenBlock.addEventListener('mouseup', moveBack);
pinkBlock.addEventListener('mouseup', moveBack);
grayBlock.addEventListener('mouseup', moveBack);


