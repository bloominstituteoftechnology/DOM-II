// elements in block
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

// =======================  Rockets  ==========================

// When a block is clicked, it should go to the top of the stack
// holds current value of flex order at the time of a 'click' event
// let order = 0;
// event
// const move = () => {
    // decrement order: (-) orders will move to the top of the main-axis
    // default order is 0 for all blocks
// 	order--;
// 	event.target.style.order = order.toString();
// }

// event listeners
// red.addEventListener('click', move);
// blue.addEventListener('click', move);
// green.addEventListener('click', move);
// pink.addEventListener('click', move);
// gray.addEventListener('click', move);


// ======================  Travelers  =========================

const moveRight = (event) => {
	let marginPX = 10;
    window.setInterval( function() {
    	// when margin is smaller than 300
        if (marginPX < 300) {
            marginPX++; 
            event.target.style.marginLeft = marginPX + 'px';
        }
    }, 5);
}

red.addEventListener('mousedown', moveRight);
blue.addEventListener('mousedown', moveRight);
green.addEventListener('mousedown', moveRight);
pink.addEventListener('mousedown', moveRight);
gray.addEventListener('mousedown', moveRight);

const moveBack = (event) => {
	let marginPX = 300;
	window.setInterval(function() {
		clearInterval(moveRight);
		if (marginPX > 10) {
			marginPX--;
			event.target.style.marginLeft = marginPX + 'px';
		}
	}, 5);
}

red.addEventListener('mouseup', moveBack);
blue.addEventListener('mouseup', moveBack);
green.addEventListener('mouseup', moveBack);
pink.addEventListener('mouseup', moveBack);
gray.addEventListener('mouseup', moveBack);


