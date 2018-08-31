// Your code goes here
//mouseover
const h2 = document.querySelector('.intro h2');
h2.addEventListener('mouseleave', function() {
	h2.innerHTML = 'Welcome To Fun Bus!  Enjoy The Ride!';
});
//keydown
document.addEventListener('keydown', event => {
	h2.innerHTML = 'You pressed a key';
});
//mouseenter
const body = document.querySelector('.content-section');
body.addEventListener('mouseenter', function() {
	alert('You have moved your cursor into the content section');
});
//dblclick
const btn = document.querySelectorAll('.btn');

const btnClickHandler = function(event) {
	this.style.display = 'none';
};

btn.forEach(btn => {
	btn.addEventListener('dblclick', btnClickHandler);
});
//keyup
document.addEventListener('keyup', event => {
	h2.innerHTML = 'And now you released it!';
});
//resize
window.addEventListener('resize', function() {
	alert('You have changed the size of the screen!');
});
//scroll
const text0 = document.querySelectorAll('.content-section p')[0];
const text1 = document.querySelectorAll('.content-section p')[1];
window.addEventListener('scroll', function() {
	text0.style.color = 'blue';
	text1.style.color = 'purple';
});
//mouseover, mouseout, click, preventDefault, stopPropagation
const navChange = document.querySelectorAll('nav a');
navChange.forEach(item => {
	item.addEventListener('mouseover', function() {
		this.style.color = 'red';
	});
	item.addEventListener('mouseout', function() {
		this.style.color = 'aqua';
	});
	item.addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		this.style['text-decoration'] = 'underline';
	});
});
