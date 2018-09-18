// Your code goes here
//
// generate a random color

function getRandomColor() {
  const colors = [];
  for (let i = 0; i < 3; i++) {
    const randomColor = Math.floor(Math.random() * 256);
    colors.push(randomColor);
  }
  return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}

// scrolling applies random color to container background
const home = document.querySelector('.home');
home.addEventListener('wheel', (event) => {
  const randomColor = getRandomColor();
  event.currentTarget.style.backgroundColor = `${randomColor}`;
});

// header text is flipped when double-clicked
const header = document.querySelector('header');
header.addEventListener('dblclick', (event) => {
  event.currentTarget.classList.toggle('flipped');
});

// nav bar background changes color when doubleclicked NOT PROPOGATED
const navBar = document.querySelector('.nav');
navBar.addEventListener('dblclick', (event) => {
  event.target.style.backgroundColor = getRandomColor();
  event.stopPropagation();
});

// links are randomly colored when moused over, back to normal on mouseout
const links = document.querySelectorAll('.main-navigation .container nav a');
links.forEach((link) => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.color = `${getRandomColor()}`;
    event.target.style.fontWeight = 'bolder';
    event.preventDefault();
  });
  link.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
    event.target.style.fontWeight = 'normal';
  });
});

// images are inverted when clicked
const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.target.classList.toggle('inverted');
  });
});


// everything hides when the 'h' key is pressed
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'h') {
    document.body.classList.toggle('hidden');
  }
});

// log when page has loaded
window.addEventListener('load', () => {
  console.log('the page has loaded!');
});

// flipping the logo
const funBus = document.querySelector('.logo-heading');
const tl = new TimelineLite();
tl.to(funBus, .5, {
  delay: .5,
  x:100, 
  rotation:360,
  scale: 2,
  opacity: .5,
  color: 'red'
}).to(funBus, .3, {
  x: 0,
  rotation: -360,
  scale: 1,
  opacity: 1,
  color: 'black',
});


// focus and blur events for inputs
const inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
  input.addEventListener('focus', (event) => {
    event.target.style.backgroundColor= 'slateblue';
  });
  input.addEventListener('blur', (event) => {
    event.target.style.backgroundColor= 'white';
  });
});

// preventDefault on submit button
const submit = inputs[inputs.length - 1];
submit.addEventListener('click', (event) => {
  event.preventDefault();
});

// console log on resizing
window.addEventListener('resize', (event) => {
  console.log('I\'m being resized!');
});
