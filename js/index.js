// Your code goes here
const busTitle = document.querySelector('.intro').querySelector('h2');
const body = document.querySelector('.home')
const busPar = document.querySelector('.intro').querySelector('p');
// console.log(par);
// console.log(introsec);

// #1 Bus title turn to caps on click
busTitle.addEventListener('click', (e) => {
  busTitle.classList.toggle('caps');
});

// #2 nav bar color change on hover
const header = document.querySelector('header');
header.addEventListener('mouseover', (e) => {
  header.classList.add('newNav');
})

// #3 nav bar change colors back, on body hover
header.addEventListener('mouseleave', (e) => {
  header.classList.remove('newNav');
})

// #4 change body background color on keypress
document.addEventListener('keydown', (e) => {
  if (e.key == " ") {
    body.classList.toggle('yellow');
  }
})
// #5 change body background color on keyup
document.addEventListener('keyup', (e) => {
  if (e.key == " ") {
    body.classList.toggle('yellow');
  }
})

// #6 change text on copy
busTitle.addEventListener('copy', (e) => {
  busTitle.textContent = 'I saw you copy this'
})

// #7 
busTitle.addEventListener('dblclick', (e) => {
  busTitle.textContent = 'So much fun!'
})

document.addEventListener('scroll', (e) => {
  busTitle.textContent = `Don't scroll away!`
})

// #8 
busTitle.addEventListener('paste', (e) => {
  busTitle.textContent = `What did you paste`
})
// #9 
busTitle.addEventListener('contextmenu', (e) => {
  busTitle.textContent = `What did you view`
})
// #10 
busPar.addEventListener('wheel', (e) => {
  busPar.textContent = 'wheel scroll'
})
document.querySelector('a').addEventListener('click', event => {
  event.preventDefault();
})