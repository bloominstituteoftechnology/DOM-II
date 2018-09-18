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
  console.log('hello');
  const randomColor = getRandomColor();
  console.log(randomColor);
  event.currentTarget.style.backgroundColor = `${randomColor}`;
});

//links are randomly colored when moused over
const links = document.querySelectorAll('.main-navigation .container nav a');
links.forEach(function(link) {
  link.addEventListener('mouseover', (event) => {
    event.target.style.color = `${getRandomColor()}`;
    event.target.style.fontWeight = 'bolder';
  });
  link.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
    event.target.style.fontWeight = 'normal';
  });
});

// images are inverted when clicked
const images = document.querySelectorAll('img');
images.forEach(function(image) {
  image.addEventListener('click', (event) => {
    event.target.classList.toggle('inverted');
  });
});

// header text is flipped when double-clicked
const header = document.querySelector('header');
header.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('flipped');
})
