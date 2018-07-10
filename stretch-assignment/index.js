let blocks = document.querySelectorAll(".block");
let blockParent = document.querySelector('.blocks');
let redBlock = blocks[0];
let blueBlock = blocks[1];
let greenBlock = blocks[2];
let pinkBlock = blocks[3];
let grayBlock = blocks[4];
let redBlockSteps = 10;
let blueBlockSteps = 10;
let greenBlockSteps = 10;
let pinkBlockSteps = 10;
let grayBlockSteps = 10;
let maxSteps = 500;
let interval = 0;
let delay = 50; // milliseconds
let whichBlock = 0; // flag indicating which block an event was triggered on


// 'click' Event Listeners
redBlock.addEventListener('click', function () {
  let tmpBlock = redBlock;
  blockParent.removeChild(redBlock);
  blockParent.prepend(tmpBlock);
});

blueBlock.addEventListener('click', function () {
  let tmpBlock = blueBlock;
  blockParent.removeChild(blueBlock);
  blockParent.prepend(tmpBlock);
});

greenBlock.addEventListener('click', function () {
  let tmpBlock = greenBlock;
  blockParent.removeChild(greenBlock);
  blockParent.prepend(tmpBlock);
});

pinkBlock.addEventListener('click', function () {
  let tmpBlock = pinkBlock;
  blockParent.removeChild(pinkBlock);
  blockParent.prepend(tmpBlock);
});

grayBlock.addEventListener('click', function () {
  let tmpBlock = grayBlock;
  blockParent.removeChild(grayBlock);
  blockParent.prepend(tmpBlock);
});


// 'mousedown' Event Listeners
redBlock.addEventListener('mousedown', function(event) {
  clearInterval(interval);
  whichBlock = 0;
  event.stopPropagation();
  interval = setInterval(moveRight, delay);
});

blueBlock.addEventListener('mousedown', function(event) {
  clearInterval(interval);
  whichBlock = 1;
  event.stopPropagation();
  interval = setInterval(moveRight, delay);
});

greenBlock.addEventListener('mousedown', function() {
  clearInterval(interval);
  whichBlock = 2;
  event.stopPropagation();
  interval = setInterval(moveRight, delay);
});

pinkBlock.addEventListener('mousedown', function() {
  clearInterval(interval);
  whichBlock = 3;
  event.stopPropagation();
  interval = setInterval(moveRight, delay);
});

grayBlock.addEventListener('mousedown', function() {
  clearInterval(interval);
  whichBlock = 4;
  event.stopPropagation();
  interval = setInterval(moveRight, delay);
});


// 'mouseup' Event Listeners
redBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  event.stopPropagation();
  interval = setInterval(moveLeft, delay);
})

blueBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  event.stopPropagation();
  interval = setInterval(moveLeft, delay);
})

greenBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  event.stopPropagation();
  interval = setInterval(moveLeft, delay);
})

pinkBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  event.stopPropagation();
  interval = setInterval(moveLeft, delay);
})

grayBlock.addEventListener('mouseup', function () {
  clearInterval(interval);
  event.stopPropagation();
  interval = setInterval(moveLeft, delay);
})


// Move the corresponding block to the right using margin styling
function moveRight() {

    switch (whichBlock) {
      case 0:
        if (redBlockSteps <= maxSteps) {
          redBlockSteps += 5;
          redBlock.style.marginLeft = `${redBlockSteps}px`;
          console.log(redBlockSteps);
        }
        break;
      case 1:
        if (blueBlockSteps <= maxSteps) {
          blueBlockSteps += 5;
          blueBlock.style.marginLeft = `${blueBlockSteps}px`;
          console.log(blueBlockSteps);
        }
        break;
      case 2:
        if (greenBlockSteps <= maxSteps) {
          greenBlockSteps += 5;
          greenBlock.style.marginLeft = `${greenBlockSteps}px`;
          console.log(greenBlockSteps);
        }
        break;
      case 3:
        if (pinkBlockSteps <= maxSteps) {
          pinkBlockSteps += 5;
          pinkBlock.style.marginLeft = `${pinkBlockSteps}px`;
          console.log(pinkBlockSteps);
        }
        break;
      case 4:
        if (grayBlockSteps <= maxSteps) {
          grayBlockSteps += 5;
          grayBlock.style.marginLeft = `${grayBlockSteps}px`;
          console.log(grayBlockSteps);
        }
        break;
      default:
    }
}


// Move the corresponding block to the left using margin styling
function moveLeft () {

  switch (whichBlock) {
    case 0:
      redBlockSteps -= 5;
      redBlock.style.marginLeft = `${redBlockSteps}px`;
      console.log(redBlockSteps);
      if (redBlockSteps == 10) {
        console.log("Back to Start");
        clearInterval(interval);
      }
      break;
    case 1:
      blueBlockSteps -= 5;
      blueBlock.style.marginLeft = `${blueBlockSteps}px`;
      if (blueBlockSteps == 10) {
        clearInterval(interval);
      }
      break;
    case 2:
      greenBlockSteps -= 5;
      greenBlock.style.marginLeft = `${greenBlockSteps}px`;
      if (greenBlockSteps == 10) {
        clearInterval(interval);
      }
      break;
    case 3:
      pinkBlockSteps -= 5;
      pinkBlock.style.marginLeft = `${pinkBlockSteps}px`;
      if (pinkBlockSteps == 10) {
        clearInterval(interval);
      }
      break;
    case 4:
      grayBlockSteps -= 5;
      grayBlock.style.marginLeft = `${grayBlockSteps}px`;
      if (grayBlockSteps == 10) {
        clearInterval(interval);
      }
      break;
    default:
  }
}
