// Variables


const titleFun = document.querySelector('.logo-heading');
const navFun = document.querySelector('nav');
const introFun = document.querySelector('.intro p');
const imgFun = Array.from(document.querySelectorAll('img'));
const backgroundFun = document.querySelector('body');
const sectionFun = document.querySelector('.content-section');
const paraFun = Array.from(document.querySelectorAll('p'));
const destFun = Array.from(document.querySelectorAll('.destination h4'));
const buttonFun = Array.from(document.querySelectorAll('.btn'));
const footerFun = document.querySelector('.footer');
const secretCode = { 37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
const theCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
let codePosition = 0;


// Functions


function newTitle(event) {
    this.style.display = 'none';
};

function newNav(event) {
    this.style.display = 'none';
};

function newPara(event) {
    paraFun.forEach(item=>{
        item.style.color = 'red';
    });
}

function copyAlert(event) {
    alert('Copied');
}

function pasteAlert(event) {
    alert('Unable to paste!');
}

function boldFont(event) {
    introFun.style.fontSize = '3em';
}

function smallFont(event) {
    introFun.style.fontSize = 'inherit';
}

function highlightText(event) {
    footerFun.style.backgroundColor = 'black';
}

function newButton(event) {
    this.style.backgroundColor = 'pink';
    this.style.fontColor = 'green';
    this.style.fontSize = '5em';
    event.stopPropagation();
}

function newDest(event) {
    this.style.backgroundColor = 'orange';
}

// Prevent
function preventA(event) {
    event.preventDefault();
}

// Konami Stuff
function codeEntered() {
    document.body.style.backgroundImage = 'url("https://i1.sndcdn.com/artworks-000351827607-kwil1b-t500x500.jpg")';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    imgFun.forEach(item=>{
        item.style.display = 'none';
    });
}


// Event Listeners


document.addEventListener('drag', highlightText);
document.addEventListener('keyup', smallFont);
document.addEventListener('keypress', boldFont);
document.addEventListener('paste', pasteAlert);
document.addEventListener('copy', copyAlert);
document.addEventListener('dblclick', newPara);
titleFun.addEventListener('mouseenter', newTitle);
navFun.addEventListener('wheel', newNav);
destFun[0].addEventListener('clicl', newDest);
destFun[1].addEventListener('clicl', newDest);
destFun[2].addEventListener('clicl', newDest);
buttonFun[0].addEventListener('click', newButton);
buttonFun[2].addEventListener('click', newButton);
document.querySelector('a').addEventListener('click', preventA);

document.addEventListener('keydown', function(check) {
    const key = secretCode[check.keyCode];
    const requiredKey = theCode[codePosition];
    if (key === requiredKey) {
        codePosition++;
        if (codePosition === theCode.length) {
            codeEntered();
            codePosition = 0;
        }
    } else {
        codePosition = 0;
    }
});