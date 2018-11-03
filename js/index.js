// Your code goes here
const body = document.querySelector('body');

document.addEventListener('keypress', function (event) {
    body.classList.toggle('colorWheelToggle');
});

body.addEventListener('copy', function(event){
    event.target.style.visibility = 'hidden';
});

body.addEventListener('wheel', function(event){
    event.target.style.backgroundColor = 'red';
});

body.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = 'green';
});

body.addEventListener('resize', function(event){
    event.target.style.backgroundColor = 'yellow';
});





const images = document.querySelector('img');

images[0].addEventListener('mouseenter', function(event) {
    const str = event.target.width - 250;
    event.target.style.width = `${str}px`.toString()
});

images[0].addEventListener('mouseleave', function(event) {
    const str = event.target.width + 250;
    event.target.style.width = `${str}px`.toString()
});

const headers = document.querySelectorAll('h2');

headers.forEach(header => {
    header.addEventListener('drag', function() {
        header.classList.add('changeColor');
    });
});

const buttons = document.querySelectorAll('.btn');

buttons.addEventListener('dblclick', function(event) {
    event.target.style.color = 'blue';
})