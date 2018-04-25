let blockSelector = document.getElementsByClassName("block");
let blocksSelector = document.getElementsByClassName("blocks");

//Creates Click Event for each block
createEvents = () => {
    for(let i =0; i < blockSelector.length ; i++) {
        blockSelector[i].addEventListener('click', (e) => {
            moveUp(e);
        })
    };
}

//Creates a new block on top and deletes the block from the Dom
moveUpDelete = (e) => {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", e.target.getAttribute("class"));
    blocksSelector[0].prepend(newBlock);
    blockSelector[0].addEventListener('click', (e) => {
        moveUp(e);
    });
    e.target.remove();
};

moveUp = (e) => {
    var element = e.target;
    var position = element.getBoundingClientRect();
    var x = position.left;
    var y = 73.75 - position.top;
    var myAnimation = new TweenLite.to(e.target, 1, {ease: Bounce.easeOut, y: y, onComplete:moveUpDelete, onCompleteParams:[e]});
}

createEvents();


