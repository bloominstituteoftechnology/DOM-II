// Your code goes here
const navText = document.querySelector(".main-navigation").addEventListener(click, function(thisIsTheNav));

const expandedImage = document.addEventListener('fullscreenchange', (click) => {
    if (document.fullscreenElement) {
      console.log(`Element: ${document.intro.img.id} entered full-screen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  });
  
const navFocus = document.querySelector('nav');

  password.addEventListener('focus', (hover) => {
    event.target.style.background = 'pink';
  });
  
  password.addEventListener('blur', (hover) => {
    event.target.style.background = 'white';
  });














function thisIsTheNav() {
    alert ("This is the nav bar!");
}