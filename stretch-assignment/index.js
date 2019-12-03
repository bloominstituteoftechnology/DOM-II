
let first = document.querySelector(".block--red")
let firstStyle = document.querySelector(".block--red").style.backgroundColor
let firstColor = "red"

let second = document.querySelector(".block--blue")
let secondStyle = document.querySelector(".block--red").style.backgroundColor
let secondColor = "blue"

let third = document.querySelector(".block--green")
let thirdStyle = document.querySelector(".block--red").style.backgroundColor
let thirdColor = "green"

let fourth = document.querySelector(".block--pink")
let fourthStyle = document.querySelector(".block--red").style.backgroundColor
let fourthColor = "pink"

let fifth = document.querySelector(".block--gray")
let fifthStyle = document.querySelector(".block--red").style.backgroundColor
let fifthColor = "gray"

second.addEventListener("click", () => {
  note = firstColor
  firstStyle = secondColor;
  firstColor = secondColor;
  secondStyle = note;
  secondColor = note;
})
