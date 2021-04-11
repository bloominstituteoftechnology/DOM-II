// Your code goes here

const stopNav = document.querySelectorAll('.nav-link');
console.log(stopNav, 'Does Nav Link Work?');
stopNav.forEach((element) => {
	element.addEventListener('click', (event) => {
		console.log("It Doesn't Work!");
		event.preventDefault();
	});
});

//Key Press Updating Background & Nav Color
const body = document.querySelector('body');
body.addEventListener('keypress', (event) => {
	event.target.style.backgroundColor = '#DCDCDC';
});

// Key Up Changing Backgroun Color
body.addEventListener('keyup', (event) => {
	event.target.style.backgroundColor = 'lightBlue';
});

// Bus Image Swaps Out
const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseover', (event) => {
	event.target.src = 'img/new-bus.jpg';
});

funBus.addEventListener('mouseleave', (event) => {
	event.target.src = 'img/fun-bus.jpg';
});

// First Adventure Image Rotates
const adventureImg = document.querySelector('.img-content img');
adventureImg.addEventListener('mouseenter', (event) => {
	event.target.style.transform = 'rotate(7deg)';
});

adventureImg.addEventListener('mouseleave', (event) => {
	event.target.style.transform = 'rotate(0deg)';
});

// Animation for Fun Image
const funImg = document.querySelector('[src="img/fun.jpg"]');
funImg.addEventListener('mouseenter', (event) => {
	event.target.style.transform = 'translateX(-10px)';
});

funImg.addEventListener('mouseleave', (event) => {
	event.target.style.transform = 'translateX(10px)';
});

//mouseover 
const headerDiv = document.querySelector('.intro');
headerDiv.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'blue'
})

// Destination Images Skews
const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('dblclick', (event) => {
	event.target.style.transform = 'skewX(5deg)';
	event.target.style.transition = 'all 0.6s';
});

// All The Buttons Change Color When Clicked
const button = document.querySelectorAll('.btn');

button.forEach((element) => {
	element.addEventListener('click', (event) => {
		event.target.style.backgroundColor = 'green';
		event.target.style.color = 'floralWhite';
		event.stopPropagation();
	});
});