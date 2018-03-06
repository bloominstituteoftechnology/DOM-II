// Grab box objects;
const box1 = document.querySelector('.block--red');
const box2 = document.querySelector('.block--blue');
const box3 = document.querySelector('.block--green');
const box4 = document.querySelector('.block--pink');
const box5 = document.querySelector('.block--gray');

// Equals initial margin on left
let move1 = 10;
let move2 = 10;
let move3 = 10;
let move4 = 10;
let move5 = 10;

// Margin mover by 1px

let t = 1;

// setInterval exit ID

let box1travel;
let box2travel;
let box3travel;
let box4travel;
let box5travel;

let box1travelL = null;
let box2travelL = null;
let box3travelL = null;
let box4travelL = null;
let box5travelL = null;

// Move on mousedown EventListener for each box

box1.addEventListener("mousedown", () => {
  box1travel = setInterval(travelRight1,10);
})

box2.addEventListener("mousedown", () => {
  box2travel = setInterval(travelRight2,10);
})

box3.addEventListener("mousedown", () => {
  box3travel = setInterval(travelRight3,10);
})

box4.addEventListener("mousedown", () => {
  box4travel = setInterval(travelRight4,10);
})

box5.addEventListener("mousedown", () => {
  box5travel = setInterval(travelRight5,10);
})

// Stop moving on mouseup, anywhere in window
// reset speed back to 0;

window.addEventListener("mouseup", () => {

  clearInterval(box1travel);
  clearInterval(box2travel);
  clearInterval(box3travel);
  clearInterval(box4travel);
  clearInterval(box5travel);

  if (move1 !== 10 && box1travelL === null) {
    box1travelL = setInterval(travelLeft1, 10)
  }
  if (move2 !== 10 && box2travelL === null) {
    box2travelL = setInterval(travelLeft2, 10)
  }
  if (move3 !== 10 && box3travelL === null) {
    box3travelL = setInterval(travelLeft3, 10)
  }
  if (move4 !== 10 && box4travelL === null) {
    box4travelL = setInterval(travelLeft4, 10)
  }
  if (move5 !== 10 && box5travelL === null) {
    box5travelL = setInterval(travelLeft5, 10)
  }
})

// setInterval callbacks
// TravelRight
function travelRight1() {
  move1 = move1 + t;
  box1.style.marginLeft = move1 + 'px';
}

function travelRight2() {
  move2 = move2 + t;
  box2.style.marginLeft = move2 + 'px';
}

function travelRight3() {
  move3 = move3 + t;
  box3.style.marginLeft = move3 + 'px';
}

function travelRight4() {
  move4 = move4 + t;
  box4.style.marginLeft = move4 + 'px';
}

function travelRight5() {
  move5 = move5 + t;
  box5.style.marginLeft = move5 + 'px';
}

// TravelLeft
function travelLeft1() {
  move1 = move1 - t;
  if (move1 === 10) {
    clearInterval(box1travelL);
    box1travelL = null;
  }
  box1.style.marginLeft = move1 + 'px';
}

function travelLeft2() {
  move2 = move2 - t;
  if (move2 === 10) {
    clearInterval(box2travelL);
    box2travelL = null;
  }
  box2.style.marginLeft = move2 + 'px';
}

function travelLeft3() {
  move3 = move3 - t;
  if (move3 === 10) {
    clearInterval(box3travelL);
    box3travelL = null;
  }
  box3.style.marginLeft = move3 + 'px';
}

function travelLeft4() {
  move4 = move4 - t;
  if (move4 === 10) {
    clearInterval(box4travelL);
    box4travelL = null;
  }
  box4.style.marginLeft = move4 + 'px';
}

function travelLeft5() {
  move5 = move5 - t;
  if (move5 === 10) {
    clearInterval(box5travelL);
    box5travelL = null;
  }
  box5.style.marginLeft = move5 + 'px';
}
// Basic implementation complete.
// I'm sure I could implement the boxes in an array format
// Should cut down code by 4/5
// If time allows I'll come back 
// and implement return to location (Extra Credit)