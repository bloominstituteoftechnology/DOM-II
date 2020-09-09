// Your code goes here
const cardTitles = document.querySelector(".text-content");
cardTitles.addEventListener("mouseenter", () => {
    cardTitles.style.transform ="scale(1.2)";
})
cardTitles.addEventListener("mouseleave", () => {
    cardTitles.style.transform ="scale(1)";
})
const destiArea = document.querySelector(".content-destination");
destiArea.addEventListener("dblclick", () => {
    destiArea.style.transform ="scale(1.4)";
})
const navTrick = document.querySelector(".main-navigation");
navTrick.addEventListener("mouseover", () => {
    navTrick.style.color ="blue";
})
const backgroundTrick = document.querySelector(".img-content");
backgroundTrick.addEventListener("mouseup", () => {
    backgroundTrick.style.transform ="scale(1.2)";
})
backgroundTrick.addEventListener("mousedown", () => {
    backgroundTrick.style.transform ="scale(1)";
})
const clickTrick = document.querySelector(".footer")
clickTrick.addEventListener("click", () => {
    clickTrick.style.transform ="scale(1.2)";
})
window.addEventListener('resize', () => {
    clickTrick.style.backgroundColor = "blue";
})
window.addEventListener('scroll', () => {
    navTrick.style.backgroundColor = "blue";
})
clickTrick.addEventListener("select", () => {
    clickTrick.style.transform ="scale(1.2)";
})


