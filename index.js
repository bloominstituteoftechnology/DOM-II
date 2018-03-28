let blockLoop = document.getElementsByClassName("block")

function mouseDown(e) {
    e.target.style.position = "relative"; //pushes box to right on mousedown
    e.target.style.left = "15rem";
};

function mouseUp(e) {
    e.target.classList.add("mouseRelease"); //releasing on block causes it to transition to 
    console.log('test')                    //the left and be shot back to the right
};

for(let i = 0; i<blockLoop.length; i++) {
    blockLoop[i].addEventListener('mouseup', mouseUp); //looping through each index/block to give it an event listener
    blockLoop[i].addEventListener('mousedown', mouseDown);
}