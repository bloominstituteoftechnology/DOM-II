// Create the reference
const bodyTag = document.querySelector('body');
const navTag = document.querySelectorAll('.main-navigation .nav-link'); 
const headingTag = document.querySelectorAll('h2'); 
const pTag = document.querySelectorAll('p');
const btn = document.querySelectorAll('.btn');
const img = document.querySelectorAll('img');

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
    e.currentTarget.style.backgroundColor = 'lightgray';
})

pTag[0].addEventListener('mousemove', (e) => {
    e.stopPropagation();
    img[0].removeAttribute('src');
})

window.addEventListener('load',(e) => {
    console.log('website fully load');
})

btn[1].addEventListener('dblclick', (e) => {
    e.stopPropagation();
    e.target.style.backgroundColor = 'blue';
})

window.addEventListener('scroll', (e) => {
    e.stopPropagation();
    pTag[1].style.color = 'red';
})

window.addEventListener('resize', (e) => {
    e.stopPropagation();
    pTag[2].style.color = 'green';
})

btn[2].addEventListener('contextmenu', (e) => {
    e.stopPropagation();
    pTag[3].style.color = 'yellow';
})

window.addEventListener('copy', (e) => {
    e.stopPropagation();
    pTag[4].style.color = 'purple';
})

for (let i=0; i < navTag.length; i++) {
    navTag[i].addEventListener('click', (e) => {
        e.preventDefault();
    })
}
