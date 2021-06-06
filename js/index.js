// Your code goes here
const logo = document.querySelector('.logo-heading')
let run = true;
logo.addEventListener('mouseover', event => {
    if (run === true) {
        let elem = document.getElementById("bus"),
            speed = 15,
            currentPos = 0;
        elem.style.top = window.screen.height/2 + "px";
        elem.style.left = 0+"px";
        run = false;
        elem.style.display = "block";
        elem.style.position = "fixed";
        let motionInterval = setInterval(function() {
            currentPos += speed;
            if (currentPos >= window.screen.width && speed > 0) {
            currentPos = 0;
            speed = -1;
            elem.style.left = 0+"px";
            elem.style.display = "none";
            run = true;
            }
            if (currentPos <= 0 && speed < 0) {
            clearInterval(motionInterval);
            }
            elem.style.left = currentPos+"px";
        },30);
    }
});

const busimg = document.querySelector('#sandbus');

busimg.addEventListener('click', event => {
    var honk = document.getElementById("honk");
    honk.play();
})