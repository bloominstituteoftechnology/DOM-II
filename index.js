class RunAway {
	constructor(element) {
		this.element = element;
		this.distance = 0;
		this.element.addEventListener('mousedown', () => {this.eventHandler()});
	}

	eventHandler() {
		this.interval = setInterval(() => {
			this.distance += 10;
			this.element.style.marginLeft = `${this.distance}px`;
			if (this.distance >= 2000) clearInterval(this.interval);
		}, 10);
	}
}

const elements = Array.from(document.querySelectorAll('.block')).map(item => {
	return new RunAway(item);
});

// console.log(test);

/****************************************************************/
//ROCKETS________________________________________________________

// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const pink = document.getElementById('pink');
// const gray = document.getElementById('gray');

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
//TRAVELERS______________________________________________________

// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const pink = document.getElementById('pink');
// const gray = document.getElementById('gray');

// const ogPosition = (event) => {
// 	event.style.marginLeft = '10px';
// };

// const moveRight = (event) => {
// 	event.style.marginLeft = '555px';
// };

// const mouseDown = (x) => {
// 	x.addEventListener('mousedown', function() {
// 		moveRight(x);
// 	});

// 	document.body.addEventListener('mouseup', function() {
// 		ogPosition(x);
// 	});
// };

// mouseDown(red);
// mouseDown(blue);
// mouseDown(green);
// mouseDown(pink);
// mouseDown(gray);

/****************************************************************/
//STRETCH_________________________________________________________

// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const pink = document.getElementById('pink');
// const gray = document.getElementById('gray');

// const mouseDown = (x) => {
// 	x.addEventListener('mousedown', function() {
// 		x.classList.add('go-right');
// 		x.classList.remove('go-left');
// 	});

// 	document.body.addEventListener('mouseup', function() {
// 		x.classList.remove('go-right');
// 		x.classList.add('go-left');
// 	});
// };

// mouseDown(red);
// mouseDown(blue);
// mouseDown(green);
// mouseDown(pink);
// mouseDown(gray);

/****************************************************************/
//JQUERY__________________________________________________________

// $(document).ready(function() {
// 	$(this).mousedown(function() {
// 		$(this).
// 	})
// })