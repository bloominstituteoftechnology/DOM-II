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

// 1 navbar borders pop in and out with mouseover
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

// 2 last pic on the page increases and decreases in size with wheel
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

// 3 each individual destination paragraph increases width on click of the buttons
const bumpOut = function() {
  event.stopPropagation();
  if (this.parentNode.style.width === "35%") {
    this.parentNode.style.width = "30%";
  } else this.parentNode.style.width = "35%";
};

destinations.forEach((item = elem => elem.addEventListener("click", bumpOut)));

// 4 middle destination paragraph turn pink when clicked - demonstrates bubbling fix
destinationDivs[1].addEventListener("click", function() {
  if (destinationDivs[1].style.backgroundColor === "pink") {
    destinationDivs[1].style.backgroundColor = "white";
  } else destinationDivs[1].style.backgroundColor = "pink";
});

// 5 provide a target to drag "Let's Go" to
const dragTarget = function() {
  centerTitleBottom.style.color = "red";
};

centerTitleTop.addEventListener("dragstart", dragTarget);

// 6 change the background of target location to show ready for drop
const dragApproveLoc = function() {
  centerTitleBottom.style.backgroundColor = "grey";
};

centerTitleBottom.addEventListener("dragover", dragApproveLoc);

// 7 swap "Let's Go" onto "Adventure Awaits" to at dragend and clear style changes
const dragSwap = function() {
  centerTitleBottom.style.backgroundColor = "";
  centerTitleBottom.style.color = "";
  tempString = centerTitleBottom.innerHTML;
  centerTitleBottom.innerHTML = centerTitleTop.innerHTML;
  centerTitleTop.innerHTML = tempString;
};

centerTitleTop.addEventListener("dragend", dragSwap);

//8 TODO this isn't done
let timeKeeper = 0;
const inverseTopImg = function() {
  const timer = setInterval(inverseTopImg, 50);
  timeKeeper += 50;
  while (timeKeeper > 2000) {
    topPic.style.transform("scaleX(-1)");
  }
  clearInterval(timer);
};

topPic.addEventListener("load", inverseTopImg);
