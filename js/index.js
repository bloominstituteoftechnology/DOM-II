// * #1 Mouse Over Event

function handleMouseOver() {
	firstH.style.fontSize = "50px";
	console.log("hovered!!");
}

const firstH = document.querySelectorAll("h1")[0];
firstH.addEventListener("mouseover", handleMouseOver);

// * #2 Click event

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((item) => {
	item.addEventListener("click", (e) => {
		e.target.style.color = "purple";
	});
});

// * #3 Double Click Event

const letGo = document.querySelectorAll(".content-section p")[0];
letGo.addEventListener("dblclick", (e) => {
	e.target.style.fontSize = "60px";
});

// * #4 Mouse Wheel Event

document.body.addEventListener("mousewheel", (e) => {
	e.target.style.color = "blue";
});

// * #5 Copy Event

let pTags = document.querySelectorAll("p");
pTags.forEach((item) => {
	item.addEventListener("copy", () => {
		item.innerText = "Hey you copied me!";
	});
});

// * #6 Mouse Out Event
const img = document.querySelector(".intro img");
img.addEventListener("mouseout", () => {
	img.style.width = "50%";
});

// * #7  Window Load Event
window.addEventListener("load", () => {
	alert("page is loaded");
});

// * #8 Key Press Down Event
document.addEventListener("keydown", () => {
	console.log("key pressed!");
});

// * #9 Key Key Up Event
document.addEventListener("keyup", (e) => {
	if (e.key === "Shift") {
		firstH.style.color = "blue";
	}
});

// * #10 Paste Event
document.addEventListener("paste", () => {
	pTags[0].style.textTransform = "capitalize";
});
