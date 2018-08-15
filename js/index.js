// Your code goes here
const mainNavigation = document.querySelector(".main-navigation");
const navContainer = document.querySelector(".nav-container");
const nav = document.querySelector(".nav");
const aTags =document.querySelector("a");
const homeBox = document.querySelector(".home");
const introHeaderHome = document.querySelector(".intro");
const mainHeader = document.querySelector(".main-header");
let logoHeading = document.querySelector(".logo-heading");
let dragBus = document.querySelector(".dragBus");
const inverseContent = document.querySelector(".inverse-content");
const contentDesination = document.querySelector(".content-destination");
const contentPick = document.querySelector(".content-pick");

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

contentPick.style.color = "red";
contentPick.addEventListener("dblclick", () => {
	event.target.innerText = "Hey!";
});

aTags.style.color = "teal";
aTags.addEventListener("mouseout", () => {
	event.target.innerText = "Get On the Bus!";
});

introHeaderHome.addEventListener("mousemove", () => {
	event.target.innerText = "THE BUS WAITS FOR NO ONE!!";
	introHeaderHome.style.fontSize = "40px";
	introHeaderHome.style.color = "red";
	event.stopPropagation();
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