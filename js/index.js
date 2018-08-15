// Your code goes here
const homeBox = document.querySelector(".home");
const introHeaderHome = document.querySelector(".intro");
const mainHeader = document.querySelector(".main-header");
let logoHeading = document.querySelector(".logo-heading");
let dragBus = document.querySelector(".dragBus");
const inverseContent = document.querySelector(".inverse-content");
const contentDesination = document.querySelector(".content-destination");

logoHeading.style.color = "yellow";
logoHeading.addEventListener("mouseover", () => {
	event.target.style.color = "blue";
});

introHeaderHome.style.color = "pink";
introHeaderHome.addEventListener("mouseenter", () => {
	event.target.style.color = "gold";
});

inverseContent.style.color = "orange";
inverseContent.addEventListener("mouseleave", () => {
	event.target.style.color = "purple";
});

contentDesination.style.color = "green";
contentDesination.addEventListener("click", () => {
	event.target.innerText = "NOOOOOOOOO";
});





// dragBus.addEventListener("drag", () => {
// }, false);
// dragBus.addEventListener("dragstart", () => {
// 	dragged = event.target;
// 	event.target.style.opacity = .5;
// }, false);
// dragBus.addEventListener("dragend", () => {
// 	event.target.style.opacity = "";
// }, false);
// dragBus.addEventListener("dragover", () => {
// 	event.preventDefault();
// }, false);
// dragBus.addEventListener("dragenter", () => {
// 	if (event.target.dragBus == "dropzone") {
// 		event.target.style.background = "purple";
// 	}
// }, false);
// dragBus.addEventListener("dragleave", () => {
// 	if (event.target.dragBus == "dropzone") {
// 		event.target.style.background = "";
// 	}
// }, false);
// dragBus.addEventListener("drop", () => {
// 	event.preventDefault();

// 	if( event.target.dragBus == "dropzone") {
// 		event.target.style.background = "";
// 		dragged.parentNode.removeChild(dragged);
// 		event.target.appendChild(dragged);
// 	}
// }, false);