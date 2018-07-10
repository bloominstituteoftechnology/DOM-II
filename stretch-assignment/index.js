let blocks = document.querySelectorAll(".block");
let redBlock = blocks[0];
let blueBlock = blocks[1];
let greenBlock = blocks[2];
let pinkBlock = blocks[3];
let grayBlock = blocks[4];
let maxSteps = 500;
let currentSteps = 10;
let interval = 0;
let delay = 50; // milliseconds
let whichBlock = 0;

redBlock.addEventListener('mousedown', function() {
  whichBlock = 0;
  interval = setInterval(moveRight, delay);
});

blueBlock.addEventListener('mousedown', function() {
  whichBlock = 1;
  interval = setInterval(moveRight, delay);
});

greenBlock.addEventListener('mousedown', function() {
  whichBlock = 2;
  interval = setInterval(moveRight, delay);
});

pinkBlock.addEventListener('mousedown', function() {
  whichBlock = 3;
  interval = setInterval(moveRight, delay);
});

grayBlock.addEventListener('mousedown', function() {
  whichBlock = 4;
  interval = setInterval(moveRight, delay);
});

redBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  interval = setInterval(moveLeft, delay);
})

blueBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  interval = setInterval(moveLeft, delay);
})

greenBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  interval = setInterval(moveLeft, delay);
})

pinkBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  interval = setInterval(moveLeft, delay);
})

grayBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  interval = setInterval(moveLeft, delay);
})


function moveRight() {

  if (currentSteps <= maxSteps) {
    console.log("it works!");
    currentSteps += 5;

    switch (whichBlock) {
      case 0:
        redBlock.style.marginLeft = `${currentSteps}px`;
        break;
      case 1:
        blueBlock.style.marginLeft = `${currentSteps}px`;
        break;
      case 2:
        greenBlock.style.marginLeft = `${currentSteps}px`;
        break;
      case 3:
        pinkBlock.style.marginLeft = `${currentSteps}px`;
        break;
      case 4:
        grayBlock.style.marginLeft = `${currentSteps}px`;
        break;
      default:
    }

    console.log(currentSteps);
  }
}

function moveLeft () {
  currentSteps -= 5;

  switch (whichBlock) {
    case 0:
      redBlock.style.marginLeft = `${currentSteps}px`;
      break;
    case 1:
      blueBlock.style.marginLeft = `${currentSteps}px`;
      break;
    case 2:
      greenBlock.style.marginLeft = `${currentSteps}px`;
      break;
    case 3:
      pinkBlock.style.marginLeft = `${currentSteps}px`;
      break;
    case 4:
      grayBlock.style.marginLeft = `${currentSteps}px`;
      break;
    default:
  }

  if (currentSteps == 10) {
    clearInterval(interval)
  }
}
