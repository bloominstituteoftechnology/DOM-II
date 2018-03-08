const blocks = document.querySelectorAll(".block");
console.log(blocks);
let orderValue = -1;

function moveToTop(event) {
  console.log(event.target.classList[1]);
  event.target.style.order = orderValue;
  orderValue -= 1;
}

blocks.forEach((block) => {
  console.log(block);
  block.addEventListener('click', moveToTop);
});
