let blocks = document.querySelector('.blocks');
let orderCount = -1;
blocks.addEventListener('click', (e) => {
	e.target.style.order = orderCount;
	orderCount--;
});