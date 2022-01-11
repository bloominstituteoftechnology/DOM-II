import './less/index.less'

// Your code goes here!
const logo = document.querySelector('.logo-heading');
logo.addEventListener('pointerover', (event) => { 
    event.target.style.fontSize = '10rem';
    event.stopImmediatePropagation();
});


const links = document.querySelectorAll('nav a');
links.forEach(function(link) {
    link.addEventListener('mouseover', event => {
        event.target.style.fontWeight = 'bold';
        event.preventDefault();
})
})


const image = document.querySelectorAll('img');
image.forEach(img => {
    img.addEventListener('click', function(event){
        event.target.style.border = 'skyblue 20px solid';
    })
})


document.querySelectorAll('*').forEach(element => {
    element.addEventListener('pointermove', event => {
        console.log(`Target: ${event.target}`);
        console.log(`Current Target: ${event.currentTarget}`);
    })
})


document.querySelectorAll('*').forEach(element => {
    element.addEventListener('copy', event => {
        console.log(`Copied ${event.target}`);
    })
})


const button = document.querySelectorAll('.btn');
button.forEach(element => {
    element.addEventListener('dblclick', event => {
        event.target.style.backgroundColor = 'red';
    })
})


function keys(event) {
    console.log(event.key);
}
document.addEventListener('keydown', keys);


function load() {
    console.log('Page has loaded!');
}
document.addEventListener('DOMContentLoaded', load);



document.querySelectorAll('*').forEach(element => {
    element.addEventListener('focus', event => {
        console.log(`Focused here: ${event.currentTarget}`);
    }, true);
})


function scroll() {
    console.log('Scrolling');
}
document.addEventListener('scroll', scroll);


