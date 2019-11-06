// Your code goes here
const navBar = document.querySelector('.main-navigation');
navBar.addEventListener('dblclick', () => {
    navBar.style.backgroundColor = 'blue';
    navBar.stopPropogation();
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {        
        link.style.color = 'white';
    })
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = 'green';
    })
})

const content = document.querySelectorAll('.content-section');
content.forEach(thing => {
    thing.addEventListener('mousedown', () => {
        thing.style.backgroundColor = 'purple';
    })
})

content.forEach(thing => {
    thing.addEventListener('mouseup', () => {
        thing.style.backgroundColor = 'green';
    })
})

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('contextmenu', () => {
        button.style.backgroundColor = 'red';
    })
})

const img = document.getElementsByTagName('img');
let arr = Array.from(img);
arr.forEach(image => {
    image.addEventListener('load', () => {
        image.style.visibility = 'hidden';
    })
})

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'orange';
    })
})

buttons.forEach(button => {
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'blue';
    })
})

content.forEach(thing => {
    thing.addEventListener('copy', () => {
        thing.style.color = 'yellow';
    })
})