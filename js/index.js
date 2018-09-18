// Your code goes here

// References
const logo = document.querySelector(".logo-heading"); //h1
const navBar = document.querySelectorAll(".nav");
const navLink = document.querySelectorAll(".nav-link"); //navitems
const funImg = document.querySelector(".intro img"); //fun bus pic
const welcome = document.querySelector(".home h2");
const letsGo = document.querySelector(".text-content h2");
const adventure = document.querySelector(".img-content img");
const footer = document.querySelector(".footer");
const welcomeP = document.querySelector(".home p");
const wholeBody = document.querySelector("body");
const adventureAwaits = document.querySelector(".text-content h2");
const button = document.querySelectorAll(".destination .btn");

// Event listeners
//1
logo.addEventListener("mouseenter", () => {
    logo.classList.toggle("grow"); 
});
// 2
logo.addEventListener("mouseleave", () => {
    logo.classList.toggle("grow")
});
//3
welcome.addEventListener("mousemove", () => {
    event.currentTarget.style.color = "red";
});
//4
wholeBody.addEventListener("keydown", () => {
    // event.currentTarget.style.backgroundColor = 
    // event.currentTarget.style.backgroundColor = "red";
    wholeBody.classList.toggle("color"); 
  });
//5
funImg.addEventListener("mouseover", () => {
    funImg.style.opacity= "0.3";
});
//6
funImg.addEventListener("mouseleave", () => {
    funImg.style.opacity= "1";
});
//7
adventure.addEventListener('click', () => {
    adventure.classList.toggle("hide-this");
  });
//8
button.addEventListener("dblclick", () => {
    alert("Hello World!");
} )
// 9 
navBar.forEach(link => link.addEventListener("click", (event) => { event.preventDefault() }))
navBar[2].addEventListener('focus', () => {
  navA.forEach(item => item.style.color = "orange");
})
//10
button.forEach(button => button.addEventListener("dblclick", (event) => {
    button.style.backgroundColor = "brown";
    button.style.color = "orange";
  }))