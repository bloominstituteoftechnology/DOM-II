// Your code goes here

const nav = document.querySelectorAll('.nav-link')
const paragraph = document.querySelectorAll('p');
const div = document.querySelectorAll('div');
const h2 = document.querySelectorAll('h2');
const img = document.querySelectorAll('img');
const h1 = document.querySelectorAll('h1');
const html = document.querySelectorAll('html');
const h4 = document.querySelectorAll('h4');;
const footer = document.querySelectorAll('footer');


nav.forEach(cb => cb.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
}));
nav.forEach(cb => cb.addEventListener('contextmenu', e => e.target.style.visibility = 'hidden'));


paragraph.forEach(cb => cb.addEventListener('mouseover', e => e.target.style.color = 'red'));
paragraph.forEach(cb => cb.addEventListener('mouseout', e => e.target.style.color = '#212529'));

h2.forEach(cb => cb.addEventListener('dblclick', e => e.target.style.color = 'blue'));
h2.forEach(cb => cb.addEventListener('mouseout', e => e.target.style.color = '#212529'));

img.forEach(cb => window.addEventListener('keydown', () => cb.style.visibility = 'hidden'));
img.forEach(cb => window.addEventListener('keyup', () => cb.style.visibility = 'visible'));

h1.forEach(cb => cb.addEventListener('mouseover', e => e.target.style.color = 'brown'));
h1.forEach(cb => cb.addEventListener('mouseout', e => e.target.style.color = '#212529'));

html.forEach(cb => window.addEventListener('wheel', () => cb.style.fontSize = '75%'));
html.forEach(cb => window.addEventListener('scroll', () => cb.style.textDecoration = 'overline underline'));

h4.forEach(cb => cb.addEventListener('copy', e => e.target.style.color = 'green'));

footer.forEach(cb => cb.addEventListener('click', e => e.target.style.background = 'gray'));






