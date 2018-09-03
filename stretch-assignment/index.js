// When a block is clicked, it should go to the top of the stack.

const selectParent = document.querySelector('.blocks');
console.log(selectParent);

let clickBlock = document.querySelectorAll('.block');  // returns array-like 
console.log(clickBlock);

//ES6 way to turn NodeList into Array
let newArray = Array.from(clickBlock);
console.log(newArray);

// remove 1 element from index 3
function moveElement(arr) {
    arr.forEach((element, index, array) => element.addEventListener('click', function(index){
        newArray.pop(element);
        // newArray.unshift(arr[index]);
        console.log(newArray);
    }))
}
moveElement(clickBlock);
// newArray.splice(3,1);
// console.log(newArray);


//////// FIRST ATTEMPT PREPEND
// function allClickBlock(arr) {
//     arr.forEach((element, index) => element.addEventListener('click', selectParent.prepend(element)));
// }

// allClickBlock(clickBlock);

/////// CHANGE COLOR
// let clickBlock = document.querySelectorAll('.block'); //Nodelist = array-like object
// console.log(clickBlock)

// function allClickBlock (arr) {
//     arr.forEach((element, index) => element.addEventListener('click', function(event){
//         event.target.style.backgroundColor = 'goldenrod';
//     }))
// }

// allClickBlock(clickBlock);





// Animate the rockets, visually show them being transported to the top.






// While a mouse is clicked down on a box, it should move to the right 
// (It should coninuously move, there is no limit on how far it will go).
// mousedown 









// When the mouse button is released, it should travel back to its original position.
// mouseup




// A mouse down that occurs during a transition back to the original position should send it traveling to the right again from it's current position.