let blockList = document.querySelector('.blocks').childNodes
let redBlock = document.getElementsByClassName('block--red')

// select class="blocks"
// once one of the child is 'clicked', change order since display: flex

let orderValue = -1;

const reposition = (event) => {
    console.log('click is working')
    event.stopPropagation();
    event.target.style.order = orderValue;
    orderValue--; // newer item will have order value lower than the previous
};

// run reposition function when clicked on children of blockList
blockList.forEach((block) => {
    block.addEventListener('click', reposition);
});








