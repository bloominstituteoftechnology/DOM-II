// Your code goes here

//stop navigation
const stopLinks = document.querySelectorAll('.nav-link')
stopLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
  })
})

// mouseenter
const enlargeText = document.querySelector(".text-content")
enlargeText.addEventListener("mouseenter", () => {
    enlargeText.style.transform = "scale(1.5)";
    enlargeText.style.transition = "all 0.5s";
})

// mouse leave
enlargeText.addEventListener("mouseleave",() => {
    enlargeText.style.transform = "scale(1.0)";
})

// mouseover
const introPic = document.querySelector(".intro img")
introPic.addEventListener("mouseover", () => {
  introPic.style.transform = "scale(1.25)";
  introPic.style.transition = "all 0.5";
})

// mouseout
introPic.addEventListener("mouseout", () => {
  introPic.style.transform = "scale(1.0)";
})

//dblclick
const mainLogo = document.querySelector(".logo-heading")
mainLogo.addEventListener("dblclick", () => {
  mainLogo.style.color = "blue";
  mainLogo.style.backgroundColor = "yellow";
})

// click
const img1 = document.querySelector(".content-section .img-content")
img1.addEventListener("click", () => {
  img1.style.transform = "scale(.5)";
})

// keydown 
const body1 = document.querySelector("body")
body1.addEventListener("keydown", () => {
  body1.style.backgroundColor = "teal";
})

// keypress
const contentSection = document.querySelector(".text-content p")
contentSection.addEventListener("keypress", () => {
  contentSection.style.color = "red";
})

// keyup
const destination1 = document.querySelector(".destination h4")
destination1.addEventListener("keyup", () => {
  destination1.style.color = "yellow";
})
