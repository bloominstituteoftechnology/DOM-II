// elements
const boxList = document.querySelectorAll('.block');

boxList.forEach(function(box) {
  box.addEventListener('click', putInFront);
  box.addEventListener('click', goToRight);
})

// rockets
let order = -1;

function putInFront(event) {
  event.target.style.order = `${order}`;
  order = order - 1;
}

function goToRight(event) {
  let infinteVal = 0;

  setInterval(function() {
    infinteVal += 10;
    event.target.style.transform = `translate(${infinteVal}px, 0)`;
  }, 100)
  
  event.target.style.transitionDuration = '3s';
}