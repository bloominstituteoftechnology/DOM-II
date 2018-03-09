const block = document.querySelectorAll('.block');

block.forEach((e) => {
	e.addEventListener('mousedown', () => {
		e.classList.add('blockRight');
	});
	e.addEventListener('mouseup', () => {
		e.classList.remove('blockRight');
	});
});
