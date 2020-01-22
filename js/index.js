// Your code goes here

//page load
const pageLoad = document.querySelector('body');
pageLoad.addEventListener('load', event => {
  alert('Welcome to Fun Bus');
});
//Logo
const logoHead = document.querySelector('.logo-heading');
logoHead.addEventListener('mouseover', change => {
  logoHead.style.color = 'red';
  logoHead.style.transform = 'rotate(20deg)';
});

logoHead.addEventListener('mouseout', event => {
  logoHead.style.transform = 'rotate(0deg)';
  logoHead.style.color = 'black';
});

//Bus Image
const funBusImg = document.querySelector('.intro img');
funBusImg.addEventListener('mouseover', change => {
  //   funBusImg.style.transform = 'rotate(20deg)';
  funBusImg.style.filter = 'blur(8px)';
});

funBusImg.addEventListener('mouseout', () => {
  //   funBusImg.style.transform = 'rotate(0deg)';
  funBusImg.style.filter = 'blur(0px)';
});

//Nav
const navItem = document.querySelectorAll('.nav-link');
console.log(navItem);
navItem.forEach(event => {
  event.addEventListener('click', () => {
    event.style.color = 'green';
    event.style.backgroundColor = 'yellow';
    event.style.padding = '10px';
    event.style.borderRadius = '5px';
  });
  event.addEventListener('dblclick', () => {
    event.style.color = 'black';
    event.style.backgroundColor = '#ffebcd';
    event.style.padding = '0px';
    event.style.borderRadius = '0px';
  });
});

//Scroll Navbar color changes
const navBar = document.querySelector('.main-navigation');
window.addEventListener('scroll', () => {
  navBar.style.background = '#ffebcd';
});

//image
const imageContent = document.querySelector('.img-content img');
imageContent.addEventListener('click', event => {
  //   imageContent.style.transform = 'scale(1.2)';
  imageContent.style.transition = 'all 0.5s';
  imageContent.style.transform = 'rotate(180deg)';
});
imageContent.addEventListener('mouseout', event => {
  //   imageContent.style.transform = 'scale(1.2)';
  imageContent.style.transition = 'all 0.10s';
  imageContent.style.transform = 'rotate(360deg)';
});

//z-index for Nav
const zIndex = document.querySelector('.main-navigation');
zIndex.style.zIndex = '1';

//keydown
const kDown = document.querySelector('body');
kDown.addEventListener('keydown', () => {
  kDown.style.backgroundColor = 'red';
});

//KeyUp
const kUp = document.querySelector('body');
kUp.addEventListener('keyup', () => {
  kUp.style.backgroundColor = 'white';
});
