// Your code goes here
const logo = document.getElementsByClassName('logo-heading')[0];
const headerImg = document.querySelectorAll('.intro img')[0];
const textSec = document.querySelectorAll('.text-content p');
const containerHome = document.querySelector('.container.home');
const introLoad = document.querySelector('.intro-load');
const visitMsg = document.getElementById('visit-msg');
const menuItem = document.getElementsByClassName('nav-link');
console.log(introLoad)

logo.addEventListener('mouseenter', function(event){
  event.target.style.color = 'pink';
})
logo.addEventListener('mouseleave', function(event){
  event.target.style.color = 'inherit';
})
headerImg.addEventListener('dblclick', function(event){
  TweenMax.to(headerImg, 2, {rotation:360});
})
document.addEventListener('keydown', function(event){
  for (let i = 0; i < textSec.length; i++){
    textSec[i].style.color = 'blue';
  }
})
document.addEventListener('drag', function(event){
  containerHome.style.background = 'red';
})
document.addEventListener('dragend', function(event){
  containerHome.style.background = 'inherit';
})
document.addEventListener('select', function(event){
  event.target.style.backgroundColor = 'purple';
})
window.addEventListener('load', function(event){
  introLoad.textContent = 'The page is done loading!';
  introLoad.style.textAlign = 'center';
  introLoad.style.textTransform = 'uppercase';
  introLoad.style.margin = '20px 0 10px 0';
})
document.addEventListener('scroll', function(event){
  visitMsg.style.display = 'block';
  visitMsg.textContent = "Thanks for visiting our site! Scroll to the bottom to sign up for a package!";
})
window.addEventListener('resize', function(event){
  this.alert(`I've been resized!`);
})