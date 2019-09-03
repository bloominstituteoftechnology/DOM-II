// Your code goes here
// const smallBus = document.querySelector('.intro img');
// smallBus.addEventListener('mouseover', e => {
// })


//mouse over
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', e => event.target.style.color = 'red');


//key down



//Load
window.addEventListener('load', e => console.log('PAGE IS LOADED'));

//dbl click
const card = document.querySelector('btn');

card.addEventListener('dblclick', function (e) {
  card.e.toggle('large');
});