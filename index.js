
const blocks = document.querySelector('.blocks');

let odr = 0;

const rocket = (event) => {
  event.stopPropagation();
  // event.target.style.order = '0';
 event.target.style.order = odr--;
}

for(let i = 0; i < blocks.children.length; i++){
  blocks.children[i].addEventListener('click', rocket);
}
