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
const navLink = document.querySelector('html');

navLink.addEventListener('keydown', (e) => {
	e.target.style.color = 'blue';
});

// ---------- wheel
const title = document.querySelector('h2');

title.addEventListener(
	'wheel',
	(e) => {
		e.target.style.fontSize = '7rem';
		e.target.style.color = 'red';
	},
	500
);

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

// ---------- sselect
const destPic = document.querySelectorAll('.btn');

destPic.forEach(function(elem) {
	elem.addEventListener('dblclick', (element) => {
		element.target.style.backgroundColor = 'green';
	});
});

console.log(destPic);
