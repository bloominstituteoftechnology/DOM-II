// block nodelist
const block = document.querySelectorAll(".block");
const img = document.querySelectorAll("img");
// individial elements
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");
const body = document.querySelector("body");
let negCounter = 0;
let intervalId;
let clearIntervalId;

// create h1 element
const h1Element = document.createElement("h1");
h1Element.textContent =
  "Launching only from the TOP position!.. not yet at least.";
h1Element.style.position = "fixed";
body.prepend(h1Element);

// create img tag for rocket.png
const redRocket = document.createElement("img");
redRocket.src = "./rocket.png";
redRocket.alt = "just a rocket";
redRocket.style.height = "50px";

const blueRocket = document.createElement("img");
blueRocket.src = "./rocket.png";
blueRocket.alt = "just a rocket";
blueRocket.style.height = "50px";

const greenRocket = document.createElement("img");
greenRocket.src = "./rocket.png";
greenRocket.alt = "just a rocket";
greenRocket.style.height = "50px";

const pinkRocket = document.createElement("img");
pinkRocket.src = "./rocket.png";
pinkRocket.alt = "just a rocket";
pinkRocket.style.height = "50px";

const grayRocket = document.createElement("img");
grayRocket.src = "./rocket.png";
grayRocket.alt = "just a rocket";
grayRocket.style.height = "50px";

redBlock.appendChild(redRocket);
blueBlock.appendChild(blueRocket);
greenBlock.appendChild(greenRocket);
pinkBlock.appendChild(pinkRocket);
grayBlock.appendChild(grayRocket);

// event listener for mouseover

block.forEach((item, i) => {
  // when clicked, place lowest number to the top position

  item.addEventListener("click", e => {
    negCounter -= 1;
    e.target.style.order = `${negCounter}`;
    TweenMax.from(e.target, 1, { ease: Circ.easeOut, y: "50px" });
  });

  // Launching ONLY FROM THE FIRST POSITION

  if (item.style.order <= negCounter) {
    // when mouse is clicked and held down, move block from left to right infinitely

    item.addEventListener("mousedown", e => {
      intervalId = window.setInterval(() => {
        // current'blocks first child is its img tag... wowza. I'm learning a lot. I want it's img tag to fly!
        window.clearInterval(clearIntervalId);
        TweenMax.to(e.target.firstChild, 3, { x: `2000px` });
        console.log("hello");
      }, 500);
    });

    // when mouse is released, block moves from right back to original position
    item.addEventListener("mouseup", e => {
      window.clearInterval(intervalId);
      clearIntervalId = window.setInterval(() => {
        TweenMax.to(e.target.firstChild, 0.5, {
          ease: Bounce.easeOut,
          x: "1px"
        });
      }, 10);
    });
  }
});
