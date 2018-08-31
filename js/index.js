// Your code goes here
let logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', function() {
	logo.style.color = 'orange';
});

logo.addEventListener('mouseleave', function() {
	logo.style.color = '#212529';
});

let navitem = document.querySelector('.nav-link');

navitem.addEventListener('focus', function() {
	navitem.style.color = 'purpl';
});
