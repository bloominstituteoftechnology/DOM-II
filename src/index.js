import './less/index.less'

// Your code goes here!
//elements
const welcome = document.querySelector('.intro h2');
const words = document.querySelectorAll('p');
const busImage = document.querySelector('.intro img');
const heading = document.querySelector('h1');
const destinations = document.querySelectorAll('.destination');

// 1- mouseover

function mouseOver () {
    welcome.style.color = 'blue';
}
welcome.addEventListener('mouseover', mouseOver);

// 2-mouseout

function mouseOut() {
    welcome.style.color = 'black';
}

welcome.addEventListener('mouseout', mouseOut);

// 3-keydown

function oneKey (event) {
    if (event.key === '1') {
        words.forEach(elem => elem.style.fontSize = '2rem');
    }
}
document.addEventListener('keydown', oneKey);

// 4-copied

function copied () {
    alert('You copied text!');
}

document.addEventListener('copy', copied);

// 5-dblclick

function hide () {
    if(busImage.style.opacity > 0){
    busImage.style.opacity = '0';
    } else {
        busImage.style.opacity = '1';
    }
}

busImage.addEventListener('dblclick', hide);

// 6-onload
window.onload = function () {
    heading.textContent = 'READY TO GO!!';
}

// 7-click
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror');
});

// 8-mousemove
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    console.log(`mouse is at ${clientX}, ${clientY}`);
})

// preventDefault

document.body.addEventListener('mousemove', function(evt){
    evt.preventDefault();
    console.log('Mouse location unknown');
})

// 9 -mouseenter

for ( let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold';
    })
    // 10 -mouseleave
    destination.addEventListener('mouseleave', () => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial';
        }, 300 );
    })
}