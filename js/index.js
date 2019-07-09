// Your code goes here

//Title
let header = document.querySelector(".logo-heading")

header.addEventListener('click', event => {
  event.target.style.background = "purple";
  event.stopPropagation()
})

//main-content header
const main = document.querySelector(".main-navigation")

main.addEventListener('click', event => {
  event.target.style.background = "blue";
  event.stopPropagation()
})

main.addEventListener('mouseleave', event => {
  event.target.style.background = "red";
})

//nav
let nav = document.querySelector(".nav")

nav.addEventListener('dblclick', event => {
  event.target.style.color = "white"
  event.preventDefault()
})

//bus img
let busImage = document.querySelector(".intro img")

busImage.addEventListener('drag', event => {
  event.target.style.border = "dashed"
})

busImage.addEventListener('mouseenter', event => {
  event.target.style.border = "solid"
})

let firstParagraph = document.querySelector(".intro h2")
console.log(firstParagraph)

firstParagraph.addEventListener('scroll', event => {
  event.target.style.background = "teal"
})
