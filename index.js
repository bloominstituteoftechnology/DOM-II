// Assignment #1 
// When a block is clicked, it should go to the top of the stack

const box1 = document.querySelector('.block--red');
const box2 = document.querySelector('.block--blue');
const box3 = document.querySelector('.block--green');
const box4 = document.querySelector('.block--pink');
const box5 = document.querySelector('.block--gray');
const mainBox = document.querySelector('.blocks');
const allBoxes = document.querySelectorAll(`.block`);

//how can I make this toggle if off for all other ones? 
const toTop = (event) => {
    event.stopPropagation();
    // allBoxes.target.classList.remove('topDog');
    event.target.classList.toggle('topDog'); 
}

// box1.addEventListener("click", toTop);
// box2.addEventListener("click", toTop);
// box3.addEventListener("click", toTop);
// box4.addEventListener("click", toTop);
// box5.addEventListener("click", toTop);

// Assignment #2 
// While a mouse is clicked down on a box, it should move to the right
// When the mouse button is released, it should travel back to its original position
// A mouse down that occurs during a transition back to the original position 
//              should send it traveling to the right agian from its current positionz

const moveRight = (event) => {
    event.stopPropagation();
    event.target.classList.add('move');
}

//is there a way for me to combine this into a single line?
const removeRight = (event) => {
    event.stopPropagation();
    box1.classList.remove('move');
    box2.classList.remove('move');
    box3.classList.remove('move');
    box4.classList.remove('move');
    box5.classList.remove('move');
}

// //Mouse Click Event Listeners
box1.addEventListener("mousedown", moveRight);
box2.addEventListener("mousedown", moveRight);
box3.addEventListener("mousedown", moveRight);
box4.addEventListener("mousedown", moveRight);
box5.addEventListener("mousedown", moveRight);

//Mouse Release Event Listeners
document.addEventListener("mouseup", removeRight);
