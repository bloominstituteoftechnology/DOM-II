const blocks = document.querySelectorAll('.block');
const container = document.querySelector('.blocks');

container.addEventListener('click', e => {
  let topBlock = e.target;
  container.prepend(topBlock);
});
