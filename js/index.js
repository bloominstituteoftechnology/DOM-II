// Your code goes here
//grabbing elements
const navLinks = document.querySelectorAll('.nav-link');
const headerImage = document.querySelector('header img');
const theText = document.querySelectorAll('.text-content')
const h1 = document.querySelector('h1');
const body = document.querySelector('body');
//functions for styless
function defaultClass() {
  event.target.style.removeProperty("color");
  }
  function redText() {
  	event.target.style.color = "red";
  }
  
//regular events
window.addEventListener("load", event => {
	window.alert("Daniel is the greatest coder of all time.");
});
headerImage.addEventListener("mouseenter", event => {
	event.target.setAttribute("src","https://images.unsplash.com/photo-1562620669-98104534c6cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
});
headerImage.addEventListener("mouseleave", event => {
	event.target.setAttribute("src", "https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
});
headerImage.addEventListener("click", event => {
	event.target.setAttribute("src", "https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60");
	event.preventDefault();
	event.stopPropagation();
});
	
h1.addEventListener("click", event => {
	event.target.textContent = "Daniel Rocks";

});
h1.addEventListener("dblclick", event => {
	event.target.textContent = "or does he?..";
	event.preventDefault();
	event.stopPropagation();
});
h1.addEventListener("mouseover", event => {
	event.target.style.color = "dodgerblue";
	event.target.style.backgroundColor = "black";
});
h1.addEventListener("mouseleave", event => {
	event.target.style.color = "black";
	event.target.style.removeProperty("background-color");
});

navLinks[0].addEventListener("mouseover", event => {
	event.target.style.color = "dodgerblue";
	event.target.style.backgroundColor = "black";
});
navLinks[0].addEventListener("mouseleave",event => {
	event.target.style.color = "black";
	event.target.style.removeProperty("background-color");
});
navLinks[1].addEventListener("mouseover", event => {
	event.target.style.color = "dodgerblue";
	event.target.style.backgroundColor = "black";
});
navLinks[1].addEventListener("mouseleave",event => {
	event.target.style.color = "black";
	event.target.style.removeProperty("background-color");
});
navLinks[2].addEventListener("mouseover", event => {
	event.target.style.color = "dodgerblue";
	event.target.style.backgroundColor = "black";
});
navLinks[2].addEventListener("mouseleave",event => {
	event.target.style.color = "black";
	event.target.style.removeProperty("background-color");
});
navLinks[3].addEventListener("mouseover", event => {
	event.target.style.color = "dodgerblue";
	event.target.style.backgroundColor = "black";
});
navLinks[3].addEventListener("mouseleave",event => {
	event.target.style.color = "black";
	event.target.style.removeProperty("background-color");
});
//navLinks.forEach(element)
navLinks[0].addEventListener("mouseover",event => {
	redText();
	event.preventDefault();
	event.stopPropagation();
});
navLinks[1].addEventListener("click", event => {
	redText();
	event.preventDefault();
	event.stopPropagation();
});
navLinks[2].addEventListener("click", event => {
	redText();
	event.preventDefault();
	event.stopPropagation();
});
navLinks[3].addEventListener("click", event => {
	redText();
	event.preventDefault();
	event.stopPropagation();
});
window.addEventListener("scroll", event => {
	body.style.backgroundColor = "purple";
});
body.addEventListener("keypress", event => {
	window.alert("Hey , please don't push my buttons..");
});
headerImage.addEventListener("contextmenu", event => {
	window.alert("You're gonna save that crap?...")
});