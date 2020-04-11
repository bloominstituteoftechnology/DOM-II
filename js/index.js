const home = document.querySelector('.nav-link-one');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
const funTimes = document.querySelector('.display');
const form = document.querySelector('.form');
const fauxButton = document.querySelector('.btn');
const destination = document.querySelector('.destination')
localStorage.setItem('title', 'Fun Times!');
home.addEventListener('click', () => alert('You are already on the homepage'));
button.addEventListener('click', () => input.style.display = 'block');
input.addEventListener('keyup', e => funTimes.innerHTML = e.target.value);
form.addEventListener('submit', e =>  {
    localStorage.setItem('time submitted', e.timeStamp)
});
fauxButton.addEventListener('dblclick', () => alert('Are you so bored that you are double clicking random things?'));
destination.addEventListener('mouseenter', e => {
    e.target.style.color = 'red';
    setTimeout(() => {
        e.target.style.color = '';
    }, 500)
}, false);
destination.addEventListener('mouseover', e => {
    e.target.style.color = 'teal';
    setTimeout(() => {
        e.target.style.color = '';
    }, 500)
}, false);
