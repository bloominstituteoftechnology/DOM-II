// Your code goes here
// Your code goes here
const navItems = document.querySelectorAll('.nav-link');
navItems.forEach((i) => {
  i.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

const container = document.querySelector('.container.home');
const letsGoImg = document.querySelector('.letsGo');
const adventureImg = document.querySelector('.adventureImg');
const headerImg = document.querySelector('.headerImg');
const buttons = document.querySelectorAll('.btn');
const sound = document.querySelector('audio');

// Image mouse Event
letsGoImg.addEventListener('mouseover', (e) => {
  e.target.setAttribute('src', 'img/fun.jpg');
});

adventureImg.addEventListener('mouseover', (e) => {
  e.target.setAttribute('src', 'img/adventure.jpg');
});

// Header Image Mouse over event
headerImg.addEventListener('mouseover', (e) => {
  e.target.style.transform = 'scale(1.1)';
});

// Random container event listener
container.style.opacity = '1';
container.style.transition = '2s';

container.addEventListener('load', (e) => {
  e.style.opacity = '1';
});

// Button click event
buttons.forEach((button) => {
  button.addEventListener('click', playSound);
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    alert(`Don't Click Me!`);
  });
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.style.color !== '#fff') {
      e.target.style.color = 'crimson';
    } else {
      e.target.style.color.toggle = 'white';
    }
  });
});

// window.addEventListener('click', playSound);

function playSound(e) {
  sound.currentTime = 0;
  sound.play();
}
