// Your code goes here
const bus = document.querySelector('.intro');

bus.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
});

const cool = document.querySelector('.main-navigation');
// console.log(cool);

cool.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'purple';
});
  
const adventure = document.querySelector('.img-content');
//  console.log(adventure);

adventure.addEventListener('click', (event) => {
    event.target.src = 'https://images.unsplash.com/photo-1496154704336-6c88a94a019a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
});

const tinyBus = document.querySelector('.intro img');
// console.log(tinyBus);

tinyBus.addEventListener('mouseenter', () => {
    tinyBus.style.transform = 'scale(1.2)';
    tinyBus.style.transition = 'transform 1s';
});

tinyBus.addEventListener('mouseleave', () => {
    tinyBus.style.transform = 'scale(1)';
    tinyBus.style.transition = 'transform 1s';
});

const body = document.querySelectorAll('img');
// console.log(body);

window.addEventListener('resize', () => {
    body.forEach((pic) => {
        pic.src = 'https://images.unsplash.com/photo-1478359900967-91ec0c6edc60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80';
    });
});

document.addEventListener('keydown', () => {
    alert('You Pressed a key');
});

document.addEventListener('wheel', () => {
    alert('You scrolled with the wheel');
});