// block nodelist
const block = document.querySelectorAll(".block");
// individial elements
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--pink");
const grayBlock = document.querySelector(".block--gray");
const body = document.querySelector("body");
const img = document.querySelectorAll("img");

let negCounter = 0;
let intervalId;

// create h1 element
const h1Element = document.createElement("h1");
h1Element.textContent = "Launching only from the TOP position!";
h1Element.style.position = "fixed";
body.prepend(h1Element);

// create img tag for rocket.png
const redRocket = document.createElement("img");
redRocket.src = "./rocket.png";
redRocket.alt = "just a rocket"
redRocket.style.height = "50px";

const blueRocket = document.createElement("img");
blueRocket.src = "./rocket.png";
blueRocket.alt = "just a rocket"
blueRocket.style.height = "50px";

const greenRocket = document.createElement("img");
greenRocket.src = "./rocket.png";
greenRocket.alt = "just a rocket"
greenRocket.style.height = "50px";

const pinkRocket = document.createElement("img");
pinkRocket.src = "./rocket.png";
pinkRocket.alt = "just a rocket"
pinkRocket.style.height = "50px";

const grayRocket = document.createElement("img");
grayRocket.src = "./rocket.png";
grayRocket.alt = "just a rocket"
grayRocket.style.height = "50px";

redBlock.appendChild(redRocket);
blueBlock.appendChild(blueRocket);
greenBlock.appendChild(greenRocket);
pinkBlock.appendChild(pinkRocket);
grayBlock.appendChild(grayRocket);



block.forEach((item, i) => {
  // when clicked, place lowest number to the top position

  item.addEventListener("click", e => {
    negCounter -= 1;
    e.target.style.order = `${negCounter}`;
  });

  // Launching ONLY IN THE FIRST POSITION

  if (item.style.order <= negCounter){
    // when mouse is clicked and held down, move block from left to right infinitely
  item.addEventListener("mousedown", e => {
    intervalId = setInterval(()=> {
      img[i]
      console.log('hello')
    }, 1000)
  })

  // when mouse is released, block moves from right back to original position
  item.addEventListener("mouseup", e=> {
    clearInterval(intervalId);
  })

  }
  
});

let travelerLaunch = () => {
  // do something
  // while the traveler is held down, launches to the right,
  // when click is released, move back to original position.
};

// console.log(block)
