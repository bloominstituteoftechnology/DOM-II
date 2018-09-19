const blocksContainer = document.querySelector('.blocks');

const blocksList = document.querySelectorAll('.block');
let blocksArr = Array.from(blocksList);

function updateDOMOrder() {
  blocksArr.forEach((block, index) => {
    block.style.order = index;
  });
}

updateDOMOrder();


blocksContainer.addEventListener('click', (event) => {
  let targetBlock = event.target;
  let filteredArr = blocksArr.filter((block) => {
    return targetBlock !== block;
  });
  filteredArr.unshift(targetBlock);
  blocksArr = filteredArr;
  updateDOMOrder();
});

blocksContainer.addEventListener('mousedown', (event) => {
    let targetBlock = event.target;
    window.setInterval(() => {
        parseInt(targetBlock.style.left, 10||0);
        targetBlock.style.left = `${currentX + SPEED}px`;
    }, 100);
});