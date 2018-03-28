const blocks = document.getElementsByClassName('blocks')[0];
const everyBlock = Array.from(blocks.children);
let order = 0;

const myFunct = (event, ...args) => {
  event.target.style.order = order--;
}

everyBlock.forEach((value) => {
  value.addEventListener('click', myFunct);
  value.addEventListener('mousedown', mySecondFunct);
});

document.addEventListener('mouseup', mySecondStop);

let myInterval;
function mySecondFunct(event) {
let i = 10;
myInterval = window.setInterval(() => {
  i += 10;
  event.target.style.marginLeft = i + 'px';
// console.log(i, event.target);
}, 10);
}

function mySecondStop(event) {
  clearInterval(myInterval);
}
