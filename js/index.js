// Your code goes here
let logoHeading = document.querySelector(".logo-heading");
let navLinks = document.querySelectorAll(".nav-link");
let dragBus = document.querySelector(".dragBus");

logoHeading.style.color = "yellow";
logoHeading.addEventListener("mouseover", () => {
	event.target.style.color = "orange";
});

navLinks.addEventListener("toggle", () => {
	navLinks.style.fontSize = "5rem";
})

dragBus.addEventListener("drag", () => {
}, false);
dragBus.addEventListener("dragstart", () => {
	dragged = event.target;
	event.target.style.opacity = .5;
}, false);
dragBus.addEventListener("dragend", () => {
	event.target.style.opacity = "";
}, false);
dragBus.addEventListener("dragover", () => {
	event.preventDefault();
}, false);
dragBus.addEventListener("dragenter", () => {
	if (event.target.dragBus == "dropzone") {
		event.target.style.background = "purple";
	}
}, false);
dragBus.addEventListener("dragleave", () => {
	if (event.target.dragBus == "dropzone") {
		event.target.style.background = "";
	}
}, false);
dragBus.addEventListener("drop", () => {
	event.preventDefault();

	if( event.target.dragBus == "dropzone") {
		event.target.style.background = "";
		dragged.parentNode.removeChild(dragged);
		event.target.appendChild(dragged);
	}
}, false);