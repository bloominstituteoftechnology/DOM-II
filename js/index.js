// mouse click on the first of nav 1
document.querySelectorAll(".nav-link")[0].addEventListener("click", (event) => {
  event.currentTarget.style.color = "red";
  preventDefault()
})

// double click on second of nav 2
document.querySelectorAll(".nav-link")[1].addEventListener("dblclick", (event) => {
  event.currentTarget.style.color = "blue";
  preventDefault()
})

// mouse-over on third of nav 3
document.querySelectorAll(".nav-link")[2].addEventListener("mouseover", (event) => {
  event.currentTarget.style.color = "green";
  preventDefault()
})
// wheel over on fourth of nav 4
document.querySelectorAll(".nav-link")[3].addEventListener("wheel", (event) => {
  event.currentTarget.style.color = "orange";
  preventDefault()
})
// scroll top paragraphs 5
document.addEventListener("scroll", (event) => {
  document.querySelector(".home p").style.fontSize="xx-large";
})
 