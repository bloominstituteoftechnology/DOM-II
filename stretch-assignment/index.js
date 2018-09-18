let blocks = document.querySelectorAll('.block');

blocks.forEach(block => block.addEventListener('click', () => {
  block.style.order -= 1;
}))
blocks.forEach(block => block.addEventListener('mousedown', () => {
  let x = 0;
  let rocket = setInterval(() => {
    x >= 800 ? x = 800 : x += 10;
    block.style.transform = `translateX(${x}px)`;
  }, 100);
}))
blocks.forEach(block => block.addEventListener('mouseup', () => {
  clearInterval(rocket);
}))