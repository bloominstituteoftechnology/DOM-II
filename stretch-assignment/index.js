// block nodelist
const block = document.querySelectorAll(".block");
// individial elements
const redBlock = document.querySelector(".block--red");
const blueBlock = document.querySelector(".block--blue");
const greenBlock = document.querySelector(".block--green");
const pinkBlock = document.querySelector(".block--green");
const grayBlock = document.querySelector(".block--grey");

let negCounter = 0;
let intervalId;

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
