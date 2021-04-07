// Your code goes here
const images = document.querySelector("img");
const nav = document.querySelector("nav");
const bodyText = document.querySelector("p");
const containerHeaders = document.querySelector(".img-content");
const button = document.querySelector('.btn')
//--------------------------------------------------------------------------------

images.addEventListener("pointerenter", function (e) {
	images.style.transform = "scale(1.25)";
	images.style.transition = "transform 0.25s ease";
});

images.addEventListener("pointerleave", function (e) {
	images.style.transform = "scale(1)";
	images.style.transition = "transform 0.25s ease";
});

nav.addEventListener(
	"mouseenter",
	function (event) {
		event.target.style.color = "purple";
		setTimeout(function () {
			event.target.style.color = "";
		}, 500);
	},
	false
);

nav.addEventListener(
	"mouseover",
	function (event) {
		event.target.style.color = "orange";

		setTimeout(function () {
			event.target.style.color = "";
		}, 500);
	},
	false
);

button.addEventListener('click', event => {
    button.style.backgroundColor = 'purple';
  });

  containerHeaders.addEventListener('dblclick', function (event) {
    containerHeaders.classList.toggle('large');
  });
  
  document.addEventListener('copy', (event) => {
    console.log('copy action initiated')
});

document.addEventListener('paste', (event) => {
    console.log('paste action initiated')
});


document.addEventListener('selectionchange', () => {
    console.log(document.getSelection());
  });
  
  document.onselectionchange = () => {
    console.log(document.getSelection());
  };