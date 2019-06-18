// Your code goes here


// One

const nav = document.querySelectorAll('.nav-link');
nav.forEach((ele) => ele.addEventListener('mouseover', (event) => event.target.style.color = 'red'));
// nav.forEach((ele) => ele.addEventListener('mouseover', (event) => event.target.style.fontsize = '5rem'));


// Two

const para = document.querySelectorAll('p');
para.forEach((eleP) => eleP.addEventListener('click', (event) => event.target.style.color = 'blue'));


//Three

const btns = document.querySelectorAll('.btn');
btns.forEach((eleBtn) => eleBtn.addEventListener('mouseover', (event) => event.target.style.color = 'orange'));


//Four

const navbar = document.querySelector('.main-navigation');
window.addEventListener('load', () => {
	navbar.style.background = 'linear-gradient(green, white)';
});


//Five

const firstBorder = document.querySelector('.content-section');
window.addEventListener('load', () => {
    firstBorder.style.border = '2rem dashed purple';
});


//Six

const secondBorder = document.querySelector('.inverse-content');
window.addEventListener('load', () => {
    secondBorder.style.border = '1rem solid grey';
});


//Seven

const thirdBorder = document.querySelector('.content-destination');
window.addEventListener('click', () => {
    thirdBorder.style.border = '1rem dotted blue';
});



//Eight


const h1El = document.querySelector('h1');
window.addEventListener('load', () => {
    h1El.style.color = 'pink';
});


//Nine


const h2El = document.querySelector('h2');
window.addEventListener('load', () => {
    h2El.style.color = 'green';
});


//Ten


const firstImg = document.querySelector('img');
window.addEventListener('dblclick', () => {
    firstImg.style.opacity = '.09';
});



//other events

