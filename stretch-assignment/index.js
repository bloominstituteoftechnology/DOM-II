// elements
const boxList = document.querySelectorAll('.block');

boxList.forEach(function(box) {
  box.addEventListener('click', putInFront);
})

// rockets
let order = -1;

function putInFront(event) {
  event.target.style.order = `${order}`;
  order = order - 1;
}