// const red = document.querySelector('.block--red');
// const blue = document.querySelector('.block--blue');
// const green = document.querySelector('.block--green');
// const pink = document.querySelector('.block--pink');
// const gray = document.querySelector('.block--gray');

const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
   block.addEventListener('click', goToTop); 
   block.addEventListener('mousedown', goRight); 
});

function goToTop(event) {
  blocks.forEach(block => {
    if (block === event.target) {
      block.style.order = -1
    } else {
      block.style.order = 0;
    }
  });
}

function goRight(event) {
  let marginLeft = event.target.style.marginLeft;

  let intervalId = setInterval(() => {
    if (marginLeft === '') {
      marginLeft = 15;
    } else {
      marginLeft = parseInt(event.target.style.marginLeft, 10) + 5; 
    }
    event.target.style.marginLeft = marginLeft + 'px';

    if (marginLeft > 400) clearInterval(intervalId);
  }); 
}

