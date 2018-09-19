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
    moveRight = setInterval(blockInterval, 1);
  });

  // mouseup on window
  window.addEventListener('mouseup', () => {
    clearInterval(moveRight);
    TweenMax.to(block, 2, {
      x: 0,
      ease: Elastic.easeOut
    });
  });

  // callback for setInterval()
  function blockInterval() {
    let counter = Math.floor((Date.now() - initTime) / 10);
    // block.style.transform = `translateX(${counter}px)`;
    TweenMax.to(block, 0.01, {
      x: counter,
      ease: Sine.easeOut
    });
  }
});
