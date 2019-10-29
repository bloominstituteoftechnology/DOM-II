// Your code goes here
const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', () => {
   logo.style.color = 'green';
   setTimeout(() => { logo.style.color = '' }, 600);
})