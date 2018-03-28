const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');
const blocks = document.querySelector('blocks');

// Rockets

let order = 0;
const go = () => {
    order: (0);
    order--;
    event.target.style.order = order.toString();
}

red.addEventListener('click', go);
blue.addEventListener('click', go);
green.addEventListener('click', go);
pink.addEventListener('click', go);
gray.addEventListener('click', go);

// Travelers

const travelerEvent = (e) => {
    let distance = 0

    const moveRight = () => {
      distance += 10
      e.target.style.borderLeft = `${distance}px solid white`;
    }
    setInterval(moveRight, 10);
  }
  
  for(let i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('click', travelerEvent);
  }

red.addEventListener('mousedown', moveRight);
blue.addEventListener('mousedown', moveRight);
green.addEventListener('mousedown', moveRight);
pink.addEventListener('mousedown', moveRight);
gray.addEventListener('mousedown', moveRight);