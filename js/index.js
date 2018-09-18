// Your code goes here

let imageBus = document.querySelector('.img1');
window.addEventListener('keydown', (e) => {
  imageBus.classList.toggle('display-none');
})

let wheels = document.querySelector('.wtfb');
let letsGo = document.querySelector('.firstOne');
window.addEventListener('wheel',  (e) => {
  document.querySelector('.firstOne').textContent = 'All the way to town!';
  document.querySelector('.wtfb').textContent = 'The whells on the bus go round and round!';
});


let adventure = document.querySelector('.map');
window.addEventListener('drag', (e) => {
  adventure.classList.add('greyscale');
});

let funSun = document.querySelector('.canal');
document.addEventListener('dblclick', (e) => {
  funSun.classList.add('zoom');
});

let funBus = document.querySelector('.logo-heading');
let bottomImage = document.querySelector('.boat');
let mountain = document.querySelector('.fifthOne');
window.addEventListener('mouseover', (e) => {
  mountain.classList.toggle('blur');
  bottomImage.classList.toggle('flash');
  document.querySelector('.logo-heading').textContent = 'suB nuF';
});


const logo = document.querySelector('.logo-heading');
logo.addEventListener('mousedown', (e) => {
    event.stopPropagation();
});

const mainNav = document.querySelector('.main-navigation');
let navItems = document.querySelectorAll('.nav-link');

navItems.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
