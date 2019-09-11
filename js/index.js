// Your code goes here
const images = document.querySelectorAll('img');
const page = document.querySelector('body');

const imageArray = Array.from(images);

imageArray.forEach(el => {
  el.addEventListener('mouseenter', event => {
    event.target.classList.add('blur');
  });
  el.addEventListener('mouseleave', event => {
    event.target.classList.remove('blur');
  });
});
