// Your code goes here


// 1-3 -mouseover + mouseout + click

const nav = document.querySelectorAll('.nav-link');
nav.forEach((e) => e.addEventListener('mouseover', (event) => event.target.style.fontFamily = 'lobster'));
nav.forEach((e) => e.addEventListener('mouseout', (event) => event.target.style.fontFamily = ''));
nav.forEach((e) => e.addEventListener('click', (event) => event.target.style.textDecoration = 'line-through'));


//4 -load

const navbar = document.querySelector('.main-navigation');
window.addEventListener('load', () => {
	navbar.style.background = 'linear-gradient(white, antiquewhite)';
});


// 5 -dblclick


const firstImg = document.querySelector('img');
window.addEventListener('dblclick', () => {
    firstImg.style.opacity = '.09';

});



// 6 -wheel (Ask Josh about adding this to all <p>)
document.querySelector("p").addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "35px";
}


// 7 -keydown

window.addEventListener('keydown', function(e){
    console.log(e);
});



// 4

const para = document.querySelectorAll('p');
para.forEach((e) => e.addEventListener('load', (event) => event.target.style.fontFamily = 'Satisfy'));




//Three

const btns = document.querySelectorAll('.btn');
btns.forEach((eleBtn) => eleBtn.addEventListener('mouseover', (event) => event.target.style.color = 'orange'));





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







//other events


//researched and tried to understand scroll & resize the last few minutes before air table

