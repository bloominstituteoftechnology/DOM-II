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

let t = 0;

// setInterval exit ID

let box1travel;
let box2travel;
let box3travel;
let box4travel;
let box5travel;

// Move on mousedown EventListener for each box

box1.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box1travel = setInterval(travelRight1,500);
})

box2.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box2travel = setInterval(travelRight2,500);
})

box3.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box3travel = setInterval(travelRight3,500);
})

box4.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box4travel = setInterval(travelRight4,500);
})

box5.addEventListener("mousedown", () => {
  console.log('mouse down detected')
  box5travel = setInterval(travelRight5,500);
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
  t = 0;
})

// setInterval callbacks

function travelRight1() {
  t++;
  move1 = move1 + t;
  box1.style.marginLeft = move1 + 'px';
  console.log('move: ', move1, 't ', t);
}

function travelRight2() {
  t++;
  move2 = move2 + t;
  box2.style.marginLeft = move2 + 'px';
  console.log('move: ', move2, 't ', t);
}

function travelRight3() {
  t++;
  move3 = move3 + t;
  box3.style.marginLeft = move3 + 'px';
  console.log('move: ', move3, 't ', t);
}

function travelRight4() {
  t++;
  move4 = move4 + t;
  box4.style.marginLeft = move4 + 'px';
  console.log('move: ', move4, 't ', t);
}

function travelRight5() {
  t++;
  move5 = move5 + t;
  box5.style.marginLeft = move5 + 'px';
  console.log('move: ', move5, 't ', t);
}

// Basic implementation complete.
// I'm sure I could implement the boxes in an array format
// Should cut down code by 4/5
// If time allows I'll come back 
// and implement return to location (Extra Credit)