// Your code goes here

//mouseover

const imageclick = document.querySelector('img');

imageclick.addEventListener('click', (event) => {
	event.target.style.transform = "scale(1.2)";

});


const title = document.querySelector('.logo-heading');

title.addEventListener('mouseover', (event) => {
	event.target.style.color = "blue";
});

 
const anykey = document.querySelector('body');

anykey.addEventListener('keydown', (event) => {
	alert('KeyDown!');
	event.target.style.backgroundColor = "coral";
})