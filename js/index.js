// Your code goes here
let logo = document.querySelector('.logo-heading');

let nav = document.querySelector('.main-navigation');

nav.addEventListener('dblclick', function() {
	nav.style.backgroundColor = 'green';
});

console.log(nav);

logo.addEventListener('mouseover', function() {
	logo.style.color = 'orange';
});

logo.addEventListener('mouseleave', function() {
	logo.style.color = '#212529';
});

logo.addEventListener('dblclick', function(e) {
	e.stopPropagation();
	nav.style.backgroundColor = 'purple';
});

let navitems = document.querySelectorAll('.nav-link');

console.log(navitems);

for (i = 0; i < navitems.length; i++) {
	navitems[i].addEventListener('click', function() {
		this.style.color = 'purple';
	});
}

let audio = document.querySelector('audio');

audio.style.display = 'none';
let headerimg = document.querySelector('header img');

window.addEventListener('wheel', function() {
	audio.play();
});

window.setInterval(function() {
	if (headerimg.style.visibility == 'hidden') {
		headerimg.style.visibility = 'visible';
	} else {
		headerimg.style.visibility = 'hidden';
	}
}, 1000);

let intro = document.querySelector('.intro');
console.log(intro);

intro.setAttribute('tabindex', 0);

window.addEventListener('keydown', function() {
	if (intro.style.color !== 'yellow') {
		intro.style.color = 'yellow';
	} else {
		intro.style.color = 'red';
	}
});

let dragMe = document.querySelector('#dragMe');

let dropHere = document.querySelector('#dropHere');

let boxClass = document.getElementsByClassName('dragpic');

for (const container of boxClass) {
	container.addEventListener('dragover', dragover);
	container.addEventListener('dragenter', dragenter);
	container.addEventListener('drop', drop);
}

function dragover(e) {
	e.preventDefault();
}
function dragenter(e) {
	e.preventDefault();
}
function drop() {
	this.append(dragMe);
	baby.setAttribute(
		'src',
		'https://s-media-cache-ak0.pinimg.com/736x/be/58/c8/be58c8298c9ddb484057ed8a3d94c61d.jpg'
	);
}

let baby = document.querySelector('#baby');

window.addEventListener('resize', function() {
	alert(
		'If you"re looking for a BIG trip or SMALL.... FUN BUS HAS YOU COVERED!!!!! GO FUN BUS!!!!!!!!'
	);
});

window.addEventListener('scroll', function() {
	audio.play();
});

let a = document.querySelectorAll('a');

for (i = 0; i < a.length; i++) {
	a[i].addEventListener('click', function(e) {
		e.preventDefault();
	});
}
