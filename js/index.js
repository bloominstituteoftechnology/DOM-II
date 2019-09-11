// Your code goes here
const images = document.querySelectorAll('img');
const introHeader = document.querySelector('.intro h2');
const page = document.querySelector('body');
const header = document.querySelector('header');
const destination = document.querySelector('.content-destination');

const imageArray = Array.from(images);

imageArray.forEach(el => {
  el.addEventListener('mouseenter', event => {
    event.target.classList.add('blur');
  });
  el.addEventListener('mouseleave', event => {
    event.target.classList.remove('blur');
  });
});

introHeader.addEventListener('dblclick', event => {
  event.target.style.color = 'red';
});

page.addEventListener('keydown', event => {
  alert('welcome to the fun bus page');
});

page.addEventListener('wheel', event => {
  event.target.style.background = 'dodgerblue';
});

destination.addEventListener('copy', event => {
  event.target.style.display = 'none';
});

header.addEventListener('wheel', event => {
  event.stopPropagation();
});

window.addEventListener('scroll', event => {
  if (window.scrollY > 0) {
    introHeader.style.border = '2px solid hotpink';
  }
});

window.addEventListener('load', event => {
  alert('Window loaded');
});

window.addEventListener('resize', event => {
  alert('resized');
});

imageArray.forEach(el => {
  el.addEventListener('drag', event => {
    alert('item in not drag and dropable');
  });
});
