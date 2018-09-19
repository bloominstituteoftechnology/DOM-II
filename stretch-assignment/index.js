const container = document.querySelector('.blocks');

// Uncomment for rockets

// container.addEventListener('click', e => {
//   let topBlock = e.target;
//   container.prepend(topBlock);
// });

const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
  // mousedown on block
  block.style.cursor = 'pointer';
  let initTime;
  let moveRight;
  block.addEventListener('mousedown', () => {
    initTime = Date.now();
    moveRight = setInterval(blockInterval, 10);
  });

  // mouseup on window
  window.addEventListener('mouseup', () => {
    clearInterval(moveRight);
  });

  // callback for setInterval()
  function blockInterval() {
    let counter = Math.floor((Date.now() - initTime) / 100);
    console.log(counter);
    block.style.transform = `translateX(${counter}px)`;
  }
});
