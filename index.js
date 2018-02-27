// ############################# ROCKETS ################################

document.querySelector(".blocks").addEventListener("mousedown", (event) => {
  document.querySelector(".blocks").removeChild(event.target);
  document.querySelector(".blocks").prepend(event.target); });

// ############################ TRAVELERS ###############################

const container = document.querySelector(".blocks");

container.addEventListener('mousedown', moveRight);


function moveRight(event) {

  if (container.addEventListener) container.addEventListener('mouseup', moveLeft);
  if (event.target === container) return null;
  let margin = 2;
  console.log(event);
  const rightInterval = setInterval(() => {
    if (margin === 80) clearInterval(rightInterval);
    event.target.style.marginLeft = `${++margin}%`;
    
  },1);

  function moveLeft() {
    if (event.target === container) return null;
    clearInterval(rightInterval);
    console.log(event);
    const leftInterval = setInterval(() => {
      if (margin != 2) event.target.style.marginLeft = `${--margin}%`;
      if (margin <= 2) clearInterval(leftInterval);
    },1);
  }


}

