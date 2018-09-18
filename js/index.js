// Your code goes here
let logoHeading = document.querySelector('.logo-heading');
let navA = document.querySelectorAll('.nav-link');
let headerImg = document.querySelector('.intro img');
let headerH2 = document.querySelector('.intro h2');
let contentImg = document.querySelectorAll('.img-content img');
let btns = document.querySelectorAll('.btn');

window.addEventListener('load', () => {
  TweenMax.from(document.body, 2.5, {opacity: 0});
})
window.addEventListener('keydown', e => {
  headerH2.innerText = 'Welcome To Fun ' + e.key + 'us!';
})
window.addEventListener('scroll', () => {
  contentImg[0].classList.toggle('imgRotate');
})
window.addEventListener('resize', e => {
  let newP = document.createElement('p');
  headerImg.parentNode.prepend(newP);
  newP.innerText = 'Width: ' + e.target.innerWidth + ' Height: ' + e.target.innerHeight;
})

logoHeading.parentNode.addEventListener('mouseover', () => {
  logoHeading.innerText = 'Click me!';
})
logoHeading.parentNode.addEventListener('mouseleave', () => {
  logoHeading.innerText = 'Fun Bus';
})
logoHeading.addEventListener('click', e => {
  e.stopPropagation();
  headerImg.classList.toggle('busTrip');
})

navA.forEach(link => link.addEventListener('click', e => { e.preventDefault(); e.stopPropagation() }))
navA[0].addEventListener('focus', () => {
  navA.forEach(item => item.style.color = 'blue');
})
navA[1].addEventListener('focus', () => {
  navA.forEach(item => item.style.color = 'green');
})
navA[2].addEventListener('focus', () => {
  navA.forEach(item => item.style.color = 'red');
})
navA[3].addEventListener('focus', () => {
  navA.forEach(item => item.style.color = 'purple');
})

headerImg.addEventListener('mouseover', () => {
  TweenMax.to(headerImg, 1, {opacity: 0.3});
})
headerImg.addEventListener('mouseleave', () => {
  TweenMax.to(headerImg, 1, {opacity: 1});
})

contentImg[1].addEventListener('drag', e => {
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},100)`;
})

btns.forEach(btn => btn.addEventListener('dblclick', () => {
  btn.style.backgroundColor = 'white';
  btn.style.color = '#00a5bb';
}))