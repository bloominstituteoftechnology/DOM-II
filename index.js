
const blocks = document.querySelector('.blocks');

let odr = 0;

const rocket = (event) => {
  event.stopPropagation();
  // event.target.style.order = '0';
 event.target.style.order = odr--;
}

const travelers = (event) => {
  event.target.style.marginLeft = '50px';
}

for(let i = 0; i < blocks.children.length; i++){
  blocks.children[i].addEventListener('click', rocket);
  blocks.children[i].addEventListener('mousedown', travelers);
}
