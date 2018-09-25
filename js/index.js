// Your code goes here
const home = document.querySelector('.home');
const navItems = document.querySelector('nav');
const intro = document.querySelector('.intro');
const sunFun = document.querySelector('h4');
const btn = document.querySelector('.btn');


document.addEventListener('keypress', (event) => {

    const logKey = event.key;

    console.log(logKey);

});

document.addEventListener('scroll', (event) => {

    let scrollDistance = 0;

    scrollDistance = scrollDistance++;

    console.log(scrollDistance);

});

navItems.addEventListener('click', (event) => {

    event.preventDefault();

});

intro.addEventListener('dblclick', (event) => {

    intro.style.display = 'none';

});

btn.addEventListener('click', (event) => {

    //event.stopPropagation();
    alert('Adventure Time!');

});

sunFun.addEventListener('mouseover', (event) => {

    sunFun.style.cursor = 'pointer';

});


sunFun.addEventListener('click', (event) => {

    console.log('Fun In The Sun!');

});


