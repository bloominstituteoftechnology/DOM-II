const block = document.querySelectorAll('.block');
const blocks = document.querySelector('.blocks');

block.forEach((item) => item.addEventListener('click', () => {
	blocks.prepend(item);   
}))

block.forEach((ele) => {
	ele.style.position = 'relative';
	ele.style.left = '0px';
	ele.rocketLaunch = false;
	ele.addEventListener("mousedown", () => {
	if (ele.motionHandle) {
		clearInterval(ele.motionHandle);
	}
	let handle = setInterval(() => {
		ele.style.left = parseInt(ele.style.left) + 3 + "px";
	}, 10);
	ele.motionHandle = handle;
	})
	window.addEventListener('mouseup', () => {
		clearInterval(ele.motionHandle);
	})
});
