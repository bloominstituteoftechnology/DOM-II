// Your code goes here

// References
const logo = document.querySelector(".logo-heading"); //h1
const navBar = document.querySelectorAll(".nav");
const navLink = document.querySelectorAll(".nav-link"); //navitems
const funImg = document.querySelector(".fun-bus-pic"); //fun bus pic
const welcome = document.querySelector(".home h2");
const letsGo = document.querySelector(".text-content h2");
const destinationPic = document.querySelector(".pic-destination");
const footer = document.querySelector(".footer");

// Event listeners
logo.addEventListener("mouseover", () => {
    logo.classList.toggle("grow"); 
});
logo.addEventListener("mouseleave", () => {
    logo.classList.toggle("grow")
});
