// Your code goes here
// ---------- Mouse Over
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', (e) => {
	if (!(e.target.style.color === 'yellow')) {
		e.target.style.color = 'yellow';
	} else {
		e.target.style.color = 'black';
	}
});

// ---------- Key Down
const page = document.querySelector('html');

page.addEventListener('keydown', (e) => {
	e.target.style.color = 'blue';
});

// ---------- wheel
const title = document.querySelectorAll('h2');

title.forEach(function(elem) {
	elem.addEventListener('wheel', (e) => {
		e.target.style.fontSize = '7rem';
		e.target.style.color = 'red';
	});
});

// ---------- Drag
const busPic = document.getElementById('bus-pic');

busPic.addEventListener('drag', (e) => {
	console.log('The Bus is Dragging!');
});

// ---------- sselect
const mapPic = document.getElementById('map-pic');

mapPic.addEventListener('click', (e) => {
	alert("If you're sure, Let's Go!!");
});

// ---------- Double Click
const destPic = document.querySelectorAll('.btn');

destPic.forEach(function(elem) {
	elem.addEventListener('dblclick', (element) => {
		element.target.style.backgroundColor = 'green';
	});
});

// ---------- Key Press
const img = document.querySelectorAll('img');

img.forEach(function(elem) {
	elem.addEventListener('load', (elem) => {
		elem.target.style.transitionDuration = '3000';
		elem.target.style.transform = 'rotate(360deg)';
	});
});

// ---------- Load
// window.addEventListener(
// 	'load',
// 	(e) => {
// 		alert('Page Loaded!');
// 	},
// 	2000
// );

console.log(img);
