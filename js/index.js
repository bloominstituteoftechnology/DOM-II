// Your code goes here
const navLogo = document.querySelector('.logo-heading'); // pointer cursor
const mainNav = document.querySelector('.main-navigation'); // takes to top of page upArrow
const introSec = document.querySelector('.intro'); //  nav bar color change wheel
// const subHeading = document.querySelector('h2'); // make h2 bigger onLoad 
const btns = document.querySelector('.btn'); // sign up scale transition onFocus
const bodyHolder = document.querySelector('body'); // change font onResize
const bodyScroll = document.querySelector('body'); // change background onScroll
const mainText = document.querySelector('.text-content'); //change picture of h2 elelment onSelect
const footerText = document.querySelector('.footer');// blue color for footer onDblclick
const img = document.querySelectorAll('.img-content'); // hide imgs onDrgDrp
const password = document.querySelector('input[type="password"]');
const forms = document.querySelector('forms');

document.addEventListener('mouseover', function (event){
  if(event.target === forms)
  forms.style.margin = "1% 50%"
});

document.addEventListener('keydown', function (event){
  if(event.target === 'ArrowUp')
  scrollToTop();
});

window.addEventListener('load', function (event){
  alert('The page has fully loaded')
});

window.addEventListener('wheel', function (event){
  mainNav.style.backgroundColor = 'skyblue'
});

password.addEventListener('focus', (event) => {
  password.style.background = 'skyblue';    
})

password.addEventListener('blur', (event) => {
  password.style.background = 'skyblue';    
})

window.addEventListener('resize', function (event){
  navLogo.textContent="Dont Resize Me!"
});

window.addEventListener('scroll', function (event){
  bodyScroll.style.backgroundColor = 'salmon'
});

btns.addEventListener('click', function(event){
  bodyScroll.style.backgroundColor= "yellow";  
});

img[0].addEventListener('dblclick', (event) =>{
  bodyScroll.style.backgroundColor = 'lightgrey'
});
img[1].addEventListener('dblclick', (event) =>{
  bodyScroll.style.backgroundColor = 'lightgrey'
});




function scrollToTop() {
  window.scrollToTop(0, 0);
}