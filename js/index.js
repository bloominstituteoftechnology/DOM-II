// WINDOW LOAD 10

window.addEventListener('load', () => {
	document.querySelector('body').classList.add('pop');
});

// FUN LOGO HEADING 1
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {
	logoHeading.classList.add('funLogo');
});
logoHeading.addEventListener('mouseleave', () => {
	logoHeading.classList.remove('funLogo');
});

// DIZZY IMAGE 2

let mainImg = document.querySelector('.intro img');
mainImg.addEventListener('dblclick', () => {
	mainImg.classList.toggle('funImg');
});

// FUN SPINNING TITLE 3

let funBusTitle = document.querySelector('.intro h2');
funBusTitle.addEventListener('click', () => {
	funBusTitle.classList.toggle('runawayText');
});

// EVIL BUTTONS 4

let btns = document.querySelectorAll('button');
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('focus', (e) => {
		if (e.target === btns[0]) {
			if (btns[0].textContent == 'Sign Me Up!') {
				btns[0].textContent = "WE DON'T WANT YOU";
			} else {
				btns[0].textContent = 'Sign Me Up!';
			}
		} else if (e.target === btns[1]) {
			if (btns[1].textContent == 'Sign Me Up!') {
				btns[1].textContent = 'WHAT DO YOU WANT?';
			} else {
				btns[1].textContent = 'Sign Me Up!';
			}
		} else {
			if (btns[2].textContent == 'Sign Me Up!') {
				btns[2].textContent = "I'm just kidding, come back.";
			} else {
				btns[2].textContent = 'Sign Me Up!';
			}
		}
	});
}

// NAV LINKS FALLING! 5

let fallingLinks = document.querySelectorAll('.nav-link');
console.log(fallingLinks);
let nav = document.querySelector('nav');

nav.addEventListener('mouseover', () => {
	for (let i = 0; i < fallingLinks.length; i++) {
		fallingLinks[i].style = `position: relative; animation: fallingLinks ${Math.floor(Math.random() * 1200 - 600) +
			600}ms forwards`;
	}
});
nav.addEventListener('mouseleave', () => {
	for (let i = 0; i < fallingLinks.length; i++) {
		fallingLinks[i].style = `position: relative; animation: risingLinks ${Math.floor(Math.random() * 1200 - 600) +
			600}ms forwards`;
	}
});

// WINDOW DISAPPEAR & REAPPEAR 6, 7

window.addEventListener('resize', () => {
	document.querySelector('.brokeMsg').style = 'visibility: visible';
});
window.addEventListener('scroll', () => {
	document.querySelector('.brokeMsg').style = 'visibility: collapse';
});

// DRAG FADE 8

document.querySelector('.adventureImg').addEventListener('drag', (e) => {
	e.target.style = 'opacity: 0.4; transition: 700ms';
});
document.querySelector('.adventureImg').addEventListener('dragend', (e) => {
	e.target.style = 'opacity: 1; transition: 700ms';
});

// DRAG POP 8

document.querySelector('.funStuff').addEventListener('drag', (e) => {
	e.target.style = 'transform: scale(2); transition: 400ms';
});
document.querySelector('.funStuff').addEventListener('dragend', (e) => {
	e.target.style = 'transform: scale(1); transition: 400ms';
});

// KEYPRESS FUN TITLE 9

let titles = document.querySelectorAll('h2');
window.addEventListener('keypress', (e) => {
	console.log(e.keyCode);

	if (e.keyCode == 113) {
		for (let i = 0; i < titles.length; i++) {
			titles[i].classList.toggle('funLogo');
		}
	}
});
