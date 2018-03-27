
const rocketBlocks = document.querySelectorAll('.block');

rocketBlocks.forEach((element) => {
	element.addEventListener('click', () => {
		const block = element.parentNode;
		block.prepend(element);		
	});
});