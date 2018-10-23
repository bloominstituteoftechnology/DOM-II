//---------------- Variable Declaration -------------------------//

//Navigation Bar
const topBar = document.querySelector('.main-navigation');
const anchors = document.querySelectorAll('a'); //0-3
//Headers
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2'); //0-3
const h4 = document.querySelectorAll('h4'); //0-2
//Paragraphs
const paragraphs = document.querySelectorAll('p');
//Images
const topImg = document.querySelector('.intro > img');
const middleImg = document.querySelectorAll('.img-content'); //0-1
const bottomImg = document.querySelector('.content-destination > img');
//misc
const buttons = document.querySelectorAll('.destination > .btn'); //0-2
const body = document.querySelector('body');
const main = document.querySelector('.home');
const footer = document.querySelector('footer');
const inverseContent = document.querySelector('.inverse-content');
const intro = document.querySelector('.intro');
const contentPick = document.querySelector('.content-pick');

//------------------- style objects ---------------------------//

const setStylesOnElement = function(styles, element) {
  Object.assign(element.style, styles);
};

const topBarStyle = {
  backgroundColor: '#17A2B8',
  borderBottom: '2px #212529 dashed'
};

const bodyStyle = {
  backgroundColor: '#FFEBCD'
};

const footerStyle = {
  backgroundColor: '#17A2B8',
  borderTop: '2px #212529 dashed'
};

const borderStyle1 = {
  borderBottom: '2px #212529 dashed'
};
const borderStyle2 = {
  borderTop: '2px #212529 dashed'
};

const pMouseOver = {
  color: '#A6979C',
  fontWeight: 'bold'
};

const buttonClick = {
  backgroundColor: '#DFAEB4',
  color: '#212529'
};

//------------------ Event Listeners -----------------------------//

//Body styling----------------------------------------
window.addEventListener('load', function(event) {
  setStylesOnElement(topBarStyle, topBar);
  setStylesOnElement(bodyStyle, body);
  setStylesOnElement(footerStyle, footer);
  setStylesOnElement(borderStyle1, inverseContent);
  setStylesOnElement(borderStyle1, intro);
  setStylesOnElement(borderStyle2, contentPick);
});

window.addEventListener('keyup', function(event) {
  body.style.backgroundColor = '#DAFFEF';
  body.style.color = '#17A2B8';
  topBar.style.color = '#FFFFFF';
});

//Paragraphs--------------------------------------------
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

//headers animation-----------------------------------
window.addEventListener('scroll', function(event) {
  TweenMax.to('h1', 3, { skewY: 10 });
});

h1.addEventListener('dblclick', function(event) {
  event.stopPropagation();
});

h2.forEach(a => {
  a.addEventListener('wheel', function(event) {
    TweenMax.to(a, 3, { rotationX: 360 });
  });
});

h4.forEach(a => {
  a.addEventListener('wheel', function(event) {
    TweenMax.to(a, 1, { skewX: -25 });
  });
});

//Navigation Bar-------------------------------------
topBar.addEventListener('dblclick', function(event) {
  event.target.style.backgroundColor = '#DFAEB4';
  event.target.style.color = '#212529';
});

anchors.forEach(a => {
  a.addEventListener('click', function(event) {
    a.style.color = '#FFFFFF';
    a.style.fontWeight = 'bold';
    preventDefault();
  });
});

anchors.forEach(a => {
  a.addEventListener('dblclick', function(event) {
    event.stopPropagation();
  });
});

//Images--------------------------------------------
middleImg.forEach(a => {
  a.addEventListener('mouseup', function(event) {
    event.target.style.borderRadius = '50%';
  });
});

window.addEventListener('keydown', function(event) {
  topImg.style.borderRadius = '30px';
  bottomImg.style.borderRadius = '50%';
});
//Buttons-------------------------------------------
buttons.forEach(a => {
  a.addEventListener('click', function(event) {
    setStylesOnElement(buttonClick, a);
    TweenMax.to(a, 3, { scale: 1.2, ease: Bounce.easeIn });
  });
});
