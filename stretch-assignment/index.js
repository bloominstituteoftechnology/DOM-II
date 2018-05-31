let blocks = document.querySelectorAll(".block");

const moveUp = (e) => {
  const parent = e.target.parentNode;
  parent.prepend(e.target);
}

blocks.forEach(block => {
  block.addEventListener("mousedown", moveRight)
});
