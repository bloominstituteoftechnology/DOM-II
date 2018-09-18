// Your code goes here
//mouseover listener for all a tags...

let navElement = document.querySelectorAll('a');

for(let i = 0; i < navElement.length; i++) {
  	navElement[i].addEventListener('mouseover', (event) => {
    	event.currentTarget.style.fontWeight = "bold";
    	event.currentTarget.style.color = "red";    
  	});
}

document.querySelector(".intro img").addEventListener("click", (event) =>
	event.currentTarget.style.transform = "rotate(20deg)");

//intro h2
document.querySelector(".intro h2").addEventListener("click", (event) =>
	event.currentTarget.style.color = "green");

//intro p tag
document.querySelector(".intro p").addEventListener("click", (event) =>
	event.currentTarget.style.background = "#E9E5E5");

//text-content h2 and p tag
document.querySelector(".text-content h2").addEventListener("click", (event) =>
	event.currentTarget.style.color = "green");

document.querySelector(".text-content p").addEventListener("click", (event) =>
	event.currentTarget.style.background = "#E9E5E5");

//destination image on dblclick
let destinationImg = document.querySelector(".content-destination img");
destinationImg.addEventListener("dblclick", (event) =>
	event.currentTarget.style.transform = "rotate(180deg)");

//buttons on select
let buttonElement = document.querySelectorAll('.btn');
buttonElement.addEventListener("select", (event) =>
	event.currentTarget.style.background = "white");

//footer focus
document.querySelector('footer p').addEventListener("scroll", (event) =>
	event.currentTarget.style.background = "black",
	event.currentTarget.style.color = "white" );

//removing GOOGLE  LINK thro preventDefault()
document.querySelector('.nav-link #google a').addEventListener('click', (event) => {
  event.preventDefault();
});