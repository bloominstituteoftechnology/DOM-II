// Your code goes here
//Initial commit 

// * Create 10 unique event listeners 

// 1. changes 'Fun in The Sun CTA font from red to blue' on dblclick
let grabButton = document.querySelector('.destination');

let buttonCTA = document.querySelector('.btn');

grabButton.addEventListener('dblclick', () => {
    buttonCTA.style.color = 'blue';
});

// 2. on mousing over hero banner, the header section disapears
let heroBannerSec = document.querySelector('.intro');

heroBannerSec.addEventListener('mouseenter', () => {
heroBannerSec.style.display = 'none';

})

//3. Right clicking on Fun Bus logo will make the header section reappear.
let logo = document.querySelector('.logo-heading');

logo.addEventListener('contextmenu', () => {
    heroBannerSec.style.display = 'inline';
    });

// 4. Home Nav item has its font size blow up to 88px when the browser window is resized

let homeNav = document.querySelector('.nav-link');

window.addEventListener('resize', () => {
    homeNav.style.fontSize = '88px';
  });

  // 5. On page load an alert will appear

window.addEventListener('load', () => {
    alert('Alakazam! Prepare to be amazed by another Lambda School project! This alert displays because it has an event listener that is triggered by the initial page load.')
  }); 
  





