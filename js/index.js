const home = document.querySelector('.nav-link-one');
const button = document.querySelector('.button');
const input = document.querySelector('.input');
const funTimes = document.querySelector('.display');
const form = document.querySelector('.form');
localStorage.setItem('title', 'Fun Times!');
home.addEventListener('click', () => alert('You are already on the homepage'));
button.addEventListener('click', () => input.style.display = 'block');
input.addEventListener('keyup', e => funTimes.innerHTML = e.target.value);
form.addEventListener('submit', e =>  {
    localStorage.setItem('time submitted', e.timeStamp)
});
