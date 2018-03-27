// When a block is clicked, it should go to the top of the stack

const box1 = document.querySelector('.block--red');
const box2 = document.querySelector('.block--blue');
const box3 = document.querySelector('.block--green');
const box4 = document.querySelector('.block--pink');
const box5 = document.querySelector('.block--gray');
const allBoxes = document.querySelectorAll(`.block`);

//how can I make this toggle if off for all other ones? 
const toTop = (event) => {
    event.stopPropagation();
    // allBoxes.target.classList.remove('topDog');
    event.target.classList.toggle('topDog'); 
}

box1.addEventListener("click", toTop);
box2.addEventListener("click", toTop);
box3.addEventListener("click", toTop);
box4.addEventListener("click", toTop);
box5.addEventListener("click", toTop);


// While a mouse is clicked down on a box, it should move to the right
// When the mouse button is released, it should travel back to its original position
// A mouse down that occurs during a transition back to the original position 
// should send it traveling to the right agian from its current positionz
