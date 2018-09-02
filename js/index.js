// Your code goes here
// * [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use:
// 	* [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
// 	* [ ] `dblclick`

const cl = console.log;
const navButtons = document.querySelectorAll(".nav-link");
const lastPic = document.querySelector(".content-destination img");
const destinations = document.querySelectorAll(".destination .btn");
const destinationDivs = document.querySelectorAll(".destination");
const centerTitleTop = document.querySelector(".content-section h2");
const centerTitleBottom = document.querySelector(".inverse-content h2");
const topPic = document.querySelector(".intro img");

// 1 & 2 navbar borders pop in with mouseover and return to normal with mouseleave
const borderBoxOn = function() {
  this.style.border = "1px solid black";
};
const borderBoxOff = function() {
  this.style.border = "";
};

navButtons.forEach(
  (item = elem => {
    elem.addEventListener("mouseover", borderBoxOn);
    elem.addEventListener("mouseleave", borderBoxOff);
  })
);

// 3 last pic on the page increases and decreases in size with wheel
let size = 100;
let switchDir = -1;
const increaseSize = function() {
  this.style.width = `${size}%`;
  if (size < 20) {
    switchDir = 1;
  } else if (size > 90) {
    switchDir = -1;
  }
  size += switchDir * 10;
};

lastPic.addEventListener("wheel", increaseSize);

// 4 each individual destination paragraph increases width on click of the buttons - demonstrates bubbling fix
const bumpOut = function() {
  event.stopPropagation();
  if (this.parentNode.style.width === "35%") {
    this.parentNode.style.width = "30%";
  } else this.parentNode.style.width = "35%";
};

destinations.forEach((item = elem => elem.addEventListener("click", bumpOut)));

// 5 middle destination paragraph turn pink when clicked
destinationDivs[1].addEventListener("click", function() {
  if (destinationDivs[1].style.backgroundColor === "pink") {
    destinationDivs[1].style.backgroundColor = "white";
  } else destinationDivs[1].style.backgroundColor = "pink";
});

// 6 provide a target to drag "Let's Go" to
const dragTarget = function() {
  centerTitleBottom.style.color = "red";
  centerTitleTop.style.opacity = ".5";
};

centerTitleTop.addEventListener("dragstart", dragTarget);

// 7 & 8 change the background of target location to show ready for drop and change it back if it leaves without being dropped
const dragApproveLocEnter = function() {
  centerTitleBottom.style.backgroundColor = "grey";
  event.preventDefault();
};

const dragApproveLocLeave = function() {
  centerTitleBottom.style.backgroundColor = "";
};

centerTitleBottom.addEventListener("dragover", dragApproveLocEnter);
centerTitleBottom.addEventListener("dragleave", dragApproveLocLeave);

// 9 swap "Let's Go" onto "Adventure Awaits" at drop and clear style changes
const dragSwap = function() {
  centerTitleBottom.style.backgroundColor = "";
  centerTitleBottom.style.color = "";
  centerTitleTop.style.opacity = "1";
  tempString = centerTitleBottom.innerHTML;
  centerTitleBottom.innerHTML = centerTitleTop.innerHTML;
  centerTitleTop.innerHTML = tempString;
};

document.addEventListener("drop", dragSwap);

// 10 & 11 flips the header image every 50ms on page load until double-click  
// TODO need to figure out why the image is overriding the navbar 
let running = true;
let flipDigit = 1;
const timerFunction = function() {
  const intervalID = window.setInterval(inverseTopImg, 50);
  function inverseTopImg() {
    if (!running) {
      clearInterval(intervalID);
    } else {
      flipDigit = flipDigit * -1;
      let scale = `scaleX(${flipDigit})`;
      topPic.style.transform = scale;
    }
  }
};

const timerStop = function() {
  running = false;
};

topPic.addEventListener("load", timerFunction);
topPic.addEventListener("dblclick", timerStop);
