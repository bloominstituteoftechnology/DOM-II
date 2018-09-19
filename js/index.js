/*-- DOM selectors, constants ------------------*/
const header = document.querySelector('header');
const logoHeading = document.querySelector('.logo-heading');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-link');
const funBus = document.querySelector('.intro img');
let scrollTimeout;

/*-- functions ---------------------------------*/
const randomNum = num => Math.floor(Math.random() * num);
const randomColor = () => `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
const randomRadius = num => `${randomNum(num)} px`;

const scrollThrottler = () => {
	if (!scrollTimeout) {
		scrollTimeout = setTimeout(() => {
			scrollTimeout = null;
			navItems[2].style.background = randomColor();
		}, 2000);
	}
};

const tacoNuke = duration => {
	setTimeout(() => {
		alert('🌮 + 💣 = TacoNuke! Your body blemishes slowly.');
	}, duration);
};

/*-- event listeners ---------------------------*/
window.addEventListener('scroll', scrollThrottler);

logoHeading.addEventListener('mouseover', () => {
	logoHeading.style.color = randomColor();
});

window.addEventListener('keydown', () => {
	header.style.backgroundColor = 'blue';
});

window.addEventListener('keydown', () => {
	logoHeading.style.color = 'black';
});

window.addEventListener('wheel', () => {
	header.style.background = '#FFEBCD';
});

window.addEventListener('load', () => tacoNuke(3000));

nav.addEventListener('click', e => {
	console.log(`${e.target.className} click event 'bubbling up!'`);
});

navItems.forEach(item => {
	item.addEventListener('click', e => e.preventDefault());
});

navItems[0].addEventListener('focus', () => {
	navItems[0].style.background = randomColor();
});

navItems[0].addEventListener('blur', () => {
	navItems[0].style.background = 'none';
});

navItems[1].addEventListener('click', () => {
	console.log('I am the inclusive one.');
});

window.addEventListener('resize', () => {
	navItems[1].style.background = randomColor();
});

navItems[2].addEventListener('click', e => {
	e.stopPropagation();
	console.log('Stop propagation at all costs!');
});

navItems[3].addEventListener('dblclick', () => {
	navItems[3].style.background = randomColor();
});
