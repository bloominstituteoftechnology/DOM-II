// const red = document.querySelector('.block--red');
// const blue = document.querySelector('.block--blue');
// const green = document.querySelector('.block--green');
// const pink = document.querySelector('.block--pink');
// const gray = document.querySelector('.block--gray');

const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
   block.addEventListener('click', goToTop); 
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


