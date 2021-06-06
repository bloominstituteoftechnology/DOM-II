// Your code goes here
const logo = document.querySelector('.logo-heading')
let run = true;

const content = document.querySelector('.content-section')
const bus = document.createElement('img')
bus.src = "bus.png"
bus.setAttribute('id', 'bus')
bus.setAttribute('style', 'display: none')
content.appendChild(bus)

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
    };
});


const intro = document.querySelector('.intro');
const busimg = intro.querySelector('img');

busimg.addEventListener('click', event => {
    var honk = document.createElement("AUDIO");
    honk.src = "horn.mp3"
    honk.play();
});

const welcome = document.querySelector('.intro > h2');
let isRed = false;
welcome.addEventListener('dblclick', event => {
    if (isRed === false) {
        event.currentTarget.style.color = "red";
        isRed = true;
    } else {
        event.currentTarget.style.color = "black";
        isRed = false;
    }
});

let isBig = false
document.addEventListener('keydown', event => {
    if (isBig === false) {
        document.querySelector('h1').style.fontSize = '5rem';
    isBig = true;
    } else {
        document.querySelector('h1').style.fontSize = '3.2rem';
    isBig = false;
    }
});


const mapImg = document.querySelector('nav')
document.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        mapImg.style.opacity = '1'
    } else {
        mapImg.style.opacity = '0'
    }
})