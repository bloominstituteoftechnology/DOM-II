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
//6 scroll to see teal text 
const bodyText = document.querySelector('body');
function changesBodyText() {
  bodyText.style.color = 'teal';
}
window.addEventListener('scroll', changesBodyText);
//7 logo hover fade in and out
const bussy = document.querySelector('.logo-heading');
bussy.addEventListener('mouseover', function() {
    bussy.style.transform = "scale(1.5)";
    bussy.style.transition = "all .3s ease-in-out";
})
bussy.addEventListener('mouseout', function() {
    bussy.style.transform = "scale(1)";
    bussy.style.transition = "all 1s ease-in-out";
})
//8 the bus song alert
const busAlert = window.addEventListener('load', () => {
    alert('The Wheels on the Bus go Round and Round!');
})
//9 yellow footer when hover
const footer = document.querySelector('footer')
footer.addEventListener('mouseover', (event) => {
    footer.style.background = "yellow";
})
//10 yellow background when hover over destination
const bground = document.querySelector('.content-destination')
bground.addEventListener('mouseover', (event) => {
    bground.style.background = "yellow";
})