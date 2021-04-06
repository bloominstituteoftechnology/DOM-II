// Your code goes here
const title = document.querySelector('title');
const body = document.querySelector('body');
const header = document.querySelector('header');
const destination = document.querySelector('.destination')
const letsGoImage = document.querySelector('.content-section .img-content')

body.addEventListener("keydown", event => {
    body.style.backgroundColor = 'cyan';
})

destination.addEventListener("mouseover", event => {
    destination.style.backgroundColor = 'purple';
})

