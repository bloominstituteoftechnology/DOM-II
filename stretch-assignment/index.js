// const block = document.querySelectorAll('.block');

// block.forEach((item) => item.addEventListener('click', (event) => {
//     const clickColor = event.target.classList[1];
//     const topColor = block[0].classList[1];
//     event.target.classList.toggle(`${clickColor}`);
//     event.target.classList.toggle(`${topColor}`);
//     block[0].classList.toggle(`${topColor}`);
//     block[0].classList.toggle(`${clickColor}`)    
// }))
// var currentX = 0;
// var rocketLaunch = false;

// block.forEach((ele) => ele.style.position = 'relative');
// // function launchRocket() {
// //     if (rocketLaunch == true) {
// //         currentX += 2;
// //         event.target.style.left = currentX + 'px';
// //     }
// // }
// // function blastOff() {
// //     rocketLaunch = true;
// //     launchRocket();
// // }
// // function returnToEarth() {
// //     rocketLaunch = false;
// // }
// // setInterval(launchRocket, 200);

// block.forEach((ele) => ele.addEventListener('mousedown', () => {
//     if (block.motionHandle) {
//         clearInterval(block.motionHandle);
//     }
//     let handle = setInterval(() => {
//         block.style.left = parseInt(currentX) + 3 + 'px';
//     }, 50)
//     block.motionHandle = handle;
// }));

// block.forEach((ele) => ele.addEventListener('mouseup', () => {
//     clearInterval(block.motionHandle);
//     block.motionHandle = 0;
//     block.style.left = 0;
// }));

var blocks = document.querySelector('.blocks');
var x = document.querySelectorAll(".block");
x = [].slice.call(x);

x.forEach(block => {
	block.style.position = "relative";
	block.style.left = "0px";

	block.addEventListener("click", () => {
		blocks.prepend(block);
	});

	block.addEventListener("mousedown", () => {
		if (block.motionHandle) {
			clearInterval(block.motionHandle);
		}
		let handle = setInterval(() => {
			block.style.left = parseInt(block.style.left) + 3 + "px";
		}, 10);
		block.motionHandle = handle;
	});

	window.addEventListener("mouseup", () => {
		clearInterval(block.motionHandle);
		block.motionHandle = 0;
		block.style.left = 0;
	});
});
