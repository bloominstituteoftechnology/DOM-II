console.log('hello World');
const divs = document.querySelectorAll('div');
const as = document.querySelectorAll('a');


divs[2].addEventListener('mouseover', event => event.target.style.backgroundColor = 'red');
window.addEventListener('resize', event => divs[3].style.transform = 'rotate(20deg)');
window.addEventListener('keydown', event => divs[4].style.transform = 'rotate(20deg)');
window.addEventListener('load', event => divs[5].style.backgroundColor = 'green');
window.addEventListener('scroll', event => divs[6].style.backgroundColor = 'blue');
as[0].addEventListener('focus', event => event.target.style.color = 'purple');
window.addEventListener('wheel', event => as[1].style.color = 'green');
as[2].addEventListener('select', event => event.target.style.color = 'orange');
divs[7].addEventListener('dblclick', event => event.target.style.backgroundColor = 'orange');
as[2].addEventListener('drag', event => event.target.style.color = 'gray');

console.log(divs[7]);
