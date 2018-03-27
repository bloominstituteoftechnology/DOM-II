let blockList = document.querySelector('.blocks').childNodes
let redBlock = document.getElementsByClassName('block--red')

// select class="blocks"
// once one of the child is 'clicked', change order since display: flex


// ROCKET =============

// let orderValue = -1;

// const reposition = (event) => {
//     event.stopPropagation();
//     event.target.style.order = orderValue;
//     orderValue--; // newer item will have order value lower than the previous
// };

// // run reposition function when clicked on children of blockList
// blockList.forEach((block) => {
//     block.addEventListener('click', reposition);
// });

// Travellers ===========



// define what happens on mousedown and mouseup

const right = (event) => {
    event.target.style = 'transition: width, 2s; width: 800px';
}
const left = (event) => {
    event.target.style = 'width = 100%';
}

blockList.forEach((block) => {
    block.addEventListener('mousedown', right);
    block.addEventListener('mouseup', left);    
});
