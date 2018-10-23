const block = document.querySelectorAll('.block');
// const blocks = document.querySelector('.blocks');
block.forEach((item) => item.addEventListener('click', (event) => {
    const clickColor = event.target.classList[1];
    const topColor = block[0].classList[1];
    event.target.classList.toggle(`${clickColor}`);
    event.target.classList.toggle(`${topColor}`);
    block[0].classList.toggle(`${topColor}`);
    block[0].classList.toggle(`${clickColor}`)    
}))

// blocks.addEventListener('click', (event) => {
//     const clickColor = event.target.classList[1];
//     const topColor = blocks.children[0].classList[1];
//     event.target.classList.toggle(`${clickColor}`);
//     event.target.classList.toggle(`${topColor}`);
//     blocks.children[0].classList.toggle(`${topColor}`);
//     blocks.children[0].classList.toggle(`${clickColor}`)    
// })
var currentX = 0;
var rocketLaunch = false;
block.forEach((ele) => ele.style.position = 'relative');
console.log(block[0].style);
function launchRocket() {
    if (rocketLaunch == true) {
        currentX += 1;
        event.target.style.left = currentX + 'px';
        event.stopPropagation();
    }
}
function blastOff() {
    rocketLaunch = true;
    launchRocket();
}
function returnToEarth() {
    rocketLaunch = false;
}
setInterval(function () {
    launchRocket();
}, 500);

block.forEach((ele) => ele.addEventListener('mousedown', blastOff, false));
// block.forEach((ele) => ele.addEventListener('onmouseup', returnToEarth, false));
