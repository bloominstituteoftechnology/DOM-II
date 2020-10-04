// click
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('click', () => logoHeading.style.color = 'red');

// dblclick
const footer = document.querySelector('.footer p');
footer.addEventListener('dblclick', () => footer.style.fontSize = '30px');

// mouseover 
const busImage = document.querySelector('.intro img');
busImage.addEventListener('mouseover', () => busImage.style.border = '3px solid black');

// mouseleave
busImage.addEventListener('mouseleave', () => busImage.style.border = 'none');

// keydown
document.addEventListener('keydown', () => document.body.style.backgroundColor = 'blue');

// keyup
document.addEventListener('keyup', () => document.body.style.backgroundColor = 'white');

// wheel
const colors = ['red', 'blue', 'brown', 'yellow', 'orange', 'purple'];
const random = Math.round(Math.random() * 5);
const body = document.querySelector('body');
body.addEventListener('wheel', () => body.style.backgroundColor = colors[random]);