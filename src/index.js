import "./less/index.less";

// Your code goes here!
const header = document.querySelector("header");
function hoverColor(e) {
	e.target.style.backgroundColor = "red";
	// console.log(e);
}
header.addEventListener("mouseover", hoverColor);

const aTags = document.querySelectorAll("a");
aTags.forEach((el) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		e.target.style.color = "blue";
	});
});
