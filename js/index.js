// Your code goes here

//=====================================================variables
const aTag = document.querySelectorAll('.nav-link');
const home = document.querySelector('.home');
const h2s = document.querySelectorAll('h2');


//========================================events

//===h1 slides from the right on load
window.onload = function(event) {
  TweenMax.from(".logo-heading", 3, {
    x:250
  });
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

