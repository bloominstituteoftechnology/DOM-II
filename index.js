// set up array to contain custom classes of each block element
let blockClsList = [];
// custom block classes pushed into blockClsList array
for (let i = 0; i < document.getElementsByClassName('blocks')[0].children.length; i++) {
    blockClsList.push(document.getElementsByClassName('blocks')[0].children[i].classList[1]);
};
// console.log(blockClsList);
// console.log(blockClsList.length);

// =======================  Rockets  ==========================

// When a block is clicked, it should go to the top of the stack
// holds current value of flex order at the time of a 'click' event
let order = 0;
// event
const move = () => {
    // decrement order: (-) orders will move to the top of the main-axis
    // default order is 0 for all blocks
	order--;
	event.target.style.order = order.toString();
}

// creates event listener on click for all blocks
for (let i = 0; i < blockClsList.length; i++) {
	document.querySelector('.'+blockClsList[i]).addEventListener('click', move);
}