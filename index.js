const blocks = document.querySelector('.blocks');
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

let position = 0; // may require double-click/ x2 double-clicks
const moveToTop = (event) => {
    event.target.style.order = position;
    position--;
  };

  blueBlock.addEventListener('click', moveToTop);
  greenBlock.addEventListener('click', moveToTop);
  pinkBlock.addEventListener('click', moveToTop);
  grayBlock.addEventListener('click', moveToTop);
  redBlock.addEventListener('click', moveToTop);