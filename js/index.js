// Your code goes here

// Constants

const navLogo = document.querySelector('.logo-heading');
const container = document.querySelector('.container');
const navMain = document.querySelector('.nav-container');
const wholePage = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-link');
const topNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');
let buttons = document.querySelectorAll('.btn');


//MouseOver
navLogo.addEventListener("mouseover", function(){
	navLogo.style.border = '3px dashed hotpink';
	navLogo.style.background = 'darkgray';
	navLogo.style.transform = 'scale(2, 1)';
	navLogo.style.padding = '10px';
});


//Wheel
window.addEventListener("wheel", function(){
	if (documetn.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		navLogo.style.display = 'none';
		navMain.style.justifyContent = 'center';
	} else {
		navLogo.style.cssText = "";
		navMain.style.justifyContent = 'space-between';
	}
});


//Load
window.addEventListener("load", function(){
	this.alert("Welcome to the Fun Bus!");
});