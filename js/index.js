/*-- DOM selectors -----------------------------*/
const header = document.querySelector('header');
const logoHeading = document.querySelector('.logo-heading');
const navItems = document.querySelectorAll('.nav-link');
const funBus = document.querySelector('.intro img');

/*-- functions ---------------------------------*/
const randomNum = num => Math.floor(Math.random() * num);

const randomColor = () => `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
const randomRadius = num => `${randomNum(num)} px`;

const tacoNuke = duration => {
	setTimeout(() => {
		alert('🌮 + 💣 = TacoNuke! Your body blemishes slowly.');
	}, duration);
};

/*-- event listeners ---------------------------*/
logoHeading.addEventListener('mouseover', () => {
	logoHeading.style.color = randomColor();
});

window.addEventListener('keydown', () => {
	logoHeading.style.color = 'black';
});

window.addEventListener('wheel', () => {
	header.style.background = '#FFEBCD';
});

window.addEventListener('load', () => tacoNuke(3000));

navItems.forEach(item => {
	item.addEventListener('click', e => e.preventDefault());
});

navItems[0].addEventListener('focus', () => {
	navItems[0].style.background = randomColor();
});

navItems[0].addEventListener('blur', () => {
	navItems[0].style.background = 'none';
});

window.addEventListener('resize', () => {
	navItems[1].style.background = randomColor();
});

window.addEventListener('scroll', () => {
	navItems[2].style.background = randomColor();
});

navItems[3].addEventListener('dblclick', () => {
	navItems[3].style.background = randomColor();
});
