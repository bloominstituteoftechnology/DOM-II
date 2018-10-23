const block = document.querySelectorAll('.block');

block.forEach((item) => item.addEventListener('dblclick', (event) => {
    const clickColor = event.target.classList[1];
    const topColor = block[0].classList[1];
    event.target.classList.toggle(`${clickColor}`);
    event.target.classList.toggle(`${topColor}`);
    block[0].classList.toggle(`${topColor}`);
    block[0].classList.toggle(`${clickColor}`)    
}))
var currentX = 0;
var rocketLaunch = false;

block.forEach((ele) => ele.style.position = 'relative');
function launchRocket() {
    if (rocketLaunch == true) {
        currentX += 2;
        event.target.style.left = currentX + 'px';
    }
}
function blastOff() {
    rocketLaunch = true;
    launchRocket();
}
function returnToEarth() {
    rocketLaunch = false;
}
setInterval(launchRocket, 200);

block.forEach((ele) => ele.addEventListener('mousedown', blastOff, false));
block.forEach((ele) => ele.addEventListener('mouseup', returnToEarth, false));
