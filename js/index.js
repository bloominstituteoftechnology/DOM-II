// Your code goes here
const first = document.querySelector('.logo-heading');

const menuItems = document.querySelectorAll(".nav-link");

const busImg = document.querySelector('img');

const contentTitle = document.querySelectorAll('.text-content');

let scrollPos = 0;

let stopped = false;

const imgs = document.querySelectorAll('.img-content');

buttons = document.querySelectorAll('.btn');

let killed = false;

first.addEventListener('mouseenter', (event) => {	

	event.target.style.transform = "scale(1.5)";

	event.target.style.transition = "1s";

	event.target.style.color = "skyblue";

});

first.addEventListener('mouseleave', (event) =>{

	event.target.style.transform = "scale(1)";

	event.target.style.color = "initial";

});

menuItems.forEach((element) => {

	element.addEventListener("mouseenter", (event) => {

		event.target.style.transform = "rotate(360deg)";

		event.target.style.transition = "1s";

		event.target.style.color = "#ffd800";

	});

	element.addEventListener("mouseleave", (event) => {

		event.target.style.transform = "rotate(0deg)";

		event.target.style.transition = "1s";

		event.target.style.color = "initial";

	});

	element.addEventListener("click", (event) => {

		event.preventDefault();

	});

});

busImg.addEventListener("dblclick", (event) => {

	event.target.style.transform = "translate(200%,0%)";

	event.target.style.transition = "1s";

});

busImg.parentElement.addEventListener("click", (event) => {

	if(event.detail === 3){

		event.target.style.transition = '1s';

		event.target.firstElementChild.style.transform = "translate(0%,0%)";

		event.stopPropagation();

	};

});

function scrollActivity(scroll_pos){

	contentTitle.forEach((element) => {

		element.firstElementChild.style.backgroundColor = "#ffd800";

		element.firstElementChild.transition = "1s";

	});

};

function scrollStop(){

	contentTitle.forEach((element) => {

		element.firstElementChild.style.backgroundColor = "blue";

	});

};

document.addEventListener('scroll', (event) => {

	scrollPos = window.scrollY;

	if(!stopped){

		window.requestAnimationFrame(function(){

			scrollActivity(scrollPos);

			stopped = false;	

		});

	};

	stopped = true;

});

imgs.forEach((element) => {

	element.firstElementChild.addEventListener('dragstart', (event) => {

		event.target.style.opacity = .1;

		event.target.style.transform = "scale(1.5)";

		event.target.style.transition = '1s';
		
	});

	element.firstElementChild.addEventListener('dragend', (event) => {

		event.target.style.opacity = 1;

		event.target.style.transform = "scale(1)";

	});

});

contentTitle.forEach((element) => {

	element.addEventListener('click', (event) => {

		event.stopPropagation();

		event.target.style.backgroundColor = 'red';

	});

});


buttons.forEach((element) => {

	element.addEventListener('mouseover', (event) =>{

		event.target.style.fontSize = '15px';

		event.target.style.transition = '1s';

	});

	element.addEventListener('mouseout', (event) =>{

		event.target.style.fontSize = '20px';
		
	});

});

function killPage() {

	if(!killed){

		document.body.style.transition = '2s';

  		document.body.style.opacity = "0";

  		return killed = true;
	}

	if(killed){

		document.body.style.opacity = "1";

		return killed = false;

	}
    	
  }

document.addEventListener('keydown', killPage);



	
		
	









