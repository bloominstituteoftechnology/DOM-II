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

// Margin mover ... increases in speed as mouse down

let t = 1;

// setInterval exit ID

let box1travel;
let box2travel;
let box3travel;
let box4travel;
let box5travel;

let box1travelL;
let box2travelL;
let box3travelL;
let box4travelL;
let box5travelL;

// Move on mousedown EventListener for each box

box1.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box1travel = setInterval(travelRight1,10);
})

box2.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box2travel = setInterval(travelRight2,10);
})

box3.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box3travel = setInterval(travelRight3,10);
})

box4.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box4travel = setInterval(travelRight4,10);
})

box5.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box5travel = setInterval(travelRight5,10);
})

// Stop moving on mouseup, anywhere in window
// reset speed back to 0;

window.addEventListener("mouseup", () => {
  console.log('mouse up detected')

  clearInterval(box1travel);
  clearInterval(box2travel);
  clearInterval(box3travel);
  clearInterval(box4travel);
  clearInterval(box5travel);

  console.log('why didn other boxes stop');

  if (move1 !== 10) {
    box1travelL = setInterval(travelLeft1, 10)
    console.log('box1 moving left')
  }
  if (move2 !== 10) {
    box2travelL = setInterval(travelLeft2, 10)
  }
  if (move3 !== 10) {
    box3travelL = setInterval(travelLeft3, 10)
  }
  if (move4 !== 10) {
    box4travelL = setInterval(travelLeft4, 10)
  }
  if (move5 !== 10) {
    box5travelL = setInterval(travelLeft5, 10)
  }
})

// setInterval callbacks
// TravelRight
function travelRight1() {
  move1 = move1 + 1;
  box1.style.marginLeft = move1 + 'px';
  console.log('move1: ', move1, 't ', t);
}

function travelRight2() {
  move2 = move2 + 1;
  box2.style.marginLeft = move2 + 'px';
  console.log('move2: ', move2, 't ', t);
  console.log(box2travel);
}

function travelRight3() {
  move3 = move3 + 1;
  box3.style.marginLeft = move3 + 'px';
  console.log('move3: ', move3, 't ', t);
}

function travelRight4() {
  move4 = move4 + 1;
  box4.style.marginLeft = move4 + 'px';
  console.log('move4: ', move4, 't ', t);
}

function travelRight5() {
  move5 = move5 + 1;
  box5.style.marginLeft = move5 + 'px';
  console.log('move5: ', move5, 't ', t);
}

// TravelLeft
function travelLeft1() {
  move1 = move1 - 1;
  if (move1 === 10) {
    console.log('box1 moving left stopped')
    clearInterval(box1travelL);
  }
  box1.style.marginLeft = move1 + 'px';
  console.log('move1: ', move1, 't ', t);
}

function travelLeft2() {
  move2 = move2 - 1;
  if (move2 === 10) {
    clearInterval(box2travelL);
  }
  box2.style.marginLeft = move2 + 'px';
  console.log('move2: ', move2, 't ', t);
}

function travelLeft3() {
  move3 = move3 - t;
  if (move3 === 10) {
    clearInterval(box3travelL);
  }
  box3.style.marginLeft = move3 + 'px';
  console.log('move3: ', move3, 't ', t);
}

function travelLeft4() {
  move4 = move4 - 1;
  if (move4 === 10) {
    clearInterval(box4travelL);
  }
  box4.style.marginLeft = move4 + 'px';
  console.log('move4: ', move4, 't ', t);
}

function travelLeft5() {
  move5 = move5 - 1;
  if (move5 === 10) {
    console.log('im inside!')
    clearInterval(box5travelL);
  }
  box5.style.marginLeft = move5 + 'px';
  console.log('move5: ', move5, 't ', t);
}
// Basic implementation complete.
// I'm sure I could implement the boxes in an array format
// Should cut down code by 4/5
// If time allows I'll come back 
// and implement return to location (Extra Credit)