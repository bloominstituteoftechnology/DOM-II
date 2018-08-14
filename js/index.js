// Your code goes here
let logo = document.querySelector('.logo-heading')
let nav = document.querySelectorAll('.nav a');
let button = document.querySelectorAll('.btn')

logo.addEventListener('dblclick', () => {
    alert('This is NOT clickable!')
});

nav.forEach((a) => {
    a.addEventListener('wheel', () => {
        a.style.fontSize = '2rem';
    });
});


button.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        btn.style.background = 'black';
    });
});
