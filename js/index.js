// Your code goes here

const button = document.querySelector('.btn');

button.addEventListener('click', event => {
    button.textContent = `click count: ${event.detail}`;
});


const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'lightblue';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});