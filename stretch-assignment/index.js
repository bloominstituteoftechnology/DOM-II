
const blocks = document.querySelector('.blocks');
blocks.addEventListener('click', (event) => {
    const clickColor = event.target.classList[1];
    const topColor = blocks.children[0].classList[1];
    event.target.classList.toggle(`${clickColor}`);
    event.target.classList.toggle(`${topColor}`);
    blocks.children[0].classList.toggle(`${topColor}`);
    blocks.children[0].classList.toggle(`${clickColor}`)    
})
var currentX = 0;
var rocketLaunch = false;
const block = document.querySelectorAll('.block');
block.forEach((ele) => ele.style.position = 'relative');
console.log(block[0].style);
function launchRocket() {
    if (rocketLaunch == true) {
        currentX += 10;
        event.target.style.left = currentX + 'px';
        console.log(event.target.style.left);
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
}, 200);

block.forEach((ele) => ele.addEventListener('mousedown', blastOff, false));
block.forEach((ele) => ele.addEventListener('mouseup', returnToEarth, false));
