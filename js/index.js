// Your code goes here
const logo = document.querySelector('.logo-heading');

logo.addEventListener("mouseover", () => {
    logo.style.color = "green"
});

logo.addEventListener("mouseleave", () => {
    logo.style.color = ""
});

const h1 = document.querySelector("img");

h1.addEventListener("click", () => {
    h1.style.transform = "scale(1.5)"
});

const p1 = document.querySelector('p');

p1.addEventListener("dblclick", () => {
   p1.style.color = "blue" 
});

const