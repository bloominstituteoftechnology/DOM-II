// Your code goes here
let logo = document.querySelector('.logo-heading');

let black = logo.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor ='black';
});
let removeBlack = logo.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor ='white';
});
/////////////////////

let nav= document.querySelectorAll('nav a')[0];
console.log(nav);
nav.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor ='green';
});
nav.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor ='white';
});

let scale = 1;
let nav1 = document.querySelectorAll('nav a')[1];
nav1.addEventListener('wheel', function zoom (event) {
      event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  nav1.style.transform = `scale(${scale})`;

});


//element.addEventListener('drag / drop', (event) => {//Handle event});
//element.addEventListener('load', (event) => {//Handle event});
//element.addEventListener('focus', (event) => {//Handle event});
//element.addEventListener('resize', (event) => {//Handle event});
//element.addEventListener('scroll', (event) => {//Handle event});
//element.addEventListener('select', (event) => {//Handle event});
//element.addEventListener('dblclick', (event) => {//Handle event});
