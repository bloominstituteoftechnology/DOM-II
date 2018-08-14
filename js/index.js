// Your code goes here
const btn = document.querySelectorAll('.btn')

btn[0].addEventListener('mouseover', () => {
    btn[0].style.color = 'orange';
});

btn[0].addEventListener('mouseout', () => {
    btn[0].style.color = 'white';
});

btn[1].addEventListener('click', () => {
    btn[1].classList.toggle('scaled');
});

btn[2].addEventListener('dblclick', () => {
    btn[2].classList.toggle('transformed');
});

const busImg = document.querySelector('.fun-bus-img')

busImg.addEventListener('mousemove', () => {
    busImg.classList.toggle('black-and-white');
});

const homePage = document.querySelector('.home')

window.addEventListener('keydown', () => {
    homePage.style.color = 'blue';
});

window.addEventListener('keypress', () => {
    homePage.style.color = 'orange';
    homePage.style.backgroundColor = 'white';
});

window.addEventListener('scroll', () => {
    homePage.style.backgroundColor = 'pink';
});

window.addEventListener('keyup', () => {
    homePage.style.color = 'black';
});

