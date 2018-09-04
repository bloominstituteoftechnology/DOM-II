const block = document.querySelectorAll(".block");
const blockRed = block[0];
const blockBlue = block[1];
const blockGreen = block[2];
const blockPink = block[3];
const blockGrey = block[4];

block.forEach((el) => {
    el.addEventListener('click', function() {
        block.forEach((i) => {
            i.style.order = "0";
        })
        el.style.order = "-1";
    });
})


let event;
block.forEach((el) => {
el.addEventListener('mousedown', function() {
    let xpos = 0;
    event = setInterval(function moveRight(){
    el.style.position = "relative";
    xpos = xpos + 1;
    el.style.left = xpos + "px";
    }, 50);  
});
})

block.forEach((el) => {
el.addEventListener('mouseup', function(){
    if (event) clearInterval(event);
    el.style.left = "0px";
})
})



