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

document.querySelector('.intro img').addEventListener('wheel', () => {
  document.querySelector('.intro img').style.transform = 'rotate(180deg)';
});

window.addEventListener('load', () => {
  alert('Welcome to the Fun Bus website!');
});

document.querySelector('.nav-link').addEventListener('focus', (event) => {
  event.target.style.background = 'yellow';
});

window.addEventListener('resize', () => {
  document.querySelector('.logo-heading').style.fontSize = '2rem';
});

document
  .querySelector('.content-section')
  .addEventListener('select', (event) => {
    event.target.style.background = 'lightblue';
  });

document.querySelector('.btn').addEventListener('dblclick', (event) => {
  event.target.textContent = 'Clicked!';
});

document.querySelectorAll('.destination').forEach((destination) => {
  destination.addEventListener('dblclick', (event) => {
    event.target.style.backgroundColor = 'lightgreen';
  });
});
