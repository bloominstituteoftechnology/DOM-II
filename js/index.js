// Your code goes here

let funBus = document.querySelector('.logo-heading');
let links = document.querySelectorAll('.nav-link');
let body = document.querySelector('body');
let imgs = document.querySelectorAll('.img-content');
let btn = document.querySelector('.btn');
let destination = document.querySelector('.destination')
console.log (destination);


funBus.addEventListener('mouseover', function (event) {
    funBus.style.fontSize = '8rem';
})

funBus.addEventListener('mouseout', function(event) {
    funBus.style.fontSize = '5rem';
})

links.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        item.style.color = 'red';
        console.log('links dont work yet!');
        alert('links dont work yet!');
    })
}) 

window.addEventListener('scroll', function (event) {
    body.style.fontStyle = 'italic';
})

imgs.forEach(function(item) {
    item.addEventListener('mouseover', function(event) {
        item.style.border = '5px solid black';
    })
    item.addEventListener('mouseout', function(event) {
        item.style.border = '';
    })
})

window.addEventListener('wheel', function (event) {
    body.style.fontStyle = 'bold';
})

btn.addEventListener('dblclick', function(event) {
    btn.textContent = 'YOU FOUND SECRET MESSAGE!';
    event.stopPropagation();
})

window.addEventListener('load', function(event) {
    alert('Welcome to FunBus!! 15% off if you sign up now!');
})

window.addEventListener('resize', function(event) {
    alert('dont hurt your eyes!');
})

destination.addEventListener('focus', function(event) {
    alert('what does this do?');
    destination.style.color = 'blue';
})

window.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {
        destination.style.color = 'blue';
    }
})