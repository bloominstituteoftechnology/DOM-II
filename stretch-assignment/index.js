
const blocks = document.querySelector(".blocks");
// console.log(blocks);
const redBlock = blocks.children[0];
// console.log(redBlock);
const blueBlock = blocks.children[1];
// console.log(blueBlock);
const greenBlock = blocks.children[2];
// console.log(greenBlock);
const pinkBlock = blocks.children[3];
// console.log(pinkBlock);
const grayBlock = blocks.children[4];
// console.log(grayBlock);

/*

## Project Description

You are going to create a simple game where rockets can be moved up and down by clicking on them.  There are travelers inside of these rockets that can blast off as long as you hold the mouse down on their rocket.
*/

// Rockets: When a block is clicked, it should go to the top of the stack.
function setBlockOrderToZero() {
  blocks.children[0].style.order = "0";
  blocks.children[1].style.order = "0";
  blocks.children[2].style.order = "0";
  blocks.children[3].style.order = "0";
  blocks.children[4].style.order = "0";
};
function launchRocketAnimation(block) {

  if (block === blocks.children[1]) {
    gsap.to(block, {
      y: "-120", // works for 2th block
      duration: 0.5,
      onComplete: () => {
        setBlockToFirst(block);
      }
    });

  } else if (block === blocks.children[2]) {
    gsap.to(block, {
      y: "-240", // works for 3th block
      duration: 1,
      onComplete: () => {
        setBlockToFirst(block);
      }
    });

  } else if (block === blocks.children[3]) {
    gsap.to(block, {
      y: "-360", // works for 4th block
      duration: 1.5,
      onComplete: () => {
        setBlockToFirst(block);
      }
    });

  } else if (block === blocks.children[4]) {
    gsap.to(block, {
      y: "-477", // works for 5th block
      duration: 2,
      onComplete: () => {
        setBlockToFirst(block);
      }
    });
  }
  

  function setBlockToFirst(block) {
    console.log("setBlock: Block is:", block);
    block.setAttribute("style", "order: -1");
  }

  window.setTimeout(() => { 
    block.setAttribute("style", "order: -1");
   }, 2000); // 1000 ms = 1 sec
  
};

redBlock.addEventListener('click', (e) => {
  setBlockOrderToZero();
  launchRocketAnimation(redBlock);
});
blueBlock.addEventListener('click', (e) => {
  setBlockOrderToZero();
  launchRocketAnimation(blueBlock);
});
greenBlock.addEventListener('click', (e) => {
  setBlockOrderToZero();
  launchRocketAnimation(greenBlock);
});
pinkBlock.addEventListener('click', (e) => {
  setBlockOrderToZero();
  launchRocketAnimation(pinkBlock);
});
grayBlock.addEventListener('click', (e) => {
  setBlockOrderToZero();
  launchRocketAnimation(grayBlock);
});


//  Travelers: While a mouse is clicked down on a box, it should move to the right (It should coninuously move, there is no limit on how far it will go).
var tweenRed = gsap.to(redBlock, {
  duration: 4, 
  delay: 1,
  x: 1400, 
  rotation: 360, 
  ease: "none", 
  paused: true
});
var tweenBlue = gsap.to(blueBlock, {
  duration: 4, 
  delay: 1,
  x: 1400, 
  rotation: 360, 
  ease: "none", 
  paused: true
});
var tweenGreen = gsap.to(greenBlock, {
  duration: 4, 
  delay: 1,
  x: 1400, 
  rotation: 360, 
  ease: "none", 
  paused: true
});
var tweenPink = gsap.to(pinkBlock, {
  duration: 4, 
  delay: 1,
  x: 1400, 
  rotation: 360, 
  ease: "none", 
  paused: true
});
var tweenGray = gsap.to(grayBlock, {
  duration: 4, 
  delay: 1,
  x: 1400, 
  rotation: 360, 
  ease: "none", 
  paused: true
});


redBlock.addEventListener('mousedown', (e) => {
  tweenRed.play();
  // console.log("play fired");
});

blueBlock.addEventListener('mousedown', (e) => {
  tweenBlue.play();
  // console.log("play fired");
});

greenBlock.addEventListener('mousedown', (e) => {
  tweenGreen.play();
  // console.log("play fired");
});

pinkBlock.addEventListener('mousedown', (e) => {
  tweenPink.play();
  // console.log("play fired");
});

grayBlock.addEventListener('mousedown', (e) => {
  tweenGray.play();
  // console.log("play fired");
});

/* Travelers:
* Give the travelers a limit on the distance it can travel.
* When the mouse button is released, it should travel back to its original position.
* A mouse down that occurs during a transition back to the original position should send it traveling to the right again  from it's current position. */
document.addEventListener('mouseup', (e) => {
  tweenRed.pause();
  tweenRed.reverse();
  tweenBlue.pause();
  tweenBlue.reverse();
  tweenGreen.pause();
  tweenGreen.reverse();
  tweenPink.pause();
  tweenPink.reverse();
  tweenGray.pause();
  tweenGray.reverse();
  // console.log("pause fired");
});


// ## Stretch Goals

// Rockets:  Animate the rockets, visually show them being transported to the top.


/*
You will be using `window.setInterval`. For this method, and any of those listed in the "Topics" section of this README, you are encouraged to use MDN as your resource for Documentation. MDN can be challenging to consume at first, so you may also use something like W3schools if the MDN documentation on a given subject is a bit too complicated.
*/

// Instead of using window.setInterval, I used the property onComplete: function in the gsap.to syntax
