const theBlocks = document.querySelectorAll('.block');
const blockContainer = document.querySelector('.blocks');

blockContainer.addEventListener('click', e => {
  theBlocks.forEach( item => {
    item.style.order = 1;
  });

  e.target.style.order = 0;
});
