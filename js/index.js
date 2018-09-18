// Your code goes here
let logoHeading = document.querySelector('.logo-heading');
let navA = document.querySelectorAll('.nav-link');
let headerImg = document.querySelector('.intro img');
let headerH2 = document.querySelector('.intro h2');

window.addEventListener('load', () => {
  document.body.style.backgroundColor = 'lightgrey';
})

window.addEventListener('keydown', e => {
  headerH2.innerText = 'Welcome to Fun ' + e.key + 'us!';
})

logoHeading.addEventListener('click', () => {
  headerImg.classList.toggle('busTrip');
})

navA.forEach(link => link.addEventListener('click', e => { e.preventDefault() }))

headerImg.addEventListener('mouseover', () => {
  headerImg.style.opacity = '0.3';
})
headerImg.addEventListener('mouseleave', () => {
  headerImg.style.opacity = '1';
})

