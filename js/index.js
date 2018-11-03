const navBar = document.querySelectorAll('.nav a');
const imgs = document.querySelectorAll('img');
const signUpButtons = document.querySelectorAll('.btn');
const body = document.querySelector('body');
const easyReadParag = document.querySelectorAll('p');

window.addEventListener('click', function(event) {
  alert('Created this listener to showcase propagation');
});

// creates a gradient that follows the mouse around
window.addEventListener('mousemove', function(event) {
  body.style.background =
    'radial-gradient( circle at ' +
    event.clientX +
    'px ' +
    event.clientY +
    'px, ' +
    '#c0c0c0, ' +
    '#212529';
});

// creates an alert when the user leave the
window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = 'Leave Site?';
});

// eases the h2 in on window load
window.addEventListener('load', function() {
  const hTwos = document.querySelectorAll('h2');
  TweenLite.from(hTwos, 2, {
    x: 200,
    color: 'white',
  });
});

// creates a background and padding for nav links when mouse enters and leave the element
navBar.forEach(link => {
  link.addEventListener('mouseenter', function(event) {
    event.target.classList.toggle('navLink');
  });
});
navBar.forEach(link => {
  link.addEventListener('mouseleave', function(event) {
    event.target.classList.toggle('navLink');
  });
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

// toggles image size on mouse enter and leave via class implementation
imgs.forEach((img, index) => {
  if (index > 0) {
    img.addEventListener('mouseenter', function(event) {
      event.target.classList.toggle('grow');
    });
  }
});

imgs.forEach((img, index) => {
  if (index > 0) {
    img.addEventListener('mouseleave', function(event) {
      event.target.classList.toggle('grow');
    });
  }
});

signUpButtons.forEach(button => {
  button.addEventListener('mouseleave', function() {
    alert("You haven't pick a trip yet. Pick one now for best savings");
  });
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    TweenLite.to(event.target, 1, {scale: 0.5});
  });
});

// maginifies the paragraph for easy reading, also changes background and font color
easyReadParag.forEach(paragraph => {
  paragraph.style.cursor = 'zoom-in';
  paragraph.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  paragraph.addEventListener('dblclick', function(event) {
    TweenLite.to(event.target, 1, {scale: 2});
    paragraph.style.backgroundColor = 'black';
    paragraph.style.color = 'white';
  });
  paragraph.addEventListener('mouseleave', function(event) {
    TweenLite.to(event.target, 1, {scale: 1});
    paragraph.style.backgroundColor = 'inherit';
    paragraph.style.color = 'inherit';
  });
});
