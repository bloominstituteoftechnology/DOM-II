// ROCKET SOLUTION

// assign all blocks to the variable with childNodes
const blocks = document.querySelector(".blocks").childNodes;

// Set a variable to track current order
// let orderValue = -1;

// //Loop thru all blocks and attach eventListener to each of them
// blocks.forEach(function(block) {
// 	block.addEventListener("click", function() {
// 		// As we are using display flex, we can just use order to position elements on top
// 		this.style.order = orderValue;
// 		// Necessary to track and increment current order for proper functionality
// 		orderValue -= 1;
// 	})
// })



// TRAVELERS SOLUTION


// Loop thru all blocks and attach eventListener to each of them
blocks.forEach(function(block) {
	block.addEventListener("mousedown", (event) => {
		event.target.style = "transition:transform, all 1.5s ease-in; transform: translateX(80px)";

	})

	block.addEventListener("mouseup", (event) => {
		event.target.style = "transition:transform, all 2.5s ease-in; transform: translateX(0px)";
	})

})

