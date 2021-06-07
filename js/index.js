// Your code goes here

// creating variable for nav and mouseover event for text color change nav
const navAnchors = document.querySelector('nav')

navAnchors.addEventListener('mouseover', (event) => {
    event.preventDefault();
    event.target.style.color = 'pink';
    setTimeout(function() {
        event.target.style.color = 'black';
    }, 500);
}, true);

//creating variable for header and mouseover event for header background change
const headerIntro = document.querySelector('header.intro')

headerIntro.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'gold';
    event.target.style.color = 'white'
    setTimeout(function() {
        event.target.style.backgroundColor = 'white';
        event.target.style.color = 'black'
    }, 1000);
}, true);

//creating variable for all h2 titles and event to resize them on mouseover
const titleSelector = document.querySelectorAll('h2')
const enlargeTitles = Array.from(titleSelector)

enlargeTitles.forEach((enlargeTitles) => {
    enlargeTitles.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '7rem'
        setTimeout(function() {
            event.target.style.fontSize = '3rem'
        }, 2000)
    }, true);
});

//creating variable and click event for footer buttons
const button = document.querySelectorAll('.btn')
const buttonArr = Array.from(button)
buttonArr.forEach((buttonArr) => {
    buttonArr.addEventListener('click', (event) => {
        event.target.style.backgroundColor = '#FFAC33';
        event.target.style.color = 'white'
        setTimeout(function() {
            event.target.style.backgroundColor = 'white';
            event.target.style.color = 'black'
        }, 2000);
    }, true);
})

//load event for window added
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

//keydown event
window.addEventListener('keydown', (event) => {
    console.log('the ' + event.key + ' has been pressed.');
})

//window resize event
function reportWindowSize() {
    console.log('window height: ' + window.innerHeight);
    console.log('window width: ' + window.innerWidth)}
  
window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);