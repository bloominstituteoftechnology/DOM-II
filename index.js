// rockets: ==========
//   * When a block is clicked, it should go to the top of the stack

// make an array to access blovk
// loop over array to see if "on click"
// if it is on click return position array[0]

// Instantiate variables for each class block color

const parent = document.getElementsByClassName('blocks')[0]; 

let order = -5;

const moveOrder = (event) => {
    order--;
    event.target.style.order = order;
}

for(const i = 0; i < parent.children.length; i++) {
    parent.children[i].addEventListener('click', moveOrder);
}


 










// travelers: ============
// * While a mouse is clicked down on a box, it should move to the right
// * When the mouse button is released, it should travel back to its original position
// * A mouse down that occurs during a transition back to the original position should send it traveling to the right agian from its current position