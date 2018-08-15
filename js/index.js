// Your code goes here
let logo = document.querySelector('.logo-heading')
let nav = document.querySelectorAll('.nav a');
let button = document.querySelectorAll('.btn');
let home = document.querySelector('.home');
let mainNav = document.querySelector('.main-navigation');
let footer = document.querySelector('.footer');
let ctaTitle = document.querySelector('.intro h2');
let funBus = document.querySelector('.fun-bus');
const parentContainer = document.querySelector('.home');


logo.addEventListener('dblclick', () => {
    alert('Calm down!')
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

window.addEventListener('keydown', (e) => {
    const keyName = e.key;
    alert('key: ' + keyName);
});

window.addEventListener('scroll', () => {
    home.style.background = '#FFC0CB'
});
window.addEventListener('scroll', () => {
    footer.style.background = '#FFC0CB'
});


mainNav.addEventListener('onresize', () => {
    mainNav.style.background = 'yellow';
  });

