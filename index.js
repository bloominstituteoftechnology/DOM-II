// elements in block
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');

// rockets
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


// travelers
let marginPX = 0;
const block = document.getElementsByClassName('block');

const moveRight = (event) => {
    window.setInterval( function() {
    	// when margin is smaller than 1000 [1 screen length]
        if (marginPX < 1000) {
            marginPX++; 
            event.target.style.marginLeft = marginPX + 'px';
        } 
        // margin reaches 100px
        else {
        	clearInterval(moveRight);
        }
    }, 5);
}

red.addEventListener('click', moveRight);
blue.addEventListener('click', moveRight);
green.addEventListener('click', moveRight);
pink.addEventListener('click', moveRight);
gray.addEventListener('click', moveRight);

const moveBack = (event) => {
	window.setInterval(function() {
		if (marginPX > 0) {
			marginPX--;
			event.target.style.marginLeft = marginPX + 'px';
		} else {
			clearInterval(moveBack);
		}
	})
}

red.addEventListener('mouseup', moveBack);
blue.addEventListener('mouseup', moveBack);
green.addEventListener('mouseup', moveBack);
pink.addEventListener('mouseup', moveBack);
gray.addEventListener('mouseup', moveBack);




