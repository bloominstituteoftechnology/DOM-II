// variables
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const pink = document.getElementById('pink');
const gray = document.getElementById('gray');

/****************************************************************/
// commit one
// move child to top of list
// const move2top = function(x) {
// 	let parent = x.parentNode;
// 	parent.prepend(x);
// };

// listen for clicks on children
// const clicker = function(x) {
// 	x.addEventListener('click', function() {
// 		move2top(x);
// 	});
// };

// invoke event listeners
// clicker(red);
// clicker(blue);
// clicker(green);
// clicker(pink);
// clicker(gray);

/****************************************************************/
// commit two
const ogPosition = (event) => {
	event.style.marginLeft = '10px';
};

const moveRight = (event) => {
	event.style.marginLeft = '133px';
};

const mouseDown = (x) => {
	x.addEventListener('mousedown', function() {
		moveRight(x);
	});

	document.body.addEventListener('mouseup', function() {
		ogPosition(x);
		mouseDown(x);
	});
};

// invoke moveright
mouseDown(red);
mouseDown(blue);
mouseDown(green);
mouseDown(pink);
mouseDown(gray);
