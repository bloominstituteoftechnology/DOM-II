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


