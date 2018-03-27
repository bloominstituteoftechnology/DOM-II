let lowest = 0;
const block = document.querySelectorAll('.block');

const moveToTop = (event) => {
  event.target.style.order = (lowest - 1);
  lowest -= 1;
}

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener('click', moveToTop);
}