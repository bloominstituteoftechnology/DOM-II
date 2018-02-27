//const box1 = document.getElementById("box1");
//const box2 = document.getElementById("box2");
//const box3 = document.getElementById("box3");

const allBlocks = document.getElementsByClassName("blocks");
const block = document.getElementsByClassName("block");
const blockArray = Array.from(block);


//shift block to right when clicked down
Array.from(block).forEach(function(element) {

    element.addEventListener('mousedown', function () {
        this.style.marginLeft = "30px";
    });
    element.addEventListener('mouseup', function () {
        this.style.marginLeft = "10px";
    })
    element.addEventListener('mouseout', function () {
        this.style.marginLeft = "10px";
    })
    element.addEventListener('click', function () {
        element.parentElement.prepend(element);
    })
});