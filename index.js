// Rocket 

// const blocks = document.querySelector(".blocks");
// const moveIt = (event) => {
//   const child = event.target;
//   const parent = event.target.parentNode;
//   parent.removeChild(child);
//   parent.prepend(child);
// }

// for (i = 0; i < blocks.children.length; i++) {
//   blocks.children[i].addEventListener('click', moveIt) 
// }

// Shift Right

let interval;
let distance = 0;

const moveRight = (e) => {
  clearInterval(interval);
  const goRight = () => {
    distance++;
    e.target.style.marginLeft = `${distance}px`;
  };
  interval = setInterval(goRight, 10);
};

const moveLeft = (e) => {
  clearInterval(interval);
  const goLeft = () => {
    if (distance > 10) distance--;
    e.target.style.marginLeft = `${distance}px`;
  };
  interval = setInterval(goLeft, 10);
};

for (Let i = 0; i < blocks.children.length; i++;) {
  blocks.children[i].addEventListener('mousedown', moveRight);
  blocks.children[i].addEventListener('mouseup', moveLeft);
}