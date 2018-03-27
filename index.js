const blocks = document.querySelectorAll(".block");
let orderValue = -1;

function moveToTop(event) {
  event.target.style.order = orderValue;
  orderValue -= 1;
}

// Move to Right using CSS property
function moveToRightCSS(event) {
  event.target.style.transition = "margin-left 2s linear 1s";
  event.target.style.marginLeft = "788px";
}

// Object to keep track of element interval id.
const elementIntervalDict = {};

// Funtion will start setInterval if block is on far left corner.
// Clear interval otherwise.
const traveler = (event) => {
  console.log(elementIntervalDict);
  if (event.target.style.marginLeft === "") {
    let intervalId = setInterval(moveToRight.bind(this, event.target), 1000);
    elementIntervalDict[event.target.classList[1]] = intervalId;
  } else {
    event.target.style.marginLeft = "";
    clearInterval(elementIntervalDict[event.target.classList[1]]);
  }
}

// Funtion to move block till it reaches right corner or user clicks block again.
function moveToRight(element) {
  if (element.style.marginLeft === "") {
    element.style.marginLeft = "10px"
  } else {
    currentMargin = parseInt(element.style.marginLeft);
    if (currentMargin < 788) { 
      element.style.marginLeft = currentMargin + 10 + "px";
    }
  }
}

// Associate click event listener with each block.
blocks.forEach((block) => {
  block.addEventListener('click', moveToTop);
  block.addEventListener('click', moveToRightCSS);
  block.addEventListener('click', traveler);
});
