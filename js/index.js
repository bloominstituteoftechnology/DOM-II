// Your code goes here
const logo = document.getElementsByClassName('logo-heading')[0];
const headerImg = document.querySelectorAll('.intro img')[0];
const textSec = document.querySelectorAll('.text-content p');
const containerHome = document.querySelector('.container.home');
const introLoad = document.querySelector('.intro-load');
const visitMsg = document.getElementById('visit-msg');
const menuItem = document.getElementsByClassName('nav-link');
const destination = document.getElementsByClassName('destination');
const btn = document.querySelectorAll('.btn');

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
for(let i = 0; i < destination.length; i++){
  destination[i].addEventListener('mouseenter', function(event){
    destination[i].style.backgroundColor = 'rgba(160,32,240,0.5)';
    console.log('mouseenter dest');
  })
  destination[i].addEventListener('mouseleave', function(event){
    destination[i].style.backgroundColor = 'inherit';
    console.log('mouseleave dest');
  })
}
for(let i = 0; i < btn.length; i++){
  btn[i].addEventListener('mouseenter', function(event){
    event.stopPropagation();
    btn[i].style.backgroundColor = 'none';
    console.log('click btn');
  })
}
for(let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', function(event){
  event.preventDefault();
  })
}
  


