// Your code goes here
//Event 1
const logo = document.querySelector("header img");
logo.addEventListener("mouseover", () => {
    logo.style.display= "none";
})

logo.addEventListener("mouseleave", () => {
    logo.style.display = ""
})

// const navChange = document.getElementsByClassName("nav-link");
// navChange.addEventListener("dblclick", () => {
//     navChange.style.color = "brown"
// })

const darkMode = document.querySelector("body");
const whiteText = document.querySelectorAll("h1", "h2", "h3","h4", "p")
const acitvateDarkMode = document.getElementsByClassName("btn");
acitvateDarkMode.addEventListener("click", () => {
    darkMode.style.backgroundColor = "black";
    whiteText.style.color = "white";
})
