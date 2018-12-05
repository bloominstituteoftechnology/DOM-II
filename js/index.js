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
		// element.style.transform = 'scaleY(1.5)';
	});
});

// ---------- Key Press
const img = document.querySelectorAll('img');

img.forEach(function(elem) {
	elem.addEventListener('click', (e) => {
		e.target.style.transform = 'rotate(360deg)';
		e.target.style.boxShadow = '10px 10px #17a2b8';
		e.target.style.transitionDuration = '5s';
		e.stopPropagation();
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

// TweenMax.from('nav a', 1, { x: -600, y: -50, scale: 0, rotation: 360, ease: SlowMo.ease.config(0.5, 0.8, false) });
// TweenMax.to('nav a', { x: 0, y: 0 });

// console.log(img);
