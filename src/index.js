import './less/index.less'

// Your code goes here!
const navLink = document.querySelector('header .nav .nav-link')
const logoHeading = document.querySelector('.logo-heading')
const busImg = document.querySelector('.intro img')
const h2Text = document.querySelectorAll('h2')
const imgContent = document.querySelector('.content-section img')
const lastImg = document.querySelector('.content-destination img')

navLink.addEventListener('mouseover', evt => {
    
    navLink.style.color = 'red';
  

})
logoHeading.addEventListener('mousedown', evt => {
   
   logoHeading.style.backgroundColor = 'yellow';
});
logoHeading.addEventListener('mouseup', evt => {
   console.log('Mouse is up!');
   logoHeading.style.backgroundColor = 'red';
});
busImg.addEventListener('dblclick', evt => {
   busImg.style.opacity = '50%';
});
window.addEventListener('scroll', () => {
   const scrolls = document.documentElement.scrollHeight - window.innerHeight;
   const scrolling = window.scrollY;

   if (Math.ceil(scrolling) === scrolls) {
       alert('You have reached the bottom of the Fun Bus baby!');
   }
});
imgContent.addEventListener('')