// elements
const boxList = document.querySelectorAll('.block');

boxList.forEach(function(box) {
  box.addEventListener('click', putInFront);
  box.addEventListener('mousedown', goToRight);
  box.addEventListener('mouseleave', reset);
})

// rockets
let order = -1;

function putInFront(event) {
  event.target.style.transform = `translate(0, -${event.target.offsetHeight * 2}px)`;
  event.target.style.transitionDuration = '2s';
  
  setTimeout(function() {
    event.target.style.transform = `translate(0, 0px)`;
    event.target.style.order = `${order}`;
    order = order - 1;
  }, 200)
}

// traveler
function goToRight(event) {
  // let infinteVal = 0;

  // setInterval(function() {
  //   infinteVal += 10;
  //    event.target.style.transform = `translate(${infinteVal}px, 0)`;
  // }, 100)
  
  event.target.style.transform = `translate(600px, 0)`
  event.target.style.transitionDuration = '3s';
}

function reset(event) {
  event.target.style.transform = `translate(0, 0)`
  event.target.style.transitionDuration = '1s';
}