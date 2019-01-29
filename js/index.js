const header = document.querySelector('.main-navigation');
const heading = document.querySelector('.main-navigation h1');
const imgs = document.querySelector('.img-content');
const someText = document.querySelector('body');
const navItems = document.querySelectorAll('nav a');
const buttons = document.querySelectorAll('.btn');

window.addEventListener('cut', () => {
	alert('Hell NO');
});
window.addEventListener('load', () => {
	alert('All loaded!');
});
window.addEventListener('resize', () => {
	header.style.backgroundColor = 'deeppink';
});
window.addEventListener('scroll', () => {
	console.log('Scrooolling');
});
window.addEventListener('keydown', () => {
	someText.style.color = 'green';
});
window.addEventListener('keyup', () => {
	someText.style.color = '';
});
heading.addEventListener('mouseover', () => {
	heading.style.color = 'cornflowerblue';
});
heading.addEventListener('mouseout', () => {
	heading.style.color = '';
});
heading.addEventListener('dblclick', (event) => {
	event.stopPropagation();
	heading.style.backgroundColor = 'palevioletred';
	console.log('hey!');
});
imgs.addEventListener('dragstart', () => {
	alert('What are you doing?');
});

// Prevent Default

navItems.forEach((link) =>
	link.addEventListener('click', () => {
		link.preventDefault;
		console.log('Default prevented');
	})
);
