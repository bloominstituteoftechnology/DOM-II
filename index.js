/* Rockets
let list = document.getElementById("blocks").childNodes;
for (let i = 0; i < list.length; i++) {
list[i].addEventListener("click",
function() {
blocks.insertBefore(this, blocks.childNodes[0])
});
}
*/

// Travelers - work in progress 
// Will refactor and figure out mouse release "mouseup"
// To return rocket to original position

let redRocket = document.querySelector('.block--red');
redRocket.addEventListener("mousedown", function() {
	let redTravel = redRocket.animate([{
		transform: 'translate(0)'
	}, {
		transform: 'translate(800px, 100px)'
	}], 800);
});

let blueRocket = document.querySelector('.block--blue');
blueRocket.addEventListener("mousedown", function() {
	let blueTravel = blueRocket.animate([{
		transform: 'translate(0)'
	}, {
		transform: 'translate(800px, 100px)'
	}], 800);
});

let greenRocket = document.querySelector('.block--green');
greenRocket.addEventListener("mousedown", function() {
	let greenTravel = greenRocket.animate([{
		transform: 'translate(0)'
	}, {
		transform: 'translate(800px, 100px)'
	}], 800);
});

let pinkRocket = document.querySelector('.block--pink');
pinkRocket.addEventListener("mousedown", function() {
	let pinkTravel = pinkRocket.animate([{
		transform: 'translate(0)'
	}, {
		transform: 'translate(800px, 100px)'
	}], 800);
});

let grayRocket = document.querySelector('.block--gray');
grayRocket.addEventListener("mousedown", function() {
	let grayTravel = grayRocket.animate([{
		transform: 'translate(0)'
	}, {
		transform: 'translate(800px, 100px)'
	}], 800);
});