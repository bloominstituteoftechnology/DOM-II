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

