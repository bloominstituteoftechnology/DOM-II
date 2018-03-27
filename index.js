const blocks = document.querySelector('.blocks');
const redBlock = document.querySelector('.block--red');
const blueBlock = document.querySelector('.block--blue');
const greenBlock = document.querySelector('.block--green');
const pinkBlock = document.querySelector('.block--pink');
const grayBlock = document.querySelector('.block--gray');

const makeRed = (event) => {
    event.target.style.backgroundColor = 'red';
  }

  const swapColor = (event) => {
      event.target.style.backgroundColor = '';
  }

  blueBlock.addEventListener('click', makeRed);
  greenBlock.addEventListener('click', makeRed);
  pinkBlock.addEventListener('click', makeRed);
  grayBlock.addEventListener('click', makeRed);