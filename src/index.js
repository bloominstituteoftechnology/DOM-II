import './less/index.less'

// Your code goes here!

//1 - underline nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link){
    link.addEventListener('mouseover', function() {
        link.style.textDecoration = 'underline';
    })
})
//2 click fun bus logo
const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => {
    logo.style.fontSize = '55px';
    logo.style.color = 'yellow';
});
//3 scroll to see yellow divider
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.style.borderBottom = "thick solid yellow";
});
//4 scroll to see second yellow divider
const section = document.querySelector('section');
window.addEventListener('scroll', () => {
    section.style.borderBottom = "thick solid yellow";
});
//5 click button 1 to increase font
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    btn.style.fontSize = '55px';
});
 
  