// Your code goes here

//h2 mouse hover
const titles = document.querySelectorAll('h2')

titles.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.color = 'chocolate';
        element.style.fontSize = '50px';
    })
});

titles.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.style.color = 'black';
        element.style.fontSize = '3.2rem';
    })
});

//keydown
const body = document.querySelector('body')

body.addEventListener('keydown', () => {
    event.target.style.backgroundColor = 'black';
})

body.addEventListener('keyup', () => {
    event.target.style.backgroundColor = 'white';
})

//stopPropagation
const header = document.querySelector('header')

header.addEventListener('keydown', () => {
    event.stopPropagation();
})

//p mouseover
const paragraph = document.querySelectorAll('p')

paragraph.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'DarkSalmon';
    })
});

paragraph.forEach(element => {
    element.addEventListener('mouseout', () => {
        element.style.color = 'black';
    })
});

//button
const button = document.querySelectorAll('.btn')

button.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'red';
    })
});

//nav
const nav = document.querySelectorAll('a')

nav.forEach(element => {
    element.addEventListener('click', () => {
        element.style.transform = 'scale(1.6)';
    })
});

const navbar = document.querySelector('nav')

navbar.addEventListener('click', () => {
    event.preventDefault();
})

//img right click
const img = document.querySelectorAll('img')

img.forEach(element => {
    element.addEventListener('auxclick', () => {
        element.style.transform = 'scale(1.2)';
    })
});

//h4 wheel
const h4 = document.querySelectorAll('h4')

h4.forEach(element => {
    element.addEventListener('wheel', () => {
        element.style.fontStyle = 'oblique';
    })
});