// Your code goes here
const body = document.querySelector('body');


const header = document.querySelector('.main-navigation');
header.addEventListener('mouseover', function () {
header.style.backgroundColor = makeRandColor();
});



const makeRandColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
}

window.addEventListener('resize', function () {
	this.alert('I will resize to your liking malady');
});

window.addEventListener('scroll', function () {
	document.body.style.backgroundColor = makeRandColor();
} )


body.addEventListener('dblclick', function () {
	window.addEventListener('scroll', function () {
		document.body.style.backgroundColor = 'purple';
	});
	body.addEventListener('click', function () {
		document.body.style.backgroundColor = makeRandColor();
	});
});

window.alert('BEWARE FLASHING LIGHTS MIGHT CAUSE SEIZURES. IF AT RISK FOR EPILEPSY DOUBLE CLICK ANYWHERE ON THE PAGE TO DISABLE FEATURE');

const nav = document.querySelector('.nav');
nav.querySelector('a').addEventListener('click', function (e) {
	window.alert('You aint goin NOWHERE');
	e.preventDefault();
})