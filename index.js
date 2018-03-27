
const block = document.querySelector('.blocks');

const toTop = (event) => {
  event.stopPropagation();
  event.target.style = 'order: -1';
}  
const toStart = (event) => {
  event.stopPropagation();
  event.target.style.order = null;
}

block.addEventListener('click', toTop); 
block.addEventListener('dblclick', toStart);