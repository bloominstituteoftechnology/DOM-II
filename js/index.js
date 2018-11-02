// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const body = document.querySelector('body');
//const paragraphs = document.querySelectorAll('p');

body.addEventListener('keydown', function() {
    alert('Please select a menu item. Thank you!');
});

logoHeading.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '5rem';
});

logoHeading.addEventListener('mouseleave', function(event) {
    event.target.style.fontSize = '4rem';
});

body.addEventListener('wheel', function(event) {
    event.target.style.color = 'red';
    event.stopPropagation();
});

