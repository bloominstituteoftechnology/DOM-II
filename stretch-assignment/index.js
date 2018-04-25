let blockSelector = document.getElementsByClassName("block");
let blocksSelector = document.getElementsByClassName("blocks");





moveUpDelete = function(e) {
    var newBlock = document.createElement("div");
    newBlock.setAttribute("class", e.target.getAttribute("class"));
    blocksSelector[0].prepend(newBlock);
    blockSelector[0].addEventListener('click', (e) => {
        moveUp(e);
    });
    e.target.remove();

};

createEvents = function () {
    for(let i =0; i < blockSelector.length ; i++) {
        blockSelector[i].addEventListener('click', (e) => {
            moveUp(e);
        })
    };
}

createEvents();

moveUp = function(e) {
    // TweenLite.to(e.target, 2.5, { ease: Bounce.easeOut, y: -400 });
    var myAnimation = new TweenLite.to(e.target, 1, {ease: Bounce.easeOut, y: -490, onComplete:moveUpDelete, onCompleteParams:[e]});

}

