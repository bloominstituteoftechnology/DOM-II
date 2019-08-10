
// window listener

window.addEventListener('load', ()=> console.log("The page is fully loaded with no errors!"))

// button event listeners

const buttons = document.querySelectorAll('.btn');
const button1 = buttons[0];
const button2 = buttons[1];
const button3 = buttons[2];

button1.addEventListener('click', ()=> button1.style.backgroundColor = 'green');
button2.addEventListener('dblclick', ()=> button2.style.display = 'none');

let count = 0;
button3.addEventListener('mouseenter', e => {
	count++;
	if (count > 5){
		alert(`You hovered over this button ${count} times!`);
	};
});


// image manipulation on scroll

const introImg = document.querySelector('.intro img');
introImg.addEventListener('wheel', zoom);
let scale = 1;

function zoom(e){
	event.preventDefault();
	scale += event.deltaY * -0.001; //determines the speed of the scale
	scale = Math.min(Math.max(.125, scale), 4); //progressive scale -- allows for rescaling after
	introImg.style.transform = `scale(${scale})`; //tells the image grow/shrink based on the transform method
}

// logging text selection from the header paragraph only

function textSelect(e){
	const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd); // defines what is being selected
	console.log(selection);
}
const headerText = document.querySelector('.intro p');
headerText.addEventListener('select', textSelect);
headerText.onselect = textSelect;

// nav manipulation
 const navvy = document.querySelectorAll('nav a');
 const home = navvy[0];
 const about = navvy[1];
 const blog = navvy[2];
 const contact = navvy[3];


blog.addEventListener('focus', e => e.target.style.backgroundColor = 'coral');

about.addEventListener('blur', e => {
	e.target.style.backgroundColor = 'green';
	e.stopPropagation();
});

home.addEventListener('pointerover', ()=> console.log("home was pointed over!"));

// window keydown tracker to find what users are pressing when they get to the site
function logKey(e){
	console.log(e.code);
}


document.addEventListener('keydown', logKey);

