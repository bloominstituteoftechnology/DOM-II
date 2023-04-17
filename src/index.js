import './less/index.less';

// Your code goes here!
document.querySelector('.nav').addEventListener('mouseover', (event) => {
  event.target.style.color = 'red';
});

document.addEventListener('keydown', () => {
  document
    .querySelector('.main-navigation')
    .classList.toggle('main-navigation-keydown');
});
