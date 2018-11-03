// Your code goes here
const logo = document.querySelector('.logo-heading');
logo.style.cursor = 'pointer';
logo.addEventListener('click', () => {
	logo.style.color = logo.style.color === 'blue' ? 'black' : 'blue'
	TweenMax.to('.nav-link', 2, logo.style.color === 'blue' ? 
	{transform: 'translateX(-7vw)'} : 
	{transform: 'translateX(0)'});
});

const headerPicture = document.querySelector('.intro img');
headerPicture.addEventListener('mouseover', () => {
	headerPicture.style.opacity = headerPicture.style.opacity === '0.7' ? '1.0' : '0.7';
	document.querySelector('header').style.zIndex = headerPicture.style.opacity === '0.7' ? '1' : '0';
});
	
const bodyPictures = document.querySelectorAll('.img-content img');
for (let pic of bodyPictures){
	pic.addEventListener('mouseover', () => pic.style.borderRadius = '100px');
	pic.addEventListener('mouseout', () => pic.style.borderRadius = '10px');
}

const destinationPic = document.querySelector('.content-destination img');

window.addEventListener('load', () => {
	let destRect = destinationPic.getBoundingClientRect();
	window.addEventListener('resize', () => destRect = destinationPic.getBoundingClientRect());

	destinationPic.addEventListener('drag', (e) => {
	destinationPic.style.zIndex = '-1';
	destinationPic.style.position = 'relative';
	let currentX = e.clientX - destRect.x;
	destinationPic.style.left = `${currentX - (destRect.width / 2)}px`;
});

destinationPic.addEventListener('dragend', () => {
	destinationPic.style.position = 'static';
});
});

const navLinks = document.querySelectorAll('.nav-link');
for (let link of navLinks){
	link.addEventListener('click', (e) => e.preventDefault());
	link.addEventListener('mouseover', () => link.style.fontSize = '1.8rem');
	link.addEventListener('mouseout', () => link.style.fontSize = '1.6rem');
}

const footerButtons = document.querySelectorAll('.btn');
const footerDivs = document.querySelectorAll('.destination');

for (let i = 0; i < footerButtons.length; i++){
	footerButtons[i].addEventListener('click', (e) => {
		footerButtons[i].style.borderRadius =
		footerButtons[i].style.borderRadius === '0px' ? '15px' : '0px'
		e.stopPropagation();
	});

	footerDivs[i].addEventListener('click', () => footerDivs[i].style.backgroundColor =
	footerDivs[i].style.backgroundColor === 'rgb(23, 162, 184)' ? '#FFFFFF' : '#17A2B8');
}