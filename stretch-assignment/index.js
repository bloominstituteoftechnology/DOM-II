Listner //rockets can be moved up or down by clicking on them
//travelers -> can blast of as long as you hold the mouse down on their rocket
//
// MVP
//
// flex order to the top
// when a block is clicked, should go to order 0
// while mouse is clicked down, move box to the right. if it is let go, back to original

//event"click"

// selectors declaration

// block nodelist
const block = document.querySelectorAll(".block");
// individial elements
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--green");
const grayBlock = document.querySelector(".block--grey");

let negCounter = 0;

block.forEach((item, i) => {
  // when clicked, place lowest number to the top position

  item.addEventListener("click", e => {
    negCounter -= 1;
    e.target.style.order = `${negCounter}`;
  });

  item.addEventListener("mousedown", e => {
    let rocket = setInterval()
  })

});

console.log(block[0]);

let travelerLaunch = () => {
  // do something
  // while the traveler is held down, launches to the right,
  // when click is released, move back to original position.
};

// console.log(block)
