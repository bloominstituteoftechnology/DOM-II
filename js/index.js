// Your code goes here
const bus = document.querySelector('.intro');

bus.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
});

const cool = document.querySelector('.main-navigation');
console.log(cool);

cool.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'purple';
});
  