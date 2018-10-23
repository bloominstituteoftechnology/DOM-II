// Your code goes here
/*
mouseover
 keydown
 wheel
 drag / drop
 load
 focus
 resize
 scroll
 select
 dblclick
 */

const myH1 = document.querySelector('h1');
console.log(myH1);

myH1.addEventListener("mouseover", (event) => {
	console.log("h1 mouseovered");
	myH1.style.color = 'green';
});

myH1.addEventListener("mouseleave", (event) => {
	console.log("h1 mouseleave");
	myH1.style.color = 'black';
	myH1.style.background = 'white';
});

myH1.addEventListener("mousedown", (event) => {
	console.log("mousedown");
	myH1.style.background = 'blue';
});

myH1.addEventListener("mouseup", (event) => {
	console.log("mouseup");
	myH1.style.background = 'white';
});

//unclear how to change background color just of selected text (character by character)

myH1.addEventListener("dblclick", (event) => {
	console.log("dblclick");
	myH1.style.background = 'purple';
});

const myP = document.querySelector('p');

window.addEventListener('scroll', function(event) {
	console.log("scroll");
	myP.style.background = 'green';
});

//unclear to me how to code an effect just when 'scrolling is active'

document.addEventListener("copy", (event) => {
	console.log("copy");
	myP.style.background = 'cyan';
});

document.addEventListener("mousewheel", (event) => {
	console.log("copy");
	myP.style.background = 'red';
});

document.addEventListener("keydown", (event) => {
	console.log("keydown");
	myP.style.background = 'black';
});

document.addEventListener("keyup", (event) => {
	console.log("keyup");
	myP.style.background = 'white';
});




//even propagation


const myAHome = document.querySelector('a');

myAHome.addEventListener("mouseover", (event) => {
	console.log("aH mouseovered");
	myAHome.style.color = 'green';
});

myAHome.addEventListener("mouseleave", (event) => {
	console.log("aH mouseleave");
	myAHome.style.color = 'black';
	myAHome.style.background = 'white';
});

myP.addEventListener("mouseover", (event) => {
	console.log("p mouseovered");
	myP.style.color = 'green';
	event.stopPropagation();
});

myP.addEventListener("mouseleave", (event) => {
	console.log("p mouseleave");
	myP.style.color = 'black';
	myP.style.background = 'white';
	event.stopPropagation();
});

//I couldn't get propagation to overlap when using the same mouseover, mouseleave events for the Home element and for the first p paragraph on the page

//nav bar stoppage
myAHome.addEventListener("click", (event) => {
	event.preventDefault();
});
