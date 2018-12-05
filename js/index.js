// Your code goes here

//=====================================================variables
const aTag = document.querySelectorAll('.nav-link');
const home = document.querySelector('.home');
const h2s = document.querySelectorAll('h2');
const funBus = document.querySelector('.intro img');
const pTags = document.querySelectorAll('p');

//========================================events

//===h1 slides from the right on load
//===sets a timer
//===checks for mouse/keyboard movement
//===alerts inactivity
window.onload = function(event) {
  TweenMax.from(".logo-heading", 3, {
    x:250
  });
  let idleTime = 0;
  const idleInterval = setInterval(timerIncrement, 1000);
  const timerReset = function() {
    idleTime = 0;
  }
  window.addEventListener('mousemove', timerReset);
  window.addEventListener('keypress', timerReset);
  function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 30) { // 30 seconds
      alert(`You're either on the bus, or off the bus.`);
      window.removeEventListener('mousemove', timerReset);
      window.removeEventListener('keypress', timerReset);
      clearInterval(idleInterval);
    }
  }
};

//===a tags change random colors mouse over
aTag.forEach(function(element) {
  element.addEventListener("mouseover", function(event) {
    event.target.style.color = `rgb(${(Math.random() * 255)}, ${(Math.random() * 255)}, ${(Math.random() * 255)})`;
  });
});

//===click on the background to change it's color
home.addEventListener('click', function(event) {
  home.style.backgroundColor = 'rgb(127, 255, 246)';
});

//===double click h2s to make them bold
h2s.forEach(function(element) {
  element.addEventListener('dblclick', function(event) {
    event.target.style.fontWeight = 'bold';
  });
});

//===alerts when a key except for arrow keys is pressed
document.addEventListener('keypress', (event) => {
  if(event.keyCode !== 37 || event.keyCode !== 38 || event.keyCode !== 39 || event.keyCode !== 40){
    alert('Why are you typing, friend?\n\n' + 'this isn\'t the contact page.');
  }
});

//===changes the opacity of the fun bus image when dragged.
//===don't be a drag on the fun bus.
funBus.addEventListener("dragstart", function(event) {
  event.target.style.opacity = .5;
}, false);

//===focus on p tags and turns their background green
pTags.forEach(function(element) {
  element.tabIndex = 1;
  element.addEventListener('foucs', function(event) {
    event.target.style.backgroundColor = 'green';
  });
  element.addEventListener('blur', function(event) {
    event.target.style.background = '';    
  });
});

