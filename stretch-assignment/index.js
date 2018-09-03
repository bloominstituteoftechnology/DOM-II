// When a block is clicked, it should go to the top of the stack.

// document.getElementsByTagName('body').style.backgroundColor = 'black';


let clickBlock = document.querySelectorAll('.block'); //Nodelist = array-like object
// let clickBlock = document.querySelectorAll('.block');
console.log(clickBlock)


function allClickBlock (arr) {
    arr.forEach((element, index) => element.addEventListener('click', function(event){
        event.target.style.backgroundColor = 'yellow';
    }))
}

allClickBlock(clickBlock);

// clickBlock[1].addEventListener('click', function(event){
//     event.target.style.backgroundColor = 'black';
// })



// Animate the rockets, visually show them being transported to the top.






// While a mouse is clicked down on a box, it should move to the right 
// (It should coninuously move, there is no limit on how far it will go).
// mousedown 









// When the mouse button is released, it should travel back to its original position.
// mouseup




// A mouse down that occurs during a transition back to the original position should send it traveling to the right again from it's current position.