// const parent = document.getElementsByClassName('blocks')[0]; //grabs the parent node
// let blocks = Array.from(document.querySelectorAll('.block'));
let order = -5;
const blocks = document.querySelectorAll(".block"); //creates parent node as array
let orderValue = -1;

const rockets = (event) => { //callback function used to move the target box to the top, above all other boxes
    event.target.style.order = order;
    order--;
}

const travelers = (event) => { //callback function to move box to the right on mouse click held down
    // event.target.style.transition = "margin-left 2s linear 1s";
    event.target.style.marginLeft = "100px";
}

const combo = (e) => { //testing different ideas
    rockets(e);
    travelers(e);
    e.target.style.order = "initial"
}

const reset = (e) => {  //WIP: reset rockets & travelers
    event.target.style.marginRight = "100px";
}

// blocks.forEach(block => { //addEventListeners for rockets & travelers
//     block.addEventListener('click', rockets); 
//     block.addEventListener('mousedown', travelers);
//     block.addEventListener('mouseup', reset);
// });

for (let i=0; i<blocks.length; i++){ //addEventListeners for rockets & travelers
    blocks[i].addEventListener('click', rockets); 
    blocks[i].addEventListener('mousedown', travelers);
    blocks[i].addEventListener('mouseup', reset);
}