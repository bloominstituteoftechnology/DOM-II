document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  alert(`Copyright Fun Bus 2018`);
});

const carHorn = document.createElement('audio');
const applause = document.createElement('audio');

carHorn.src = 'audio/car_horn.mp3';
applause.src = 'audio/applause.mp3';

const mainNav = document.querySelector('.nav');
const navAnchors = document.querySelectorAll('.nav-link');
const logoHeading = document.querySelector('.logo-heading');
logoHeading.style.cursor = 'pointer';

logoHeading.addEventListener('click', function() {
  applause.play();
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener('mouseenter', function() {
    logoHeading.classList.add('color-me');
  });
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener('mouseleave', function() {
    logoHeading.classList.remove('color-me');
  });
});

const busImg = document.querySelector('.fun-bus-img');
busImg.style.cursor = 'pointer';

busImg.addEventListener('click', function() {
  carHorn.play();
});

const welcomeH2 = document.querySelector('.intro h2');
const welcomeP = document.querySelector('.welcome-text');
welcomeH2.style.cursor = 'pointer';

welcomeH2.addEventListener('click', function() {
  welcomeP.classList.toggle('hide-me');
});

welcomeH2.addEventListener('mousedown', function(event) {
  event.preventDefault();
});

const letsGoH2 = document.querySelector('.content-section h2');
const letsGoP = document.querySelectorAll('.content-section .lets-go-text');
const letsGoImg = document.querySelector('.content-section img');
letsGoH2.style.cursor = 'pointer';

letsGoH2.addEventListener('click', function() {
  letsGoImg.classList.toggle('hide-me');
  letsGoP.forEach(function(p) {
    p.classList.toggle('hide-me');
  });
});

letsGoH2.addEventListener('mousedown', function(event) {
  event.preventDefault();
});

const adventureH2 = document.querySelector('.inverse-content h2');
const adventureP = document.querySelectorAll('.adventure-text');
const adventureImg = document.querySelector('.adventure-img');
adventureH2.style.cursor = 'pointer';

adventureH2.addEventListener('click', function() {
  adventureImg.classList.toggle('hide-me');
  adventureP.forEach(function(p) {
    p.classList.toggle('hide-me');
  });
});

adventureH2.addEventListener('mousedown', function(event) {
  event.preventDefault();
});

const destinationH2 = document.querySelector('.content-destination h2');
const destinationP = document.querySelectorAll('.destination-text');
const destinationImg = document.querySelector('.destination-img');
destinationH2.style.cursor = 'pointer';

destinationH2.addEventListener('click', function() {
  destinationImg.classList.toggle('hide-me');
  destinationP.forEach(function(p) {
    p.classList.toggle('hide-me');
  });
});

destinationH2.addEventListener('mousedown', function(event) {
  event.preventDefault();
});

const funInTheSun = document.querySelector('.sun');

funInTheSun.addEventListener('click', function() {
  funInTheSun.style.backgroundColor = 'black';
  funInTheSun.style.color = 'white';
});

const allButtons = document.querySelectorAll('.btn');

allButtons[0].addEventListener('click', function(event) {
  event.stopPropagation();
});



