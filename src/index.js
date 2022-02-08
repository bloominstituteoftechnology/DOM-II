import './less/index.less'

// Your code goes here!
const welcome = document.querySelector('.intro h2');
const words = document.querySelectorAll('p');


function mouseOver () {
    welcome.style.color = 'blue';
}
welcome.addEventListener('mouseover', mouseOver);

function mouseOut() {
    welcome.style.color = 'black';
}

welcome.addEventListener('mouseout', mouseOut);


function oneKey (event) {
    if (event.key === '1') {
        words.forEach(elem => elem.style.fontSize = '2rem');
    }
}
document.addEventListener('keydown', oneKey);