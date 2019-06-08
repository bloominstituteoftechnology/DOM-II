// Your code goes here

//Fun Bus bold when dblclick
const funBus = document.querySelector('.logo-heading');

funBus.addEventListener('dblclick', () => {
  funBus.style.fontWeight = 'bold';
});

//links change color on mouseover and mouseout
const links = document.querySelectorAll('a');

links.forEach(function(item, i) {
  item.addEventListener('mouseover', function() {
    links[i].style.color = '#17A2B8';
  });
});
links.forEach(function(item, i) {
  item.addEventListener('mouseout', function() {
    links[i].style.color = '#212529';
  });
});

//nav border color changes on keydown for down arrow and up arrow
const navBar = document.querySelector('.main-navigation');

document.addEventListener('keydown', event => {
  if (event.keyCode === 40 /*down arrow*/) {
    navBar.style.borderBottom = '2px dashed #212529';
  }
  if (event.keyCode === 38 /*up arrow*/) {
    navBar.style.borderBottom = '2px dashed #C0C0C0';
  }
});

//background color changes when wheel
const homeBackground = document.querySelector('html');

homeBackground.addEventListener('wheel', () => {
  homeBackground.style.backgroundColor = '#FFEBCD';
});

//images hide on right click
const images = document.querySelectorAll('img');

images.forEach(function(item, i) {
  item.addEventListener('contextmenu', function() {
    images[i].style.display = 'none';
  });
});

//click button parent, click button, stop prop
//button change color on click
window.addEventListener('click', () => {
  homeBackground.style.backgroundColor = '#e8ecf2';
  buttons.forEach(function(item, i) {
    item.addEventListener('click', function() {
      event.stopPropagation();
      buttons[i].style.backgroundColor = '#212529';
    });
  });
});

const buttons = document.querySelectorAll('.btn');

//welcome text changes color when copy
const welcomeText = document.querySelector('.intro p');

welcomeText.addEventListener('copy', () => {
  welcomeText.style.color = 'red';
});

//nav color changes when window is resized
window.addEventListener('resize', () => {
  navBar.style.backgroundColor = '#FFEBCD';
});

//h2 size increase when scroll
const h2s = document.querySelectorAll('h2');

window.addEventListener('scroll', () => {
  h2s.forEach(function(item, i) {
    h2s[i].style.fontSize = '4rem';
  });
});

//Stop the navigation from items from refreshing the page by using preventDefault()
links.forEach(function(item, i) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
  });
});
