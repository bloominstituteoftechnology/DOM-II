// 1. keydown
let body = document.querySelector('body');
body.addEventListener('keydown', function() {
	this.style.backgroundColor = 'skyblue';
});

// 2. click
let destinationPhoto = document.querySelector('.content-destination img');
let btn = document.querySelectorAll('.btn');
console.log(btn);

btn[0].addEventListener('click', function() {
	destinationPhoto.src = 'img/fun-in-the-sun.jpg';
	destinationPhoto.style.width = '600px';
	destinationPhoto.style.height = '200px';
	event.stopPropagation();
});

btn[1].addEventListener('click', function() {
	destinationPhoto.src = 'img/mountain-excursion.jpg';
	destinationPhoto.style.width = '600px';
	destinationPhoto.style.height = '200px';
	event.stopPropagation();
});

btn[2].addEventListener('click', function() {
	destinationPhoto.src = 'img/island-getaway.jpg';
	destinationPhoto.style.width = '600px';
	destinationPhoto.style.height = '200px';
	event.stopPropagation();
});

body.addEventListener('click', function() {
	destinationPhoto.src = 'img/destination.jpg';
});
