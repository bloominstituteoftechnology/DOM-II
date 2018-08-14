// Your code goes here
const funBus = document.querySelector('.logo-heading');
const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll("img");
const aLinks = document.querySelectorAll("a");
const pElements = document.querySelectorAll("p");

funBus.addEventListener('mouseenter', () => {
  funBus.style.color = 'teal';
  funBus.style['font-size'] = '50px';
});

funBus.addEventListener('mouseleave', () => {
  funBus.style.color = 'black';
  funBus.style['font-size'] = '40px';
});

// images[0].addEventListener('wheel', (event) => {
//   event.target.style.borderRadius = '20px';
// })

images[0].addEventListener('wheel', () => {
  images[0].style.borderRadius = '20px';
})

pElements[1].addEventListener('mouseover', () => {
  pElements[1].style.fontWeight = 'bold';
});

buttons[0].addEventListener('dblclick', () => {
  buttons[0].style.color = 'red';
});

