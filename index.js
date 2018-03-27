const blocks = document.querySelector(".blocks");
const blockRed = document.getElementById("block block--red");
const blockBlue = document.getElementById("block block--blue");
const blockGreen = document.getElementById("block block--green");
const blockPink = document.getElementById("block block--pink");
const blockGray = document.getElementById("block block--gray");

const toTheTop = (event) => {
      event.stopPropagation();
      event.target.style.backgroundColor = 'red';
}

      blockRed.addEventListener('click', toTheTop);
      blockBlue.addEventListener('click', totheTop);
      blockGreen.addEventListener('click', toTheTop);
      blockPink.addEventListener('click', toTheTop);
      blockGray.addEventListener('click', toTheTop);


const moveRight = (event) => {
      event.stopPropagation();
      event.target.blocks.style.right = '100px';
}

      blockRed.addEventListener('click', moveRight);
      blockBlue.addEventListener('click', moveRight);
      blockGreen.addEventListener('click', moveRight);
      blockPink.addEventListener('click', moveRight);
      blockGray.addEventListener('click', moveRight);






//window.setInterval {};