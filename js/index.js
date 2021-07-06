const header = document.querySelector("header.main-navigation")
window.addEventListener("load", (_e) => {
    header.style.backgroundColor = "mistyrose"
})
const buttons = document.querySelector(".btn")
buttons.addEventListener("click", (_e) => {
    buttons.style.backgroundColor = "red"
    button.stopPropagation()
    buttons.style.color = "green"
})
buttons.addEventListener("dblclick", (_e) => {
    buttons.style.backgroundColor = "#17A2B8"
})
header.addEventListener("mouseover", (_e) => {
    header.style.backgroundColor = "white"
})
header.addEventListener("mouseout", (_e) => {
    header.style.backgroundColor = "mistyrose"
})
const welcome = document.querySelector(".intro h2")
window.addEventListener("keydown", (event) => {
    if(event.keyCode === 90) {
        return welcome.style.fontSize = "4.5rem"
    }
})
window.addEventListener("focus", (_e) => {
    welcome.style.fontSize = "3.2rem"
})
const bodyText = document.querySelector("body")
bodyText.addEventListener("wheel", (_e) => {
    bodyText.style.color = "#4f4f4f"
})
window.addEventListener("resize", (_e) => {
    bodyText.style.backgroundColor = "mistyrose"
})
const cp = document.querySelector(".destination")
window.addEventListener("scroll", (_e) => {
    cp.style.color = "green"
})

('nav a[href="#"]').click(function (event) {
    event.preventDefault();
  })