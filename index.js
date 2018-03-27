const parent = document.getElementsByClassName('blocks')[0]; //grabs the parent node

let order = -5;

const moveOrder = (event) => { //callback function used to move the target box to the top, above all other boxes
    order--;
    event.target.style.order = order;
}

const moveRight = (event) => { //callback function to move box to the right on mouse click held down
    event.target.style.marginLeft = '100px';
}

for (let i = 0; i < parent.children.length; i++) { // loop to add eventlistener to each box
    parent.children[i].addEventListener('click', moveOrder); 
    console.log(parent.children[i]); //.addEventListener('click', moveOrder);
    // parent.children[i].addEventListener('mousedown', moveRight);
}