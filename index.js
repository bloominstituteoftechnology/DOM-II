const group = document.getElementsByClassName('blocks')[0];
const grayBlock = document.querySelector('.block--gray');

const rockets = (event) => {
  // Move event target to top
  event.target.style.order = -1;

  // Set everything else to 0

  
  if (event.target === -1) event.target.style.order = -1;
}

for (let i = 0; i < group.children.length; i++) {
  group.children[i].addEventListener('click', rockets);
}

console.log(group.children);