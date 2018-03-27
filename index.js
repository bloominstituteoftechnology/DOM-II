
// ROCKET BLOCKS ==================================================================================================

// const rocketBlocks = document.querySelectorAll('.block'); // using querySelectorAll to select all block classes from the parent node blocks

// rocketBlocks.forEach((element) => { // using forEach so that 'click' is executed for each element
// 	element.addEventListener('click', () => { // added the EventListener with click and...
// 		const block = element.parentNode; // ...the argument that when a block is clicked...
// 		block.prepend(element);		// it will go to the top of the parent node, using prepend from yesterday
// 	});
// });


// TRANSFER BLOCKS =================================================================================================

const nodeList = document.getElementsByClassName('blocks');
let timer;

nodeList.addEventListener('mousedown', (event) => {
	timer = window.setInterval(function() {
	if (event.target.parentNode.className === 'blocks') {
			console.log('working')
			event.target.style.right = "10px";
	}
}, 10)
});