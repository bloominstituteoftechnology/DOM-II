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

//First Header
let firstHeader = document.querySelector(".intro h2")

firstHeader.addEventListener('dblclick', event => {
  event.target.style.background = "teal"
})

//Input
let input = document.createElement("input")

input.addEventListener('keydown', event => {
  event.target.style.color = "red"
})

input.addEventListener('keyup', event => {
  event.target.style.color = "teal"
})

input.addEventListener('focus', event => {
  event.target.style.background = "lightblue"
})

firstHeader.appendChild(input)
