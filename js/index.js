// Create the reference
const bodyTag = document.querySelector('body');
const navTag = document.querySelectorAll('.main-navigation .nav-link'); 
const headingTag = document.querySelectorAll('h2'); 
const pTag = document.querySelectorAll('p');
const btn = document.querySelectorAll('.btn');

const header = document.querySelector('.main-navigation');

// add event listener to the reference
bodyTag.addEventListener('keydown', (e) => {
    bodyTag.classList.toggle('invisibility');
})

navTag[0].addEventListener('mouseover',(e) => {
    header.classList.toggle('changeBackground');
})

bodyTag.addEventListener('wheel', (e) => {
    e.stopPropagation();
    bodyTag.style.backgroundColor = 'lightgray';
})

pTag[0].addEventListener('mousemove', (e) => {
    e.stopPropagation();
    console.log('u moveover me');
})

window.addEventListener('load',(e) => {
    console.log('website fully load');
})

btn[1].addEventListener('dblclick', (e) => {
    e.stopPropagation();
    btn[1].style.backgroundColor = 'blue';
})

window.addEventListener('scroll', (e) => {
    e.stopPropagation();
    console.log('u are scoll');
})

window.addEventListener('resize', (e) => {
    e.stopPropagation();
    console.log('u are resize');
})

btn[2].addEventListener('contextmenu', (e) => {
    e.stopPropagation();
    console.log('u right-click');
})

window.addEventListener('copy', (e) => {
    e.stopPropagation();
    console.log('just copy a item');
})

for (let i=0; i < navTag.length; i++) {
    navTag[i].addEventListener('click', (e) => {
        e.preventDefault();
    })
}
