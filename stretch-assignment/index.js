import gsap from "gsap";

const blocks = document.querySelectorAll(".block");

const blockOne = blocks[0];
const blockTwo = blocks[1];
const blockThr = blocks[2];
const blockFo = blocks[3];
const blockFi = blocks[4];

function runIt(e) { gsap.to(e.target, { x: "+=300", duration: 1 })
};


function moveColor(e) {
  let storeCole = e.target.classList[1];
  let topCol = e.target.parentNode.firstElementChild.classList[1];
  e.target.classList.remove(storeCole);
  blockOne.classList.remove(topCol);
  e.target.classList.add(topCol);
  blockOne.classList.add(storeCole);
}

function moveBlock(e) {
  console.log(e.target.getBoundingClientRect().x);
  if (e.target.getBoundingClientRect().x < 400) {
    runIt(e);
  } else { { gsap.to(e.target, { x: "0", duration: 1 })
  } }
}

blocks.forEach((elem) => {
  elem.addEventListener("click", moveColor);
  elem.addEventListener("mousedown", moveBlock);
});
