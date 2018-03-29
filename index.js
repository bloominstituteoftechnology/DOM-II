//let lowest = 0;
const block = document.querySelectorAll('.block');
//
//const moveToTop = (event) => {
//  event.target.style.order = (lowest - 1);
//  lowest -= 1;
//}
//
//for (let i = 0; i < block.length; i++) {
//  block[i].addEventListener('click', moveToTop);
//}

let moveBy = window.innerWidth - 200;

const mouseDown = (event) => {
  event.target.style.transform = 'translate(' + moveBy +'%)';
}

const mouseUp = (event) => {
  event.target.style.transform = 'translate(0px)';
}

for (let i = 0; i < block.length; i++) {
  block[i].style.transitionDuration = '7s';
  block[i].addEventListener('mousedown', mouseDown);
  block[i].addEventListener('mouseleave', mouseUp);
  block[i].addEventListener('mouseup', mouseUp);
}