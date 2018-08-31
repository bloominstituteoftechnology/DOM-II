// 1. click
let logo = document.querySelector('.logo-heading');
logo.addEventListener('click', function() {
  this.style.color = 'red';
});

// 2. mousedown
logo.addEventListener('mousedown', function() {
  this.style.color = 'black';
});

// 3. keydown
let body = document.querySelector('body');
body.addEventListener('keydown', function() {
  this.style.backgroundColor = 'skyblue';
});

// 4.
