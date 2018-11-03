// Your code goes here

// Nav Bar
const navBar = document.querySelector('.main-navigation');
const anchors = document.querySelectorAll('a');

// Headers
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const h4 = document.querySelectorAll('h4');

// Images
const topImg = document.querySelector('.intro > img');
const middleImg = document.querySelectorAll('.img-content');
const bottomImg = document.querySelector('.content-destination > img');

// Paragraphs
const paragraphs = document.querySelectorAll('p');


const intro = document.querySelector('.intro');
const body = document.querySelector('body');
const main = document.querySelector('.home');
const buttons = document.querySelectorAll('.destination > .btn');
const footer = document.querySelector('footer');
const inverseContent = document.querySelector('.inverse-content');
const contentPick = document.querySelector('.content-pick');



const setStylesOnElement = function(styles, element) {
  Object.assign(element.style, styles);
};

const navBarStyle = {
  backgroundColor: '#17A2B8',
  borderBottom: '1px #212529 dashed'
};

const pMouseOver = {
  color: '#b1cec9',
  fontWeight: 'italic'
};

const bodyStyle = {
  backgroundColor: '#FFEBCD'
};

const borderStyle1 = {
  borderBottom: '1px #212529 dashed'
};
const borderStyle2 = {
  borderTop: '1px #212529 dashed'
};


const buttonClick = {
  backgroundColor: '#8bb2c6',
  color: '#0c0c0c'
};

const footerStyle = {
  backgroundColor: '#17A2B8',
  borderTop: '1px #212529 dashed'
};

// Event Listeners

//Body
window.addEventListener('load', function(event) {
  setStylesOnElement(navBarStyle, navBar);
  setStylesOnElement(bodyStyle, body);
  setStylesOnElement(footerStyle, footer);
  setStylesOnElement(borderStyle1, inverseContent);
  setStylesOnElement(borderStyle1, intro);
  setStylesOnElement(borderStyle2, contentPick);
});

window.addEventListener('keyup', function(event) {
  body.style.backgroundColor = '#69c3d3';
  body.style.color = '#17A2B8';
  navBar.style.color = '#FFFFFF';
});

// Nav Bar

anchors.forEach(a => {
  a.addEventListener('click', function(event) {
    a.style.color = '#FFFFFF';
    a.style.fontWeight = 'bold';
    preventDefault();
  });
});

navBar.addEventListener('dblclick', function(event) {
  event.target.style.backgroundColor = '#aecddf';
  event.target.style.color = '#212529';
});


anchors.forEach(a => {
  a.addEventListener('dblclick', function(event) {
    event.stopPropagation();
  });
});

// Headers

h1.addEventListener('dblclick', function(event) {
  event.stopPropagation();
});

h2.forEach(a => {
  a.addEventListener('wheel', function(event) {

  });
});



// Paragraphs
paragraphs.forEach(a => {
  a.addEventListener('mouseover', function(event) {
    setStylesOnElement(pMouseOver, event.target);
  });
});

paragraphs.forEach(a => {
  a.addEventListener('mouseleave', function(event) {
    a.style.color = '#212529';
    a.style.fontWeight = 'normal';
  });
});


// Images
middleImg.forEach(a => {
  a.addEventListener('mouseup', function(event) {
    event.target.style.borderRadius = '35%';
  });
});

window.addEventListener('keydown', function(event) {
  topImg.style.borderRadius = '30px';
  bottomImg.style.borderRadius = '35%%';
});

// Buttons
buttons.forEach(a => {
  a.addEventListener('click', function(event) {
    setStylesOnElement(buttonClick, a);

  });
});
