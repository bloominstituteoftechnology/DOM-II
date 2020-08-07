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

