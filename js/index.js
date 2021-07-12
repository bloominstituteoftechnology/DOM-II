// Your code goes here
//very simple events
//mouseover
let introHead = document.querySelector('.intro h2');
introHead.addEventListener('mouseover', function() {
  introHead.style.color = '#ef4a49';
});
//keydown
document.addEventListener('keydown', function() {
  console.log('page moving down');
});
//wheel
document.addEventListener('wheel', function() {
  console.log('scroll wheel activated');
});
//load
let logo = document.querySelector('.logo-heading');
document.addEventListener('load', function() {
  logo.style.textDecoration = '#fcb84b wavy underline;'
});
//focus
document.addEventListener('focus', function() {
  event.target.style.background = 'pink';
});
//resize
window.addEventListener('resize', function() {
  logo.style.fontSize = '50px';
});
//scroll
document.addEventListener('scroll', function() {
  console.log('scrolling');
});
//select
document.querySelector('.footer p').addEventListener('select', function() {
  console.log('what are you doing in the footer?');
});
//dlbclick
document.querySelectorAll('nav a')[0].addEventListener('dblclick', function () {
  console.log('navigating');
});
