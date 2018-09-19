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
  
// 6. On window scroll, background color of home container will change to violet

let homeContainer = document.querySelector('.home')

window.addEventListener('scroll', () => {
homeContainer.style.backgroundColor = "violet"
});

// 7. If you copy anything from page and then try to paste it, the copied content will not appear, rather , a special message will appear instead.

document.addEventListener('copy', function(e){
    e.clipboardData.setData('text/plain', 'Hello, Cesar!');
    e.clipboardData.setData('text/html', '<b>Hello, Cesar!</b>');
    e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
  });

  // 8. If you place the mouse over the bottom footer image and try to right click a message will be displayed in an alert.

let footerImg = document.querySelector('.footer-img');

footerImg.addEventListener('contextmenu', () => {
  alert(`Don't even think about lifting this image!`);
}); 

// 9. Whenever a keyboard key is pressed an alert appears showing what key was pressed

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('key: ' + keyName);
  });

  // 10. When you mouseleave the footer sec the footer copy blows up to 88px
let footerSec = document.querySelector('.footer');
let footerCopy = document.querySelector('.footer-copy');

footerSec.addEventListener('mouseenter', () => {
footerCopy.style.fontsize = '88px';
});





