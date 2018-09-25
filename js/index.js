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

document.addEventListener('cut copy paste', (event) => {

    alert('This content is copyright protected!');
    event.preventDefault();

});

navItems.addEventListener('click', (event) => {

    event.preventDefault();

});

intro.addEventListener('dblclick', (event) => {

    intro.style.display = 'none';

});

btn.addEventListener('mouseup', (event) => {

    //event.stopPropagation();
    alert('Adventure Time!');

});

sunFun.addEventListener('mouseover', (event) => {

    sunFun.style.cursor = 'pointer';

});


sunFun.addEventListener('mousedown', (event) => {

    console.log('Fun In The Sun!');

});


