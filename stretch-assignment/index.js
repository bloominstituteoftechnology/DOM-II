
let note = ""

let first = document.querySelector(".block--red")
let firstColor = "red"

let second = document.querySelector(".block--blue")
let secondStyle = document.querySelector(".block--blue").style.backgroundColor
let secondColor = "blue"

let third = document.querySelector(".block--green")
let thirdStyle = document.querySelector(".block--green").style.backgroundColor
let thirdColor = "green"

let fourth = document.querySelector(".block--pink")
let fourthStyle = document.querySelector(".block--pink").style.backgroundColor
let fourthColor = "pink"

let fifth = document.querySelector(".block--gray")
let fifthStyle = document.querySelector(".block--gray").style.backgroundColor
let fifthColor = "gray"

second.addEventListener("click", () => {
  console.log(firstColor)
  console.log(secondColor)
  console.log(secondColor)
  console.log(note)
  note = firstColor
  document.querySelector(".block--red").style.backgroundColor = secondColor;
  firstColor = secondColor;
  second.style.backgroundColor = note;
  secondColor = note;
  console.log(firstColor)
  console.log(secondColor)
  console.log(secondColor)
  console.log(note)
})
