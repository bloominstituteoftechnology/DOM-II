//variables
let body = document.querySelector('body');
let destinationImg = document.querySelector('.content-destination img');
let btn = document.querySelectorAll('.btn');

// 1. keydown
body.addEventListener('keydown', function() {
	this.style.backgroundColor = 'skyblue';
});

// 2. click
btn[0].addEventListener('click', function() {
	destinationImg.src = 'img/fun-in-the-sun.jpg';
	destinationImg.style.width = '600px';
	destinationImg.style.height = '200px';
	event.stopPropagation();
});

btn[1].addEventListener('click', function() {
	destinationImg.src = 'img/mountain-excursion.jpg';
	destinationImg.style.width = '600px';
	destinationImg.style.height = '200px';
	event.stopPropagation();
});

btn[2].addEventListener('click', function() {
	destinationImg.src = 'img/island-getaway.jpg';
	destinationImg.style.width = '600px';
	destinationImg.style.height = '200px';
	event.stopPropagation();
});

body.addEventListener('click', function() {
	destinationImg.src = 'img/destination.jpg';
});

// 3. wheel
body.addEventListener('wheel', function() {
	const colors = ['skyblue', 'goldenrod', 'yellow', 'dodgerblue'];
	let random = Math.floor(Math.random() * 4);
	this.style.backgroundColor = colors[random];
});
